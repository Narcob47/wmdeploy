import { COLORS } from '../../constants/colors';

const NewArrivals = () => {
  const books = [
    {
      title: "Win-Win",
      price: "K34.00",
      imageUrl: "/assets/2.png",
    },
    {
      title: "Milo",
      price: "K30.00",
      imageUrl: "/assets/2.png",
    },
    {
      title: "Ovaltine",
      price: "K32.00",
      imageUrl: "/assets/2.png",
    },
  ];

  return (
    <section className="py-16 text-center">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">New Arrivals</h2>
      <p style={{ color: COLORS.black }} className="text-gray-500 mt-4 max-w-xl mx-auto">Check out our latest books and resources.</p>
      <div className="mt-8 flex space-x-4 justify-center">
        {books.map((book, i) => (
          <div key={i} className="bg-white shadow-lg p-4 rounded-lg">
            <img src={book.imageUrl} alt={book.title} className="mx-auto w-[20rem]" />
            <h3 style={{ color: COLORS.black }} className="mt-4 font-semibold">{book.title}</h3>
            <p style={{ color: COLORS.black }} className="text-gray-500">{book.price}</p>
            <button style={{ backgroundColor: COLORS.button }}  className="mt-4 text-white px-4 py-2 rounded-lg">Download</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
