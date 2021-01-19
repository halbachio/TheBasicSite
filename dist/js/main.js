$(document).ready(function(){
  $("#red").click(function(){
    $("body").removeClass("black blue yellow walnut white green-b black-b").addClass("red");
  });
  $("#black").click(function(){
    $("body").removeClass("red blue yellow walnut white green-b black-b").addClass("black");
  });
  $("#blue").click(function(){
    $("body").removeClass("black red yellow walnut white green-b black-b").addClass("blue");
  });
  $("#yellow").click(function(){
    $("body").removeClass("black blue red walnut white green-b black-b").addClass("yellow");
  });
  $("#walnut").click(function(){
    $("body").removeClass("black blue yellow red white green-b black-b").addClass("walnut");
  });
  $("#white").click(function(){
    $("body").removeClass("black blue yellow walnut red green-b black-b").addClass("white");
  });
  $("#green-b").click(function(){
    $("body").removeClass("black blue yellow walnut red white black-b").addClass("green-b");
  });
  $("#black-b").click(function(){
    $("body").removeClass("black blue yellow walnut red white green-b").addClass("black-b");
  });
  $("#hd").click(function(){
    $("body").removeClass("comfort move").addClass("hd");
  });
  $("#comfort").click(function(){
    $("body").removeClass("hd move").addClass("comfort");
  });
  $("#move").click(function(){
    $("body").removeClass("hd comfort").addClass("move");
  });
});