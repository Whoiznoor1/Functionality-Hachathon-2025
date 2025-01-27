import Image from "next/image";
import Link from "next/link";

export default function LastDiv() {
  const posts = [
    {
      image: "/post1.png",
      title:
        "Insights Uncovered: A Deep Dive into the World of Knowledge, Trends, and Ideas",
      description: `Welcome to Insights Uncovered, where curiosity meets knowledge and thought-provoking content. In today's fast-paced world, staying informed and embracing new perspectives is essential for personal growth. Our platform offers you an ever-expanding pool of knowledge across various fields, including technology, philosophy, business, and more....`,
      date: "22 April 2021",
      comments: 15,
      id: 1,
    },
    {
      image: "/post2.png",
      title:
        "Exploring the Future of Technology: Trends That Will Shape Tomorrow",
      description: `The future of technology is an exciting yet uncertain territory. With each passing day, advancements in fields such as artificial intelligence, machine learning, quantum computing, and biotechnology are revolutionizing industries across the globe. In this post, we delve into some of the most anticipated technological trends that will shape our tomorrow....
  `,
      date: "15 May 2021",
      comments: 16,
      id: 2,
    },
    {
      image: "/post3.png",
      title: "The Role of Sustainability in Building a Better Future",
      description: `Sustainability has become more than just a buzzword—it's a movement that is reshaping how we think about the environment, society, and the economy. From climate change to resource depletion, the challenges we face are undeniable, but so are the solutions. In this post, we explore the role of sustainability in shaping a better future for all....`,
      date: "7 Dec 2021",
      id: 3,
      comments: 10,
    },
  ];

  return (
    <div className="bg-blue-500 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-12 ">
        <p className="text-blue-500 text-sm font-semibold tracking-wider leading-10">
          Practice Advice
        </p>
        <h2 className=" font-bold text-gray-800 underline tracking-wider text-[40px]">
          Featured <br className="sm:hidden" /> Posts
        </h2>
        <p className="text-sm tracking-wider font-medium  text-gray-900  text-center m-auto">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className=" w-[78%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-20">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="bg-orange-200 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image} // Use the image directly
                alt={`Post ${index + 1}`}
                width={400}
                height={250}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 bg-red-500 text-white text-sm font-semibold uppercase px-3 py-0.5 rounded">
                New
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-900 mt-3 tracking-wide text-center">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-gray-900 ml-1 tracking-widest">
                {post.description}
              </p>
              <div className="mt-4 flex flex-col text-gray-500 text-sm">
                <div className="flex items-center justify-between space-x-2">
                  <span className="flex justify-between items-center text-xs mt-2 ">
                    <svg
                      className="h-4 w-4 mr-1 text-blue-950"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                    </svg>
                    <div className="font-semibold">{post.date}</div>
                  </span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-7 font-semibold hover:underline text-blue-500 hover:text-blue-400"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
