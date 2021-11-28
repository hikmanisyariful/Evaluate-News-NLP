function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  // Client.checkForName(formText);

  getApiKey().then(apiKey => {
    analyzeSentiment(apiKey, formText);
  });

  // console.log("::: Form Submitted :::");
  // fetch("http://localhost:8081/test")
  //   .then(res => res.json())
  //   .then(function(res) {
  //     document.getElementById("results").innerHTML = res.message;
  //   });
}

async function getApiKey() {
  try {
    const response = await fetch("http://localhost:8081/api");
    const json = await response.json();
    const apiKey = json.apiKey;
    return apiKey;
  } catch (error) {
    console.log("Error::getApiKey", error.response.data);
  }
}

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
  } catch (error) {
    console.log("Error::analysisSentiment", error);
  }
}

export { handleSubmit };
