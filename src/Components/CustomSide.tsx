import React, { useContext } from 'react'
import { HeroContext } from '../Contexts/HeroData'

function CustomSide() {
  const { heroData, setHeroDate } = useContext(HeroContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > )=>{

    switch (e.target.id) {
      case 'title':
        setHeroDate({...heroData, title: e.target.value})
        break;
        case 'discription':
          setHeroDate({...heroData, description: e.target.value});
          console.log(e.target.value);
          
          break;
          case 'btn-text':
            setHeroDate({...heroData, btnText: e.target.value})
            break;
            case 'btn-link':
              setHeroDate({...heroData, btnLink: e.target.value})
              break;
      default:
        setHeroDate({
          title: '',
          description:'',
          btnText:'',
          btnLink:'',
      
        })
        break;
    }
  }


  return (
    <>
      <div className='custom-side-container'>
        <h2>Hero</h2>
        <div>
          <label htmlFor="title"> Title</label>
          <input id='title' type="text" value={heroData.title} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="discription"> Description</label>
          <textarea id='discription' value={heroData.description}  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="btn-text"> Button Text</label>
          <input id="btn-text" type="text" value={heroData.btnText} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="btn-link"> Button URL</label>
          <input id="btn-link" type="url"  onChange={handleChange}/>
        </div>
      </div>
    </>
  )
}

export default CustomSide