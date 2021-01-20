import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTitle } from "../../../store/selectors/example";
import { exampleSlice } from "../../../store/slices/Example";

export const useHome = () => {
  const dispatch = useDispatch();
  const title = useSelector(state => getTitle(state));

  const handleSetTitle = () => {
    const hellos = ["Hello", "Bonjour", "Hola", "Ciao", "Guten Tag"];
    const randomHello = hellos[Math.floor(Math.random() * hellos.length)];

    dispatch(exampleSlice.actions.setTitle(randomHello));
  };

  return { title, handleSetTitle };
};
