function convertTo12Hour(time24) {

    let [hours, minutes] = time24.split(":");
  
    hours = parseInt(hours);
  
    const period = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
  
    return `${hours}:${minutes} ${period}`;
  }

  console.log(convertTo12HourFormat("20:23"));
  console.log(convertTo12HourFormat("00:30"));