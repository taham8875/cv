import { RESUME_DATA } from "@/data/resume-data";

export default function Objective() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Objective</h1>
      <p className="text-gray-500 dark:text-gray-400 font-mono">
        {RESUME_DATA.objective}
      </p>
    </section>
  );
}
