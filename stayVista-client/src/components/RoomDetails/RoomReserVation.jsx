import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";


const RoomReserVation = ({ room }) => {
    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key:'selection'
    })
    // price calculation  
    const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split('')[0])
    
    
    // total price calculation 
    const totalPrice = totalDays * room?.price
    console.log(totalPrice)

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}</div>
                <div className="font-light text-neutral-500">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender value={value}></Calender>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 font-semibold text-lg flex justify-between items-center">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>

        </div>
    );
};

export default RoomReserVation;