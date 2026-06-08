import { useState, useEffect } from "react";
import StudentForm from "../components/student/StudentForm";
import StudentTable from "../components/student/StudentTable";

import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  deleteStudent,
  updateStudent,
  setStudents,
} from "../redux/studentSlice";

import {
  getStudentsAPI,
  createStudentAPI,
  updateStudentAPI,
  deleteStudentAPI,
} from "../api/studentAPI";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.list);

  const [editingStudent, setEditingStudent] = useState(null);

  const loadStudents = async () => {
    const data = await getStudentsAPI();
    dispatch(setStudents(data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // loadStudents();

  const handleSubmitStudent = async (studentData) => {
    if (editingStudent) {
      await updateStudentAPI(studentData);
      dispatch(updateStudent(studentData));
      setEditingStudent(null);
    } else {
      await createStudentAPI(studentData);
      dispatch(addStudent(studentData));
    }
  };

  const handleDeleteStudent = async (studentID) => {
    await deleteStudentAPI(studentID);
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
