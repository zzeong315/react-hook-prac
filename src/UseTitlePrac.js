import React, { useEffect, useState } from 'react'

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const UpdateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(UpdateTitle, [title])
  return setTitle;
}

const UseTitlePrac = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Hooks"), 3000);

  return (
    <div>
      <h1>5. useTitle</h1>
    </div>
  )
}

export default UseTitlePrac;
