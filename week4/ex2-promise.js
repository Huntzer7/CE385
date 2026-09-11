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

// ส่วนที่ 1
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

// ส่วนที่ 2
fetchStudentByIdAsync("6704")
    .then((student) => {
        console.log("กรณี ก) สำเร็จ:", student.name);
    })

    .catch((err) => {
        console.error("กรณี ก) สำเร็จ:", err.message);
    })

    .finally(() => {
        console.log("กรณี ก) Success!");
    });

fetchStudentByIdAsync("9999")
    .then((student) => {
        console.log("กรณี ข) สำเร็จ:", student.name);
    })

    .catch((err) => {
        console.error("กรณี ข) สำเร็จ:", err.name);
    })

    .finally(() => {
        console.log("กรณี ข) Success!");
    });

fetchStudentByIdAsync("42")
    .then((student) => {
        console.log("กรณี ค) สำเร็จ:", student.name);
    })

    .catch((err) => {
        console.error("กรณี ค สำเร็จ:", err.name);
    })

    .finally(() => {
        console.log("กรณี ค) Success!");
    });

// ส่วนที่ 3
fetchStudentByIdAsync("6701")
    .then((student) => {
        return {
            name: student.name,
            grade: getGrade(student.score)
        };
    })

    .then((data) => {
        return `นักศึกษา ${data.name} สอบได้เกรด ${data.grade}`;
    })
    .then((reportMessage) => {
        console.log(reportMessage);
        return reportMessage;
    })
    .catch((err) => {
        console.error("Error chain:", err.message);
    });

// ส่วนที่ 4
function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    };
}

// โค้ดตรวจสอบจากข้อ 1
function divideNumbers(a, b, callback) {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") {
            return callback(new Error("ข้อมูลต้องเป็นตัวเลข"));
        }
        if (b === 0) {
            return callback(new Error("ไม่สามารถหารด้วย 0 ได้"));
        }
        return callback(null, a / b);
    }, 300);
}

const divideNumbersAsync = promisify(divideNumbers);

divideNumbersAsync(10, 2)
    .then((result) => console.log("ทดสอบ Promisify (10 /2):", result))
    .catch((err) => console.error("ทดสอบ Promisify Error:", err.message));

divideNumbersAsync(10, 0)
    .then((result) => console.log("ทดสอบ Promisify (10 /0):", result))
    .catch((err) => console.error("ทดสอบ Promisify Error:", err.message));
