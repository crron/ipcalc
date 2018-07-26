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
    alert(mask);
  }
}
