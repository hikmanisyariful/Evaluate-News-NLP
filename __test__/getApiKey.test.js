require("dotenv").config();
import fetch from "cross-fetch";
import "regenerator-runtime/runtime";

describe("GET API KEY", () => {
  test("It should return api key", async () => {
    const response = await fetch("http://localhost:8081/api");
    const json = await response.json();
    const apiKey = json.apiKey;
    expect(apiKey).toBe(process.env.API_KEY);
  });
});
