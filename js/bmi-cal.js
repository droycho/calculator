$(function(){
  $("h1").click(function(){
    alert("This is a header.");
  });
  $("p").click(function(){
    alert("This is a paragraph.");
  });
});

  var weight;
  var height;

  var bmi = function(weight, height) {
  var convertedWeight = weight*0.45;
  var convertedHeight = height*0.025;
  return ( convertedWeight/(Math.pow(convertedHeight,2)) );
  };

  var heightAndWeight= function() {
  weight= parseInt(prompt("what is your weight?"));
  height= parseInt(prompt("what is your height?"));
  alert(bmi(weight, height));
  };

  heightAndWeight();
