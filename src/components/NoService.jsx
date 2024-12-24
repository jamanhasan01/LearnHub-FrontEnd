import { FaSadCry } from "react-icons/fa";
const NoService = () => {
  return (
    <div className="flex justify-center items-center">
        <h3 className="text-4xl text-red-600 gap-3 flex items-center font-bold">No Service available <FaSadCry></FaSadCry></h3>
    </div>
  )
}

export default NoService