//ส่วนที่ 1
function getMenuPrice(menu) {
     switch (menu) {
        //fall-through: 3 เมนูราคาเท่ากัน 50 บาท
        case "ข้าวผัด" :
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;
        case "ผัดไทย":
            return 60;
        case "ต้มยำกุ้ง":
            return 120;
        default: //ไม่มีในรายการ
            return 0;
        
     }
}

//ส่วนที่ 2
function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default://อื่นๆ
            return 1;
    }
}

//ส่วนที่ 3
const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ต้มยำกุ้ง", size: "ธรรมดา", qty: 1 },
    { menu: "ข้าวผัด", size: "จัมโบ้", qty: 3 },
    { menu: "พิซซ่า", size: "พิเศษ", qty: 1 }, // ไม่มีในเมนู
    { menu: "ข้าวหมูแดง",size: "ธรรมดา", qty: 2 },
];

let totalBill = 0;

console.log(`=====บิลใบเสร็จ======`);
for (const order of orders) {
    const price = getMenuPrice(order.menu);
    const mult = getSizeMultiplier(order.size);

    if (price === 0) {
        console.log(`${order.menu} เมนูนี้ที่ร้านไม่มีนะจ๊ะ`);
    } else {
        const subtotal = price * mult * order.qty;
        totalBill += subtotal;
        console.log(`${order.menu} ${order.size} x${order.qty} = ${subtotal} บาท`);
    }
}
console.log(`=================`);
console.log(`total: ${totalBill} บาท`);