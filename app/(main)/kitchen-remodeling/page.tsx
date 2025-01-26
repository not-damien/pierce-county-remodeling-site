// pages/kitchen-remodeling.js

import Image from 'next/image';

const KitchenRemodeling = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Kitchen Remodeling Services
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Transform your kitchen into a functional and beautiful space with our comprehensive kitchen remodeling services.
        Whether you're looking to update your current layout, increase storage, or create a modern design, we’re here to bring your vision to life.
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Our services include:</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Custom Cabinetry</h3>
          <p className="text-lg text-gray-700">
            Tailored to fit your space, needs, and style, our custom cabinetry adds both practicality and elegance to your kitchen. 
            Choose from a wide range of designs, finishes, and features to create the perfect storage solution.
          </p>
          <Image 
           src="/placeholder.svg" 
            alt="Custom cabinetry example" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-bold text-gray-800">Countertops and Backsplashes</h3>
          <p className="text-lg text-gray-700">
            From sleek granite to durable quartz, we offer a variety of materials for countertops and backsplashes that combine beauty and functionality. 
            Select the perfect combination to complement your cabinetry and create a cohesive look.
          </p>
          <Image 
            src="/placeholder.svg" 
            alt="Countertops and backsplashes" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />

          <h3 className="text-xl font-bold text-gray-800">Appliance Installation</h3>
          <p className="text-lg text-gray-700">
            Upgrade your kitchen with state-of-the-art appliances. Our expert team will handle the installation of all major kitchen appliances, ensuring they are properly set up and ready to use.
          </p>
          <Image 
            src="/placeholder.svg" 
            alt="Appliance Installation" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-700">
          Let us help you make your kitchen a space where family and friends will love to gather. Contact us today for a consultation!
        </p>
      </div>
    </div>
  );
};

export default KitchenRemodeling;
