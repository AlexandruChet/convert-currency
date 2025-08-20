import { useState } from "react";
import "./App.css";

function App() {
  const default_rates: Record<string, number> = {
    USD: 1,
    EUR: 0.91,
    UAH: 42.1,
    GBP: 0.77,
    PLN: 3.91,
    JPY: 146.8,
    AUD: 1.54,
    CAD: 1.34,
    CHF: 0.86,
    CNY: 7.24,
    SEK: 10.52,
    NOK: 10.73,
    DKK: 6.78,
    INR: 83.1,
    BRL: 5.05,
    ZAR: 18.6,
    NZD: 1.68,
    AED: 3.67,
    AFN: 85.0,
    ALL: 100.5,
    AMD: 395.0,
    AOA: 830.0,
    ARS: 380.0,
    AWG: 1.79,
    AZN: 1.7,
    BAM: 1.85,
    BBD: 2.0,
    BDT: 110.0,
    BGN: 1.78,
    BHD: 0.38,
    BMD: 1.0,
    BND: 1.35,
    BOB: 6.9,
    BOV: 6.9,
    BSD: 1.0,
    BTN: 83.0,
    BWP: 13.0,
    BYN: 2.5,
    BZD: 2.0,
    CLP: 820.0,
    CRC: 560.0,
    CUP: 25.0,
    CVE: 110.0,
    CZK: 23.5,
    DJF: 178.0,
    DOP: 56.0,
    DZD: 140.0,
    EGP: 31.0,
    ETB: 55.0,
    FJD: 2.2,
    GEL: 2.6,
    GHS: 11.0,
    GIP: 0.77,
    GMD: 65.0,
    GTQ: 7.8,
    HKD: 7.8,
    HNL: 24.5,
    HRK: 6.9,
    HUF: 355.0,
    ILS: 3.6,
    ISK: 139.0,
    JMD: 160.0,
    JOD: 0.71,
    KES: 155.0,
    KWD: 0.31,
    KZT: 460.0,
    LKR: 310.0,
    LSL: 18.5,
    LYD: 4.8,
    MAD: 9.8,
    MDL: 19.0,
    MKD: 56.0,
    MUR: 45.0,
    MVR: 15.5,
    MXN: 17.0,
    MYR: 4.6,
    MZN: 65.0,
    NAD: 18.5,
    NIO: 36.0,
  };

  const [amount, setAmount] = useState<number | undefined>(undefined);

  const [currency, setCurrency] = useState<string>("");

  const [result, setResult] = useState<number | undefined>(undefined);

  function processing() {
    if (currency && amount !== undefined) {
      const rate = default_rates[currency];

      if (rate !== undefined) {
        setResult(amount * rate);
      } else {
        alert("Error not found");
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">Currency Converter</h1>
      <form
        className="converter-form"
        onSubmit={(e) => {
          e.preventDefault();
          processing();
        }}
      >
        <label>
          <span>Amount</span>
          <input
            className="write-amount"
            type="number"
            placeholder="Enter amount"
            value={amount ?? ""}
            onChange={(e) =>
              setAmount(
                e.target.value === "" ? undefined : Number(e.target.value)
              )
            }
          />
        </label>

        <label>
          <span>Currency </span>
          <input
            type="text"
            placeholder="e.g. USD, EUR"
            value={currency}
            onChange={(e) => setCurrency(e.target.value.trim().toUpperCase())}
            className="currency"
          />
        </label>

        <button type="submit">Convert</button>

        <label>
          <span>Converted Amount</span>
          <input type="text" id="new-currency" value={result ?? ""} readOnly />
        </label>
      </form>
    </div>
  );
}

export default App;
