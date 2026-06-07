import React from "react";
import TableHeader from "../ui/TableHeader";
import TableRow from "../ui/TableRow";

const columns = ["Name", "Email", "Course", "Age", "Actions"];

export default function StudentTable({ students, onDelete, onEdit }) {
  return (
    <section>
      <div>
        <p className="eyebrow">Student Table</p>
        <h2>Student Entries</h2>
        <strong>{students.length} Students</strong>
      </div>

      {students.length === 0 ? (
        <p className="empty-state">No Student entries found.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <TableHeader columns={columns} />
            <tbody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  student={student}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
