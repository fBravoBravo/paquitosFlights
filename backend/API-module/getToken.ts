import * as dotenv from "dotenv";
dotenv.config();

export async function getToken() {
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = {
    grant_type: "client_credentials",
    client_id: process.env.API_KEY,
    client_secret: process.env.API_SECRET,
  };

  const uriAuth = "https://test.api.amadeus.com/v1/security/oauth2/token";
  //init token
  const response = await fetch(uriAuth, {
    method: "POST",
    headers: headers,
    body:
      "grant_type=client_credentials&client_id=" +
      body.client_id +
      "&client_secret=" +
      body.client_secret,
  });
  const data = await response.json();
  const token = data.access_token;
  const bearerString = `Bearer ${token}`;
  return bearerString;
}



