// requires converter.js

class Validator {
  static validateIp(ip) {
    var out = true;
    var octets = 4;
    var i;
    var splitIp;
    var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    if (re.test(ip)) {
      splitIp = ip.split(".");

      for (i = 0; i < octets; i++) {
        if (Number(splitIp[i]) < 0 || Number(splitIp[i]) > 255) {
          out = false;
        }
      }
    } else {
      out = false;
    }

    return out;
  }

  static validateMask(mask) {
    var re1 = /^\d{1,2}$/;
    var re2 = /^\/\d{1,2}$/;
    var out = false;

    if (mask.length > 3) {
      out = this.validateMaskIp(mask);
    } else if (re1.test(mask)) {
      out = this.validateMaskRange(Number(mask));
    } else if (re2.test(mask)) {
      out = this.validateMaskRange(Number(mask.substr(1)));
    }

    return out;
  }

  static validateMaskRange(mask) {
    var out = false;

    if (0 <= mask && mask <= 32) {
      out = true;
    }

    return out;
  }

  static validateMaskIp(maskIp) {
    var i;
    var maskBin = Converter.maskIpToBin(maskIp);
    var out = true;

    for (i = 0; i < maskBin.length - 1; i++) {
      if (maskBin[i] == '0' && maskBin[i + 1] == '1') {
        out = false;
      }
    }

    return out;
  }
}
