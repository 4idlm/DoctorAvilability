import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import './App.css';
import api from 'axios'

class Doctors extends Component {

  state = {
    selectedDay: undefined,
    isDisabled: false,
    
  };

  avalilabletime = [];

  handleDayChange = (selectedDay, modifiers) => {
    let date = selectedDay.toLocaleDateString()
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled === true,

    });
    console.log(this.state)
  }

  time = (time, slot,index) => {
   
   
    this.avalilabletime.push({
      slot,
      time
    })
  
  
  //var think =  this.avalilabletime.splice(0,6);
 // console.log(`deleting the ${think}`)
    console.log(this.avalilabletime)
  }

  submit = () => {
    let data = {
      "dt": this.state.selectedDay.toLocaleDateString(),
      "time": this.avalilabletime
    }

    let responce = api.post('http://localhost:4500/adding', data)

  }
 

  render() {
    let tym = ['9.33', '10.00', '10.30', '11.00', '11.30', '12.00'];
  
    return (

      <div className="container mt-5 mb-5 bg-white">
    
        <h2 className="pb-5  pt-5 cursor">Doctors Availability</h2>

        <div className="row ver-align pb-5 ">
          <div className="col-12 mb-3 col-md-6">
            <div className="date-natcue">Date</div>
            {/* <DayPickerInput onDayChange={this.changeDate} /> */}
            <DayPickerInput
              inputProps={{ readonly: 'readonly' }}
              placeholder="YYYY-MM-DD"
              dayPickerProps={{
                // showWeekNumbers: true,
                // showWeekNumbers: true,
                selectedDays: this.state.selectedDay,
                disabledDays: { before: new Date() },
              }}
              onDayChange={this.handleDayChange}
            />


          </div>
          <div className="col-12 col-md-6  ">

            <label data-toggle="collapse" data-target="#demo" className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>

          </div>

        </div>




        <div className="container pb-5  collapse fade show" id="demo" >

          <ul className="nav nav-pills doctors-time-tab">
            <li ><a className="active show" data-toggle="pill" href="#home"><span><i class="wi wi-day-haze"></i></span> Morning</a></li>
            <li><a data-toggle="pill" href="#menu1"><span> <i class="wi wi-day-sunny"></i></span> Afternoon</a></li>
            <li><a data-toggle="pill" href="#menu2"><span><i class="fa fa-moon-o"></i></span> Evening</a></li>

          </ul>

          <div className="tab-content border">
            <div id="home" className="tab-pane fade in active">
              <div className="f-prpty row">
                {tym.map((x,i) => { return <span className={this.state.activeIndex !== 0 ? 'appointment' : 'appointment green'}  onClick={() => this.time(x, "mor")} >{x}</span> }
                )}
              </div>
            </div>
            <div id="menu1" className="tab-pane fade"  >
              <div className="f-prpty row">
                {tym.map((x) => { return <span className="appointment-tym col-xs-6" onClick={() => this.time(x, "noon")} >{x}</span> }
                )}
              </div>
            </div>
            <div id="menu2" className="tab-pane fade">
              <div className="f-prpty row">
                {tym.map((x) => { return <span className="appointment-tym col-xs-6" onClick={() => this.time(x, "eve")} >{x}</span> }
                )}
              </div>
            </div>

          </div>
          <div className="text-sm-center text-md-right">
            <button  className="btn-booking" onClick={this.submit}>Update</button>
          </div>
          
        </div>

      </div>

    )
  }
}

export default Doctors;