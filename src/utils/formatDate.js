const formatDate = (val) => {
  if (!val) return null;
  const dateStr = typeof val === "string" ? val : new Date(val).toISOString();
  return dateStr.replace(".000Z", ""); // Removes milliseconds and Z
};

module.exports = { formatDate };