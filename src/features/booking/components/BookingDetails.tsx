const BookingDetails = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold  text-fire xl:mb-5">
        Деталі замовлення
      </h4>
      <textarea
        name="orderDetails"
        id="orderDetails"
        className="input-base xl:min-h-[186px] resize-none xl:p-4 block overflow-y-auto"
        placeholder="Приклад: порода собаки, вимоги до виконавця, особливості собаки, розмір собаки, вік улюбленця та ін."
      ></textarea>
    </div>
  );
};

export default BookingDetails;
