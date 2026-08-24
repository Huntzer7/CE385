const nickname="บูม";
const id="67112212";
const age=21;
const major="วิศวกรรมคอมพิวเตอร์";
const count_subject=6;
const years=3;

//คำนวณปีที่จะเรียนจบ
function countyears() {
    let balance_years = 4 - years;//ปีที่เหลือจากหลักสูตร 4 ปี
    let graduation_year = 2569 + balance_years;//ปีปัจจุบันบวกด้วยปีที่เหลือ
    return graduation_year;
}

console.log("===== บัตรแนะนำตัว =====");
console.log(`ชื่อเล่น : ${nickname}`);
console.log(`รหัสนักศึกษา : ${id}`);
console.log(`อายุ : ${age} ปี`);
console.log(`สาขาวิชา : ${major}`);
console.log(`ลงทะเบียน : ${count_subject} วิชา`);
console.log(`ปีที่จะจบ : ${countyears()}`);
console.log("========================");