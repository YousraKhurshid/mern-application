import React, { useState, useEffect } from 'react';

export default function ImageSection({ images }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setImg(images[0]);
    }
  }, [images]);

  const changeImage = (index) => {
    setImg(images[index])
  }
    return (
    <>
      <div className="container w-75">
        <img src={img} alt="" className="img-fluid mb-5" />
         
      </div>
      <div className='d-flex align-items-center gap-3 bg-light border border-dark p-2 rounded mb-5'>
        {
          images?.map((val,key)=> 
            <div className={img == images[key] ? ('border border-dark rounded-circle p-2') : (null)} onClick={()=>changeImage(key)} key= {key}>
             <img style={{width:'15vw', height:'15vh'}} className='rounded-circle img-fluid' src={ val } alt={`img-${key}`}/>
            </div>
          )
        }
        </div>
    </>
  )
}
