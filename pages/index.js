import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

import'bootstrap/dist/css/bootstrap.css';

export default function index() {
  return (
    <>
    <Head>
      <title>NExtJs</title>
    </Head>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" >
    <div class="container-fluid">
    <a class="navbar-brand" href="#">BOOKFORLIFE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/.">หน้าหลัก</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">เกี่ยวกับ</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            เพิ่มเติม
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">หน้าร้าน</a></li>
            <li><a class="dropdown-item" href="#">ติดต่อ</a></li>
            <li><hr class="dropdown-divider"/></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>
<header>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="/Book1.jpg" class="d-block w-100" alt="hutao" width={50} height={500}/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/Book2.jpeg" class="d-block w-100" alt="hutao2" width={50} height={500} />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/Book3.jpg" class="d-block w-100" alt="hutao3" width={50} height={500} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br>
</br>
</header>

    <br>
</br>

    <div class="row" >
      <div class="col-lg-4">
      <img src="/j1.jpg" class="bd-placeholder-img rounded-circle" alt="hutao"  width={200} height={200}/>
        <h2 class="fw-normal">หนังสือแนะนำ</h2>
        <p>จิตวิทยาพลิกชีวิต.</p>
        <p><a class="btn btn-secondary" href="#">รายละเอียด »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/j2.jpg" class="bd-placeholder-img rounded-circle" alt="hutao2" width={200} height={200} />
        <h2 class="fw-normal">หนังสือแนะนำ</h2>
        <p>โลกจิต.</p>
        <p><a class="btn btn-secondary" href="#">รายละเอียด »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/j3.jpg" class="bd-placeholder-img rounded-circle" alt="hutao3" width={200} height={200} />
        <h2 class="fw-normal">หนังสือแนะนำ</h2>
        <p>จิตวิทยาสายดาร์ก.</p>
        <p><a class="btn btn-secondary" href="#">รายละเอียด »</a></p>
      </div>
    </div>
<br>
</br>
    

    <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"/>
        <small class="d-block mb-3 text-body-secondary">© 2017–2023</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
    </>
  )
}

