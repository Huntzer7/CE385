//ส่วนที่ 1 ข้อมูลนักศึกษา
const students = [
    {
        id:"6701", name:"somchai", major: "CE",
        score: 82,
        contact: {email: "somchai@dpu.ac.th", phone: "081-111-1111"}
    },
    {
        id:"6702", name:"somying", major: "IT",
        score: 91,
        contact: {email: "somying@dpu.ac.th", phone: "082-222-2222"}
    },
    {
        id:"6703", name:"manee", major: "CE",
        score: 45,
        contact: {email: "manee@dpu.ac.th", phone: "083-333-3333"}
    },
    {
        id:"6704", name:"sompong", major: "IT",
        score: 67,
        contact: {email: "sompong@dpu.ac.th", phone: "084-444-4444"}
    },
    {
        id:"6705", name:"somsom", major: "CE",
        score: 73,
        contact: {email: "somsom@dpu.ac.th", phone: "085-555-5555"}
    },
    {
        id:"6706", name:"somchu", major: "IT",
        score: 58,
        contact: {email: "somchu@dpu.ac.th", phone: "086-666-6666"}
    },
];

//ส่วนที่ 2 function
const findById = (students, id) => {
    return students.find(s => s.id === id);
};

const findByMajor = (students, major) => {
    return students.filter(s => s.major === major);
};

const hasFallingStudent = (students) => {
    return students.some(s => s.score < 50);
};

console.log(`มีคนที่คะแนนตำกว่า 50?: ${hasFallingStudent(students)}`);

const getEmail = (students, id) => {
    const student = students.find(s => s.id === id);
    return student?.contact?.email ?? "not found contact";
};

//ส่วนที่ 3 test case
console.log(findById(students, "9999"));
console.log(getEmail(students, "9999"));

//add new student don't have contact
const newStudent = {
    id: "6707", name: "sudlhor", major: "IT",
    score: 99
};

//add new Array by spread
const updateStudents = [...students, newStudent];

console.log(getEmail(updateStudents, "6707"));