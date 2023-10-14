const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Next",
    "Nest",
    "Supabase",
    "Firebase",
    "TypeScript",
  ];

  return (
    <section className="skills">
      <h1 className="title">{"<skills>"}</h1>
      <ul className="grid grid-cols-3 max-md:grid-cols-2 auto-rows-auto gap-x-[5vw] gap-y-[5vh]">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-4xl max-lg:text-2xl max-md:text-xl text-primary-black bg bg-primary-light border-2 border-primary-blue text-center py-4 max-md:py-2 px-6 max-md:px-4 rounded-2xl last:col-end-3 hover:border-primary-black cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
      <h1 className="title-close">{"</skills>"}</h1>
    </section>
  );
};

export default SkillsSection;
