/*
INSTRUCTIONS:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

*/
function past(h, m, s) {
  let time = (h * 60 * 60 + m * 60 + s) * 1000;
  if (h < 24 && m < 60 && s < 60) return time;
}
console.log(past(6, 0, 0));

// Alternative solution if you must use the Date() function.

function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  if (h < 24 && m < 60 && s < 60) return Math.round(setTime - midnight);
}
console.log(past(12, 12, 12));
