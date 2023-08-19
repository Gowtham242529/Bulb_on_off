function switchoff(){
    document.getElementById("Bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("Catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("Mainheading").textContent = "Switched Off";
    document.getElementById("Offbutton").style.backgroundColor = "#cbd2d9";
    document.getElementById("Onbutton").style.backgroundColor = "#22c55e";
}

function switchon(){
    document.getElementById("Bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("Catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("Mainheading").textContent = "Switched On";
    document.getElementById("Offbutton").style.backgroundColor = "#e12d39";
    document.getElementById("Onbutton").style.backgroundColor = "#cbd2d9";
}