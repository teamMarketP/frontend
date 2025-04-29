  const DogWithBlob = () => {
    return (
      <div className="relative">
        <div className="absolute rotate-[145deg] rounded-[265px] border-[2px] border-fire shadow-2xl" />
        <img
          src="/images/blob-behind-dog.png"
          alt="Rectangle"
          className="relative z-1 w-auto h-auto -top-[784px] -right-[528px] "
        />
      </div>
    );
  };
  
  export default DogWithBlob;
  