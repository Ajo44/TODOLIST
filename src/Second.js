import React from "react";
import { useState } from "react/cjs/react.development";
import "./Second.css";
import { firebase } from "./Firebase/Firebase";

function Second() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [dell, setDell] = useState([]);
  const [active, setActive] = useState();
  const renderdata = {
    ren: [...],
  };
  const Signout = () => {
    firebase.auth().signOut();
  };
  const addItem = (e) => {
    e.preventDefault();

    const data = {
      id: new Date().getTime().toString(),
      todo: title,
      details: desc,
    };
    if (title) {
      setList((sample) => [...sample, data]);
      setTitle("");
      setDesc("");
    }
  };
  const deleteItem = (index) => {
    renderdata.list = index;
    const leftItems = list.filter((a) => {
      return index != a.id;
    });
    setList(leftItems);
    console.log(renderdata);
  };

  const completeItem = (id) => {
    const comItems = list.filter((a) => {
      return id != a.id;
    });
    console.log(comItems);
    setList(comItems);
  }; /*
  const favItem = (ind) => {
    const leftItems = list.filter((index) => {
      return (ind = !index);
    });
    setList(leftItems);
  };*/
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
        <button className="btn-logout" onClick={Signout}>
          LOGOUT
        </button>
        <div className="search-bar">
          <input className="searchbar" placeholder="Search"></input>
        </div>
        <div className="dropdown">
          <select>
            <option value="all" onClick={() => setActive("All")}>
              All
            </option>
            <option value="completed" onClick={() => setActive("Completed")}>
              Completed
            </option>
            <option value="favoruoties" onClick={() => setActive("Favourites")}>
              Favoruoties
            </option>
            <option value="deleted" onClick={() => setActive("Deleted")}>
              Deleted
            </option>
          </select>
        </div>
        <div className="main-display">
          {list.map((a) => {
            return (
              <div className="child" key={a.id}>
                <h2>{a.todo}</h2>
                <span>{a.details}</span>
                <div className="todo-btn">
                  <i className="fa-solid fa-star" aria-hidden="true"></i>

                  <i
                    className="fa-solid fa-circle-check"
                    aria-hidden="true"
                    onClick={() => completeItem(a.id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => deleteItem(a.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Second;
