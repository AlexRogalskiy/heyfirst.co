---
title: "\"Make it work, Make it right, then make it fast!\""
date: "2021-02-05T00:00:00.000Z"
tags: ["refactoring","productivity","software-development"]
featuredImage: "./asset-1.jpeg"
published: true
---

หลายสัปดาห์ก่อน ผมได้เล่าเทคนิคเล็ก ๆ ของการเขียนโปรแกรมอย่างเรื่อง 1,2, Refactor! จากหนังสือ [Refactoring: Improving the Design of Existing Code (Book)](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/) ไปแล้ว วันนี้ผมจะมาเล่าอีกเทคนิคหนึ่งกัน

นั่นคือ **"Make it work, Make it right, Make it fast"**

!["Make it work, Make it right, Make it fast" - Ken Beck](./quote-make-it-work-make-it-right-make-it-fast-kent-beck.jpg)


คือถ้าเริ่มจากเขียน Code เพื่อให้งานเสร็จไวที่สุดเท่าที่จะทำได้โดยไม่สนความสวยงาม เสร็จแล้วค่อยมา Refactor ให้มันเป็น Code ที่สวย.. มันเร็วกว่าพยายามเขียน Code ที่สวยตั้งแต่แรกเยอะ (มาก)

ฉะนั้น ทำให้มัน work ก่อน.. แล้วค่อยทำให้มันถูก วางถูกที่ถูกทาง อ่านง่าย เข้าใจง่าย .. แล้วค่อย optimize มันก็ได้ ไม่สายหรอก

## Make your Coding Faster

ความคิดเห็นส่วนตัวผมบอกว่า ถ้าอยาก Code ไว ๆ นอกจากการหัดพิมพ์ดีดให้เร็วแล้ว ก็มักจะใช้เทคนิคนี้นี่แหละครับ

มาไล่ไปทีละเสต็ปกัน

### 1. Make it work

เสต็ปแรกคือ Make it work. เราแค่เขียน Code เพื่อให้มันใช้งานได้ มันอาจจะน่าเกลียด มันอาจจะยุ่งเหยิง จะพัวพัน อ่านแล้วเข้าใจยาก

มันโอเค.. 👍🏻

ตราบเท่าที่มันทำงานได้ มันใช้งานได้ มันผ่าน testcases ที่เราเขียนไว้

ถ้าตัวเรายังไม่แน่ใจ ก็จงอย่าไปเสียเวลากับการทำ Code ให้มันสวยในตอนนี้ ไม่ต้องมี Design pattern มาจับมันก็ได้ หรือถ้าเรารู้สึกว่ามันอาจจะทำแบบนี้ได้ อาจจะเพียงแค่ใส่ TODO Comment แปะเอาไว้กันลืมก็เพียงพอแล้ว

ฉะนั้น เขียนแค่พอมันทำงานถูกต้องสมบูรณ์ก็เพียงพอแล้ว แค่มันทำงานได้ผู้ใช้ของเราก็ยิ้มแย้มแล้วล่ะ

### 2. Make it right

หลังจากเมื่อเราได้ working solution มาแล้วนั้น ถึงเวลาทำให้พวกเราเหล่า developer ยิ้มแย้มกันบ้าง

เรามาเริ่มมองดู Code ของเรากันดูว่ามีจุดไหนที่ปรับปรุงให้ดีขึ้นได้บ้าง

ลองมองดูว่า Code ของเรามี [Code Smell](https://refactoring.guru/refactoring/smells) แบบไหนอยู่บ้าง, ลองดูตาม [Software Engineering Principle](https://deviq.com/principles/principles-overview), หรือว่า Code ของเรามัน Clean พอรึยัง

ปรับปรุงจนเรารู้สึกว่า "ดีพอ"

> คำว่าดีพอสำหรับแต่ละคนนั้นไม่เหมือนกัน ถ้าสำหรับตัวผมคือ แค่เราและทีมอ่านมันแล้วเข้าใจว่ามันทำงานยังไง เราและทีมสบายใจถ้าต้องทำงานกับ Code ชุดนี้ เท่านี้ผมเรียกว่า "ดีพอ" แล้วครับ

ถ้าคิดว่ามันยังตั้งชื่อได้ไม่ดี ก็แก้มันตอนนี้ คิดว่ามันยังมี testcases หรือ scenarios บางอย่างที่เราลืมหรือพลาดไป ก็เขียนมันตอนนี้ ถ้าคิดว่ามันยังจัดวาง structure ไม่ดี ก็ทำมันซะตอนนี้เลย

ทำทุกอย่างที่เพื่อให้ Code ชุดนี้เป็นสิ่งที่ดีพอและใช่สำหรับเรานั่นเอง

อย่างหนึ่งที่สำคัญ คือ อย่า Over-engineering .. ถ้าสมมุติว่า feature นี้ที่ทำอยู่มี Throughput อยู่ที่ 1,000 Transaction Per Second ( TPS ) ซึ่งเพียงพอต่อการใช้งานในปัจจุบันแล้้ว

งั้น ณ ตอนนี้เราไม่จำเป็นต้องทำให้มันเร็วขึ้นตอนนี้ก็็ได้ ยังมี features อีกมากมาย, bug, defect ที่รอให้เราไปสร้าง value ให้กับผู้ใช้อยู่ ไปทำพวกนั้นดีกว่าครับ อย่าเสียเวลากับการ optimize ในตอนนี้เลย

### 3. Make it fast

แต่เมื่อเวลานั้นมาถึง วันที่เรารู้้ว่ามัน "เร็ว" ไม่พออีกแล้ว มันคือช่วงเวลาที่เราต้อง tuning งานของเราซักที

เราจะรู้ได้ยังไงว่าเวลามาถึงแล้ว? ง่ายที่สุดคือใช้เครื่องมือช่วย และเดี๋ยวนี้มี SaaS มากมายที่เข้ามาช่วยเรื่องนี้อย่าง Instana, New Relic, และผองเพื่อนอีกมากมา 

หรือจะเป็น Matrics อื่น ๆ ที่มักใช้กันเช่น [Web Vitals](https://web.dev/vitals/) เป็นต้น

ซึ่งถ้าหากเราคิดมาแล้วว่ามันมี value ที่สมควรจะต้องทำนะ เราค่อยมาทำปรับปรุง มา Tuning กันตอนนี้นั่นเองครับผม

การปรับปรุง Performance นั้นมีหลายแบบ และสิ่งที่หลายคนคงนึกถึงคงจะเป็น Scale Out/Scale Up, การเปลี่ยน algorithms ที่ใช้, การเปลี่ยน tools ที่ใช้, การทำ services ใหม่ขึ้นมาทดแทน, ฯลฯ และอีกมากมายหลายเทคนิคให้เลือกใช้กัน

แต่สำหรับผมแล้ว ผมยังคงเชื่อเรื่อง [Beyond Good Enough is Waste](https://ardalis.com/beyond-good-enough-is-waste/) และ [YAGNI (You aren't gonna need it)](https://ardalis.com/beyond-good-enough-is-waste/) มาก ๆ 

เราเป็น Programmer และเราเองสามารถสร้างคุณค่าได้อีกมากมายเมื่อเทียบกับการใช้เวลาทั้งหมดเพื่อทำแค่บางสิ่งบางอย่างให้ดีที่สุด

> แต่มันคนละเรื่องกับทำเพื่อสนองความต้องการของตัวเองนะ .. เช่นเรารู้ว่าแค่นี้มันก็ใช้ได้ดีแล้ว แต่ใจเราอยากทำให้มันเป็น O(1),O(log n) อะ ก็ทำมันเถอะครับ 😂 ตามหัวใจตัวเอง บางครั้งผมก็เป็น..

สำหรับใครที่ยังอยากได้ความเห็นเพิ่มเติมว่าเราควร Optimize Performance ตอนไหน แล้วควรทำทุกส่วนหรือทำยังไงบ้าง อ่าน[สรุปของพี่ปุ๋ย Somkiat.cc](https://www.somkiat.cc/should-optimize-code/) เพิ่มเติมจะดีมาก ๆ ครับ

## Summary

มาถึงตรงนี้ถามว่าเราจะเขียน Code ไวขึ้นได้ยังไง?

นั่นคือมันทำให้เราไม่เผลอไปพยายามเขียน Code ให้มันสวยมากตั้งแต่แรก แต่ไปโฟกัสกับการทำงานให้เสร็จก่อนแทน

และสุดท้ายเราจะส่งมอบ working and quality software และเราจะไม่หลงไปกับการ performance optimization ที่เสียเวลานั่นเอง

![https://unsplash.com/photos/lG-6_ox_UXE](./asset-1.jpeg)

### Good Resource



* [Refactoring: Improving the Design of Existing Code (Book)](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/)
* [Code Smell in Refactoring.guru](https://refactoring.guru/refactoring/smells)
* [Code Smell in DevIQ](https://deviq.com/antipatterns/code-smells)
* [Software Engineering Principle in DevIQ](https://deviq.com/principles/principles-overview)
* [Mastering Programming: พี่ปุ๋ย Somkiat.cc](https://www.somkiat.cc/translate-mastering-programming/)
