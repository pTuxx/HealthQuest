let lang = "en"
let urgencyLevel = 1
let injuryPos = []

function languageClick(language) {
    lang = language

    document.getElementById("languageSelect").remove()

    console.log(lang)
}

let bodySelection = document.getElementById("bodySelection")

function bodyClick(e) {
    var xPosition = e.clientX - bodySelection.getBoundingClientRect().left
    var yPosition = e.clientY - bodySelection.getBoundingClientRect().top

    if (xPosition < 0 || yPosition < 0) return

    console.log("(" + xPosition + ", " + yPosition + ")")

    let circle = document.createElement("div")
    circle.style.backgroundColor = "#ff0000"
    circle.style.height = "50px"
    circle.style.width = "50px"
    circle.style.position = "absolute"
    circle.style.top = yPosition + bodySelection.getBoundingClientRect().top - 473
    circle.style.left = xPosition + bodySelection.getBoundingClientRect().left - 31
    circle.style.borderRadius = "100%"

    bodySelection.appendChild(circle)

    injuryPos.push([xPosition, yPosition])
}

bodySelection.addEventListener("click", bodyClick, false)

function urgencySelection(level) {
    document.getElementById("urgencySelection1").style.backgroundColor = "#000000"
    document.getElementById("urgencySelection2").style.backgroundColor = "#000000"
    document.getElementById("urgencySelection3").style.backgroundColor = "#000000"
    document.getElementById("urgencySelection4").style.backgroundColor = "#000000"
    document.getElementById("urgencySelection5").style.backgroundColor = "#000000"

    color = "#5FEA67"

    if (level == 2) color = "#92D151"
    else if (level == 3) color = "#FFC000"
    else if (level == 4) color = "#FE0001"
    else if (level == 5) color = "#9B57CC"

    document.getElementById("urgencySelection" + level).style.backgroundColor = color

    urgencyLevel = level
}

function submitForm() {
    window.location.href = window.location.protocol + "/submit.php?name=" + document.getElementById("patientName").value + "&urgency=" + urgencyLevel + "&points=" + JSON.stringify(injuryPos)
}