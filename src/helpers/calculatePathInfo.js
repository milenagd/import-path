import isString from "lodash/isString";

export const calculatePathInfo = (value) => {
  if (!value || !isString(value)) return null;

  const splittedValue = value.split("/");
  const previousDirs = splittedValue.filter((item) => item === "..");

  return {
    value,
    prevDirsNumber: previousDirs.length,
    size: splittedValue.length,
    splitted: splittedValue,
  };
};
