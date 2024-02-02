import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Book from "../components/Book";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul class="list">
        <li class="i-one">
          <Link to="/books">Books</Link>
        </li>
        <li class="i-two">Add Book</li>
        <li class="i-three">Selected Books</li>
      </ul>
    </div>
  );
};

export default Homepage;
