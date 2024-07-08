import React from 'react';
import "./filterBtn.css"

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
  activeFilter: string;
  completedCount: number;
}

const FilterButtons: React.FC<FilterButtonsProps> = React.memo(({ setFilter, activeFilter, completedCount }) => {
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
        Completed ({completedCount})
      </button>
    </div>
  );
});

export default FilterButtons;
