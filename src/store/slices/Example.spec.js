import { exampleSlice } from "./Example";

describe("exampleSlice", () => {
  const { reducer } = exampleSlice;

  const initialState = {
    data: {},
    loading: false,
    error: {}
  };

  it("should set the title", () => {
    const action = {
      type: exampleSlice.actions.setTitle.type,
      payload: "This is a title"
    };
    const state = reducer(initialState, action);

    expect(state.data.title).toBe("This is a title");
  });
});
