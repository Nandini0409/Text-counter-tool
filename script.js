// All the variables in global scope
const input = document.getElementById("textField");
const trigger = document.getElementById("submit");
const wordCountField = document.getElementById("wordCount");
const characterCountField = document.getElementById("characterCount");
const clearBtn = document.getElementById("clearButton");

clearBtn.addEventListener("click",()=>{
    input.value = " ";
})

trigger.addEventListener("click", () => {
    const sampleString = input.value;
    if (sampleString === "") {
        input.setAttribute("placeholder", "Please enter the text before submitting!");
    }
    else {
        let wordCountAnswer = wordCounter(sampleString);
        let characterCountAnswer = characterCounter(sampleString);
        wordCountField.textContent = wordCountAnswer;
        characterCountField.textContent = characterCountAnswer;
    }
})

// takes sampleString as an argument and returns the word count------>
function wordCounter(text) {
    let wordCount = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            wordCount++;
        }
    }
    return wordCount;
}

// takes sampleString as an argument and returns the character count----->
function characterCounter(text) {
    let charCount;
    charCount = text.length;
    return charCount;
}


