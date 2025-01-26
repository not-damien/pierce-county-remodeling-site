export default function Header(){
    return(
        <header className="bg-blue-800 text-white text-center py-12 px-6 shadow-lg">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to Pierce County Remodeling!
        </h1>
        <p className="text-2xl font-light italic">
          Transforming your home, one project at a time.
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          Whether you're looking to update your kitchen, remodel your bathroom,
          or give your entire home a facelift, we're here to help. Our
          experienced team is dedicated to providing top-quality craftsmanship
          and customer service.
        </p>
      </header>
    );
}