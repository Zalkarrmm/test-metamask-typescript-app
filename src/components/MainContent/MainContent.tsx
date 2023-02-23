import React from 'react'
import './MainContent.css'
const MainContent = () => {
  return (
    <div className='main_container'>
      <div className='planet_text_content'>
        <div className='main_text'>
          <div className='main_text_title'>

            <div className='main_text_title_left'>
              <p>
                EXPLORE YOUR IN <span className='transparent_text'>OUR NEW</span>
              </p>
              <p className='main_lorem_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </div>

            <div className='main_text_title_right'>
              <div className='main_planet_back_4'>
                <div className='main_planet_back_3'>
                  <div className='main_planet_back_2'>
                    <div className='main_planet_back_1'>
                      <div className='back_img_planet'>
                        <p className='main_transparent_text'>OWN PLANET <span className='metaverse_text'>METAVERSE</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='roadmap_text'>
          <h3>Roadmap stats</h3>
          <div className='secondary_right_text'>
            <h3 className='secondary_right_text_orange_title' >12, 345</h3>
            <p>Lorem ipsum dolor</p>
          </div>

          <div className='tag_for_border_div' ></div>

          <div className='secondary_right_text'>
            <h3 className='secondary_right_text_orange_title' >12, 345</h3>
            <p>Lorem ipsum dolor</p>
          </div>

          <div className='tag_for_border_div'></div>

          <div className='secondary_right_text'>
            <h3 className='secondary_right_text_orange_title' >12, 345</h3>
            <p>Lorem ipsum dolor</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainContent