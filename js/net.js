class Net {
  constructor(ip, mask) {
    this.ip = ip;
    this.mask = mask;
  }

  getBroadcast() {}

  getWildcard() {}

  getHostNet() {}

  getHostMin() {}

  getHostMax() {}

  static validateIp(ip) {
    var re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    var out = re.test(ip)
    return out;
  }

  static validateMask(mask) {
    var re1 = /^\d{1,2}$/;
    var re2 = /^\/\d{1,2}$/;
    var out = false;

    if (mask.length > 3) {
      out = this.validateIp(mask);
    } else if (re1.test(mask)) {
      out = this.validateMaskRange(Number(mask));
    } else if (re2.test(mask)) {
      out = this.validateMaskRange(Number(mask.substr(1)));
    }

    return out;
  }

  static validateMaskRange(mask) {
    var out = false;
    //alert(mask);

    if (0 <= mask && mask <= 32) {
      out = true;
    }

    return out;
  }
}
