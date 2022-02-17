export const isInputQuantityAccepted = (length: number): boolean => {
  const minLen = 1;
  if (length <= minLen) return false;
  return true;
};

export const changeErrorStyling = (isVisible: boolean): void => {
  let errorHeader4 = document.querySelector("#food-error") as HTMLElement;
  if (isVisible === true) {
    errorHeader4.style.visibility = "visible";
  } else {
    errorHeader4.style.visibility = "hidden";
  }
};

export const pickRandomFood = (textInputArr: string[]): string => {
  return textInputArr[Math.floor(Math.random() * textInputArr.length)];
};

export const changeAreaOfComponentVisibility = (isVisible: boolean): void => {
  let componentArea = document.querySelector(".result-display") as HTMLElement;
  if (isVisible === true) {
    componentArea.style.visibility = "visible";
  } else {
    componentArea.style.visibility = "hidden";
  }
};
