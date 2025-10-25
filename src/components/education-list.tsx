export function EducationList({
  curriculum,
}: {
  curriculum: Array<{
    institution: string;
    degree: string;
    year: string;
    logoUrl: string;
  }>;
}) {
  return (
    <ul className="flex flex-col space-y-4">
      {curriculum.map((item) => (
        <li
          key={item.institution}
          className="flex justify-between items-start border border-b-3 p-4 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <img
              className="size-16 rounded-full p-0.5 border border-border"
              src={item.logoUrl}
              alt={item.institution}
            />
            <div className="flex flex-col">
              <h3>{item.institution}</h3>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{item.year}</p>
        </li>
      ))}
    </ul>
  );
}
