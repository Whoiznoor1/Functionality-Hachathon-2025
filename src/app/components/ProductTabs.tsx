const ProductTabs = () => {
  return (
    <div className="relative w-full px-4 sm:px-8 py-12 inline ">
      {/* Tab Titles */}
      <div className="flex justify-around sm:justify-center gap-8 mb-4 sm:mb-8 ">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] underline">
          Description
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] ">
          Additional Information
        </span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] text-[#737373] flex items-center">
          Reviews
          <h1 className="text-sm leading-[24px] text-[#23856D] ml-2">(0)</h1>
        </span>
      </div>
    </div>
  );
};

export default ProductTabs;
