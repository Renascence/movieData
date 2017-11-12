export function getImageNameFromUrl(url) {
  if (!url) {
    return '';
  }
  return url.split('/').slice().pop();
}
