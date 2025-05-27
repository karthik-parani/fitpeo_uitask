import { FaTooth, FaDumbbell } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

export const currentAppointments = [
  {
    id: 1,
    type: "Dentist",
    icon: <FaTooth />,
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    className: "dentist",
  },
  {
    id: 2,
    type: "Physiotherapy Appointment",
    icon: <FaDumbbell />,
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    className: "physiotherapy",
  },
];

export const upcomingSchedule = [
  {
    day: "On Thursday",
    events: [
      {
        id: 1,
        title: "Health checkup complete 🩺",
        time: "11:00 AM",
      },
      {
        id: 2,
        title: "Ophthalmologist",
        icon: <MdRemoveRedEye />,
        time: "14:00 PM",
      },
    ],
  },
  {
    day: "On Saturday",
    events: [
      {
        id: 1,
        title: "Cardiologist ❤️",
        time: "12:00 AM",
      },
      {
        id: 2,
        title: "Neurologist 🧑‍⚕️",
        time: "16:00 PM",
      },
    ],
  },
];
