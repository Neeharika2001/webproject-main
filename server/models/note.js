const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS notes (
  noteID INT NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  notes1 VARCHAR(255) NOT NULL,
  CONSTRAINT notePK PRIMARY KEY(noteID),
  CONSTRAINT note_fk FOREIGN KEY(userID) REFERENCES users(userID)
); `
await con.query(sql);
}
createTable();

async function create(note) {

const sql = `INSERT INTO notes (userID,notes)
  VALUES ("${note.userID}","${note.notes}");
`

await con.query(sql);
return {success:"Note Added"};
}


async function getAllNotes() {
 const sql = "SELECT * FROM notes;";
 let notes = await con.query(sql);
 console.log(notes)
 return notes;
}


async function getNote(note) {
  let sql;
  
    sql = `
      SELECT * FROM notes
       WHERE userID = "${note.userID}"
    `
  
  return await con.query(sql);  
}
async function deleteNote(note) {
    let sql = `DELETE FROM notes
      WHERE noteID = "${note.noteID}"
    `
    await con.query(sql);
    }
async function editNote(note) {
  let sql = `UPDATE notes 
    SET notes = "${note.notes}"
    WHERE noteID = ${note.noteID}
  `;
  
  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
  }



module.exports = { getAllNotes, getNote, create, deleteNote, editNote};