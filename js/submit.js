$(document).ready(function() {
  $(".btn").click(function() {
    var ip = $('#ip').val();
    var mask = $('#mask').val();

    Net.validateIp(ip);
    //Net.validateMask(mask);
    //alert("clicked" + ip + ' ' + mask);
  });
});

/*
$(document).ready(function(){
    $.fn.displayError = function(){
        alert('You have successfully defined the function!');
        //console.log("Warning!");
    }

    $("form").submit(function(){
        $.fn.displayError();
    });
});
*/

/*
$("form").submit(function(){
  $.fn.myFunction = function(){
    alert('You have successfully defined the function!');
  }
    $(this).alert("Submitted");
    $(this).displayWarning("Submitted");
});
*/
