// เครื่องมือจำลองจากโจทย์ 
const wait = (ms, value, willFail = false) =>
    new Promise((resolve, reject) => {
        setTimeout(() => (willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value)), ms);
    });

// Timout form ข้อที่4
const timeoutPromise = (ms) =>
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error("หมดเวลาการรอยคอ")), ms));

// main() run 4 situations
async function main() {
    console.log("=== เริ่มการทำงาน ข้อที่ 4 ===\n");

    // Situation 1: Promise.all
    // Because: ต้องได้ข้อมูลครบทกส่วนเท่านั้น ถึงจะเปิดหน้าแรกได้ 
    // ทดสอบทั้งสองแบบ willFail=true
    console.log("=== Situation 1: โหลดหน้าแรก");
    try {
        const pageData = await Promise.all([
            wait(300, "โปรไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ")
        ]);
        console.log(`เปดหน้าแรก: ${pageData.join(" + ")}`);
    } catch (err) {
        console.log(`ไม่สามารถเปิดหน้าแรกได้: ${err.message}`);
    }

    try {
        const pageData = await Promise.all([
            wait(300, "โปรไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ", true)
        ]);
        console.log(`เปิดหน้าแรก: ${pageData.join(" + ")}`);
    } catch (err) {
        console.log(`ไม่สามารถเปิดหน้าแรกได้: ${err.message}`);
    }

    // Situation 2: Promise.allSettled
    // Because: ต้องการข้อมูลทุกส่วน แต่ไม่สนใจว่าล้มเหลวหรือไม่
    console.log("\n=== Situation 2: แจ้งเตือนผลสอบ ===");
    const notificationResults = await Promise.allSettled([
        wait(300, "อีเมล"),
        wait(400, "SMS", true),
        wait(500, "แอป")
    ]);

    console.log("รายงานผลการแจ้งเตือนผลสอบ:");
    notificationResults.forEach((res, index) => {
        const channelNames = ["อีเมล", "SMS", "แอป"];
        if (res.status === "fulfilled") {
            console.log(`- ${channelNames[index]}: สำเร็จ (${res.value})`);
        } else {
            console.log(`- ${channelNames[index]}: ล้มเหลว (${res.reason.message})`);
        }
    });

    // Situation 3: Promise.any
    // Because: ต้องการข้อมูลเพียงส่วนใดส่วนหนึ่งก็พอที่ทำงานสำเร็จเป็นตัวแรก
    console.log("\n=== Situation 3: mirror server ===");
    try {
        const fastServerData = await Promise.any([
            wait(300, "mirror-A", true),
            wait(600, "mirror-B")
        ]);
        console.log(`ใช้ข้อมูลจาก: ${fastServerData}`);
    }   catch (err) {
        console.log(`mirror server ล้มเหลวทั้งหมด`);
    }

    // Situation 4: Promise.race
    // Because: ต้องการข้อมูลใดข้อมูลหนึ่งที่ทำงานสำเร็จเป็นตัวแรก โดยมีการดึงข้อมูลจาก Database กับการคุมเวลา
    // ตัวใดตัวหนึ่งทำงานเสร็จก่อนก็จะได้ผลลัพธ์นั้น 
    console.log("\n=== Situation 4: ค้นหาฐานข้อมูล ===");
    try {
        const dbData = await Promise.race([
            wait(1200, "ข้อมูลจากฐานข้อมูล"),
            timeoutPromise(800)
        ]);
        console.log(`ได้ข้อมูล: ${dbData}`);
    }   catch (err) {
        console.log(`เกิน 800ms -> เลิกรอ -> ใช้แคชเก่าแทน`);
    }
}
main();