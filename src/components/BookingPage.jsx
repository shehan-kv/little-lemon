import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";

function BookingPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", backgroundColor: "#495e57" }}>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
