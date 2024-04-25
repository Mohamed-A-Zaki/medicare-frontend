"use client";

import { useState } from "react";
import { Group } from "@mantine/core";
import { FaMinus, FaPlus } from "react-icons/fa6";
import IQuestion from "@/types/question";

export default function FaqItem({ question, answer }: IQuestion) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border p-3 rounded-md my-2">
      <Group justify="space-between">
        <div>{question}</div>
        {open ? (
          <FaMinus
            size={30}
            className="p-2 border rounded-md cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300"
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          <FaPlus
            size={30}
            className="p-2 border rounded-md cursor-pointer hover:bg-primaryColor hover:text-white transition duration-300"
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </Group>

      {open && <p className="text-textColor text-sm mt-3">{answer}</p>}
    </div>
  );
}
