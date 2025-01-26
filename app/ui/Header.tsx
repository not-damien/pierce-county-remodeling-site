import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-[#a7bbc2] text-white text-center py-12 px-6 shadow-lg bg-[url(/stock/house2.jpg)]  bg-cover bg-bottom h-screen bg-no-repeat">
       
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to Pierce County Remodeling!
        </h1>
        <p className="text-2xl font-light italic mb-6">
          Transforming your home, one project at a time.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {[
            "Professional and Experienced Team",
            "Free Estimates",
            "Personalized Services",
            "Competitive Pricing",
          ].map((reason, index) => (
            <Link
            href='/about'
              className="bg-white text-blue-800 shadow-md rounded-2xl p-4 text-center hover:bg-gray-200"
              key={index}
            >
              <h3 className="text-xl font-semibold">{reason}</h3>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          Whether you're looking to update your kitchen, remodel your bathroom,
          or give your entire home a facelift, we're here to help. Our
          experienced team is dedicated to providing top-quality craftsmanship
          and customer service.
        </p>
      </header>
    );
}