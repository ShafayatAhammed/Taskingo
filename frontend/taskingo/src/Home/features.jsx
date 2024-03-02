import React from "react";
import "../App.css";
import TaskManagement from "../image/task-management.png";
import DueReminder from "../image/due-reminder.png";
import Collaboration from "../image/collaboration.png";
import Workspace from "../image/workspace.png";
import Search from "../image/search.png";
import AdFeatures from "../image/features.png";

const Features = () => {
  return (
    <section className="feature-sec">
      <p>Features</p>
      <h1>Taskingo Features.</h1>
      <div className="features">
        <div className="feature">
          <img src={TaskManagement} alt="taskmanagementt" />
          <h3>Easy Task Management</h3>
          <p>
            We have an easy task management <br /> feature. By using this feature,
            you can <br /> easily manage your daily tasks in your <br /> own way and style.
          </p>
        </div>

        <div className="feature">
          <img src={DueReminder} alt="duereminder" />
          <h3>Due And Reminder</h3>
          <p>
            We have a task due reminder feature. By using this feature,
            you can set a task <br /> for due date and reminder to alert you. This will help if you forget the task.
          </p>
        </div>
        <div className="feature">
          <img src={Collaboration} alt="collaboration" />
          <h3>Easy Collaboration</h3>
          <p>
            We have an easy collaboration feature. <br /> By using this feature,
            you can easily collaborate with your teammates. You can work at anytime from anywhere.
          </p>
        </div>
        <div className="feature">
          <img src={Workspace} alt="workspace" />
          <h3>Own/Customized Workspace</h3>
          <p>
             We have a own/customized workspace feature. By using this feature, you can create your own workspace or customize an existing one.
          </p>
        </div>
        <div className="feature">
          <img src={Search} alt="search" />
          <h3>Advance Search And Filter</h3>
          <p>
            We have an advance search filtering feature. By using this feature, you can search and filter the task/tasks that you want to see/find.
          </p>
        </div>
        <div className="feature">
          <img src={AdFeatures} alt="features" />
          <h3>More Advance Features</h3>
          <p>
            Without these, we have more advance features. By using the features, you can do more things as you want. To know more please try us for free now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
