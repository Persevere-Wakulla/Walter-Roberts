import { useNavigate } from "react-router-dom";


const SignOut = ({ setState }) => {

    const navigate = useNavigate();
    const handleSignOut = () => {
        setState(null);
        localStorage.removeItem('user');
        navigate("/");
    };
    return <div>
        <button className="signOutBtn" onClick={handleSignOut}>Sign Out</button>
    </div>
};
export default SignOut