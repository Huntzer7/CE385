const name ="สมชาย", score = 82;

console.log("แบบเก่า:  + ชื่อ" + name + "ได้" + score + " คะแนน");

console.log(`แบบใหม่: ชื่อ ${name} ได้ ${score} คะแนน`);

console.log('ครึ่งหนึ่งของคะแนนคือ ${score / 2}');
console.log('ผ่านเกณฑ์หรือไม่: ${score >= 50 ? "ผ่าน" : "ไม่ผ่าน"}');

console.warn("console.warn - คำเตือน");
console.error("console.error - ข้อผิดพลาด");