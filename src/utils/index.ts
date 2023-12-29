export const readTime = (content: string, wordsPerMinute: number = 200) => {
  const words = content.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  const roundedMinutes = Math.ceil(minutes);
  return roundedMinutes;
};
