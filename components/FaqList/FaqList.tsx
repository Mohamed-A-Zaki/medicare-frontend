"use client";

import FaqItem from "../FaqItem";
import IQuestion from "@/types/question";

const questions: IQuestion[] = [
  {
    id: 1,
    question: "What is your medical care?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quod exercitationem natus expedita quam soluta officiis itaque sunt sed officia ipsum consequatur iure sit nulla unde corporis inventore, aut earum!",
  },
  {
    id: 2,
    question: "What is your medical care?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quod exercitationem natus expedita quam soluta officiis itaque sunt sed officia ipsum consequatur iure sit nulla unde corporis inventore, aut earum!",
  },
  {
    id: 3,
    question: "What is your medical care?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quod exercitationem natus expedita quam soluta officiis itaque sunt sed officia ipsum consequatur iure sit nulla unde corporis inventore, aut earum!",
  },
  {
    id: 4,
    question: "What is your medical care?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quod exercitationem natus expedita quam soluta officiis itaque sunt sed officia ipsum consequatur iure sit nulla unde corporis inventore, aut earum!",
  },
];

export default function FaqList() {
  return (
    <div className="mt-5">
      {questions.map((item) => {
        return <FaqItem key={item.id} {...item}/>;
      })}
    </div>
  );
}
