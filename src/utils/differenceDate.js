export const differenceDate = (date) => {
const now = new Date();

const diffInMilliseconds = Math.abs(now - new Date(date));

const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

return diffInDays.toFixed(0);
};