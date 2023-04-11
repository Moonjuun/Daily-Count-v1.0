export const commaFormat = (str) => {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const uncommaFormat = (str) => {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
};
