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
            days.push(new Date(cloneDate.format("YYYY-MM-DD")));
            days.reverse();
        }

    }
    cloneDate = moment(currentDate).startOf("month");
    console.log(cloneDate.format('DD MM YYYY'));
    const dayInMonth = cloneDate.daysInMonth();
    for(let i = 1; i <= dayInMonth; i++ ) {
        days.push(new Date(cloneDate.format("YYYY-MM-DD")));
        cloneDate.add(1,'day');

    }
    cloneDate.endOf('month');
    while (cloneDate.format('dddd') !== 'Tuesday') {
        cloneDate.add(1,'day');
        days.push(new Date(cloneDate.format("YYYY-MM-DD")));

    }
    const monnthAsWeeks = arraySlicer(days);
    const weekDays = [];
    for(let i = 1; i <= 7; i++) {
        weekDays.push(moment().isoWeekday(i).format('dd'));
    }
    return(
        <table className= 'ui-datepicker-calendar'>
            <colgroup>
            {weekDays.map((day,index) => {
                if(index === 5 || index === 6) {
                    return <col className='ui-datepicker-week-end'/>
                } else {
                    return <col/>
                }
            })}
            </colgroup>
        <thead>
        <tr>
            {weekDays.map(nameOfDay => <td key={nameOfDay}>{nameOfDay}</td>)}
        </tr>
        </thead>
            <tbody>
            {monnthAsWeeks.map((week, index) => <tr key={index} className='week'>
                {week.map(function (day) {
                    console.log(day.getMonth() === Number(currentDate.format("MMD")));
                    console.log(Number(currentDate.format("MM")));
                    console.log(day.getMonth());
                    if (day.getMonth() !== new Date(currentDate.format("YYYY-MM-DD")).getMonth()) {
                        return <td key={day.toString()} className='ui-datepicker-other-month'>{day.getDate()}</td>
                    } else if(day.getDay() === 0 || day.getDay() === 6) {
                        return <td key={day.toString()} className='ui-datepicker-week-end'>{day.getDate()}</td>
                    } else if (day.getDate() === Number(currentDate.format("DD")) && day.getMonth() + 1 === Number(currentDate.format('MM'))) {
                        return <td key={day.toString()} className='ui-datepicker-today'>{day.getDate()}</td>
                    } else {
                        return <td key={day.toString()}>{day.getDate()}</td>

                    }
                })}
            </tr>)}
            </tbody>
        </table>
)

}
