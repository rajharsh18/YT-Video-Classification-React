import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
// Loading component
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const HomeScreen = React.lazy(() => import("./HomeScreen.jsx"));

const MainApp = () => {
  return (
    <Suspense fallback={<LoadingSpinner isVisible={true} />}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
