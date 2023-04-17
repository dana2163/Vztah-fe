
export const mockData = {
  students: [
    {
      id: 1,
      name: 'John Doe',
      parentEmail: 'johnsparent@example.com',
      classIds: [1, 2],
    },
    {
      id: 2,
      name: 'Jane Doe',
      parentEmail: 'janesparent@example.com',
      classIds: [1],
    },
    {
      id: 3,
      name: 'Bob Smith',
      parentEmail: 'bobsparent@example.com',
      classIds: [3],
    },
    {
      id: 4,
      name: 'Alice Johnson',
      parentEmail: 'alicesparent@example.com',
      classIds: [2, 3],
    },
    {
      id: 5,
      name: 'Mark Lee',
      parentEmail: 'marksparent@example.com',
      classIds: [4],
    },
    {
      id: 6,
      name: 'Emily Wong',
      parentEmail: 'emilysparent@example.com',
      classIds: [4, 5],
    },
  ],

  teachers: [
    {
      id: 1,
      name: 'Mr. Smith',
      email: 'mrsmith@example.com',
      classIds: [1],
    },
    {
      id: 2,
      name: 'Ms. Johnson',
      email: 'msjohnson@example.com',
      classIds: [2, 3],
    },
    {
      id: 3,
      name: 'Mrs. Lee',
      email: 'mrslee@example.com',
      classIds: [4, 5],
    },
    {
      id: 4,
      name: 'Mr. Kim',
      email: 'mrkim@example.com',
      classIds: [6],
    },
  ],

  classes: [
    {
      id: 1,
      name: 'Math',
      teacherId: 1,
    },
    {
      id: 2,
      name: 'Science',
      teacherId: 2,
    },
    {
      id: 3,
      name: 'History',
      teacherId: 2,
    },
    {
      id: 4,
      name: 'English',
      teacherId: 3,
    },
    {
      id: 5,
      name: 'Art',
      teacherId: 3,
    },
    {
      id: 6,
      name: 'Physical Education',
      teacherId: 4,
    },
  ],
};
