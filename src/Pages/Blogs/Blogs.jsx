import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";

const blogData = [
  {
    id: 1,
    title: "How Medical Camps Are Changing Lives",
    date: "Feb 10, 2025",
    image:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG93JTIwTWVkaWNhbCUyMENhbXBzJTIwQXJlJTIwQ2hhbmdpbmclMjBMaXZlc3xlbnwwfHwwfHx8MA%3D%3D",
    excerpt:
      "Discover how free medical camps are providing essential healthcare services to underserved communities...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },

  {
    id: 2,
    title: "The Importance of Regular Health Checkups",
    date: "Jan 25, 2025",
    image:
      "https://plus.unsplash.com/premium_photo-1666299782234-f2685062abee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwSW1wb3J0YW5jZSUyMG9mJTIwUmVndWxhciUyMEhlYWx0aCUyMENoZWNrdXBzfGVufDB8fDB8fHww",
    excerpt:
      "Regular health checkups can detect problems early and save lives. Learn why attending a medical camp is beneficial...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },
  {
    id: 3,
    title: "Volunteering in Medical Camps: A Rewarding Experience",
    date: "Dec 15, 2024",
    image:
      "https://plus.unsplash.com/premium_photo-1726876833594-4872d66e6c00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Vm9sdW50ZWVyaW5nJTIwaW4lMjBNZWRpY2FsJTIwQ2FtcHMlM0ElMjBBJTIwUmV3YXJkaW5nJTIwRXhwZXJpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    excerpt:
      "Meet volunteers who are making a difference by helping doctors and patients in remote locations...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },
  {
    id: 4,
    title: "Success Stories from Medical Camps",
    date: "Nov 20, 2024",
    image:
      "https://plus.unsplash.com/premium_photo-1661727694264-777047d6eaef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VjY2VzcyUyMFN0b3JpZXMlMjBmcm9tJTIwTWVkaWNhbCUyMENhbXBzfGVufDB8fDB8fHww",
    excerpt:
      "Hear inspiring stories of individuals whose lives were transformed through medical interventions at camps...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },
  {
    id: 5,
    title: "How to Organize a Successful Medical Camp",
    date: "Oct 10, 2024",
    image:
      "https://plus.unsplash.com/premium_photo-1733306621909-1d63c088a93e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG93JTIwdG8lMjBPcmdhbml6ZSUyMGElMjBTdWNjZXNzZnVsJTIwTWVkaWNhbCUyMENhbXB8ZW58MHx8MHx8fDA%3D",
    excerpt:
      "Planning a medical camp? Here are essential tips and steps to ensure its success and impact...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },
  {
    id: 6,
    title: "The Role of Technology in Medical Camps",
    date: "Sep 5, 2024",
    image:
      "https://plus.unsplash.com/premium_photo-1723921222866-00e9df5cdab0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwUm9sZSUyMG9mJTIwVGVjaG5vbG9neSUyMGluJTIwTWVkaWNhbCUyMENhbXBzfGVufDB8fDB8fHww",
    excerpt:
      "From telemedicine to digital records, explore how technology is enhancing healthcare delivery in camps...",
    link: "https://timesofindia.indiatimes.com/india/health-camps-a-tool-for-private-hospitals-to-hike-occupancy/articleshow/115875971.cms",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Campaign Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{blog.date}</p>
              <p className="text-gray-700 mt-2 flex-grow">{blog.excerpt}</p>
              <div className="mt-5 flex md:justify-center justify-start">
                <a
                  href={blog.link}
                  target="_blank"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded text-center"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
