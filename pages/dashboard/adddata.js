import { useState } from "react";

export default function AddUserForm() {
  const [formData, setFormData] = useState({
    studentid: "",
    firstname: "",
    lastname: "",
    password: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // เรียกใช้ API เพื่อทำการเพิ่มข้อมูลใหม่ในฐานข้อมูล
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // ในกรณีที่คุณต้องการให้มีการแสดงข้อความยืนยันหรือทำสิ่งอื่น
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="card mx-auto" style={{ width: "1250px" }}>
      <div className="card-header">
        <h5 className="card-title"><i className="bi bi-person-plus"></i> Add Member</h5>
      </div>
      <div className="card-body text-left">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID:</label>
            <input
              type="text"
              name="txt_studentid"
              id="txt_studentid"
              value={formData.studentid}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="txt_firstname"
              id="txt_firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="txt_lastname"
              id="txt_"
              value={formData.lastname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="txt_password"
              id="txt_"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input
              type="text"
              name="txt_status"
              id="txt_status"
              value=""
              onChange=""
              className="form-control"
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Add Data</button>
          <button type="submit" className="btn btn-primary">Back</button>
        </form>
      </div>
    </div>
  );
}
