$(document).ready(function() {
  $(".btn").click(function() {
    clearAlert();
    clearResultTable();

    var ip_str = $('#ip').val();
    var mask_str = $('#mask').val();
    var ip_bool = false;
    var mask_bool = false;

    if (Net.validateIp(ip_str)) {
      ip_bool = true;
    } else {
      $('#ip').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }

    if (Net.validateMask(mask_str)) {
      mask_bool = true;
    } else {
      $('#mask').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }

    if (ip_bool == true && mask_bool == true) {
      $( "#out-network" ).append( "Test" );
    }
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

function clearResultTable() {
  $( "#out-network" ).empty();
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
