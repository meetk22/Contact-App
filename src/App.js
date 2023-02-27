import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./component/Todo";

function App(){
    return(
        <>
          <Todo></Todo>
        </>
    )
}
export default App;