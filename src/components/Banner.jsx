import { Link } from 'react-router-dom'
import banner from '../assets/hero-banner.jpg'
import image from '../assets/hero-image.png'
const Banner = () => {
  return (
    <div className='h-screen w-full object-cover'       style={{ 
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
>
      <div className='container grid grid-cols-1 md:grid-cols-2 h-full'>
        <div className='flex justify-start items-center h-full'>
          <div className='space-y-6'>
            <h2 className='text-5xl md:text-6xl font-semibold'>
              Shape Your <span className='text-textClr'>Destiny</span> with Expert-Led Course
            </h2>
            <p className='font-medium'>Unlock premium courses in programming, English, Bangla, and more—taught by industry experts. Start learning today and build the future you deserve!</p>
           <Link to='/services'> <button className='button bg-textClr mt-6'>View All</button></Link>
          </div>
        </div>
        <div className=' hidden md:flex  justify-center items-center h-full'>
          <img className='h-96' src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Banner
