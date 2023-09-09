// import React from 'react'

// const page = () => {
//     return (
//         <div className='bg-purple-50 p-10'>
//             <div className='container flex flex-col md:flex-row justify-center items-center text-center my-10'>
//                 <img className="w-[486px] h-[580px] rounded-lg m-5 md:order-2" src="https://via.placeholder.com/486x580" />
//                 <div className='justify-center items-center text-center md:order-1'>
//                     <div className="w-[600px] text-indigo-900 text-[53px] font-semibold tracking-wide font-bodoni-moda">Our Story</div>
//                     <div className=" p-10w-40 md:w-[547px] text-slate-400 md:text-[17px] leading-7 font-lato py-5 "><br />Step into a world of captivating tales as you explore the enchanting story behind our silver jewelry collection. Each piece in our assortment holds a unique narrative inspired by the beauty of nature, the allure of ancient civilizations, and the brilliance of human emotions. Our designs are intricately crafted to symbolize love, strength, and timeless elegance, reflecting the essence of the wearer. From delicate silver pendants that whisper tales of everlasting romance to bold statement rings that embody empowerment and confidence, every creation narrates a story that resonates with your individual journey. Discover the artistry, passion, and craftsmanship woven into each silver treasure, making them not just exquisite adornments, but cherished keepsakes of your unforgettable moments. Embrace the magic of our jewelry, where every flicker of silver unfolds a captivating story waiting to be cherished and shared for generations to come.</div>
//                 </div>
//             </div>

//             <br />

//             <div className='conteiner flex flex-col md:flex-row justify-center items-center text-center my-10'>
//                 <img className="w-[486px] h-[580px] rounded-lg m-5 md:order-2" src="https://via.placeholder.com/486x580" />
//                 <div className='justify-center items-center text-center md:order-2 ml-10'>
//                     <div className="w-[600px] text-indigo-900 text-[53px] font-semibold tracking-wide font-bodoni-moda">Our Values</div>
//                     <div className="p-10 md:w-[547px] text-slate-400 md:text-[17px] font-lato py-5 pl-7"><br />Welcome to our Silver Gem Jewllery, where we offer an exquisite collection of silver jewelry that embodies timeless elegance and craftsmanship. Our core values revolve around delivering exceptional quality and beauty in every piece we create. We believe in celebrating individuality and style, and our diverse range of designs caters to every taste and occasion. With a strong focus on sustainability, we source our materials responsibly to ensure a positive impact on the environment and communities. Our passion for creating stunning silver jewelry is matched only by our dedication to providing exceptional customer service, making your shopping experience with us truly memorable. Explore our stunning collection and discover the perfect silver pieces that will complement your unique personality and style. </div>
//                 </div>
//             </div>

            
//         </div>
//     )
// }

// export default page


import React from 'react';

const Page = () => {
    return (
        <div className='bg-purple-50 p-10'>
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center text-center my-10'>
                <img className="w-[486px] h-[580px] rounded-lg m-5 md:order-2" src="https://via.placeholder.com/486x580" alt="Our Story" />
                <div className='md:order-1 md:w-[486px] md:pr-10'>
                    <div className="text-indigo-900 text-4xl font-semibold tracking-wide font-bodoni-moda mb-8">Our Story</div>
                    <div className="text-slate-400 text-lg leading-7 font-lato">
                        Step into a world of captivating tales as you explore the enchanting story behind our silver jewelry collection. Each piece in our assortment holds a unique narrative inspired by the beauty of nature, the allure of ancient civilizations, and the brilliance of human emotions. Our designs are intricately crafted to symbolize love, strength, and timeless elegance, reflecting the essence of the wearer. From delicate silver pendants that whisper tales of everlasting romance to bold statement rings that embody empowerment and confidence, every creation narrates a story that resonates with your individual journey. Discover the artistry, passion, and craftsmanship woven into each silver treasure, making them not just exquisite adornments but cherished keepsakes of your unforgettable moments. Embrace the magic of our jewelry, where every flicker of silver unfolds a captivating story waiting to be cherished and shared for generations to come.
                    </div>
                </div>
            </div>

            <br />

            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center text-center my-10'>
                <img className="w-[486px] h-[580px] rounded-lg m-5 md:order-2" src="https://via.placeholder.com/486x580" alt="Our Values" />
                <div className='md:order-2 md:w-[486px] md:pl-10'>
                    <div className="text-indigo-900 text-4xl font-semibold tracking-wide font-bodoni-moda mb-8">Our Values</div>
                    <div className="text-slate-400 text-lg leading-7 font-lato">
                        Welcome to our Silver Gem Jewelry, where we offer an exquisite collection of silver jewelry that embodies timeless elegance and craftsmanship. Our core values revolve around delivering exceptional quality and beauty in every piece we create. We believe in celebrating individuality and style, and our diverse range of designs caters to every taste and occasion. With a strong focus on sustainability, we source our materials responsibly to ensure a positive impact on the environment and communities. Our passion for creating stunning silver jewelry is matched only by our dedication to providing exceptional customer service, making your shopping experience with us truly memorable. Explore our stunning collection and discover the perfect silver pieces that will complement your unique personality and style.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
