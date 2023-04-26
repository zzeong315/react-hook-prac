import React from 'react';

const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if(onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }    
  };
  return confirmAction;
}

const UseConfirmPrac = () => {
  const deleteEverything = () => console.log("Deleting everything...");
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm("Are you sure", deleteEverything, abort);
  return (
    <div>
      <h1>7. useConfirm</h1>
      <button onClick={confirmDelete}>Delete everything</button>
    </div>
  )
}

export default UseConfirmPrac;
