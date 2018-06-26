var s = document.getElementById("workspace");
s.setAttribute("fill", "black");
var stopp = document.getElementById("stop");
var circle = document.getElementById("circle");
var id;

//stop
var stop = function(){
    clearInterval(id);
}

//clear the workspace
var clear = function(){
    for(i = s.children.length-1; i >= 0; i--){
	     s.removeChild(s.children[i]);
    }
}

//circle function
var circleGrow = function(){
    clear();
    var radius = 30;
    var grow = true;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy", 250);
    circle.setAttribute("fill", "green");
    circle.setAttribute("stroke", "purple");
    s.appendChild(circle);

	//grow function; if the circle gets too small, switches to increasing radius
    var grow = function(){
	if(grow){
	    radius++;
	    circle.setAttribute("r", radius);
	    if(radius >= 250){
		grow= false;
	    }
	}
	else{
	    shrink();
	}
    }
	
	//shrink function; if the circle gets too big, switches to a decreasing radius
    var shrink = function(){
	radius--;
	circle.setAttribute("r", radius);
	if(radius <= 0 ){
	    grow = true;
	}
    }
  
    id = setInterval(grow, 10);
}


var dvd = document.getElementById("dvd");

var dvdMove = function(){

    clear();
    //prepare the board; set attributes of image and place the dvd at a random place; set img to dvdlogo
    var imgWidth = 190;
    var imgHeight = 140;
    var x = Math.random()*(500 - imgWidth);
    var y = Math.random()*(500 - imgHeight);
    var dX = 1;
    var dY = 1;
    var dvdLogo = document.createElementNS("http://www.w3.org/2000/svg", "image");
    dvdLogo.setAttribute("width", imgWidth);
    dvdLogo.setAttribute("height", imgHeight);
    dvdLogo.setAttribute("href", 'dvd.jpg');
    s.appendChild(dvdLogo);

	//movement
    var move = function() {
	dvdLogo.setAttribute("x", x);
	dvdLogo.setAttribute("y", y);
	
	// if the thing is going to hit the wall, bounce! Must account for the image blank space...
	if(x + imgWidth >= 510 || x < -10){
	    dX *= -1;
	}
	if(y + imgHeight >= 510 || y < -10){
	    dY *= -1;
	}
	x += dX;
	y += dY;
    }

    id = setInterval(move, 10);
}

circle.addEventListener("click", circleGrow);
dvd.addEventListener("click", dvdMove);
stopp.addEventListener("click", stop);
