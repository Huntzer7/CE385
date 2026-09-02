//ข้อมูลนักศึกษา
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

//ส่วนที่ 1 functions Ban for or while
const getNames= (students) =>
    students.map(s => s.name);

const getPassedStudents = (students) =>
    students.filter(s => s.score >= 50);

const getTotalScore = (students) =>
    students.reduce((sum,s) => sum + s.score, 0);

const getAverageScore = (students) => {
    if (students.length === 0) return 0;
    const total = getTotalScore(students);
    return (total / students.length).toFixed(2);
};

const GRADE = [
    {min: 80, grade: "A"},
    {min: 75, grade: "B+"},
    {min: 70, grade: "B"},
    {min: 65, grade: "C+"},
    {min: 60, grade: "C"},
    {min: 55, grade: "D+"},
    {min: 50, grade: "D"},
    {min: 0, grade: "F"},
];

const toGrade = score =>
    GRADE.find(g => score >= g.min)?.grade ?? "คะแนนไม่อยู่ระหว่างเลข 0-100";

const countByGrade = (students) =>
    students.reduce((acc, s) => {
        const grade = toGrade(s.score);
        acc[grade] = (acc[grade] ?? 0) + 1;
        return acc;
    }, {}); //ค่าเริ่มต้น object เปล่า

const getTopStudent = (students) => {
    if (students.length === 0) return null;
    return students.reduce((best, s) =>
    s.score > best.score ? s : best // ? = ถ้าจริงคืน s (คะแนนคนใหม่) 
    );
};

//ส่วนที่ 2 pipe ข้อมูลต่อกัน
const avgCEPassed = students.filter(s => s.major === "CE").filter(s => s.score >= 50).map(s => s.score).reduce((sum,score,_,arr) => sum + score / arr.length,0);
console.log(`Average_CE_Passed: ${avgCEPassed.toFixed(2)}`);

//ส่วนที่ 3 test case
const empty = [];

console.log("Names:", getNames(empty));
console.log("Passed_Students:", getPassedStudents(empty));
console.log("Total_Score:", getTotalScore(empty));
console.log("Average_Score:", getAverageScore(empty));
console.log("Count_Grade:", countByGrade(empty));
console.log("Top_Student:", getTopStudent(empty));