function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const isUrl = isUrlValid(formText);
  if (!isUrl) {
    alert("Please input the right url or the input field cannot be blank!");
  } else {
    Client.getApiKey().then(apiKey => {
      const formData = new FormData();
      formData.append("key", apiKey);
      formData.append("txt", formText);
      formData.append("lang", "auto");
      Client.analyzeSentiment(formData).then(data => {
        generateInfo(data);
      });
    });
  }
}

function isUrlValid(userInput) {
  var res = userInput.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
}

function generateInfo(data) {
  const results = document.getElementById("results");
  results.innerHTML = `
    <p>Score: The text analyzed expresses ${generateScoreInfo(
      data.score_tag
    )} sentiment.</p>
    <p>Subjectivity: The text is ${generateSubjectivityInfo(
      data.subjectivity
    )}</p>
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
