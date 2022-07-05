type Mapper = {
  [key: number]: string;
};

const months: Mapper = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const days: Mapper = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

export function formatDate(input: string): string {
  const date = new Date(input);
  const actualDate = date.getDate();
  const actualMonth = months[date.getMonth()];
  const actualDay = days[date.getDay()];

  const formattedString = `${actualDay}, ${actualDate} ${actualMonth}`;
  return formattedString;
}
