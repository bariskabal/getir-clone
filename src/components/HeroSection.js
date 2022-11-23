import ReactFlagsSelect from 'react-flags-select';
import { useState } from 'react';
import {FaFacebook} from 'react-icons/fa'
 
export default function HeroSection() {

  const [selected, setSelected] = useState('TR');

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
}

    return(
       <div className="relative h-auto bg-purple-300 md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
          <div className="hidden md:block">
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
            <h3 className="text-4xl mt-8 font-semibold text-white">
                Dakikalar içinde <br /> kapınızda <br />
            </h3>
          </div>
          <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
            <h4 className="text-brand text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
            <div className="grid gap-y-3">
              <div className="flex gap-x-2">
              <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  onSelect={code => setSelected(code)}
                  selected={selected}
                  className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                  <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
              </label>
              </div>
              <button className='text-brand bg-brand2 text-sm font-semibold h-12 rounded-lg hover:bg-brand hover:text-brand2 transition-colors'>
                Telefon numarası ile devam et
              </button>
              <div className="h-[1px] bg-gray-100"></div>
							<button className="h-12 flex items-center rounded-lg px-4 transition-colors bg-blue-700 bg-opacity-10 text-blue-900 text-sm font-semibold hover:bg-blue-900 hover:text-white">
              <FaFacebook size={26} className="justify-self-start"/>
								<span className="mx-auto">
									Facebook ile devam et
								</span>
							</button>
            </div>
          </div>
        </div>
      </div>
    )
}