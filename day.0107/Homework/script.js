// 1
function calculateBirthdayInfo(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
  
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (today < thisYearBirthday) {
      age--;
    }

    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today >= nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / msPerDay);
  
    return {
      age,
      daysUntilNextBirthday
    };
  }
  

console.log(calculateBirthdayInfo("2013-6-1"))


// 2
function getHoursMinutes(dateString) {
    const [hourStr, minuteStr] = dateString.split(":");
    const hours = parseInt(hourStr);
    const minutes = parseInt(minuteStr);
    return { hours, minutes };
}

function calculateWorkHours(startHour, endHour){
    const start = getHoursMinutes(startHour);
    const end = getHoursMinutes(endHour);

    let totalMinutes = (end.hours * 60 + end.minutes) - (start.hours * 60 + start.minutes);

    if (totalMinutes < 0) {
        totalMinutes += 24 * 60; 
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {hours, minutes};
}

console.log(calculateWorkHours("09:10", "4:20"));


// 3
function getGeorgianWeekday(dateStr) {
    const daysGeorgian = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"];

    const date = new Date(dateStr);
    const dayIndex = date.getDay(); 
    return daysGeorgian[dayIndex];
}
