function waiting(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        console.log(mutations.childList);
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

waiting(".LBZcnyiyRP6tvsxXDlrd #sb_dashboard").then((elm) => {
  var tour = introJs();

  tour.setOptions({
    steps: [
      {
        title: "WELCOME",
        intro:
          "<p style='width:240px;' class='tooltip-text-title'>STARTING VIDEO</p>",
      },
      {
        element: document.querySelector("#sb_dashboard"),
        intro:
          '<p class="tooltip-text-title">DASHBOARD</p><dotlottie-player id="dottie" src="https://lottie.host/2064f71f-3e0d-4143-876d-cd8e7fe700c4/ZkgqioyvYP.json" background="transparent" speed="1" style="width: 240px; height: 240px; margin: -60px -30px -60px -30px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_conversations"),
        intro:
          '<p class="tooltip-text-title">CONVERSATIONS</p><dotlottie-player id="dottie" src="https://lottie.host/0bbb3d2f-74d2-4e06-aad9-676d24d8cfc2/vDURerg2lq.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -10px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_calendars"),
        intro:
          '<p class="tooltip-text-title">CALENDARS</p><dotlottie-player id="dottie" src="https://lottie.host/550cdf44-9af4-479f-9502-009a704786c7/ey0uOPN5Zs.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_contacts"),
        intro:
          '<p class="tooltip-text-title">CONTACTS</p><dotlottie-player id="dottie" src="https://lottie.host/10e2fd44-66be-4d6c-ad5e-849d0feb8ec4/S2YSpLlnV9.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px 25px -10px 25px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_opportunities"),
        intro:
          '<p class="tooltip-text-title">OPPORTUNITIES</p><dotlottie-player id="dottie" src="https://lottie.host/a5e4cba5-42d9-4daf-a55f-21a443aae859/MOnpfTTgQC.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_payments"),
        intro:
          '<p class="tooltip-text-title">PAYMENTS</p><dotlottie-player id="dottie" src="https://lottie.host/57884f90-a7fd-4f3d-953e-0cf73a3365a7/r8LxKpooiR.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px 25px -10px 25px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_email-marketing"),
        intro:
          '<p class="tooltip-text-title">MARKETING</p><dotlottie-player id="dottie" src="https://lottie.host/a78df37c-a546-423c-bc9e-b1a7cdab6e46/GqRpXL8t3n.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_automation"),
        intro:
          '<p class="tooltip-text-title">AUTOMATION</p><dotlottie-player id="dottie" src="https://lottie.host/86301125-8c9b-4423-bb1c-aadff8824c4f/z9W3ZgXecA.json" background="transparent" speed="1" style="width: 220px; height: 180px; margin: -5px 0px -20px 0px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_sites"),
        intro:
          '<p class="tooltip-text-title">SITES</p><dotlottie-player id="dottie" src="https://lottie.host/60bb0de0-ff74-4cc3-bdb0-37be0438f6ce/vEhNGpwpn2.json" background="transparent" speed="1" style="width: 120px; height: 120px; margin: 0px 30px 0px 30px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_memberships"),
        intro:
          '<p class="tooltip-text-title">MEMBERSHIP</p><dotlottie-player id="dottie" src="https://lottie.host/5e02f447-5c62-47ac-9b06-fac43a4adfc4/ezL94jG4uR.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_reputation"),
        intro:
          '<p class="tooltip-text-title">REPUTATION</p><dotlottie-player id="dottie" src="https://lottie.host/07e1a13b-9c41-4a08-9eaa-376b4b639ddc/giLh2bu41s.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_reporting"),
        intro:
          '<p class="tooltip-text-title">REPORTING</p><dotlottie-player id="dottie" src="https://lottie.host/0209faec-0420-4966-b0f3-cd8d91d81317/u9npDXUUIR.json" background="transparent" speed="1" style="width: 180px; height: 180px; margin: -30px 5px -30px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_location-mobile-app"),
        intro:
          '<p class="tooltip-text-title">MOBILE APP</p><dotlottie-player id="dottie" src="https://lottie.host/1a108d37-7eea-47c4-9d57-c1d1ab38aec8/lnQvl3TOdN.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px 5px -20px 5px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector(
          "#a98b00a7-d64a-4bbc-bc1f-65338cfa98a4"
        ),
        intro:
          '<p class="tooltip-text-title">AI MARKETING</p><dotlottie-player id="dottie" src="https://lottie.host/a7990a4b-2a6d-4948-86d1-0ca99c5f09dc/Y7ejnVUM9R.json" background="transparent" speed="1" style="width: 140px; height: 140px; margin: -10px 20px -10px 20px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector(
          "#f6276fe6-cb84-454f-92ce-13b1c569d499"
        ),
        intro:
          '<p class="tooltip-text-title">WEBINARS</p><dotlottie-player id="dottie" src="https://lottie.host/c092f81d-f0ec-4488-adc7-a4571023bc33/5Z4AiR6GX5.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px 10px -20px 10px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.getElementById(
          "48f55405-9b51-4a0b-8eaf-b16b53382d76"
        ),
        intro: '<p class="tooltip-text-title">TRAINING CENTERS</p>',
        position: "right",
      },
      {
        element: document.getElementById(
          "1263bd70-a1e0-4cfa-a560-244c9c534436"
        ),
        intro:
          '<p class="tooltip-text-title">SUPPORT HUB</p><dotlottie-player id="dottie" src="https://lottie.host/599469ba-7bdf-4db3-9454-26522f9adec1/6ZlhisvhNS.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px 15px -20px 15px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector("#sb_settings"),
        intro:
          '<p class="tooltip-text-title">SETTINGS</p><dotlottie-player id="dottie" src="https://lottie.host/fabfcd2b-65d6-4f22-b487-f9acd877f2b7/IUhm0JKuB4.json" background="transparent" speed="1" style="width: 220px; height: 220px; margin: -60px 15px -60px 15px;" loop autoplay></dotlottie-player>',
        position: "right",
      },
      {
        element: document.querySelector(".widget-toggle"),
        intro:
          '<p class="tooltip-text-title">CHAT SUPPORT</p><dotlottie-player id="dottie" src="https://lottie.host/d525f48f-2323-4532-bb78-b3f9adc58da5/ctRY08KPfT.json" background="transparent" speed="1" style="width: 160px; height: 160px; margin: -20px 15px -20px 15px;" loop autoplay></dotlottie-player>',
        position: "bottom",
      },
      {
        title: "GOODBYE",
        intro:
          "<p style='width:240px;' class='tooltip-text-title'>ENDING VIDEO</p>",
      },
    ],

    exitOnOverlayClick: false,
    showStepNumbers: true,
    tooltipClass: "general-tour",
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
  //document.getElementById("backButtonv2").click();
});
