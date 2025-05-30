import React from "react";
import Input from "../components/Forms/Input";
import styles from "./Home.module.css"; // Assuming you have a CSS module for styles
import Button from "../components/Forms/Button";

const Home = ({ calcImc }) => {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setHeight(updateValue);
  };

  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setWeight(updateValue);
  };

  const clearFields = (e) => {
    e.preventDefault();
    // Clear the input fields
    setHeight("");
    setWeight("");
  };

  return (
    <div className={`${styles.home}`}>
      <form className={`container ${styles.form}`}>
        <h1>Digite os dados para calcular</h1>
        <Input
          label="Altura"
          type="text"
          placeholder="Exemplo 1,75"
          id="height"
          name="height"
          value={height}
          setValue={setHeight}
          onChange={(e) => handleHeightChange(e)}
        />
        <Input
          label="Peso"
          type="text"
          placeholder="Exemplo 70,5"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => handleWeightChange(e)}
          setValue={setWeight}
        />
        <div className={styles.action_control}>
          <Button action={(e) => calcImc(e, height, weight)}>
            Calcular IMC
          </Button>
          <Button action={clearFields}>Limpar</Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
