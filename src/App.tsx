import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import Parameter from "./components/Parameter";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ClassComponent subtitle="Primo componente" />
              <ClassComponent subtitle="Secondo componente" color="red" />
            </>
          }
        />
        <Route
          path="/functional"
          element={
            <>
              <FunctionalComponent subtitle="Primo componente a funzione" />
              <FunctionalComponent subtitle="Secondo componente a funzione" />
            </>
          }
        />
        <Route
          path="/parameters/:lat/:lon"
          element={
            <>
              <Parameter />
            </>
          }
        />
        <Route
          path="/form"
          element={
            <>
              <FormComponent />
            </>
          }
        />
        <Route
          path="/fetch"
          element={
            <>
              <FetchComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
