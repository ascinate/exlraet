import React from "react";
import $ from "jquery";

class ComonCustomCaldender extends React.Component {
  componentWillMount(){
    $(document).ready(function(){
       $('.av-border-gren').click(function(){
          $('.av-border-gren').removeClass("seletc-green-date");
          $(this).addClass("seletc-green-date");
      });

      $('.red-td').click(function(){
        $('.red-td').removeClass("seletc-green-date-red");
        $(this).addClass("seletc-green-date-red");
      });
    });
  }
  render() {
    return (
      <>
      <table class="table crm-table">
          <thead>
          <tr>
              <th scope="col" className="border-0"></th>
              <th scope="col">
                 <h5 className="comon-day"> SUN 
                  <span className="td-date d-block">21</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> MON
                  <span className="td-date d-block">22</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> TUE
                  <span className="td-date d-block">23</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> WED 
                  <span className="td-date d-block">24</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> THU
                  <span className="td-date d-block">21</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> FRI 
                  <span className="td-date d-block">25</span>
                 </h5>
              </th>
              <th scope="col">
                 <h5 className="comon-day"> SAT 
                  <span className="td-date d-block">26</span>
                 </h5>
              </th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border-0 cm-times">5 AM - 6 AM</td>
              <td className="av-border-gren">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td className="border-0 cm-times">6 AM - 7 AM</td>
              
              <td></td>
              <td></td>
              <td className="av-border-gren">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td className="border-0 cm-times">7 AM - 8 AM</td>
              <td className="av-border-gren">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">8 AM - 9 AM</td>
              
              <td></td>
              <td></td>
              
              <td></td>
              <td className="av-border-gren off-green">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">9 AM - 10 AM</td>
              
              <td className="av-border-gren off-green">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              
              
              <td className="av-border-gren off-green">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                2 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">10 AM - 11 AM</td>
              
              
              <td></td>
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                All Booked
                <span className="d-block">5 Slots</span>
                </h4>
              </td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">11 AM - 12 AM</td>
              <td></td>
              
              <td></td>
              <td className="av-border-gren off-green">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                2 Slots
                <span className="d-block">Free</span>
                </h4>
              </td>
              
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">12 PM - 01 PM</td>
              <td></td>
              
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                2 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
              
              
              
              <td></td>
              
              <td></td>
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                12:00 PM
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">2 PM - 3 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              
              <td className="av-border-gren off-green">
                <h4 className="com-avil mb-0">
                3 Slots
                <span className="d-block"> Free</span>
                </h4>
              </td>
              <td className="av-border-gren red-td">
                <h4 className="com-avil mb-0">
                2 Slots
                <span className="d-block">Free</span>
                </h4>
              </td>
              <td></td>
              
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">3 PM - 4 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">4 PM - 5 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">5 PM - 6 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">6 PM - 7 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>


          <tr>
              <td className="border-0 cm-times">7 PM - 8 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>

          <tr>
              <td className="border-0 cm-times">8 PM - 9 PM</td>
              <td className="blk-table"></td>
              
              <td></td>
              <td></td>
              
              
              <td></td>
              <td></td>
              
              <td></td>
              <td></td>
          </tr>
          
          </tbody>
      </table>
      </>
    );
  }
}

export default ComonCustomCaldender;