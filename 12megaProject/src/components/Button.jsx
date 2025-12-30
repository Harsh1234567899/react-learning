import React from 'react'

function Button({text , type='button' ,bgColour = 'bg-blue-600', textCalor = 'text-white' ,className = '',...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColour} ${textCalor} ${className}`} {...props} >
        {text}
    </button>
  )
}

export default Button