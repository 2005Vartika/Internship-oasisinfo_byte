
function convertTemperature() {
  var temperature = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultContainer = document.getElementById("result");

 
  if (unit === "celsius") {
      var convertedTemp = (temperature * 9/5) + 32;
      resultContainer.innerText = temperature + " Celsius is equal to " + convertedTemp + " Fahrenheit.";
    
  } else {
      var convertedTemp = (temperature - 32) * 5/9;
      resultContainer.innerText = temperature + " Fahrenheit is equal to " + convertedTemp + " Celsius.";
     
  }
}
function resetfields()
{
  document.getElementById("temperature").value= '';
  document.getElementById("unit").value= "celsius";
  document.getElementById("resultcontainer").value= '';
}
document.getElementById("resetbutton").addEventListener('click',resetfields);