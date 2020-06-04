import isString from "lodash/isString";

export const removeQuotes = (value) => {
  if (!isString(value)) return "";
  return value.replace(/[', ", `]/g, "");
};
