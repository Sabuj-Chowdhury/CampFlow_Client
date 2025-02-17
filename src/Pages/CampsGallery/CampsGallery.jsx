import SectionTitle from "../../Components/shared/SectionTitle/SectionTitle";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1661894592852-5cfb513eefb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fE1lZGljYWwlMjBjYW1wYWluZ3MlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1726485333460-de8e7ef4b29e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fE1lZGljYWwlMjBjYW1wYWluZ3MlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1664301862835-d500277d4bcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fE1lZGljYWwlMjBjYW1wYWluZ3MlMjBnYWxsZXJ5fGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661746550876-08772b846d9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fE1lZGljYWwlMjBjYW1wYWluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661595281880-59563ed648c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fE1lZGljYWwlMjBjYW1wYWluZ3N8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fE1lZGljYWwlMjBjYW1wYWluZ3N8ZW58MHx8MHx8fDA%3D",
];

const CampsGallery = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <SectionTitle heading="Campaigns Gallery" />
      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
        Explore moments from our past medical camps. These images showcase the
        dedication of our volunteers and the impact of our healthcare
        initiatives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampsGallery;
