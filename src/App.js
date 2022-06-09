import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import CreateMemoryForm from "./components/Form/CreateMemoryForm";
import LoginForm from "./components/Form/LoginForm";
import Header from "./components/Header";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories/:id" element={<PostDetails />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/forms-create-memories" element={<CreateMemoryForm />} />
      </Routes>
    </main>
  );
}

export default App;
