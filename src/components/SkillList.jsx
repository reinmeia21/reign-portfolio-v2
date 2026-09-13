export default function SkillList({ skills }) {
  return (
    <div className="skills-grid">
      {Object.entries(skills).map(([group, items]) => (
        <div className="skills-group" key={group}>
          <h4>{group}</h4>
          <ul>
            {items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
