"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { FaWindows, FaApple } from "react-icons/fa"; // Icons for Windows and Mac

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            Transcrypt AI
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Transcribe, Translate, Simplify: Your Words, Perfectly Captured.
          </Typography>
          <div className="flex items-center gap-4">
            {/* Windows Button */}
            <Button
              variant="gradient"
              color="white"
              className="flex items-center gap-2"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1kkuv4BRs3p_anhJVmDfvlbfpSHyFUbh4', '_blank')}
            >
              <FaWindows className="text-lg" /> Download for Windows
            </Button>

            {/* Mac Button */}
            <Button
              variant="gradient"
              color="white"
              className="flex items-center gap-2"
              onClick={() => window.open('https://your-hosted-link-for-mac-file.com', '_blank')}
            >
              <FaApple className="text-lg" /> Download for Mac
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
