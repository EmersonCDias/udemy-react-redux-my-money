import React from 'react'

 const MenuItem = ({ path, icon, label }) => (
  <li>
    <a href={path}>
      <i className={`fa fa-${icon}`} />
      {label}
    </a>
  </li>
)

export default MenuItem