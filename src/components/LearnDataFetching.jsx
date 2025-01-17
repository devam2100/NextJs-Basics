async function getdata() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json();
}

const LearnDataFetching = async () => {
    const data = await getdata()
    console.log('data: ', data);

  return (
    <div>
      {data.map((post,i)=>(
        <div key={i}>
            <h1>{post.title}</h1>
            <hr></hr> </div>
           
      ))}
    </div>
  )
}

export default LearnDataFetching
