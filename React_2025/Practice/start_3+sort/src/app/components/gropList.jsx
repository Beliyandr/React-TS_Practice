import React from 'react'

export const GropList = ({ items, valuePropery, contentProperty, onItemSelect, selectedItem }) => {

  return (
    <ul className="list-group">
      {Object.keys(items).map((item, index) => (

        <li
          key={items[item][valuePropery] || index + Math.random()}
          className={"list-group-item" + (selectedItem === items[item] ? ' active' : '')}
          aria-current="true"
          role='button'
          onClick={() => onItemSelect(items[item])}
        >
          {items[item][contentProperty]}
        </li>
      ))}

    </ul>
  )
}
