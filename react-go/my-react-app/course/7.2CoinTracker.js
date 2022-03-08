import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(1);
  const [coinCost, setCoinCost] = useState(1);
 
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  const selectHandle = (event) => {
    setCoinCost(event.target.value);
    setMoney(1);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  
  return (
    <div>
      <h1>Coin Changer {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <select onChange={selectHandle}>
          <option>----select coin----</option>
          {coins.map((coin, index) => 
            <option
            key ={index}
            value={coin.quotes.USD.price}
            id = {coin.simbol}
            >
              {coin.name} ({coin.symbol}):{coin.quotes.USD.price} USD
            </option>
          )}
        </select>
      }
      <hr />
      <div>
      <input 
          type= "number"
          placeholder= "How much do you have??"
          onChange = {onChange}
        />
      </div>
      
      <h2>you can get {money!==1?(money / coinCost):null}</h2>   
    </div>
    

  );
}


export default App;
