import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ImagePreviewInput = ({handleImageChange, productData}) => {
    const [images, setImages] = useState([])
    const [imageURLs, setImageURLs] = useState([])

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = []
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images])

    const onImageChange = (e) => {
        setImages([...e.target.files])
    }

    const handleInputFileChange = (e) => {
      //  Call both onImageChange and handleChange events
      onImageChange(e)
      handleImageChange(e)
    }
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <label
          htmlFor="product_image"
          className="text-sm ml-1 mb-2 font-semibold"
        >
          Product Image
        </label>
        <input
          onChange={handleInputFileChange}
          name='product_images'
          type='file'
          formEncType='multipart/form-data'
          multiple
          value={productData.product_image}
          accept="image/*"
          className="border p-2 rounded-lg"
        />
        <div className='flex mt-4 space-x-3'>
            {
                imageURLs.map((imageSrc, index)=> {
                    return (
                      <AnimatePresence>
                        <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0, rotate: '12.5deg'}}
                        animate={{ opacity: 1, scale: 1, rotate: '0deg'}}
                        exit={{ opacity: 0, scale: 0, rotate: '0deg'}}
                        className='sm:h-40 w-40 border p-2 shadow-lg rounded-md bg-gray-300'>
                          <motion.div 
                          className='h-full w-full'
                          >
                            <img alt='' src={imageSrc} className='h-full w-full object-contain object-center'/>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    )
                })
            }
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImagePreviewInput
