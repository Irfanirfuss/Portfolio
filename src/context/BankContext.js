import React from 'react'

const BankContext = React.createContext({
  admin: 'nonAdmin',
  changeAdmin: () => {},
})

export default BankContext
