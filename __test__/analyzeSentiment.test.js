import "regenerator-runtime/runtime";
var FormData = require("form-data");
import { analyzeSentiment } from "../src/client/js/analyzeSentiment.js";

describe("Sentiment Analysis API", () => {
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
