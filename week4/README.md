# Workshop 3
# ex1-callback

**ส่วนที่ 1**
-นำข้อมูล นศ.มาจาก workshop ก่อนหน้า

**ส่วนที่ 2**
-เขียน functionStudentById โดย Ref มาจากสไลด์ที่เรียนในคลาสแต่ปรับเปลี่ยนการ setTimeout() เป็น 300 ms ตามโจทย์

**ส่วนที่ 3**
-เขียนการเรียนใช้ฟังก์ชันทั้ง 3 กรณีโดย ref มาจากสไลด์ในคลาสหน้าที่ 21 โดยเขียนคำว่า Error ย่อเป็น err แทน และเรียก array student มาเพิ่มเพื่อดูง่าย ไม่ต้องมีแค่เลข ID แล้วเลื่อนขึ้นไปดู Arrayอีก

# ex2-promise

**ส่วนที่ 1**
-เอาฟังก์ชันจากข้อ1 มาแปลงเป็น Ver.Promise โดยห่อด้วย return new Promise จากนั้นเปลี่ยนจาก callback เป็น reject และ return resolve ด้วย ...student

**ส่วนที่ 2**
-ดัดแปลงโค้ดจาก fetchStudentById ส่วนที่ 3 ในข้อแรก โดย .then()รับข้อมูลเมื่อสำเร็จ,ดักจับ Eror ด้วย.catch() และปิดท้ายด้วย .finally() ให้โค้ดทำงานเสมอแม้ว่าจะพัง   ทำจนครบ 3 คน

**ส่วนที่ 3**
-Promise Chain 3 ชั้น fetchStudentByIdAsync("6701") โดยใช้ .then() ก่อนเพื่อรับข้อมูล student มา และ return ชื่อกับเกรด นศ. ต่อไปเขียนขั้นที่ 1 ด้วย .then() เพื่อรับข้อมูลนักศึกษา (student) มา return ค่า ชื่อ และเกรด ต่อไปขั้นที่ 2 ใช้ .then() เพื่อรับค่าจากขั้นแรกมาแปลงเป็น reportmessage ซึ่งก็คือ " return `นักศึกษา ${data.name} สอบได้เกรด ${data.grade}`;" บรรทัดนี้. ขั้นที่ 3 คือการพิมพ์ข้อความออกทาง Console โดยทุกขั้นที่ใช้ then() จะมี return เสมอ

**ส่วนที่ 4**
-promisify(fn) = ประกาศ function รับ function "fn" เข้ามา แล้ว return function ใหม่ที่รับ ...args (อากิวเมนต์แบบยืดหยุ่น) ซึ่ง function ใหม่นี้จะสั่ง  "return new Promise((resolve, reject) => {" ซ้อนไว้อีก เพื่อห่อ function ใหม่ ด้วย Promise โดยมี resolve และ reject ไว้ใช้ควบคุมสถานะภายใน.

-"fn(...args, (err, result) => {"  คือการสั่งรัน "function (fn)" พร้อม callback นำ "args" แตกออกด้วย (...args) เพื่อส่งเข้า function เดิม 

-"if (err) {" คือการเช็กว่าการทำงานของ function ต้นฉบับ (fn) เกิดข้อผิดพลาดมั้ย 

-"return reject(err);" = สั่งเรียก "reject(err)" เพื่อส่งวัตถุ Error ออกไปนอก Promise แล้วสั่ง return เพื่อหยุดการทำงานในบล็อกทันที เมื่อเกิดข้อผิดพลาด

-"return resolve(result);" = หากไม่มี Error บรรทัดนี้จะสั่งเรียก resolve(result) นำข้อมูลผลลัพธ์ parameter ตัวที่สองส่งออกไปนอก Promise

**โค้ดตรวจสอบจากข้อ 1**
-  เปลี่ยน callback(err, x) → reject(err) / resolve(x) โดยนำมาเปลี่ยน พารามิเอตร์ จากข้อ 1 ที่มี 2 ตัว กลายเป็นในข้อ 2 มี 3 ตัว คือ (a, b, callback) ซึ่ง proof ...args ใน promisify ทำงานรองรับพารามิเตอร์ยืดหยุ่นกี่ตัวก็ได้จริง

- "const divideNumbersAsync = promisify(divideNumbers);" =  แปลงฟังก์ชัน divideNumbers callback style เป็น "divideNumbersAsync" Promise style 

** ทดสอบกรณีสำเร็จ**
- "divideNumbersAsync(10, 2)" = ส่งเลข 10 / 2 เข้าไป เมื่อคำนวณเสร็จ ตัว Promise จะถูก resolve(5)  และส่งผลลัพธ์เข้าบล็อก ".then((result) => ...)" พิมพ์ข้อความทดสอบ ""ทดสอบ "ทดสอบ Promisify (10 /2):" ออกจาก console

** ทดสอบกรณีล้มเหลว**
- "divideNumbersAsync(10, 0)" ส่งเลข 10 กับ 0 ไป จะเข้าเงื่อนไขหารด้วยศูนย์ Promise จะถูก reject ด้วยข้อความ "ไม่สามารถหารด้วย 0 ได้" และข้าม .then() ไปเข้าบล็อก .catch((err)) แทน

# ex3-async-await
**Copy Promise มาจากข้อ 2**
**ส่วนที่ 1**
-การเขียน "function reportSequential()" ประกาศตัวแปร "ids"เพื่อเก็บ Array นศ. 3 คน, "startTime" เพื่อเก็บเวลาด้วย Date.now(), 
"results" เพื่อรอเก็บข้อมูล.

-ใช้ Loop for...of วนอ่าน id ทีละตัว แล้วใช้ await fetchStudentByIdAsync(id) เพื่อสั่งให้ระบบรอดึงข้อดึงข้อมูลมาทีละคน จากนั้นนำข้อที่ได้ไป push ใส่ Array results พอดึงครบ 3 คน ประกาศตัวแปร Duration ที่นำ Date.now()ปัจจุบันมาลบ StartTime เพื่อคำนวณเวลาที่ใช้ไปทั้งหมด

**ส่วนที่ 2**
-การเขียน "function reportParallel(seqDuration)" ประกาศ async function รับค่าเวลาจากส่วนที่ 1 เข้ามาเปรียบเทียบ ประกาศ ids และ startTime เหมือนส่วนที่ 1 ใช้ ids.map((id) => ) fetchStudentByIdAsync(id))) เพื่อยิงคำสั่งค้นหาทั้ง 3 คนออกไปพร้อมกันทันที แล้วหุ้มด้วย await Promise.all เพื่อรอนำผลลัพธ์ของทุกคนมารวมกัน เมื่อเสร็จแล้วนำเเวลามาคำนวณหาสัดส่วนความเร็วที่เพิ่มขึ้น speedup = seqDuration / duration 

**ส่วนที่ 3**
- function safeReport(id) ประกาศ async function เหมือนกัน ประกาศตัวแปร student และ grade บล็อก try สั่ง await fetchStudentByIdAsync(id) ดึงข้อมูลนศ.และนำคะแนนไปเข้าฟังก์ชัน getGrade() จากนั้น console ผลลัพธ์ออก

-บล็อก catch ดักรับข้อผิดพลาด error กรณีค้นหาไม่พบ หรือ id ผิดรูปแบบ แล้วส่งข้อความแจ้งเตือนออกทาง console

-บล็อก finally พิมพ์ข้อความ `-- จบการตรวจสอบ ${id} --` ออกทาง console

**async function main()**
-สร้างมาเพื่อสั่งรันทุกฟังก์ชันและขั้นแต่ละฟังก์ชันด้วยข้อความ ใน console

# ex4-combinators
** ส่วนที่ 1**
-ประกาศเครื่องมือจำลองจากสไลด์ที่เรียน

-async function main() เพื่อสั่งรัน 4 สถานการณ์ 

-สถานการณ์ที่ 1 ใช้ await Promise.all() หุ้มการทำงานของ wait() ทั้ง 3 ตัวครอบด้วย try..catch และทดสอบ 2 รอบ.

-สั่งยิงข้อมูลทั้ง 3 ตัวพร้อมกัน ถ้ารอบไหนผ่านหมดจะนำข้อความมาต่อกันแล้วพิมพ์เปิดหน้าแรก แต่ถ้ารอบไหนมีตัวใดตัวหนึ่งล้มเหลว ตัว Promise.all() จะตัดจบแล้วโดดไปบล็อก catch ทันที เพื่อแจ้งข้อความว่าหน้าแรกเปิดไม่ได้ ออกทาง console

**ส่วนที่ 2**
-สถานการณ์ที่ 2 ใช้ await Promise.allsettled() หุ้ม Array การส่งแจ้งเตือนที่มี SMS ตั้งค่า willFail = true จากนนั้นนำผลลัพธ์มาวนลูปด้วย .forEach() เพื่อตรวจสอบสถานะ 

-ยิงการแจ้งเตือนออกไปพร้อมกัน แล้วรอจนกระทั่งทุกช่องทางรันจบทั้งหมด จากนั้นเช็ค property status ถ้าเป็น fulfilled พิมพ์ว่าสำเร็จ ถ้าเป็น rejected พิมพ์ข้อความล้มเหลว

**ส่วนที่ 3**
-สถานการณ์ที่ 3 ใช้ await Promise.any() หุ้ว sever 2 ตัว โดยกำหนดให้ mirror-A ล้มเหลวแบบเร็ว (300ms) และ mirror-B สำเร็จแบบช้ากว่า (600ms) ครอบด้วย try...catch 

-ยิงคำสั่งขอข้อมูลไปยังทั้งสอง Server พร้อมกัน เมื่อ mirror-A พัง ตัว Promise.any จะมองข้ามแล้วรอจน mirror-B ทำงานสำเร็จ แล้วนำผลลัพธ์ของ mirror-B มาใช้งาน 

**ส่วนที่ 4**
-สถานการณ์ที่ 4 ใช้ await Promise.race() เอาฟังก์ชันดึงฐานข้อมูล wait(1200) มารันแข่งกับ timeoutPromise(800) ครอบด้วย try..catch 

-ทั้งสอง Promise จะถูกรันพร้อมกัน ตัวไหนทำงานจบก่อน ไม่ว่าสำเร็จหรือไม่ก็ตาม Promise.race จะเลือกเอาผลลัพธ์นั้นมาทันที ในโค้ดชุดนี้ตัว timeoutPromise ครบ 800ms ก่อน จึงตัดเข้าบล็อก catch และพิมพ์แจ้งเตือนให้สลับไปใช้แคชเก่าแทน 

**main()**
-คิอการสั่งรัน function main ให้ทำงาน