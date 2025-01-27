import React from "react";
import Image from "next/image";

interface Post {
  image: string;
  title: string;
  description: string;
  date: string;

  id: number;
}
const posts: Post[] = [
  {
    image: "/post1.png",
    title:
      "Insights Uncovered: A Deep Dive into the World of Knowledge, Trends, and Ideas",
    description: `Welcome to Insights Uncovered, where curiosity meets knowledge and thought-provoking content. In today's fast-paced world, staying informed and embracing new perspectives is essential for personal growth. Our platform offers you an ever-expanding pool of knowledge across various fields, including technology, philosophy, business, and more. Whether you're an aspiring entrepreneur, a lifelong learner, or someone just looking for fresh ideas, we have something for everyone. 

      As the world evolves, so do the trends and ideas that shape our lives. In this blog, we dive deep into these trends—identifying their origins, their current impact, and their potential future influence. Our goal is to provide readers with the insights needed to make informed decisions, both personally and professionally. From emerging technologies like artificial intelligence and blockchain to societal changes such as sustainability and social justice, we explore the forces driving the world forward.

      In our rapidly changing digital landscape, its crucial to stay updated. With our dedicated team of researchers, writers, and contributors, Insights Uncovered ensures that you always have access to high-quality, reliable, and relevant content. Our articles are designed to not only inform but also engage readers in meaningful conversations that extend beyond the screen.

      Join us as we take a deep dive into the fascinating world of knowledge, trends, and ideas. Stay tuned for expert analyses, interviews with industry leaders, and practical advice on navigating the complexities of todays world. Whether you are seeking to broaden your perspective or find innovative solutions to everyday challenges, Insights Uncovered will guide you through the maze of information, helping you discover what matters most. Get ready for an enlightening journey!`,
    date: "22 April 2021",

    id: 1,
  },
  {
    image: "/post2.png",
    title:
      "Exploring the Future of Technology: Trends That Will Shape Tomorrow",
    description: `The future of technology is an exciting yet uncertain territory. With each passing day, advancements in fields such as artificial intelligence, machine learning, quantum computing, and biotechnology are revolutionizing industries across the globe. In this post, we delve into some of the most anticipated technological trends that will shape our tomorrow.

      Artificial intelligence (AI) has been at the forefront of technological progress in recent years, and its potential is vast. From self-driving cars to intelligent virtual assistants, AI promises to enhance our lives in ways we never imagined. But what does the future hold for this technology? How will AI transform industries like healthcare, manufacturing, and finance? We explore these questions and more.

      Quantum computing is another groundbreaking development that could change the way we solve complex problems. With the power to process vast amounts of data at unimaginable speeds, quantum computers hold the key to solving problems that current computers cannot. But what does this mean for fields such as cybersecurity, drug discovery, and cryptography? We take a deep dive into the world of quantum computing and its implications for the future.

      Biotechnology is also making strides in areas like gene editing, personalized medicine, and sustainable agriculture. The ability to manipulate biological systems at the molecular level could lead to breakthroughs in healthcare, food production, and environmental conservation. In this post, we explore the potential of biotech to address some of humanitys most pressing challenges.

      Join us as we explore these exciting trends and speculate on how they will reshape our world in the years to come. The future is closer than we think, and staying ahead of these innovations is key to staying competitive in an ever-changing world.`,
    date: "15 May 2021",

    id: 2,
  },
  {
    image: "/post3.png",
    title: "The Role of Sustainability in Building a Better Future",
    description: `Sustainability has become more than just a buzzword—it's a movement that is reshaping how we think about the environment, society, and the economy. From climate change to resource depletion, the challenges we face are undeniable, but so are the solutions. In this post, we explore the role of sustainability in shaping a better future for all.

      At its core, sustainability is about meeting the needs of the present without compromising the ability of future generations to meet their own needs. This principle is not only important for environmental conservation but also for ensuring social equity and economic stability. Sustainable practices are now being integrated into every aspect of society, from agriculture and energy to transportation and urban planning.

      Climate change is one of the most pressing issues we face, and transitioning to renewable energy sources like solar and wind power is critical to reducing our carbon footprint. We take a look at the innovations driving this shift and the impact they are having on the global economy.

      Another key area of focus is the circular economy, which aims to minimize waste and maximize resource efficiency. By designing products with their entire lifecycle in mind—from creation to disposal—businesses can reduce their environmental impact while also generating economic value.

      In addition to environmental sustainability, social sustainability is equally important. Creating equitable opportunities for marginalized communities and ensuring that economic growth benefits everyone are essential to building a fairer, more just society. We explore the role of education, healthcare, and responsible business practices in achieving social sustainability.

      Join us as we delve into the world of sustainability and discover how we can collectively build a better future for the generations to come.`,
    date: "7 Dec 2021",
    id: 3,
  },
];

const BlogPage = ({
  params: { blogdata },
}: {
  params: { blogdata: number };
}) => {
  const blog = posts.find((data: Post) => data.id == blogdata) as Post;
  return (
    <div className="flex flex-col items-center bg-blue-300 min-h-screen">
      <div className="max-w-4xl w-full bg-orange-200 shadow-2xl rounded-lg overflow-hidden mt-12 mb-12">
        <div className="flex justify-center mt-6">
          <Image
            src={blog.image}
            alt={blog.title}
            className="object-cover"
            width={400}
            height={500}
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-pink-900 mb-4 text-center underline">
            {blog.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{blog.description}</p>
          <div className="flex justify-between items-center text-sm  font-semibold text-blue-700">
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
