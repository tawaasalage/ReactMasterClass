import { useState } from "react";
import StudentForm from "../components/student/StudentForm";
import StudentTable from "../components/student/StudentTable";

import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  deleteStudent,
  updateStudent,
} from "../redux/studentSlice";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.list);

  const [editingStudent, setEditingStudent] = useState(null);

  const handleSubmitStudent = (studentData) => {
    if (editingStudent) {
      dispatch(updateStudent(studentData));
      setEditingStudent(null);
    } else {
      dispatch(addStudent(studentData));
    }
  };

  const handleDeleteStudent = (studentID) => {
    dispatch(deleteStudent(studentID));
  };

  return (
    <div className="dashboard-layout">
      <section className="dashboard-header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <p className="muted-text">
            This is the dashboard page. Only authenticated users can see this
            page.
          </p>
        </div>
      </section>

      <div className="content-grid">
        <StudentForm
          onCancel={() => setEditingStudent(null)}
          onSubmitStudent={handleSubmitStudent}
          editingStudent={editingStudent}
        />
        <StudentTable
          students={students}
          onDelete={handleDeleteStudent}
          onEdit={setEditingStudent}
        />
      </div>
    </div>
  );
}
