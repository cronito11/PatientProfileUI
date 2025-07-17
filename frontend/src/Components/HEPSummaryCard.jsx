import { useEffect, useState } from "react";
import {usePatientContext} from "../Context/PatientContext"
function HEPSummaryCard({patientId, patientName, hep})
{
    const {editPatientHEP} = usePatientContext();
 
    //save HEP in a local variable
    const [hepSummary, setHepSummaryCard] = useState(hep);
    const [isEditing, setEditionState] = useState(false);

    //update llocal pariable in case that patient value change
    useEffect( () => {
        setHepSummaryCard(hep);
    }, [hep]
    );

    //When input change, local information change
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setHepSummaryCard((prev) => ({
        ...prev,
        [name]: value,
        }))
    }

    //Save data when user confirm
    const handleSave = (e) =>
    {
        e.preventDefault();
        editPatientHEP(patientId, hep.id, hepSummary);
        setEditionState(false);
    }

    const toogleEdition = () =>{
        setEditionState(!isEditing);
        if(!isEditing)
            setHepSummaryCard(hep);
    }
    return <div className="HEP-summary-card">
           <button className="HEP-summary-card-edit-btn call-to-action" type="button" onClick={toogleEdition}>
                    Edit HEP 
                </button>
            <form className="HEP-summary-card-form">
                <h2>New HEP for for {patientName} (#{hep.id})</h2>
                <label htmlFor="sessionsPerDay">Session/day:</label>
                <input
                type="text"
                name="sessionsPerDay"
                id="sessionsPerDay"
                value={hepSummary.sessionsPerDay}
                onChange={handleInputChange}
                disabled={!isEditing}
                />

                <label htmlFor="totalReps">Total reps:</label>
                <input
                type="text"
                name="totalReps"
                id="totalReps"
                value={hepSummary.totalReps}
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

export default HEPSummaryCard;