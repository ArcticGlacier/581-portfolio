import { Link } from "react-router-dom";
import "./Inkcredible.css";

export default function Inkcredible() {
  return (
    <div className="projects">
      <nav className="navBar">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link>
          <h1>Projects</h1>
        </Link>
      </nav>
      <div className="projectContent">
        <div className="overview">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/36ettCYD69o?si=Zc9lDoj6Eeg99M5Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Github Source: https://github.com/ArcticGlacier/inkcredible.git</p>
          <h1>Overview</h1>
          <p>
            Inkcredible is an all in one kid's agenda and journaling app that
            was developed with the goal of helping children develop crucial life
            skills such as time management, organization, and self reflection.
            When interviewing children in our lives, we noticed that a vast
            majority of them are much more comfortable with mobile devices.
            Hence, we decided to appraoch a web application with this in mind.
            With vibrant colors, big buttons, and simple text, we came up with a
            product that allows children to keep track of their daily tasks and
            plan ahead, all while giving them space to record precious
            milestones or interesting thoughts.
          </p>
        </div>
        <div className="conceptSketches">
          <h1>Concept Sketches</h1>
          <img src="/assets/tentensketch1.png"></img>
          <img src="/assets/tentensketch2.png"></img>{" "}
          <img src="/assets/tentensketch4.png"></img>
          <img src="/assets/tentensketch3.png"></img>
          <p>
            Here are some of the concept sketches my group member and I did.
            Personally, I came up with the following sketches: <br />
            1. An application that teaches kids how to read. You could select
            how to learn the alphabet, or read books and short stories of
            varying levels of difficulty based on your age and reading level.{" "}
            <br />
            2. An appliction to practice math skills. I had thought about how
            many children are visual learners and could benefit from doing
            exercises in a more visual way to strengthen their math skills.
            There would be a variety of subtopics in math such as geometry,
            algebra, etc. <br />
            3. A karaoke app for children where you could pick a song and sing
            along.
            <br />
            4. Something like netflix but aimed solely towards children. A lot
            of streaming service UI can be messy and overwhelming for young
            children. <br />
            5. An agenda app that reminds children to do their homework. <br />
            6. An app that teaches children how to type with proper finger
            placement. <br />
            7. An application to practice writing. This would not make sense for
            a web application as writing with a cursor is hard enough as it is.{" "}
            <br />
            8. A music app teaching children how to play different instruments.
            <br />
            9. A music streaming app meant for children. Something like spotify
            but with more kid friendly UI.
            <br />
            10. A drawing and coloring app.
          </p>
        </div>
        <div className="detailedSketches">
          <h1>Detailed Sketches</h1>
          <img src="/assets/promising1.png"></img>
          <img src="/assets/promising2.png"></img>
          <p>
            Here are some of the revised sketches we made. That being said, we
            did end up going through this process multiple times.
            <br></br>
            1. Having a daily spread where children can see their tasks and
            journaling
            <br></br>
            2. Having a montly view where you could select a specific day to
            write about<br></br>
            3. Making tasks (pretty self-explanatory!)
            <br></br>
            4. Adding color to tasks. This would make it more appealing to
            children.
            <br />
            5. We toyed around with potentially filtering out tasks, but we
            decided this is something that might be more appreciated by adults
            or teenagers rather than our target audience.
            <br />
            6. We also toyed around with adding types to the task.
            <br />
            7. Completing a task.
            <br />
            8. Filtering out unfinished tasks.
            <br />
            9. Adding a time tag to a task.
            <br />
            10. Having a task vs a due date block which would just be a reminder
            that something is due that day.
          </p>
        </div>
      </div>
    </div>
  );
}
