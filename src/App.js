import React from 'react';
import Main from  './sections/main';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  

function App() {
  return (
    <div>
       <ToastContainer position="top-center" autoClose={3000} />
      <Main />
    </div>
  );
}

export default App;
