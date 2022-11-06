const form = document.querySelector("form");
const container = document.querySelector(".container")

form.addEventListener("submit", clickHandler)

function clickHandler(event){
    event.preventDefault();
    console.log("you submit a form");

    //create new div element
    const subContainer = document.createElement("div");
    subContainer.classList.add('subContainer');// adding a class to orgnizing image and text

    //get input value
    const urlInput = document.querySelector('#imageURL');
    const textTopInput = document.querySelector('#textTop');
    const textBotInput = document.querySelector('#textBot');
    console.log("urlInput.value = ", urlInput.value);
    console.log("textTopInput.value = ", textTopInput.value);
    console.log("textBotInput.value = ", textBotInput.value);

    //set image
    const newImg = document.createElement('img'); //create a new image
    newImg.classList.add('imgFormat');//adding a class to resize image
    newImg.setAttribute('src', urlInput.value);
    subContainer.appendChild(newImg);

    // add hover effect
    const hover = document.createElement('div');
    hover.classList.add('middle');
    hover.textContent = "delete";
    subContainer.appendChild(hover);

    //set text
    const newTopText = document.createElement('h3');
    newTopText.textContent = textTopInput.value;
    newTopText.classList.add('top');
    subContainer.appendChild(newTopText);

    const newBotText = document.createElement('h3');
    newBotText.textContent = textBotInput.value;
    newBotText.classList.add('bottom');
    subContainer.appendChild(newBotText);

    //give new div a class attribute
    //newDiv.classList.add("image" + number);

    // call a function handleImgClick when a img is clicked on
    subContainer.addEventListener('click', handleImgClick);

    // append the div to the element with an id of images
    container.appendChild(subContainer);
    urlInput.value = '';
    textTopInput.value = '';
    textBotInput.value = '';
}

function handleImgClick(event){
    console.log(event.target);
    event.target.parentElement.remove();
}
