import * as fs from "fs";


try { // statements to try
  userData = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}
let json_object  = fs.readFileSync("json.txt", "json");
console.log("JSON guid: " + json_object.guid);