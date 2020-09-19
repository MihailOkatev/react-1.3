import React from "react";

export default function CalendarCurrentDate(props) {
    const {currentDate} = props;
    console.log(props);
    return (
        <>
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{currentDate.format('dddd')[0].toUpperCase() + currentDate.format('dddd').slice(1)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{currentDate.format('DD')}</div>
                    <div className="ui-datepicker-material-month">{String(currentDate.format('DD MMMM')).replace(/\d/g, '')}</div>
                    <div className="ui-datepicker-material-year">{currentDate.format('YYYY')}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{currentDate.format("MMMM")[0].toUpperCase() + currentDate.format("MMMM").slice(1) }</span>&nbsp;<span className="ui-datepicker-year">{currentDate.format('YYYY')}</span>
                </div>
            </div>
            </>
    );
}
