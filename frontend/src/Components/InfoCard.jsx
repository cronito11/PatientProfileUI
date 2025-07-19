import { useEffect, useState } from "react";
import {usePatientContext} from "../Context/PatientContext"
import "../css/InfoCard.css"
import EditIcon from "../assets/Images/edit.png";

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
    <button className="info-card-edit-btn squareBtn" type="button" onClick={toogleEdition}>
                   <img src={EditIcon} alt="Edit" className="edit-icon"/>
                </button>
            <form className="info-card-form">
                <div className="form-input-section-left">
                    <label htmlFor="Phone">Phone:</label>
                    <input 
                        type="text"
                        name="phone"
                        id="phone"
                        value={patientInfo.phone}
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

                </div>
                <div className="form-input-section-right">

                <label htmlFor="email">Email:</label>
                <input
                type="email"
                name="email"
                id="email"
                value={patientInfo.email}
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

                </div>
                 { isEditing && (
                <button className="info-card-save-btn" type="submit" onClick={handleSave}>
                    Save Changes
                </button>
                )}
               
            </form>
            
        </div>
}

export default InfoCard;