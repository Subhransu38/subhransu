import "./Project.css";
import PROJECT1 from "../../assets/portfolio.png";
import PROJECT2 from "../../assets/chatsnap.png";
import PROJECT3 from "../../assets/tasteofodisha.png";
import PROJECT4 from "../../assets/utube.jpg";
import PROJECT5 from "../../assets/expense.jpg";
import PROJECT6 from "../../assets/2048.jpg";

const data = [
  {
    id: 1,
    image: PROJECT1,
    title: "Personal Portfolio Website",
    github: "https://github.com/Subhransu38/portfolio",
    demo: "https://subhransu38.github.io/portfolio/",
  },
  {
    id: 2,
    image: PROJECT2,
    title: "ChatSnap - Realtime Chat App",
    github: "https://github.com/Subhransu38/snapchat",
    demo: "https://chatsnap-blond.vercel.app/",
  },
  {
    id: 3,
    image: PROJECT3,
    title: "Taste of Odisha - Online Food Ordering App",
    github: "https://github.com/Subhransu38/tasteofodisha",
    demo: "https://tasteofodisha.vercel.app/",
  },
  {
    id: 4,
    image: PROJECT4,
    title: "Youtube Landing Page Clone",
    github: "https://github.com/Subhransu38/youtube-clone",
    demo: "https://subhransu38.github.io/youtube-clone/",
  },
  {
    id: 5,
    image: PROJECT5,
    title: "BudgetBuddy",
    github: "https://github.com/Subhransu38/BudgetBuddy",
    demo: "https://subhransu38.github.io/BudgetBuddy/",
  },
  {
    id: 6,
    image: PROJECT6,
    title: "2048 Game",
    github: "https://github.com/Subhransu38/game-2048",
    demo: "https://subhransu38.github.io/game-2048/",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project-item">
              <div className="project-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-btn">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
