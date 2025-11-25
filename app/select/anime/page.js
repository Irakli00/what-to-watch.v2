"use client";
import { QuestionContext } from "@/app/_components/QuestionsContext";
import { useContext } from "react";

export default function Page() {
  const { questionNum, setQuestionNum, animeQs } = useContext(QuestionContext);
  const currentQuestion = animeQs[questionNum];
  const questionText = currentQuestion.questions.qText;
  const questionOptions = currentQuestion.questions.options;

  console.log(questionOptions);

  return (
    <form
      className={`flex flex-col mt-[20dvh] items-center gap-10 p-12  rounded-3xl shadow-xl mx-auto `}
    >
      <label
        htmlFor="selectedOption"
        className={`text-4xl font-extrabold text-center`}
      >
        {questionText}
      </label>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {questionOptions.map((q) => (
          <button
            onClick={() => setQuestionNum((p) => p + 1)} //find followups here
            key={q.value}
            className={`flex-1 px-10 py-6 text-2xl rounded-2xl shadow-lg md:text-2xl font-semibold  transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {q.text}
          </button>
        ))}
      </div>

      {/* <input type="hidden" /> */}
    </form>
  );
}
