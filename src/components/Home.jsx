import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [data, setdata] = useState([])

  const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-xl font-bold text-center mb-5'>Click on the button to get the data</h1>
        <button onClick={()=>{
          navigate('/products')
        }} className='px-5 py-2 font-semibold bg-emerald-600 border-none rounded translate-x-160 active:scale-95 cursor-pointer'>Get Data</button>
    </div>
  )
}

export default Home