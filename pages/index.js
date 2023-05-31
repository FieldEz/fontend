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
          <a class="nav-link active" aria-current="page" href="#">บ้าน</a>
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

    <div className='text-center'>
      <Image src="/hutao.jfif" class="img-thumbnail" alt="hutao" width={200} height={200}/>     
      </div>

    <div className='text-center'><button type="button" class="btn btn-danger" >HU TAO</button></div>
    </>
  )
}

