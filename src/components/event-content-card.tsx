import Image from "next/image";
import { StaticImageData } from "next/image";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: StaticImageData;
}

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end"
      placeholder=""                      /* <--- add this */
      onPointerEnterCapture={() => {}}    /* <--- add this */
      onPointerLeaveCapture={() => {}}    /* <--- add this */
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
        placeholder=""                      /* <--- add this */
        onPointerEnterCapture={() => {}}    /* <--- add this */
        onPointerLeaveCapture={() => {}}    /* <--- add this */
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody
        className="col-span-full lg:col-span-3"
        placeholder=""                      /* <--- optional if CardBody complains */
        onPointerEnterCapture={() => {}}    /* <--- optional if CardBody complains */
        onPointerLeaveCapture={() => {}}    /* <--- optional if CardBody complains */
      >
        <Typography {...({} as any)}  {...({} as any)}  variant="h6" color="blue-gray" className="mb-4">
          {panel}
        </Typography>
        <Typography {...({} as any)}  {...({} as any)}   variant="h2" color="blue-gray" className="mb-4 font-medium">
          {title}
        </Typography>
        <Typography {...({} as any)}  {...({} as any)}  className="mb-12 md:w-8/12 font-medium !text-gray-500"
          placeholder=""                    // ← Add this
          onPointerEnterCapture={() => {}}  // ← Add this
          onPointerLeaveCapture={() => {}}  // ← Add this
          >
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
            placeholder=""                    // ← Add this
            onPointerEnterCapture={() => {}}  // ← Add this
            onPointerLeaveCapture={() => {}}  // ← Add this
          />
          <div>
            <Typography {...({} as any)}  {...({} as any)}  variant="h6" color="blue-gray" className="mb-0.5">
              {name}
            </Typography>
            <Typography {...({} as any)}  {...({} as any)}  variant="small" className="font-normal !text-gray-500">
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
