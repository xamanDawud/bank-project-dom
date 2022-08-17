document
    .getElementById("add-deposit-btn")
    .addEventListener("click", function(event) {
        let depositField = document.getElementById("add-deposit-field");
        let newDepositAmountString = depositField.value;
        let newDepositAmount = parseFloat(newDepositAmountString);

        let depositTotalElement = document.getElementById("deposit-number");
        let previousDepositTotalString = depositTotalElement.innerText;
        let previousDepositTotal = parseFloat(previousDepositTotalString);
        let currentDeposit = previousDepositTotal + newDepositAmount;
        depositTotalElement.innerText = currentDeposit;

        ///////////////////////////////////////////////////////////////////////////

        let previoustBalanceString =
            document.getElementById("balance-current").innerText;
        let previousBalance = parseFloat(previoustBalanceString);
        let total = previousBalance + newDepositAmount;

        // console.log(previousBalance + newDepositAmount);
        document.getElementById("balance-current").innerText = total;
        // Clear Input
        depositField.value = "";
    });