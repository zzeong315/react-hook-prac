import React, { useState } from 'react';

const content = [{
  animal: "cat",
  emoji: "🐱",
},{
  animal: "dog",
  emoji: "🐶",
},{
  animal: "pig",
  emoji: "🐷",
},{
  animal: "rabbit",
  emoji: "🐰",
},{
  animal: "monkey",
  emoji: "🐵",
},
]

const useTabs = (initialIndex, allContents) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  if(!allContents || !Array.isArray(allContents)) {
    return;
  };

  return {
    currentItem : allContents[currentIndex],
    changeItem : setCurrentIndex,
  }
}

const UseTabPrac = () => {
  const {currentItem, changeItem} = useTabs(0, content)
  return (
    <div>
      <h1>3. useTab</h1>
      {content.map((item, index) => (
        <button key={index} onClick={() => changeItem(index)}>{item.animal}</button>
      ))}
      <h1>{currentItem.emoji}</h1>
    </div>
  )
}

export default UseTabPrac;
