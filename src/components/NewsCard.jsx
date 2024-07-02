import Image from "next/image";
import Link from "next/link";

const NewsCard = ({article}) => {
    return ( 
        <div className="shadow-md flex flex-col items-center p-4 w-[310px] h-[350px]">
            <Image 
                src={article.urlToImage}
                alt={article.title}
                width={300}
                height={320}
            />
            <h1 className="font-bold text-blue-700">{article.title}</h1>
            <p>{article.description}</p>
            <Link className="text-red-600 underline" href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</Link>
        </div>
     );
}
 
export default NewsCard;