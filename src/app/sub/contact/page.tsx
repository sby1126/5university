"use client";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";
import { useState } from "react";

const nanum = Kanit({ weight: "400", subsets: ["latin"] });

interface Mail  {
  subject : string;
  content : string;
  senderName : string;
  senderMail : string;
}
export default function ArtsPage() {
  const init:Mail = {
    subject :"",
    content : "",
    senderName : "",
    senderMail : "",
  };
  const [mail, setMail] = useState<Mail>(init);
  const [name, setName] = useState<string>("");
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setMail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mail); // 수정 예정 코드
  };

  return (
    <div className={nanum.className}>
      <div className="px-10 py-20 flex justify-center items-center">
        <form className="w-full max-w-[40rem] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5 w-full justify-center items-center">
            <div className="grid gap-1 place-items-center items-center justify-center">
              <span className="text-[1.5rem] lg:text-[2rem]">
                Contact the Artist
              </span>
              <span className="text-[1rem] lg:text-[1.5rem] text-gray-300">
                Fill up the form below to send a message.
              </span>
            </div>
            <motion.input
              className="border-white rounded-lg p-3 text-gray-950 w-full"
              placeholder="Name(Required)"
              name="senderName"
              value={mail.senderName}
              onChange={onChange}
            />
            <motion.input
              className="border-white rounded-lg p-3 text-gray-950 w-full"
              placeholder="Email(Required)"
              name="senderMail"
              value={mail.senderMail}
              onChange={onChange}
            />
            <motion.input
              className="border-white rounded-lg p-3 text-gray-950 w-full"
              placeholder="Subject(Required)"
            />
            <motion.textarea
              className="border-white rounded-lg p-3 text-gray-950 h-50 w-full"
              placeholder="Type your message here...(Required)"
            />
            <div className="flex justify-end w-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="border-solid border-2 rounded-lg border-white text-white px-5 py-2 text-[1rem] lg:text-[1.5rem] cursor-pointer"
              >
                SUBMIT
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
