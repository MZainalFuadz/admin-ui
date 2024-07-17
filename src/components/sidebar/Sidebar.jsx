import "./sidebar.scss";
import { Link, useNavigate} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const { dispatch: authDispatch }= useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () =>{
    signOut(auth)
      .then(()=> {
        authDispatch({type: "LOGOUT"});
        navigate("/login");//kembali ke login page setelah logout
      })
      .catch((error) => {
        console.error("Logout error: ",error);
      });    
  };
  
  return(
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/users">
            <li>
              <PermIdentityIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <Inventory2Icon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <HomeWorkIcon className="icon"/>
            <span>Orders</span>
          </li>
          <Link to="/categories"> {/* Tambahkan tautan menu ke halaman kategori */}
            <li>
              <CategoryIcon className="icon"/> {/* Tambahkan ikon kategori */}
              <span>Categories</span> {/* Tambahkan teks kategori */}
            </li>
          </Link>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"  onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
};

export default Sidebar;