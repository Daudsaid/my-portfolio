// src/FeedbackForm.js
import React, { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const isDisabled = score < 5 && comment.trim().length < 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      onSubmit({ score, comment });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Score:
        <input
          type="range"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />
      </label>

      <label>
        Comments:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;