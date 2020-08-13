export const ageRanges = {
  early: { min: 6, max: 8 },
  middle: { min: 9, max: 14 },
  late: { min: 15, max: 19 }
};

export const invertMask = '0000000000000000000000000000000000000001000100010'.split(
  ''
);

export const categoryMask = 'PWWSPWPWSSPWSDPWWWDPWSSDPWSSDWPWDPWSSDPDSWPDWPSDW'.split(
  ''
);

export const tot = (age, score) => {
  if (age === 'late') {
    if (score > 37) {
      return { t: '>80', p: '>99' };
    }

    switch (score) {
      case 37:
        return { t: '78', p: '>99' };
      case 36:
        return { t: '77', p: '>99' };
      case 35:
        return { t: '75', p: '>99' };
      case 34:
        return { t: '74', p: '>99' };
      case 33:
        return { t: '72', p: '98' };
      case 32:
        return { t: '71', p: '98' };
      case 31:
        return { t: '69', p: '97' };
      case 30:
        return { t: '68', p: '96' };
      case 29:
        return { t: '67', p: '96' };
      case 28:
        return { t: '66', p: '95' };
      case 27:
        return { t: '65', p: '93' };
      case 26:
        return { t: '64', p: '92' };
      case 25:
        return { t: '63', p: '90' };
      case 24:
        return { t: '62', p: '88' };
      case 23:
        return { t: '61', p: '86' };
      case 22:
        return { t: '60', p: '84' };
      case 21:
        return { t: '59', p: '82' };
      case 20:
        return { t: '58', p: '79' };
      case 19:
        return { t: '57', p: '76' };
      case 18:
        return { t: '56', p: '72' };
      case 17:
        return { t: '54', p: '65' };
      case 16:
        return { t: '53', p: '62' };
      case 15:
        return { t: '52', p: '58' };
      case 14:
        return { t: '51', p: '54' };
      case 13:
        return { t: '50', p: '50' };
      case 12:
        return { t: '49', p: '46' };
      case 11:
        return { t: '48', p: '42' };
      case 10:
        return { t: '47', p: '38' };
      case 9:
        return { t: '45', p: '31' };
      case 8:
        return { t: '44', p: '28' };
      case 7:
        return { t: '43', p: '24' };
      case 6:
        return { t: '41', p: '19' };
      case 5:
        return { t: '40', p: '16' };
      case 4:
        return { t: '38', p: '12' };
      case 3:
        return { t: '37', p: '10' };
      case 2:
        return { t: '34', p: '8' };
      case 1:
        return { t: '32', p: '4' };
      case 0:
        return { t: '<30', p: '<2' };
      default:
        return null;
    }
  } else if (age === 'middle') {
    if (score > 38) {
      return { t: '>80', p: '>99' };
    }

    switch (score) {
      case 38:
        return { t: '78', p: ' >99' };
      case 37:
        return { t: '75', p: '>99' };
      case 36:
        return { t: '73', p: '99' };
      case 35:
        return { t: '72', p: '98' };
      case 34:
        return { t: '71', p: '98' };
      case 33:
        return { t: '70', p: '97' };
      case 32:
        return { t: '69', p: '97' };
      case 31:
        return { t: '68', p: '96' };
      case 30:
        return { t: '66', p: '95' };
      case 29:
        return { t: '65', p: '93' };
      case 28:
      case 27:
        return { t: '64', p: '92' };
      case 26:
        return { t: '63', p: '90' };
      case 25:
        return { t: '62', p: '88' };
      case 24:
        return { t: '61', p: '86' };
      case 23:
        return { t: '60', p: '84' };
      case 22:
        return { t: '59', p: '82' };
      case 21:
        return { t: '57', p: '76' };
      case 20:
        return { t: '56', p: '72' };
      case 19:
        return { t: '54', p: '65' };
      case 18:
        return { t: '53', p: '62' };
      case 17:
        return { t: '51', p: '54' };
      case 16:
        return { t: '50', p: '50' };
      case 15:
        return { t: '49', p: '46' };
      case 14:
        return { t: '48', p: '42' };
      case 13:
        return { t: '47', p: '38' };
      case 12:
        return { t: '46', p: '35' };
      case 11:
        return { t: '45', p: '31' };
      case 10:
        return { t: '44', p: '28' };
      case 9:
        return { t: '43', p: '24' };
      case 8:
        return { t: '42', p: '21' };
      case 7:
        return { t: '41', p: '19' };
      case 6:
        return { t: '40', p: '16' };
      case 5:
        return { t: '39', p: '14' };
      case 4:
        return { t: '37', p: '10' };
      case 3:
        return { t: '35', p: '7' };
      case 2:
        return { t: '33', p: '5' };
      case 1:
        return { t: '30', p: '2' };
      case 0:
        return { t: '<30', p: '<2' };
      default:
        return null;
    }
  } else {
    switch (score) {
      case 40:
        return { t: '75', p: '>99' };
      case 39:
        return { t: '73', p: '99' };
      case 38:
        return { t: '71', p: '98' };
      case 37:
        return { t: '70', p: '97' };
      case 36:
        return { t: '69', p: '97' };
      case 35:
        return { t: '68', p: '96' };
      case 34:
        return { t: '67', p: '96' };
      case 33:
        return { t: '66', p: '95' };
      case 32:
        return { t: '65', p: '93' };
      case 31:
        return { t: '64', p: '92' };
      case 30:
        return { t: '63', p: '90' };
      case 29:
        return { t: '62', p: '88' };
      case 28:
      case 27:
        return { t: '61', p: '86' };
      case 26:
        return { t: '60', p: '84' };
      case 25:
        return { t: '59', p: '82' };
      case 24:
        return { t: '58', p: '79' };
      case 23:
        return { t: '57', p: '76' };
      case 22:
        return { t: '56', p: '72' };
      case 21:
        return { t: '55', p: '69' };
      case 20:
        return { t: '53', p: '62' };
      case 19:
        return { t: '52', p: '58' };
      case 18:
        return { t: '51', p: '54' };
      case 17:
        return { t: '49', p: '46' };
      case 16:
        return { t: '48', p: '42' };
      case 15:
        return { t: '47', p: '38' };
      case 14:
        return { t: '45', p: '31' };
      case 13:
        return { t: '44', p: '28' };
      case 12:
        return { t: '43', p: '24' };
      case 11:
        return { t: '42', p: '21' };
      case 10:
        return { t: '40', p: '16' };
      case 9:
        return { t: '39', p: '14' };
      case 8:
        return { t: '38', p: '12' };
      case 7:
        return { t: '37', p: '10' };
      case 6:
        return { t: '36', p: '8' };
      case 5:
        return { t: '35', p: '7' };
      case 4:
        return { t: '34', p: '6' };
      case 3:
        return { t: '33', p: '5' };
      case 2:
        return { t: '32', p: '4' };
      case 1:
        return { t: '30', p: '2' };
      case 0:
        return { t: '<30', p: '<2' };
      default:
        return null;
    }
  }
};

export const def = (age, score) => {
  if (age === 'late') {
    switch (score) {
      case 9:
        return tot(age, 38);
      case 8:
        return tot(age, 34);
      case 7:
        return tot(age, 31);
      case 6:
        return tot(age, 27);
      case 5:
        return tot(age, 22);
      case 4:
        return tot(age, 18);
      case 3:
        return tot(age, 15);
      case 2:
        return tot(age, 11);
      case 1:
        return tot(age, 7);
      case 0:
        return { t: '36', p: '8' };
      default:
        return null;
    }
  } else if (age === 'middle') {
    switch (score) {
      case 9:
        return { t: '76', p: '>99' };
      case 8:
        return tot(age, 32);
      case 7:
        return tot(age, 27);
      case 6:
        return tot(age, 23);
      case 5:
        return tot(age, 20);
      case 4:
        return { t: '52', p: '48' };
      case 3:
        return tot(age, 15);
      case 2:
        return tot(age, 12);
      case 1:
        return tot(age, 8);
      case 0:
        return tot(age, 3);
      default:
        return null;
    }
  } else {
    switch (score) {
      case 9:
        return tot(age, 38);
      case 8:
        return tot(age, 29);
      case 7:
        return tot(age, 23);
      case 6:
        return tot(age, 19);
      case 5:
        return tot(age, 17);
      case 4:
        return tot(age, 14);
      case 3:
        return tot(age, 11);
      case 2:
        return tot(age, 8);
      case 1:
        return tot(age, 4);
      case 0:
        return tot(age, 0);
      default:
        return null;
    }
  }
};

export const phy = (age, score) => {
  if (age === 'late') {
    switch (score) {
      case 12:
        return tot(age, 36);
      case 11:
        return tot(age, 33);
      case 10:
        return tot(age, 31);
      case 9:
        return tot(age, 28);
      case 8:
        return tot(age, 25);
      case 7:
        return tot(age, 21);
      case 6:
        return tot(age, 18);
      case 5:
        return tot(age, 15);
      case 4:
        return tot(age, 11);
      case 3:
        return tot(age, 9);
      case 2:
        return tot(age, 6);
      case 1:
        return tot(age, 3);
      case 0:
        return { t: '31', p: '3' };
      default:
        return null;
    }
  } else if (age === 'middle') {
    switch (score) {
      case 12:
        return { t: '76', p: '>99' };
      case 11:
        return tot(age, 35);
      case 10:
        return tot(age, 31);
      case 9:
        return tot(age, 27);
      case 8:
        return tot(age, 24);
      case 7:
        return tot(age, 21);
      case 6:
        return tot(age, 19);
      case 5:
        return tot(age, 16);
      case 4:
        return tot(age, 12);
      case 3:
        return tot(age, 9);
      case 2:
        return tot(age, 6);
      case 1:
        return { t: '36', p: '8' };
      case 0:
        return tot(age, 0);
      default:
        return null;
    }
  } else {
    switch (score) {
      case 12:
        return tot(age, 39);
      case 11:
        return tot(age, 35);
      case 10:
        return tot(age, 32);
      case 9:
        return tot(age, 27);
      case 8:
        return tot(age, 24);
      case 7:
        return { t: '54', p: '65' };
      case 6:
        return tot(age, 18);
      case 5:
        return tot(age, 16);
      case 4:
        return tot(age, 13);
      case 3:
        return { t: '41', p: '19' };
      case 2:
        return tot(age, 8);
      case 1:
        return tot(age, 5);
      case 0:
        return tot(age, 0);
      default:
        return null;
    }
  }
};

export const wor = (age, score) => {
  if (age === 'late') {
    switch (score) {
      case 16:
        return tot(age, 38);
      case 15:
        return tot(age, 34);
      case 14:
        return { t: '70', p: '97' };
      case 13:
        return tot(age, 30);
      case 12:
        return tot(age, 28);
      case 11:
        return tot(age, 25);
      case 10:
        return tot(age, 23);
      case 9:
        return tot(age, 20);
      case 8:
        return tot(age, 18);
      case 7:
        return tot(age, 17);
      case 6:
        return tot(age, 15);
      case 5:
        return tot(age, 13);
      case 4:
        return tot(age, 11);
      case 3:
        return { t: '46', p: '35' };
      case 2:
        return tot(age, 7);
      case 1:
        return { t: '39', p: '14' };
      case 0:
        return tot(age, 2);
      default:
        return null;
    }
  } else if (age === 'middle') {
    switch (score) {
      case 16:
        return tot(age, 38);
      case 15:
        return tot(age, 35);
      case 14:
        return tot(age, 31);
      case 13:
        return tot(age, 29);
      case 12:
        return tot(age, 26);
      case 11:
        return tot(age, 24);
      case 10:
        return tot(age, 22);
      case 9:
        return tot(age, 21);
      case 8:
        return tot(age, 19);
      case 7:
        return { t: '52', p: '58' };
      case 6:
        return tot(age, 16);
      case 5:
        return tot(age, 13);
      case 4:
        return tot(age, 11);
      case 3:
        return tot(age, 9);
      case 2:
        return tot(age, 6);
      case 1:
        return tot(age, 5);
      case 0:
        return { t: '32', p: '4' };
      default:
        return null;
    }
  } else {
    switch (score) {
      case 16:
        return tot(age, 39);
      case 15:
        return tot(age, 35);
      case 14:
        return tot(age, 32);
      case 13:
        return tot(age, 30);
      case 12:
        return tot(age, 27);
      case 11:
        return tot(age, 25);
      case 10:
        return tot(age, 23);
      case 9:
        return { t: '54', p: '65' };
      case 8:
        return tot(age, 19);
      case 7:
        return tot(age, 17);
      case 6:
        return tot(age, 15);
      case 5:
        return tot(age, 13);
      case 4:
        return { t: '41', p: '19' };
      case 3:
        return tot(age, 9);
      case 2:
        return tot(age, 7);
      case 1:
        return tot(age, 4);
      case 0:
        return tot(age, 0);
      default:
        return null;
    }
  }
};

export const soc = (age, score) => {
  if (age === 'late') {
    switch (score) {
      case 12:
        return tot(age, 38);
      case 11:
        return { t: '73', p: '99' };
      case 10:
        return tot(age, 30);
      case 9:
        return tot(age, 28);
      case 8:
        return tot(age, 26);
      case 7:
        return tot(age, 23);
      case 6:
        return tot(age, 20);
      case 5:
        return { t: '55', p: '69' };
      case 4:
        return tot(age, 15);
      case 3:
        return tot(age, 12);
      case 2:
        return tot(age, 9);
      case 1:
        return tot(age, 6);
      case 0:
        return { t: '35', p: '7' };
      default:
        return null;
    }
  } else if (age === 'middle') {
    switch (score) {
      case 12:
        return tot(age, 38);
      case 11:
        return tot(age, 35);
      case 10:
        return tot(age, 32);
      case 9:
        return tot(age, 29);
      case 8:
        return tot(age, 25);
      case 7:
        return tot(age, 22);
      case 6:
        return tot(age, 20);
      case 5:
        return tot(age, 18);
      case 4:
        return tot(age, 16);
      case 3:
        return tot(age, 13);
      case 2:
        return tot(age, 10);
      case 1:
        return tot(age, 6);
      case 0:
        return { t: '34', p: '6' };
      default:
        return null;
    }
  } else {
    switch (score) {
      case 12:
        return tot(age, 39);
      case 11:
        return tot(age, 35);
      case 10:
        return tot(age, 33);
      case 9:
        return tot(age, 30);
      case 8:
        return tot(age, 26);
      case 7:
        return tot(age, 23);
      case 6:
        return { t: '54', p: '65' };
      case 5:
        return tot(age, 19);
      case 4:
        return tot(age, 16);
      case 3:
        return tot(age, 14);
      case 2:
        return { t: '41', p: '19' };
      case 1:
        return tot(age, 8);
      case 0:
        return tot(age, 2);
      default:
        return null;
    }
  }
};
