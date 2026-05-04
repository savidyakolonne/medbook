import doctorFindSectionBanner from "../assets/dcotorsbookingsectionbanner.png" ; 

const FindDoctorSection = () => {
    return(
        <div className=" bg-[#F8F8F8] rounded-2xl p-6">
            <div 
                className="bg-[#F8F8F8] rounded-2xl bg-cover bg-center bg-no-repeat min-h-[300px]" 
                style={{ backgroundImage: `url(${doctorFindSectionBanner})` }}
            >
                <div className="flex justify-center py-5">
                    <h1 className="text-5xl text-[#F8F8F8]">Find and Book the Right Doctor</h1>
                </div>

                <div className="flex justify-center py-10">
                    <div className="flex border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-2xl overflow-hidden max-w-md w-full justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
                        </svg>
                        <input type="text" className="w-full h-full outline-none text-sm text-gray-500" placeholder="search for doctors, specialists" />
                        <button type="submit" className="bg-indigo-500 w-32 h-9 rounded-2xl text-sm text-white mr-[5px] cursor-pointer">Search</button>
                    </div>
                </div>

                <div className="text-[#F8F8F8] flex justify-center items-center ">
                    <h2>Search by specialty, doctor name, or location to schedule your next appointment
                    seamlessly.
                    </h2>
                </div>
            </div>

            <div className="flex gap-5 px-10">
                <div>
                    doctor1
                </div>
                <div>
                    doctor1
                </div>
            </div>
        
        </div>
    )
}

export default FindDoctorSection ; 