import Link from "next/link";
import BookingForm from "../ui/BookingForm";
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">

    

      {/* Our Services */}
    

      {/* About Us */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          We are a locally owned and operated remodeling business serving the
          Pierce County area. With years of experience in the construction and
          restoration industry, we are passionate about helping homeowners bring
          their visions to life. Our team is committed to delivering
          high-quality work and ensuring customer satisfaction on every project.
        </p>
      </section>
      <BookingForm />
    </div>
  );
}
