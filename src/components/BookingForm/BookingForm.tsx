import BookingCategory from '@/components/BookingForm/Booking/BookingCategory ';
import BookingDatePicker from '@/components/BookingForm/Booking/BookingDatePicker';
import BookingPrice from '@/components/BookingForm/Booking/BookingPrice';
import BookingTimePicker from '@/components/BookingForm/Booking/BookingTimePicker';

const BookingForm = () => {
  return (
    <div>
      <form className="xl:flex xl:flex-col xl:gap-[30px] xl:w-[692px] ">
        <BookingCategory />
        <div>
          <h4 className="xl:text-xl font-semibold text-fire">
            Місце виконання замовлення
          </h4>
          <input
            type="text"
            defaultValue="Київ"
            className="input-base xl:w-[472px] "
          />
          <select
            name="district"
            id="district"
            className="input-base xl:w-[472px] "
          >
            <option value="">Обрати район</option>
            <option value="Грумінг">Грумінг</option>
            <option value="Перетримка">Перетримка</option>
          </select>

          <input
            type="text"
            placeholder="Приклад: вул. Шевченка"
            className="input-base xl:w-[472px] "
          />

          <input
            type="text"
            placeholder="Приклад: буд. 1, корп. 2, кв. 3"
            className="input-base xl:w-[472px] "
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-fire">Деталі замовлення</h4>
          <textarea
            name="orderDetails"
            id="orderDetails"
            className="input-base xl:min-h-[186px] resize-none "
            placeholder="Приклад: порода собаки, вимоги до виконавця, особливості собаки, розмір собаки, вік улюбленця та ін."
          ></textarea>
        </div>
        <BookingDatePicker />
        <BookingTimePicker />
        <BookingPrice />
      </form>
    </div>
  );
};

export default BookingForm;
