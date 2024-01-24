document.getElementById('generateButton').addEventListener('click', function() {
    var slider1Value = document.getElementById('slider1').value;
    var slider2Value = document.getElementById('slider2').value;
    var slider3Value = document.getElementById('slider3').value;

    var word1 = generateWord(slider1Value);
    var word2 = generateWord(slider2Value);
    var word3 = generateWord(slider3Value);

    document.getElementById('wordDisplay').textContent = word1 + " " + word2 + " " + word3;
});

function generateWord(sliderValue) {
    // Implement your word generation logic here
    // For now, let's just return the slider value
    return "Word" + sliderValue;
}
