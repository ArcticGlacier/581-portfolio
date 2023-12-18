import { Link } from "react-router-dom";
import "./FlashFriends.css";

export default function FlashFriends() {
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
        <Link to={"/CelledPhone"}>
          <h1>CelledPhone</h1>
        </Link>
        <Link>
          <h1>FlashFriends</h1>
        </Link>
      </nav>
      <div className="celledPhoneContent">
        <h1>Project Overview</h1>
        <p>
          For this project, we were tasked with creating a novel interface to
          augment communication and collaboration, whether it be in-person or
          remote. After coming up with 20 concept sketches, we decided to create
          an application that provides users with an easy way to schedule
          meetings with friends and collaborate to create a shared collection of
          memories from their times together. Continuing the 10x10 design
          process, we developed our idea further with detailed sketches,
          exploring the different ways our ideas could be implemented. After
          settling on the features we wanted our interface to have, we used
          Figma to determine how we wanted our design to look. Flash Friends
          gives users a way to not only plan in-person or remote meetings with
          friends but also allows them to reflect back on the times they’ve
          spent with them, by providing a way for friends to compile memories
          from their adventures.
        </p>
        <div className="celledPhoneInfo">
          <h2>Concept Sketches</h2>
          <img src="/assets/p4concept1.png"></img>
          <img src="/assets/p4concept2.png"></img>
          <img src="/assets/p4concept3.png"></img>
          <img src="/assets/p4concept5.png"></img>

          <ol>
            <li>
              The idea behind our community board sketch was to create a
              commonplace for members of a community to be able to communicate,
              organize, and attend events. A communal corkboard where members
              can share invitations, notices, and information as well as accept
              and reply to these things.
            </li>
            <li>
              Differing from everyday mobile games, this multiplayer game would
              allow users to maximize interactions with each other using
              gestures at the camera to make a move, and the microphone to chat
              during the gameplay.
            </li>
            <li>
              Many of our concept sketches were inspired by the lack of
              connection that people can often feel in long-distance friendships
              and relationships. Heatpad touch was imagined with the aim of
              allowing a partner to initiate a physical connection. Once both
              partners press their hands to their screens, their hands will warm
              up.
            </li>
            <li>
              This idea would allow users to co-parent an animal together,
              working together to ensure that it’s fed and taken care of!
            </li>
            <li>
              Long-distance tree decorating provides families with an
              opportunity to continue holiday traditions, for the times they
              can’t celebrate in person. Together, a family can decorate their
              digital tree.
            </li>
            <li>
              For the times when life gets busy and friends can’t keep in touch
              daily, the Codairy would let friends share what they did each day
              and any thoughts or feelings they may want to share with their
              community.
            </li>
            <li>
              VR Date Night offers another way for partners to feel like they’re
              right next to each other, even if they’re in completely different
              places.
            </li>
            <li>
              The idea behind the collaborative workout app was to help
              encourage and motivate users to consistently work out. This
              application would offer users a way to view their and their
              friends’ progress to help set and strive towards new goals, and to
              support their friends in their fitness journeys!
            </li>
            <li>
              Spontaneous group planning. Often, thinking about all the things
              we have to do in the future can hold us back, and this idea was
              conceived to combat that. By initiating a hangout, users can view
              a notification and push their bubble toward the hangout bubble to
              confirm that they want to go to the hangout.
            </li>
            <li>
              Digital Footprint Gallery would provide users with the ability to
              reflect on where they’ve been, and the memories that they’ve
              created there with their friends. All friends who have visited the
              place together can upload photo memories and videos with captions
              that the group can all edit, creating a collaborative photo
              gallery between friends.
            </li>
          </ol>

          <h2>Detailed Sketches</h2>
          <img src="/assets/p4detail1.png"></img>
          <img src="/assets/p4detail2.png"></img>
          <img src="/assets/p4detail3.png"></img>
          <p>
            While one of our first ideas was to create a spontaneous meeting
            planner, as we transitioned from our initial sketches to our
            detailed sketches, we realized that we wanted to allow for even more
            interactivity between friends. Going through our concept sketches we
            decided to add the ability for users to work with their friends to
            curate a gallery of memories from their previous meetings as well.
            From there, we worked on the detailed sketches to continue working
            out how we wanted our interface to operate.
          </p>
          <ol>
            <li>
              The ability to add friends to your network. These would be people
              who are in your close group of friends that you would initiate
              spontaneous hangouts with.
            </li>
            <li>
              By creating an event, you can select a location and time and
              friends to invite to the hangout.
            </li>
            <li>
              If a friend invites you, you are notified via notification and you
              can accept or decline.
            </li>
            <li>
              Everyone invited to the hangout can witness who accepts (their
              bubble turns green) and who declines the hangout (their bubble
              turns red). People who have not responded to the invite remain
              yellow. This puts pressure on people to respond or to come hangout
              if they see everyone else accepting, due to the fear of missing
              out.
            </li>
            <li>
              After an event, a pin appears on a map at the event location, and
              the date is also listed.
            </li>
            <li>
              You can select the pin to add photos to the memory. These pins
              will appear for everyone who attended the event, and thus they
              will automatically have access to any photos added to a pin.
              Making it convenient to share photos by simply taking pictures in
              this application from the getgo, and no need to send to friends
              afterwards as they already have access to the shared photo album.
            </li>
            <li>
              Swipe right to see photos of a single hangout session. If multiple
              hangouts have occurred at the same location, swipe down to see a
              new hangout session (a hangout that occurred at the same location
              on a different date).
            </li>
            <li>
              Add schedules to your profile so friends are aware that you are
              busy during certain times, giving them an idea of when the best
              time to trigger a spontaneous hangout is.
            </li>
            <li>
              Your profile also displays friendship statistics, giving you an
              idea of which friends you hang out with the most, who you haven’t
              seen for a while, who you should initiate contact with if you wish
              to maintain the friendship.
            </li>
            <li>
              There will be a navbar at the bottom to navigate between the
              map/memories screen, the network screen where you trigger
              hangouts, and your profile page which has your schedule, list of
              friends, and their statistics.
            </li>
          </ol>
          <div></div>
          <h1>Concept Video</h1>
          <h2>Storyboard</h2>
          <img src="/assets/rotoscope.png"></img>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W6qL8ZWTv9A?si=o9_fzDcCuXQMIedN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <h1>Final Product</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Dsjk3gJtGaU?si=ScQ61xhWBZ6uAWZA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
