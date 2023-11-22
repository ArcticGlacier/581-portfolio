import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <nav className="navBar">
        <Link>
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
      </nav>
      <div className="homeContent">
        <img src="https://images.unsplash.com/photo-1544954412-78da2cfa1a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"></img>
        <div className="biography">
          <h1>Gagan Brar</h1>
          <h2> CPSC 581 Student</h2>
          <p>
            Hello! I am a fifth year computer science student who has
            aspirations to become a software developer after graduating this
            upcoming December. Some of my hobbies are crocheting, drawing,
            playing piano, and gaming!{" "}
          </p>
          <p>
            I chose to major in computer science as I feel it has a good balance
            of art and logic.
          </p>
        </div>
      </div>
    </div>
  );
}
