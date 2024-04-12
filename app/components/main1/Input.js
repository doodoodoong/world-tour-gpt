"use client";
import { useCompletion } from "ai/react";

export default function Input({ placeholder }) {
  let { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });

  return (
    <div className="mt-12 flex-col justify-center">
      <div className="mb-12">
        <text className="sm:text-2xl text-xl lg:text-3xl leading-10">
          {completion.replace(/(?=\d)/g, "\n")}
        </text>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full h-14 p-3 box-border rounded-3xl bg-[#323232] text-[#c2c2c2] text-xl font-[500]"
            value={input}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
          <button type="submit" className="hidden">
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
}
