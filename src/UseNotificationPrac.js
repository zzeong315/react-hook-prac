import React from 'react';

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const callNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return callNotif;
}

const UseNotificationPrac = () => {
  const triggerNotif = useNotification("Can i use your code?");
  return (
    <div>
      <h1>14. useNotification</h1>
      <button onClick={triggerNotif}>Question</button>
    </div>
  )
}

export default UseNotificationPrac;
