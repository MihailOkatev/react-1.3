import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";

export default function CalendarCurrentDate(props) {
    const {currentDate} = props;
    console.log(props);
    return (
        <>
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{currentDate.format('dddd')}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{currentDate.format('DD')}</div>
                    <div className="ui-datepicker-material-month">{String(currentDate.format('DD MMMM')).replace(/\d/g, '')}</div>
                    <div className="ui-datepicker-material-year">{currentDate.format('YYYY')}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">Март</span>&nbsp;<span className="ui-datepicker-year">{currentDate.format('YYYY')}</span>
                </div>
            </div>
            </>
    );
}
