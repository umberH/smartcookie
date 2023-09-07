
// import React, { useState, useEffect } from 'react';
// import { app } from './firebase'; // Path to your firebase.js file

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from Firestore
//     const fetchData = async () => {
//       try {
//         const collectionRef = app.collection('my_collection');
//         const snapshot = await collectionRef.get();
//         const fetchedData = snapshot.docs.map(doc => doc.data());
//         setData(fetchedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{JSON.stringify(item)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import bg from './components/assets/bg.png';
// import Sidebar from './components/widgets/Sidebar';
import Home from './page/Home';
import Notes from './page/Notes';
import Signup from './page/Signup';
import Login from './page/Login';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/widgets/Navbar';
// import Layout from './components/widgets/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import NoteDetail from './page/NoteDetail';
import ProtectedRoute from './components/widgets/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/features/userSlice';
import NotFound from './page/NotFound';


function App() {

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);
  // const user = "asasa";
  // console.log(user);

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch])


  return (
    <Router>
      <div className="md:overflow-x-auto overflow-x-hidden bg-primary">
        <section>
          <div>
            <Routes>
              {/* <Route element={<ProtectedRoute user={user} />}> */}
                <Route
                  path="/home"
                  element={
                    < Home />
                  }
                />

                <Route
                  path="/notes/:id"
                  element={<NoteDetail />}
                />

                <Route
                  path="/notes"
                  element={
                    < Notes />
                  }
                />

              {/* </Route> */}

              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/" element={<Login />} />
              <Route path="*" element={< NotFound />} />
            </Routes>
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;

// // import { BiCalendar } from "react-icons/bi";
// // import { useEffect, useState, useCallback } from "react";
// // import React from 'react';
// // import { Formik, Field, Form, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import AddAppointment from "./components/AddAppointment";
// // import AppointmentInfo from "./components/AppointmentInfo";
// // import Search from "./components/Search";


// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }

// //   validationSchema() {
// //     return Yup.object().shape({
// //       fullname: Yup.string().required('Fullname is required'),
// //       username: Yup.string()
// //         .required('Username is required')
// //         .min(6, 'Username must be at least 6 characters')
// //         .max(20, 'Username must not exceed 20 characters'),
// //       email: Yup.string()
// //         .required('Email is required')
// //         .email('Email is invalid'),
// //       password: Yup.string()
// //         .required('Password is required')
// //         .min(6, 'Password must be at least 6 characters')
// //         .max(40, 'Password must not exceed 40 characters'),
// //       confirmPassword: Yup.string()
// //         .required('Confirm Password is required')
// //         .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
// //       acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
// //     });
// //   }

// //   handleSubmit(data) {
// //     console.log(JSON.stringify(data, null, 2));
// //   }
// //   render() {
// //     const initialValues = {
// //       fullname: '',
// //       username: '',
// //       email: '',
// //       password: '',
// //       confirmPassword: '',
// //       acceptTerms: false,
// //     };

// //     return (
// //       <div className="register-form">
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={this.validationSchema}
// //           onSubmit={this.handleSubmit}
// //         >
// //           {({ errors, touched, resetForm }) => (
// //             <Form>
// //               <div className="form-group">
// //                 <label>Full Name</label>
// //                 <Field
// //                   name="fullname"
// //                   type="text"
// //                   className={
// //                     'form-control' +
// //                     (errors.fullname && touched.fullname ? ' is-invalid' : '')
// //                   }
// //                 />
// //                 <ErrorMessage
// //                   name="fullname"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label htmlFor="username"> Username </label>
// //                 <Field
// //                   name="username"
// //                   type="text"
// //                   className={
// //                     'form-control' +
// //                     (errors.username && touched.username ? ' is-invalid' : '')
// //                   }
// //                 />
// //                 <ErrorMessage
// //                   name="username"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label htmlFor="email"> Email </label>
// //                 <Field
// //                   name="email"
// //                   type="email"
// //                   className={
// //                     'form-control' +
// //                     (errors.email && touched.email ? ' is-invalid' : '')
// //                   }
// //                 />
// //                 <ErrorMessage
// //                   name="email"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label htmlFor="password"> Password </label>
// //                 <Field
// //                   name="password"
// //                   type="password"
// //                   className={
// //                     'form-control' +
// //                     (errors.password && touched.password ? ' is-invalid' : '')
// //                   }
// //                 />
// //                 <ErrorMessage
// //                   name="password"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <label htmlFor="confirmPassword"> Confirm Password </label>
// //                 <Field
// //                   name="confirmPassword"
// //                   type="password"
// //                   className={
// //                     'form-control' +
// //                     (errors.confirmPassword && touched.confirmPassword
// //                       ? ' is-invalid'
// //                       : '')
// //                   }
// //                 />
// //                 <ErrorMessage
// //                   name="confirmPassword"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group form-check">
// //                 <Field
// //                   name="acceptTerms"
// //                   type="checkbox"
// //                   className={
// //                     'form-check-input' +
// //                     (errors.acceptTerms && touched.acceptTerms
// //                       ? ' is-invalid'
// //                       : '')
// //                   }
// //                 />
// //                 <label htmlFor="acceptTerms" className="form-check-label">
// //                   I have read and agree to the Terms
// //                 </label>
// //                 <ErrorMessage
// //                   name="acceptTerms"
// //                   component="div"
// //                   className="invalid-feedback"
// //                 />
// //               </div>

// //               <div className="form-group">
// //                 <button type="submit" className="btn btn-primary">
// //                   Register
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={resetForm}
// //                   className="btn btn-warning float-right"
// //                 >
// //                   Reset
// //                 </button>
// //               </div>
// //             </Form>
// //           )}
// //         </Formik>
// //       </div>
// //     );
// //   }
// // }
// // // function App() {
// // //   let [appointmentList, setAppointmentList] = useState([]);
// // //   let [query, setQuery] = useState("");
// // //   let [sortBy, setSortBy] = useState("petName");
// // //   let [orderBy, setOrderBy] = useState("asc");

// // //   const filteredAppointment = appointmentList
// // //     .filter((item) => {
// // //       return (
// // //         item.petName.toLowerCase().includes(query.toLowerCase()) ||
// // //         item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
// // //         item.aptNotes.toLowerCase().includes(query.toLowerCase())
// // //       );
// // //     })
// // //     .sort((a, b) => {
// // //       let order = orderBy === "asc" ? 1 : -1;
// // //       return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
// // //         ? -1 * order
// // //         : 1 * order;
// // //     });

// // //   const fetchData = useCallback(() => {
// // //     fetch("./data.json")
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         setAppointmentList(data);
// // //       })
// // //       .catch((err) => {
// // //         console.log(err);
// // //       });
// // //   }, []);

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, [fetchData]);

// // //   return (
// // //     <>
// // //       <div className="App container mx-auto mt-3 font-thin">
// // //         <h1 className="text-5xl mb-4">
// // //           <BiCalendar className="inline-block text-red-400 align-top" />
// // //           Your Appointments
// // //         </h1>
// // //         <AddAppointment
// // //           onSendAppointment={(appointment) => {
// // //             setAppointmentList([...appointmentList, appointment]);
// // //           }}
// // //           lastId={appointmentList.reduce(
// // //             (pre, curr) => (Number(curr.id) > pre ? Number(curr.id) : pre),
// // //             0
// // //           )}
// // //         />
// // //         <Search
// // //           query={query}
// // //           onQueryChange={(event) => {
// // //             setQuery(event.target.value);
// // //           }}
// // //           orderBy={orderBy}
// // //           onOrderByChange={(val) => {
// // //             setOrderBy(val);
// // //           }}
// // //           sortBy={sortBy}
// // //           onSortBYChange={(val) => {
// // //             setSortBy(val);
// // //           }}
// // //         />
// // //         <ul className="divide-y divide-gray-200">
// // //           {filteredAppointment.map((appointment) => {
// // //             return (
// // //               <AppointmentInfo
// // //                 onDeleteAppointment={(appointmentId) => {
// // //                   setAppointmentList(
// // //                     appointmentList.filter(
// // //                       (appointment) => appointmentId !== appointment.id
// // //                     )
// // //                   );
// // //                 }}
// // //                 appointment={appointment}
// // //                 key={appointment.id}
// // //               />
// // //             );
// // //           })}
// // //         </ul>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // export default App;
