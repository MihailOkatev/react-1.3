import React from "react";
import CalendarCurrentDate from './CalendarCurrentDate';
import CalendarField from './CalendarField';


export default function Calendar(props) {
    return (
        <div className="ui-datepicker">
        <CalendarCurrentDate currentDate={props.currentDate}/>
        <CalendarField currentDate={props.currentDate}/>
        </div>
);

}
