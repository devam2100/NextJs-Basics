import Link from "next/link"


const LearnLink = () => {
    const id = 2;
  return (
    <div>
        <Link href="/admin/dashbord"> go to admin dashbord</Link>
        <Link href=
        {`/user/profile/${id}`}> go to user profile</Link>
        </div>
     
  )
}

export default LearnLink
