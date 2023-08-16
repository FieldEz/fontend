// // 
// import { useSession, signIn, signOut } from "next-auth/react"

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/users')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//   }
// }

// export default function Component({ posts }) {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               Signed in as {session.user.email} <br />
//               {session.user.fname} {session.user.lname} <br />
//               <button onClick={() => signOut()}>Sign out</button>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <table className="table table-striped">
//                 <thead>
//                   <tr className="bg-warning">
//                     <th>Student ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {posts.users.map((post) => (
//                     <tr key={post.id}>
//                       <td>{post.studentid}</td>
//                       <td>{post.firstname}</td>
//                       <td>{post.lastname}</td>
//                       <td>{post.password}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from 'sweetalert2';
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}



export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (result.isConfirmed) {
      // Perform the deletion using fetch
      await fetch('http://localhost:3000/api/users?id=' + id, {
        method: 'DELETE',
      });
  
      // Reload the page
      router.reload('/dashboard');
  
      // Show success message
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }
  };


  if (session) {
    return (
      <>

<nav className="navbar navbar-light bg-warning">
  <div className="container-fluid">
  <div className="col">
  <div align="right"> Signed in as {session.user.email} {session.user.fname} {session.user.lname} <button  className="btn btn-danger" onClick={() => signOut()}>Sign out</button></div>
  </div>
  </div>
</nav>
<br></br>

        <div className="container">
          <div className="row">
          </div>
          <div align="right">    <Link href="/dashboard/datauser" > <button className="btn btn-success text-n">Add Data</button> </Link>{/* ปุ่ม Delete */} </div>
          <br></br>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr className="bg-warning">
                  <th>No</th>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Password</th>
                    <th>status</th>
                    <th>Action</th> {/* เพิ่มคอลัมน์ Action */}
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post, i) => (
                    <tr key={post.id}>
                      <td>{i+1}</td>
                      <td>{post.studentid}</td>
                      <td>{post.firstname}</td>
                      <td>{post.lastname}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      <td>
                        <button className="btn btn-warning">Edit</button> {/* ปุ่ม Edit */}
                        <button className="btn btn-danger" onClick={()=> handleDelete(post.id)}>Delete</button> {/* ปุ่ม Delete */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
