import React from 'react'
import ItemOnScreen from './ItemOnScreen'

function Items({items}) {

    if(!items.length) return <p>Sorry, no items to display</p>

    return (
        <div className='itemsScreen'>
            {items.map(item => {
                <ItemOnScreen item={item} />
            })}
        </div>
    )



}


export default Items;