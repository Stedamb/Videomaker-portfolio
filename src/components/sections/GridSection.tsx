const GridSection = () => {
    return (
        <div className="GridSection py-16">
            <h1 className="">Portfolio</h1>
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eos beatae unde saepe voluptate tempore facilis dicta dolore consequatur temporibus! Doloribus beatae rem fugit amet harum quia, officiis ad veritatis?</p>
            <div className="grid grid-cols-2 gap-4 py-8">
                <video className="row-span-2 object-cover h-full cursor-hover play-pause rounded-xl" autoPlay muted loop>
                    <source src="/supernova.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
                <video className="cursor-hover play-pause rounded-xl" autoPlay muted loop>
                    <source src="/supernova.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
                <video className="cursor-hover play-pause rounded-xl" autoPlay muted loop>
                    <source src="/supernova.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
                {/* <video className="col-span-2 object-cover w-full h-1/2 cursor-hover play-pause rounded-xl" autoPlay muted loop>
                    <source src="/supernova.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video> */}
            </div>
            <div className="flex justify-center">
            <button className="group inline-flex items-center justify-center p-0.5 text-sm text-white rounded-lg bg-red-500 group-hover">
                <span className="px-5 py-2.5 transition-all ease-in duration-300 bg-black rounded-md">
                    Vedi tutti
                </span>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 transition-all ease-in-out duration-200 ms-2 mr-2 group-hover:mx-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            </div>
        </div>

    );
};

export default GridSection;
