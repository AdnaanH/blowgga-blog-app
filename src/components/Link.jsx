import { useState, useEffect } from "react";
import Link from "next/link";

const Links = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/categories", { next: { revalidate: 3600 } });
                
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                
                const data = await res.json();
                setLinks(data);
            } catch (error) {
                console.error("Error fetching links:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {links.map((category) => (
                <Link href={`/category/${category.slug}`} key={category._id}>
                    {category.title}
                </Link>
            ))}
        </>
    );
};

export default Links;
