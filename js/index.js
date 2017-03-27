$(function() {
  //Store button content
  var btnStr1 = "25";
  var btnStr2 = "5";
  var inProgress = false;
  var inProgress2 = false;
  
  //Dropdown set time on minute click
  $("#min1").click(function() {
    btnStr2 = "5";
    $("#set-time2").slideUp();
    $("#info").slideUp();
    $("#min1").addClass("newclass");
    $("#min2").removeClass("newclass");
    $("#set-time1").slideDown();
  });
  
  $("#min2").click(function() {
    btnStr1 = "25";
    $("#set-time1").slideUp();
    $("#min2").addClass("newclass");
    $("#min1").removeClass("newclass");
    $("#set-time2").slideDown();
  })
  
  //Get button content
  $(".num1").click(function(event1){
      console.log(btnStr1);
      if (btnStr1.length >= 2) {
        btnStr1 = "";
      }
      var content = event1.target.textContent
    $("#min1").html(btnStr1 += content)
  });
  $(".num2").click(function(event2){
      if (btnStr2.length >= 2) {
        btnStr2 = "";
      }
      var content = event2.target.textContent
      $("#min2").html(btnStr2 += content)
  });
  
  //Minimize set time, initiate timer 
  $("#start1").click(function() {
    if (inProgress) {
      return;
    }
    $("#set-time1").slideUp();
    $("#min1").removeClass("newclass");
    $("#progress-bar1").fadeIn(1000);
    $("#inner1").animate({width: "100%"})
    clearInterval(timer1);
    clearInterval(time);
    var counter = 0;
    var count = Number(btnStr1);
    var denom = count;
    count--;
    $("#min1").html(count);
    function timer() {
      counter++;
      if (count <= 0) {
        $("#progress-bar1").slideUp();
        $("#min2").addClass("newclass");
        $("#start2").click();
        clearInterval(time);
        inProgress = false;
      }
      else {
        count--;
        $("#min1").html(count);
      }  
    }
    var time = setInterval(timer, 60000)
    var count1 = 59;
    $("#sec1").html(count1);
    function timer2() {
      if (counter === denom) {
        clearInterval(timer1);
        inProgress = false;
      }
      else if (count1 <= 0) {
        count1 = 59;
        $("#sec1").html(count1);
      }
      else {
        count1--;
        if (count1 < 10) {
          $("#sec1").html("0" + count1);
        }  
        else {
          $("#sec1").html(count1);
        }
      }
    }
    var timer1 = setInterval(timer2, 1000);
    var width = 100;
    function progress() {
      if (width <= 0) {
        clearInterval(bar);
      }
      else {
        width -= (5 * 100) / (denom * 60);
        $("#inner1").animate({"width": width + "%"});
      }
    }
    var bar = setInterval(progress, 5000)
    inProgress = true;
    $("#reset1").click(function() {
      clearInterval(bar);
      $("#inner1").animate({width: "100%"})
      $("#min1").removeClass("newclass");
      clearInterval(timer);
      clearInterval(timer1);
      inProgress = false;
    });
    $("#stop1").click(function(){
      $("#min1").removeClass("newclass");
      clearInterval(bar);
      clearInterval(time);
      clearInterval(timer1);
      btnStr1 = count + 1;
      count1 = 59;
      inProgress = false;
    });
  }); 
  
  $("#start2").click(function() {
    if (inProgress2) {
      return;
    }
    $("#set-time2").slideUp();
    $("#min2").removeClass("newclass");
    $("#progress-bar2").fadeIn(1000);
    $("#inner2").animate({width: "100%"})
    clearInterval(timer1);
    clearInterval(time);
    var counter = 0;
    var count = Number(btnStr2);
    var denom = count;
    count--;
    $("#min2").html(count);
    function timer() {
      counter++;
      if (count <= 0) {
        clearInterval(time);
        inProgress2 = false;
      }
      else {
        count--;
        $("#min2").html(count);
      }  
    }
    var time = setInterval(timer, 60000)
    var count1 = 59;
    $("#sec2").html(count1);
    function timer2() {
      if (counter === denom) {
        clearInterval(timer1);
        inProgress2 = false;
      }
      else if (count1 <= 0) {
        count1 = 59;
        $("#sec2").html(count1);
      }
      else {
        count1--;
        if (count1 < 10) {
          $("#sec2").html("0" + count1);
        }  
        else {
          $("#sec2").html(count1);
        }
      }
    }
    var timer1 = setInterval(timer2, 1000);
    var width = 100;
    function progress() {
      if (width <= 0) {
        clearInterval(bar);
      }
      else {
        width -= (5 * 100) / (denom * 60);
        $("#inner2").animate({"width": width + "%"});
      }
    }
    inProgress2 = true;
    var bar = setInterval(progress, 5000)
    $("#reset2").click(function() {
      clearInterval(bar);
      $("#inner2").animate({width: "100%"})
      $("#min2").removeClass("newclass");
      clearInterval(timer);
      clearInterval(timer1);
      inProgress2 = false;
    });
    $("#stop2").click(function(){
      $("#min2").removeClass("newclass");
      clearInterval(bar);
      clearInterval(time);
      clearInterval(timer1);
      btnStr2 = count + 1;
      count1 = 59;
      inProgress2 = false;
    });
  });
  
  //Reset timer, dropdown set timer
  $("#reset1").click(function() {
    $("#min1").addClass("newclass");
    $("#progress-bar1").slideUp();
    btnStr1 = "25";
    $("#sec1").html("00");
    $("#min1").html("25");
    $("#set-time1").slideDown();
  });  
  
  $("#reset2").click(function() {
    $("#min2").addClass("newclass");
    $("#progress-bar2").slideUp();
    btnStr2 = "5";
    $("#sec2").html("00");
    $("#min2").html("5");
    $("#set-time2").slideDown();
  })
});