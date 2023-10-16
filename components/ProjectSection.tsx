import ProjectCard from "./ProjectCard";
import ScoreSeer from "@/public/images/Scoreseer.svg";
import Wlog from "@/public/images/wlog.svg";

const ProjectSection = () => {
  const projects = [
    {
      title: "Score Seer",
      description:
        "A web application that allows a user to predict the football match results for the week.",
      image: ScoreSeer,
      live: "https://score-seer.wassimzo.xyz/",
      repo: "https://github.com/WassimZo/ScoreSeer",
    },
    {
      title: "Wlog",
      description:
        "A personal blog where I share my projects and provide more detailed explanations of my thoughts. The blog allows users to like articles, comment on them, and bookmark their favorite articles.",
      image: Wlog,
      live: "https://wlog.wassimzo.xyz/",
      repo: "https://github.com/WassimZo/wlog",
    },
  ];

  let left = false;

  return (
    <section className="projects" id="projects">
      <h1 className="title">{"<projects>"}</h1>
      {projects.map((project) => {
        left = !left;
        return (
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            live={project.live}
            repo={project.repo}
            left={left}
            key={project.title}
          />
        );
      })}
      <h1 className="title-close">{"</projects>"}</h1>
    </section>
  );
};

export default ProjectSection;
