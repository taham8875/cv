import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div>
        {RESUME_DATA.skills.map((skill, index) => {
          return (
            <Badge
              key={index}
              className="me-1 bg-gray-700 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300"
            >
              {skill}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
