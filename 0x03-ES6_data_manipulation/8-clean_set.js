export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const sameValue = Array.from(set).filter(value => value.startsWith(startString));
  const edittedValue = sameValue.map(value => value.slice(startString.length));
  return edittedValue.join('-');
}
