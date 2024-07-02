import NewsCard from "@/components/NewsCard"

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/news", { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

const LatestNews = async () => {
    const news = await getData();

    return ( 
        <section className="flex flex-col gap-4">
            <h1>Top News</h1>
            <div className="grid grid-cols-3 py-6 px-16">
                {news.map((article, index) => (
                    <NewsCard article={article} key={index} />
                ))}
            </div>
        </section>
     );
}
 
export default LatestNews;