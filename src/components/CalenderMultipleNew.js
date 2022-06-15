import React,{useState} from "react";
import { Calendar, CalendarComponent } from '@syncfusion/ej2-react-calendars';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

function CalenderMultipleNew(){
    const onChange = (props) => {
        const stateDate = props.startDate;
        const endDate = props.endDate;

    };
    return(
        <>
        <DateRangePickerComponent cssClass='customCSSnew' id="calender" change={onChange}></DateRangePickerComponent>
        </>
    );
}
export default CalenderMultipleNew;











