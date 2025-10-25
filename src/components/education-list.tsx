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
        <li key={item.institution}>
          <h3>{item.institution}</h3>
          <p>{item.degree}</p>
          <p>{item.year}</p>
        </li>
      ))}
    </ul>
  );
}
