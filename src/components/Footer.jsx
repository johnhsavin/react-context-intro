import { useContext } from "react"
import { UserContext } from "../App"


export default function Footer() {
  const userInfo = useContext(UserContext)
const currentYear = new Date().getFullYear();
console.log(currentYear)
  return (
    <footer>
      <small>id. {userInfo._id} Copyright © {currentYear} </small>
    </footer>
    

  )
}