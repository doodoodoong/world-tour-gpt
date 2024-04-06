"use client";
import { useCompletion } from "ai/react";

export default function Input() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });
  return (
    <div>
      <p>{completion.split("\n")}</p>
      <form onSubmit={handleSubmit}>
        <label>
          여행장소를 입력해주세요
          <input value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
}
