import "dotenv/config";
import { Amadeus } from "./API-module/amadeusAPI";

async function main() {
  const amadeus = new Amadeus();
  const flightOffers = await amadeus.getFlightOffers({
    origin: "MAD",
  });

  console.log(flightOffers);
}
main();
