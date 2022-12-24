# Theme.js
Theme.js is a javascript file that allows users to toggle between themes with a click of a button. It also takes into account the users preferred color scheme using media querys.

## Usage
To use theme.js all you need to do it copy the below <code>code</code> at the ending of your <code>body</code> tag. Make sure that you do not have anything on your page set to the color of white or black and that the colors are only set by the useragent stylesheet.

<pre>
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
</pre>
