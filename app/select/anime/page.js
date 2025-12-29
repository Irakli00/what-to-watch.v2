"use client";
import { QuestionContext } from "@/app/_components/QuestionsContext";
import { detectFollowUps } from "@/app/_utils/helpers";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { questionNum, setQuestionNum, animeQs } = useContext(QuestionContext);

  const [currentQuestion, setCurrentQuestion] = useState(animeQs[questionNum]);

  useEffect(() => {
    if (animeQs.length <= questionNum) {
      // router.push("/");
      console.log("lol");
    }
  }, [animeQs.length, questionNum, router]);

  if (animeQs.length <= questionNum) return null;

  const questionText = currentQuestion.questions.qText;
  const questionOptions = currentQuestion.questions.options;

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
        {questionOptions.map((q, i) => (
          <button
            onClick={() => {
              const followUps = detectFollowUps(q);
              console.log(q.value);

              if (!followUps) {
                setQuestionNum((p) => p + 1);
                setCurrentQuestion(animeQs[questionNum + 1]);
              } else {
                setCurrentQuestion(followUps[0]);
              }
            }}
            key={q.value || i}
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
