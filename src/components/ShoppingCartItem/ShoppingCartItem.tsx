

function ShoppingCartItem() {
  return (
    <div className='w-full grid grid-cols-3 mt-5 pb-6 border-b border-gray-100 '>
        <div className='col-span-1 '>
            <img src="/images/products/p1.png" alt="" />
        </div>
        <div className='col-span-2 flex flex-col gap-5 '>
            <div className='font-danaMedium text-base text-[#3F3F46] dark:text-white'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</div>
            <div className='flex  space-x-5 items-center'>
                <div className='w-[90px] h-[44px] border border-gray-100 rounded-2xl flex justify-center items-center font-danaDemiBold text-orange-300 space-x-2.5'>
                    <button className='text-xl cursor-pointer'>+</button>
                    <span className=' text-xl tracking-tighter'>2</span>
                    <button className='text-xl cursor-pointer'>-</button>
                </div>
                <div>
                    <div className='font-danaMedium text-xs text-[#0D9488]'>
                        <span>14500</span>
                        <span>تومان تخفیف</span>
                    </div>
                    <div className='text-[#3F3F46] dark:text-white'>
                        <span className='text-xl font-danaDemiBold'>175000</span>
                        <span className='text-sm font-danaRegular'>تومان</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ShoppingCartItem