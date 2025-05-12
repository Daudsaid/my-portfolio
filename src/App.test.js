// src/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";
import "@testing-library/jest-dom";

test("prevents submission with score < 5 and short comment", () => {
  const handleSubmit = jest.fn();
  render(<FeedbackForm onSubmit={handleSubmit} />);

  const scoreInput = screen.getByLabelText(/score/i);
  fireEvent.change(scoreInput, { target: { value: "3" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});

test("allows submission with score < 5 and valid comment", () => {
  const handleSubmit = jest.fn();
  render(<FeedbackForm onSubmit={handleSubmit} />);

  const scoreInput = screen.getByLabelText(/score/i);
  fireEvent.change(scoreInput, { target: { value: "3" } });

  const commentInput = screen.getByLabelText(/comments/i);
  fireEvent.change(commentInput, {
    target: { value: "The pizza was too salty." },
  });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    score: 3,
    comment: "The pizza was too salty.",
  });
});