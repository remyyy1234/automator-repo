var quickstart = introJs();
// initialize array
var arr_checked = [];

const newButton = document.createElement("button");
const node = document.createTextNode("✓ Mark as Complete.");
newButton.id = "tour-complete-btn";
newButton.appendChild(node);

const divTag = document.createElement("div");
divTag.id = "percent-section";
const body2 = document.createElement("button");
const minimize = document.createElement("div");
body2.appendChild(document.createTextNode("▲"));
//minimize.appendChild(document.createTextNode("➖"));
body2.classList.add("maximize-tour");
minimize.classList.add("minimize-tour");

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 1000);
};

var bubblyButtons = document.getElementById("tour-complete-btn");
newButton.addEventListener("click", animateButton, false);
var percent = (
  ((arr_checked.length + 1) / (quickstart._introItems.length + 1)) *
  100
).toFixed();

function start_sitetour_2() {
  get_completed();
  quickstart.setOptions({
    steps: [
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/6579f289c8f3737762a4f12a.mp4" style="width:360px; height:220px;" allow="autoplay"></iframe></div>',
        position: "bottom",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">SETTINGS SETUP (part 1 of 4)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f8ca2cb077c5da8053e.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "bottom",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">SETTINGS SETUP (part 2 of 4)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f4a7620d970054baef6.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">SETTINGS SETUP (part 3 of 4)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f2cc8f373708ea52998.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">SETTINGS SETUP (part 4 of 4)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f2c12a1a577e13699ff.mp4" style="width:360px; height:220px;" ></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">PHONE AND TEXT SETUP (part 1 of 2)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f947620d9c1f94baf51.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">PHONE AND TEXT SETUP (part 2 of 2)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f9d7620d98c604baf55.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">DOMAIN AND EMAIL SETUP (part 1 of 2)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1defa2cb072d85a8037c.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">DOMAIN AND EMAIL SETUP (part 2 of 2)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f6ba2cb078bbca80517.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">INTEGRATIONS SETUP (part 1 of 3)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1df47620d9869d4badc9.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">INTEGRATIONS SETUP (part 2 of 3)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a1f3c7620d9e3a44baef1.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><h4 class="quickstart-categ">INTEGRATIONS SETUP (part 3 of 3)</h4><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/657a212e5d204486ea79ac00.mp4" style="width:360px; height:220px;"></iframe></div>',
        position: "right",
      },
      {
        element: document.querySelector("body"),
        intro:
          '<div class="main-container"><hr><iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/6579fafba2cb077b8ca7ec3a.mp4" style="width:360px; height:220px;" allow="autoplay"></iframe></div>',
        position: "bottom",
      },
    ],

    exitOnOverlayClick: false,
    // showProgress: true,
    showStepNumbers: false,
    tooltipClass: "quickstart-tour",
  });

  quickstart.onafterchange(function (targetElement) {
    console.log("outside waiting");
    document.querySelector(".introjs-overlay").style.visibility = "hidden";
    document.querySelector(".introjs-helperLayer").style.visibility = "hidden";

    quickstart.onexit(function () {
      if (document.getElementById("start-tour-btn")) {
        document.getElementById("start-tour-btn").disabled = false;
      }
    });

    waiting(".tour-progress").then((elm) => {
      updatePerc(arr_checked, ".tour-progress");
    });
  });
  quickstart.onbeforechange(async () => {
    return new Promise((resolve) => {
      get_completed().then((elm) => {
        console.log(arr_checked + "   " + quickstart._currentStep);
        if (arr_checked.includes(quickstart._currentStep)) {
          newButton.disabled = true;
          newButton.innerHTML = "👍 COMPLETED!";
        } else {
          newButton.disabled = false;
          newButton.innerHTML = "✓ Mark as Complete.";
        }
        if (document.getElementById("backButtonv2")) {
          goToPage(quickstart._currentStep, "settings");
          console.log("TRY");
        } else if (document.getElementById("sb_settings")) {
          goToPage(quickstart._currentStep, "general");
          console.log("TRY 1");
        }
        resolve();
      });
    });
  });

  waiting(".introjs-tooltipbuttons").then((elm) => {
    const whole = document.querySelector(".introjs-tooltipReferenceLayer");
    //tourBody.removeAttribute('style');
    const header = document.querySelector(".introjs-tooltip-header");
    const quickstart = document.querySelector(".quickstart-tour");

    header.insertBefore(minimize, header.firstChild);
    header.insertBefore(divTag, header.firstChild);
    whole.appendChild(body2);

    const title = document.querySelector(".introjs-tooltip-title");

    divTag.innerHTML =
      '<p class="progress-text"></p><progress class="tour-progress progress-0" max="100"> </progress>';
    minimize.innerHTML = '<button id="minimize-button">➖</button>';

    const parentElm = document.querySelector(".introjs-tooltipbuttons");

    parentElm.appendChild(newButton);
    const message = document.createElement("p");

    message.innerText = "When finished click...";
    message.className = "when-click-text";
    parentElm.insertBefore(message, parentElm.firstChild);
    updatePerc(arr_checked, ".tour-progress");
  });

  console.log(quickstart.isActive());

  get_completed().then((elm) => {
    var allSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let difference = allSteps.filter((x) => arr_checked.indexOf(x) === -1);

    quickstart.goToStep(difference[0]);
    quickstart.start();

    console.log(arr_checked);
    console.log(difference[0]);
  });

  minimize.onclick = function () {
    const tourBody = document.querySelector(".quickstart-tour");
    tourBody.style.display = "none";
    body2.style.visibility = "visible";
  };

  body2.onclick = function () {
    const tourBody = document.querySelector(".quickstart-tour");
    body2.style.visibility = "hidden";
    tourBody.style.display = "block";
  };

  newButton.addEventListener("click", () => {
    updateStatus(getId(), "Membership Banner", quickstart._currentStep);
    arr_checked.push(quickstart._currentStep);
    updatePerc(arr_checked, ".tour-progress");
    newButton.disabled = true;
    newButton.innerHTML = "👍 COMPLETED!";
    if (
      (
        ((arr_checked.length + 1) / (quickstart._introItems.length + 1)) *
        100
      ).toFixed() == 100
    ) {
      setTimeout(function () {
        quickstart.exit();
        if (document.getElementById("backButtonv2")) {
          document.getElementById("backButtonv2").click();
        } else if (document.getElementById("sb_settings")) {
          document.getElementById("sb_dashboard").click();
        }
        poof();
      }, 2000);
    }
  });
}

async function get_completed() {
  return new Promise((resolve) => {
    var location_id = getId();
    fetch(
      "https://automator-customizer.bubbleapps.io/api/1.1/wf/get_completed_steps?location_id=" +
        location_id +
        "&element=Membership Banner"
    )
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        // Process the response data here
        arr_checked = [];
        for (var i = 0; i < data.response.completed.length; i++) {
          arr_checked.push(data.response.completed[i]);
        } // Example: Logging the data to the console
        return resolve();
      });
  });
}
function updateStatus(id, element, step) {
  fetch(
    "https://automator-customizer.bubbleapps.io/api/1.1/wf/completed_steps",
    {
      method: "POST",
      body: JSON.stringify({
        location_id: id,
        element: element,
        step: step,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
}
function updatePerc(completed, elm) {
  var percElement = document.querySelector(elm);
  var percent = (
    ((completed.length + 1) / (quickstart._introItems.length + 1)) *
    100
  ).toFixed();
  percElement.value = percent;
  document.querySelector(".progress-text").innerHTML = percent + "% COMPLETED";
}

function goToPage(step, page) {
  console.log("GOTO" + step);
  //GENERAL PAGE
  if (page == "general") {
    //GENERAL MENU
    if (step == 4 || step == 10 || step == 12 || step == 0) {
      if (step == 4) {
        document.getElementById("sb_contacts").click();
      } else if (step == 10) {
        document.getElementById("sb_payments").click();
      } else if (step == 0) {
        document.getElementById("sb_dashboard").click();
      } else if (step == 12) {
        document.getElementById("1263bd70-a1e0-4cfa-a560-244c9c534436").click();
      }
    }
    //SETTINGS MENU
    else {
      document.getElementById("sb_settings").click();
      if (step == 2) {
        waiting("#sb_custom-values").then((elm) => {
          document.getElementById("sb_custom-values").click();
        });
      } else if (step == 3) {
        waiting("#sb_my-staff").then((elm) => {
          document.getElementById("sb_my-staff").click();
        });
      } else if (step == 5 || step == 6) {
        waiting("#sb_phone-number").then((elm) => {
          document.getElementById("sb_phone-number").click();
        });
      } else if (step == 7) {
        waiting("#sb_domains").then((elm) => {
          document.getElementById("sb_domains").click();
        });
      } else if (step == 8) {
        waiting("#sb_location-email-services").then((elm) => {
          document.getElementById("sb_location-email-services").click();
        });
      } else if (step == 9 || step == 11) {
        waiting("#sb_integrations").then((elm) => {
          document.getElementById("sb_integrations").click();
        });
      }
    }
  }
  //SETTINGS PAGE
  else if (page == "settings") {
    //GENERAL MENU
    if (step == 4 || step == 10 || step == 12 || step == 0) {
      document.getElementById("backButtonv2").click();
      if (step == 4) {
        waiting("#sb_contacts").then((elm) => {
          document.getElementById("sb_contacts").click();
        });
      } else if (step == 10) {
        waiting("#sb_payments").then((elm) => {
          document.getElementById("sb_payments").click();
        });
      } else if (step == 12) {
        waiting("#sb_payments").then((elm) => {
          document
            .getElementById("1263bd70-a1e0-4cfa-a560-244c9c534436")
            .click();
        });
      }
    }
    //SETTINGS MENU
    else {
      if (step == 1) {
        document.getElementById("sb_business_info").click();
      } else if (step == 2) {
        document.getElementById("sb_custom-values").click();
      } else if (step == 3) {
        document.getElementById("sb_my-staff").click();
      } else if (step == 6 || step == 5) {
        document.getElementById("sb_phone-number").click();
      } else if (step == 7) {
        document.getElementById("sb_domains").click();
      } else if (step == 8) {
        document.getElementById("sb_location-email-services").click();
      } else if (step == 9 || step == 11) {
        document.getElementById("sb_integrations").click();
      }
    }
  }
}
