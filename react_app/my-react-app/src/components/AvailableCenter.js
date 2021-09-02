import { useState } from "react";

const AvailableCenter = (props) => {
    const [selectedAge,setSelectedAge] = useState();
    const selectedAgeHandler = (e) => {
        setSelectedAge(e.target.value);
        if(selectedAge ==='above 18')
        props.centers.filter((item) => item.min_age_limit === '18');
        
    }
    return <>
    <div>
        <label>Select Age limit</label>
        <input type="radio" name="age_limit" checked={selectedAge ==='above 18'} value="above 18" onChange={selectedAgeHandler}/>Greater than 18 and less than 45
        <input type="radio" name="age_limit" checked={selectedAge === 'above 45'} value="above 45" onChange={selectedAgeHandler}/>45 and above
    </div>
    <table>
        <thead>
            <tr>
                <td>Name</td><td>Address</td><td>Fees</td><td>Capacity</td><td>Age Limit</td>
                </tr>
        </thead>
        <tbody>
        {props.centers.map(center => <tr key={`${center.center_id} + ${center.name}`}>
            <td>{center.name}</td>
            <td>{center.address}</td>
            <td>{center.fee_type}</td>
            <td>{center.available_capacity}</td>
            <td>{center.min_age_limit}</td>
            </tr>)}
        </tbody>
    </table>
    </>;
}

export default AvailableCenter;