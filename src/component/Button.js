import React from "react";

const Button = ({ onRemove, item }) => {
  const btnStyle = {
    width: "50px",
    height: "30px",
  };

  return (
    <div>
      <button style={btnStyle}>수정</button>
      <button onClick={() => onRemove(item.id)} style={btnStyle}>
        삭제
      </button>
    </div>
  );
};
export default Button;
