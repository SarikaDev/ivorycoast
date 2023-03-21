import HandleRoutes from "./Routes/HandleRoutes";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <ToastContainer
        closeOnClick={true}
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
      />

      <HandleRoutes />
    </>
  );
};

export default App;
