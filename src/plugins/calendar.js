import Calendar from "~/shared/calendar";

export default ({ app }, inject) => {
  inject("calendar", () => {
    return new Calendar(process.env.overwriteDate);
  });
};
