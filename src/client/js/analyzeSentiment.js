async function analyzeSentiment(formData) {
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
    return json;
  } catch (error) {
    console.log("Error::analysisSentiment", error);
  }
}

export { analyzeSentiment };
