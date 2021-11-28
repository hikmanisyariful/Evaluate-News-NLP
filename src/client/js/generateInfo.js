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
    default:
      return "without polarity";
  }
}

function generateSubjectivityInfo(subjectivity) {
  if (subjectivity === "SUBJECTIVE") {
    return "subjective, so there are still doubts about the information";
  } else if (subjectivity === "OBJECTIVE") {
    return "objective, so that the information can be justified.";
  }
}

export { generateInfo };
