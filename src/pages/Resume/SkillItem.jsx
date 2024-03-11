
const SkillItem = ({ title, value }) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h5 className="h5">{title}</h5>
        <data value={value}>{value}%</data>
      </div>
      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{ width: `${value}%` }}></div>
      </div>
    </li>
  );
}

export default SkillItem;
