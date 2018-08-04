class Network {
  constructor(ip, mask) {
    this.ip = ip;
    this.mask = mask;
    this.network = this.setNetwork();
    this.wildcard = this.setWildcard();
    this.broadcast = this.setBroadcast();
    this.hostNumber = this.setHostNumber();
    this.hostMin = this.setHostMin();
    this.hostMax = this.setHostMax();
  }

  // Network IP = IP address & Mask (bitwise)
  setNetwork() {
    var octets = 4;
    var splitIp = this.ip.split(".");
    var splitMask = this.mask.split(".");
    var i;
    var netArray = new Array(4);
    var net;

    for (i = 0; i < octets; i++) {
      netArray[i] = Number(splitIp[i]) & Number(splitMask[i]);
    }

    net = netArray.join(".");

    return net;
  }

  // Network Broadcast = Network IP | Wildcard (bitwise)
  setBroadcast() {
    var octets = 4;
    var splitNetwork = this.network.split(".");
    var splitWildcard = this.wildcard.split(".");
    var i;
    var netArray = new Array(4);
    var net;

    for (i = 0; i < octets; i++) {
      netArray[i] = Number(splitNetwork[i]) | Number(splitWildcard[i]);
    }

    net = netArray.join(".");

    return net;
  }

  // Wildard = 255.255.255.255 - MaskIP
  setWildcard() {
    var splitBase = "255.255.255.255".split(".");
    var splitMask = this.mask.split(".");
    var octets = 4;
    var i;
    var tmpArr = [];
    var wildcard;

    for (i = 0; i < octets; i++) {
      tmpArr.push(String(Number(splitBase[i]) - Number(splitMask[i])));
    }

    wildcard = tmpArr.join(".");

    return wildcard;
  }

  //Maximum Number of hosts = 2**(32 - netmask_length) - 2
  setHostNumber() {
    var maskLength;
    var hostNumber;

    maskLength = Converter.maskIpToBin(this.mask).match(/1/g).length;

    if (maskLength < 32) {
      hostNumber = Math.pow(2, (32 - maskLength)) - 2;
    } else {
      hostNumber = 0;
    }

    return String(hostNumber);
  }

  setHostMin() {
    var hostMin;
    var splitNetwork;

    if (this.hostNumber > 0) {
      splitNetwork = this.network.split(".");
      splitNetwork[3] += 1;
      hostMin = splitNetwork.join(".");
    } else {
      hostMin = 0;
    }

    return hostMin;
  }

  setHostMax() {
    var hostMax;
    var splitBroadcast;

    if (this.hostNumber > 0) {
      splitBroadcast = this.broadcast.split(".");
      splitBroadcast[3] -= 1;
      hostMax = splitBroadcast.join(".");
    } else {
      hostMax = 0;
    }

    return hostMax;
  }


}
