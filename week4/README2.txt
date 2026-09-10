# ex3-async-await
**Copy Promise มาจากข้อ 2**
**ส่วนที่ 1**
-การเขียน "function reportSequential()" ประกาศตัวแปร "ids"เพื่อเก็บ Array นศ. 3 คน, "startTime" เพื่อเก็บเวลาด้วย Date.now(), 
"results" เพื่อรอเก็บข้อมูล.

-ใช้ Loop for...of วนอ่าน id ทีละตัว แล้วใช้ await fetchStudentByIdAsync(id) เพื่อสั่งให้ระบบรอดึงข้อดึงข้อมูลมาทีละคน จากนั้นนำข้อที่ได้ไป push ใส่ Array results พอดึงครบ 3 คน ประกาศตัวแปร Duration ที่นำ Date.now()ปัจจุบันมาลบ StartTime เพื่อคำนวณเวลาที่ใช้ไปทั้งหมด

**ส่วนที่ 2**
-การเขียน "function reportParallel(seqDuration)" 