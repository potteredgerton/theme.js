var themebtn = document.createElement("img");
themebtn.id = "themebtn";
var currenttheme;

//CSS linking
var link = document.createElement("link");
link.type = "text/css";
link.setAttribute("rel", "stylesheet");
link.href = `https://portfolio.pottere6.repl.co/theme.css`
document.head.appendChild(link);

//Check for dark mode
var lightmq = window.matchMedia("(prefers-color-scheme: light)");
var darkmq = window.matchMedia("(prefers-color-scheme: dark)");

if (lightmq.matches == true) {
  currenttheme = "light";
} else if (darkmq.matches == true) {
  currenttheme = "dark";
} else {
  currenttheme = "light";
}

theme();
theme();

//Theme function
function theme() {
  if (currenttheme == "light") {
    document.body.setAttribute("theme", "dark");
    themebtn.src = "https://portfolio.pottere6.repl.co/images/dark.svg";
    themebtn.style.filter = "invert(100%)";
    currenttheme = "dark";
  } else if (currenttheme == "dark") {
    document.body.setAttribute("theme", "light");
    themebtn.src = "https://portfolio.pottere6.repl.co/images/light.svg";
    themebtn.style.filter = "";
    currenttheme = "light";
  }
}

//Add the click event listener
themebtn.onclick = () => { 
  theme()
};

//Add the button to the page
document.body.appendChild(themebtn);
