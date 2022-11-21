const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  // the end day of this month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // the end day of next month
  var next__lastDay;
  if (date.getMonth() != 11) {
    next__lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 2,
      0
    ).getDate();
  }
  else {
    next__lastDay == 31;
  }

  // the end day of prev month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  let days = "";

  // 저번달
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date" style="background-color: #F9F6FF">${prevLastDay - x + 1}</div>`;
  }

  // 이번달 달력
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today" style="background-color: #C2A8FF;">${i}</div>`;
    }
    else {
      days += `<div>${i}</div>`;
    }
  }

  // 다음달 달력
  for (let i = 1; i <= next__lastDay; i++) {
    days += `<div class="next-date"  style="background-color: #F9F6FF">${i}</div>`;
    monthDays.innerHTML = days;
  }
};

renderCalendar();
