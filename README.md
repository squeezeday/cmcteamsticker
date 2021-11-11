
# CMC Teams Ticker

A simple Azure function that posts cryptocurrency tickers to a Teams channel.

1. Add incoming webhook to your Teams channel
1. Deploy to Azure functions
1. Configure environment settings

Home -> CMC Ticker -> Settings -> Configuration

Add

| Key | Value |
| --- | --- |
| CMC_PRO_API_KEY | [your coinmarketcap api key] |
| TEAMS_WEBHOOK_URI | [your teams webhook api endpoint] |
| CMC_API_URI | https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD |

