import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "./components/atoms/PageTitle";
import { getTitle } from "./store/selectors/example";

const App = () => {
  const title = useSelector(state => getTitle(state));

  return (
    <div>
      <PageTitle>{title}</PageTitle>
    </div>
  );
};

export default App;
