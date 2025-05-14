
function calculateTripCost() {
    const miles = parseFloat(document.getElementById("miles").value);
    const rentalDays = parseFloat(document.getElementById("rentalDays").value);
    const rentalRate = parseFloat(document.getElementById("rentalRate").value);
    const yourCostPerMile = parseFloat(document.getElementById("yourCostPerMile").value);

    if (isNaN(miles) || isNaN(rentalDays) || isNaN(rentalRate) || isNaN(yourCostPerMile)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const rentalTotal = rentalDays * rentalRate;
    const rentalPerMile = rentalTotal / miles;
    const yourTotal = miles * yourCostPerMile;

    let resultText = `<h3>Cost Summary</h3>`;
    resultText += `<p>Rental Car: $${rentalTotal.toFixed(2)} total ($${rentalPerMile.toFixed(2)}/mile)</p>`;
    resultText += `<p>Your Car: $${yourTotal.toFixed(2)} total ($${yourCostPerMile.toFixed(2)}/mile)</p>`;

    if (rentalPerMile < yourCostPerMile) {
        resultText += `<p><strong>✅ Recommendation: Rent the car – cheaper per mile!</strong></p>`;
    } else {
        resultText += `<p><strong>✅ Recommendation: Drive your car – more cost effective!</strong></p>`;
    }

    document.getElementById("results").innerHTML = resultText;
}
