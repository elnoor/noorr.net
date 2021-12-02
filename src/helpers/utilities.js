export function isValidImage(fileName) {
  return fileName.match(/.(jpg|jpeg|png|gif)$/i);
}

export function stripHtmlTags(str) {
  return str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
}

// will format date like "Nov 27, 2021"
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
