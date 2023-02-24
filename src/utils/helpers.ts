export const BigTextCutter = (text: String, count: number) => {
  let sliced = text.slice(0,count);
  if (sliced.length < text.length) {
    sliced += '...';
  }
  return sliced
}