var selectedArray = [""];
function load() {
    selectedArray = [""];
    var answers = [
      "FREE", "div", "img", "HTML", "CSS",
      "false", "true", "color", "font-size","ul",
      "ol", "list item", "divider", "A", "B",
      "C", "D", "text-transform", "&lt!--comment--&gt", "//comment",
      "ID", "p", "alt", "src", "FREE"
    ];

  for(i = 0; i < 25; i++) {
    var currBox = document.getElementsByTagName("td")[i];
    var randNum = Math.floor(Math.random()*answers.length);
    currBox.innerHTML = answers[randNum];
    answers.splice(randNum, 1);

    currBox.style.backgroundColor = "white";
  }
}

function selected(selectBox) {
  selectBox = document.getElementById(selectBox);
  if(selectBox.style.backgroundColor == "white") {
      selectBox.style.backgroundColor = "#66CED7";
      checkForBingo(selectBox);
  }
  else {
      selectBox.style.backgroundColor = "white";
  }
}

function checkForBingo(selectBox) {
  console.log(selectedArray.push(selectBox.id));

  //ROW 1 WIN
  if(selectedArray.includes("square0") &&
     selectedArray.includes("square1") &&
     selectedArray.includes("square2") &&
     selectedArray.includes("square3") &&
     selectedArray.includes("square4")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square0").style.backgroundColor = "orange";
    document.getElementById("square1").style.backgroundColor = "orange";
    document.getElementById("square2").style.backgroundColor = "orange";
    document.getElementById("square3").style.backgroundColor = "orange";
    document.getElementById("square4").style.backgroundColor = "orange";
  }

  //ROW 2 WIN
  if(selectedArray.includes("square5") &&
     selectedArray.includes("square6") &&
     selectedArray.includes("square7") &&
     selectedArray.includes("square8") &&
     selectedArray.includes("square9")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square5").style.backgroundColor = "orange";
    document.getElementById("square6").style.backgroundColor = "orange";
    document.getElementById("square7").style.backgroundColor = "orange";
    document.getElementById("square8").style.backgroundColor = "orange";
    document.getElementById("square9").style.backgroundColor = "orange";
  }

  //ROW 3 WIN
  if(selectedArray.includes("square10") &&
     selectedArray.includes("square11") &&
     selectedArray.includes("squarecenter") &&
     selectedArray.includes("square12") &&
     selectedArray.includes("square13")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square10").style.backgroundColor = "orange";
    document.getElementById("square11").style.backgroundColor = "orange";
    document.getElementById("squarecenter").style.backgroundColor = "orange";
    document.getElementById("square12").style.backgroundColor = "orange";
    document.getElementById("square13").style.backgroundColor = "orange";
  }

  //ROW 4 WIN
  if(selectedArray.includes("square14") &&
     selectedArray.includes("square15") &&
     selectedArray.includes("square16") &&
     selectedArray.includes("square17") &&
     selectedArray.includes("square18")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square14").style.backgroundColor = "orange";
    document.getElementById("square15").style.backgroundColor = "orange";
    document.getElementById("square16").style.backgroundColor = "orange";
    document.getElementById("square17").style.backgroundColor = "orange";
    document.getElementById("square18").style.backgroundColor = "orange";
  }

  //ROW 5 WIN
  if(selectedArray.includes("square19") &&
     selectedArray.includes("square20") &&
     selectedArray.includes("square21") &&
     selectedArray.includes("square22") &&
     selectedArray.includes("square23")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square19").style.backgroundColor = "orange";
    document.getElementById("square20").style.backgroundColor = "orange";
    document.getElementById("square21").style.backgroundColor = "orange";
    document.getElementById("square22").style.backgroundColor = "orange";
    document.getElementById("square23").style.backgroundColor = "orange";
  }

  //COL 1 WIN
  if(selectedArray.includes("square0") &&
     selectedArray.includes("square5") &&
     selectedArray.includes("square10") &&
     selectedArray.includes("square14") &&
     selectedArray.includes("square19")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square0").style.backgroundColor = "orange";
    document.getElementById("square5").style.backgroundColor = "orange";
    document.getElementById("square10").style.backgroundColor = "orange";
    document.getElementById("square14").style.backgroundColor = "orange";
    document.getElementById("square19").style.backgroundColor = "orange";
  }

  //COL 2 WIN
  if(selectedArray.includes("square1") &&
     selectedArray.includes("square6") &&
     selectedArray.includes("square11") &&
     selectedArray.includes("square15") &&
     selectedArray.includes("square20")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square1").style.backgroundColor = "orange";
    document.getElementById("square6").style.backgroundColor = "orange";
    document.getElementById("square11").style.backgroundColor = "orange";
    document.getElementById("square15").style.backgroundColor = "orange";
    document.getElementById("square20").style.backgroundColor = "orange";
  }

  //COL 3 WIN
  if(selectedArray.includes("square2") &&
     selectedArray.includes("square7") &&
     selectedArray.includes("squarecenter") &&
     selectedArray.includes("square16") &&
     selectedArray.includes("square21")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square2").style.backgroundColor = "orange";
    document.getElementById("square7").style.backgroundColor = "orange";
    document.getElementById("squarecenter").style.backgroundColor = "orange";
    document.getElementById("square16").style.backgroundColor = "orange";
    document.getElementById("square21").style.backgroundColor = "orange";
  }

  //COL 4 WIN
  if(selectedArray.includes("square3") &&
     selectedArray.includes("square8") &&
     selectedArray.includes("square12") &&
     selectedArray.includes("square17") &&
     selectedArray.includes("square22")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square3").style.backgroundColor = "orange";
    document.getElementById("square8").style.backgroundColor = "orange";
    document.getElementById("square12").style.backgroundColor = "orange";
    document.getElementById("square17").style.backgroundColor = "orange";
    document.getElementById("square22").style.backgroundColor = "orange";
  }
  //COL 5 WIN
  if(selectedArray.includes("square4") &&
     selectedArray.includes("square9") &&
     selectedArray.includes("square13") &&
     selectedArray.includes("square18") &&
     selectedArray.includes("square23")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square4").style.backgroundColor = "orange";
    document.getElementById("square9").style.backgroundColor = "orange";
    document.getElementById("square13").style.backgroundColor = "orange";
    document.getElementById("square18").style.backgroundColor = "orange";
    document.getElementById("square23").style.backgroundColor = "orange";
  }

  //DIAGONAL 1 WIN
  if(selectedArray.includes("square0") &&
     selectedArray.includes("square6") &&
     selectedArray.includes("squarecenter") &&
     selectedArray.includes("square17") &&
     selectedArray.includes("square23")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square0").style.backgroundColor = "orange";
    document.getElementById("square6").style.backgroundColor = "orange";
    document.getElementById("squarecenter").style.backgroundColor = "orange";
    document.getElementById("square17").style.backgroundColor = "orange";
    document.getElementById("square23").style.backgroundColor = "orange";
  }

  //DIAGONAL 2 WIN
  if(selectedArray.includes("square4") &&
     selectedArray.includes("square8") &&
     selectedArray.includes("squarecenter") &&
     selectedArray.includes("square15") &&
     selectedArray.includes("square19")
    ) {
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("square4").style.backgroundColor = "orange";
    document.getElementById("square8").style.backgroundColor = "orange";
    document.getElementById("squarecenter").style.backgroundColor = "orange";
    document.getElementById("square15").style.backgroundColor = "orange";
    document.getElementById("square19").style.backgroundColor = "orange";
  }
}

function hideBox() {
  var pop = document.getElementById("popUpBox");
  pop.style.display = "none";
}
