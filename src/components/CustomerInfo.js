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
            {customer.petName}
          </span>
          <span className="flex-grow text-right">{customer.aptDate}</span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Owner:</b>{" "}
          {customer.ownerName}
        </div>
        <div className="leading-tight">{customer.aptNotes}</div>
        
       
      </div>
      {/* <div> <BiBookBookmark /></div> */}
      
    </li>
  );
};

export default CustomerInfo;
