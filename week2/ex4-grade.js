//ส่วนที่ 1 
//เหตุผลที่ต้องเรียงคะแนนจากมากไปน้อยเพราะว่า ถ้าเช็คคะแนนจาก score >= 50 ก่อน 
// ตัวคะแนน 80 จะได้ D แทนที่จะเป็น A (อ่านเงื่อนไขจากบนลงล่างเท่านั้น)

function toGrade(score) {
    //ส่วนที่ 2 
    if (score < 0 || score > 100) {
        console.log(`${score} คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100`)
        return "ไม่มีเกรดนะจ๊ะ";
    }

        if (score >= 80) {return "A";}
        else if (score >= 75) {return "B+";}
        else if (score >= 70) {return "B";}
        else if (score >= 65) {return "C+";}
        else if (score >= 60) {return "C";}
        else if (score >= 55) {return "D+";}
        else if (score >= 50) {return "D";}
        else  {return "F";}
}

//ส่วนที่ 3
for (const s of [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120]) {
    console.log(`${s} คะแนน -> เกรด: ${toGrade(s)}` );
}

