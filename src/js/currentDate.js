import { Temporal } from "@js-temporal/polyfill";

export const now = () => {
    return Temporal.Now.zonedDateTimeISO().toPlainDateTime().round("minute").toString();
};

export const today = () => {
    return Temporal.Now.zonedDateTimeISO().toPlainDate().toString();
}

export const thisWeek = () => {
    let today = Temporal.Now.zonedDateTimeISO()
    let oneWeekFromToday = today.add({ days: 7});
    return oneWeekFromToday.toPlainDate().toString();
}

// export default { now, today, thisWeek };