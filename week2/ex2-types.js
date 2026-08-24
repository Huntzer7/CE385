//ส่วนที่ 1
const string="สวัสดี";
const number=12345;
const boolean=true;
let mood;
const nothing= null;
const fruits=["Apple", "Banana", "Orange"];

console.log("ค่า:" , string, "| ชนิด:", typeof string);
console.log("ค่า:" , number, "| ชนิด:", typeof number);
console.log("ค่า:" , boolean, "| ชนิด:", typeof boolean);
console.log("ค่า:" , mood, "| ชนิด:", typeof mood);
console.log("ค่า:" , nothing, "| ชนิด:", typeof nothing);
console.log("ค่า:" , fruits, "| ชนิด:", typeof fruits);

//ส่วนที่ 2
console.log();
console.log("typeof null ได้ผลว่าอะไร และผลนั้นถูกต้องตามความเป็นจริงหรือไม่");
console.log("คำตอบ: " ,typeof null, "ไม่ถูกต้อง");
console.log("ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า มีชนิดเป็นอะไร")
console.log("คำตอบ: undefined")
console.log("typeof NaN ได้ผลว่าอะไร (สร้าง NaN ด้วย Number(abc))");
console.log("คำตอบ: NaN")

//ส่วนที่ 3
console.log();
const inputAge = "20"; //ประกาศตัวแปร
const age = Number(inputAge);//แปลงค่าตัวแปรจาก string เป็น Number
const inputScore = "85.5";
const score = Number(inputScore);

console.log(age + 5);//เรียกแสดงผลเฉพาะตัวแปรที่แปลงค่าแล้วเท่านั้น
console.log(score.toFixed(1));
console.log("inputAge === 20:", inputAge === 20);
console.log("Number(inputAge) === 20:", Number(inputAge) === 20);