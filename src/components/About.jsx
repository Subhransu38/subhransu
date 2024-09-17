import "./About.css";
import RESUME from "../../assets/subhransu-resume.pdf";
const EDUCATION = [
  {
    id: 1,
    course: "React- The Complete Guide",
    school: "Udemy, Instructors: Academind by Maximilian Schwarzmuller",
    score: "Completed",
    time: "February 2023"
  },
  {
    id: 2,
    course: "B. Tech in Computer Science and Engineering",
    school: "Centurion University of Technology and Management, Odisha",
    score: "7.99 CGPA",
    time: "2016 - 2020"
  },

  {
    id: 3,
    course: "Senior-Secondary (CHSE, ODISHA)",
    school: "Gayatri Junior College, Berhampur, Ganjam",
    score: "54.12%",
    time: "2014 - 2016"
  },
  {
    id: 4,
    course: "Matriculation (BSE, ODISHA)",
    school: "Govt. N.A.C. High School, Aska, Ganjam",
    score: "73.5%",
    time: "April 2014"
  }
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <p>
            Hi there! My name is Subhransu Sekhar Rath, and I am excited to
            share a little bit about myself with you. I was born on 30th May
            1999, and I have always had a passion for exploring new hobbies and
            interests. When I'm not working on web development projects, you can
            find me pursuing a variety of activities such as hiking, playing
            video games, or trying out new recipes in the kitchen.
          </p>
          <p>
            My interest in web development started when I was in college. Since
            then, I have been hooked on learning new languages and creating
            projects that push the boundaries of what I thought was possible. I
            am always looking for ways to improve my skills and stay up-to-date
            with the latest trends and technologies. This portfolio website is a
            place where I can showcase some of my projects.
          </p>
          <div className="about-btn">
            <a href={RESUME} className="btn" download>
              Resume
            </a>
            <a
              href="https://drive.google.com/drive/folders/1wDrawTFLFeowVaagW4Cw3gtrfJNSel1r?usp=sharing"
              className="btn btn-primary"
              target="_blank"
            >
              Certificate
            </a>
          </div>
        </div>
        <div className="education">
          <div className="about-cards">
            {EDUCATION.map(({ id, course, school, score, time }) => {
              return (
                <article key={id} className="about-card">
                  <h2>{course}</h2>
                  <h5>{school}</h5>
                  <p>
                    <i>{score}</i>
                  </p>
                  <small>{time}</small>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
