import React from "react";
import PageTitle from "../../atoms/PageTitle";
import { useHome } from "./useHome";

const Home = () => {
  const { title, handleSetTitle } = useHome();
  return (
    <>
      <PageTitle>{title}!</PageTitle>
      <button onClick={handleSetTitle}>Hello?</button>
    </>
  );
};

export default Home;
