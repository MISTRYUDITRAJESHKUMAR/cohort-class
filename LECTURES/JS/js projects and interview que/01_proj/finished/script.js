
function updateClock() {

  const timeElement = document.getElementById("time")
  const dateElement = document.getElementById("date")
  const now = new Date()

  // hours geted
  const hours = now.getHours().toString().padStart(2, "0")
  // minuts geted
  const minuts = now.getMinutes().toString().padStart(2, "0")
  //second geted
  const second = now.getSeconds().toString().padStart(2, "0")
  // AMPM gete
  const AmPm = now.getHours() >= 12 ? "PM" : "AM"
  // full elelement
  timeElement.textContent = `${hours}:${minuts}:${second}:${AmPm}`

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateElement.textContent = now.toLocaleDateString(undefined, options)
}
// const date = new date()

setInterval(updateClock, 1000);
updateClock()
