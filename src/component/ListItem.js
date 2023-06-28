import React from "react";
const ListItem = (listItem) => {
  return (
    <div>
      <b>{listItem.date}</b>
      <b>{listItem.text}</b>
    </div>
  );
};

export default ListItem;
