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
    "https://automator-customizer.bubbleapps.io/api/1.1/wf/dynamic_css"
  );

  obj = await res.json();

  addStyle(` ${obj.response.general_css} ${obj.response.design}`);
}

css_design();

// Functions for element creation
async function get_element(parent, child) {
  let element_list;
  var location_id = getId();
  const elements = await fetch(
    "https://automator-customizer.bubbleapps.io/api/1.1/wf/create_element?location_id=" +
      location_id
  );
  const dashboard_column = document.createElement("div");
  dashboard_column.className = "whole-box";
  const element = document.querySelector(parent);
  const children = document.querySelector(child);
  element.insertBefore(dashboard_column, children);

  element_list = await elements.json();
  let data = element_list.response.data;

  for (let x in data) {
    create_element(data[x], parent, dashboard_column);
  }
}

function create_element(data, parent, child1) {
  eval(data.script);
}
//HIDE ELEMENT
function hide_element(id, element) {
  fetch("https://automator-customizer.bubbleapps.io/api/1.1/wf/hide_element", {
    method: "POST",
    body: JSON.stringify({
      location_id: id,
      element_id: element,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
// POP UP
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
    hide_element(getId(), element);
    document.getElementById("element-" + element).style.display = "none";
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
  popup.innerHTML =
    '<img class="popup-img" src="https://msgsndr-private.storage.googleapis.com/companyPhotos/8fc1a3b0-eb3f-4257-a1f5-792eaaab887f.png"><p style="font-size:16px; font-weight:600; ">Are you sure you want to remove this box?</p>';
  const messageElement = document.createElement("p");
  messageElement.innerHTML = "<b>NOTE: </b>" + message;
  messageElement.className = "popup-note";
  // Append the close button and message element to the popup

  popup.appendChild(yesButton);
  popup.appendChild(noButton);
  popup.appendChild(messageElement);
  // Append the popup to the body of the document
  document.body.appendChild(popup);
}

// Checking if elements are rendered
function waitForElm(selector, targ, parentElm) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const list = mutation.target;
        var selected = document.querySelector(selector);
        if (selected && list.id === targ) {
          get_element(parentElm, selector);
          getId();
          resolve(document.querySelector(selector));
        }
      }
    });
    observer.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    });
  });
}

// Create element
waitForElm(
  "#location-dashboard_container--banner",
  "location-dashboard",
  ".n-config-provider"
).then((elm) => {
  // get_element(".n-config-provider", "#location-dashboard_container--banner");
});

function getId() {
  var getParent = document.getElementById("sidebar-v2").parentElement.className;
  const id = getParent.split(" ");
  console.log(id[3]);
  return id[3];
}
