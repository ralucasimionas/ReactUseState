import "./App.css";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("red");
  // bgColor este variabila, iar setBgColor este functia prin care se seteaza variabila bgColor
  // parametrul pentru useState este prima variabila(culoare) pe care bgColor o va avea

  // let bgColor = "green";
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [product, setProduct] = useState({
    name: "Aspirator Zanussi",
    price: 1500,
  });

  const [celsiusTemperature, setCelsiusTemperature] = useState(0);

  const [fahrenheitTemperature, setFahrenheitTemperature] = useState(32);

  function handleButtonClick() {
    console.log("Am apasat butonul");
    alert("Salut. Ai apasat butonul!");

    console.log("bgColor:", bgColor);

    setBgColor("green");

    console.log("bgColor:", bgColor);
  }

  function handleOnColorChange(event) {
    const newColor = event.target.value;

    setBgColor(newColor);
  }

  function handleToggleMenu() {
    // Varianta 1
    // if (isMenuVisible === true) {
    //   setMenuVisible(false);
    // } else {
    //   setMenuVisible(true);
    // }

    // Varianta 2
    const newToggleValue = isMenuVisible ? false : true;
    setMenuVisible(newToggleValue);

    // Varianta 3
    // const newToggleValue = !isMenuVisible;
    // setMenuVisible(newToggleValue);

    // Varianta 3 pe scurt
    // setMenuVisible(!isMenuVisible);

    // Varianta 4
    // setMenuVisible((pervValue) => { return !pervValue});
  }

  function handlePriceChange() {
    const newPrice = Math.round(Math.random() * 500 + 1000);

    console.log("Product:", product);

    // Varianta 1
    // product.price = newPrice;
    // const newProduct = {
    //   name: product.name,
    //   price: product.price,
    // };

    // Varianta 2
    product.price = newPrice;
    // const newProduct = { ...product };

    // Varianta 3
    const newProduct = {
      ...product,
      price: newPrice,
    };

    setProduct(newProduct);
  }

  function handleCelsiusChange(event) {
    const celsiusTemperature = event.target.value;

    const fahrenheitTemperature = Math.round(celsiusTemperature * 1.8 + 32);

    setCelsiusTemperature(celsiusTemperature);
    setFahrenheitTemperature(fahrenheitTemperature);
  }

  function handleFahrenheitChange(event) {
    const fahrenheitTemperature = event.target.value;

    const celsiusTemperature = Math.round((fahrenheitTemperature - 32) / 1.8);

    setFahrenheitTemperature(fahrenheitTemperature);
    setCelsiusTemperature(celsiusTemperature);
  }

  return (
    <div className="App">
      {/* functiile care trateaza evenimente e recomandat sa fie denumite cu handle */}
      <button
        onClick={() => {
          console.log("Salut!");
        }}
        onDoubleClick={handleButtonClick}
      >
        Click me!
      </button>

      <div
        style={{
          backgroundColor: bgColor,
          margin: "20px",
          paddingTop: "40px",
        }}
        onClick={() => {
          alert("Ai apasat pe div!");
        }}
      >
        Apasa aici!
      </div>

      <input type="color" onChange={handleOnColorChange} />

      <div>
        <button onClick={handleToggleMenu}>My Mini Menu</button>
        <ul
          style={{
            visibility: isMenuVisible ? "visible" : "hidden",
          }}
        >
          <li>Optiunea 1</li>
          <li>Optiunea 2</li>
        </ul>
      </div>

      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <button onClick={handlePriceChange}>Schimba pretul!</button>
      </div>

      <div>
        <label>Temperatura in grade Celsius:</label>
        <input
          type="text"
          value={celsiusTemperature}
          onChange={handleCelsiusChange}
        ></input>

        <label>Temperatura in grade Fahrenheit:</label>
        <input
          type="text"
          value={fahrenheitTemperature}
          onChange={handleFahrenheitChange}
        ></input>
      </div>
    </div>
  );
}

export default App;
