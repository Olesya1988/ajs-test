export default function getSortOfHealth(object) {
  return object.sort((prev, next) => next.health - prev.health);
}
