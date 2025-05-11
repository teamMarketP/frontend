const BookingDetails = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold  text-fire xl:mb-5">
        Деталі замовлення
      </h2>
      <label htmlFor="orderDetails" className="sr-only">
        Введіть деталі замовлення
      </label>
      <textarea
        name="orderDetails"
        id="orderDetails"
        rows={6}
        className="input-base xl:min-h-[186px] resize-none xl:p-4 block overflow-y-auto"
        placeholder="Приклад: порода собаки, вимоги до виконавця, особливості собаки, розмір собаки, вік улюбленця та ін."
      ></textarea>
    </div>
  );
};

export default BookingDetails;
