import Image from "next/image";

const ClientLogoSection = () => {
  return (
    <div>
      {/* COMPANIES SECTION */}
      <section className="bg-gray-100 py-20 flex justify-center overflow-hidden">
        <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
          {/* Heading Section */}

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex justify-center">
              <Image
                src="/fa-brands-1.png"
                alt="Client 1 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-2.png"
                alt="Client 2 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-3.png"
                alt="Client 3 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-4.png"
                alt="Client 4 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-5.png"
                alt="Client 5 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/fa-brands-6.png"
                alt="Client 6 Logo"
                className="h-12 w-auto"
                width={105}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientLogoSection;
