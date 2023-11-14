const getElement = (selection) => {
  const element = document.querySelector(selection);

  if(element){
    return element
  } else {
    throw new Error (`Couldn't find an element`);
  }
}

export default getElement;