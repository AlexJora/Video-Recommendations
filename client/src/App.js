import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewVideo from "./pages/ViewOneVideo";
import Error from "./pages/Error";
import ViewOneVideo from "./pages/ViewOneVideo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact index element={<Home />} />
          <Route path="/post/:id" element={<ViewOneVideo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
