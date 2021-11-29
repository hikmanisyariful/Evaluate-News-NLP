import "regenerator-runtime/runtime";
import { getApiKey } from "../src/client/js/getApiKey.js";

describe("GET API KEY", () => {
  test("It should return error", async () => {
    try {
      await getApiKey();
    } catch (e) {
      expect(e).toMatch("error");
    }
  });
});
