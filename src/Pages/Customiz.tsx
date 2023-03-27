import CustomSide from '../Components/CustomSide'
import Hero from '../Components/Hero'


function Customiz() {
  return (
    <div className='customiz-page-container'>
      <div className='customiz-page-custom-side'>
        <CustomSide />
      </div>
      <div className='customiz-page-hero'>
        <Hero />
      </div>
    </div>
  )
}

export default Customiz