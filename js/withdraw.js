document
    .getElementById("withdraw-calc-btn")
    .addEventListener("click", function(event) {
        let mainBalanceString =
            document.getElementById("balance-current").innerText;
        let mainBalance = parseFloat(mainBalanceString);
        let withdrawCureentString =
            document.getElementById("withdraw-current").innerText;
        let withdrawCurrent = parseFloat(withdrawCureentString);
        let inputFieldString = document.getElementById("withdraw-calc-field").value;
        let inputField = parseFloat(inputFieldString);
        if (isNaN(inputField)) {
            alert("please Provide a valid number");
            return;
        }
        let inputFieldPlus = withdrawCurrent + inputField;
        let inputToSubBalance = mainBalance - inputField;
        console.log(inputToSubBalance);
        if (inputField <= mainBalance) {
            document.getElementById("balance-current").innerText = inputToSubBalance;
            document.getElementById("withdraw-current").innerText = inputFieldPlus;
        } else {
            alert("Bou er bank e eto taka nai");
        }

        document.getElementById("withdraw-calc-field").value = "";
    });