

function setupTypewriter(t) {
	    var HTML = t.innerHTML;

	    t.innerHTML = "";

	    var cursorPosition = 0,
	        tag = "",
	        writingTag = false,
	        tagOpen = false,
	        typeSpeed = 0,
        tempTypeSpeed = 0;

	    var type = function() {
        
	        if (writingTag === true) {
	            tag += HTML[cursorPosition];
	        }

	        if (HTML[cursorPosition] === "<") {
	            tempTypeSpeed = 0;
	            if (tagOpen) {
	                tagOpen = false;
	                writingTag = true;
	            } else {
	                tag = "";
	                tagOpen = true;
	                writingTag = true;
	                tag += HTML[cursorPosition];
	            }
	        }
	        if (!writingTag && tagOpen) {
	            tag.innerHTML += HTML[cursorPosition];
	        }
	        if (!writingTag && !tagOpen) {
	            if (HTML[cursorPosition] === " ") {
	                tempTypeSpeed = 0;
	            }
	            else {
	                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            }
	            t.innerHTML += HTML[cursorPosition];
	        }
	        if (writingTag === true && HTML[cursorPosition] === ">") {
	            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            writingTag = false;
	            if (tagOpen) {
	                var newSpan = document.createElement("span");
	                t.appendChild(newSpan);
	                newSpan.innerHTML = tag;
	                tag = newSpan.firstChild;
	            }
	        }

	        cursorPosition += 1;
	        if (cursorPosition < HTML.length - 1) {
	            setTimeout(type, tempTypeSpeed);
	        }

	    };

	    return {
	        type: type
	    };
	}

	var typer = document.getElementById('typewriter');

	typewriter = setupTypewriter(typewriter);

	typewriter.type();
/*
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

//set canvas width and height to full page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function() {
    if(window.innerWidth != canvas.width) canvas.width = window.innerWidth;
    if(window.innerHeight != canvas.height) canvas.height = window.innerHeight;
});

c.fillRect(2, window.innerHeight*2/3, window.innerWidth/7, window.innerHeight/3);

function Building(startX, width, height, color, numWindows){
    this.height = height;
    this.y = window.innerHeight - height;
    this.x = startX;
    this.color = "#FF0000";
    this.numWindows = numWindows;

    this.drawWindows = function(){
        
    }

    this.drawDoor = function(){

    }

    this.draw = function() {
        c.fillStyle = "#FF0000";
        c.fillRect(this.x, this.y, this.width, this.height);
    }
}

var building = new Building(10, window.innerWidth/8, window.innerHeight/3, "orange");
building.draw();

/*
var totalCircles = 50;
var circleArray = [];
//create and push circles to array
for(var i = 0; i < totalCircles; i++){
    var radius = Math.random() * window.innerHeight/22;
    var x = Math.random() * (window.innerWidth - radius*2) + radius;
    var y = Math.random() * (window.innerHeight - radius *2) + radius;
    var dx = (Math.random() - 0.5) * 7;
    var dy = (Math.random() - 0.5) * 7;
    var colorLightness = 200;
    var red = getRandomNumber(100, colorLightness);
    var green = getRandomNumber(255, colorLightness);
    var blue = getRandomNumber(255, colorLightness);
    var translucency = getRandomNumber(1, 0.4);
    var color = "rgba(" + red + "," + green + "," + blue + "," + translucency + ")";
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

function getRandomNumber(max, min) {
    var number = min + Math.floor(Math.random() * (max - min + 1));
    return number;
}


function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if(this.x <= 0 || this.x >= window.innerWidth) this.dx = -this.dx;
        if(this.y <= 0 || this.y >= window.innerHeight) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circle = new Circle(100, 100, 100, 100, 20, 'red');
circle.draw();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();
/*
$(document).ready(function () {
    
    $('.fadein').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');});

    //array to hold fading in/out text
    var descriptionList = ['Web Designer', 'Software Developer', 'UBC Computer Engineering Major'];
    
    var listLen = descriptionList.length;
    var i = 0;

    function fadingtext() {

        $('#fadingDescription').delay(1000).fadeTo(1200, 0, function () {
            $(this).text(descriptionList[++i % listLen]).fadeTo(1200, 0.7, fadingtext);
        });
    }

    fadingtext();


});
*/