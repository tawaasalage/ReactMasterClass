import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    // {
    //   id: 1,
    //   name: "John Doe",
    //   age: 20,
    //   course: "Computer Science",
    //   email: "john.doe@example.com",
    // },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   age: 22,
    //   course: "Mathematics",
    //   email: "jane.smith@example.com",
    // },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.list = action.payload;
    },

    addStudent: (state, action) => {
      state.list.push({ id: nanoid(), ...action.payload });
    },
    updateStudent: (state, action) => {
      const updatedStudent = action.payload;
      const index = state.list.findIndex(
        (student) => student.id === updatedStudent.id,
      );
      if (index !== -1) {
        state.list[index] = updatedStudent;
      }
    },
    deleteStudent: (state, action) => {
      const studentID = action.payload;
      state.list = state.list.filter((student) => {
        return student.id !== studentID;
      });
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setStudents } =
  studentSlice.actions;
export default studentSlice.reducer;
