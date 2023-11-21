/**
 * Utility function to add replaceable CSS.
 * @param {string} styleString
 */

const addStyle = (() => {
  const style = document.createElement("style");
  document.head.append(style);
  return (styleString) => (style.textContent = styleString);
})();

async function css_design() {
  let obj;

  const res = await fetch(
    "https://automator-customizer.bubbleapps.io/version-test/api/1.1/wf/dynamic_css"
  );

  obj = await res.json();

  addStyle(` ${obj.response.general_css} ${obj.response.design}`);
}

css_design();

// Functions for element creation
async function get_element(parent, child) {
  let element_list;
  const elements = await fetch(
    "https://automator-customizer.bubbleapps.io/version-test/api/1.1/wf/create_element"
  );

  element_list = await elements.json();
  let data = element_list.response.data;
  for (let x in data) {
    create_element(data[x], parent, child);
  }
}

function create_element(data, parent, child1) {
  waitForElm(parent).then((elm) => {
    const para = document.createElement("div");
    const startTourBtn = document.createElement("button");
    eval(data.script);
    para.appendChild(startTourBtn);
    startTourBtn.textContent = "Launch Quickstart Tour";
    startTourBtn.id = "start-tour-btn";
    startTourBtn.onclick = function () {
      start_sitetour_2();
    };
  });
}

//POP UP
function createPopup(message, element, newButton) {
  // Create a new popup element
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.setAttribute("style", "z-index:444;");
  // Create a yes button for the popup
  const yesButton = document.createElement("button");
  yesButton.classList.add("yes-button");
  yesButton.innerText = "Yes";
  yesButton.addEventListener("click", () => {
    //hide_element("1699402788481x769358154434240800", "e972bHQKk83WogRt06hi");
    // Remove the popup from the DOM when the close button is clicked
    document.getElementById(element).style.display = "none";
    popup.remove();
  });

  // Create a no button for the popup
  const noButton = document.createElement("button");
  noButton.classList.add("no-button");
  noButton.innerText = "No";
  noButton.addEventListener("click", () => {
    newButton.disabled = false;
    // Remove the popup from the DOM when the close button is clicked
    popup.remove();
  });

  // Create a message element to display the provided message
  const messageElement = document.createElement("p");
  messageElement.innerText = message;

  // Append the close button and message element to the popup
  popup.appendChild(messageElement);
  popup.appendChild(yesButton);
  popup.appendChild(noButton);

  // Append the popup to the body of the document
  document.body.appendChild(popup);
}

// Checking if elements are rendered

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        console.log("SAMPLE");
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function progressBar(element) {
  var dataProgress = element.getAttribute("data-progress"); // Get the value of the "data-progress" attribute
  var widthValue = dataProgress + "%";

  // Animate the width property over 1000 milliseconds
  element.style.transition = "width 1s";
  element.style.width = widthValue;

  // Set the text content to the "data-progress" value
  element.textContent = widthValue;
}
//Create element
waitForElm("#location-dashboard_container--banner").then((elm) => {
  get_element(".n-config-provider", "#location-dashboard_container--banner");
  getId();
});
waitForElm("#dashboard .container-fluid").then((elm) => {
  get_element("#dashboard .container-fluid", "#dashboard .card-group");
  console.log(elm);
  getId();
});

function getId() {
  var getParent = document.getElementById("sidebar-v2").parentElement.className;
  const id = getParent.split(" ");
  console.log(id[3]);
}
