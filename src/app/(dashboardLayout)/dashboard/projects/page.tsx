import ProjectTabs from '@/components/ProjectTab/ProjectTab';
import TextHeading from '@/components/TextHeading/TextHeading';

import Link from 'next/link';

async function ProjectPage() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/projects',
    {
      cache: 'no-store',
    }
  );

  const projects = await res.json();

  return (
    <div>
      <div className="text-center mb-10">
        <TextHeading text="My project that illustrate my ideas" />
      </div>

      {projects.data?.length ? (
        <ProjectTabs projects={projects.data} />
      ) : (
        <div className="font-semibold text-center text-lg">
          <span>No projects found.</span>{' '}
          <Link
            className="underline text-textGreen"
            href="/dashboard/projects/addProject"
          >
            Create Project
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
