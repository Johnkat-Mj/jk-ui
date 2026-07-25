

export const LeftAbout = () => {
    return (
        <div className="max-w-md mx-auto lg:max-w-none lg:mx-0 w-11/12 md:w-1/2 md:h-auto  lg:pr-10 xl:pr-20">
            <div className="w-full h-80 xs:h-88 sm:h-96 lg:h-full relative">
                <div className="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-linear-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
                <div className="absolute  p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-linear-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute w-full h-full bg-linear-to-tl from-primary to-secondary-400 clippathtripzoide2"></div>
                <img src={"/images/devwithc1.webp"} alt="banner image" 
                width={1240} height={1385}
                className=" w-auto left-1/2 -translate-x-1/2 absolute bottom-0" />
            </div>
        </div>
    )
}

export default LeftAbout
