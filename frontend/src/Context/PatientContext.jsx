import { createContext, useState, useContext, useEffect } from "react";

const PatientContext = createContext();
const dummyPatients = [
    {
        id: "1",
        name: "Alice Smith",
        infoCard:
        {
            phone: "555-1234",
            email: "alice@example.com",
            injuryLocation: "Knee",
            diagnosis: "ACL Tear",
        },
        stats: {
            weeksEnrolled: 6,
            compliance: "90%",
        },
        heps: [
        {
            id: "1",
            sessionsPerDay: 2,
            totalReps: 50
        }
        ]
    },
    {
         id: "2",
        name: "Bob Johnson",
        infoCard:
        {
            phone: "555-5678",
            email: "bob@example.com",
            injuryLocation: "Shoulder",
            diagnosis: "Rotator Cuff",
        },
        stats:
        {
            weeksEnrolled: 3,
            compliance: "75%",
        },
        heps: [
        {
            id: "1",
            sessionsPerDay: 1,
            totalReps: 30
        }
        ]
}];

export const usePatientContext = () => useContext(PatientContext)

export const PatientProvider = ({children}) => {
    const [patients, setPatients] = useState([])
    
    useEffect(() => {
        const storePatients = localStorage.getItem("patients")
        
        setPatients(storePatients ? storePatients : dummyPatients)
    }, [])

    useEffect(() => {
        localStorage.setItem('patients', patients)
    }, [patients])

    const addPatient = (patient) => {
        setPatients(prev => [...prev, patient])
    }

    const isPatient = (patientId) => {
        return patients.some(patient => patient.id === patientId)
    }

    const editPatientCardInfo = (patientId, cardInfo) => {
         setPatients(prev =>
        prev.map(patient =>
            patient.id === patientId
                ? { ...patient, infoCard: { ...patient.infoCard, ...cardInfo } }
                : patient
        )
    );
    };

    const editPatientHEP = (patientID, hepId, hepData) => {
        setPatients(prev => prev.map(patient => patient.id === patientID ?
            {...patient, heps: patient.heps.map(
                (hep) =>
                    hep.id === hepId ? {...hep, ...hepData}: hep
            )} 
            :patient
        ));
    }

    const value = {
        patients,
        addPatient,
        isPatient,
        editPatientCardInfo,
        editPatientHEP,
    }
return <PatientContext.Provider value = {value}>
    {children}
    </PatientContext.Provider>
}