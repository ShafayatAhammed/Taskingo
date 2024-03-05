import React from "react";
import "../App.css";
import IncProductivity from "../image/inc-productivity.png";
import EnhCollaboration from "../image/enh-collaboration.png";
import ImpTimeManagement from "../image/imp-time-mng.png";
import MoreBenefits from "../image/more-benefits.png";

const Benefits = () => {
  return (
    <section className="benefit-sec">
      <p>Benefits</p>
      <h1>Why choose us?</h1>
      <div className="benefits">
        <div className="benefit">
          <img src={IncProductivity} alt="increased-productivity" />
          <h3>Increased Productivity</h3>
          <p>
            Our task management system <br /> centralizes task organization,{" "}
            <br /> deadlines, and progress tracking, <br /> streamlining
            workflows and boosting <br /> efficiency.
          </p>
        </div>

        <div className="benefit">
          <img src={EnhCollaboration} alt="enh-collaboration" />
          <h3>Enhanched Collaboration</h3>
          <p>
            Our software foster real-time updates, <br /> shared task lists, and
            seamless <br /> communication among team members, <br /> promoting
            teamwork and alignment <br /> towards common goals.
          </p>
        </div>
        <div className="benefit">
          <img src={ImpTimeManagement} alt="imp-time-management" />
          <h3>Improved Time Management</h3>
          <p>
            Features of our software like due dates, <br /> reminders, and other
            advance features <br /> empower users to allocate time <br />{" "}
            effectively, prioritize tasks, and identify <br /> inefficiencies
            for better scheduling.
          </p>
        </div>
        <div className="benefit" style={{ gridColumn: "2" }}>
          <img src={MoreBenefits} alt="more-benefits" />
          <h3>More Benefits</h3>
          <p>
            Without these, our software will benefit you a lot. There are more
            features <br /> that are used for more complex problems. You can
            learn more by get started with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
