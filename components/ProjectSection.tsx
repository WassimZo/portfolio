import ProjectCard from "./ProjectCard";
import ScoreSeer from "@/public/images/Scoreseer.svg";
import Wlog from "@/public/images/wlog.svg";
import Title from "./Title";
import TitleClose from "./TitleClose";

const ProjectSection = () => {
  const projects = [
    {
      title: "Score Seer",
      description:
        "A web application that allows a user to predict the football match results for the week.",
      descriptionFr:
        "Application web qui permet à un utilisateur de prédire les résultats des matchs de football de la semaine.",
      image: ScoreSeer,
      live: "https://score-seer.wassimzo.xyz/",
      repo: "https://github.com/WassimZo/ScoreSeer",
    },
    {
      title: "Wlog",
      description:
        "A personal blog where I share my projects and provide more detailed explanations of my thoughts. The blog allows users to like articles, comment on them, and bookmark their favorite articles.",
      descriptionFr:
        "Un blog personnel où je partage mes projets et fournis des explications plus détaillées de mes réflexions. Le blog permet aux utilisateurs de liker les articles, de les commenter, et de mettre en favoris leurs articles préférés.",
      image: Wlog,
      live: "https://wlog.wassimzo.xyz/",
      repo: "https://github.com/WassimZo/wlog",
    },
  ];

  let left = false;

  return (
    <section className="projects" id="projects">
      <Title value="<projects>" valeur="<projets>" />
      {projects.map((project) => {
        left = !left;
        return (
          <ProjectCard
            title={project.title}
            description={project.description}
            descriptionFr={project.descriptionFr}
            image={project.image}
            live={project.live}
            repo={project.repo}
            left={left}
            key={project.title}
          />
        );
      })}
      <TitleClose value="</projects>" valeur="</projets>" />
    </section>
  );
};

export default ProjectSection;
