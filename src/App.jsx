import React, { useState } from "react";
import { motion } from "framer-motion";
import { entry } from "./variants";
import "./App.css";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";

function App() {
  const [selectedTags, setSelectedTags] = useState([]);

 
  return (
    <main className="outer-container">
      <div
        
        className="inner-container"
      >
        <motion.div 
        className="bg-header"
        variants={entry}
        initial="hidden"
        animate="visible"
        >

        </motion.div>

        {selectedTags.length >= 1 && (
          <FilterBar
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        )}
        <Card selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </main>
  );
}

export default App;
