import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";


const AddRoom = () => {
    const[dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection,'
    })

    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value;
        const guest = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0]
       

    }

    // handle date change from react-date-range calender
    const handleDates = ranges =>{
        setDates(ranges.selection)
    }
    return (
        <div>
            <Helmet>
                <title>Add Room | DashBoard</title>
            </Helmet>

            {/* form */}
            <AddRoomForm
             handleSubmit={handleSubmit} 
             handleDates={handleDates} 
             dates={dates}></AddRoomForm>

        </div>
    );
};

export default AddRoom;