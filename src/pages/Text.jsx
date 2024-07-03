import React from "react";
import data from "../data/productpage"

const EquipmentPage = () => {
  const {
    equipmentDescription,
    technicalSpecifications,
    services,
    customerReviews,
  } = data;

  return (
    <div className="container mx-auto p-4">
      <section className="bg-white p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{equipmentDescription.title}</h2>
        <p className="mb-4">{equipmentDescription.description}</p>
        <div className="flex justify-between">
          {equipmentDescription.details.map((detail, index) => (
            <span key={index} className="text-gray-600">
              {detail}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">
          {technicalSpecifications.title}
        </h2>
        <table className="table-auto w-full mb-4">
          <tbody>
            {technicalSpecifications.specifications.map((spec, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{spec.name}</td>
                <td className="py-2">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between">
          {technicalSpecifications.details.map((detail, index) => (
            <span key={index} className="text-gray-600">
              {detail}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{services.title}</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.items.map((service, index) => (
            <div key={index} className="bg-gray-100 p-2">
              <img src={service.image} alt={service.title} className="mb-2" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">{customerReviews.title}</h2>
        {customerReviews.reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
        <form className="bg-gray-100 p-4 rounded">
          <textarea
            className="w-full p-2 mb-2"
            placeholder="Ваш отзыв"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Оставить отзыв
          </button>
        </form>
      </section>
    </div>
  );
};

export default EquipmentPage;
