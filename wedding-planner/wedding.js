// note: all of the variables are global variables
// var guest, tables, guestPerTable, remaingGuests; // define variables

var guests = Number(prompt("How many guests do you have?"))

var tables = Number(prompt("How many tables do you want?"))

function seatings1(guests, tables){
  var arrange1 = Math.ceil(guests/tables);
  return arrange1;
}

function seatings2(guests, tables){
  var arrange2 = (guests % ((tables-1) * Math.ceil(guests/tables)));
  return arrange2;
}

function tables1(tables){
  var set1 = tables-1;
  return set1;
}

alert("Your "+ guests + " guests will be seated as follows: " + tables1(tables) + " tables of " + seatings1(guests,tables)+","+ " and 1 table of " + seatings2(guests,tables))