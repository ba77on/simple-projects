function solve() {
    let firstNumInput = document.getElementById("f-num");
    let secondNumInput = document.getElementById("s-num")
    let resultField = document.getElementById("result")
    resultField.value = "";

    let fNumValue = firstNumInput.value;
    let sNumValue = secondNumInput.value;
    let mathOperations = document.querySelector("#mathCalc");

    console.log(mathOperations.children)
    let childList = mathOperations.children
    Array.from(childList).forEach((x, i) => {
        let res = ""
        if (i % 2 === 1) {
            if (document.getElementById("add").checked) {
                res = Number(fNumValue) + Number(sNumValue)
                resultField.value = res
                firstNumInput.value = "";
                secondNumInput.value = "";

            } else if (document.getElementById("subtract").checked) {

                res = Number(fNumValue) - Number(sNumValue)
                resultField.value = res
                firstNumInput.value = "";
                secondNumInput.value = "";
            }
        } else if (document.getElementById("multiply").checked) {

            res = Number(fNumValue) * Number(sNumValue)
            resultField.value = res
            firstNumInput.value = "";
            secondNumInput.value = "";

        } else if (document.getElementById("division").checked) {
            res = Number(fNumValue) / Number(sNumValue)
            resultField.value = res
            firstNumInput.value = "";
            secondNumInput.value = "";
        }

    })




}

