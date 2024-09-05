import React from 'react'

const MenuItem = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
            <div className='text-center flex justify-center'>
                <img src="/pizza.png" alt="pizza" className='max-h-24 '/>
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptate adipisci quae.
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
                Add to cart $12
            </button>
        </div>
    )
}

export default MenuItem