import { createSelector } from "@reduxjs/toolkit";

export const selectExample = state => state.example;

export const getExampleData = createSelector(
  selectAppraisal,
  example => example.data
);

export const getTitle = createSelector(getExampleData, data => data.title);
