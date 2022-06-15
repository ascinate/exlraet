import React,{useState} from "react";
import { Calendar, CalendarComponent } from '@syncfusion/ej2-react-calendars';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

function InventoryCalender(){
    const onChange = (props) => {
        const stateDate = props.startDate;
        const endDate = props.endDate;

    };
    return(
        <>
        <DateRangePickerComponent cssClass='customcl1' id="calender" change={onChange}></DateRangePickerComponent>
        </>
    );
}
export default InventoryCalender;