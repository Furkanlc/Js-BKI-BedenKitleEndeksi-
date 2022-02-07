function CalculateBmi() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var result = weight / Math.pow(height, 2);
    document.getElementById("result").innerText = result.toFixed(2);

    if (result < 18.5) {
        document.getElementById("resultStatu").innerText = "Under Weight";
        document.getElementById("resultStatu").style.color = "#2196f3";
    } else if (result > 18.5 && result < 25) {
        document.getElementById("resultStatu").innerText = "Normal";
        document.getElementById("resultStatu").style.color = "#43a047";
    } else if (result >= 25 && result < 30) {
        document.getElementById("resultStatu").innerText = "Over Weight";
        document.getElementById("resultStatu").style.color = "#fb8c00";
    } else if (result > 30) {
        document.getElementById("resultStatu").innerText = "Obese";
        document.getElementById("resultStatu").style.color = "Red";
    }
}

function reset() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("resultStatu").innerText = "";



}