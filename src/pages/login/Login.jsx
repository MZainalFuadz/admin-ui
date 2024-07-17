import "./login.scss";
import { useContext,useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Login =() =>{
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext);
    const { darkMode, dispatch: darkModeDispatch } = useContext(DarkModeContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user; 
            dispatch({type:"LOGIN", payload:user});
            console.log(user);
            navigate("/");
        })
        .catch((error) => {
            setError(true);
        });
    };

    return(
        <div className="login">
      <form data-testid="form" onSubmit={handleLogin}>
        <input
          id="email"
          type="email"
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testid="submit" >Login</button>
        {error && <span>Wrong email or password!</span>}
        {darkMode ? (
          <LightModeOutlinedIcon
            className="icon"
            onClick={() => darkModeDispatch({ type: 'TOGGLE' })}
          />
        ) : (
          <DarkModeOutlinedIcon
            className="icon"
            onClick={() => darkModeDispatch({ type: 'TOGGLE' })}
          />
        )}
      </form>
    </div>
    );
};
export default Login