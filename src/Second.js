import React from "react";
import { useState } from "react/cjs/react.development";
import "./Second.css";

function Second() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const addItem = () => {
    if (title) {
      setItemtit("");
      setItemdesc("");
    } else {
    }
  };
  const deleteItem = (ind) => {
    const leftItems = itemtit.filter((index) => {
      return (ind = !index);
    });
    setItemtit(leftItems);
  };
  return (
    <div className="main">
      <div className="left-bar">
        <h1>TODO </h1>
        <input
          className="input-title"
          type="text"
          placeholder="Add List"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-des"
          type="text"
          placeholder="Add Decsription"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="btn-add"
          disabled={!title}
          title="ADD ITEM"
          onClick={addItem}
        >
          ADD
        </button>
      </div>
      <div className="divider"></div>
      <div className="right-bar">
        <h1>TODO LIST </h1>
        <button className="btn-logout">LOGOUT</button>
        <div className="search-bar">
          <input className="searchbar" placeholder="Search"></input>
        </div>
        <div className="dropdown">
          <select>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="favoruoties">Favoruoties</option>
            <option value="deleted">Deleted</option>
          </select>
        </div>
        <div className="main-display">
          <i onClick={deleteItem}></i>
        </div>
      </div>
    </div>
  );
}

export default Second;
