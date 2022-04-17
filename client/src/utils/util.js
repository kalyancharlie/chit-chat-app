import moment from 'moment'
export const getIconLetters = (firstName = "", lastName = "") => {
  let letters = "";
  if (firstName.length >= 1) letters = firstName[0].toUpperCase();
  if (lastName.length >= 1) letters += lastName[0].toUpperCase();
  return letters;
};

export const getFirstAndLastName = (fullName = "") => {
  const words = fullName.split(" ");
  if (words.length === 0) return ["", ""];
  if (words.length === 1) return [words[0], ""];
  return [words[0], words[words.length - 1]]
};

export const getChatTime = (date) => {
  return moment(date).startOf('day').fromNow(); 
}