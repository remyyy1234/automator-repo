/*
GENERAL TOUR
 */
function waiting(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        //console.log(mutations.childList);
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.getElementById("app"), {
      childList: true,
      subtree: true,
    });
  });
}

waiting("#sb_location-mobile-app").then((elm) => {
  var tour = introJs();

  tour.setOptions({
    steps: [
      {
        intro:
          '<iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/6579f713c8f37345cfa4f56a.mp4" style="width:520px; height:280px;" allow="autoplay"></iframe>',
      },
      {
        element: document.querySelector("#sb_dashboard"),
        intro:
          '<p class="tooltip-text-title">DASHBOARD</p><dotlottie-player id="dottie" src="https://lottie.host/2064f71f-3e0d-4143-876d-cd8e7fe700c4/ZkgqioyvYP.json" background="transparent" speed="1" style="width: 240px; height: 240px; margin-left: auto; margin-right: auto; margin: -60px auto -60px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Get an  overview of your business  from a bird’s eye view</p>',
        position: "right",
      },
      {
        element: document.getElementById("sb_conversations"),
        intro:
          '<p class="tooltip-text-title">CONVERSATIONS</p><dotlottie-player id="dottie" src="https://lottie.host/0bbb3d2f-74d2-4e06-aad9-676d24d8cfc2/vDURerg2lq.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -10px auto -10px auto;" loop autoplay></dotlottie-player><p class="general-subtext">See all emails, texts and even social media interactions in one simple place</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_calendars"),
        intro:
          '<p class="tooltip-text-title">CALENDARS</p><dotlottie-player id="dottie" src="https://lottie.host/550cdf44-9af4-479f-9502-009a704786c7/ey0uOPN5Zs.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Manage and customize yourself and your teams calendars and appointments here.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_contacts"),
        intro:
          '<p class="tooltip-text-title">CONTACTS</p><dotlottie-player id="dottie" src="https://lottie.host/10e2fd44-66be-4d6c-ad5e-849d0feb8ec4/S2YSpLlnV9.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px auto -10px auto;" loop autoplay></dotlottie-player><p class="general-subtext">All data pertaining to your leads and customers like personal contact info, purchases, booked appointments, and form responses will be saved here</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_opportunities"),
        intro:
          '<p class="tooltip-text-title">OPPORTUNITIES</p><dotlottie-player id="dottie" src="https://lottie.host/a5e4cba5-42d9-4daf-a55f-21a443aae859/MOnpfTTgQC.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Aka pipelines, organize and track in a visual way where new users and leads in their journey and changes with their activities. </p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_payments"),
        intro:
          '<p class="tooltip-text-title">PAYMENTS</p><dotlottie-player id="dottie" src="https://lottie.host/58a9aba8-9830-403a-81b4-f4ea461ad4b8/0dW2d4LdYV.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px auto -10px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Link payment gateways, take payments and manage them all here. </p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_email-marketing"),
        intro:
          '<p class="tooltip-text-title">MARKETING</p><dotlottie-player id="dottie" src="https://lottie.host/a78df37c-a546-423c-bc9e-b1a7cdab6e46/GqRpXL8t3n.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Your place for reaching others, schedule social media posts, create and schedule emails and make prebuilt email templates your own. </p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_automation"),
        intro:
          '<p class="tooltip-text-title">AUTOMATION</p><dotlottie-player id="dottie" src="https://lottie.host/86301125-8c9b-4423-bb1c-aadff8824c4f/z9W3ZgXecA.json" background="transparent" speed="1" style="width: 220px; height: 180px; margin: -5px auto -5px auto;" loop autoplay></dotlottie-player><p class="general-subtext">This is where the magic happens behind the scenes. Create your own or simply customize one of our many prebuilt workflows. Automation has never been this easy!</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_sites"),
        intro:
          '<p class="tooltip-text-title">SITES</p><dotlottie-player id="dottie" src="https://lottie.host/60bb0de0-ff74-4cc3-bdb0-37be0438f6ce/vEhNGpwpn2.json" background="transparent" speed="1" style="width: 120px; height: 120px; margin: 0px auto 0px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Websites, funnel pages and more galore! Find over 50 pre-built funnels ready for your magic or create one of your own.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_memberships"),
        intro:
          '<p class="tooltip-text-title">MEMBERSHIP</p><dotlottie-player id="dottie" src="https://lottie.host/5e02f447-5c62-47ac-9b06-fac43a4adfc4/ezL94jG4uR.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext"> If you create courses and love teaching others, or would like to start a community, this area will help you do just that.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_reputation"),
        intro:
          '<p class="tooltip-text-title">REPUTATION</p><dotlottie-player id="dottie" src="https://lottie.host/07e1a13b-9c41-4a08-9eaa-376b4b639ddc/giLh2bu41s.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Your online presence is important. Manage customer feedback and start getting those 5 star reviews here.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_reporting"),
        intro:
          '<p class="tooltip-text-title">REPORTING</p><dotlottie-player id="dottie" src="https://lottie.host/0209faec-0420-4966-b0f3-cd8d91d81317/u9npDXUUIR.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px auto -30px auto;" loop autoplay></dotlottie-player><p class="general-subtext"> “If you can’t measure it, you can’t improve it”. Track your appointments, ads and calls in one simplified place here. </p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_location-mobile-app"),
        intro:
          '<p class="tooltip-text-title">MOBILE APP</p><dotlottie-player id="dottie" src="https://lottie.host/1a108d37-7eea-47c4-9d57-c1d1ab38aec8/lnQvl3TOdN.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px auto -20px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Always on the go? Download the mobile app and take your business with you</p>',
        position: "right",
      },
      {
        element: document.querySelector(
          "#a98b00a7-d64a-4bbc-bc1f-65338cfa98a4"
        ),
        intro:
          '<p class="tooltip-text-title">AI MARKETING</p><dotlottie-player id="dottie" src="https://lottie.host/a7990a4b-2a6d-4948-86d1-0ca99c5f09dc/Y7ejnVUM9R.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px auto -10px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Use our powerful Artificial Intelligence made easy tools to stay a step ahead.</p>',
        position: "right",
      },
      {
        element: document.querySelector(
          "#f6276fe6-cb84-454f-92ce-13b1c569d499"
        ),
        intro:
          '<p class="tooltip-text-title">WEBINARS</p><dotlottie-player id="dottie" src="https://lottie.host/c092f81d-f0ec-4488-adc7-a4571023bc33/5Z4AiR6GX5.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px auto -20px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Run your live or automated webinars, challenges, workshops, and more.</p>',
        position: "right",
      },
      {
        element: document.getElementById(
          "48f55405-9b51-4a0b-8eaf-b16b53382d76"
        ),
        intro:
          '<p class="tooltip-text-title">TRAINING CENTERS</p><dotlottie-player id="dottie" src="https://lottie.host/49235739-f77c-473d-b911-e49cc9cd7b28/t0WEbPUgem.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -5px auto -5px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Browse through our easy-to-follow help articles or reach us via email or live chat.</p>',
        position: "right",
      },
      {
        element: document.getElementById(
          "1263bd70-a1e0-4cfa-a560-244c9c534436"
        ),
        intro:
          '<p class="tooltip-text-title">SUPPORT HUB</p><dotlottie-player id="dottie" src="https://lottie.host/599469ba-7bdf-4db3-9454-26522f9adec1/6ZlhisvhNS.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px auto -20px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Get your questions answered here. We have the best support in the business at your fingertips.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_settings"),
        intro:
          '<p class="tooltip-text-title">SETTINGS</p><dotlottie-player id="dottie" src="https://lottie.host/fabfcd2b-65d6-4f22-b487-f9acd877f2b7/IUhm0JKuB4.json" background="transparent" speed="1" style="width: 220px; height: 220px; margin: -60px auto -60px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Manage your company information, add team members, handle integrations and domains, basically all the important stuff is managed here.</p>',
        position: "right",
      },
      {
        element: document.querySelector("#helpDeskCtrlAdvTop .widget-toggle"),
        intro:
          '<p class="tooltip-text-title">CHAT SUPPORT</p><dotlottie-player id="dottie" src="https://lottie.host/d525f48f-2323-4532-bb78-b3f9adc58da5/ctRY08KPfT.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px auto -20px auto;" loop autoplay></dotlottie-player><p class="general-subtext">Stay in touch with our amazing support team via text, email or help articles.</p>',
        position: "bottom",
      },
      {
        intro:
          '<iframe src="https://storage.googleapis.com/msgsndr/QJ103qxfEO9Dj2mFP0BJ/media/6579f713b67d902bbe8bafbe.mp4" style="width:520px; height:280px;" allow="autoplay"></iframe>',
      },
    ],

    exitOnOverlayClick: false,
    showStepNumbers: false,
    tooltipClass: "general-tour",
    dontShowAgainCookie: "general-tour-cookie",
    dontShowAgainCookieDays: 366,
  });
  tour.oncomplete(() => {
    tour_completion("completed", tour);
    document.querySelector("#sb_dashboard").click();
    tour.setDontShowAgain(true);
  });

  tour.onafterchange(function (targetElement) {
    if (
      this._currentStep == 15 &&
      this._direction == "forward" &&
      !document.getElementById("f6276fe6-cb84-454f-92ce-13b1c569d499")
    ) {
      console.log(tour);
      tour.nextStep();
    } else if (
      this._currentStep == 15 &&
      this._direction == "backward" &&
      !document.getElementById("f6276fe6-cb84-454f-92ce-13b1c569d499")
    ) {
      tour.previousStep();
    }
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
  tour_completion("start", tour);

  //document.getElementById("backButtonv2").click();
});
async function tour_completion(type, tour) {
  let element_list;
  var location_id = getId();
  const elements = await fetch(
    "https://automator-customizer.bubbleapps.io/api/1.1/wf/check_general_tour?location=" +
      location_id +
      "&type=" +
      type
  );

  element_list = await elements.json();
  let data = element_list.response.done;
  if (!data && type == "start") {
    tour.start();
  }
}
