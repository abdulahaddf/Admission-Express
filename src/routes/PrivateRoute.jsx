/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Shared/Loader/Loader";
import Swal from "sweetalert2";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(!user){
     
            Swal.fire("You need to log in first")
      
    }
    
    if(loading) return <Loader></Loader>
    if(user) { 
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;