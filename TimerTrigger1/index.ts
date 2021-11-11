import { AzureFunction, Context } from "@azure/functions";
import { getListings } from "./cmc";
import { postToTeams } from "./teams";

const timerTrigger: AzureFunction = async function (
  context: Context,
  myTimer: any
): Promise<void> {
  var timeStamp = new Date().toISOString();

  context.log("Running timer trigger", timeStamp);

  if (myTimer.isPastDue) {
    context.log("Timer function is running late!");
  }

  try {
    const listings = await getListings();
    try {
      await postToTeams(listings);
    } catch (teamsError) {  
      context.log.error('Error posting to Teams', teamsError);
    }
  } catch (cmcError) {
    context.log.error('Error fetching market listings', cmcError);
  }

};

export default timerTrigger;
