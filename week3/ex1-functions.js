//ส่วนที่ 1
const isValidScore = (score) => {
    if (typeof score !== "number") return false;
    if (score < 0 || score > 100) return false;
        return true;
};

const GRADE = [
    {min: 80, grade: "A"},
    {min: 75, grade: "B+"},
    {min: 70, grade: "B"},
    {min: 65, grade: "C+"},
    {min: 60, grade: "C"},
    {min: 55, grade: "D+"},
    {min: 50, grade: "D"},
    {min: 0, grade: "F"},
];

const toGrade = (score) => {
    if (!isValidScore(score)) return "คะแนนไม่อยู่ระหว่างเลข 0-100";
    const found = GRADE.find(c => score >= c.min);
    return found.grade;
}

function calculateWorkshopScore (raw, full =60, weight = 20) {
    return (raw / full) * weight;
}

function calculateTotal (workshop, attendance, project, midterm, final) {
    return (workshop + attendance + project + midterm + final);
}

//ส่วนที่ 2
const students = [
    {name: "สมชาย", wsRaw:40, att:9, proj:12, mid:12, fin:10},
    {name: "สมหมาย", wsRaw:68, att:20, proj:18, mid:16, fin:20},
    {name: "สมปอง", wsRaw:55, att:12, proj:15, mid:11, fin:18},
];

console.log("       WS","ATT","PROJ","MID","FINAL","รวม","  เกรด");
for (const s of students) {
    const ws = calculateWorkshopScore(s.wsRaw);
    const total = calculateTotal(ws, s.att, s.proj, s.mid, s.fin);
    const grade = toGrade(total);
    console.log(`${s.name}: ${ws.toFixed(0)} ${s.att}   ${s.proj}  ${s.mid}   ${s.fin}   ${total.toFixed(2)}   ${grade}`);
}

//ส่วนที่ 3
console.log(calculateWorkshopScore(48));
console.log(calculateWorkshopScore(48,60,20));
console.log("");
console.log(calculateWorkshopScore(48, undefined,25));
// ผลลัพธ์ที่ได้นั้นคือ 20 เพราะค่า default ของ full คือ 60 -> (48/60)*25 = 20