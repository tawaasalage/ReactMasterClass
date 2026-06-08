const API_URL = "http://localhost:3000/students";

export const getStudentsAPI = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createStudentAPI = async (studentData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  return response.json();
};

export const updateStudentAPI = async (studentData) => {
  const response = await fetch(`${API_URL}/${studentData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  return response.json();
};

export const deleteStudentAPI = async (studentID) => {
  const response = await fetch(`${API_URL}/${studentID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
