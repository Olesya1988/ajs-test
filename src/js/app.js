export default function health(object) {
  if (object.health >= 15 && object.health <= 50) {
    return 'wounded';
  }

  if (object.health < 15) {
    return 'critical';
  }

  return 'healthy';
}
