
import { IoIosArrowBack } from "react-icons/io";
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

function ShoppingCart() {
  return (
    <div className='absolute top-full -left-5 rounded-none lg:rounded-2xl py-4 lg:px-2 lg:border-t-[3px]
      lg:border-orange-300 flex flex-col  w-[400px] h-screen lg:h-[470px] bg-white dark:bg-zinc-800 overflow-auto'>
        <div className='flex justify-between items-center font-danaMedium text-xs tracking-tighter px-3 py-1'>
            <span className='text-[#D1D5DB]'>1 مورد</span>
            <a href="#" className='flex items-center  space-x-0.5 text-orange-300'>
                <span className=''>مشاهده سبد خرید</span>
                <IoIosArrowBack/>
            </a>
        </div>
        <div className='mb-auto '>
            <ShoppingCartItem/>
            <ShoppingCartItem/>
            
        </div>
        <div className='flex items-center justify-between px-3'>
            <div className='flex flex-col '>
                <span className='font-danaMedium text-xs text-[#D1D5DB] tracking-tighter'>مبلغ قابل پرداخت</span>
                <div>
                    <span className='flex items-center space-x-0.5 text-[#3F3F46] dark:text-white'>
                        <span className='font-danaDemiBold text-xl '>350000</span>
                        <span className='font-danaRegular text-sm'>تومان</span>
                    </span>
                </div>
            </div>
            <a href="#" className='flex justify-center items-center text-white transition-all bg-[#0D9488] hover:bg-[#0F766E] w-[144px] h-[56px] rounded-xl tracking-tighter font-danaRegular text-xl'>
                ثبت سفارش
            </a>
        </div>
    </div>
  )
}

export default ShoppingCart