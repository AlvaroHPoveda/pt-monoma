import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

import CardComponent from '../../assets/shared/card.component';
import ImageSlider from '../../assets/utils/imageslider.component';

import { enums, arrayCaracteristicas, arrayExtras} from '../../assets/i18n/enum';
import { WEB_MATERIAL05, WEB_MATERIAL06, WEB_MATERIAL08, WEB_MATERIAL09, WEB_MATERIAL10, WEB_MATERIAL11 } from '../../assets/material_web';

import { getAllImmovables } from '../../api/data.api';
import './detail.component.scss'

const DetailComponent = () => {

  const [ flag, setFlag ] = useState(0);

  const params = useParams();
  const immovables = getAllImmovables();
  const immovable = immovables.find( ( immovable ) => immovable.id === +params.immovableId );
  const { imgSlider01, imgSlider02, imgSlider03 } = immovable;
  const slides = [imgSlider01, imgSlider02, imgSlider03]
  const othersImmovables = immovables.filter( ( immovable ) => immovable.id !== +params.immovableId);
  
  return (
    <div className='container-detail'>
      <header className='header-detail'>
          <Link to={'/'} className='return-link'>
            <img src={ WEB_MATERIAL05 } alt="WEB_MATERIAL11" className='icon-img-detail' />
          </Link>
          <div className='divimgdetail'>
            <img src={ enums.URL_GROCASA } className='header-img-detail' alt="Grocasa.png" />
          </div>   
      </header>
      <main className='main-container-detail'>
        <section className='containerStyles'>    
           <ImageSlider slides={ slides }/>
        </section>
        <section className='section-inter-detail'>
          <header>      
            <h1 className='title-detail'>{ immovable.title }</h1>
            <p className='description-detail'>{ immovable.description }</p>        
          </header>
          <main>
            <section className='descriptionDetail'>{immovable.descriptionDetail}</section>
            <section className='icon-section-detail'>
              <div>
                <article>
                    <img src={ WEB_MATERIAL11 } alt="WEB_MATERIAL11" className='icon-img-main' />
                    <p className='number-area'>{ immovable.area }</p>
                  </article>
                  <article>
                    <img src={ WEB_MATERIAL10 } alt="WEB_MATERIAL10" className='icon-img-main' />
                    <p>{ immovable.room }</p>
                  </article>
                  <article>
                    <img src={ WEB_MATERIAL09 } alt="WEB_MATERIAL09" className='icon-img-main' />
                    <p>{ immovable.bathroom}</p>
                  </article>
              </div>
              <div>
                <p className='price-detail'>{ immovable.price}</p>
                {
                  flag === 0 ? (
                    <img src={WEB_MATERIAL08}
                         alt="WEB_MATERIAL08"
                         className='iconimg-main'
                         onClick={ () => setFlag(1) } />
                  ):(
                    <img src={WEB_MATERIAL06}
                         alt="WEB_MATERIAL08"
                         className='iconimg-main'
                         onClick={ () => setFlag(0) } />
                  )
                }
              </div>
            </section>
            <section className='section-lists'>
              <div>
                <strong>{ enums.TITLE_CTS }</strong>
                <ul>
                  {
                    arrayCaracteristicas.map( (cts) =>
                    <li >{ cts }</li>
                  )}
                </ul>
              </div>
              <div>
                <strong>{ enums.TITLE_EXTRAS }</strong>
                <ul>
                  {
                    arrayExtras.map( (extra) => (
                    <li>{ extra }</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className='section-map'>
              <img src={ enums.URL_MAP } alt="map" className='img-map' />
            </section>
            <section className='section-end'>              
              <div className='section-endinfo'>
                <p className='text-end'>{ enums.TEXT_AVISO }</p>
                <div className="switch-button">
                  <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"/>
                  <label htmlFor="switch-label" className="switch-button__label"></label>
                </div>
                <button className='btn-detail'>{ enums.BTN_CONT }</button>
              </div>
            </section>
          </main>
        </section>
        <footer className='footer-detail'>
          <h2 className='footer-title'>{ enums.TITLE_FOOTER }</h2>
          <main className='main-fdetail'>  
          { othersImmovables.map((othersImmovable)=> (
            <div key={ othersImmovable.id }>
              <CardComponent data={ othersImmovable } />
            </div>
          ))}
          </main> 
        </footer>        
      </main>
    </div>
  )
}

export default DetailComponent;