const text = document.querySelector('textarea');
const btnUpperCase = document.getElementById('upper-case');
const btnLowerCase = document.getElementById('lower-case');
const btnProperCase = document.getElementById('proper-case');



btnUpperCase.addEventListener('click', function () {
    text.value = text.value.toUpperCase().trim();
})

btnLowerCase.addEventListener('click', function () {
    text.value = text.value.toLowerCase().trim();
})

btnProperCase.addEventListener('click', function () {
    let words = text.value.toLowerCase().trim().split(' ');
    let transformWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    text.value = transformWords.join(' ');
})

let element4 = document.getElementById("sentence-case");
element4.addEventListener("click", function() {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

let element5 = document.getElementById("save-text-file");
element5.addEventListener("click", function() {
    download("text.txt", document.querySelector("textarea").value);
})
