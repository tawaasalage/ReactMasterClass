import React from "react";
import Button from "../ui/Button";

export default function StudentForm() {
  return (
    <form className="panel form-panel">
      <div>
        <p className="eyebrow">Student Form</p>
        <h2>Add a Student</h2>
      </div>

      <div className="form-grid">
        <lebel>
          Name
          <input type="text" name="name" placeholder="Student Name" required />
        </lebel>
        <lebel>
          Email
          <input
            type="email"
            name="email"
            placeholder="Student Email"
            required
          />
        </lebel>
        <lebel>
          Course
          <input
            type="text"
            name="course"
            placeholder="Student Course"
            required
          />
        </lebel>
        <lebel>
          Age
          <input type="number" name="age" placeholder="Student Age" required />
        </lebel>
      </div>

      <div className="button-row">
        <Button type="submit" variant="primary">
          Add Student
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </form>
  );
}
