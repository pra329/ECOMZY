import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item Removed Succesfully")
  }
  return (
    <div className="flex justify-center items-center flex-col   border-gray-400 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl sm:flex-row">
      <div className="w-full sm:w-1/4">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full sm:w-3/4 ml-0 sm:ml-4">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate">
          {item.title}
        </h1>
        <h1 className="text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>
        <div className="flex justify-between gap-4 items-center w-full mt-2">
          <div>
            <p className="text-green-600 font-semibold">${item.price}</p>
          </div>
          <div className="flex items-center mt-2">
            <button
              onClick={removeFromCart}
              className="text-sm text-white font-semibold bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in cursor-pointer"
            >
              <FcDeleteDatabase className="inline-block mr-2 text-gray-500 hover:text-red-600 transition duration-300 ease-in cursor-pointer" />

              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
