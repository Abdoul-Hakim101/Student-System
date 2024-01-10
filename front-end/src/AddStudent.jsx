import React, {useState} from "react";

const AddStudent = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, address}
        console.log(data)
        fetch("http://localhost:8080/student/add", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
                console.log("New student added");
                setName("");
                setAddress("");
        }

        );
    }
    return (
        <div>


            <div className="containerAddStudent" onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <form className="form">
                    <label htmlFor="studentName">Student Name</label>
                    <textarea id="studentName"
                              required
                              placeholder={"Name"}
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                    />

                    <label htmlFor="studentAddress">Student Address</label>
                    <textarea id="studentAddress"
                              required
                              placeholder={"Address"}
                              value={address}
                              onChange={(event) => setAddress(event.target.value)}
                    />
                    <button type={"submit"}>Submit</button>
                </form>

            </div>
        </div>

    );
}

export default AddStudent;