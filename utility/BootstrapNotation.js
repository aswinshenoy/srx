export function getRespValue(type, val) {
  if (val != null) {
    if (Array.isArray(val) && val.length <= 5) {
      if (val.length === 2) {
        return `${type}-${val[0]}  ${type}-md-${val[1]}`;
      }
      if (val.length === 3) {
        return `${type}-${val[0]}  ${type}-md-${val[1]} ${type}-xl-${val[2]}`;
      }
      if (val.length === 4) {
        return `${type}-${val[0]}  ${type}-md-${val[1]} ${type}-lg-${
          val[2]
        } ${type}-xl-${val[3]}`;
      }
      if (val.length === 5) {
        return `${type}-${val[0]}  ${type}-sm-${val[1]} ${type}-md-${
          val[2]
        } ${type}-xl-${val[3]} ${type}-xl-${val[3]}`;
      }
    } else if (val > 0 && val < 13) {
      return `${type}-${val}`;
    }
  }
  return null;
}

export function getOrderClass(val) {
  return getRespValue('order', val);
}

export function getColWidthClass(val) {
  return getRespValue('col', val);
}

export function getStyleClass(type, val) {
  if (val !== null) {
    if (Array.isArray(val)) {
      if (val.length === 2) {
        return `${type}x-${val[0]} ${type}y-${val[1]}`;
      }
      if (val.length === 4) {
        return `${type}t-${val[0]} ${type}r-${val[1]} ${type}b-${
          val[2]
        } ${type}l-${val[3]}`;
      }
      return null;
    }
    if (val >= 0 && val < 6) {
      return `${type}-${val}`;
    }
  }
  return null;
}
