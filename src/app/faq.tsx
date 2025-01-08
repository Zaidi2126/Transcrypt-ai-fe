"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1.What is Transcribe AI, and how does it work?",
    desc: "Transcribe AI is an advanced app designed to transcribe speech into text, translate it into multiple languages, and summarize meeting notes. It uses state-of-the-art AI to ensure accuracy and speed. Simply start the app, choose your input and target languages, and let the AI do the rest in real-time.",
  },
  {
    title: "2. Is Transcribe AI suitable for non-English languages?",
    desc: "Yes! Transcribe AI supports multiple languages, including English, Urdu, Chinese, French, Spanish, and more. Whether you need transcription, translation, or both, Transcribe AI ensures accurate results across different languages.",
  },
  {
    title: "3. Can I edit the transcriptions and translations?",
    desc: "Absolutely! You can edit both transcriptions and translations directly within the app. Each chat bubble has an option to toggle edit mode, making it easy to refine or correct the text before saving or sharing.",
  },
  {
    title: "4. Is my data secure when using Transcribe AI?",
    desc: "Yes, your privacy is our top priority. Transcribe AI processes transcriptions and translations securely, and your data is not shared with third parties. You also have full control over saving or deleting your logs.",
  },
  {
    title: "5. Can I use Transcribe AI to generate meeting minutes?",
    desc: "Yes! Transcribe AI has a powerful meeting minutes generator. It compiles key points from transcriptions and translations into concise, structured summaries, saving you time and ensuring nothing is missed during your discussions.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Welcome to the AI Conference 2023 FAQ section. We&apos;re here to
            address your most common queries and provide you with the
            information you need to make the most of your conference experience.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
