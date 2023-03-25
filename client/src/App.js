import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
