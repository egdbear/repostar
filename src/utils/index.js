const currentDate = new Date();
const previousWeek = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

const normalizeValue = (value) => value < 10 ? `0${value}` : value;

const currentDay = previousWeek.getDate();
const currentMonth = previousWeek.getMonth() + 1;
const day = normalizeValue(currentDay);
const month = normalizeValue(currentMonth);
const year = previousWeek.getFullYear();

export const lastweek = `${year}-${month}-${day}`;
