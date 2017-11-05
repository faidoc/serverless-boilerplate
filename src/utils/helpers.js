export function log(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

export function paramExists(params, param) {
  return params && param && Object.prototype.hasOwnProperty.call(params, param);
}

