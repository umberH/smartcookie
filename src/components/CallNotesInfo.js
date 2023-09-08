import { BiCalendarEvent,BiSolidPhoneCall } from "react-icons/bi";

const CallNotesInfo = ({ callDetail, onAddNewCall, OnAddNewAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        type="button"
        onClick={() => {
            onAddNewCall(callDetail.id);
        }}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiCalendarEvent />
      </button>
      <button
        type="button"
        onClick={() => {
            OnAddNewAppointment(callDetail.id);
        }}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiSolidPhoneCall />
      </button>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {callDetail.companyName}
          </span>
          <span className="flex-grow text-right">{callDetail.contactDate}</span>{" "}
          <span className="flex-grow text-right">{callDetail.notes}</span>{" "}
        </div>
        <div>
          <b className="font-bold text-blue-500">New Call Details:</b>{" "}
          {callDetail.DTFollowupDate}{""}
          {callDetail.DTFollowupTime}{""}
          {callDetail.DTFollowupNotes}{""}

        </div>
        
        <div>
          <b className="font-bold text-blue-500">New Appointment Details:</b>{" "}
          {callDetail.DNFollowupDate}{" "}
          {callDetail.DNFollowupNotes}{""}

        </div>
        {/* <div>
          <b className="font-bold text-blue-500">Appointment Details:</b>{" "}
          <span className="flex-grow text-right">{callDetail.contactNo}</span>{"  "}
          </div>
          <div>
          <b className="font-bold text-blue-500">Email:</b>{" "}
          {callDetail.emailAddress}{"  "}
          </div> <div>
          <b className="font-bold text-blue-500">Website:</b>{" "}
          {callDetail.wesiteURL}
        </div> */}
        {/* <div className="leading-tight">{customer.position}</div>
        <div className="leading-tight">{customer.address}</div> */}
        
      </div>
    </li>
  );
};

export default CallNotesInfo;
