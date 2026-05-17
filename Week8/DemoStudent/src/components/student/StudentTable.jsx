import React from "react";
import TableHeader from "../ui/TableHeader";
import TableRow from "../ui/TableRow";

const columns = ["Name", "Email", "Course", "Age", "Actions"];

export default function StudentTable() {
  return (
    <section>
      <div>
        <p className="eyebrow">Student Table</p>
        <h2>Student Entries</h2>
        <strong>0 Students</strong>
      </div>

      <div className="table-wrap">
        <table>
          <TableHeader columns={columns} />
          <tbody>
            <TableRow
              student={{
                name: "John Doe",
                email: "john.doe@example.com",
                course: "Computer Science",
                age: 20,
              }}
            />
            <TableRow
              student={{
                name: "John Doe",
                email: "john.doe@example.com",
                course: "Computer Science",
                age: 20,
              }}
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}
