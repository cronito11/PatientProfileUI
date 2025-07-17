import { useEffect, useState } from "react";
import {usePatientContext} from "../Context/PatientContext"
import { FiEdit } from 'react-icons/fi';
import "../css/InfoCard.css"

function InfoCard({patient})
{
    const {editPatientCardInfo} = usePatientContext();
 
    //save patient info in a local variable
    const [patientInfo, setPatientInfoCard] = useState(patient.infoCard);
    const [isEditing, setEditionState] = useState(false);

    //update llocal pariable in case that patient value change
    useEffect( () => {
        setPatientInfoCard(patient.infoCard);
    }, [patient]
    );

    //When input change, local information change
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setPatientInfoCard((prev) => ({
        ...prev,
        [name]: value,
        }))
    }

    //Save data when user confirm
    const handleSave = (e) =>
    {
        e.preventDefault();
        editPatientCardInfo(patient.id, patientInfo);
        setEditionState(false);
    }

    const toogleEdition = () =>{
        setEditionState(!isEditing);
        if(!isEditing)
            setPatientInfoCard(patient.infoCard);
    }
    return <div className="info-card">
           <button className="info-card-edit-btn" type="button" onClick={toogleEdition}>
                   <FiEdit size={32}/>
                </button>
            <form className="info-card-form">
                <label htmlFor="Phone">Phone:</label>
                <input 
                    type="text"
                    name="phone"
                    id="phone"
                    value={patientInfo.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                name="email"
                id="email"
                value={patientInfo.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                />

                <label htmlFor="injuryLocation">Injury Location:</label>
                <input
                type="text"
                name="injuryLocation"
                id="injuryLocation"
                value={patientInfo.injuryLocation}
                onChange={handleInputChange}
                disabled={!isEditing}
                />

                <label htmlFor="diagnosis">Diagnosis:</label>
                <input
                type="text"
                name="diagnosis"
                id="diagnosis"
                value={patientInfo.diagnosis}
                onChange={handleInputChange}
                disabled={!isEditing}
                />
                 { isEditing && (
                <button className="info-card-save-btn" type="submit" onClick={handleSave}>
                    Save Changes
                </button>
                )}
               
            </form>
        </div>
}

export default InfoCard;