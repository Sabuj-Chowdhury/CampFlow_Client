import SectionTitle from "../shared/SectionTitle/SectionTitle";

const Partners = () => {
  const partners = [
    {
      name: "Global Health Org",
      logo: "https://cdn.who.int/media/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2",
      description:
        "Committed to global healthcare initiatives and sustainable solutions.",
    },
    {
      name: "Medical Aid Foundation",
      logo: "https://medaid.co.uk/wp-content/uploads/2021/05/Medaid-Logo.png",
      description:
        "Providing life-saving medical aid to underserved communities worldwide.",
    },
    {
      name: "Health First",
      logo: "https://seeklogo.com/images/H/healthfirst-logo-3F50B92FC5-seeklogo.com.png",
      description:
        "Supporting communities with accessible and affordable healthcare services.",
    },
    {
      name: "Wellness Alliance",
      logo: "https://lirp.cdn-website.com/aaa8a721/dms3rep/multi/opt/52428a5-270w.png",
      description:
        "Advancing mental health awareness and wellness programs globally.",
    },
    {
      name: "Lifeline Charities",
      logo: "https://www.lifelines-international.org/wp-content/uploads/2022/09/logo.png",
      description:
        "Offering emergency medical support and disaster relief services.",
    },
    {
      name: "Cure Together",
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/v1397199836/dea373c2af984e1347dc7fb2dc839df0.gif",
      description:
        "Collaborating with researchers to develop innovative healthcare solutions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Our Valued Partners & Sponsors" />
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        We are proud to collaborate with organizations dedicated to improving
        global health and well-being.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl text-center border border-gray-200 transition hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="mx-auto mb-4 h-24 w-24 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {partner.name}
            </h3>
            <p className="text-gray-500 mt-2">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
