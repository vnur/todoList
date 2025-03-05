const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rawToDos = localStorage.getItem(todoKey);
  if (!rawToDos) return [];
  return JSON.parse(rawToDos);
};

export const setLocaStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
