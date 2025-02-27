// First Section: Selecting Elements By ID
document.getElementById("firstPara").innerHTML +=" <span class='tan'>This is new tan text</span>";

// Second Section: Selecting Elements By Tag Name
let images = document.getElementsByTagName("img");

for(let image of images){
    image.width = "250";
}

// Third Section: Selecting Elements by Class Name
let lightBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for(let span of lightBlueSpans){
    span.style.color = "#7C93A6"
}
for(let span of dkBlueSpans){
    span.style.color = "#3C5E73"
}

// Fourth Section: Selecting Elements by CSS Selector (as a group)
let svgs = document.querySelectorAll("#svgs svg");
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"]

for(let i=0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

// Fifth Section: Selecting Elements by CSS Selector (as the first element that matches on the page)
document.querySelector("#query .bold").style.color = "#7C9EA6";

// Sixth Section: Changing DOM Node Content
document.querySelector(".content_list li:first-of-type").textContent ="This is new list item text";
document.querySelectorAll(".content_list li")[2].innerHTML += "<strong>Zachary Fraedrich</strong>";

// Seventh Section: Removing an Attribute
document.querySelector("#remove a").removeAttribute("hidden")