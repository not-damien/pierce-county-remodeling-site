import { Button, Card, CardContent, TextField } from "@mui/material";
import Image from "next/image";
import type { Metadata } from 'next'
import BookingForm from "./ui/BookingForm";
 
export function generateMetadata(): Metadata {
  return {
    title: 'Pierce County Remodeling',
    description:"Whether you're looking to update your kitchen, remodel your bathroom, or give your entire home a facelift, we're here to help. Our experienced team is dedicated to providing top-quality craftsmanship and customer service."

  }
}
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
    {/* Hero Section */}
    <header className="bg-blue-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Pierce County Remodeling!</h1>
        <p className="mt-4 text-xl">
          Transforming your home, one project at a time.
        </p>
        <p className="mt-4 text-lg">
          Whether you're looking to update your kitchen, remodel your bathroom, or give your entire home a facelift, we're here to help. Our experienced team is dedicated to providing top-quality craftsmanship and customer service.
        </p>
      </header>
  {/* Why Choose Us */}
  <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Professional and Experienced Team", "Free Estimates", "Personalized Services", "Competitive Pricing"].map(
            (reason, index) => (
              <Card key={index} className="bg-white shadow-md rounded-2xl p-4">
                <CardContent className="text-center font-medium">{reason}</CardContent>
              </Card>
            )
          )}
        </div>
      </section>

         {/* Our Services */}
         <section className="py-10 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kitchen Remodeling",
              description: "Custom cabinetry, countertops, backsplashes, and appliance installation.",
            },
            {
              title: "Bathroom Remodeling",
              description: "Shower and tub installation, vanity upgrades, and tile flooring.",
            },
            {
              title: "Home Additions",
              description: "Room extensions, garage conversions, and second-story additions.",
            },
            {
              title: "Flooring Installation",
              description: "Hardwood, laminate, and tile flooring.",
            },
            {
              title: "Painting and Drywall",
              description: "Interior and exterior painting, drywall repair, and installation.",
            },
            {
              title: "Outdoor Living Spaces",
              description: "Decks, patios, outdoor kitchens, and landscaping.",
            },
          ].map((service, index) => (
            <Card key={index} className="bg-white shadow-md rounded-2xl">
              <CardContent className="p-6 text-center font-medium">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>



    {/* About Us */}
    <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          We are a locally owned and operated remodeling business serving the Pierce County area. With years of experience in the construction and restoration industry, we are passionate about helping homeowners bring their visions to life. Our team is committed to delivering high-quality work and ensuring customer satisfaction on every project.
        </p>
      </section>
<BookingForm/>
    {/* Footer */}
    <footer className="bg-blue-700 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Pierce County Remodeling. All Rights Reserved.</p>
    </footer>
  </div>
  );
}
