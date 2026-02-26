export function generateSmoothPath(
  data: number[],
  width: number,
  height: number,
  padding = 0
): string {
  if (data.length < 2) return "";

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: padding + (1 - (v - min) / range) * (height - padding * 2),
  }));

  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx},${prev.y} ${cpx},${curr.y} ${curr.x},${curr.y}`;
  }

  return d;
}

export function generateAreaPath(
  data: number[],
  width: number,
  height: number,
  padding = 0
): string {
  const linePath = generateSmoothPath(data, width, height, padding);
  if (!linePath) return "";

  const lastX = padding + ((data.length - 1) / (data.length - 1)) * (width - padding * 2);
  const firstX = padding;

  return `${linePath} L ${lastX},${height} L ${firstX},${height} Z`;
}
