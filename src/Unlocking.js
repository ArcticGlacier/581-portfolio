import { Link } from "react-router-dom";
import "./Unlocking.css";

export default function Unlocking() {
  return (
    <div className="projects">
      <nav className="navBar">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/Inkcredible"}>
          <h1>Inkcredible</h1>
        </Link>
        <Link>
          <h1>Unlocking</h1>
        </Link>
      </nav>
      <div className="unlockingContent">
        <h1>Project Overview</h1>
        <p>
          Our second assignment in this course was to create two different
          unlocking methods for a mobile device, one being touch-based, and
          another being sensor-based, taking input from another sensor or a
          combination of them, to unlock a user’s device. By following the 10 x
          10 method for sketching, we each came up with 10 ideas for both types
          of unlocking methods, we were able to come up with a variety of ideas
          which we then contemplated, taking into consideration the feasibility,
          security, and practicality of implementation. Then, we attempted to
          brainstorm and sketch 10 additional details for each of them, sketches
          which we then debated once more, and the two of us were able to hone
          in on two ideas we thought were most promising, and develop them using
          React. From the early ideation stages to our final prototypes, we were
          able to explore many of the different sensors we could gather input
          from, and how we could use them to create new and exciting ideas.{" "}
        </p>
        <div className="bubblesContent">
          <h1>Touch/Gesture Based Unlocking: Bubbles!</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PMz6r2ymxRs?si=PtNh4XE3j7f6X0gl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Bubbles site: https://bubbles-ten-phi.vercel.app/ </p>
          <p>Repository: https://github.com/ArcticGlacier/Bubbles</p>
          <h2>Bubbles Overview</h2>
          <p>
            Our inspiration for this idea came from wanting to create a
            multi-touch unlocking method that was not only quick and easy, but
            also visually exciting. By taking elements from multiple sketches,
            such as pressing down on the screen with multiple fingers, and
            popping bubbles, we were able to combine these parts together to
            create our final idea, a bubble-popping game where users have to tap
            and hold the correct bubbles to unlock their phones. Together we
            moved from the sketching stage to creating more detailed mockups in
            Figma and planning and executing our idea using React.
          </p>
          <h2>Concept Sketches</h2>
          <img src="/assets/G_multiTouch1.png"></img>
          <img src="/assets/G_multiTouch2.png"></img>
          <p>
            Firstly, we have our initial concept sketches. We took inspiration
            from physical and mobile games we liked as kids, as well as making
            changes to traditional locks and unlocking methods. We wanted these
            ideas to not only be simple and quick(for the most part) but also
            fun, as it’s a task that is performed many times a day. Most of our
            touch-based unlocking methods were imagined thinking that the user
            would already have chosen/known which particular object,
            combination, or movement successfully unlocked their phone, as a way
            to prevent non-authorized parties from being able to do so, and so
            there would be no directions provided on the screen.{" "}
            <ol>
              <li>
                One of our first ideas was an unlocking method that would allow
                a user to open their phone by placing their fingers on the
                appropriate dots. This simple concept later went on to
                contribute to our final idea, where bubbles replaced the dots.
              </li>
              <li>
                This idea was inspired by the combination locks that are often
                used on lockers. As this is a type of lock many people have had
                experience with, we thought it could be a fun and easy way to
                open a phone, by simply rotating the lock to each of the three
                numbers that make up a combination, by following the specific
                unlocking method that combination locks use (moving past zero in
                two full rotations to the right before stopping at the first
                number, then completing one full rotation to the left and then
                continuing to the second number, then rotating to the right
                until the final number is reached, which would successfully open
                the lock).
              </li>
              <li>
                Another idea we had that was inspired by traditional locks was
                that a user would already have chosen a specific key, and then
                simply have to choose that key and 'insert' it into the lock to
                unlock their device.
              </li>
              <li>
                In this sketch, tapping on a bow and arrow, and dragging their
                finger back, and removing their finger would allow a user to
                fire a bow at a target. If the bullseye was hit, the phone would
                be unlocked.
              </li>
              <li>
                This was an idea that was present in both of our initial
                sketches. When presented with a field of multi-colored and sized
                bubbles, a user would have to pop certain bubbles in a
                particular order to unlock their phone. This sketch was the
                predecessor to our final idea, which we added onto for our final
                implementation.
              </li>
              <li>
                Inspired by carnival games, this sketch illustrates one of our
                ideas where a user would have to successfully complete a ring
                toss game by tapping, dragging, and flicking the ring to launch
                it onto the peg.
              </li>
              <li>
                In this unlocking sequence, a user would have to catch a
                particular butterfly to unlock their phone, by dragging their
                net across the screen and moving it over the butterfly they're
                looking to catch when presented with a screen full of
                different-looking butterflies.
              </li>
              <li>
                This idea would require a user to decorate a cupcake by dragging
                their finger along the screen to swirl icing onto a cupcake.
                Adding different types of icing or cupcake combinations could
                have been a way to flesh this idea out, as the inspiration came
                from wanting to have users "make" food they like.
              </li>
              <li>
                By pressing down on a needle with one finger, a user would lead
                a piece of thread through the eye of their needle.
              </li>
              <li>
                When presented with a puzzle with a few pieces in place, a user
                would have to tap and drag desired pieces into place in order to
                complete the image in this sketch. Once the puzzle is
                successfully completed, the phone will be unlocked.
              </li>
            </ol>
          </p>
          <h2>Detailed Sketches</h2>
          <img src="/assets/Bubbles_Details1.png"></img>
          <img src="/assets/Bubbles_Details2.png"></img>
          <p>
            After assessing our initial ideas from the previous set of sketches,
            we decided to combine a few of our ideas into our Bubbles idea. As
            per the 10 x 10 design method, our next set of sketches expanded
            upon the idea, illustrating the ways users can interact with it, and
            what it can do. As previously mentioned, this idea came from
            combining multiple sketches together– we wanted a method for
            unlocking that differed from the more typical and mundane
            touch-based methods of unlocking a phone, such as swiping once or
            tapping in a passcode. Because the number of touch-based inputs is
            finite, we wanted to balance the typical touch methods with a
            visually exciting experience for the user, using a multi-touch input
            as it’s less common for unlocking phones.{" "}
            <ol>
              <li>
                To facilitate a multi-touch input, we wanted multiple bubbles on
                the screen, so the user would need to select a particular number
                of bubbles from the set provided.
              </li>
              <li>
                This sketch details that the bubbles are colored to help the
                user identify which bubbles they need to click to unlock their
                phone.
              </li>
              <li>
                We wanted the bubbles to have changing qualities to provide some
                variability, not only to make the process more exciting but also
                to deter unauthorized users from unlocking the phone. This
                sketch details how the changing colors of the bubbles do this.
              </li>
              <li>
                As in the last sketch, we wanted the bubbles to have changing
                qualities to provide some variability, not only to make the
                process more exciting but also to deter unauthorized users from
                unlocking the phone. The changing size of the bubbles is another
                way that this is achieved, like the changing colors.
              </li>
              <li>
                We wanted a visual indicator for the user to clearly see which
                bubble they've pressed. By "pausing" the bubble that has been
                touched, this sketch shows how users can see which bubble
                they've selected, and which state it is in (with respect to its
                color and size).
              </li>
              <li>
                The unlocking method, as depicted in this detailed sketch is by
                holding down on each of the correct buttons in combination. As
                shown in sketch 5, the selected bubbles stop changing their size
                and color, so that the user can easily see all of the bubbles
                they've selected.
              </li>
              <li>
                To signal to the user that they've successfully unlocked their
                phone, the bubbles on their screen will begin to pop as the
                screen is "cleared" of bubbles and they are able to access their
                unlocked phone.
              </li>
              <li>
                In addition to the visual indication in sketch 7, we wanted to
                incorporate additional signs to the user that their phone is
                unlocked, and so by the "popping" sounds, users will have an
                auditory indicator that their phone is unlocking.
              </li>
              <li>
                If incorrect bubbles are pressed, users will clearly be able to
                see that the bubbles were not correct by how they "evade" the
                users' touch and fly away/shake.
              </li>
              <li>
                If a user's combination of buttons is incorrect, the screen will
                reset to a bubble blower, where swiping down allows the user to
                restart the bubble sequence and try unlocking their phone again.
              </li>
            </ol>
          </p>
        </div>
        <div className="labyrinthContent">
          <h1>Sensor Based Unlocking: Labyrinth</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d1CNcLy5uqA?si=271FSmlr8sdGVMux"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Labyrinth site: https://labyrinth-eight-gold.vercel.app/ </p>
          <p>Repository:https://github.com/ArcticGlacier/Labyrinth.git </p>
          <h2>Labyrinth Overview</h2>
          <p>
            For the sensor-based unlocking method, we were really interested in
            exploring a type of sensor we hadn’t used before, and so most of the
            ideas we kept from the preliminary round of brainstorming were of
            this type. From our initial sketches, we really liked the idea of a
            user having to manipulate the orientation of their phone to unlock
            it, and we thought it paired really well with having to solve a
            puzzle. A game that we both enjoyed when we were younger was the
            tilt maze, having to tilt the console to get the ball moving in the
            direction you wanted it to go, and being able to recreate this was a
            perfect marriage of our initial desires for this part of the
            project.
          </p>
          <h2>Concept Sketches</h2>
          <img src="/assets/G_sensor1.png"></img>
          <img src="/assets/G_sensor2.png"></img>
          <p>
            These sketches depict our ideas for sensor-based unlocking methods.
            We tried to incorporate a variety of sensors and input types in
            these sketches, and when it came down to deciding on which ideas to
            further develop, we took into consideration the practicality of
            these unlocking methods.{" "}
            <ol>
              <li>
                In this sketch, a locked phone would be represented by a
                labyrinth that the user would have to navigate by tilting their
                screen away from them, towards them, to the right, and left to
                move the ball in that direction. Once the user had deposited
                their ball in the correct hole, their phone would be unlocked.
              </li>
              <li>
                Another idea for using the tilt of a phone to unlock it. Here,
                changing the angle of the phone's orientation would unlock the
                phone, as in this example, lifting it from 0° to 90° would do.
              </li>
              <li>
                Utilizing the heart rate sensor found on some phones, we wanted
                the user to place their finger against the sensor, and once
                their heartbeat was detected, they would be able to access their
                phone.
              </li>
              <li>
                Through natural language processing, this idea aimed to take the
                user's input as they spoke a particular phrase, addressing their
                phone by the nickname they'd given it, to open their device, as
                a sort of verbal passcode to their phone.
              </li>
              <li>
                Once again, through detecting a device's movement, this idea
                looked to have the user "toss a frisbee" by shaking their phone
                as if they were preparing to launch a frisbee.
              </li>
              <li>
                By shaking the maracas to the correct tune, the user would be
                able to unlock their phone. A failed attempt would require the
                user to try to shake out the correct pattern again.
              </li>
              <li>
                In order to unlock, this idea would require the user to tilt
                their phone to the side to fill up the glass without
                underfilling or overfilling it in one go, without tilting too
                little or too much to the left.
              </li>
              <li>
                This sketch illustrates our idea to have the user rotate their
                phone to "flip" an hourglass, causing the sand to start falling,
                which would unlock their phone.
              </li>
              <li>
                Presented with a snow globe, here users would have to let it
                snow, shaking their phone to shake the snow globe and make the
                snow fall, which would open their device.
              </li>
              <li>
                In this sketch, a user would have to select the correct
                firecracker by tilting their phone, and once they'd selected the
                right one, they would wave their phone downwards to set it off,
                seeing a firework light-up the screen to let them know their
                phone was unlocked.
              </li>
            </ol>
          </p>
          <h2>Detailed Sketches</h2>
          <img src="/assets/Maze_Details1.png"></img>
          <img src="/assets/Maze_Details2.png"></img>
          <p>
            Once we evaluated all of our initial sketches, we decided to develop
            the idea for the labyrinth-based unlocking method. Following the 10
            x 10 design method, we created 10 sketches detailing how our
            labyrinth method would work. We came up with this idea after
            considering the different sensors we could gather input from and
            being reminded of handheld games that required tilting motions,
            mainly rolling a ball through a maze. After deciding to pursue this
            idea further, we kept coming back to the simple details of this type
            of puzzle game and contemplated different ways a user could interact
            with this unlocking technique. We wanted something simple and fun
            for the user to interact with, while also not being so simple that
            anyone could unlock the owner’s phone. The detailed sketches
            demonstrate the basics of how the labyrinth method looks and works.
            <ol>
              <li>
                Having a "labyrinth" layout was important to our idea as we
                wanted the user to have a clear visualization of the puzzle
                they'd need to navigate to unlock their phone.
              </li>
              <li>
                We wanted multi-colored bubbles as this would provide a variety
                of options for the user to select from.
              </li>
              <li>
                Having an ending point, as represented by the hole in this
                sketch was imperative as a visual indicator to the user as the
                finishing step of the unlocking process, similar to hitting the
                enter key after typing in a password.
              </li>
              <li>
                Multiple potential endpoints is an idea that came from wanting
                to obfuscate people who weren't meant to unlock the phone. This
                unlocking method requires the user to know which hole is the
                correct one ahead of time.
              </li>
              <li>
                To emulate the feeling of the handheld puzzle games and to
                maximize travel throughout the labyrinth we wanted users to be
                able to tilt their phones in 4 primary directions, as detailed
                in sketches 5-8, this sketch illustrating the user moving the
                ball to the left.
              </li>
              <li>
                To emulate the feeling of the handheld puzzle games and to
                maximize travel throughout the labyrinth we wanted users to be
                able to tilt their phones in 4 primary directions to move in
                those directions, as detailed in sketches 5-8, this sketch
                illustrating the user moving the ball to the right.
              </li>
              <li>
                To emulate the feeling of the handheld puzzle games and to
                maximize travel throughout the labyrinth we wanted users to be
                able to tilt their phones in 4 primary directions to move in
                those directions, as detailed in sketches 5-8, this sketch
                illustrating the user moving the ball upwards.
              </li>
              <li>
                To emulate the feeling of the handheld puzzle games and to
                maximize travel throughout the labyrinth we wanted users to be
                able to tilt their phones in 4 primary directions to move in
                those directions, as detailed in sketches 5-8, this sketch
                illustrating the user moving the ball downwards.
              </li>
              <li>
                This detail shows the user receiving a visual indication that
                their phone has been unlocked successfully.
              </li>
              <li>
                If the user does not get the ball into the right hole, the
                screen resets so that the user is back to the start and must try
                again, as seen in this sketch.
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
