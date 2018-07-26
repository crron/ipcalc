$(document).ready(function() {
  $(".btn").click(function() {
    clearInput();

    var ip = $('#ip').val();
    var mask = $('#mask').val();

    if (!Net.validateIp(ip)) {
      $('#ip').addClass('is-invalid');
      $('#ipHelp').removeClass('invisible');
    }

    if (!Net.validateMask(mask)) {
      $('#mask').addClass('is-invalid');
    }
    //Net.validateMask(mask);
    //alert("clicked" + ip + ' ' + mask);
  });
});

function clearInput() {
  if ($('#ip').hasClass('is-invalid')) {
    $('#ip').removeClass('is-invalid');
  }

  if (!$('#ipHelp').hasClass('invisible')) {
    $('#ipHelp').addClass('invisible');
  }

  if ($('#mask').hasClass('is-invalid')) {
    $('#mask').removeClass('is-invalid');
  }
}

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
