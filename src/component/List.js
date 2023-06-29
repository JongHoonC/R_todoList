import React from "react";
import Button from "./Button";
const List = ({ item, onRemove }) => {
  const list = {
    display: "flex",
    width: "800px",
    margin: "0 auto",
    padding: "20px 40px 20px 0px",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  const listStyle = {
    backgroundColor: "#fcfdf0",
    border: "none",
    fontSize: "20px",
  };
  return (
    <div style={list} onClick={onRemove}>
      <input style={listStyle} disabled type="text" defaultValue={item.date} />
      <input style={listStyle} disabled type="text" defaultValue={item.text} />
      <Button onRemove={onRemove} item={item} />
    </div>
  );
};

export default List;
