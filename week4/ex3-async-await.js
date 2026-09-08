// ข้อมูลตั้งตน 4 คน
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

function getGrade(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}
// Promise form ex2
function fetchStudentByIdAsync(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof id !== "string" || id.trim() === "") {
                return reject(new Error(`รหัสนักศึกษาไม่ถูกต้อง`));
            }
            const student = students.find((s) => s.id === id);
            if (!student) {
                return reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
            }
            return resolve({ ...student });
        }, 300);
    });
}

// ส่วนที่ 1
async function reportSequential() {
    const ids = ["6701", "6702", "6703"];
    const startTime = Date.now();
    const results = [];

    for (const id of ids) {
        const student = await fetchStudentByIdAsync(id);
        results.push(student);
    }

    const duration = Date.now() - startTime;
    console.log(`Sequential: ใช้เวลา ${duration} ms`);
    return duration;
}

// ส่วนที่ 2
async function reportParallel(seqDuration) {
    const ids = ["6701", "6702", "6703"];
    const startTime = Date.now();

    const results = await Promise.all(ids.map((id) => fetchStudentByIdAsync(id)));

    const duration = Date.now() - startTime;
    const speedup = (seqDuration / duration).toFixed(2);
    console.log(`[Parallel] ดึงข้อมูล 3 คนใช้เวลาทั้งหมด: ${duration} ms`);
    console.log(`สรุปแบบ Parallel เร็วกว่าแบบ Sequential ${speedup} เท่า`);
}

// ส่วนที่ 3
async function safeReport(id) {
    try {
        const student = await fetchStudentByIdAsync(id);
        const grade = getGrade(student.score);
        console.log(`พบข้อมูล: ${student.name} (เกรด ${grade})`);
    } catch (err) {
        console.log(`ตรวจไม่พบ: ${err.message}`);
    } finally {
        console.log(`-- จบการตรวจสอบ ${id} --`);
    }
}

async function main() {
    console.log("=== ทดสอบการทำงาน safeReport ===");
    await safeReport("6701");
    await safeReport("9999");
    await safeReport("42");
}
main();
/*
// ส่วนที่ 4
ข้อที่ 1: ทำไม try-catch ครอบ await จับ reject ได้ แต่ครอบการเรียก callback ธรรมดาไม่ได้
Ans: การเรียก callback ธรรมดาเป็น Asynchronous Task คือไม่ต้องรอให้โค้ดชุดคำสั่งนั้นๆรันเสร็จก่อน แต่สามารถไปทำคำสั่งอื่นต่อได้ทันที 
เมื่อรันโค้ดชุดแรกเสร็จจึงค่อยกลับาจัดการผลลัพธ์ จึงไม่สามารถใช้ try-catch จับ reject ได้ แต่ await จะรอ Promise ที่ถูก reject และสามารถจับ error ได้

ข้อที่ 2:  ทดลอง "ลืม await" หน้า Promise.all แล้วเอาผลไปใช้ต่อ — เกิดอะไรขึ้น เขียนคำอธิบายประกอบ
Ans: ผลลัพธ์ที่ได้จะไม่ใช่ Array ของข้อมูล นศ.จริง แต่จะเป็น Promise ที่ยังไม่ถูก resolve หรือ reject 
ทำให้ไม่สามารถเข้าถึงข้อมูลนักศึกษาได้ทันที ต้องใช้ await เพื่อรอให้ Promise ทั้งหมด resolve ก่อนถึงจะสามารถเข้าถึงข้อมูลนักศึกษาได้
*/