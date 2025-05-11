import { Link } from 'react-router-dom'
import banner from '../assets/hero-banner.jpg'
import image from '../assets/hero-image.png'
const Banner = () => {
  return (
    <div className='h-screen w-full ' style={{ backgroundImage: `url(${banner})` }}>
      <div className='container grid grid-cols-2 h-full'>
        <div className='flex justify-start items-center h-full'>
          <div className='space-y-6'>
            <h2 className='text-6xl font-semibold'>
              Shape Your <span className='text-textClr'>Destiny</span> with Expert-Led Course
            </h2>
           <Link to='/services'> <button className='button bg-textClr mt-6'>View All</button></Link>
          </div>
        </div>
        <div className='flex justify-center items-center h-full'>
          <img className='h-96' src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Banner
