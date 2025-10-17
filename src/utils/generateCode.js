function generateRideCode(prefix = "RIDE") {
  const random6Digits = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${random6Digits}`;
}

// generate code for driver
function generateDriverCode(prefix = "DRIVER") {
  const random6Digits = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${random6Digits}`;
}

module.exports = { generateRideCode, generateDriverCode };
