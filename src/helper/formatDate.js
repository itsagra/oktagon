export default function formatDate(date) {
  return new Date(date).toLocaleString("en-UK", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}
