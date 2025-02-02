import Link from "next/link";

export default function OurServices(){
    return(
        <div className="py-10 px-6 text-black">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Kitchen Remodeling",
              description:
                "Custom cabinetry, countertops, backsplashes, and appliance installation.",
              href:'/kitchen-remodeling'
            },
            {
              title: "Bathroom Remodeling",
              description:
                "Shower and tub installation, vanity upgrades, and tile flooring.",
              href:'/bathroom-remodeling'
              },
            {
              title: "Home Additions",
              description:
                "Room extensions, garage conversions, and second-story additions.",
              href:'home-additions'
            },
            {
              title: "Flooring Installation",
              description: "Hardwood, laminate, and tile flooring.",
              href:'flooring'
            },
            {
              title: "Painting and Drywall",
              description:
                "Interior and exterior painting, drywall repair, and installation.",
              href:'painting-drywall'
            },
            {
              title: "Outdoor Living Spaces",
              href:'outdoor',
              description: "Decks, patios, outdoor kitchens, and landscaping.",
            },
          ].map((service, index) => (
            <Link
              href={service.href}
              className="bg-white shadow-md rounded-2xl p-4 text-center hover:bg-gray-200"
              key={index}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <p> Click To Learn More</p>
            </Link>
          ))}
        </div>
      </div>
    );
}