import React, { useContext } from "react";
import { AllContext } from "../context_api/GlobalProvider";

const FilterBox = () => {
  const { dispatch, filter } = useContext(AllContext);
  return (
    <div className="filter-box">
      {["all", "medium", "hard"].map((filterItem) => (
        <button
          key={filterItem}
          className={`btn btn-ui ${
            filter === filterItem && "border border-[#1098ad] bg-[#343a40]"
          }`}
          onClick={() => dispatch({ type: filterItem })}
        >
          {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBox;
