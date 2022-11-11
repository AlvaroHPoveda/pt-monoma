import React from 'react'

import { getAllImmovables } from '../../api/data.api';
import CardComponent from '../../assets/shared/card.component';

import { enums } from '../../assets/i18n/enum'
import './index.component.scss';

const IndexComponent = () => {
  const immovables = getAllImmovables();
  return (
    <div className='container-index'>
      <header className='header-index'>  
        <img src={ enums.URL_GROCASA } className='header-img-index' alt="Grocasa.png" />
      </header>      
      <main className='main-index'>  
      { immovables.map((immovable) =>   
        <div key={ immovable.id }>
          <CardComponent data={ immovable } />
        </div>  
      )}
      </main>     
    </div>
  )
}

export default IndexComponent;