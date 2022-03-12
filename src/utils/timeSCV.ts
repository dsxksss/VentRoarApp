//1642650625
//时间戳转换
const timeSCV = (timeStamp: number) => {
  let time = new Date(timeStamp * 1000);
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let date = time.getDate().toString();
  let hours = time.getHours().toString();
  let minute = time.getMinutes().toString();
  if (parseInt(month) < 10) {
    month = "0" + month;
  }
  if (parseInt(date) < 10) {
    date = "0" + date;
  }
  if (parseInt(hours) < 10) {
    hours = "0" + hours;
  }
  if (parseInt(minute) < 10) {
    minute = "0" + minute;
  }

  return year + "-" + month + "-" + date + " " + hours + ":" + minute;
};
export default timeSCV;
