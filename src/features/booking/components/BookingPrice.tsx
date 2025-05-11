import Button from '@/components/Ui/Button/Button';

const BookingPrice = () => {
  return (
    <div>
      <h2 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Ціна замовлення
      </h2>
      <div className="flex gap-5 ">
        <div className="flex flex-col justify-between rounded-2xl xl:min-w-[200px] text-center bg-tenn px-[22px] py-[18px]">
          <p className="text-sm text-alabaster">Орієнтовна вартість</p>
          <p className="text-xl text-cod-gray bg-alabaster rounded-2xl">
            650 грн
          </p>
          <p className="text-sm text-alabaster">Ціна обговорюється</p>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email для зворотного зв’язку"
            aria-label="Email для зворотного зв’язку"
            className="input-base h-12 pl-12"
          />
          <p className="text-sm text-chicago-600">
            Вартість вказана лише для попередньої оцінки бюджету вашого
            замовлення. В неї не включені матеріали та додаткові роботи. Точну
            вартість зможе сказати фахівець після обговорення деталей.
          </p>
          <Button
            label="Замовити"
            aria-label="Замовити"
            type="submit"
            className="self-end"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPrice;
