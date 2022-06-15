import React,{useState} from "react";
import { Calendar, CalendarComponent } from '@syncfusion/ej2-react-calendars';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

function CalenderMultiple(){
    const onChange = (props) => {
        const stateDate = props.startDate;
        const endDate = props.endDate;

    };
    return(
        <>
        <DateRangePickerComponent cssClass='customCSS' id="calender" change={onChange}></DateRangePickerComponent>
        </>
    );
}
export default CalenderMultiple;











