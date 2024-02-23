import PageHeader from "@/components/page-header";
import Introduction from "@/components/introduction";
import Objective from "@/components/objective";
import Education from "@/components/education";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <PageHeader />
      <div className="container max-w-3xl mx-auto p-4 space-y-10">
        <Introduction />
        <Objective />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
