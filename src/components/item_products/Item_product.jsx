import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';

const Item_product = (props) => {
    return (
        <>
            <div className='flex  justify-between w-full mb-8'>
                <div className='flex gap-2'>
                    <input 
                        type='checkbox'
                        className='accent-skin-base'/> 
                    <h4>{props.name}</h4>
                </div>

                <p>
                    {props.characteristics}
                </p>

                <span>$ {props.price}</span>

                <div className=' flex gap-2'>
                    <button 
                        className='bg-gray-400 text-white p-1 rounded-lg'>
                        <PencilIcon className='h4 w-4'/>
                    </button>
                    <button 
                        className='bg-gray-400 text-white p-1 rounded-lg'>
                        <TrashIcon className='h4 w-4'/>
                    </button>
                    <button 
                        className='bg-gray-400 text-white p-1 rounded-lg'>   
                        <EyeIcon className='h4 w-4'/>
                    </button>
                </div>
            </div>
        
        </>
    );
};

export default Item_product;
