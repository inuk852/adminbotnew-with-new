import db from "../config/db.js"

export const FindUserByEmail = async (email)=>{
    const [rows] = await db.query("SELECT id, nombres, email, password_hash from usuarios WHERE email = ?", [email])
    return rows[0]
}