import MyDatatable from "../../components/datatable/MyDatatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./mylist.scss";


const MyList = () => {
    return (
      <div className="mylist">
        <Sidebar />
        <div className="mylistContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="product"/>
            <Widget type="category"/>
          </div>
          <MyDatatable />
        </div>
          
      </div>
    );
  };
  
  export default MyList;