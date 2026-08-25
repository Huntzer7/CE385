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

//ส่วนที่ 2 test
// สำเร็จ (อาจารย์)
console.log(login("admin", "ce385pass", "อาจารย์", true, 30));
// สำเร็จ (นักศึกษา)
console.log(login("admin", "ce385pass", "นักศึกษา", true, 21));
// รหัสผ่านผิด
console.log(login("admin", "wrongpass", "อาจารย์", true, 30));
// ชื่อผู้ใช้ผิด
console.log(login("wronguser", "ce385pass", "อาจารย์", true, 30));
// บัญชีถูกระงับ
console.log(login("admin", "ce385pass", "นักศึกษา", false, 30));
// อายุไม่ถึง
console.log(login("admin", "ce385pass", "นักศึกษา", true, 16));

// ส่วนที่ 3
//1.ทำไมต้องตรวจ username/password ก่อนตรวจ role
//ANS: เพราะถ้าข้อมูลไม่ถูกต้องตั้งแต่แรก ระบบไม่ควรเปิดเผยข้อมูลใดๆ

//2.ถ้าย้ายการตรวจ"อายุไม่ถึงเกณฑ์"ขึ้นไปเป็นข้อแรก จะเกิดปัญหาอะไร (คิดในแง่ความปลอดภัย: เราจะบอกอะไรกับคนที่ยังไม่ได้พิสูจน์ตัวตน)
//ANS: ความเสี่ยงด้านความปลอดภัยของข้อมูลส่วนตัว หากคนที่ คนที่ username/password ผิดก็อาจได้รับข้อความ "อายุไม่ถึงเกณฑ์"