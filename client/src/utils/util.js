export const getIconLetters = (firstName="", lastName="") => {
  let letters = "";
  if (firstName.length >= 1) letters = firstName[0].toUpperCase()
  if (lastName.length >= 1) letters += lastName[0].toUpperCase()
  return letters;
}