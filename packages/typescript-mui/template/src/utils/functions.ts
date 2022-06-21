export const isEmpty = (value: unknown) => {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim().length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

export const intersection = (arr1: [], arr2: []) =>
  arr1.filter((item) => arr2.includes(item));

export function deepClone<T>(obj: T) {
  return structuredClone(obj) as T;
}
