

//More Settings//
  //Name//
    var nameForm = document.getElementById("nameform");
    nameForm.addEventListener('submit',function(event) {event.preventDefault();
    var namevar = document.getElementById('entername').value;
  

    localStorage.setItem("name",namevar);
    updateGreeting();
  });








//Settings//
  //General nav bar//
    function OpenNavGeneral() {
    document.getElementById("nameformcontainer").style.display = "block";
    document.getElementById('appearancecontainer').style.display = "none";
    document.getElementById('aboutcontainer').style.display = "none";
  }
  document.getElementById('navgeneral').addEventListener('click',OpenNavGeneral);


  //theme nav bar//
    function OpenNavTheme(){
    document.getElementById("nameformcontainer").style.display = "none";
    document.getElementById('appearancecontainer').style.display = "block";
    document.getElementById('aboutcontainer').style.display = "none";
  }
  document.getElementById('navtheme').addEventListener('click',OpenNavTheme);

  //about nav bar//
  function OpenNavAbout() {
    document.getElementById("nameformcontainer").style.display = "none";
    document.getElementById('appearancecontainer').style.display = "none";
    document.getElementById('aboutcontainer').style.display = "block";
  }
  document.getElementById('navabout').addEventListener('click',OpenNavAbout);




//OpenSettings//

  //General//
    function OpenGeneral(){
      var settingsMenu = document.getElementById('moresettings');
      var nameformcontainer = document.getElementById('nameformcontainer');
      if (settingsMenu.style.display === "none") {settingsMenu.style.display = "block"; OpenNavGeneral();} 
      else 
       {settingsMenu.style.display = "none";}
    };
       document.getElementById('settinggeneral').addEventListener('click',OpenGeneral);

    function OpenTheme() {
      var settingsMenu = document.getElementById('moresettings');
      var appearancecontainer = document.getElementById('appearancecontainer');
      if (settingsMenu.style.display === "none") {settingsMenu.style.display = "block"; 
      appearancecontainer.style.display = "block"; OpenNavTheme();} 
      else 
       {settingsMenu.style.display = "none";}
    }
    document.getElementById('settingtheme').addEventListener('click',OpenTheme);

    function OpenAbout(){
      var settingsMenu = document.getElementById('moresettings');
      var aboutcontainer = document.getElementById('aboutcontainer');
      if (settingsMenu.style.display === "none") {settingsMenu.style.display = "block"; 
      aboutcontainer.style.display = "block"; OpenNavAbout();} 
      else 
       {settingsMenu.style.display = "none";}

      }
      document.getElementById('settingabout').addEventListener('click',OpenAbout);


    /*//Close Settings//
    var moresettings = document.getElementById('moresettings');

    document.addEventListener('click', function(event) {
      if (!moresettings.contains(event.target)) {moresettings.style.display = 'none';
    }});*/




//Greeting Text//
function updateGreeting()  {
  var HelloText = 'Hello, '
  var name = localStorage.getItem("name");
  var greetingstext = document.getElementById('greetingstext')
  var Flength = document.getElementById('entername').value;
  console.log(Flength.length);
  var screenW = window.innerWidth;

  var scaleFactor = 650 / 955; // This is the scale factor you mentioned
  var baseFontSize = screenW * scaleFactor; // This will be the base font size when the length of the input is 1

  if (Flength.length <= 3) {
    greetingstext.style.fontSize = baseFontSize * 3; // Scale up for short inputs
  } else if (Flength.length >= 4 && Flength.length < 8) {
    greetingstext.style.fontSize = baseFontSize * 2; // Scale down a bit for longer inputs
  } else {
    greetingstext.style.fontSize = baseFontSize; // Use the base font size for very long inputs
  }

  var greetingAll = HelloText + name +'!';
  greetingstext.innerText = greetingAll;

  console.log('done lol' + ' Flength=' + Flength.length +" fSize="+ document.getElementById('greetingstext').style.fontSize)
}

window.onload = updateGreeting;






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
  };


  //List items//
  /*function dropCheckers(){
    document.getElementsByClassName("dropdrop-content").style.display = "block"
  };*/








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

    // Call function when page loads
    window.addEventListener("load", randomQuote);

    // Call function when quote/ author is clicked
    document.getElementById("quote").addEventListener("click", randomQuote);
    document.getElementById("author").addEventListener("click", randomQuote);






  
