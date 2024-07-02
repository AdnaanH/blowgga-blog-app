import { getNews } from "@/lib/data";

export const GET = async (res) => {
  try {
    console.log("Fetching news...");
    const news = await getNews();
    console.log("News fetched successfully:", news);
    res.status(200).json(news);
  } catch (err) {
      console.error("Error fetching news:", err);
      res.status(500).json({ message: "Failed to fetch news" });
  }
  
}
