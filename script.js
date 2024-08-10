// All the variables in global scope
const input = document.getElementById("textField");
const trigger = document.getElementById("submit");
const wordCountField = document.getElementById("wordCount");
const characterCountField = document.getElementById("characterCount");
const clearBtn = document.getElementById("clearButton");

// this event handler checks whether the textarea is filled, and manipulates the wordCount and characterCount divs--->
trigger.addEventListener("click", (evt) => {
    evt.preventDefault();     /*implement custom behaviors instead of the default ones*/
    updateTextCount();
})


// clears the textarea and answer divs --->
clearBtn.addEventListener("click", (evt) => {
    evt.preventDefault();     /*implement custom behaviors instead of the default ones*/
    input.value = "";
    characterCountField.textContent = "";
    wordCountField.textContent = "";
})


// this function updates the wordCount and characterCount fields based on the text received from the textarea---->
function updateTextCount(){
    let sampleString = input.value;
    console.log(sampleString)
    if (sampleString === "") {
        input.setAttribute("placeholder", "Please enter the text before submitting!");
    }
    else {
        let wordCountAnswer = wordCounter(sampleString);
        let characterCountAnswer = characterCounter(sampleString);
        wordCountField.textContent = wordCountAnswer;
        characterCountField.textContent = characterCountAnswer;
    }
}


// takes sampleString as an argument and returns the character count----->
function characterCounter(text) {
    let charCount;
    charCount = text.length;
    return charCount;
}



// takes sampleString as an argument and returns the word count------>
function wordCounter(text) {
    let wordCount;
    let wordArray = text.split(/\s+/);     /*splits the text when encounters one or more whitespaces in text and returns an array*/
    wordCount = wordArray.length;
    return wordCount;
}