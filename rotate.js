/*jshint esversion: 6 */
(function() {
    var rangeInput = document.getElementById("range-input");
    // Print the range value to the output
    rangeInput.oninput = wheelUpdate;

    function wheelUpdate() {
        document.getElementById("range-value").innerText = rangeInput.value; //Update the visual value
        document.getElementById("wheel").style.transform = `rotate(${rangeInput.value}deg)`;
    }
    
    document.getElementById("feeling-lucky").addEventListener("click", function() {
        rangeInput = Math.random() * (max - min) + min;
        wheelUpdate();
    });
})();
