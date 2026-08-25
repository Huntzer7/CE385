const username = "admin";
const password = "ce385pass";
const master = "อาจารย์";
const student = "นักศึกษา";
const age = 18;

//ส่วนที่ 1
function login(inputUser, inputPass, role, isActive, age) {
    if (inputUser !== "admin" || inputPass !== "ce385pass") {
        return "401 ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }

    if (!isActive) {
        return "403 บัญชีนี้ถูกระงับการใช้งาน"
    }

    if (age < 18) {
        return "อายุไม่ถึงเกณฑ์";
    }

    if (role === "อาจารย์") {
        return "200 เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    } else if (role === "นักศึกษา") {
        return "200 เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
    }
}

//ส่วนที่ 2