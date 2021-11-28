function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  Client.getApiKey().then(apiKey => {
    Client.analyzeSentiment(apiKey, formText).then(data => {
      Client.generateInfo(data);
    });
  });
}

export { handleSubmit };
