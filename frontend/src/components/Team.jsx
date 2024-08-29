import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aut
            unde alias nisi deleniti adipisci delectus harum vitae minima
            corporis modi dolor facere aperiam laborum minus at aspernatur
            illum. Dicta.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
