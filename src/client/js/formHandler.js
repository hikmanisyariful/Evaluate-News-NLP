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

function generateInfo(data) {
  const results = document.getElementById("results");
  results.innerHTML = `
    <p>The text analyzed expresses ${generateScoreInfo(
      data.score_tag
    )} sentiment.</p>
    <p>The text is ${generateSubjectivityInfo(data.subjectivity)}</p>
  `;
}

function generateScoreInfo(score_tag) {
  switch (score_tag) {
    case "P+":
      return "strong positive";
    case "P":
      return "positive";
    case "NEU":
      return "neutral";
    case "N":
      return "negative";
    case "N+":
      return "strong negative";
    case "NONE":
      return "without polarity";
    default:
      return "undefined";
  }
}

function generateSubjectivityInfo(subjectivity) {
  if (subjectivity === "SUBJECTIVE") {
    return "subjective, so there are still doubts about the information";
  } else if (subjectivity === "OBJECTIVE") {
    return "objective, so that the information can be justified.";
  }
}

export {
  handleSubmit,
  generateInfo,
  generateScoreInfo,
  generateSubjectivityInfo
};
