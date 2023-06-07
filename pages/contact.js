import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    <>
    <Head>
      <title>BOOKFORLIFE</title>
    </Head>
  
  <header>
  <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BOOKFORLIFE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/.">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">ซื้อออนไลน์</a></li>
            <li><a className="dropdown-item" href="#">ตรวจสอบหนังสือ</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">สั่งจองหนังสือ</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"> ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

</header>
<br />
<br />
<br /> 
<main>
<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/j1.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">จิตวิทยาพลิกชีวิต</h2>
      <p>เผยเคล็ดลับในการพลิกชีวิตไปสู่ความสำเร็จสุขด้วยหลักการทางจิตวิทยา ที่ผู้เขียนใช้ชีวิตตัวเองเป็นเดิมพันพิสูจน์ให้แล้วว่า แนวทางเหล่านี้ใช้ได้ผลจริง จากอดีตเด็กที่ถูกเลี้ยงดูเข้าข่ายทารุณกรรม รวมถึงโดนรังแกจากเพื่อนที่โรงเรียน ทำให้มีอาการ PTSD (บาดแผลทางใจ) และภาวะซึมเศร้าในช่วงวัยรุ่น เคยคิดฆ่าตัวตายหลายครั้ง กระทั่งได้ศึกษาแนวทางเชิงจิตวิทยา และใช้มันพลิกชีวิตจากติดลบให้ประสบความสำเร็จสุขได้ในที่สุด โดยนำเสนอผ่านนวัตกรรมตัวแบบที่สร้างขึ้น</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/j2.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">โลกจิต</h2>
      <p>ท่องจักรวาลความคิดสำรวจโลกลี้ลับแห่งตัวตนสิ่งมีชีวิต (และไร้ชีวิต) ใดบ้างที่มีจิตรู้สำนึกมีจิตรู้สำนึกสองจิตในร่างเดียวได้หรือไม่จิตรู้สำนึกถือกำเนิดและอันตรธานไปเมื่อใดและแท้จริงแล้ว จิตรู้สำนึก คืออะไรกันแน่อันนากา แฮร์ริส ผู้เชี่ยวชาญด้านประสาทวิยาศาสตร์และฟิสิกส์ จะพาคุณท่องโลกแห่งความคิด เจาะลึกจิตใจอันยุ่งเหยิงของสิ่งมีชีวิต และสำรวจนิยามอันหลากหลายของ "จิตรู้สำนึก" องค์ประกอบสุดลึกลับแห่งจักรวาลอันเป็นศูนย์กลางแห่งตัวตน เจตจำนง และอารมณ์ทั้งมวลพบกับหนังสือที่จะกะเทาะเปลือกมายาคติ ขยายพรมแดนแห่งปรัชญาและทลายความเป็นไปได้ทางวิทยาศาสตร์จนสุดขอบจิตตนาการ เพื่อตอบคำถามแห่งอนาคตว่าเราต้องญาติดีกับเหล่าปัญญาประดิษฐ์ที่มีความรู้คิดจริงหรือไม่ พืชเจ็บปวดรวดร้าวได้มากน้อยเพียงใด ผู้ป่วยแบบไหนนับว่า "เป็นผัก" ตลอดจนข้อถกเถียงคลาสสิกอย่าง "ตัวตน" ของเราเป็นสิ่งจริงแท้หรือแค่ภาพลวงเพราะขณะที่มนุษย์พยายามไขคำตอบแห่งพื้นพิภพ และเฝ้าฝันถึงการตั้งรกรากบนดาราจักรอันห่างไกล... ยังมีความลี้ลับอันยิ่งใหญ่ซ่อนอยู่ใน "จิตรู้สำนึก" ของเราทุกคน</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/j3.jpg" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">จิตวิทยาสายดาร์ก</h2>
      <p>Dr. Hiro  เคยเป็นนักขายที่ล้มเหลว  ขายอะไรก็ไม่มีใครซื้อแต่แล้ววันหนึ่งขณะกำลังดูข่าว  เขาก็นึกขึ้นได้ว่า“ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่วแถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัวแล้วทำไมผมถึงขายไม่ออกล่ะ?”เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจังอ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาดแล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่นนั่นคือที่มาของ  “จิตวิทยาสายดาร์ก”พบกับเทคนิคทางจิตวิทยาที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคนทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div className="row">
    <div className="col-lg-4">
    <img src="/j4.jfif" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">อย่าเป็นคนเก่งที่คุยไม่เป็น</h2>
      <p>อย่าเป็นคนเก่งที่คุยไม่เป็นทักษะคุยเล่นของคนที่ประสบความสำเร็จระดับโลก จะเป็นแค่คนธรรมดา...หรือคนชั้นแนวหน้าวัดกันที่ ทักษะ นี้ไม่ว่าคุณจะทำงานอะไร ประกอบอาชีพไหน เมื่อถึงจุดหนึ่งจะมี บางสิ่ง ที่สำคัญแซงหน้าความรู้ความสามารถ หากขาดมันไป ต่อให้คุณพยายามทุ่มเทมากเพียงใด คุณก็จะประสบความสำเร็จแบบครึ่ง ๆ กลาง ๆไปได้ไม่ไกลอย่างที่คาดหวังไว้ สิ่งนั้นคือ ทักษะคุยเล่นหนังสือเล่มนี้จะเผยทักษะคุยเล่นของคนชั้นแนวหน้าในทุกวงการ ซึ่งช่วยให้พวกเขาก้าวสู่จุดสูงสุดของอาชีพได้ ทั้งที่หลายคนไม่ใช่คนที่คุยเก่งมาตั้งแต่แรก ตัวอย่างเช่น- พูดโดยใช้เสียงในระดับ ฟา หรือ ซอล- หัดเล่าถึงความผิดพลาดเล็ก ๆ น้อย ๆ ของตัวเอง- ฝึกชมแบบ พึมพำ- ทำไมการถามว่า ทำไมล่ะ ถึงดูสิ้นคิด 

</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/j5.png" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">เพราะเป็นวัยรุ่นจึงเจ็บปวด</h2>
      <p>"เพราะเป็นวัยรุ่นจึงเจ็บปวด" เปรียบเสมือนคู่มือในการดำเนินชีวิตของวัยรุ่นที่กำลังทรมานใจ...ว่างเปล่า...หวั่นไหว...เปลี่ยวเหงา...โดดเดี่ยว...เพราะเป็นวัยรุ่นคนหนึ่ง ถูกเขียนขึ้นมาสำหรับวัยรุ่นที่ยังคงสับสนเพียงเพราะเป็นวัยรุ่นตัวคนเดียว ไม่มีคนที่คอยให้คำปรึกษา หรือไม่กล้าปรึกษาคนอื่นๆ หนังสือเล่มนี้อาจไม่มีคำตอบสำเร็จรูปให้คุณภายในสามนาที แต่ยืนยันว่ามีคำตอบปลายเปิดให้คุณได้ค้นหาว่าจะผ่านช่วงวัยเรียน วัยทำงาน และวัยผู้ใหญ่ เพื่อสร้างฝันให้เป็นจริงได้อย่างไร</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/j6.jfif" className="bd-placeholder-img rounded-circle" alt="gtr2"width={160} height={140} />
      <h2 className="fw-normal">ชีวิตติดปีก</h2>
      <p>หลายคนใช้เวลาทั้งชีวิตทำตามความคาดหวังของคนอื่น บ้างทิ้งความฝัน เพื่อทำสิ่งที่ใครๆ บอกว่าาดี และคิดว่านั้นจะทำให้ชีวิตเต็มไปด้วยความสำเร็จและความสุข

แต่หารู้ไม่ว่าการทำเช่นนั้นจะย้อนมาทำร้ายตัวคุณเอง เพราะการแคร์ทุกคน เกี่ยวกับทุกสิ่ง ย้อมแปลว่าคุณต้องเสียสละบางอย่างที่สำคัญในชีวิตไปด้วย

Mark Manson นักเขียนและบล็อกเกอร์ที่มีผู้ติดตามนับล้านคน ได้ผสานหลักปรัชญา ศาสนา และประสบการณ์ที่เขาได้ไปเยือนมาแล้วกว่า 55 ประเทศ ขมวดรวมเป็น "ศิลปะแห่งการช่างแม่_ง"</p>
      <p><a className="btn btn-secondary" href="https://www.nissan.co.th/vehicles/new-vehicles/new-gt-r.html">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
</div>

</main>
<br />
<br />
<br />

<footer>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


</footer>
    </>
  )
}