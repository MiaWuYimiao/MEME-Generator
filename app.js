const form = document.querySelector("form");
const container = document.querySelector(".container")

form.addEventListener("submit", clickHandler)

// const isValidUrl = urlString=> {
// 	  	var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
// 	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
// 	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
// 	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
// 	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
// 	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
// 	  return !!urlPattern.test(urlString);
// }

function check () {
    var div = document.getElementById("error_imgurl");
    div.setAttribute('class', 'text-error'); 

    var ok=true;
    const urlString = document.getElementById("imageURL").value;
    console.log(urlString)
    console.log(isValidUrl(urlString))
    if (!isValidUrl(urlString))
    {
        ok=false;

        div.setAttribute('class', 'text-error display_block'); 
        div.innerHTML = "Please enter a valid image URL.";

        console.log("XXXX");
    }
    return ok;
}

function clickHandler(event){
    event.preventDefault();
    console.log("you submit a form");

    //get input value
    const urlInput = document.querySelector('#imageURL');
    const textTopInput = document.querySelector('#textTop');
    const textBotInput = document.querySelector('#textBot');
    // var urlErrTooltip = document.querySelector('#error_imgurl');
    console.log("urlInput.value = ", urlInput.value);
    console.log("textTopInput.value = ", textTopInput.value);
    console.log("textBotInput.value = ", textBotInput.value);

    //set url error tooltip to no display
    // urlErrTooltip.setAttribute('class', 'text-error'); 

    //create new div element
    const subContainer = document.createElement("div");
    subContainer.classList.add('subContainer');// adding a class to orgnizing image and text

    //set image
    const newImg = document.createElement('img'); //create a new image
    newImg.classList.add('imgFormat');//adding a class to resize image
    newImg.setAttribute('src', urlInput.value);
    // newImg.addEventListener('error', function handleError() {
    //     urlErrTooltip.setAttribute('class', 'text-error display_block'); 
    //     urlErrTooltip.innerHTML = "Please enter a valid image URL.";

    //     return;
    // });
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
