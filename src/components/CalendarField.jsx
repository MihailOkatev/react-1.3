import React from "react";
import moment from "moment";
import arraySlicer from '../arraySlicer'

export default function CalendarField(props) {
    const {currentDate} = props;
    currentDate.locale('en');
    let cloneDate = moment(currentDate);
    const days = [];
    if(String(cloneDate.startOf('month').format('dddd')) !== 'Monday') {
        console.log('месяц начинается не с понедельника');
        cloneDate.locale('en');
        cloneDate.startOf('month');
        while (cloneDate.format('dddd') !== 'Monday') {
            cloneDate.subtract(1,'day');
            days.push(new Date(cloneDate.format("YYYY MM DD")));
            days.reverse();
        }

    }
    cloneDate = moment(currentDate).startOf("month");
    const dayInMonth = cloneDate.daysInMonth();
    for(let i = 0; i < dayInMonth; i++ ) {

        days.push(new Date(cloneDate.date(i).format("YYYY MM DD")));
    }
    cloneDate.endOf('month');
    console.log(cloneDate.format('DD MM YYYY'));
    while (cloneDate.format('dddd') !== 'Sunday') {
        cloneDate.add(1,'day');
        days.push(Number(cloneDate.format("DD")));
    }
    const monnthAsWeeks = arraySlicer(days);
    console.log(monnthAsWeeks);
    const weekDays = [];
    for(let i = 1; i <= 7; i++) {
        weekDays.push(moment().isoWeekday(i).format('dd'));
    }
    return(
        <table>
        <thead>
        <tr>
            {weekDays.map(nameOfDay => <td key={nameOfDay}>{nameOfDay}</td>)}
        </tr>
        </thead>
            <tbody>
            {monnthAsWeeks.map((week, index) => <tr key={index} className='week'>{week.map((day, index) => {
          if((index === 5 || index === 6) && day.getFullMonth() !== Number(currentDate.format("MM"))) {
              return <td key={index} className="ui-datepicker-other-month ui-datepicker-week-end"></td>
          }      
            }
            </tr>)}
            </tbody>
        </table>
)

}
