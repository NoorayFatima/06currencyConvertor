import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const json = await res.json();
        setData(json.rates || {}); // Use rates only
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        setData({});
      }
    };

    if (currency) fetchRates();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
