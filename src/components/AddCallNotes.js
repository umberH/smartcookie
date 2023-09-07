import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

const AddCallNotes = ({ onUpdateNotes, lastId }) => {
  const clearData = {
    companyName: "",
    contactPerson: "",
    position: "",
    address: "",
    suburb: "",
    postcode:"",
    state:"",
    contactNo:"",
    emailAddress:"",
    websiteURL:"",

  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  const formDataPosted = () => {
    if (formData.companyName && formData.contactPerson && formData.address && formData.suburb && formData.postcode && formData.state && formData.contactNo ) {
      const callNotes = {
        id: lastId + 1,
        companyName: formData.companyName,
        contactDate: formData.contactDate,
        notes: formData.notes,
        DNFollowupDate: formData.address,
        DNFollowupNotes: formData.suburb,
        DTFollowupDate:formData.postcode,
        DTFollowupAction:formData.DTFollowupAction,
        DTApptTime:formData.DTApptTime,
        
      };
      onUpdateNotes(callNotes);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    } else {
      alert("fill required fields");
    }
  };

  return (
    <div>
      <button
        onClick={() => setToggleForm(!toggleForm)}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left  ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Customer
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Company Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, companyName: event.target.value });
                }}
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                required
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="contactPerson"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Contact Person
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, contactPerson: event.target.value });
                }}
                required
                type="text"
                name="contactPerson"
                id="contactPerson"
                value={formData.contactPerson}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                required
                onChange={(event) => {
                  setFormData({ ...formData, aptDate: event.target.value });
                }}
                type="date"
                name="aptDate"
                id="aptDate"
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div> */}

          {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, aptTime: event.target.value });
                }}
                type="time"
                name="aptTime"
                id="aptTime"
                value={formData.aptTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div> */}

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Position
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, position: event.target.value });
                }}
                value={formData.position}
                id="position"
                name="position"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Dirtector, Manager, etc."
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Street Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                onChange={(event) => {
                  setFormData({ ...formData, address: event.target.value });
                }}
                value={formData.address}
                id="address"
                name="address"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Address"
              ></textarea>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="suburb"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Suburb
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, suburb: event.target.value });
                }}
                value={formData.suburb}
                id="suburb"
                name="suburb"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="suburb"
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="postcode"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Postcode
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, postcode: event.target.value });
                }}
                value={formData.postcode}
                id="postcode"
                name="postcode"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="postcode"
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              state
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, state: event.target.value });
                }}
                value={formData.state}
                id="state"
                name="state"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="state"
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="contactNo"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              contactNo
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, contactNo: event.target.value });
                }}
                value={formData.contactNo}
                id="contactNo"
                name="contactNo"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="contactNo"
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              emailAddress
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, emailAddress: event.target.value });
                }}
                value={formData.emailAddress}
                id="emailAddress"
                name="emailAddress"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="emailAddress"
              ></input>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="websiteURL"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              websiteURL
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, websiteURL: event.target.value });
                }}
                value={formData.websiteURL}
                id="websiteURL"
                name="websiteURL"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="websiteURL"
              ></input>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPosted}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCallNotes;
