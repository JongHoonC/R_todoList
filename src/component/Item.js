import React from "react";
import List from "./List";
const Item = ({ items, onRemove }) => {
  return (
    <div>
      {items.map((item) => (
        <List onRemove={onRemove} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Item;
