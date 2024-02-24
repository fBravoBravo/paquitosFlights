import { getToken } from "./API-calls";

async function main() {
  const token = await getToken();

  console.log(token);
}
main();
