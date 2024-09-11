const mobile_menu_btn = document.getElementById("js-trigger-mobile-menu");
const mobile_menu = document.getElementById("js-mobile-menu");
if (mobile_menu_btn) {
  mobile_menu_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("show");
    const main = document.getElementById("main");
    main.classList.toggle("none-mobile");
    const footer = document.getElementById("footer");
    footer.classList.toggle("none-mobile");
  });
}

//// SWIPER

const swiper_banner_el = document.querySelector(".swiper-banner");
if (swiper_banner_el) {
  const swiper_banner = new Swiper(swiper_banner_el, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
const swiper_partner_el = document.querySelector(".swiper-partners");
if (swiper_partner_el) {
  const swiper_partner = new Swiper(swiper_partner_el, {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 30,

    loop: true,
    navigation: {
      nextEl: ".swiper-btn__next",
      prevEl: ".swiper-btn__prev",
    },
    breakpoints: {
      480: {
        direction: "horizontal",
      },
    },
  });
}

//// PAGINATION

const pagination_blocks = document.querySelector(".pagination-blocks");
const btn_arrow_next = document.querySelector(".pagination-nav__next");
const btn_arrow_prev = document.querySelector(".pagination-nav__prev");
if (pagination_blocks) {
  document.addEventListener("DOMContentLoaded", function () {
    let itemsPerPage;
    if (window.innerWidth < 480) {
      itemsPerPage = 3;
    } else {
      itemsPerPage = 9;
    }
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 480) {
        itemsPerPage = 3;

        showPage(currentPage);
      } else {
        itemsPerPage = 9;

        showPage(currentPage);
      }
    });
    let currentPage = 0;
    const items = Array.from(
      pagination_blocks.querySelectorAll(".js-pag-item")
    );
    let totalPages = Math.ceil(items.length / itemsPerPage);

    function showPage(page) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      console.log(endIndex, items);
      items.forEach((item, index) => {
        item.classList.toggle(
          "hidden",
          index < startIndex || index >= endIndex
        );
      });
      updateActiveButtonStates();
    }
    function createPageButtons() {
      totalPages = Math.ceil(items.length / itemsPerPage);
      const pagination_nav_number = document.querySelector(
        ".pagination-nav__number"
      );
      btn_arrow_prev.classList.add("disabled-prev");
      if (totalPages > 1) {
        for (let i = 0; i < totalPages; i++) {
          const pageButton = document.createElement("button");
          pageButton.textContent = i + 1;
          pagination_nav_number.appendChild(pageButton);
          pageButton.classList.add("number-nav");
          pageButton.addEventListener("click", () => {
            currentPage = i;
            updateButtonStyle();
            showPage(currentPage);
            updateActiveButtonStates();
          });
        }
      }
    }
    function updateActiveButtonStates() {
      const pageButtons = document.querySelectorAll(".number-nav");
      pageButtons.forEach((button, index) => {
        if (index === currentPage) {
          button.classList.add("active-number-nav");
        } else {
          button.classList.remove("active-number-nav");
        }
      });
    }
    function updateButtonStyle() {
      console.log(currentPage);
      if (currentPage < 1) {
        btn_arrow_prev.classList.add("disabled-prev");
      } else {
        btn_arrow_prev.classList.remove("disabled-prev");
      }
      if (currentPage + 1 === totalPages) {
        btn_arrow_next.classList.add("disabled-next");
        btn_arrow_prev.classList.remove("disabled-prev");
      } else {
        btn_arrow_next.classList.remove("disabled-next");
      }
    }
    btn_arrow_prev.addEventListener("click", () => {
      if (currentPage != 0) {
        currentPage = currentPage - 1;
        updateButtonStyle();
        showPage(currentPage);
      }
    });
    btn_arrow_next.addEventListener("click", () => {
      if (currentPage + 1 != totalPages) {
        currentPage = currentPage + 1;
        updateButtonStyle();
        showPage(currentPage);
      }
    });
    createPageButtons();
    showPage(currentPage);
  });
}

///// MAP

const y_map = document.getElementById("map");
if (y_map) {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [53.248363, 39.11333],
      zoom: 18,
      controls: [],
    });
    var placemark_vod = new ymaps.Placemark([53.248363, 39.11333], {});
    myMap.geoObjects.add(placemark_vod);
  }
}

/////  FORM

const personal_trigger = document.getElementById("js-pesronal-trigger");
const legal_trigger = document.getElementById("js-legal-trigger");

if (personal_trigger) {
  personal_trigger.addEventListener("click", () => {
    personal_trigger.classList.add("a-btn__active");
    legal_trigger.classList.remove("a-btn__active");
    document.getElementById("legal-form").classList.add("js-form_non-active");
    document
      .getElementById("personal-form")
      .classList.remove("js-form_non-active");
  });
}
if (legal_trigger) {
  legal_trigger.addEventListener("click", () => {
    legal_trigger.classList.add("a-btn__active");
    personal_trigger.classList.remove("a-btn__active");
    document
      .getElementById("legal-form")
      .classList.remove("js-form_non-active");
    document
      .getElementById("personal-form")
      .classList.add("js-form_non-active");
  });
}

///// MODAL
document.addEventListener("DOMContentLoaded", function () {
  const btn_open_application = document.querySelectorAll(
    ".js-btn-modal-application"
  );

  const elemModal_application = document.querySelector("#js-modal_application");

  if (elemModal_application) {
    let modal_application = new bootstrap.Modal(elemModal_application);
    btn_open_application.forEach((btn) =>
      btn.addEventListener("click", function () {
        modal_application.show(500);
      })
    );
  }
  const legal_form = document.getElementById("legal-form");
  const personal_form = document.getElementById("personal-form");
  const report_form = document.getElementById("report-form");

  if (legal_form) {
    legal_form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
  if (personal_form) {
    personal_form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
  if (report_form) {
    report_form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});

/// INFORMATION

const trigger_2022 = document.getElementById("js-trigger-2022");
const trigger_2023 = document.getElementById("js-trigger-2023");
const trigger_2024 = document.getElementById("js-trigger-2024");

if (trigger_2022) {
  trigger_2022.addEventListener("click", () => {
    trigger_2022.classList.add("a-btn__active");
    trigger_2023.classList.remove("a-btn__active");
    trigger_2024.classList.remove("a-btn__active");
    document.querySelector(".js-2022").classList.remove("js-form_non-active");
    document.querySelector(".js-2023").classList.add("js-form_non-active");
    document.querySelector(".js-2024").classList.add("js-form_non-active");
  });
}
if (trigger_2023) {
  trigger_2023.addEventListener("click", () => {
    trigger_2023.classList.add("a-btn__active");
    trigger_2022.classList.remove("a-btn__active");
    trigger_2024.classList.remove("a-btn__active");
    document.querySelector(".js-2022").classList.remove("js-form_non-active");
    document.querySelector(".js-2023").classList.add("js-form_non-active");
    document.querySelector(".js-2024").classList.add("js-form_non-active");
  });
}
if (trigger_2024) {
  trigger_2024.addEventListener("click", () => {
    trigger_2024.classList.add("a-btn__active");
    trigger_2022.classList.remove("a-btn__active");
    trigger_2023.classList.remove("a-btn__active");
    document.querySelector(".js-2024").classList.remove("js-form_non-active");
    document.querySelector(".js-2023").classList.add("js-form_non-active");
    document.querySelector(".js-2022").classList.add("js-form_non-active");
  });
}
//// QUESTION

const question_trigger = document.querySelectorAll(".js-question-trigger");
if (question_trigger) {
  question_trigger.forEach((el) => {
    el.addEventListener("click", () => {
      el.querySelector(".answer").classList.toggle("js-answer");

      console.log(el.querySelector(".js-icon").src);
      el.querySelector(".js-icon").src === "img/question.svg"
        ? (el.querySelector(".js-icon").src = "img/q-down.svg")
        : (el.querySelector(".js-icon").src = "img/question.svg");
    });
  });
}

///// VALID

const req_input = document.querySelectorAll(".req");
if (req_input) {
  req_input.forEach((el) => {
    el.addEventListener("blur", () => {
      el.classList.add("req-valid");
    });
  });
}
//// INPUT-TEL MASK

const tel_input = document.querySelectorAll(".js-tel-input");
if (tel_input) {
  window.addEventListener("DOMContentLoaded", function () {
    tel_input.forEach(function (input) {
      let keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = newValue.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          newValue = newValue.slice(0, i);
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
      input.addEventListener("mouseup", (event) => {
        event.preventDefault();
        if (input.value.length < 4) {
          input.setSelectionRange(4, 4);
        } else {
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
    });
  });
}
