import { useState } from "react";

function QuizFrom() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("Typing");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          cols="50"
          rows="3"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        ></textarea><br></br>
        <button
          
          disabled={answer.length === 0 || status === "submitting"}
        >
          submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }
}

export default QuizFrom;
