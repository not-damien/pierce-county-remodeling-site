import Image from "next/image";
export default function page(){
    return(
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="mx-auto text-lg">
          We are a family owned and operated remodeling business serving the
          Pierce County area. With years of experience in the construction and
          restoration industry, we are passionate about helping homeowners bring
          their visions to life. Our team is committed to delivering
          high-quality work and ensuring customer satisfaction on every project.
        </p>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Team
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            [1,2,3,4,5,6,7,8,9,10].map((i)=><Person key={i}/>)
          }
        </div>
        </div>
    );
}




const Person = ()=>{
  return(
  <div className="border h-80 items-center p-4">
            <Image alt={'fake image'} src={'/placeholder.svg'} width={300} height={300} className="w-[300px] h-[200px] mx-auto"/>
            <h3 className="font-bold text-center text-lg">Chris Cruz</h3>
            <h4 className="text-center text-sm italic text-gray-600">Founder</h4>
          </div>);
}