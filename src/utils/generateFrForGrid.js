export default function generateFrForGrid (num) {
  let outputString = '';
  for (let i = 0; i < num; i++) {
    outputString += '1fr ';
  }
  return outputString;
}