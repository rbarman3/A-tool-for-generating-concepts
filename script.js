document.getElementById('generateButton').addEventListener('click', function() {
    var slider1Value = Number(document.getElementById('slider1').value);
    var slider2Value = Number(document.getElementById('slider2').value);
    var slider3Value = Number(document.getElementById('slider3').value);
    var word1 = generateOffense(slider1Value);
    var word2 = generateDefense(slider2Value);
    var word3 = generatePlaymaking(slider3Value);
    var word4 = generateRanking(slider1Value, slider2Value, slider3Value);
    var res = generateResult(slider1Value, slider2Value, slider3Value);
    var newImageSrc = determineImageSource(slider1Value, slider2Value, slider3Value);
    document.getElementById('dynamicImage').src = newImageSrc;
    document.getElementById('wordDisplay').textContent = "You made " + word4 + " " + word1 + " " + word2 + " " + word3;
    document.getElementById('Result').textContent = res;
});

document.getElementById('slider1').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider1Value').textContent = value;
});

document.getElementById('slider2').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider2Value').textContent = value;
});

document.getElementById('slider3').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider3Value').textContent = value;
});

document.getElementById('slider1').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider1Value').textContent = value;
    updateImageBasedOnSliders(); // If you're using the previous example
});

document.getElementById('slider2').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider2Value').textContent = value;
    updateImageBasedOnSliders(); // If you're using the previous example
});

document.getElementById('slider3').addEventListener('input', function() {
    var value = this.value;
    document.getElementById('slider3Value').textContent = value;
    updateImageBasedOnSliders(); // If you're using the previous example
});


function determineImageSource(val1, val2, val3) {
    // Replace this logic with your own criteria for selecting an image
    if (val1 >= 75 && val2 >= 90 && val3 >= 50 && val3 <= 60) {
        return "/A-tool-for-generating-concepts/licensed-image.jpeg";
    } else if (val1 >= 95 && val2 >= 95 && val3 >= 95) {
        return "/A-tool-for-generating-concepts/lebron.jpeg";
    } else if (val1 >= 90 && val2 >= 75 && val3 >= 75) {
        return "/A-tool-for-generating-concepts/kevin-durant-phoenix-suns-unsigned-shooting-in-black-vs-clippers-in-2023-nba-playoffs-photograph_ss5_p-200125182+u-lcojfikmeaqnwr1odv8b+v-ueqiu9hvqwi1hbmwxjpw.avif";
    } else if (val1 === 50 && val2 === 50 && val3 === 50) {
        return "/A-tool-for-generating-concepts/1236024269.jpg"
    } else if (val1 <= 30 && val2 < 30 && val3 <= 30) {
        return "/A-tool-for-generating-concepts/Killian_Hayes_(cropped).jpg";
    } else {
        return "/A-tool-for-generating-concepts/Logo_of_the_Detroit_Pistons.svg.png";
    }
}


function generateOffense(val) {
    if (val < 33) {
        return "brickLaying shooter";
    } else if (val >= 33 && val <= 50) {
        return "inconsistent shooter"
    } else if (val > 50 && val <= 75) {
        return "spot Up shooter"
    } else if (val > 75 && val <= 100) {
        return "sharpshooter"
    }
}

function generateDefense(val) {
    if (val < 33) {
        return "who is a Traffic Cone";
    } else if (val >= 33 && val <= 50) {
        return "who is an Okay Defender";
    } else if (val > 50 && val <= 75) {
        return "who is a Decent Defender";
    } else if (val > 75 && val <= 100) {
        return "who is a Lockdown Defender";
    }
}

function generatePlaymaking(val) {
    if (val < 33) {
        return "plus walking turnover";
    } else if (val >= 33 && val <= 50) {
        return "with butterFingers";
    } else if (val > 50 && val <= 75) {
        return "who can pass";
    } else if (val > 75 && val <= 100) {
        return "and dimer";
    }
}

function generateRanking(val1, val2, val3) {
    var total = val1 + val2 + val3;
    if (total === 3) {
        return "the worst";
    } else if (total > 3 && total <= 150) {
        return "a below average";
    } else if (total > 150 && total <= 225) {
        return "an average";
    } else if (total > 225 && total < 300) {
        return "an above average";
    } else if (total === 300) {
        return "an exceptional";
    }
}

function generateResult(val1, val2, val3) {
    var total = val1 + val2 + val3;
    if (val1 < 50) {
        return "This player would not help the Pistons";
    } else if (total < 100) {
        return "This player would not help the Pistons";
    } else if (total === 300) {
        return "We cannot get Lebron..."
    } else if (total > 200) {
        return "This player could help the pistons win a game!"
    } else {
        return "This player is most likely already on the team"
    }
}
