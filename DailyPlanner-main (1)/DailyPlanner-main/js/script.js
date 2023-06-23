
function updateCurrentDay() {
    var currentDate = moment().format("dddd, MMMM Do");
    document.getElementById("currentDay").textContent = currentDate;
  }
  

  function colorCodeTimeBlocks() {
    var currentHour = moment().hour();
  

    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var blockHour = parseInt(timeBlock.getAttribute("data-time"));
  
   
      if (blockHour < currentHour) {
        timeBlock.classList.remove("present", "future");
        timeBlock.classList.add("past");
      } else if (blockHour === currentHour) {
        timeBlock.classList.remove("past", "future");
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.remove("past", "present");
        timeBlock.classList.add("future");
      }
    }
  }
  

  function loadEvents() {
    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var eventText = localStorage.getItem(timeBlock.getAttribute("data-time"));
      timeBlock.value = eventText;
    }
  }
  

  function saveEvent(event) {
    var timeBlock = event.target.parentElement.getElementsByClassName("description")[0];
    var eventText = timeBlock.value;
    var blockHour = timeBlock.getAttribute("data-time");
    localStorage.setItem(blockHour, eventText);
  }
  

  updateCurrentDay();
  
  colorCodeTimeBlocks();
  

  loadEvents();
  
 
  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveEvent);
  }

function updateCurrentDay() {
    var currentDate = moment().format("dddd, MMMM Do");
    document.getElementById("currentDay").textContent = currentDate;
  }
  

  function colorCodeTimeBlocks() {
    var currentHour = moment().hour();
  

    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var blockHour = parseInt(timeBlock.getAttribute("data-time"));
  

      if (blockHour < currentHour) {
        timeBlock.classList.remove("present", "future");
        timeBlock.classList.add("past");
      } else if (blockHour === currentHour) {
        timeBlock.classList.remove("past", "future");
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.remove("past", "present");
        timeBlock.classList.add("future");
      }
    }
  }
  

  function loadEvents() {
    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var eventText = localStorage.getItem(timeBlock.getAttribute("data-time"));
      timeBlock.value = eventText;
    }
  }
  

  function saveEvent(event) {
    var timeBlock = event.target.parentElement.getElementsByClassName("description")[0];
    var eventText = timeBlock.value;
    var blockHour = timeBlock.getAttribute("data-time");
    localStorage.setItem(blockHour, eventText);
  }
  

  updateCurrentDay();
  

  colorCodeTimeBlocks();
  

  loadEvents();
  

  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveEvent);
  }

function generateTimeBlocks() {
    var container = document.querySelector(".container");
  

    for (var hour = 9; hour <= 17; hour++) {
      var timeBlock = document.createElement("div");
      timeBlock.classList.add("row");
  
      var hourColumn = document.createElement("div");
      hourColumn.classList.add("col-2", "hour");
      hourColumn.textContent = moment(hour, "H").format("hA");
      timeBlock.appendChild(hourColumn);
  
      var descriptionColumn = document.createElement("textarea");
      descriptionColumn.classList.add("col-8", "description");
      descriptionColumn.setAttribute("data-time", hour);
      timeBlock.appendChild(descriptionColumn);
  
      var saveButton = document.createElement("button");
      saveButton.classList.add("col-2", "saveBtn");
      saveButton.textContent = "Save";
      timeBlock.appendChild(saveButton);
  
      container.appendChild(timeBlock);
    }
  }
  
 
  function colorCodeTimeBlocks() {
    var currentHour = moment().hour();
 
    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var blockHour = parseInt(timeBlock.getAttribute("data-time"));
  

      if (blockHour < currentHour) {
        timeBlock.classList.remove("present", "future");
        timeBlock.classList.add("past");
      } else if (blockHour === currentHour) {
        timeBlock.classList.remove("past", "future");
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.remove("past", "present");
        timeBlock.classList.add("future");
      }
    }
  }
  

  function loadEvents() {
    var timeBlocks = document.getElementsByClassName("description");
    for (var i = 0; i < timeBlocks.length; i++) {
      var timeBlock = timeBlocks[i];
      var eventText = localStorage.getItem(timeBlock.getAttribute("data-time"));
      timeBlock.value = eventText;
    }
  }
  

  function saveEvent(event) {
    var timeBlock = event.target.parentElement.getElementsByClassName("description")[0];
    var eventText = timeBlock.value;
    var blockHour = timeBlock.getAttribute("data-time");
    localStorage.setItem(blockHour, eventText);
  }
  

  updateCurrentDay();
  

  generateTimeBlocks();
  

  colorCodeTimeBlocks();
  

  loadEvents();
  

  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveEvent);
  }
  

  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
      