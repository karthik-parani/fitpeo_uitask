import React from "react";
import "./ScheduleDashboard.css";
import { FaTooth, FaDumbbell } from "react-icons/fa";
import { GiSyringe, GiHeartOrgan, GiBrain } from "react-icons/gi";
import { MdRemoveRedEye } from "react-icons/md";
import { appointmentsData } from "../../data/appointments";
import { currentAppointments, upcomingSchedule } from "../../data/healthData";

const ScheduleDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="month-title">October 2021</h3>
      <div className="calendar-nav">
        <span className="arrow">←</span>
        <span className="arrow">→</span>
      </div>

      <div className="calendar">
        {appointmentsData.map(({ day, date, highlight, faded, slots }) => (
          <div
            key={date}
            className={`calendar-day ${highlight ? "highlight" : ""} ${
              faded ? "faded" : ""
            }`}
          >
            <div className="day-name">{day}</div>
            <div className="day-date">{date}</div>
            <div className="time-slots">
              {slots.map((slot, i) => (
                <div
                  key={i}
                  className={`slot ${
                    highlight && i === 1 ? "selected-slot" : ""
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="appointments">
          {currentAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`appointment ${appointment.className}`}
            >
              <div className="title-row">
                {appointment.type} {appointment.icon}
              </div>
              <div className="time">{appointment.time}</div>
              <div className="doctor">{appointment.doctor}</div>
            </div>
          ))}
        </div>

        <h4 className="upcoming-title">The Upcoming Schedule</h4>

        <div className="upcoming-section">
          {upcomingSchedule.map((daySchedule) => (
            <div key={daySchedule.day}>
              <p className="day-label">{daySchedule.day}</p>
              <div className="card-row">
                {daySchedule.events.map((event) => (
                  <div key={event.id} className="card">
                    <div className="card-title">
                      {event.title} {event.icon && event.icon}
                    </div>
                    <div className="card-time">{event.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDashboard;
