import React, { useEffect, useState } from 'react'

const Home = () => {

  // ---------Custom variable

  const [data, Setdata] = useState([])

  const [catagory, Setcatagory] = useState([])


  // ------------ Function


  useEffect(()=>{

    fetch('https://api.jsonbin.io/v3/b/67a25305acd3cb34a8d8444c')
    .then((response) => response.json())
    .then((json) =>{Setdata(json.record),Setcatagory(json.record)})

  },[])

  console.log(catagory)

  return (

    <div>

      <div className="container">
     <nav className='  p-2'>

      <div className="b_div flex gap-6 text-blue-500 text-[25px]">

      <button>All</button>
      <button>Lunch</button>
      <button>Dinner</button>
      <button>Breakfast</button>
      </div>

      
     </nav>

     {/* ------------- Nav End */}

   

      <div className="S_card_main mt-[100px] flex flex-wrap gap-5">

        {

          data.map((item)=>(

      <div key={item.Id} className="singleCard w-[280px] bg-gray-100 flex">
       
       <div className="Img_div w-[150px]">
        <img src={item.Img} alt="" />
       </div>

        <div className="card_data p-[15px]">
          <h1>{item.Name}</h1>
          <h3>Price: {item.Price}</h3>
          <h4>{item.DiscountPrice}</h4>
          <h5>Catagory: {item.Category}</h5>
        </div>
      </div>

          ))
        }

      
      </div>


      </div>
    </div>
  )
}

export default Home

