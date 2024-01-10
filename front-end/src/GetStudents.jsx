import {useEffect, useState} from "react";

const GetStudents = () => {
    const [students, setStudents] = useState([]);
    const [isEmpty, setEmpty] = useState(true);

    const isListEmpty = (list) => {
        return list.length === 0;
    };

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetch("http://localhost:8080/student/getAll")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setEmpty(isListEmpty(data));
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return <div className="containerStudentList">
        <h2>Student List</h2>
        {!isEmpty ? (<ol className="studentList">
            {students.map((student) => (
                <li key={student.id} className="studentItem">
                    <strong>Name:</strong> {student.name}<br/><strong>Address:</strong> {student.address}
                </li>
            ))}
        </ol>) : <p>No students available.</p>}
        {isEmpty && <p></p>}
    </div>
}
export default GetStudents;