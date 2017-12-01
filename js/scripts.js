$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var endPreference = parseInt($("#development").val());
    var environmentPreference = parseInt($("input:radio[name=operator]:checked").val());
    var goalPreference = parseInt($("input:radio[name=operator1]:checked").val());
    var trackerAdd = endPreference+ environmentPreference + goalPreference;
    console.log(endPreference);
    console.log(environmentPreference);
    console.log(goalPreference);
    console.log(trackerAdd);

    if (trackerAdd >= 50 ) {
        $("#suggest").text("CSS");
    }
    else if (trackerAdd <= 6) {
        $("#suggest").text("Java");
    }
    else if (trackerAdd >=7 && trackerAdd <=14) {
        $("#suggest").text("Java or C#");
    }
    else if (trackerAdd =22 ) {
        $("#suggest").text("C#");
    }
    else {
      console.log("ended here");
    }
    $("#yourtrack").show();

  });
});
