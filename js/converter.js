class Converter {
  static maskIpToBin(ipStr) {
    var splitIp = ipStr.split(".");
    var i, j, dec;
    var bits = new Array(8);
    var out = "";

    for (i = 0; i < splitIp.length; i++) {
      dec = Number(splitIp[i]);
      j = 7;
      bits.fill(0);

      while (dec) {
        bits[j--] = dec & 1;
        dec >>= 1;
      }
      out = out.concat(bits.join(""));
    }

    return out;
  }

  static maskNumToBin(num) {
    var bits = 32;
    var out = "";
    var i;

    num = Number(num);

    for(i = 0; i < bits; i++) {
      if ((i + 1) <= num) {
        out = out.concat("1");
      } else {
        out = out.concat("0");
      }
    }

    return out;
  }

  static maskBinToIp(maskBin) {
    var octet = 8;
    var tmpStr;
    var i, j;
    var num;
    var out = "";
    var tmpArr = [];

    for (i = 0; i < 4; i++) {
      num = 0;
      tmpStr = maskBin.slice(i * octet, (i + 1) * octet);

      for (j = octet - 1; j >= 0; j--) {
        num += Number(tmpStr[j]) * Math.pow(2, Math.abs(j - (octet - 1)));
      }
      tmpArr.push(String(num));
    }

    out = tmpArr.join(".");

    return out;
  }
}
