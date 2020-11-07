import type { Column, Entities, Id, Task, TaskMap } from "./types";

const tasks: Task[] = Array.from({ length: 20 }, (v, k) => k).map(
  (val: number): Task => ({
    id: `task-${val}`,
    content: `Task ${val}`,
  })
);

const taskMap: TaskMap = tasks.reduce(
  (previous: TaskMap, current: Task): TaskMap => {
    previous[current.id] = current;
    return previous;
  },
  {}
);

const todo: Column = {
  id: "todo",
  title: "To do",
  taskIds: tasks.map((task: Task): Id => task.id),
};

const done: Column = {
  id: "done",
  title: "Done",
  taskIds: [],
};

const another: Column = {
  id: "another",
  title: "Another",
  taskIds: [],
};

const entities: Entities = {
  columnOrder: [todo.id, done.id, another.id],
  columns: {
    [todo.id]: todo,
    [done.id]: done,
    [another.id]: another
  },
  tasks: taskMap,
};

export default entities;
