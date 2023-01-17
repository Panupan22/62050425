import React, { useEffect, useState } from "react";

const Homes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [covidData, setCovidData] = useState([]);
  const [covidDataFilter, setCovidDataFilter] = useState([]);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);

    const filterList = covidData.filter((list) => {
      return list.province.includes(event.target.value);
    });

    console.log(filterList);
    setCovidDataFilter(filterList);
  };

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setCovidData(data);
    setCovidDataFilter(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <input
        onChange={onInputChange}
        value={searchTerm}
        className="search-input"
      />

      <table className="main-table">
        <thead>
          <tr>
            <td>ชื่อ</td>
            <td>เพศ</td>
            <td>อายุ</td>
            <td>BMI</td>
            <td>Email</td>
            <td>เบอร์</td>
            <td>ที่อยู่</td>
          </tr>
        </thead>
        <tbody>
          {covidDataFilter.map((users) => {
            return (
              <tr>
                <td>{users.firstName}</td>
                <td>{users.gender}</td>
                <td>{users.age}</td>
                <td>BMI</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.address.city.postalCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // return (
  //   <div>
  //     <input
  //       onChange={onInputChange}
  //       value={searchTerm}
  //       className="search-input"
  //     />

  //     <table className="main-table">
  //       <thead>
  //         <tr>
  //           <td>ชื่อ</td>
  //           <td>เพศ</td>
  //           <td>อายุ</td>
  //           <td>BMI</td>
  //           <td>Email</td>
  //           <td>เบอร์</td>
  //           <td>ที่อยู่</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {covidData.map((users) => {
  //           return (
  //             <tr>
  //               <td>{users.firstName}</td>
  //               <td>{users.gender}</td>
  //               <td>{users.age}</td>
  //               <td>BMI</td>
  //               <td>{users.email}</td>
  //               <td>{users.phone}</td>
  //               <td>{users.address.city.postalCode}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

export default Homes;
