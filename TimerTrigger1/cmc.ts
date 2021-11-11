import axios from "axios";

export interface MarketData {
  name: string;
  price: number;
  change: number;
}

export const getListings = async (): Promise<MarketData[]> => {
  const cmcApiUri = process.env.CMC_API_URI;
  const cmcApiKey = process.env.CMC_PRO_API_KEY;
  const marketData: MarketData[] = [];
  try {
    const { data } = await axios.get(cmcApiUri, {
      headers: {
        "X-CMC_PRO_API_KEY": cmcApiKey,
      },
    });
    data.data.forEach((row) => {
      marketData.push({
        name: row.name,
        price: Math.round(row.quote.USD.price * 100) / 100,
        change: Math.round(row.quote.USD.percent_change_24h * 100) / 100,
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  return marketData;
};
