"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const amadeusAPI_1 = require("./API-module/amadeusAPI");
async function main() {
    const amadeus = new amadeusAPI_1.Amadeus();
    const flightOffers = await amadeus.getFlightOffers({
        origin: "MAD",
    });
    console.log(flightOffers);
}
main();
