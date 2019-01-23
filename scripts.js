$(document).ready(function() {

  // Count Input
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var countBy = parseInt($("input#countBy").val());
    var countTo = parseInt($("input#countTo").val());

    if (countBy < 1) {
      alert("can't use a negative number, we'll make it a positive #");
      var countBy2 = countBy * -1;

      for (var i = 0; i < countTo; i+= countBy2 ) {
        console.log(i);
        $("#output").append(i);
      }
    }

    else {
      for (var i = 0; i < countTo; i+= countBy ) {
        console.log(i);
        $("#output").append(i);
      }
    }
  });




// Sentence Input
  $("form#formTwo").submit(function(event){
    event.preventDefault();

    var string = $("input#string").val();
    var blahs;

    for (var i = 0; i < string.length; i++) {
      var blah = string[i].replace(/a|e|i|o|u/gi, "-");
      blahs += blah;
      $("#sentenceOutput").append(blah);
    }

  });
});
