/*
utility function to create a string of '1fr 1fr...'
to create variable numbers of rows and columns in CSS grid.
*/

export default function generateFrForGrid (numberOfDivisions) {
  let outputString = '';
  for (let i = 0; i < numberOfDivisions; i++) {
    outputString += '1fr ';
  }
  return outputString;
}