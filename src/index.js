//creating function to calculate the current date
function formatDate(timestamp) {
    let date = new Date(timestamp);
  
    let hour = date.getHours();
    if (hour <= 10) {
      hour = `0${hour}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes <= 10) {
      minutes = `0${minutes}`;
    }
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day} ${hour}:${minutes}`;
  }