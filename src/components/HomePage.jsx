import React from "react";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const university = searchParams.get("university");
  const lesson = searchParams.get("lesson");
  const date = searchParams.get("date");
  const name = searchParams.get("name");

  return (
    <>
      <div>{university}</div>
      <div>{lesson}</div>
      <div>{date}</div>
      <div>{name}</div>
    </>
  );
};
