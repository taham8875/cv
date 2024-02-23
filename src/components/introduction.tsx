import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col justify-center grow space-y-4">
        <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
        <p className="text-gray-500 dark:text-gray-400 font-mono">
          {RESUME_DATA.about}
        </p>
        <p>
          <Link
            href={RESUME_DATA.locationLink}
            target="_blank"
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 font-mono hover:underline"
          >
            <Globe className="h-4 w-4" />
            <span>{RESUME_DATA.location}</span>
          </Link>
          {Object.entries(RESUME_DATA.contacts).map(([key, value]) => {
            const href =
              key == "email"
                ? `mailto:${value.value}`
                : key == "telephone"
                ? `tel:${value.value}`
                : value.value;
            return (
              <Link key={key} href={href} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-500 dark:text-gray-400 mt-4 me-1.5"
                >
                  <value.icon className="h-5 w-5" />
                  <span className="sr-only">{key}</span>
                </Button>
              </Link>
            );
          })}
        </p>
      </div>
      <Image
        src={RESUME_DATA.image}
        width={150}
        height={150}
        className="rounded-md ml-8"
        alt="A picture of me, smiling."
        quality={100}
        priority={true}
      />
    </section>
  );
}
