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
          <h1>Projects</h1>
        </Link>
      </nav>
      <div className="homeContent">
        <img src="https://images.unsplash.com/photo-1544954412-78da2cfa1a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"></img>
        <div className="biography">
          <h1>Gagan Brar</h1>
          <h2> CPSC 581 Student</h2>
          <p>An aspiring fullstack developer who loves to code.</p>
        </div>
      </div>
    </div>
  );
}
