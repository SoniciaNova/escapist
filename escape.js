var fadeopac = 0;
var fade = "stop";
function init() {
	setfade(0);
	hide("collet", "id");
	hide("dl", "id");
	hide("wirebox", "id");
	hide("red", "id");
	hide("yellow", "id");
	hide("blue", "id");
	hide("green", "id");
	document.getElementById("fade").style.marginLeft = -2050 + "px";
	hide("buttone", "id");
	hide("butttwo", "id");
	hide("buttthree", "id");
	hide("numbutton", "id");
	hide("creditsscreen", "id");
	hide("creditsholder", "id");
	hide("creditstxt", "class");
	hide("credButton", "id");
	hide("fade", "id");
	hide("wall", "id");
	hide("gamescreen", "id");
	document.getElementById("level").innerHTML = "Welcome to Cryptic Escape!";
}
function hide(tag, type) {
	if (type === "id") {
		document.getElementById(tag).style.display = "none";
	} else if (type === "class") {
		document.getElementsByClassName(tag).style.display = "none";
	}
}
function show(tag, type) {
	if (type === "id") {
		document.getElementById(tag).style.display = "block";
	} else if (type === "class") {
		document.getElementsByClassName(tag).style.display = "block";
	}
}
function setfade(amount) {
	fadeopac += amount;
	document.getElementById("fade").style.opacity = fadeopac;
}
function credits() {
	hide("creditsButton", "id");
	hide("startButton", "id");
	show("creditsscreen", "id");
	show("creditsholder", "id");
	show("creditstxt", "class");
	show("credButton", "id");
}
function titlescreen() {
	show("creditsButton", "id");
	show("startButton", "id");
	hide("creditsscreen", "id");
	hide("creditsholder", "id");
	hide("creditstxt", "class");
	hide("credButton", "id");
}
var level = 0;
function startgame() {
	var x = 0.1;
	document.getElementById("fade").style.marginLeft = -50 + "px";
	changelvl();
	window.setInterval(function() {
		if (fade === "in") {
			document.getElementById("fade").style.marginLeft = -50 + "px";
			setfade(x);
			if (fadeopac > 1) {
				fade = "stop";
				document.getElementById("fade").style.marginLeft = -2050 + "px";
			}
		} else if (fade === "out") {
			setfade(-x);
			document.getElementById("fade").style.marginLeft = -50 + "px";
			if (fadeopac < 0.1) {
				fade = "stop";
				document.getElementById("fade").style.marginLeft = -2050 + "px";
			}
		}
	}, 50);
}
document.onkeydown = checkKey;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '32') {
		if (level === 1) {
			changelvl();
		}
	}
	
}
function changelvl() {
	document.getElementById("thedoor").src = "http://i.imgur.com/kPjhQ72.png";
	if (level != 0) {
		window.alert("Level " + level + " completed! Good Job!");
	}
	level += 1;
	setTimeout(function() {
		fade = "in";
	}, 500);
	setTimeout(function() {
		document.getElementById("thedoor").src = "http://i.imgur.com/0CDd8FB.png";
		if (level === 1) {
			hide("startButton", "id");
			hide("creditsButton", "id");
			document.getElementById("level").innerHTML = "Level 1: So Much SPACE!";
			fade = "out";
		}
		if (level === 2) {
			document.getElementById("level").innerHTML = "Level 2: Numbers...";
			show("numbutton", "id");
		} else if (level === 3) {
			document.getElementById("level").innerHTML = "Level 3: What Do I Press?";
			hide("numbutton", "id");
			show("buttone", "id");
			show("butttwo", "id");
			show("buttthree", "id");
		} else if (level === 4) {
			document.getElementById("level").innerHTML = "Level FOUR: Spelling Time!";
			hide("buttone", "id");
			hide("butttwo", "id");
			hide("buttthree", "id");
			document.getElementById("lettone").innerHTML = "A";
			document.getElementById("letttwo").innerHTML = "A";
			document.getElementById("lettthree").innerHTML = "A";
			document.getElementById("lettfour").innerHTML = "A";
		} else if (level === 5) {
			document.getElementById("level").innerHTML = "Level 5: Knock, knock...";
			document.getElementById("lettone").innerHTML = "";
			document.getElementById("letttwo").innerHTML = "";
			document.getElementById("lettthree").innerHTML = "";
			document.getElementById("lettfour").innerHTML = "";
		}
		 else if (level === 6) {
			 document.getElementById("level").innerHTML = "Level 6: Cut the Wires!";
			 show("wirebox", "id");
			 show("red", "id");
			 show("blue", "id");
			 show("yellow", "id");
			 show("green", "id");
		 }
		 else if (level === 7) {
			 document.getElementById("level").innerHTML = "Level 7: Wait, what?";
			 hide("wirebox", "id");
			 hide("red", "id");
			 hide("blue", "id");
			 hide("yellow", "id");
			 hide("green", "id");
			 show("dl", "id");
			 lvl7();
		 }
		 else if (level === 8) {
			 document.getElementById("level").innerHTML = "Level 8: Capitals & Colors";
			 hide("dl", "id");
			 show("collet", "id");
		 }
		 else if (level === 9) {
			 document.getElementById("level").innerHTML = "Congratulations! You beat the game! Thanks for playing!";
			 hide("collet", "id");
			 document.getElementById("thedoor").src = "http://i.imgur.com/kPjhQ72.png";
		 }
		fade = "out";
	}, 1000);
}
function numtxtor(num) {
	document.getElementById("numtxt").innerHTML = num;
}
function numbutton() {
	var timer = 8;
	window.setInterval(function() {
		switch(timer) {
			case 8: 
				timer -= 1;
				numtxtor("87");
				break;
			case 7:
				timer -= 1;
				numtxtor("2");
				break;
			case 6:
				timer -= 1;
				numtxtor("34");
				break;
			case 5:
				timer -= 1;
				numtxtor("2016");
				break;
			case 4:
				timer -= 1;
				numtxtor("69");
				break;
			case 3:
				timer -= 1;
				numtxtor("21");
				break;
			case 2:
				timer -= 1;
				numtxtor("54");
				break;
			case 1:
				timer -= 1;
				numtxtor("99");
				break;
			case 0:
				numtxtor("");
				timer -= 1;
				var answer = prompt("What was the fourth number?");
				if (answer === "2016") {
					changelvl()
				} else {
					window.alert("Sorry, but that is not correct. Try again!");
				}
		}
	}, 250);
}
var butt1 = false;
var butt2 = false;
var butt3 = false;
function press(num) {
	if (num === 1) {
		if (butt1 == false) {
			butt1 = true;
			document.getElementById("buttone").style.backgroundColor = "lightgreen";
		} else {
			butt1 = false;
			document.getElementById("buttone").style.backgroundColor = "red";
		}
	} else if (num === 2) {
		if (butt2 == false) {
			butt2 = true;
			document.getElementById("butttwo").style.backgroundColor = "lightgreen";
		} else {
			butt2 = false;
			document.getElementById("butttwo").style.backgroundColor = "red";
		}
	} else if (num === 3) {
		if (butt3 == false) {
			butt3 = true;
			document.getElementById("buttthree").style.backgroundColor = "lightgreen";
		} else {
			butt3 = false;
			document.getElementById("buttthree").style.backgroundColor = "red"
		}
	}
	if (butt1 == false && butt2 == false && butt3 == true) {
		changelvl();
	}
}
var lett1 = 1;
var lett2 = 1;
var lett3 = 1;
var lett4 = 1;
function changeTxt(num, letter) {
	switch (num) {
		case 1:
			document.getElementById(letter).innerHTML = "A";
			break;
		case 2:
			document.getElementById(letter).innerHTML = "B";
			break;
		case 3:
			document.getElementById(letter).innerHTML = "C";
			break;
		case 4:
			document.getElementById(letter).innerHTML = "D";
			break;
		case 5:
			document.getElementById(letter).innerHTML = "E";
			break;
		case 6:
			document.getElementById(letter).innerHTML = "F";
			break;
		case 7:
			document.getElementById(letter).innerHTML = "G";
			break;
		case 8:
			document.getElementById(letter).innerHTML = "H";
			break;
		case 9:
			document.getElementById(letter).innerHTML = "I";
			break;
		case 10:
			document.getElementById(letter).innerHTML = "J";
			break;
		case 11:
			document.getElementById(letter).innerHTML = "K";
			break;
		case 12:
			document.getElementById(letter).innerHTML = "L";
			break;
		case 13:
			document.getElementById(letter).innerHTML = "M";
			break;
		case 14:
			document.getElementById(letter).innerHTML = "N";
			break;
		case 15:
			document.getElementById(letter).innerHTML = "O";
			break;
		case 16:
			document.getElementById(letter).innerHTML = "P";
			break;
		case 17:
			document.getElementById(letter).innerHTML = "Q";
			break;
		case 18:
			document.getElementById(letter).innerHTML = "R";
			break;
		case 19:
			document.getElementById(letter).innerHTML = "S";
			break;
		case 20:
			document.getElementById(letter).innerHTML = "T";
			break;
		case 21:
			document.getElementById(letter).innerHTML = "U";
			break;
		case 22:
			document.getElementById(letter).innerHTML = "V";
			break;
		case 23:
			document.getElementById(letter).innerHTML = "W";
			break;
		case 24:
			document.getElementById(letter).innerHTML = "X";
			break;
		case 25:
			document.getElementById(letter).innerHTML = "Y";
			break;
		case 26:
			document.getElementById(letter).innerHTML = "Z";
			break;
	}
}
function lett(num) {
	if (num === 1) {
		if (lett1 === 26) {
			lett1 = 1;
		} else {
			lett1 += 1;
		}
		changeTxt(lett1, "lettone");
	} else if (num === 2) {
		if (lett2 === 26) {
			lett2 = 1;
		} else {
			lett2 += 1;
		}
		changeTxt(lett2, "letttwo");
	} else if (num === 3) {
		if (lett3 === 26) {
			lett3 = 1;
		} else {
			lett3 += 1;
		}
		changeTxt(lett3, "lettthree");
	} else if (num === 4) {
		if (lett4 === 26) {
			lett4 = 1;
		} else {
			lett4 += 1;
		}
		changeTxt(lett4, "lettfour");
	}
	if (lett1 === 6 && lett2 === 15 && lett3 === 21 && lett4 === 18) {
		changelvl();
	}
}
var numknock = 6;
function knock() {
	if (level === 5) {
		document.getElementById("dummy").innerHTML = "<embed src=\"knock.wma\" volume=\"100\" hidden=\"true\" style=\"position:absolute\" autostart=\"true\" loop=\"false\"/>";
		numknock -= 1;
		if (numknock === 0) {
			changelvl();
		}
	}
}
var red = false;
var yellow = false;
var blue = false;
var green = false;
function resetwire() {
	show("red", "id");
	show("yellow", "id");
	show("blue", "id");
	show("green", "id");
	red = false;
	yellow = false;
	blue = false;
	green = false;
}
function wire(num) {
	switch(num) {
		case 1:
			if (red == false && blue == false && yellow == false && green == false) {
				red = true;
				hide("red", "id");
			} else {
				window.alert("Oops! That's the wrong wire, try again!");
				resetwire();
			}
			break;
		case 2:
			if (red == true && blue == false && yellow == false && green == false) {
				yellow = true;
				hide("yellow", "id");
			} else {
				window.alert("Oops! That's the wrong wire, try again!");
				resetwire();
			}
			break;
		case 3:
			if (red == true && blue == false && yellow == true && green == true) {
				blue = true;
				hide("blue", "id");
			} else {
				window.alert("Oops! That's the wrong wire, try again!");
				resetwire();
			}
			break;
		case 4:
			if (red == true && blue == false && yellow == true && green == false) {
				green = true;
				hide("green", "id");
			} else {
				window.alert("Oops! That's the wrong wire, try again!");
				resetwire();
			}
			break;
	}
	if (red == true && green == true && yellow == true && blue == true) {
		changelvl();
	}
}
var timer = 0;
function buttclick() {
	if (timer === 0) {
		changelvl();
	} else {
		window.alert("You died because you clicked the deadly button! If only you had been patient...");
		timer = 10;
	}
}
function lvl7() {
	timer = 10;
	var interval = window.setInterval(function() {
		if (level = 7) {
			if (timer > 0) {
				timer -= 1;
			} else {
				document.getElementById("dl").src = "http://landsendcharters.com/wp-content/uploads/2014/04/greenthumb.jpg";
				window.clearInterval(interval);
			}
		}
	}, 1000);
}
var bcol = 0;
var tcol = 0;
var gcol = 0;
function colorswitch(col, lett) {
	switch (col) {
		case 0:
			document.getElementById(lett).style.color = "white";
			break;
		case 1:
			document.getElementById(lett).style.color = "red";
			break;
		case 2:
			document.getElementById(lett).style.color = "blue";
			break;
		case 3:
			document.getElementById(lett).style.color = "yellow";
			break;
		case 4:
			document.getElementById(lett).style.color = "tan";
			break;
		case 5:
			document.getElementById(lett).style.color = "black";
			break;
		case 6:
			document.getElementById(lett).style.color = "orange";
			break;
		case 9:
			document.getElementById(lett).style.color = "green";
			break;
	}
}
function lvl8(col) {
	if (col === 1) {
		if (bcol === 3) {
			bcol = 0;
		} else {
			bcol += 1;
		}
	} else if (col === 2) {
		if (tcol === 6) {
			tcol = 0;
		} else {
			tcol += 2;
		}
	} else if (col === 3) {
		if (gcol === 9) {
			gcol = 0;
		} else {
			gcol += 3;
		}
	}
	colorswitch(bcol, "bl");
	colorswitch(tcol, "t");
	colorswitch(gcol, "g");
	if (bcol === 2 && tcol === 4 && gcol === 9) {
		changelvl();
	}
}