import health from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Мечник', health: 50 }, 'wounded'],
  [{ name: 'Лучник', health: 14 }, 'critical'],
])(
  ('should indicate health'),
  (object, status) => {
    const result = health(object);
    expect(result).toBe(status);
  },
);
