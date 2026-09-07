//ส่วนที่ 1 ข้อมูลตั้งตน 4 คน
const students = [
    {
        id:"6701", name:"somchai", major: "CE",
        score: 82
    },
    {
        id:"6702", name:"somying", major: "IT",
        score: 91
    },
    {
        id:"6703", name:"manee", major: "CE",
        score: 45
    },
    {
        id:"6704", name:"sompong", major: "IT",
        score: 67
    },
];

//ส่วนที่ 2
function fetchStudentById(id, callback) {
    setTimeout(() => {
        if (typeof id !== "string" || id.trim() === "") {
            return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
        }
        const student = students.find((s) => s.id === id);
        if (!student) {
            return callback(new Error("ไม่พบรหัสนักศึกษา ${id}"));
        }
        callback(null,{...student});
    },300);
}

//ส่วนที่ 3
fetchStudentSafe("9999",(error, student) => {
    if(error) return console.log("ล้มเหลว:" ,error.massage);
    console.log("สำเร็จ   :",student.name);
});