/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function ServicesCard({services}) {
    
  return (
    <section className="py-12 bg-gray-800 cursor-pointer">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 object-contain rounded-full border-2 border-gray-200"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default ServicesCard;