import "./About.css";

const EDUCATION = [
  {
    id: 1,
    course: "Complete web development course",
    school: "Udemy, Instructors: Hitesh Choudhary",
    score: "Completed",
    time: "2024",
  },
  {
    id: 2,
    course: "React- The Complete Guide",
    school: "Udemy, Instructors: Academind by Maximilian Schwarzmuller",
    score: "Completed",
    time: "February 2023",
  },
  {
    id: 3,
    course: "B. Tech in Computer Science and Engineering",
    school: "Centurion University of Technology and Management, Odisha",
    score: "7.99 CGPA",
    time: "2016 - 2020",
  },

  {
    id: 4,
    course: "Senior-Secondary (CHSE, ODISHA)",
    school: "Gayatri Junior College, Berhampur, Ganjam",
    score: "54.12%",
    time: "2014 - 2016",
  },
  {
    id: 5,
    course: "Matriculation (BSE, ODISHA)",
    school: "Govt. N.A.C. High School, Aska, Ganjam",
    score: "73.5%",
    time: "April 2014",
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know My</h5>
      <h2>Education</h2>

      <div className="container about-container">
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
    </section>
  );
};

export default About;
