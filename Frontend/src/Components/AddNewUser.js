import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { Country } from "country-state-city";
import countryAllData from "country-all-data";

export default function AddNewUser() {
  const [countriesArr, setCountriesArr] = useState([]);
  const [statesArr, setStatesArr] = useState([]);

  countryAllData
    .getAllCountries()
    .catch((err) => {
      console.log(`Error received: `, err.message);
    })
    .then((data) => {
      console.log(data);
      setCountriesArr(data.countries);
    });
  const navigate = useNavigate();

  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    email: "",
     mobile: "",
    add1: "",
    add2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    country: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user", values)
      .then((res) => setValues(res.values));
    navigate("/");
    console.log(values);
  };

  const saveCountry = (e) => {
    setValues({ ...values, country: e.target.value });
    console.log(e.target.value);
    setStatesArr(
      countriesArr.find((country) => country?.country === e.target.value).states
    );
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="ml-[100px] space-y-12 ">
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
                    required
                    minLength={5}
                    id="fname"
                    name="FirstName"
                    onChange={(e) =>
                      setValues({ ...values, FirstName: e.target.value })
                    }
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
                    required
                    minLength={5}
                    name="LastName"
                    onChange={(e) =>
                      setValues({ ...values, LastName: e.target.value })
                    }
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
                    required
                    name="email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
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
                  <PhoneInput
                  className="w-[100px]"
                    placeholder="Enter phone number"
                    value={values.mobile}
                    defaultCountry="IN"
                    onChange={(e) => setValues({ ...values, mobile: e })}
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
                    required
                    name="add1"
                    onChange={(e) =>
                      setValues({ ...values, add1: e.target.value })
                    }
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
                    name="add2"
                    onChange={(e) =>
                      setValues({ ...values, add2: e.target.value })
                    }
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
                    name="city"
                    onChange={(e) =>
                      setValues({ ...values, city: e.target.value })
                    }
                    type="text"
                    className="block w-[200px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                  <select name="country" onChange={saveCountry}>
                    {countriesArr.map((country) => {
                      return <option>{country?.country}</option>;
                    })}
                  </select>
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
                  <select
                    name="state"
                    onChange={(e) =>
                      setValues({ ...values, state: e.target.value })
                    }
                  >
                    <option>Select State</option>

                    {statesArr.map((state) => {
                      return <option>{state}</option>;
                    })}
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
                    name="zipcode"
                    onChange={(e) =>
                      setValues({ ...values, zipcode: e.target.value })
                    }
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br />
              <br />
              <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-bold text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
