import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { data } from "./data/data"; // Importing the data array
import ImcTable from "./components/Forms/ImcTable";

function App() {
  const [imc, setImc] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [infoClass, setInfoClass] = React.useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setDescription(item.description);
        setInfoClass(item.infoClass);
      }

      if (!description) return;
    });
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setDescription("");
    setInfoClass("");
  };

  return (
    <>
      <Header />
      {!imc ? (
        <Home calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          description={description}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
