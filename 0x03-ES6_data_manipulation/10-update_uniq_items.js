export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
   throw new Error("Cannot process");
  }

  const freshMap = new Map();
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      freshMap.set(item, 100);
    } else {
      freshMap.set(item, quantity);
    }
  };
  return freshMap;
}
