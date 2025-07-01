let captaliseStr = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    .join(" ");
};

console.log(captaliseStr("Helooo uiguiuiwerfgerf verv refgvve efwefgv "));
