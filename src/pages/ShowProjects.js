import React, { Fragment } from "react";
import ScreenCapture from "../components/Projects/ScreenCapture";
import BookMark from "../components/Projects/BookMark";
import { useParams } from "react-router";

const ShowProjects = () => {
  const params = useParams();

  switch (params.id) {
    case "1":
      return <ScreenCapture />;
    case "2":
      return <BookMark />;
  }
};

export default ShowProjects;
