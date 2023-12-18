export default async function Product ({params}:{params:{product:string}}) {
    const fetchData = await fetch(`https://657c3d02853beeefdb98fa7c.mockapi.io/posts/${params.product}`);
    const res = await fetchData.json();
    console.log(res)
    console.log(params.product)
    return (
      <div className='bg-blue-400 h-screen py-40'>
        <h3 className='text-xl px-5 text-center font-semibold'>Product Details</h3>
        <h1 className='text-xl font-semibold px-10 my-5 flex'> <p className='underline hover:underline-offset-2 cursor-pointer'>Title:</p>{res.title} </h1>
        <p className='text-xl font-semibold px-10'> {res.body} </p>
      </div>
    )
  }