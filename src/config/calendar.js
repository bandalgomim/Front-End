/**
 * @typedef { {start: number, end: number} } CalendarValidRange
 * @typedef {{validRange: CalendarValidRange}} CalendarConfig
 */

/**
 * @type {CalendarConfig}
 */
const calendarConfig = {
    validRange: {
        start: 1000 * 60 * 60 * 24 * 30 * 3, // 3 Month
        end: 1000 * 60 * 60 * 24 * 30 * 6 // 6 Month
    }
}

/**
 * @return {CalendarConfig}
 */
function getCalendarConfig() {
    return calendarConfig;
}

export { calendarConfig, getCalendarConfig };
