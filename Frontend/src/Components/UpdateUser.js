// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
    

  

    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [add1,setAdd1] = useState("");
    const [add2,setAdd2] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");
    const [zipcode,setZipcode] = useState("");
    const navigate = useNavigate();
    const params = useParams();

useEffect(() => {
  getUser();
  },[]);

  const getUser = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/api/user/${params.id}`);
    result = await result.json()
    setFirstName(result.FirstName)
    setLastName(result.LastName)
    setEmail(result.email)
    setMobile(result.mobile)
    setAdd1(result.add1)
    setAdd2(result.add2)
    setCity(result.city)
    setState(result.state)
    setCountry(result.country)
    setZipcode(result.zipcode)
    
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = { FirstName,LastName,email,mobile,add1,add2,city,state,country,zipcode}
    let result = await fetch(`http://localhost:5000/api/user/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/")
   
  
  };


    
  return (
    <div className="">
      <form onSubmit={handleUpdate}>
        <div className="space-y-12 ml-[100px] ">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
             
             {/* f start */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                  id="fname"
                  name='FirstName' onChange={(e)=>setFirstName(e.target.value)} value={FirstName}
                    type="text"
                    className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* fEnd */}

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                  value={LastName}
                  name='LastName' onChange={(e)=>setLastName(e.target.value)}
                    type="text"
                    className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  value={email}
                  name='email' onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    className="block w-[500px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2 flex">
                
                  <input
                  value={mobile}
                  name='mobile'onChange={(e)=>setMobile(e.target.value)}
                    type="number"
                    className="block w-[500px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Street address 1
                </label>
                <div className="mt-2">
                  <input
                  value={add1}
                  name='add1'onChange={(e)=>setAdd1(e.target.value)}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Street address 2
                </label>
                <div className="mt-2">
                  <input
                  value={add2}
                  name='add2' onChange={(e)=>setAdd2(e.target.value)}
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input 
                  value={city}
                  name='city' onChange={(e)=>setCity(e.target.value)}
                    type="text"
                    className="w-[200px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <select value={state} name='state' onChange={(e)=>setState(e.target.value)}>
                  <option>Select State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattishgarh</option>
                    <option>Goa</option>
                    <option>Gujrat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mijoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamilnadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttrakhand</option>
                    <option>West Bengal</option>
                  </select>
                  
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select value={country} name='country' onChange={(e)=>setCountry(e.target.value)}>
                  <option>Select Country</option>
                  <option>India</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                  value={zipcode}
                  name='zipcode' onChange={(e)=>setZipcode(e.target.value)}
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
<br/><br/>

              <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
