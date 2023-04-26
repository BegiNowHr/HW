const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

function convert(elem, target, isTrue) {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const data = JSON.parse(request.responseText);
            if(isTrue==="somtousd"){
                target.value = (elem.value*data.usd).toFixed(2)
            }
            else if(isTrue==="somtoeuro"){
                target.value = (elem.value*data.euro).toFixed(2)
            }else if(isTrue==="usdtoeuro"){
                target.value = (elem.value*data.usdeuro).toFixed(2)
            }else if(isTrue==="eurotousd"){
                target.value = (elem.value*data.eurousd).toFixed(2)
            }else if(isTrue==="eurotosom"){
                target.value = (elem.value*data.eurosom).toFixed(2)
            }else if(isTrue==="usdtosom"){
                target.value = (elem.value*data.usdsom).toFixed(2)
            }
        });
    });
}

const arr = [
    { elem: som, target: usd, isTrue: "somtousd" },
    { elem: som, target: euro, isTrue: "somtoeuro" },
    { elem: usd, target: euro, isTrue: "usdtoeuro" },
    { elem: euro, target: usd, isTrue: "eurotousd" },
    { elem: euro, target: som, isTrue: "eurotosom" },
    { elem: usd, target: som, isTrue: "usdtosom" },
];

arr.forEach((item
) => {
    convert(item.elem, item.target, item.isTrue);
});
