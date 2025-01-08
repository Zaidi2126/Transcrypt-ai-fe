"use client";

import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Translation with High Accuracy",
    description:
      "Translate text into 50+ languages with 90% accuracy, ensuring clear and reliable communication across borders.",
    subTitle: "",
  },
  {
    title: "Transcription with Unmatched Precision",
    description:
      "Achieve 95% accurate real-time speech-to-text transcription, capturing every word with clarity for meetings, lectures, and more.",
    subTitle: "",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      {/* Replaced Typography with div for simplicity */}
      <div className="text-center mb-2 text-orange-500 text-lg font-medium">
        Discover the Future of AI-Powered Communication
      </div>
      <div className="text-center text-blue-gray-900 text-3xl font-bold">
        Why Transcrypt AI?
      </div>
      <div className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500">
        Are you tired of juggling tools for transcription, translation, and
        note-taking? Meet Transcribe AI, the ultimate solution to handle your
        conversations, meetings, and recordings with ease. Powered by
        cutting-edge AI, Transcribe AI converts speech into text seamlessly,
        translates it into multiple languages, and even summarizes meetings
        into actionable insights. Whether you’re managing international teams,
        taking lecture notes, or simplifying your workflow, Transcribe AI is
        here to save you time and effort.
      </div>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Generating Organized Meeting Minutes!"
            subTitle=""
            description="Transform lengthy discussions into structured, actionable meeting minutes with just one click. Transcribe AI organizes your transcriptions into a concise summary, highlighting key points and decisions. Save time and ensure everyone stays on the same page, whether it’s for follow-ups or documentation."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
