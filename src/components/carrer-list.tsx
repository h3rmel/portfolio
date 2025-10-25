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
        <li
          key={experience.employer}
          className="flex justify-between items-start border border-b-3 p-4 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <img
              className="size-16 rounded-full p-0.5 border border-border"
              src={experience.logoUrl}
              alt={experience.employer}
            />
            <div className="flex flex-col">
              <h3>{experience.employer}</h3>
              <p className="text-sm text-muted-foreground">{experience.position}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{experience.year}</p>
        </li>
      ))}
    </ul>
  );
}
