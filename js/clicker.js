var clicks = 0;
var level = 0;
var auto = false;

var achievements = ["Ps|}~*m zmkuo*wkno+",
                    "Lkuo|1}*ny%ox+",
                    "cy 1!o*|okmron*Q|kxnwk*}~k~ }+",
                    "ar$*k|o*$y *}~svv*mvsmusxqI",
                    "Mk|zkv*~ xxov*}$xn|ywo* xvymuon+",
                    "]o|sy }v$6*xy~rsxq*sx~o|o}~sxq*s}*qysxq*~y*rkzzox8*T }~*}~yz8",
                    "K ~y7mvsmu*oxklvon+",
                    "Zy\"o|7 z+",
		                "cy 1|o*k*M zmkuo*Ly}}+",
		                "Q|kxn*Wk}~o|*}~k~ }*kmrso!on+"];

for (var i=0; i<achievements.length; i++) {
    achievements[i] = shift(achievements[i], -10)
}

function countIt() {

    if (level < 8) {
  	   clicks = clicks + 1;
    }
    else {
  	   // 4. Write a statement that increases the variable 'clicks' by one hundred.
       //    (Look at the statement just above that increases 'clicks' by one.)


    }

    update();
}


function update() {

    // 5. Write a statement that displays the variable 'clicks' to the element on the
    //    HTML page with the id='count'.



    if (clicks >= 100000) {
        level = 10;
    }
    else if (clicks >= 50000) {
        level = 9;
    }
    else if (clicks >= 5000) {
        level = 8;
    }
    else if (clicks >= 500) {
        level = 7;

        if (!auto) {
            auto = true;
            startAutoPlay();
        }

    }
    else if (clicks >= 300) {
        level = 6;
    }
    else if (clicks >= 100) {
        level = 5;
    }
    else if (clicks >= 50) {
        level = 4;
    }
    else if (clicks >= 24) {
        level = 3;
    }
    else if (clicks >= 13) {
        level = 2;
    }
    else if (clicks >= 1) {
        level = 1;
    }

    var list = "";

    if (level > 0) {
        list += "<ul>";
        for (var i=1; i<=level; i++) {
            list += "<li>" + achievements[i-1] + "</li>";
        }
        list += "<ul>";

        document.getElementById('achievements').innerHTML = list;
    }
}


function startAutoPlay() {
    timer = setInterval(addOne, 100);
}

function addOne() {
    clicks += 1;
    update();
}

function shift(str, n) {
  var result = "";

  for (var i=0; i<str.length; i++) {
    var code = str.charCodeAt(i);
    code = code + n;

    if (code > 126) {
      code = code - 95;
    }
    else if (code < 32) {
      code = code + 95;
    }

    result = result + String.fromCharCode(code);
  }

  return result;
}
