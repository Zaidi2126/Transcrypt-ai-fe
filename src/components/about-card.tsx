"use client";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card
      shadow={false}
      placeholder="" // Added placeholder
      onPointerEnterCapture={() => {}} // Added event handler
      onPointerLeaveCapture={() => {}} // Added event handler
    >
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900" 
        placeholder=""                      // <---- Add this
        onPointerEnterCapture={() => {}}    // <---- Add this
        onPointerLeaveCapture={() => {}}    // <---- Add this
      >
        <Typography {...({} as any)} 
          variant="h6"
          className="mb-4 text-center"
          color="white"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          {subTitle}
        </Typography>
        <Typography {...({} as any)} 
          variant="h4"
          className="text-center"
          color="white"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          {title}
        </Typography>
        <Typography {...({} as any)} 
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          placeholder="" // Added placeholder
          onPointerEnterCapture={() => {}} // Added event handler
          onPointerLeaveCapture={() => {}} // Added event handler
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default AboutCard;
