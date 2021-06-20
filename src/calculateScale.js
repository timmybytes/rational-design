import { ratios } from './ratios';

export function calculateScale({
  ratio = ratios[2][0],
  baseSize = 12,
  scale = 3,
  sizes,
}) {
  sizes = [baseSize];
  if (scale > 100) throw Error('Scale must not exceed 100');
  for (let i = 0; i < scale - 1; i++) {
    sizes.push(Math.round(sizes[sizes.length - 1] * ratio * 100) / 100);
  }
  return { ratio, baseSize, scale, sizes };
}
