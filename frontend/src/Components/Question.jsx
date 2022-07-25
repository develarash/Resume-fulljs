import React, { useState } from "react";
import "../styles/questions.css";
const Question = () => {
  const data = [
    {
      question: "Tell me about yourself ؟",
      answer:
        "My interest in software and application development was formed as a teenager when I was studying in the software school, and then I tried to develop my personal abilities as a full-stack developer.",
    },
    {
      question: "Why should we hire you?",
      answer:
        "As a front-end and back-end developer, I do my best to develop and implement the company's needs.",
    },
    {
      question: "Why do you want to work here?",
      answer:
        "According to your needs, I have the ability to implement the services provided by you, and in addition to the development of the company, I want to develop my capabilities in the field of developing large applications.",
    },
    {
      question: "What is your greatest strength?",
      answer:
        "In my opinion, I am a persistent person and I can say that as one of my strengths",
    },
    {
      question: "Tell me about a time you were successful on a team ?",
      answer:
        "In teamwork, the progress and success of the team is actually the same as personal progress and success, and the product and service created by us is proud. The last time I was a front-end developer, I was running a startup in dried fruit and nuts.",
    },
    {
      question: "What would your co-workers say about you ?",
      answer:
        "This is a question with different views After a short period of working with me, they notice my efforts to do things correctly and on time And they also know that I try to provide the best in my position",
    },
    {
      question: "Why do you want to leave your current role? ",
      answer:
        "This has been completed with the satisfaction of my colleagues and partners And my tasks have been completed I also do this to improve my talent and projects",
    },
    {
      question: "Describe your most challenging project ? ",
      answer:
        "As far as I remember, it was the biggest challenge in the previous two years that there were a series of changes in the customs and financial laws of the target country, which caused fundamental changes in the project and the company, and we are trying to resolve them.",
    },
    {
      question: "Tell me about something you’ve accomplished that you are proud of ? ",
      answer:
        "I am proud of all the projects that I have worked on, including full stack JS and SEO management. 😉 ",
    },
    {
      question: "Tell me about something you’ve accomplished that you are proud of ? ",
      answer:
        "Outside of work, I prefer to be at the disposal of my family and do sports such as volleyball🏐 and swimming🏊‍♀️ Reading such books and learning new things is one of my hobbies ",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      <h1>      Some questions that might help you get to know me better
</h1>
      {data.map((item, i) => (
        <div className="itemAccordion" key={i}>
          <div
            className={selected === i ? "title yellow" : "title white"}
            onClick={() => toggle(i)}
          >
            <h2>
              {" "}
              <span>{i + 1} -</span>
              {item.question}
            </h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
