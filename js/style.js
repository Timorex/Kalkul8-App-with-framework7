$$(".container").css({
  textAlingn: "center"
  // marginLeft: "20px",
  // marginRigt: "20px"
});

// styling for the screen of the calculator
$$("#calcScreen").css({
  height: "40px",
  width: "100%",
  backgroundColor: "gray",
  paddingTop: "120px",
  paddingLeft: "20px",
  fontSize: "30px"
});

//styling for the entire body location of the calculator
$$("#calcBody").css({
  // width: "90%",
  //   margin: "5%"
  // marginTop: "0px",
  display: "inline-block",
  marginLeft: "4px"
});

// styling the buttons
$$(".btn").css({
  height: "75px",
  width: "75px"
  //   marginTop: "10px",
  //   marginLeft: "10px",
  // marginRigt: "0px"
});

// styling the DEL button
$$(".del").css({
  width: "49%"
});

// styling the zero button
$$(".zero").css({
  // width: "46%"
});

// styling dot button
$$(".dot").css({
  //   marginLeft: "45%"
});

// styling equal button
$$(".equal").css({
  // height: "160px"
  width: "234px"
});

// targeting the screen div
var screen = document.getElementById("calcScreen");

// Adding of functions
for (var i = 0; i <= 16; i++) {
  var bt = document.querySelectorAll(".btn")[i];
  bt.addEventListener("click", function() {
    if (this.value == "=") {
      screen.innerHTML = eval(screen.innerHTML);
    } else if (this.value == "del") {
      screen.innerHTML = "";
    } else {
      screen.innerHTML = screen.innerHTML + this.value;
    }
  });
}
