// requires network.js
//          validator.js

$(document).ready(function() {
  $(".btn").click(function() {
    clearAlert();
    clearResultTable();

    var ip_str = $('#ip').val();
    var mask_str = $('#mask').val();
    var ip_bool = false;
    var mask_bool = false;

    if (Validator.validateIp(ip_str)) {
      ip_bool = true;
    } else {
      $('#ip').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }

    if (Validator.validateMask(mask_str)) {
      mask_bool = true;
    } else {
      $('#mask').addClass('is-invalid');
      $('#alert').removeClass('invisible');
    }

    if (ip_bool == true && mask_bool == true) {
      if (mask_str.length <= 2) {
        mask_str = Converter.maskBinToIp(Converter.maskNumToBin(mask_str));
      } else if (mask_str.length == 3) {
        mask_str = Converter.maskBinToIp(Converter.maskNumToBin(mask_str.slice(-2)));
      }

      net = new Network(ip_str, mask_str);
      /*
      console.log(net.network);
      console.log(net.mask);
      console.log(net.broadcast);
      console.log(net.wildcard);
      console.log(net.hostNumber);
      console.log(net.hostMin);
      console.log(net.hostMax);
      console.log(Converter.maskIpToNum(net.mask));
      */

      $('#network').append(net.network);
      $('#netMask').append(net.mask + " [" + Converter.maskIpToNum(net.mask) + "]");
      $('#wildcard').append(net.broadcast);
      $('#broadcast').append(net.wildcard);
      $('#hosts').append(net.hostNumber);
      $('#hostMin').append(net.hostMin);
      $('#hostMax').append(net.hostMax);
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
  $('#network').empty();
  $('#netMask').empty();
  $('#wildcard').empty();
  $('#broadcast').empty();
  $('#hosts').empty();
  $('#hostMin').empty();
  $('#hostMax').empty();
}
