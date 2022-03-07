import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinValue, setCoinValue] = useState(0);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])

  const onChange = (event) => setMoney(event.target.value);
  const coinChange = (event) => setCoinValue(event.target.value);
  
  return (
    <div>
      <h1>Coin Changer {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <select onChange={coinChange}>
          <option>----Select Coin----</option>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}):{coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      }
      <hr />

      <div>
        <input
          onChange={onChange}
          type="number"
          placeholder="How much you have?"
        />
      </div>
      <h1>
        {(money !== 0 && coinValue !== 0) ? (money / coinValue) : null}
      </h1>

    </div>

  );
}


export default App;
