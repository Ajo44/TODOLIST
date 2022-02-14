import React from "react";

function All() {
  return (
    <>
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
    </>
  );
}

export default All;
