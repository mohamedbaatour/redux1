export const addnewtodo = (input) => ({
  type: "addnewtodo",
  payload: {
    id: Math.random(),
    description: input,
    isDone: false,
  },
});

export const checkTask = (id) => ({
  type: "checkTask",
  payload: id,
});
export const deleteTask = (id) => ({
  type: "deleteTask",
  payload: id,
});
