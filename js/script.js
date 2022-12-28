// sidebar
const menuIconBtn = document.querySelector("[data-menu-icon-btn]");

const sidebar = document.querySelector("[data-sidebar]");
const sidebarText = document.querySelectorAll(".sidebar-link .hidden-sidebar");

//  open/close sidebar
menuIconBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

//****************************************** */
// changing theme
//****************************************** */
const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const root = document.documentElement;
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

const setActive = (elem, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } else {
    elem.classList.add(active);
  }
};

//sets theme (light / dark)
const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else if (val === light) {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

//checks for current theme (saved to localStorage, and adds saved theme)
if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else if (currentTheme === light) {
    switcher[0].classList.add(active);
  }
}

//toggle theme tab
toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

//set active state (light / dark)
for (let elem of switcher) {
  // console.log(elem);
  elem.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(elem, switcherBtn);
    setTheme(toggle);
  });
}
