import React from "react";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosContainer from "containers/TodoContainers/TodosContainer";
import LoginContainer from "containers/AuthContainers/LoginContainer";
import RegisterContainer from "containers/AuthContainers/RegisterContainer";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/todos" element={<TodosContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
