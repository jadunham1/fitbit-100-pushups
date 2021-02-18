import * as fs from "fs";
import document from "document";
import { PUSHUP_PROGRAM, MAX_OUT_INSTRUCTIONS, INITIAL_MAX_TEST_INSTRUCTIONS, RESET_MAX_INSTRUCTIONS } from "../common/globals.js";

let mainPage = document.getElementById("mainPage");
let testPage = document.getElementById("testPage");
let workoutPage = document.getElementById("workoutPage");
let settingsPage = document.getElementById("settingsPage");
let workoutSelectorPage = document.getElementById("workoutSelectorPage");
let userData = null
let mainMenuButton = document.getElementById("main-menu-button")
let settingsButton = document.getElementById("settings-button")

mainPage.style.display="inline";
testPage.style.display="none";
workoutPage.style.display="none";
settingsPage.style.display="none";
workoutSelectorPage.style.display="none";
let savedData = getSavedData();
mainMenuButton.text = getMainMenuText()

mainMenuButton.onclick = function(evt) {
  console.log("Moving away from main page.")
  savedData = getSavedData();
  mainPage.style.display="none";
  if( isEmpty(savedData)) {
    savedData["workoutIndex"] = 0
    savedData["currentMax"] = 0
    fs.writeFileSync("data.txt", savedData, "json");
    doMaxTestPage("Initial Test", true)
  }
  console.log("Starting workout with index " + savedData["workoutIndex"].toString());
  if( PUSHUP_PROGRAM[savedData["workoutIndex"]]["type"] == "workout") {
    doWorkoutPage(
      PUSHUP_PROGRAM[savedData["workoutIndex"]]["name"],
      PUSHUP_PROGRAM[savedData["workoutIndex"]]["data"],
      PUSHUP_PROGRAM[savedData["workoutIndex"]]["rest"],
      savedData["currentMax"]
    );
  }
  else if (PUSHUP_PROGRAM[savedData["workoutIndex"]]["type"] == "maxout") {
    doMaxTestPage(PUSHUP_PROGRAM[savedData["workoutIndex"]]["name"], true)
  }
}

// Settings Pages
settingsButton.onclick = function(evt) {
  doSettingsPage()
}

// Back To Main
let backToMainButton = document.getElementById("settingsList").getElementById("btn-back-to-main").getElementById("touch");
backToMainButton.addEventListener("click", (evt) => {
  console.log("Back to main we go");
  mainPage.style.display="inline";
  testPage.style.display="none";
  workoutPage.style.display="none";
  settingsPage.style.display="none";
  workoutSelectorPage.style.display="none";
  let savedData = getSavedData();
  mainMenuButton.text = getMainMenuText();
});

let workoutSelectorList= document.getElementById("workoutSelectorList");

console.log(`${workoutSelectorList}`)

workoutSelectorList.delegate = {
  getTileInfo: (index) => {
    return {
      type: "my-workout",
      value: "foo",
      index: index
    };
  },
  configureTile: (tile, info) => {
    console.log(`Item: ${info.index}`)
    if (info.type == "my-workout") {
      tile.getElementById("text").text = PUSHUP_PROGRAM[info.index]["name"];
      let touch = tile.getElementById("touch");
      touch.addEventListener("click", evt => {
        console.log(`touched: ${info.index}`);
        savedData = getSavedData();
        savedData["workoutIndex"] = info.index;
        fs.writeFileSync("data.txt", savedData, "json");
        console.log("Increased workout index to " + savedData["workoutIndex"].toString());
        testPage.style.display="none";
        workoutPage.style.display="none";
        settingsPage.style.display="none";
        workoutSelectorPage.style.display="none";
        mainPage.style.display="inline";
        mainMenuButton.text = getMainMenuText();
      });
    }
  }
};

workoutSelectorList.length = PUSHUP_PROGRAM.length

// Workout Selector
function doWorkoutSelectorPage() {
  console.log("Starting current workout selector page")
  mainPage.style.display="none";
  testPage.style.display="none";
  workoutPage.style.display="none";
  settingsPage.style.display="none";
  workoutSelectorPage.style.display="inline";
}

// Max Selector
let currentMaxButton = document.getElementById("settingsList").getElementById("btn-current-max").getElementById("touch");
currentMaxButton.addEventListener("click", (evt) => {
  console.log("Going to max test page");
  mainPage.style.display="none";
  testPage.style.display="none";
  workoutPage.style.display="none";
  settingsPage.style.display="none";
  workoutSelectorPage.style.display="none";
  doMaxTestPage("Reset Max", false)
});

// Current Workout
let workoutSelectorButton = document.getElementById("settingsList").getElementById("btn-workout-settings").getElementById("touch");
workoutSelectorButton.addEventListener("click", (evt) => {
  console.log("Going to workout selector");
  doWorkoutSelectorPage();
});


function doMaxTestPage(name, workout) {
    console.log("Starting a max tets page")
    testPage.style.display="inline";
    let instructionsHeader = document.getElementById("instructionHeader");
    instructionsHeader.text = name;
    let instructions = document.getElementById("instructions");
    if (savedData["workoutIndex"] == 0) {
      instructions.text = INITIAL_MAX_TEST_INSTRUCTIONS;
    } else if (!workout) {
      instructions.text = RESET_MAX_INSTRUCTIONS;
    } else {
      instructions.text = MAX_OUT_INSTRUCTIONS;
    }
    

    let completeAssessment = document.getElementById("complete-assessment")
    completeAssessment.onclick = function(evt) {
      let tumbler1 = document.getElementById("my-tumbler1");
      console.log("1: selectedIndex: " + tumbler1.value + " :: selectedValue: " + getTumblerText(tumbler1));
      savedData = getSavedData();
      savedData["currentMax"] = parseInt(getTumblerText(tumbler1))
      if (workout) {
        savedData["workoutIndex"] = savedData["workoutIndex"] + 1;
      }
      fs.writeFileSync("data.txt", savedData, "json");
      console.log("Saved new current max " + savedData["currentMax"].toString() + " to file.")
      testPage.style.display="none";
      mainPage.style.display="inline";
      mainMenuButton.text = getMainMenuText();
    }
}

function doSettingsPage() {
  console.log("Starting settings page")
  settingsPage.style.display="inline";
  mainPage.style.display="none";
  backToMainButton.addEventListener("click", (evt) => {
    console.log(`Back to main we go`);
    mainPage.style.display="inline";
    testPage.style.display="none";
    workoutPage.style.display="none";
    settingsPage.style.display="none";
    workoutSelectorPage.style.display="none";
    let savedData = getSavedData();
    mainMenuButton.text = getMainMenuText();
  });
}

function doWorkoutPage(name, data, rest, curr_max) {
  let workoutCount = document.getElementById("workoutCount");
  workoutCount.style.display="none";
  mainPage.style.display="none";
  workoutPage.style.display="inline";
  let workout = getWorkoutWithMax(data, curr_max);
  let instruction_string = `You will be doing pushup sets with ${rest} seconds rest.\n\n` + workout.join(' / ')
  let header = document.getElementById("workoutHeader");
  header.text = name;
  let instructions = document.getElementById("workoutInstructions");
  instructions.text = instruction_string;
  let nextButton = document.getElementById("btn-workout-next");
  nextButton.text = "Start workout!"
  let set = 1
  nextButton.onclick = function(evt) {
    nextButton.text = "Next set!"
    workoutCount.style.display="inline";
    instructions.text = "";
    workoutCount.text = workout[set-1]
    if(set == workout.length) {
      workoutCount.text = `${workoutCount.text}+`
      nextButton.text = "Finish!"
    }
    if(set > workout.length) {
      savedData = getSavedData();
      savedData["workoutIndex"] = savedData["workoutIndex"] + 1
      fs.writeFileSync("data.txt", savedData, "json");
      console.log("Increased workout index to " + savedData["workoutIndex"].toString());
      workoutPage.style.display="none";
      mainPage.style.display="inline";
      mainMenuButton.text = getMainMenuText();
    }
    header.text = "Set " + set.toString();
    set = set + 1
    
  }
}

function getWorkoutWithMax(data, curr_max) {
  let current_key_max = 0;
  for (let key in data) {
    let minimum = parseInt(key);
    if (curr_max > minimum && minimum > current_key_max) {
      current_key_max = minimum;
      console.log("We've found a new data set with key " + current_key_max.toString());
    }
  }
  return data[current_key_max.toString()];
}

function getMainMenuText() {
  savedData = getSavedData();
  if( isEmpty(savedData)) {
    savedData["workoutIndex"] = 0
    savedData["currentMax"] = 0
    fs.writeFileSync("data.txt", savedData, "json");
  }
  savedData = getSavedData();
  return PUSHUP_PROGRAM[savedData["workoutIndex"]]["name"]
}


function getSavedData() {
  let savedData = {}
  try { // statements to try
    savedData = fs.readFileSync("data.txt", "json");
    console.log("Loading from saved state.")
  }
  catch (e) {
    console.log("Could not find save data.")
  }
  return savedData;
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function getTumblerText(myObject) {
 return myObject.getElementById("item" + myObject.value).getElementById("my-value").text;
}