window.addEventListener('load', function () {
    const biggerButton = document.getElementById("biggerButton");
    biggerButton.onclick = makeTextBigger;

    const fancyRadio = document.getElementById("fancyRadio");
    const boringRadio = document.getElementById("boringRadio");
    fancyRadio.onchange = function() {
        showAlert();
        applyStyles();
    };
    boringRadio.onchange = function() {
        showAlert();
        applyStyles();
    };

    const mooButton = document.getElementById("mooButton");
    mooButton.onclick = mooChange;
})


function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyles() {
    const textArea = document.getElementById("userText");
    const fancyRadio = document.getElementById("fancyRadio");
    const boringRadio = document.getElementById("boringRadio");
  
    if (fancyRadio.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
}
  
function showAlert() {
    alert("Radio button changed!");
}

function mooChange() {
    const textArea = document.getElementById("userText");

    textArea.value = textArea.value.toUpperCase();
    textArea.value = textArea.value.split(".").join("-Moo.");
}
   
