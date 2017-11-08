export function getImageNameFromUrl(url) {
  return url.split('/').slice().pop();
}