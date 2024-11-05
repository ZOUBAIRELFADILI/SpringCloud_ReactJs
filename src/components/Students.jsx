import React, { useEffect, useState } from 'react';
import axios_client from './host-app';

export default function Students() {
    const [listStudent, setListStudent] = useState([]);

    const getAllStudents = () => {
        axios_client.get('/api/etudiant/etudiants')
            .then((rep) => {
                console.log(rep.data); // Store data in state
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
                    {listStudent.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.nom}</td>
                            <td>{student.prenom}</td>
                            <td>{student.dateNaissance}</td>
                            <td>{student.email}</td>
                            <td>{student.telephone}</td>
                            <td>{student.idFiliere}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
