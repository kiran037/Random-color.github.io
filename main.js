const getColor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//init call
getColor();

