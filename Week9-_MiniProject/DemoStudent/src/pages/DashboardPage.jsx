import React from "react";
import StudentForm from "../components/student/StudentForm";
import StudentTable from "../components/student/StudentTable";

export default function DashboardPage() {
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
        <StudentForm />
        <StudentTable />
      </div>
    </div>
  );
}
