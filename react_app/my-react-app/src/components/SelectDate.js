import { useState } from "react";
import AvailableCenter from "./AvailableCenter";

const SelectDate = () => {
    const [selectedDate,setSelectedDate] = useState('');
    const [availableCenter, setAvailableCenter] = useState([]);
    const url= 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=725&date=';
    
    const searchFacility = () => {
        var today = new Date(selectedDate);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;

        fetch(url + today).then(
            response => response.json()).then(data => {
                setAvailableCenter(data.sessions);
            }).catch();
    }
    const selectedDateHandler = (e) => {
        setSelectedDate(e.target.value);
    };
    return(<>
    <input type="date" value={selectedDate} onChange={selectedDateHandler} />
    <button onClick={searchFacility}>Search</button>
    {availableCenter.length > 0 && <AvailableCenter centers={availableCenter}/>}
    </>);
}

export default SelectDate;