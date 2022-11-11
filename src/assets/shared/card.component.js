import React from 'react'
import { Link } from 'react-router-dom';

import { WEB_MATERIAL11, WEB_MATERIAL10, WEB_MATERIAL09 } from '../material_web';
import { enums } from '../i18n/enum'

import './card.component.scss';

const CardComponent = ( { data } ) => {
    const imgStyles = { backgroundImage: `url(${data.img})`};
  return (
    <section className="card">
        <div >
            <div style={ imgStyles } className='card-img-top'></div>
        </div>        
        <article className="card-body">
            <header>
                <h5 className="card-title">{ data.title }</h5>
                <p className="card-text">{ data.description }</p>
            </header>
            <main className='main-card-index'>
                <section className='icon-card-index'>
                    <article>
                        <img src={ WEB_MATERIAL11 } alt="WEB_MATERIAL11" className='icon-img' />
                        <p className='number-area'>{ data.area }</p>
                    </article>
                    <article>
                        <img src={ WEB_MATERIAL10 } alt="WEB_MATERIAL10" className='icon-img' />
                        <p>{ data.room }</p>
                    </article>
                    <article>
                        <img src={ WEB_MATERIAL09 } alt="WEB_MATERIAL09" className='icon-img' />
                        <p>{ data.bathroom }</p>
                    </article>
                </section>
                <section>
                    <h2 className='price-index'>{ data.price }</h2>
                </section>
                <Link
                className='section-btn-index'
                to={`/immovable/${data.id}`}
                key={ data.id }
                >
                    <button className='btn-index'>{ enums.BTN_INFO }</button>
                </Link>
            </main>
        </article>        
    </section>
  )
}

export default CardComponent