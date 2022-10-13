import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import TodoTable from "./components/TodoTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import { getAllBooks, createBook } from "./services/BookService";
import { getAllTodos, createTodo } from "./services/todoService";
import Footer from "./components/Footer";
import CreateTodo from "./components/CreateTodo";
import useInput from "./hooks/useInput";

function App() {
  const [todo, todoBind, todoRst] = useInput("");
  const [category, todoCategory, todoCate] = useInput("");
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const todoHandleSubmit = (e) => {
    let data = {
      todo,
      category,
      isComplete: true,
    };
    console.log(data);
    createTodo(data).then(() => {
      setNumberTodos(numberOfTodos + 1);
    });
  };
  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberBooks(data.length);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CreateBook
            bookShelf={bookShelf}
            onChangeForm={handleOnChangeForm}
            handleSubmit={handleSubmit}
          />
          <CreateTodo
            todoBind={todoBind}
            todoCategory={todoCategory}
            todoHandleSubmit={todoHandleSubmit}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllBook} />
          <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllTodo} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BookTable books={books} />
          <TodoTable todos={todos} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
