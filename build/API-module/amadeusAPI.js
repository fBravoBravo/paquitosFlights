"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amadeus = void 0;
class Amadeus {
    constructor() {
        this.baseurl = "https://test.api.amadeus.com/v1";
        this.token = this.getToken();
    }
    async getToken() {
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        const body = {
            grant_type: "client_credentials",
            client_id: process.env.API_KEY,
            client_secret: process.env.API_SECRET,
        };
        console.log(JSON.stringify(body));
        const urlAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";
        //init token
        const response = await fetch(urlAuth, {
            method: "POST",
            headers: headers,
            body: "grant_type=client_credentials&client_id=" +
                body.client_id +
                "&client_secret=" +
                body.client_secret,
        });
        const data = await response.json();
        const token = data.access_token;
        const bearerString = `Bearer ${token}`;
        console.log(bearerString);
        return bearerString;
    }
    async getFlightOffers(config) {
        const url = this.baseurl + "/shopping/flight-destinations?";
        const queryParameters = objectToQueryString(config);
        const urlWithParams = url + queryParameters;
        console.log(urlWithParams);
        const headers = {
            Authorization: await this.token,
        };
        const response = await fetch(urlWithParams, {
            method: "GET",
            headers: headers,
        });
        console.log(response);
        const data = await response.json();
        const flightsOffers = data.data;
        return flightsOffers;
    }
}
exports.Amadeus = Amadeus;
function objectToQueryString(obj) {
    return Object.keys(obj)
        .map((key) => key + "=" + obj[key])
        .join("&");
}
