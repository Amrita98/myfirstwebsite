import React from "react";
import "./App.scss";
import Routes from "./routes";
import { HashRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes />
    </HashRouter>
  );
}
