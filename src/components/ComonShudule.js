import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

class ComonShudule extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Meeting',
                StartTime: new Date(2018, 1, 15, 10, 0),
                EndTime: new Date(2018, 1, 15, 12, 30),
                IsAllDay: false,
                Status: 'Completed',
                Priority: 'High'
            }];
    }
    render() {
        return (
            <>
            <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>;
            </>
        );
    }
}
export default ComonShudule;







