//System Clock//
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var today = date.toDateString();

  // Create the 12-hour format time string without seconds
  var h12 = h > 12 ? h - 12 : (h == 0 ? 12 : h);
  var session = h >= 12 ? "PM" : "AM";
  var datetime12 = h12 + ":" + (m < 10 ? "0" + m : m) + " " + session;

  // Construct the time string
  var time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);

  // Display the time
  var clockElement = document.getElementById("orasan");
  clockElement.innerText = time;

  // Set the title attribute to show the 12-hour format time as a tooltip
  clockElement.title = datetime12 + "\n" + today;

  // Update the time every minute
  setTimeout(showTime, 60000);
}

// Call the function when the page loads
showTime();


//Greeting Text//
window.onload = function() {
  var greetingText = document.getElementById('greetingstext');
  var length = greetingstext.innerText.length;

  if (length <= 10) {
    greetingstext.style.fontSize = '625%';
  } else if (length <= 12) {
    greetingstext.style.fontSize = '600%';
  } else if (length <= 30) {
    greetingstext.style.fontSize = '400%';
  } else {
    greetingstext.style.fontSize = '300%';
  }
}





//Main Menu//

function openMenu() {
  var button = document.getElementById('menubutton');
  var menu = document.getElementById("mainmenu");
  
  if (menu.style.width === "0%") {
    // Open
    menu.style.width = "300px";
    button.textContent = '<';
    button.style.left = '300px';
  } else {
    // Close
    closeMenu();
  }
}

function closeMenu() {
  document.getElementById("mainmenu").style.width = "0%";
  document.getElementById('menubutton').textContent = '>';
  document.getElementById('menubutton').style.left = '0px';
}



//Settings//
function insertName() {
  document.getElementById("NameForm").style.display = "block";
}

function okayName() {
  document.getElementById("NameForm").style.display = "none";
}








//Load Quotable API//
async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random?maxLength=100')
    const quote = await response.json()
    

    // Get the elements to display the quote and author name
    let quoteElement = document.getElementById("quote");
    let authorElement = document.getElementById("author");
  
    // Update the elements with the quote and author name
    quoteElement.innerText = quote.content;
    authorElement.innerText = `- ${quote.author}`;
  }

  // Call function when the page loads
  window.addEventListener("load", randomQuote);

  // Call function when quote/ author is clicked
  document.getElementById("quote").addEventListener("click", randomQuote);
  document.getElementById("author").addEventListener("click", randomQuote);
