import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';


function AvailableSlotCalender(){

    return(
        <>
        <div className='demo-app'>
            <div className='demo-app-main'>
            <FullCalendar  
            plugins={[dayGridPlugin, timeGridPlugin]}
            weekends={false}
            initialView="timeGridWeek"
            headerToolbar={{
                left: 'prev,next',
                left: 'timeGridWeek'
              }}
            events={[
                { title: '3 Slots Free', date: '2022-04-11T24:30:00Z', Duration: "12:00:00" },
                { title: '3 Slots Free', date: '2022-04-14T12:30:00Z'}
            ]}
                 />
            </div>
          </div>
        </>
    );
}

export default AvailableSlotCalender;