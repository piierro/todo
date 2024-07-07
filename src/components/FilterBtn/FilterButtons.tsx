import React from 'react';
import "./filterBtn.css"

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
  activeFilter: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, activeFilter }) => {
  return (
    <div className="filterBtn">
      <button 
        className={activeFilter === "all" ? "active" : ""} 
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button 
        className={activeFilter === "incomplete" ? "active" : ""} 
        onClick={() => setFilter("incomplete")}
      >
        Active
      </button>
      <button 
        className={activeFilter === "completed" ? "active" : ""} 
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
