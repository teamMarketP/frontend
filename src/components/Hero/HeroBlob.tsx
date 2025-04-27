  const DogWithBlob = () => {
    return (
      <div className="relative">
        <div className="absolute rotate-[145deg] bg-white rounded-[265px] border-[2px] border-fire shadow-2xlz-0" />
        <img
          src="/images/blob-behind-dog.png"
          alt="Dog"
          className="relative z-10 w-[auto] h-[auto] h-auto -top-196 -right-132 "
        />
      </div>
    );
  };
  
  export default DogWithBlob;
  