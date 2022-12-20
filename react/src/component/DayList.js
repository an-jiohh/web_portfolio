import dummy from "../db/data.json";
import "../App.css";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_dat">
      {dummy.days.map((day) => (
        <li>Day {day.day}</li>
      ))}
    </ul>
  );
}
