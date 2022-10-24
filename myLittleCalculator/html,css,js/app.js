function solve() {
    let firstNumInput = document.getElementById("f-num");
    let secondNumInput = document.getElementById("s-num")
    let resultField = document.getElementById("result")
    let button = document.getElementById("submit")

    button.addEventListener("click", subFunc)

    function subFunc(e) {
        let fNumValue = firstNumInput.value;
        let sNumValue = secondNumInput.value;
        console.log(fNumValue)

        console.log(sNumValue)
        let res = Number(fNumValue) + Number(sNumValue)
        console.log(res)
        resultField.value = res

    }

}
