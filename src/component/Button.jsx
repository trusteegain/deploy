import React from 'react'



const Button = ({tiktok, message }) => {
  return (
    <>
    <button>
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
          
           {tiktok}
            </div>
        </div>
        <span>{message}</span> 
</button>
    </>
  )
}

export default Button