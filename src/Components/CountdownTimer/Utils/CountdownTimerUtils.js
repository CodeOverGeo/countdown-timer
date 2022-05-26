import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const currentDayjs = dayjs();

  if (timestampDayjs.isBefore(currentDayjs)) {
    return {
      seconds: '0',
      minutes: '0',
      hours: '0',
      days: '0',
    };
  }

  return {
    seconds: getRemainingSeconds(currentDayjs, timestampDayjs),
    minutes: getRemainingMinutes(currentDayjs, timestampDayjs),
    hours: getRemainingHours(currentDayjs, timestampDayjs),
    days: getRemainingDays(currentDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(currentDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(currentDayjs, 'seconds') % 60;

  return seconds;
}

function getRemainingMinutes(currentDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(currentDayjs, 'minutes') % 60;

  return minutes;
}

function getRemainingHours(currentDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(currentDayjs, 'hours') % 24;

  return hours;
}

function getRemainingDays(currentDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(currentDayjs, 'days');

  return days;
}
