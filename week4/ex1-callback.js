//ส่วนที่ 1 ข้อมูลตั้งตน 4 คน
const students = [
    {
        id: "6701", name: "somchai", major: "CE",
        score: 82
    },
    {
        id: "6702", name: "somying", major: "IT",
        score: 91
    },
    {
        id: "6703", name: "manee", major: "CE",
        score: 45
    },
    {
        id: "6704", name: "sompong", major: "IT",
        score: 67
    }
];

//ส่วนที่ 2
function fetchStudentById(id, callback) {
    setTimeout(() => {
        if (typeof id !== "string" || id.trim() === "") {
            return callback(new Error(`รหัสนักศึกษาไม่ถูกต้อง`));
        }
        const student = students.find((s) => s.id === id);
        if (!student) {
            return callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
        }
        return callback(null, { ...student });
    }, 300);
}

//ส่วนที่ 3
fetchStudentById("6704", (err, student) => {
    if (err) {
        console.log("กรณี ก) ล้มเหลว:", err.message);
        return;
    }
    console.log("กรณี ก) สำเร็จ:", student.name, student);
});

fetchStudentById("9999", (err, student) => {
    if (err) {
        console.log("กรณี ข) ล้มเหลว:", err.message);
        return;
    }
    console.log("กรณี ข) สำเร็จ:", student.name, student);
});

fetchStudentById("42", (err, student) => {
    if (err) {
        console.log("กรณี ค) ล้มเหลว:", err.message);
        return;
    }
    console.log("กรณี ค) สำเร็จ:", student.name, student);
});

/* ส่วนที่ 4
ข้อที่ 1: ถ้าลืมตรวจ error แล้วอ่าน.name ทันที จะเกิดอะไร ใครเห็น error นั้น 
Ans: จะเกิด TypeError: Cannot read properties of undefined (reading 'name')เพราะในกรณีที่เกิด Error พารามิเตอร์ตัวที่สอง (student) จะมีค่าเป็น Undefined
Ans: Developer จะเห็นใน Sever Crash log และฝั่ง User  ตัวโปรแกรมนั้นๆจะค้างโดยไม่มีอะไรแจ้งเตือน 

ข้อที่ 2: ทำไมต้อง return หลังเรียก callback(error) 
Ans: เพราะคำสั่ง callback() เป็นเพียงฟังก์ชัน ไม่ใช่การสั่งออกจากฟังก์ชัน (Exit)*/ 