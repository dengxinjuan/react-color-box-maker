import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: "1", color: "blue", width: "200px", height: "200px" },
    { id: "2", color: "red", width: "200px", height: "200px" },
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const add = (newbox) => {
    let thebox = { ...newbox, id: uuid() };
    setBoxes((boxes) => [...boxes, thebox]);
  };

  const boxesList = boxes.map((p) => (
    <Box
      id={p.id}
      color={p.color}
      width={p.width}
      hieght={p.hieght}
      remove={remove}
      key={p.id}
    />
  ));

  return (
    <div>
      <div>
        <NewBoxForm add={add} />
      </div>
      {boxesList}
    </div>
  );
};

export default BoxList;
