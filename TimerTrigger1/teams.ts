import axios from "axios";
import { MarketData } from "./cmc";

export const postToTeams = async (
  listings: MarketData[]
) => {
  const teamsWebhookUri = process.env.TEAMS_WEBHOOK_URI;
  const facts = listings.map((x) => {
    return { name: x.name, value: `$${x.price}` };
  });
  const postData = {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    themeColor: "d70076",
    summary: "Coinmarketcap ticker",
    sections: [
      {
        activityTitle: "Coinmarketcap ticker",
        facts,
        markdown: true,
      },
    ],
  };
  await axios.post(teamsWebhookUri, postData);
};
