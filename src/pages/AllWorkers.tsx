// import React from 'react'

import { useEffect, useState } from "react";
import { url } from "../utils/Api";
import axios from "axios";
import { iWorker } from "../types/interface";

const AllWorkers = () => {


    const [users, setUsers] = useState<iWorker[]>([]);

    // get all workers
    useEffect(() => {
    async function fetchUsers() {
        try {
        const getAllWorkers = await axios.get(`${url}/worker/allregisteredworker`); 
        setUsers(getAllWorkers.data.data);
        
        //   console.log(getAllWorkers.data.data)
        } catch (error) {
        console.error('Error fetching users:', error);
        }  
    }

    fetchUsers()
    }, []);


  return (
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPi bg-purple-500 bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">
        <div className="w-[90%] md:w-[70%] lg:w-[75%]  rounded-md z-3 p-[20px] py-[30px] mt-[80px] mb-[30px] flex flex-col  gap-4">

            <input type="text" className="w-full h-[40px] rounded p-2 outline-none text-[13px]" placeholder="Search Worker's Name" />

            <div className="flex flex-wrap w-full gap-4 justify-center">
                {users.map((user) => (
                    <div key={user?._id} className="bg-white w-[290px] p-3 rounded text-[10px] shadow-md">
                        <h5>Name: <span className="font-semibold text-[12px]">{user?.firstName}</span></h5>
                        <h5>Surname: <span className="font-semibold text-[12px]">{user?.surname}</span></h5>
                        <h5>Email: <span className="font-semibold text-[12px]">{user?.email}</span></h5>
                        <h5>Phone Number: <span className="font-semibold text-[12px]">{user?.phoneNumber}</span></h5>
                        <h5>Department-in-Church: <span className="font-semibold text-[12px]">{user?.departmentInChurch}</span></h5>
                        <h5>Marital Status: <span className="font-semibold text-[12px]">{user?.maritalStatus}</span></h5>
                        <h5>Date-of-Birth: <span className="font-semibold text-[12px]">{user?.dateOfBirth}</span></h5>
                        <h5>Educational Qualification: <span className="font-semibold text-[12px]">{user?.educationalQualification}</span></h5>
                        <h5>Emergency Contact Name: <span className="font-semibold text-[12px]">{user?.emergencyContactName}</span></h5>
                        <h5>Emergency Contact Relationship: <span className="font-semibold text-[12px]">{user?.emergencyContactRelationship}</span></h5>
                        <h5>Emergency Contact Number: <span className="font-semibold text-[12px]">{user?.emergencyContactNumber}</span></h5>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default AllWorkers