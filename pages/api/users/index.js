  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  // get the client
  const mysql = require('mysql2');

  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
    });

    export default function handler(req, res) {
      const { studentid, firstname, lastname, username, password, status } = req.body


      if (req.method === 'GET') {
        connection.query( 
        'SELECT * FROM `tbl_users`',
        function(err, results) {
        res.status(200).json({users: results});
        }
        );
        
      } else if (req.method === 'POST') {
      const result = connection.query("INSERT INTO tbl_users SET ?",{
        studentid,firstname, lastname, username, status, password,
      });
      return res.status(200).json({"status": "ok","message": req.body, "id": result.insertid});



      } else if (req.method === 'PUT') {
        connection.query( 
          'SELECT * FROM `tbl_users`',
          function(err, results) {
          res.status(200).json({users: results});
          }
          );
          try{
        const result = connection.query("UPDATE tbl_users SET ? WHERE id = ?",[
          req.body,
          req.body.id,
        ]);
        return res.status(200).json({...req.body,id: result.insertid});
      } catch(error){
        return res.status(500).json({ message: error.messege });
      }
        

      } else {
        try{
          const result = connection.query("DELETE FROM tbl_users WHERE id = ?",[req.query.id]);
          return res.status(200).json({...req.body,id: result.insertid});
        } catch(error){
          return res.status(500).json({ message: error.messege });
        }
          
      }

    }


    // export default function handler(req, res) {
    // connection.query(
    //   'SELECT * FROM `tbl_users`',
    //   function(err, results) {
    //     console.log(results); // results contains rows returned by server
    //     res.status(200).json({users: results});
    //   }
    // );
    // }

  // export default function handler(req, res) {
  //     res.status(200).json([
  //         { id: '1',firstname:'Chayatat',lastname:'Nanjaipor',username:'chayatadforwork@gmail.com',password:'fieldkabpom123',status:'admin' },
  //         { id: '2',firstname:'ชยทัต',lastname:'นันใจป้อ',username:'chayatatforwork@gmail.com',password:'fieldkabpom123',status:'admin' }
  //     ])
  // }
    