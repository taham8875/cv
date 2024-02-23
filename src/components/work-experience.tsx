import { RESUME_DATA } from "@/data/resume-data";
import Markdown from "react-markdown";

export default function WorkExperience() {
  return (
    <section className="flex items-center">
      {RESUME_DATA.workExperience.map((experience, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center grow space-y-4"
          >
            <h1 className="text-3xl font-bold">Work Experience</h1>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg font-bold">{experience.company}</p>
                <p className="font-mono">{experience.position}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500 dark:text-gray-400 font-mono">
                  {experience.date}
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-mono">
                  {experience.location}
                </p>
              </div>
            </div>
            <Markdown className="prose dark:prose-invert text-gray-500 dark:text-gray-400 font-mono min-w-fit">
              {experience.description}
            </Markdown>
          </div>
        );
      })}
    </section>
  );
}
