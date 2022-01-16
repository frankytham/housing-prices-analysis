const formatListingDate = (rawDate) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let day, month, year;
  year = rawDate.substring(0, 4);
  month = rawDate.substring(5, 7);
  day = rawDate.substring(8, 10);

  return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`
};

const formatPropertyType = (rawType) => {
  let characters = rawType.split('');
  return characters.map((letter, i) => i !== 0 && letter === letter.toUpperCase() ? ` / ${letter}` : letter);
};

export {
  formatListingDate,
  formatPropertyType
}
