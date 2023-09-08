import { BiTrash,BiBookBookmark } from "react-icons/bi";

const CustomerInfo = ({ customer, onDeleteCustomer, OnContactDetailsCustomer }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        type="button"
        onClick={() => {
          onDeleteCustomer(customer.id);
        }}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiTrash />
      </button>
      <button
        type="button"
        onClick={() => {
          OnContactDetailsCustomer(customer.id);
        }}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <BiBookBookmark />
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {customer.companyName}
          </span>
          <span className="flex-grow text-right">{customer.address}</span>{" "}
          <span className="flex-grow text-right">{customer.suburb}</span>{" "}
          <span className="flex-grow text-right">{customer.postcode}</span>{" "}
        </div>
        <div>
          <b className="font-bold text-blue-500">ContactPerson:</b>{" "}
          {customer.contactPerson}
          {" "}
          {customer.position}
        </div>
        <div>
          <b className="font-bold text-blue-500">Contact Details:</b>{" "}
          <span className="flex-grow text-right">{customer.contactNo}</span>{"  "}
          </div>
          <div>
          <b className="font-bold text-blue-500">Email:</b>{" "}
          {customer.emailAddress}{"  "}
          </div> <div>
          <b className="font-bold text-blue-500">Website:</b>{" "}
          {customer.wesiteURL}
        </div>
        {/* <div className="leading-tight">{customer.position}</div>
        <div className="leading-tight">{customer.address}</div> */}
        
      </div>
    </li>
  );
};

export default CustomerInfo;
