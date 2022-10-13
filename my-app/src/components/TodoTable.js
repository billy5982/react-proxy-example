import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
const TodoTable = ({ todos }) => {
  if (todos.length === 0) return null;

  return (
    <div className="table-wrapper">
      <div className="table-box">
        <h2>My Books</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Book</th>
                <th>Category</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
                    <td>{index + 1}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.isComplete ? <FaLock /> : <FaLockOpen />}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoTable;
