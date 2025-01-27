"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,500+",
    title: "Active Users",
  },
  {
    count: "10+",
    title: "Languages Supported",
  },
  {
    count: "20+",
    title: "Industry Use Cases",
  },
  {
    count: "95%",
    title: "Translation & Transcription Accuracy",
  },
];

export function OurStats() {
  return (
    <section className="bg-gray-200 text-white rounded-3xl container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography {...({} as any)} 
          variant="h6"
          color="orange"
          className="mb-6 font-medium"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          Our Stats
        </Typography>
        <Typography {...({} as any)} 
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          Transcrypt AI  Highlights
        </Typography>
        <Typography {...({} as any)} 
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          Real-Time Speech-to-Text Transcription
          <br />
          Instant Multilingual Translation
          <br />
          Meeting Minutes Generator
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
