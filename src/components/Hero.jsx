import { BiSearch } from "react-icons/bi";

const Hero = () => {
    return ( 
        <section className="min-h-96 flex flex-col gap-12 justify-center items-center bg-hero-image bg-contain bg-no-repeat">
            <div className="flex lg:w-2/6 md:w-3/6 gap-2 items-center justify-center">
                <input name="search" placeholder="Type Category, Title.." className="w-full border-black text-xl md:border-b-0 border-b pb-3 focus:border-b hover:border-b transition-all ease-in-out outline-none bg-transparent" />
                <BiSearch size={25} />
            </div>
            <h1 className="md:text-5xl text-3xl font-bold md:text-start text-center md:px-4 px-2">Feel free to indulge in a minute of read.</h1>
        </section>
     );
}
 
export default Hero;