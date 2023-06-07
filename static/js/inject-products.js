function instantiate() {
  const container = document.querySelector("#container");
  const outerDivBox = document.createElement("div");
  const innerImage = document.createElement("img");
  // add classes
  outerDivBox.classList.add("box");

  // add attributes
  outerDivBox.setAttribute("data-item", "Test");

  container.appendChild(outerDivBox);

  innerImage.src.add("images/header-2.jpg");

  innerImage.appendChild(outerDivBox);
}
