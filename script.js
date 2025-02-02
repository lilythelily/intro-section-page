"use strict";

const drop1 = document.querySelector(".dropdown");
const drop2 = document.querySelector(".dropdown2");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const moreBtn = document.querySelector("button");
const popup1 = document.querySelector(".popup1");
const popup2 = document.querySelector(".popup2");

function showPopup(popup) {
  popup.style.opacity = "1";
}

function reset(popup) {
  popup.style.opacity = "0";
}

drop1.addEventListener("mouseenter", (e) => {
  showPopup(popup1);
  arrow1.src = "images/icon-black-arrow-up.svg";
});

drop1.addEventListener("mouseleave", (e) => {
  reset(popup1);
  arrow1.src = "images/icon-black-arrow-down.svg";
});

drop2.addEventListener("mouseenter", (e) => {
  showPopup(popup2);
  arrow2.src = "images/icon-black-arrow-up.svg";
});

drop2.addEventListener("mouseleave", (e) => {
  reset(popup2);
  arrow2.src = "images/icon-black-arrow-down.svg";
});

// mobile

const sidePanel = document.querySelector(".side-panel");
const hamburger = document.querySelector(".hamburger");
const mobileDrop1 = document.querySelector(".mobile-dropdown");
const mobileTodo = document.querySelector(".mobile-todo");
const mobileArrow1 = document.querySelector("#arrow3");
const popupContent1 = `<ul class="popup3">
              <li class="to-do">
                <img src="images/icon-todo.svg" alt="note" />To do List
              </li>
              <li class="to-do">
                <img src="images/icon-calendar.svg" alt="calendar" />Calendar
              </li>
              <li class="to-do">
                <img src="images/icon-reminders.svg" alt="bell" />Reminders
              </li>
              <li class="to-do">
                <img src="images/icon-planning.svg" alt="clock" />Planning
              </li>
            </ul>`;
const mobileDrop2 = document.querySelector(".mobile-dropdown2");
const mobileCompany = document.querySelector(".mobile-company");
const mobileArrow2 = document.querySelector("#arrow4");
const popupContent2 = `<ul class="popup4">
              <li class="company">History</li>
              <li class="company">Our Team</li>
              <li class="company">Blog</li>
            </ul>`;

const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", (e) => {
  sidePanel.style.display = "block";
  overlay.style.display = "block";
});

mobileDrop1.addEventListener("click", (e) => {
  if (mobileTodo.style.display === "none") {
    mobileTodo.innerHTML = popupContent1;
    mobileTodo.style.display = "block";
    mobileArrow1.src = "images/icon-black-arrow-up.svg";
  } else {
    mobileTodo.style.display = "none";
    mobileArrow1.src = "images/icon-arrow-down.svg";
  }
});

mobileDrop2.addEventListener("click", (e) => {
  if (mobileCompany.style.display === "none") {
    mobileCompany.innerHTML = popupContent2;
    mobileCompany.style.display = "block";
    mobileArrow2.src = "images/icon-black-arrow-up.svg";
  } else {
    mobileCompany.style.display = "none";
    mobileArrow2.src = "images/icon-arrow-down.svg";
  }
});

closeBtn.addEventListener("click", (e) => {
  sidePanel.style.display = "none";
  overlay.style.display = "none";
});
