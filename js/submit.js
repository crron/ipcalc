$(document).ready(function() {
  $(".btn").click(function() {
    clearAlert();

    var ip = $('#ip').val();
    var mask = $('#mask').val();

    if (!Net.validateIp(ip)) {
      $('#ip').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }

    if (!Net.validateMask(mask)) {
      $('#mask').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }
    //Net.validateMask(mask);
    //alert("clicked" + ip + ' ' + mask);
  });
});

function clearAlert() {
  if ($('#ip').hasClass('is-invalid')) {
    $('#ip').removeClass('is-invalid');
  }

  if ($('#mask').hasClass('is-invalid')) {
    $('#mask').removeClass('is-invalid');
  }

  if (!$('#alert').hasClass('invisible')) {
    $('#alert').addClass('invisible');
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
