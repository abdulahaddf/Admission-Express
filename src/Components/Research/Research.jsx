import { Link } from "react-router-dom";

const Research = () => {
  const researchPapers = [
    {
      title: "Advancements in Biotechnology",
      author: " John Smith",
      publicationDate: "June 2022",
      link: "https://example.com/paper1.pdf",
      readingTime: "10 mins", // Estimated reading time
      description:
        "This paper explores recent breakthroughs and innovations in the field of biotechnology, discussing their potential applications and impact on various industries and scientific research.",
    },
    {
      title: "Sustainable Energy Solutions",
      author: " Emily Johnson",
      publicationDate: "January 2023",
      link: "https://example.com/paper2.pdf",
      readingTime: "12 mins", // Estimated reading time
      description:
        "Examining the current state of sustainable energy solutions, this paper delves into renewable energy sources, energy efficiency, and policy measures to address the global energy challenges.",
    },
    {
      title: "Artificial Intelligence in Healthcare",
      author: " Sarah Lee",
      publicationDate: "September 2022",
      link: "https://example.com/paper3.pdf",
      readingTime: "15 mins", // Estimated reading time
      description:
        "This paper investigates the role of artificial intelligence in revolutionizing healthcare systems, including diagnosis, treatment, and patient care, with a focus on the potential benefits and ethical considerations.",
    },
    {
      title: "Climate Change and Global Impact",
      author: " Michael Adams",
      publicationDate: "November 2022",
      link: "https://example.com/paper4.pdf",
      readingTime: "8 mins", // Estimated reading time
      description:
        "Addressing the urgent issue of climate change, this paper provides an overview of its global impact, discusses mitigation strategies, and emphasizes the need for international cooperation to combat this challenge.",
    },
    {
      title: "Innovations in Robotics",
      author: " Robert Davis",
      publicationDate: "March 2023",
      link: "https://example.com/paper5.pdf",
      readingTime: "11 mins", // Estimated reading time
      description:
        "This paper explores recent innovations in the field of robotics, including advancements in artificial intelligence, sensors, and actuators, and discusses their applications in industries such as manufacturing, healthcare, and exploration.",
    },
    {
      title: "Advancements in Nanotechnology",
      author: " Elizabeth Wilson",
      publicationDate: "May 2023",
      link: "https://example.com/paper6.pdf",
      readingTime: "9 mins", // Estimated reading time
      description:
        "Focusing on nanotechnology, this paper highlights recent advancements in the manipulation and application of materials at the nanoscale, with potential breakthroughs in medicine, electronics, and environmental science.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="heading ">Research Papers</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {researchPapers.map((rec) => (
          <div
            data-aos="zoom-in-up"
            key={rec.title}
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <Link
                  to="#"
                  className="text-lg font-bold text-gray-900 sm:text-xl"
                >
                  {rec.title}
                </Link>

                <p className="mt-1 text-lg font-medium text-gray-600">
                  {rec.author}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {rec.description}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">{rec.publicationDate}</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">{rec.readingTime}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
