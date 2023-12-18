import { Link } from "react-router-dom";
import "./CelledPhone.css";

export default function CelledPhone() {
  return (
    <div className="projects">
      <nav className="navBar">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/Inkcredible"}>
          <h1>Inkcredible</h1>
        </Link>
        <Link to={"/Unlocking"}>
          <h1>Unlocking</h1>
        </Link>
        <Link>
          <h1>CelledPhone</h1>
        </Link>
        <Link to={"/FlashFriends"}>
          <h1>FlashFriends</h1>
        </Link>
      </nav>
      <div className="celledPhoneContent">
        <h1>Project Overview</h1>
        <p>
          For this project, we were tasked with using an Arduino Uno kit to
          create a solution to an everyday problem. Inspired by student life,
          and how difficult we can find it at times to put our phones away and
          focus on a task, we wanted to develop an anti-procrastination method
          that would allow anyone who finds themselves reaching for their phones
          when they shouldn’t, a way of breaking that habit. The idea we came up
          with was a phone jail, called Celluar Confinement that would allow
          users to safely hand over their phones to a robot that would withhold
          it from them for a period of time, and release it once that timer
          expires, allowing them to get work done without being tempted by their
          phone. Where the initial sketches helped us think of all of the
          possibilities and come up with this initial idea, the detailed
          sketches allowed us to expand upon the idea and cement some of the
          core aspects we wanted to bring to life. .{" "}
        </p>
        <div className="celledPhoneInfo">
          <h2>Concept Sketches</h2>
          <img src="/assets/CellphoneConcept.jpeg"></img>

          <p>
            For this project, we first used the 10x10 sketching method to come
            up with 20 initial ideas for this project. This phase allowed us to
            explore all the things that might be possible with our Arduino kits,
            and our ideas utilized multiple different input and output methods.
            Of the 20 ideating sketches, 10 are described below, some of which
            helped us develop our final idea.
            <ol>
              <li>
                One of our initial ideas was to have a device that would utilize
                a moisture sensor to detect if your plant is in need of water,
                and emit a notification noise (such as a crying noise) to alert
                you when it is.
              </li>
              <li>
                This sketch illustrates an idea we had for a music box that
                would play when triggered by either the lack of noise (a silent
                environment) or a specific command like “play a song”.
              </li>
              <li>
                This idea was inspired by mood rings; based on whatever mood you
                declared you were in, the lights would change colors to the
                color that best corresponded with that mood.
              </li>
              <li>
                A photography assistant, this idea entailed having our project
                accept a voice command from the user to take a picture, for a
                hands-free picture-taking experience.
              </li>
              <li>
                In this idea, tapping the sensor on your wrist, in a bracelet
                would be the input, and the output would be a particular light
                display on your clothing.
              </li>
              <li>
                For those who are sick, this headband would have a temperature
                sensor that would monitor someone’s temperature, and either
                flash a red light and/or play an alarm if their temperature is
                above or below the average range of human body temperatures.
              </li>
              <li>
                For those struggling with completing any kind of task, this
                device would dispense a treat if you click the “task completed”
                button to reinforce your positive behaviors. Another idea here
                was to have a robot drop off your treat, as one of the
                precursors to our final project’s concept.
              </li>
              <li>
                Here, a temperature sensor would, like sketch 6, alert you of a
                temperature change. For food or drinks, once the temperature
                drops below the lower end of a predetermined range, there would
                be flashing lights to let you know that your food or drinks need
                to be reheated.
              </li>
              <li>
                For those who want to feel safer going out in lower light, this
                jacket would sense the external light levels and light up if
                it’s below a certain threshold. This garment could be used to
                provide people with extra comfort while going out, or as a
                warning signal for vehicles, and so an additional feature it
                could have would be having different parts of the jacket
                flashing at different times to ensure that any drivers are able
                to see you.
              </li>
              <li>
                This idea was for a type of speedometer for new drivers. Since
                people who are learning to drive can sometimes be overwhelmed by
                all of the things they have to keep an eye on (the road, side
                mirrors, the rearview mirror, the speedometer, etc.) this device
                would sense their current speed and emit a noise if it’s not
                within a 5-kilometer range of the acceptable speed. As
                maintaining a consistent speed can also be hard for less
                experienced drivers, this might help remind them to check their
                speedometer and help them regulate their speed.
              </li>
            </ol>
          </p>
          <h2>Detailed Sketches</h2>
          <img src="/assets/RobotDetails1.png"></img>
          <img src="/assets/RobotDetails2.png"></img>
          <img src="/assets/RobotDetails3.png"></img>
          <p>
            After choosing the idea we wanted to implement, we spent time
            thinking about how exactly the phone jail would work, and in doing
            so we came up with another 20 sketches, this time detailing just our
            final idea. Of those 20 sketches, 10 are described below, and
            demonstrate some of the main concepts we wanted to implement for the
            phone jail.
          </p>
          <ol>
            <li>
              The tummy of the robot would be the “jail cell” for the phone, a
              compartment where the phone can lie for the duration of its jail
              time.
            </li>
            <li>
              To ensure that the phone is not damaged during the robot’s
              activities, elastics would allow for users to secure their phones
              within the robot’s tummy to their liking.
            </li>
            <li>
              Here, we wanted our robot to be able to detect when the secure
              phone is placed within it (perhaps through a weight sensor) and
              then have its door quickly spring closed, and its feet rotate into
              place to lock the door.
            </li>
            <li>
              A timer display on the front of the door would display the
              remaining time to the user, letting them know how much longer they
              have until they can access their phone again.
            </li>
            <li>
              The robot’s antennas would be its main communication method with
              users, alerting them of the current status of the phone. Yellow
              would indicate that the robot is not yet ready to begin the
              locking process as the phone is not in the robot or the door is
              not yet locked. Pink would indicate that the phone is in the robot
              and serving its jail sentence (the timer has started but hasn’t
              finished yet). Lastly, green antennas would let the user know that
              their phone has finished its time in jail and can be accessed
              again.
            </li>
            <li>
              Another communication method with users is the buzzer that goes
              off when the timer runs out, letting the user know that their
              phone has finished its time in jail. If the user is so focused on
              their work and not staring at the robot, waiting for the timer to
              run out, the buzzer would indicate that the phone is allowed to be
              accessed.
            </li>
            <li>
              As the phone jail is looking to provide a solution to phone
              dependency, we wanted to try implementing multiple features that
              would help the user achieve this. One such way can be seen in this
              sketch, where the jail would “run” away, evading a user who’s
              reaching for their phone. Using the proximity sensor we wanted to
              be able to detect any attempts to access the phone before the
              timer ended and have the phone move away in the opposite direction
              accordingly.
            </li>
            <li>
              An alternative idea we had to sketch 3 was to have the user
              physically close and latch the door themselves after securing
              their phone as opposed to having the door spring closed by itself.
            </li>
            <li>
              Another alternate design idea was to omit the robot aspect and
              just have the cart act as the jail itself.
            </li>
            <li>
              In this alternate design sketch, the user would get visual input
              of whether the jail is locked or not based on whether the red or
              green LED light is on.
            </li>
          </ol>
          <div></div>
          <h1>Concept Video</h1>
          <h2>Storyboard</h2>
          <img src="/assets/CellphoneStoryboard.jpeg"></img>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kuAe8uHHb78?si=o7ngzEvRL2Ay5egi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2>StopMotion Film</h2>
          <p>
            As a preliminary pitch for Cellular Confinement, we wanted the
            concept video to demonstrate the problem that our idea was a
            solution to, and how the basics of the solution operate. Using stop
            motion, we created a simple concept video highlighting the basics of
            the early stages of our project idea. As our idea was inspired by a
            struggle many students face, we thought that Cellular Confinement
            could most clearly be demonstrated in a situation most current
            students have found themselves in at some point or another– trying
            to sit down and study but being distracted by their phone. In our
            student’s case, this problem compounds and results in terrible
            consequences, failing an exam since they were procrastinating on
            their phone instead of studying. Our student knows this cannot
            happen again, and this is where our project comes in, after
            researching solutions to their problem, they learn about the phone
            jail, which they use to help them curb their habit and perform
            better on their next exam!
          </p>
          <h1>Final Product</h1>
          <iframe
            width="335"
            height="596"
            src="https://www.youtube.com/embed/suJwfzNGOfA"
            title="CPSC 581 Project 3: Celled Phone Final Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Repository: https://github.com/ArcticGlacier/cellphone.git</p>
          <p>
            In our final design, we included a button and proximity sensor as
            our input sources, and LED lights, an LED screen, and a buzzer as
            our outputs. As demonstrated in our final design video, Cellular
            confinement acts as an aid in the process of eliminating phone
            addiction. When the user has secured their phone within its jail,
            they can press the button to begin its jail sentence. From here, the
            green LED light turns off and the red LED turns on, indicating that
            the phone is no longer accessible. The timer begins its countdown at
            the same time and is displayed on the LCD I2C screen. If a user
            tries clicking the button again to free their phone, the robot will
            not yield, they can’t stop the sentence until the phone’s time is
            served and the countdown has reached 0. If a user tries accessing
            their phone before the countdown is up (like trying to push the
            button once the phone is already locked away) the proximity sensor
            takes that input and adds 5 minutes to the countdown, the buzzer
            sounds, and the red LED flashes. Once the sentence has been served
            (the countdown reaches 0) the green LED turns on, the red LED turns
            off and the phone can be accessed again without penalty.
          </p>
          <h2>Design Choices for Final Design</h2>
          <p>
            Design Choices for the Final Design: We chose the button as the main
            input source for the Celluar Confinement as it is an explicit
            confirmation from the user that they are ready to surrender their
            phone. Although we considered other input methods, it quickly became
            apparent that the button was the clearest and simplest way for the
            system to start. The button press acts as the final piece in the
            circuit, enabling the rest of Cellular Confinement’s actions.{" "}
            <br></br>Using the proximity sensor, LED light, and buzzer, our aim
            was to discourage the user from trying to access their phone during
            its jail sentence. Sensing a hand coming close to the jail, the
            proximity sensor triggers the red LED and the buzzer to show the
            user that their actions are not approved of and that the robot is
            not happy using both audio and visual signals. In addition to this,
            an additional 5 minutes is added to the phone’s jail sentence so the
            timer has 5 minutes added onto it as a punishment. In doing this, we
            wanted users to be able to slowly get into the habit of not reaching
            for their phone anymore, as they are aware of the consequences–
            every time they reach for their phone before its sentence is up,
            they have to be away from their phone for an additional 5 minutes.
            For both the LED antenna and LCD I2C screen output we wanted to be
            able to provide feedback to the users about how much time left
            before their phone is accessible again. In addition to the
            punishment of having time added, we also wanted users to be able to
            get a good sense of their own focusing abilities and progress when
            it comes to lessening their reliance on their phones. For users who
            are looking to reach for their phone, they’ll be able to see how
            much time is left and hopefully have confidence in themselves that
            they can hold on for a little while longer. For users who are so
            immersed in their task that they don’t even realize that time has
            run out, the green LED antenna provides them with immediate
            knowledge that their phone is accessible once they look up.
          </p>
        </div>
      </div>
    </div>
  );
}
