
const BookedServie = ({booked}) => {
  let {UserDate,photoUrl,price,name,ServiceStatus,auther_photo,auther_name}=booked
  return (
    <div className="flex flex-col gap-2 p-5 border border-gray-200 rounded-xl">
      <img src={photoUrl} alt={name} />
      <div className="flex justify-between"><h3 className="text-2xl font-bold"> {name}</h3><h4 className="font-semibold">{ServiceStatus}</h4></div>
     
      <div className="flex flex-wrap justify-between items-center">
      <div className="felx flex-col">
      <h4 className="text-gray-700 font-semibold mb-2">{UserDate}</h4>

      <div className="flex items-center gap-2">
        
        <img className="w-8 rounded-badge" src={auther_photo} alt={auther_name} />
        <p className="text-base font-semibold text-gray-600">{auther_name}</p>
      </div>
     
      </div>
       <h4 className="text-2xl font-semibold">{price} Tk</h4>
      </div>
    
    
      
    </div>
  )
}

export default BookedServie