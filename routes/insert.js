const pool = require('./dbcon');

// insert.js
pool.getConnection((err, conn) => {
  if(err) {
    console.error('[에러] :', err.stack);
    return;
  }
  //console.log('[성공] :', conn.threadId);
  const sql = "insert into testtbl values ('bb1', 'cc1')";
  conn.query(sql, (err, result) => {
    if(err) {
      console.error('[에러] :', err.stack);
    } else {
      console.log('result :', result);
    }
  });

  conn.release();
  pool.end();
});



