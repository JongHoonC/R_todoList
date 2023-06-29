import React, { useState, useRef } from "react";
import Input from "./Input";
import Item from "./Item";

const Container = () => {
  const nextId = useRef(0);

  const [dataValue, setDataValue] = useState({
    date: "",
    text: "",
  });
  const [items, setItems] = useState([]);
  // 초기 값을 빈 배열로 설정한다
  const { date, text } = dataValue;

  const todoData = (e) => {
    const { value, name } = e.target;
    setDataValue({
      ...dataValue, // 기존 dataValue 객체를 복사 한다.
      [name]: value, // name 이라는 키를 가진 값을 value로 설정한다
    });
  };
  const dataSet = () => {
    const dataValues = {
      id: nextId.current,
      date,
      text,
    };

    setItems(items.concat(dataValues));
    setDataValue({
      date: "",
      text: "",
    });
    // console.log(nextId.current, "id값");
    nextId.current += 1;
  };
  const onRemove = (id) => {
    console.log(id);
    // setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <div className="head">
        <Input todoData={todoData} dataSet={dataSet} dataValue={dataValue} />
      </div>
      <div className="list">
        <b>날짜</b>
        <b>할 일</b>
        <b>수정 / 삭제</b>
      </div>
      <Item onRemove={onRemove} items={items} />
    </div>
  );
};

export default Container;
