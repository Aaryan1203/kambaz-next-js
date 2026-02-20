"use client";

import ZustandCounter from "./counter";
import ZustandTodos from "./todos/ZustandTodoList";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Zustand Examples</h2>
      <ZustandCounter />
      <ZustandTodos />
    </div>
  );
}
