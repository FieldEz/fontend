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

    <div className='text-center'>
      <Image src="/hutao.jfif" class="img-thumbnail" alt="hutao" width={200} height={200}/>     
      </div>

    <div className='text-center'><button type="button" class="btn btn-danger" w >HU TAO</button></div>
    </>
  )
}

