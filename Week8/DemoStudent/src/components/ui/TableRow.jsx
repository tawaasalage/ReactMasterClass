import React from "react";
import Button from "./Button";

export default function TableRow({ student }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>{student.age}</td>
      <td>
        <div className="table-actions">
          <Button>Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </td>
    </tr>
  );
}
