import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/router";
//import Swal from 'sweetalert2';
export async function getServerSideProps() {
  const res = await fetch('https://fontend-q39t.vercel.app/api/users/')
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

      // Perform the deletion using fetch
      fetch('https://fontend-q39t.vercel.app/api/users/' + id, {
        method: 'DELETE',
      });
  
      return router.push('/dashboard');
    };

  if (session) {
    return (
      <>

<nav className="navbar navbar-light bg-warning">
  <div className="container-fluid">
  <div className="col">
  <div align="right"> Signed in as {session.user.firstname} {session.user.lastname} {session.user.status}  <Link href="./" > <button  className="btn btn-danger" onClick={() => signOut()}>Sign out</button></Link> </div>
  </div>
  </div>
</nav>
<br></br>

        <div className="container">
          <div className="row">
          </div>
          <div align="right">    <Link href="/dashboard/user/add/" > <button className="btn btn-success text-n">Add Data</button> </Link>{/* ปุ่ม Delete */} </div>
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
                    <th>username</th> 
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
                      <td>{post.username}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      <td>
                      <Link href={`/dashboard/user/edit/${post.id}`} className="btn btn-warning">
                            <i className="bi bi-pencil-square">EDIT</i>
                          </Link>{" "}
                          <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                            <i className="bi bi-trash3">DELETE</i>
                          </button>
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

