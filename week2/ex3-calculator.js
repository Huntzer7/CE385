//ส่วนที่ 1
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

//ส่วนที่ 2
const workshop = (48 / 60) * 20; //ใช้ .toFixed ตอนแสดงผลเพื่อไม่ให้ตัวเลขเป็น string
const total = workshop + attendance + project + midterm + final;
const percent = (total / 100) * 100;
const margin = 80 - total; //ถ้าคะแนนเกินตัวเลขเป็นติดลบ

//ส่วนที่ 3
console.log(`=====ใบสรุปคะแนน=====`)
console.log(`คะแนน Workshop : ${workshop.toFixed(2)} / 20`);
console.log(`คะแนนรวม : ${total.toFixed(2)} / 100`);
console.log(`เปอเซ็นต์ : ${percent.toFixed(2)}%`);
console.log(`ขาดอีกกี่คะแนนจึงจะได้ 80 : ${margin.toFixed(2)}`);
console.log(`====================`)