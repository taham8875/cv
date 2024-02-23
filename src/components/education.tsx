import { RESUME_DATA } from "@/data/resume-data";

export default function Education() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col justify-center grow space-y-4">
        <h1 className="text-3xl font-bold">Education</h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-bold">{RESUME_DATA.education.value}</p>
            <p className="font-mono">{RESUME_DATA.education.description}</p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-mono">
            {RESUME_DATA.education.date}
          </p>
        </div>
      </div>
    </section>
  );
}
