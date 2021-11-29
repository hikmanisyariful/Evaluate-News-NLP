async function getApiKey() {
  try {
    const response = await fetch("http://localhost:8081/api");
    const json = await response.json();
    const apiKey = json.apiKey;
    return apiKey;
  } catch (error) {
    console.log("Error::getApiKey", error);
  }
}

export { getApiKey };
