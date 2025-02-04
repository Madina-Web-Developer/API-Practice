import React from 'react'

const Home = () => {


  return (

    <div>

     <nav className=' bg-amber-200 p-2'>
      <div className="container">

      <div className="b_div flex gap-6">

      <button>All</button>
      <button>Lunch</button>
      <button>Dinner</button>
      <button>Breakfast</button>
      </div>

      </div>
     </nav>

     {/* ------------- Nav End */}

     <div className="container">

      <div className="S_card_main">
        
      <div className="singleCard w-[300px] bg-gray-300">
        <img src="" alt="img" />

        <div className="card_data">
          <h1>Food Name</h1>
          <p>discription</p>
          <h3>Price</h3>
          <h4>discount</h4>
          <h5>Catagory</h5>
        </div>
      </div>

      </div>


     </div>
    </div>
  )
}

export default Home

