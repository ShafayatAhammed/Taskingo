import React, { useState } from "react";
import "../App.css";
import Man1 from "../image/man1.jpg";
import Man2 from "../image/man2.webp";
import Man3 from "../image/man3.jpg";
import Woman1 from "../image/woman1.jpg";
import Woman2 from "../image/woman2.jpeg";
import Woman3 from "../image/woman3.webp";

const Testimonial = () => {
  const testimonials = [
    [
      {
        name: "Alexander Sterling",
        occupation: "Investment Banker",
        image: Man1,
        review:
          "Taskingo has revolutionized how I manage my busy schedule as an investment banker. Its intuitive interface and robust features make it easy to stay organized amidst deal-making and market fluctuations. Taskingo's seamless integration with my calendar ensures I never miss a meeting or deadline.",
      },
      {
        name: "Victoria Harrington",
        occupation: "International Diplomat",
        image: Woman1,
        review:
          "Taskingo simplifies managing diplomatic missions across borders. Its user-friendly interface and mobile accessibility ensure I can coordinate meetings and negotiations effectively from anywhere. its reminder feature prevents me from missing important events, making it an essential tool for diplomatic endeavors.",
      },
      {
        name: "Sebastian Beaumont",
        occupation: "Corporate Attorney",
        image: Man2,
        review:
          "Taskingo simplifies managing documents and deadlines as a corporate attorney. Its intuitive interface and powerful features streamline my workflow, ensuring I stay on top of legal matters. Integrating with my calendar, it prevents missed court dates or filings, allowing me to focus on delivering top-notch legal counsel efficiently.",
      },
    ],
    [
      {
        name: "Penelope Sinclair",
        occupation: "Neurosurgeon",
        image: Woman2,
        review:
          "Taskingo is indispensable in managing my neurosurgical practice, encompassing surgeries, patient appointments, and research projects. Its reminder feature is particularly invaluable, guaranteeing I never overlook a surgery or consultation. This enhances both precision and efficiency in my practice.",
      },
      {
        name: "Benjamin Vanderbilt",
        occupation: "Venture Capitalist",
        image: Man3,
        review:
          "Taskingo is invaluable for managing my diverse investment portfolio. Its customizable task lists and collaborative features streamline communication and decision-making, keeping me ahead in the fast-paced venture capital world. With Taskingo, I can focus more on strategic decisions and less on administrative tasks.",
      },
      {
        name: "Isabella Kensington",
        occupation: "CEO at Fortune 500",
        image: Woman3,
        review:
          "Taskingo is indispensable for running a Fortune 500 company. Its analytics feature provides insights into team performance, empowering informed decision-making. Taskingo's task prioritization and delegation capabilities streamline operations, allowing me to focus on driving the company's success.",
      },
    ],
  ];

  const [index, setIndex] = useState(0);

  const handleChange = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };

  return (
    <section className="testimonial-sec">
      <p>Testimonials</p>
      <h1>What Clients Say</h1>
      <div className="nx-prev-btns">
        <button onClick={handleChange}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={handleChange}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="testimonials">
        {testimonials[index].map((t, index) => {
          return (
            <div
              className="testimonial"
              key={index}
            >
              <img src={t.image} alt="rvppic" />
              <h3>{t.name}</h3>
              <p>{t.occupation}</p>
              <p>{t.review}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
