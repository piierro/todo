import React from 'react';
import "./filterBtn.css"

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <div className="filterBtn">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("incomplete")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default FilterButtons;
