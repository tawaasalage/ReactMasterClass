import React from "react";
import Button from "./Button";

export default function TableRow({ student, onDelete, onEdit }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>{student.age}</td>
      <td>
        <div className="table-actions">
          <Button
            onClick={() => {
              onEdit(student);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              console.log("Delete student with ID:", student.id);
              onDelete(student.id);
            }}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
