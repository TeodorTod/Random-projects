// src/navigation.js
let navigate;

export const setNavigate = (navFunction) => {
  console.log("Setting navigate function in navigation service");
  navigate = navFunction;
};

export const navigateTo = (path) => {
  if (navigate) {
    console.log(`Navigating to ${path}`);
    navigate(path);
  } else {
    console.error("Navigate function is not set");
  }
};
