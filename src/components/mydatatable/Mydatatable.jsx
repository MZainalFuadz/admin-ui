import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { collection,onSnapshot,deleteDoc,doc } from "firebase/firestore";
import { db } from "../../firebase";

const Mydatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "categories"), // Ganti 'categories' dengan nama koleksi Anda
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "categories", id)); // Ganti 'categories' dengan nama koleksi Anda
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <span
              className="deleteButton"
              data-testid="deleteButton" 
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </span>
          </div>
        );
      },
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
  ];

  return (
    <div className="mydatatable">
      <div className="datatableTitle">
        CATEGORIES
        <Link to="/categories/new" className="link" data-testid="add-new">Add New</Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
