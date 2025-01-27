// export default CategorySection;
import Image from "next/image";
import Link from "next/link";

const CategorySection = () => {
  return (
    <div className=" bg-[#FAFAFA] flex justify-center ">
      <div className=" w-full max-w-[1088px]">
        {/* Using grid layout for small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          <div className="flex justify-center">
            <Link href={"/products"}>
              <Image
                src="/card-item.png"
                alt="1"
                width={205}
                height={223}
                className="hover:scale-[1.02] duration-200 "
              />{" "}
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href={"/products"}>
              <Image
                src="/card-item (1).png"
                alt="2"
                width={205}
                height={223}
                className="hover:scale-[1.02] duration-200 "
              />{" "}
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href={"/products"}>
              <Image
                src="/card-item (2).png"
                alt="3"
                width={205}
                height={223}
                className="hover:scale-[1.02] duration-200 "
              />{" "}
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href={"/products"}>
              <Image
                src="/card-item (3).png"
                alt="4"
                width={205}
                height={223}
                className="hover:scale-[1.02] duration-200 "
              />{" "}
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href={"/products"}>
              <Image
                src="/card-item (4).png"
                alt="5"
                width={205}
                height={223}
                className="hover:scale-[1.02] duration-200 "
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
