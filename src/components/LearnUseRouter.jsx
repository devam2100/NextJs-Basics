"use client"
import { useRouter } from "next/navigation"

const LearnUseRouter = () => {
    const router= useRouter();
  return (
    <div>
     <h1>use router</h1> 
     <button type="button" onClick={()=> router.push("/admin/dashbord")}>Goto admin</button>
    </div>
  )
}

export default LearnUseRouter
