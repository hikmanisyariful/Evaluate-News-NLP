require("dotenv").config();
import "regenerator-runtime/runtime";
import fetch from "cross-fetch";
import { analyzeSentiment } from "../src/client/js/analyzeSentiment.js";
var FormData = require("form-data");

describe("Sentiment Analysis API", () => {
  test("It should return data json", async () => {
    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("txt", "I like jest");
    formData.append("lang", "en");
    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow"
    };

    const response = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      requestOptions
    );
    const json = await response.json();
    expect(json).toHaveProperty("score_tag");
    expect(json).toHaveProperty("subjectivity");
  });

  test("It should return error", async () => {
    const formData = new FormData();
    formData.append("key", "wrongapikey");
    formData.append("txt", "I like jest");
    formData.append("lang", "en");
    try {
      await analyzeSentiment(formData);
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
