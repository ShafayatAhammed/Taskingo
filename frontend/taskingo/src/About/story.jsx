import React from "react";
import "../App.css";
import SimplifyLife from "../image/simplify-life.png";

const Story = () => {
  return (
    <section className="story-sec">
      <p>Story</p>
      <h1>A Story of Innovation.</h1>
      <div className="story">
        <div className="story-image">
          <img src={SimplifyLife} alt="simplify-life" />
        </div>
        <div className="story-text">
          <p>
            In the heart of Silicon Valley, a small team had a big idea. <br /> They
            wanted to create a task management tool like no other. <br /> Thus,
            Taskingo was born. With its sleek design and user-friendly <br />
            interface, Taskingo quickly gained popularity. But the team didn't
            stop there. They listened to their users and kept adding features,
            making <br /> Taskingo the go-to tool for businesses everywhere. As
            Taskingo grew, <br /> so did its impact. Companies of all sizes embraced
            it, using it to <br /> streamline their workflows and boost productivity.
            But amidst all the <br /> success, the team remained humble. They knew that
            Taskingo was <br /> more than just a tool—it was a symbol of what could be
            achieved with <br /> passion and innovation. And so, Taskingo continues to
            evolve, helping <br /> individuals and organizations achieve more, one task
            at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
