import React from "react";
import "../App.css";
import Member1 from "../image/teamman1.jpg";
import Member2 from "../image/teamwoman1.jpg";
import Member3 from "../image/teamman2.jpg";
import Member4 from "../image/teamwoman2.jpg";

const Team = () => {
  return (
    <section className="team-sec">
      <p>Team</p>
      <h1>Meet Our Team.</h1>
      <div className="team-members">
        <div className="team-member">
          <div className="member-pic">
            <img src={Member1} alt="John Smith" />
          </div>
          <div className="member-dts">
            <p>Chief Executive Officer (CEO)</p>
            <h3>John Smith</h3>
          </div>
        </div>

        <div className="team-member">
          <div className="member-pic">
            <img src={Member2} alt="Sarah Johnson" />
          </div>
          <div className="member-dts">
            <p>Chief Technology Officer (CTO)</p>
            <h3>Sarah Johnson</h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-pic">
            <img src={Member3} alt="Michael Brown" />
          </div>
          <div className="member-dts">
            <p>Chief Operations Officer (COO)</p>
            <h3>Michael Brown</h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-pic">
            <img src={Member4} alt="Emily Clark" />
          </div>
          <div className="member-dts">
            <p>Chief Marketing Officer (CMO)</p>
            <h3>Emily Clark</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
