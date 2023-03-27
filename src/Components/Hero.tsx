import { useContext } from 'react'
import { HeroContext } from '../Contexts/HeroData';
import heroImage from '../Assets/Images/hero.png'

function Hero() {
  const { heroData } = useContext(HeroContext)
  return (
    <>
      <div className='hero-contaniner'>
        <div className='hero-details'>
          <h1> {heroData?.title} </h1>
          <p>{heroData?.description}</p>
          <button className="button-hero" role="button"><a href={heroData.btnLink}>{heroData?.btnText}</a> </button>
        </div>
        <div>
          <img src={heroImage} />
        </div>
      </div>
    </>
  )
}

export default Hero