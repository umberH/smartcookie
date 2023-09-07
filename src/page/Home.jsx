import React, { useState, useEffect, useRef ,useCallback } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import Time from '../components/widgets/Time';
import Settings from '../components/widgets/Settings';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../store/features/userSlice';
import { notesFetch } from '../store/features/noteSlice';
import { useNavigate } from 'react-router-dom';
import Pomodoro from '../components/widgets/Pomodoro';
import { getAllUserNotes } from '../store/features/noteSlice';
import Search from "../components/Search";
import CustomerInfo from "../components/CustomerInfo";
import AddCustomer from "../components/AddCustomer";
import { BiCalendar } from "react-icons/bi";
import axios from "axios";
import ReactPaginate from 'react-paginate';
//import Paginate from '../components/Paginate';

const Home = () => {

    let [customerList, setCustomerList] = useState([]);
    let [query, setQuery] = useState("");
    let [sortBy, setSortBy] = useState("petName");
    let [orderBy, setOrderBy] = useState("asc");
    // for pagination
    //const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 5

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //const subset = customerList.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    
    // useEffect(() => {
    //     db.collection("customersData").onSnapshot((snapshot) => {
    //         setCustomersData(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         );
    //     });
    //     console.log({ customersData });
    // }, []);
 
    // const submit = (e) => {
    //     e.preventDefault();
    //     db.collection("customersData").add({
    //         name: customerName,
    //         password: customerPassword,
    //     });
 
    //     setCustomerName("");
    //     setCustomerPassword("");
    // };
   const filteredCustomer = customerList
     .filter((item) => {
       return (
         item.petName.toLowerCase().includes(query.toLowerCase()) ||
         item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
          item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
        //  item.postCode.toLowerCase().includes(query.toLowerCase())
       );
   })
     .sort((a, b) => {
       let order = orderBy === "asc" ? 1 : -1;
       return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
         ? -1 * order
        : 1 * order;
     });

     const subset = filteredCustomer.slice(startIndex, endIndex);

   const fetchData = useCallback(() => {
   fetch("data.json")
       .then((response) => response.json())
       .then((data) => {
        console.log(data)
         setCustomerList(data);
        console.log("items_per_page",itemsPerPage)
         setTotalPages(Math.ceil(customerList.length/itemsPerPage))
         console.log(customerList.length)
         console.log(totalPages)
       })
       .catch((err) => {
         console.log(err);
       });
  }, []);

  useEffect(() => {
    fetchData();
    //console.log(fetchData())
  }, [fetchData]);
    // const user = useSelector((state) => state.user.value);
    // const { value, status } = useSelector((state) => state.note);
    
    // const dispatch = useDispatch();

    
    const navigate = useNavigate();

    useEffect(() => {      

        const intervalID = setInterval(() => {
            console.log("yes")
        }, 1000)

        return () => clearInterval(intervalID);
    }, [])

    // useEffect(() => {
    //     dispatch(getCurrentUser());
    // }, [dispatch])
    // console.log("user here: ", user.uid);

    // useEffect(() => {
    //     dispatch(notesFetch(user.uid))
    // }, [dispatch, user.uid])


    return (
        // <div> hello</div>
        // <section className="text-white pt-10 pb-24 px-3  md:pt-10 md:pb-20">
            
            <section className="grid grid-cols-1 space-y-6 md:space-y-0 md:gap-4">
                {/* <Pomodoro /> */}

                {/* notes */}
                <Card className="py-4 col-span-2">
                    <div className="flex justify-between">
                        {/* <Text className="text-lg font-semibold mb-10">
                            Customers
                        </Text>

                        

                        <div
                            className="text-2xl cursor-pointer"
                            onClick={() => navigate("/notes")}
                        >
                            +
                        </div> */}
                        <h1 className="text-5xl mb-4">
          <BiCalendar className="inline-block text-red-400 align-top" />
           Your Customers
        </h1>
         <AddCustomer
           onSendCustomer={(customer) => {
             setCustomerList([...customerList, customer]);
           }}
           lastId={customerList.reduce(
             (pre, curr) => (Number(curr.id) > pre ? Number(curr.id) : pre),
             0
          )}
         />
                       
                    </div>
                    <div> <Search
                        query={query}
                        onQueryChange={(event) => {
                            setQuery(event.target.value);
                        }}
                        orderBy={orderBy}
                        onOrderByChange={(val) => {
                            setOrderBy(val);
                        }}
                        sortBy={sortBy}
                        onSortBYChange={(val) => {
                            setSortBy(val);
                        }}
                    />
                    </div>

                    <section className="flex justify-center items-center text-center">
                        <div>
                            <Text className="font-bold text-2xl">
                                List of the Customers
                            </Text>

                            <Text className="pt-2 pb-6 text-sm">
                                You can search the existing customers and add new customers.
                            </Text>

                            {/* <Button
                                onClick={() => navigate("/notes")}
                                className="bg-secondary text-white px-6 py-2"
                            >
                                Add note
                            </Button> */}
                        </div>
                        </section>
                        <section className="flex justify-center items-center text-center">
                        <div>
                            
                        
      {subset.map((customer) => { 
                            return (
                            <CustomerInfo
                                onDeleteCustomer={(customerId) => {
                                setCustomerList(
                                    customerList.filter(
                                    (customer) => customerId !== customer.id
                                    )
                                );
                                }}
                                customer={customer}
                                key={customer.id}
                            />
                            );
                        })}  
                        <ReactPaginate
                            onPageChange={handlePageChange}
                            pageCount={totalPages}
                            previousLabel={'<<'}
                            nextLabel={'>>'}
                            containerClassName={'pagination-container'}
                            pageLinkClassName={'page-number'}
                            previousLinkClassName={'page-number'}
                            nextLinkClassName={'page-number'}
                            activeLinkClassName={'active'}
               />
                        
                        </div>
                    </section>

                    <div className='mt-20'>
                    
                        {/* <div className='grid grid-container gap-x-4 gap-y-6 w-full'>
                            {
                                value.slice(0, 4).map((note) => (
                                    <div className='relative todo-weekly rounded-lg shadow-md' key={note.id}>
                                        <Text style={{ fontSize: "10px" }} className='text-right px-2'>
                                            {note.dateCreated}
                                        </Text>
                                        <div className='pt-2 border-b border-sidebar'></div>

                                        {note.notes.length >= 257 ? <div
                                            style={{ wordWrap: "break-word" }} className='p-2 text-xs'
                                            dangerouslySetInnerHTML={{ __html: note.notes.substring(0, 257) + " . . ." }}
                                        /> : <div
                                            style={{ wordWrap: "break-word" }} className='p-2 text-xs'
                                            dangerouslySetInnerHTML={{ __html: note.notes }}
                                        />}

                                        <div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div> */}
                    </div>

                </Card>
            </section>

        //  </section>
    )
}

export default Home


