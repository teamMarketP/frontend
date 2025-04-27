  const DogWithBlob = () => {
    return (
      <div className="relative">
        <div className="absolute rotate-[145deg] rounded-[265px] border-[2px] border-fire shadow-2xl" />
        <img
          src="/images/blob-behind-dog.png"
          alt="Rectangle"
          className="relative z-10 w-auto h-auto -top-196 -right-132 "
        />
      </div>
    );
  };
  
  export default DogWithBlob;
  