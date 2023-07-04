for (let i = 1; i <= 100; i++) {

    let squareColorClass = "bg-blue"
    let toBePrinted = i;

    if (i % 3 == 0 && i % 5 == 0) {     // Number is divisible by both 3 and 5
        squareColorClass = "bg-red"
        toBePrinted = "FizzBuzz"
    } else if (i % 3 == 0) {            // Number is divisible by 3
        squareColorClass = "bg-green"
        toBePrinted = "Fizz"
    } else if (i % 5 == 0) {            // Number is divisible by 5
        squareColorClass = "bg-yellow"
        toBePrinted = "Buzz"
    }
    
    // Html element template of the square.
    let squareElement = `
        <div class="m-2 d-flex square align-items-center justify-content-center shadow ${squareColorClass}">
            <div class="fs-5 align-middle">${toBePrinted}</div>
        </div>
`

    document.getElementById("squaresContainer").innerHTML += squareElement;
}