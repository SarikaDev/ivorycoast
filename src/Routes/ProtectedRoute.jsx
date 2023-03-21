import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const auth = JSON.parse(sessionStorage.getItem("Details"));
//   const passwordChangeRequest = JSON.parse(
//     sessionStorage.getItem("passwordChangeRequest"),
//   );
//   console.log("passwordChangeRequest", passwordChangeRequest);
//   const accessToken = auth?.identityNumber;
//   if (passwordChangeRequest === true) {
//     return false;
//   }
//   if (!!accessToken) {
//     return true;
//   } else if (
//     accessToken === null ||
//     accessToken === undefined ||
//     passwordChangeRequest === true
//   ) {
//     return false;
//   }
// };

const ProtectedRoutes = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
