import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "../data";
import "../css/card.css";
import { bounceIn } from "../variants";

function Card({ selectedTags, setSelectedTags }) {
  const handleTagClick = (currentTag) => {
    selectedTags.includes(currentTag)
      ? null
      : setSelectedTags([...selectedTags, currentTag]);
  };

  // Filter data based on selected tags
  const filteredData = data.filter(({ role, level, languages }) => {
    return selectedTags.every((tag) =>
      [role, level, ...languages].includes(tag)
    );
  });

  return (
    <div className={`card-wrapper ${selectedTags.length >= 1 && "margin"}`}>
      <div className={`card-container ${selectedTags.length >= 1 && "margin"}`}>
        {filteredData.map((obj) => (
          <AnimatePresence key={obj.id}>
            <motion.div
              className={`card ${[1, 2].includes(obj.id) && "left-border"}`}
              // variants={bounceIn}
              // initial="hidden"
              // animate="visible"
              // custom={obj.id} 
            >
              <div className="logo-text-container">
                <div className={`logo-wrapper ${checkClassName(obj.id)}`}>
                  <img
                    src={obj.logo}
                    alt={`Logo of ${obj.company}`}
                    className={`logo-img `}
                  />
                </div>
                <div className={`text-container ${checkClassName(obj.id)}`}>
                  <div className="name-new-featured-container">
                    <p className="company-name">{obj.company}</p>
                    {obj.new && (
                      <span className={`new ${checkClassName(obj.id)}`}>
                        New!
                      </span>
                    )}
                    {obj.featured && <span className="featured">Featured</span>}
                  </div>
                  {obj.id === 1 ? (
                    <h1 className="position">{obj.position}</h1>
                  ) : (
                    <h2 className="position">{obj.position}</h2>
                  )}
                  <ul
                    className={`time-type-location-container ${checkClassName(
                      obj.id
                    )}`}
                  >
                    <li className="time-posted">{obj.postedAt}</li>
                    <li className="dot"></li>
                    <li className="contract">{obj.contract}</li>
                    <li className="dot"></li>
                    <li className="location">{obj.location}</li>
                  </ul>
                </div>
              </div>
              <ul className="tag-container">
                <li className="tag" onClick={() => handleTagClick(obj.role)}>
                  {obj.role}
                </li>
                <li className="tag" onClick={() => handleTagClick(obj.level)}>
                  {obj.level}
                </li>
                {obj.languages.map((language, i) => (
                  <li
                    key={i}
                    className="tag language"
                    onClick={() => handleTagClick(language)}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );

  function checkClassName(id) {
    const classNames = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
    ];

    // Ensure the id is between 1 and 9
    if (id >= 1 && id <= 9) {
      return classNames[id - 1]; // id 1 corresponds to index 0, hence id - 1
    } else {
      return "";
    }
  }
}

export default Card;