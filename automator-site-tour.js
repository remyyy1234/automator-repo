function waiting(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        console.log(mutations.childList);
        //observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    });
  });
}
waiting("#dashboard .card-group").then((elm) => {
  console.log("FOR TESTING PURPOSES");
});

waiting(".LBZcnyiyRP6tvsxXDlrd").then((elm) => {
  var tour = introJs();

  tour.setOptions({
    steps: [
      { title: "WELCOME", intro: "<p style='width:240px;'>STARTING VIDEO</p>" },
      {
        element: document.querySelector("#sb_dashboard"),
        intro: "<p>DASHBOARD</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_conversations"),
        intro: "<p>CONVERSATIONS</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_calendars"),
        intro: "<p>CALENDARS</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_contacts"),
        intro: "<p>CONTACTS</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_opportunities"),
        intro: "<p>OPPORTUNITIES</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_payments"),
        intro: "<p>PAYMENTS</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_email-marketing"),
        intro: "<p>MARKETING</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_automation"),
        intro: "<p>AUTOMATION</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_sites"),
        intro: "<p>SITES</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_memberships"),
        intro: "<p>MEMBERSHIPS</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_reputation"),
        intro: "<p>REPUTATION</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_reporting"),
        intro: "<p>REPORTING</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_location-mobile-app"),
        intro: "<p>MOBILE APP</p>",
        position: "right",
      },
      {
        element: document.querySelector(
          "#a98b00a7-d64a-4bbc-bc1f-65338cfa98a4"
        ),
        intro: "<p>AI MARKETING</p>",
        position: "right",
      },
      {
        element: document.querySelector(
          "#f6276fe6-cb84-454f-92ce-13b1c569d499"
        ),
        intro: "<p>WEBINARS</p>",
        position: "right",
      },
      {
        element: document.getElementById(
          "48f55405-9b51-4a0b-8eaf-b16b53382d76"
        ),
        intro: "<p>TRAINING CENTERS</p>",
        position: "right",
      },
      {
        element: document.getElementById(
          "1263bd70-a1e0-4cfa-a560-244c9c534436"
        ),
        intro: "<p>AUTOMATOR SUPPORT</p>",
        position: "right",
      },
      {
        element: document.querySelector("#sb_settings"),
        intro: "<p>SETTINGS</p>",
        position: "right",
      },
      {
        element: document.querySelector(".widget-toggle"),
        intro: "<p>CHAT SUPPORT</p>",
        position: "bottom",
      },
      { title: "GOODBYE", intro: "<p style='width:240px;'>ENDING VIDEO</p>" },
    ],

    exitOnOverlayClick: false,
    showStepNumbers: true,
  });
  tour.oncomplete(() => {
    alert("CONGRATULATIONS!!!");
  });
  tour.onbeforechange(function (targetElement) {
    if (
      targetElement.className != "widget-toggle" &&
      targetElement.id != "sb_settings"
    ) {
      targetElement.click();
    }
    if (this._currentStep < 15) {
      tour.setOption("scrollToElement", false);
    } else {
      tour.setOption("scrollToElement", true);
    }
  });
  tour.start();
});
