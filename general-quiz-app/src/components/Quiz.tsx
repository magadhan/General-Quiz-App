import { Fragment, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
  }

function Quiz = (items, heading, onSelectItem) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

  let score = 0;
  return (
    <>
      <h1>Score: {score}</h1>
      <h2>Whatever</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
    </>
  );
};

export default Quiz;
