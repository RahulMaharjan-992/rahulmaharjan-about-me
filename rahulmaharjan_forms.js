//CALCULATOR
document.getElementById("calcForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.querySelector('input[name="op"]:checked');

    if (!op) {
        alert("Pick an operator.");
        return;
    }

    let result;

    switch (op.value) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                alert("Division by zero? Really? No.");
                return;
            }
            result = a / b;
            break;
    }

    alert("Result: " + result);
});


// FACTORIAL

document.getElementById("factForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let n = Number(document.getElementById("factInput").value);

    if (n < 0) {
        alert("Negative factorial doesn’t exist. Stop that.");
        return;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    alert("Factorial: " + result);
});


// FIBONACCI

document.getElementById("fibForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let n = Number(document.getElementById("fibInput").value);

    let a = 0, b = 1, temp;

    if (n === 0) return alert(0);
    if (n === 1) return alert(1);

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    alert("Fibonacci: " + b);
});



// MAX / MIN / RANGE

document.getElementById("mmrForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);

    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let range = max - min;

    alert(
        "Max: " + max +
        "\nMin: " + min +
        "\nRange: " + range
    );
});



// MAILING LIST

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip").value;

    let output =
        "<p>" +
        first + " " + last +
        " | " +
        email +
        " | " +
        zip +
        "</p>";

    document.getElementById("signupOutput").innerHTML += output;
});


// RESET FORM (optional safety)
document.getElementById("signupForm").addEventListener("reset", function () {
    console.log("Form reset. Chaos temporarily avoided.");
});