const getMenu = document.querySelector("body");

const buttonStyle =
  "color: #fff; font-weight: 500; padding: .55rem 1rem; position: fixed; top: 30%; right: 0; background-image: linear-gradient(to right, #8360c3, #2ebf91); border: none; border-radius: 3rem; z-index: 1000; font-size: 1rem; cursor: pointer; font-family: inherit;";

const containerStyle =
  "font-family: inherit; width: 65%; height: 90%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 1rem; background-image: linear-gradient( to right, #7c47b9, #740157); padding: 1rem 2rem; z-index: 2000; display: none;";

const menuContainerStyle = "display: flex; margin-bottom: 2rem;";

const titleStyle =
  "margin-right: auto; color: white; font-size: 1.5rem; font-weight: 500;";

const closebtnStyle =
  "padding: 0.3rem 0.7rem; color: white; border-radius: 0.3rem; border: 2px solid red; cursor: pointer;";

const videoplacerStyle =
  "width: 100%; height: 85%; overflow: hidden; border-radius: 1rem; border: 2px solid red";

const hideContainer = (container, btn) => {
  btn.addEventListener("click", () => {
    container.style.display = "none";
  });
};

const showContainer = (container, btn) => {
  btn.addEventListener("click", () => {
    container.style.display = "block";
  });
};

const createFrontend = (videoId) => {
  // creating need elements
  const container = document.createElement("div");
  const menuContainer = document.createElement("div");
  const title = document.createElement("h4");
  const closebtn = document.createElement("span");
  const videoplacer = document.createElement("div");
  const frame = document.createElement("iframe");

  //   Giving classes to the some elements
  //   container.classList.add("localhost__container");
  //   closebtn.classList.add("localhost__closebtn");
  hideContainer(container, closebtn);

  //   giving style to these elements
  container.style.cssText = containerStyle;
  menuContainer.style.cssText = menuContainerStyle;
  title.style.cssText = titleStyle;
  closebtn.style.cssText = closebtnStyle;
  videoplacer.style.cssText = videoplacerStyle;

  //   Adding some important attribute to iframe
  frame.setAttribute("frameborder", "0");
  frame.setAttribute("width", "100%");
  frame.setAttribute("height", "100%");
  frame.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);

  // giving values to those element which required some values.
  title.textContent = "Problem Solver";
  closebtn.textContent = "Close";

  //   adding these elements to the page
  menuContainer.appendChild(title);
  menuContainer.appendChild(closebtn);
  videoplacer.appendChild(frame);
  container.appendChild(menuContainer);
  container.appendChild(videoplacer);

  return container;
};

if (getMenu) {
  const button = document.createElement("button");
  button.textContent = "Video Solution";
  button.style.cssText = buttonStyle;
  const container = createFrontend("tgbNymZ7vqY");
  getMenu.appendChild(button);
  getMenu.appendChild(container);
  showContainer(container, button);
}
