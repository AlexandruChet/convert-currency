💱 Currency Converter App

# A simple React + TypeScript currency converter.
Enter an amount and a currency code (e.g. EUR, JPY, GBP), and the app will convert it using predefined exchange rates.

# 🚀 Features

# Convert from over 70 world currencies 🌍

### Quick conversion to USD

### Simple, minimal design

### Built with React + TypeScript (TSX)

### Clean state management with useState

# 🛠️ How It Works

### Enter an amount (e.g., 100)

### Enter a currency code (e.g., EUR, JPY, PLN)

### Click Convert

### The converted amount in USD will be displayed ✅

```
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
```
# 🌟 First Commit

### This is my first commit 🚀 — the beginning of a small but powerful React + TypeScript project!