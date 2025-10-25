export function CarrerList({
  experiences,
}: {
  experiences: Array<{
    employer: string;
    position: string;
    year: string;
    logoUrl: string;
  }>;
}) {
  return (
    <ul className="flex flex-col space-y-4">
      {experiences.map((experience) => (
        <li key={experience.employer}>
          <h3>{experience.employer}</h3>
          <p>{experience.position}</p>
          <p>{experience.year}</p>
          <img className="size-16" src={experience.logoUrl} alt={experience.employer} />
        </li>
      ))}
    </ul>
  );
}
