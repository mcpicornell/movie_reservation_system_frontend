import { Navigate, Outlet, useLocation } from "react-router-dom";

export const isLoggedIn = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    return !!accessToken;
};

// export const PrivateRoute = () => {
//     const location = useLocation();
//
//     if (location.pathname === "/profile" && !isLoggedIn()) {
//       return <Navigate to="/login" />;
//     }
//     if (location.pathname === "/profile/:id" && !isLoggedIn()) {
//       return <Navigate to="/login" />;
//     }
//     if (location.pathname === "/config/:id" && !isLoggedIn()) {
//       return <Navigate to="/login" />;
//     }
//
//     return <Outlet key={location.pathname}/>;
//   };

export const PrivateRoute = ({ children }) => {
  if (!isLoggedIn()) {
      console.log(isLoggedIn())
    return <Navigate to="/login" />;
  }
  return children;
};