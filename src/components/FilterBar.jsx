import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import removeIcon from "../assets/images/icon-remove.svg";
import { entry } from "../variants";


import "../css/filterBar.css";

function FilterBar({ selectedTags, setSelectedTags }) {
  const removeTag = (currentTag) => {
    if (selectedTags.includes(currentTag)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== currentTag));
    } else {
      setSelectedTags([...selectedTags, currentTag]);
    }
  };
  const reset = () => {
    setSelectedTags([]);
  };
  return (
    <div className="bar-wrapper">
      <AnimatePresence mode="wait">
      <motion.div 
      className="bar-container"
      // variants={entry}
      //   initial="hidden"
      //   animate="visible"
      >
        <div className="tags">
          {selectedTags.map((tag, i) => (
            <div key={i} className="remove-tag-wrapper">
              <p className="tag-name">{tag}</p>
              <button className="btn remove-btn" onClick={() => removeTag(tag)}>
                <img
                  src={removeIcon}
                  alt="Remove Icon"
                  className="remove-icon"
                />
              </button>
            </div>
          ))}
        </div>
        <button className="btn clear-btn" onClick={reset}>Clear</button>
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FilterBar;
