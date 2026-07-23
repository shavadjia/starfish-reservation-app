const askAiButton = document.querySelector("#askAiButton");
const aiQuestion = document.querySelector("#aiQuestion");
const aiAnswer = document.querySelector("#aiAnswer");

askAiButton?.addEventListener("click", () => {
  const question = aiQuestion.value.trim().toLowerCase();

  if (!question) {
    aiAnswer.textContent = "Please write your question first.";
    return;
  }

  if (question.includes("late") || question.includes("arrival") || question.includes("check")) {
    aiAnswer.textContent = "Late arrival can be supported, but the final check-in instructions and time policy need to be confirmed by Starfish Apartments.";
    return;
  }

  if (question.includes("pay") || question.includes("card") || question.includes("viva")) {
    aiAnswer.textContent = "Online payment is not available yet. Payment options will be added when the reservation service is ready.";
    return;
  }

  if (question.includes("cancel") || question.includes("refund")) {
    aiAnswer.textContent = "Cancellation and refund rules are not finalized yet. Once the policy is confirmed, this assistant can answer those questions automatically.";
    return;
  }

  if (question.includes("guest") || question.includes("people") || question.includes("capacity")) {
    aiAnswer.textContent = "Maximum capacity is 6 people in Apartment 5. Other apartments fit 2 or 4 people depending on the selected unit.";
    return;
  }

  aiAnswer.textContent = "This question is not in the current FAQs. In the live version, this will be sent to an AI model or to Starfish support for a proper answer.";
});
