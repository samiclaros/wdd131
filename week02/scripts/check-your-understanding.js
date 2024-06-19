// FIRST PRACTICE FOR

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (i = 0; i < studentReport.length; i++)
{
    if (studentReport[i] < 30)
    {
        console.log(studentReport[i]);
    }
}

// SECOND PRACTICE WITH WHILE
let key = 0;
while(key < studentReport.length)
{
    if (studentReport[i] < 30)
    {
        console.log(studentReport[i]);
    }
    key++
}

// THIRD PRACTICE WITH FORERACH
studentReport.forEach(function(element){
    if (element < 30)
    {
        console.log(studentReport[i]);
    }
});

// FOURTH PRACTICE WITH FOR IN LOOP
for (index in studentReport)
{
    if(studentReport[index] < 30)
    {
        console.log(studentReport[index]);
    }
}

// statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.)

// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= DAYS; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	output[0].appendChild(item);
}
