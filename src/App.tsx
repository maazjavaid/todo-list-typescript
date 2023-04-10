import React from "react";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosContainer from "containers/TodoContainers/TodosContainer";
import LoginContainer from "containers/AuthContainers/LoginContainer";
import RegisterContainer from "containers/AuthContainers/RegisterContainer";
import ProtectedRoute from "ProtectedRoute";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/todos" element={<TodosContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
