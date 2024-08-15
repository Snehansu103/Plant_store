import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute= ({children}) =>{
    const user = useSelector(state => state.loggedUser);
    if(user.role === 'admin' || user.role ==='user'){
        return children
    }
    return <Navigate to={'/'} />

}

export default PrivateRoute