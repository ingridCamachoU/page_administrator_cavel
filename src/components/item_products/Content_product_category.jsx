import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Content_product_category = ({children}) => {
    return (
        <div className="flex mt-10 flex-col items-start w-4/5 p-8 drop-shadow-md bg-skin-ligth rounded-lg">
            <div className='flex mb-8 w-full justify-between'>
                <h1 className='font-bold text-lg'>hamburguesa</h1>
                <ChevronDownIcon className='h-5 w-5 '/>
            </div>
            {children}
        </div>
    );
};

export default Content_product_category;
