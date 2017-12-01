$(document).ready(function() {
  $("form#track").submit(function(event) {
    event.preventDefault();
    var endPreference = parseInt($("#development").val());
    var environmentPreference = parseInt($("input:radio[name=operator]:checked").val());
    var goalPreference = parseInt($("input:radio[name=operator1]:checked").val());
    var trackerAdd = endPreference + environmentPreference + goalPreference;
    console.log(endPreference);
    console.log(environmentPreference);
    console.log(goalPreference);
    console.log(trackerAdd);

    if (trackerAdd >= 50 ) {
        $("#yourTrack").addClass("cssResult");
        $("#suggest").text("CSS");
    }
    else if (trackerAdd <= 6) {
        $("#yourTrack").addClass("javaResult");
        $("#suggest").text("Java");
    }
    else if (trackerAdd >=7 && trackerAdd <=14) {
        $("#yourTrack").addClass("jorcResult");
        $("#suggest").text("Java or C#");
    }
    else if (trackerAdd =22 ) {
        $("#yourTrack").addClass("cResult");
        $("#suggest").text("C#");
    }
    else {
      console.log("ended here");
    }
    $("#yourTrack").show();


  });
  $(".cssBtn").click(function(event) {
    event.preventDefault();
    $("#cssInfo").show();
    $("#javaInfo").hide();
    $("#cInfo").hide();
    $("#blog").hide();
  });
  $(".javaBtn").click(function(event) {
    event.preventDefault();
    $("#javaInfo").show();
    $("#cssInfo").hide();
    $("#cInfo").hide();
    $("#blog").hide();

  });
  $(".cBtn").click(function(event) {
    event.preventDefault();
    $("#cInfo").show();
    $("#javaInfo").hide();
    $("#cssInfo").hide();
    $("#blog").hide();
  });
  $(".blogBtn").click(function(event) {
    event.preventDefault();
    $("#blog").show();
    $("#javaInfo").hide();
    $("#cInfo").hide();
    $("#cssInfo").hide();
  });
  $(".active").click(function(event) {
    event.preventDefault();
    $("#blog").hide();
    $("#javaInfo").hide();
    $("#cInfo").hide();
    $("#cssInfo").hide();
  });
});
