import React from 'react'

const ProfileCard = ({user}) => {
    return (
     <>
     <div className="relative flex flex-col min-w-0 break-words bg-blue-900 w-1/6 mb-6 shadow-xl   rounded-lg my-10 mx-10">
       <div className="px-2">
         <div className="flex flex-wrap justify-center">
           <div className="w-full px-4 flex justify-center">
             <div className="relative">
             <img src={user.name.length > 12 ? "./logo13.png": "./logo12.png"} alt="alt" width="129px" className="shadow-xl rounded-full h-auto align-middle border-none mb-12"/>
             </div>
           </div>
           <div className="text-m font-semibold leading-normal mb-2 text-white mb-2">
              {user.name}
           </div>
         </div>
         <hr />
         <div className="text-center mt-4">
         <i class="fas fa-envelope mr-2 text-lg text-gray-400"></i>  <span className="text-xl font-semibold leading-normal mb-2 text-gray-500 mb-2">   {user.email.length > 12 ? "user@l.c":user.email}</span>
           <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
           <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-400" />  <adress>  {user.address.street}    {" "}
             {user.address.suite}    {" "}
                 {user.address.city}    {" "} 
             {user.address.zipcode}</adress> 
           </div>
           <div className="text-sm leading-normal mt-0 mb-2 text-indigo-400 font-bold uppercase">
           <i class="fas fa-phone mr-2 text-sm text-gray-400"></i>      {user.phone} <br />
         
           </div>
         </div>

       </div>
     </div>
     </>
    )
}

export default ProfileCard
