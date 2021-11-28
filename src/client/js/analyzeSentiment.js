async function analyzeSentiment(apiKey, textInput) {
  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("txt", textInput);
  formData.append("lang", "en");

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow"
  };

  try {
    const response = await fetch(
      "https://api.meaningcloud.com/sentiment-2.1",
      requestOptions
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("Error::analysisSentiment", error);
  }
}

export { analyzeSentiment };
