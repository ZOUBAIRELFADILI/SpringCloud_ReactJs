import React, { useEffect, useState } from 'react';
import axios_client from './host-app';

export default function Students() {
    const [listStudent, setListStudent] = useState([]);

    const getAllStudents = () => {
        axios_client.get('/api/etudiant/etudiants')
            .then((response) => {
                setListStudent(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    };

    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Liste des Étudiants</h2>
            <table className="table table-bordered table-striped mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date de Naissance</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>ID Filière</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent.length > 0 ? (
                        listStudent.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.nom}</td>
                                <td>{student.prenom}</td>
                                <td>{student.dateNaissance}</td>
                                <td>{student.email}</td>
                                <td>{student.telephone}</td>
                                <td>{student.idFiliere}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No Data Available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
