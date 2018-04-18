// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

// do a conditional

var welcomemessage = "My own personal website";

if(currenthour>5 && currenthour < 12){
  welcomemessage = "Good morning, welcome to my personal website";  
}

if(currenthour>12 && currenthour < 18){
  welcomemessage = "Good afternoon, welcome to my personal website";  
}

if(currenthour>18 && currenthour < 22){
  welcomemessage = "Good evening, welcome to my personal website";  
}

var getheading = document.querySelector('.header-content h1');
getheading.insertAdjacentHTML('afterend','<p class="mainheading">'+welcomemessage+'</p>');