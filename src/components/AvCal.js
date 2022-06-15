import React from "react";
import FullCalendar from '@fullcalendar/react';
import $ from "jquery";
class AvCal extends React.Component {
    componentWillMount(){

        $(document).ready(function(){
            var calendarEl = document.getElementById('calendar');
            function handleDatesRender(arg) {
              console.log('viewType:', arg.view.calendar.state.viewType);
            }
            var calendar = new FullCalendar.Calendar(calendarEl, {
              plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
              defaultView: 'dayGridMonth',
              datesRender: handleDatesRender,
              defaultDate: '2019-08-07',
              header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              },
              events: [
                {
                  title: 'All Day Event',
                  start: '2019-08-01'
                },
                {
                  title: 'Long Event',
                  start: '2019-08-07',
                  end: '2019-08-10'
                },
                {
                  groupId: '999',
                  title: 'Repeating Event',
                  start: '2019-08-09T16:00:00'
                },
                {
                  groupId: '999',
                  title: 'Repeating Event',
                  start: '2019-08-16T16:00:00'
                },
                {
                  title: 'Conference',
                  start: '2019-08-11',
                  end: '2019-08-13'
                },
                {
                  title: 'Meeting',
                  start: '2019-08-12T10:30:00',
                  end: '2019-08-12T12:30:00'
                },
                {
                  title: 'Lunch',
                  start: '2019-08-12T12:00:00'
                },
                {
                  title: 'Meeting',
                  start: '2019-08-12T14:30:00'
                },
                {
                  title: 'Birthday Party',
                  start: '2019-08-13T07:00:00'
                },
                {
                  title: 'Click for Google',
                  url: 'http://google.com/',
                  start: '2019-08-28'
                }
              ]
            });
          
            calendar.render();
        });
    }
    render() {
      return (
          <>
          <div id='calendar'></div>
          </>
      );
    }
  }
  
export default AvCal;