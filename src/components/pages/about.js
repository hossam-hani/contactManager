import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">About </h1>
      <p className="lead">this is first real react Application</p>
      <hr className="my-4" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ullam
        odio, inventore distinctio sint adipisci earum neque aspernatur rem
        tempore nisi dolore optio ducimus, natus dolorum voluptas? Quam,
        pariatur ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio sed in nemo neque, reiciendis placeat harum molestias
        obcaecati tempora nulla maxime! Quidem sit, incidunt reprehenderit
        blanditiis soluta aspernatur repellendus aliquam!
      </p>
      <Link className="btn btn-primary btn-lg" to="/" role="button">
        Contact
      </Link>
    </div>
  );
};
