export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
   throw new Error("Cannot process");
  }

  const freshMap = new Map();
  for (const [item, quantity] of freshMap.entries()) {
    if (quantity === 1) {
      freshMap.set(item, 100);
      }
  };
  return freshMap;
}
