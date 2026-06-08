import { useState, useEffect } from "react";
import Button from "../ui/Button";

const emptyForm = {
  name: "",
  email: "",
  course: "",
  age: "",
};

export default function StudentForm({
  onSubmitStudent,
  editingStudent,
  onCancel,
}) {
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(emptyForm);
    }
  }, [editingStudent]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onSubmitStudent(formData);
    setFormData(emptyForm);
  };

  return (
    <form className="panel form-panel" onSubmit={handleSubmit}>
      <div>
        <p className="eyebrow">Student Form</p>
        <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
      </div>

      <div className="form-grid">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Student Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course
          <input
            type="text"
            name="course"
            placeholder="Student Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            placeholder="Student Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="button-row">
        <Button type="submit" variant="primary">
          {editingStudent ? "Update Student" : "Add Student"}
        </Button>
        <Button
          type="reset"
          variant="secondary"
          onClick={() => {
            setFormData(emptyForm);
            onCancel();
          }}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
