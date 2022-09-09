let score = 0;
let count = 5;

function submitName() {
    $("#homepage").hide();
    $("#welcomepage").show();
    let name = document.querySelector("input").value;
    $("#welcomepage h1 span").text("" + name + " !");
}

function que1() {

    let valid = false;
    if (document.getElementById("wrong11").checked) {
        valid = true;
    } else if (document.getElementById("wrong12").checked) {
        valid = true;
    } else if (document.getElementById("wrong13").checked) {
        valid = true;
    } else if (document.getElementById("right1").checked) {
        valid = true;
        score = score + 1;

    } else {
        if (valid) { } else { alert("Select One option to continue"); return false }
    }
    $("#que1").hide();
    $("#que2").show();
}

function que2() {

    let valid = false;
    if (document.getElementById("wrong1").checked) {
        valid = true;
    } else if (document.getElementById("wrong2").checked) {
        valid = true;
    } else if (document.getElementById("wrong3").checked) {
        valid = true;
    } else if (document.getElementById("right").checked) {
        valid = true;
        score = score + 1;
    } else {
        if (valid) { } else { alert("Select One option to continue"); return false }
    }

    $("#que1").hide();
    $("#que2").hide();
    $("#que3").show();
}

function que3() {

    let valid = false;
    if (document.getElementById("wrong31").checked) {
        valid = true;
    } else if (document.getElementById("wrong32").checked) {
        valid = true;
    } else if (document.getElementById("wrong33").checked) {
        valid = true;
    } else if (document.getElementById("right3").checked) {
        valid = true;
        score = score + 1;

    } else {
        if (valid) { } else { alert("Select One option to continue"); return false }
    }
    $("#que1").hide();
    $("#que2").hide();
    $("#que3").hide();
    $("#que4").show();
}

function que4() {
    $("#que1").hide();
    $("#que2").hide();
    $("#que3").hide();
    $("#que4").hide();
    $("#que5").show();
    let valid = false;
    if (document.getElementById("wrong41").checked) {
        valid = true;
    } else if (document.getElementById("wrong42").checked) {
        valid = true;
    } else if (document.getElementById("wrong43").checked) {
        valid = true;
    } else if (document.getElementById("right4").checked) {
        valid = true;
        score = score + 1;

    } else {
        if (valid) { } else { alert("Select One option to continue"); return false }
    }

}

function que5() {
    let valid = false;
    if (document.getElementById("wrong51").checked) {
        valid = true;
    } else if (document.getElementById("wrong52").checked) {
        valid = true;
    } else if (document.getElementById("wrong53").checked) {
        valid = true;
    } else if (document.getElementById("right5").checked) {
        valid = true;
        score = score + 1;

    } else {
        if (valid) { } else { alert("Select One option to continue"); return false }
    }

    $("#chore span").text(score);
    $("#totQue span").text(count);
    $("#que1").hide();
    $("#que2").hide();
    $("#que3").hide();
    $("#que4").hide();
    $("#que5").hide();
    $("#result").show();



}