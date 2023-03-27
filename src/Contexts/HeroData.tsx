import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type HeroData = {
  title: string,
  description: string,
  btnText: string,
  btnLink: string,


}

export interface HeroContextInterface {
  heroDate: HeroData,
  setHeroDate: Dispatch<SetStateAction<HeroData>>
}
const INIT = {
  heroData: {
    title: '',
    description: '',
    btnText: '',
    btnLink: '',

  },
  setHeroDate: (data: HeroData) => { },
}

export const HeroContext = createContext(INIT)

type heroProviderProps = {
  children: ReactNode
}

export default function HeroProvider({ children }: heroProviderProps) {
  const [heroData, setHeroDate] = useState<HeroData>({
    title: 'THE CHOSEN ONE.',
    description: 'Our journey started out in 2016 by freelancers specialized in Social media, digital marketing, public relations, photography and graphic design.Gladly, our work expanded to Saudi Arabia, London, Jordan, UAE and USA.',
    btnText: 'GET IN TOUCH',
    btnLink: 'https://www.google.com/',

  });
  return (
    <HeroContext.Provider value={{ heroData, setHeroDate }}>
      {children}
    </HeroContext.Provider>
  )
}