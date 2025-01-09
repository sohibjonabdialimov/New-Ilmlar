export const formatDate = (date) => {
  // If 'date' is provided, use it; otherwise, use the current date
  const dateBack = date ? new Date(date) : new Date();

  // Get local date and time parts
  const year = dateBack.getFullYear();
  const month = String(dateBack.getMonth() + 1).padStart(2, "0");
  const day = String(dateBack.getDate()).padStart(2, "0");
  const hours = String(dateBack.getHours()).padStart(2, "0");
  const minutes = String(dateBack.getMinutes()).padStart(2, "0");
  const seconds = String(dateBack.getSeconds()).padStart(2, "0");

  // Format and return the date-time string in local timezone
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};