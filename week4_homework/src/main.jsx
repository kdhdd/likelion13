import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./layouts/MyLayout";
import SettingLayout from "./layouts/SettingLayout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
        <Route path="/account" element={<MyLayout />} />
        <Route path="/setting" element={<SettingLayout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
