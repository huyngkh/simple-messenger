export const formatAvatarLetters = (fullname) => {
  return fullname.split(' ').map(part => part[0]).join('');
}