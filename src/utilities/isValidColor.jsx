export const isValidColor = (colorName) => {
  const colorTester = document.createElement('span');
  colorTester.style.color = 'red';

  document.body.appendChild(colorTester);
  colorTester.style.color = colorName;

  const isColorValid = colorTester.style.color !== 'red';

  document.body.removeChild(colorTester);

  return isColorValid;
};
