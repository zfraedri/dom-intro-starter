// First Section: Selecting Elements By ID
document.getElementById("firstPara").innerHTML +=" <span class='tan'>This is new tan text</span>";

// Second Section: Selecting Elements By Tag Name
let images = document.getElementsByTagName("img");

for(let image of images){
    image.width = "250";
}