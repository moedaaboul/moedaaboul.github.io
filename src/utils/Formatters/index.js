export const parseDate = (str) => {
  const date = str
    ?.split('')
    .filter((e, i) => i < 10)
    .join('');
  return date;
};

export const parseTitle = (str) => {
  return str?.toUpperCase().split('-').join(' ');
};
