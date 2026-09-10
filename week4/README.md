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
-ดัดแปลงโค้ดจาก fetchStudentById ส่วนที่ 3 ในข้อแรก โดย .then()รับข้อมูลเมื่อสำเร็จ,ดักจับ Eror ด้วย.catch() และปิดท้ายด้วย .finally() ให้โค้ดทำงานเสมอแม้ว่าจะพัง

**ส่วนที่ 3**
-Promise Chain 3 ชั้น fetchStudentByIdAsync("6701") โดยใช้ .then() ก่อนเพื่อรับข้อมูล student มา และ return ชื่อกับเกรด นศ. ต่อไปเขียนขั้นที่ 1 ด้วย .then() เพื่อรับข้อมูลนักศึกษา (student) มา return ค่า ชื่อ และเกรด ต่อไปขั้นที่ 2 ใช้ .then() เพื่อรับค่าจาก 

# ex3-async-await
**Copy Promise มาจากข้อ 2**
**ส่วนที่ 1**
-การเขียน "function reportSequential()" ประกาศตัวแปร "ids"เพื่อเก็บ Array นศ. 3 คน, "startTime" เพื่อเก็บเวลาด้วย Date.now(), 
"results" เพื่อรอเก็บข้อมูล.

-ใช้ Loop for...of วนอ่าน id ทีละตัว แล้วใช้ await fetchStudentByIdAsync(id) เพื่อสั่งให้ระบบรอดึงข้อดึงข้อมูลมาทีละคน จากนั้นนำข้อที่ได้ไป push ใส่ Array results พอดึงครบ 3 คน ประกาศตัวแปร Duration ที่นำ Date.now()ปัจจุบันมาลบ StartTime เพื่อคำนวณเวลาที่ใช้ไปทั้งหมด

**ส่วนที่ 2**
-การเขียน "function reportParallel(seqDuration)" 