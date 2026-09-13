import portfolio from "../data/portfolio.js";
import advocacy from "../data/advocacy.js";
import SkillList from "../components/SkillList.jsx";
import Timeline from "../components/Timeline.jsx";
import AdvocacyCard from "../components/AdvocacyCard.jsx";
import Smiley from "../components/Smiley.jsx";

export default function About() {
  const { about } = portfolio;

  return (
    <section className="section container container--narrow">
      <div className="about-intro">
        <div className="about-smiley">
          <Smiley />
        </div>
        <div>
          <h1>About</h1>
          <p>{about.introduction}</p>
        </div>
      </div>

      <div className="about-block">
        <h3>What I believe</h3>
        <p>{about.beliefs}</p>
      </div>

      <div className="about-block">
        <h3>What I'm curious about</h3>
        <p>{about.curiosity}</p>
      </div>

      <div className="about-block">
        <h3>Skills</h3>
        <SkillList skills={about.skills} />
      </div>

      <div className="about-block">
        <h3>Where this is going</h3>
        <Timeline items={about.direction} />
      </div>

      <div className="about-block">
        <h3>Outside the classroom · my leadership record</h3>
        <p className="section-intro">Eight ideas I keep coming back to — about who I lead for, and why.</p>
        <div className="advocacy-stack">
          {advocacy.map((item, index) => (
            <AdvocacyCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
