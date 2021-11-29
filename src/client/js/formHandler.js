function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.getApiKey().then(apiKey => {
    const formData = new FormData();
    formData.append("key", apiKey);
    formData.append("txt", formText);
    formData.append("lang", "en");
    Client.analyzeSentiment(formData).then(data => {
      Client.generateInfo(data);
    });
  });
}

export { handleSubmit };
