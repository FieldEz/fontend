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
    <a class="navbar-brand" href="#">Drugs Dealler</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/.">บ้าน</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">เชื่อม</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ล่วงลง
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">การกระทำ</a></li>
            <li><a class="dropdown-item" href="#">การกระทำอีกอัน</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">อะไรสักอย่างตรงนี้</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">ปิดไปแล้ว</a>
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
<div class="row" >
      <div class="col-lg-4">
      <img src="/hutao.jfif" class="bd-placeholder-img rounded-circle" alt="hutao"  width={200} height={200}/>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/hutao2.jpg" class="bd-placeholder-img rounded-circle" alt="hutao2" width={200} height={200} />
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/hutao3.jpg" class="bd-placeholder-img rounded-circle" alt="hutao3" width={200} height={200} />
        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>
<br>
</br>
<br>
</br>
</header>
    <div className='text-center'><button type="button" class="btn btn-danger" >HU TAO</button></div>

    <br>
</br>

    <div class="row" >
      <div class="col-lg-4">
      <img src="/hutao.jfif" class="bd-placeholder-img rounded-circle" alt="hutao"  width={200} height={200}/>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/hutao2.jpg" class="bd-placeholder-img rounded-circle" alt="hutao2" width={200} height={200} />
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="/hutao3.jpg" class="bd-placeholder-img rounded-circle" alt="hutao3" width={200} height={200} />
        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
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

