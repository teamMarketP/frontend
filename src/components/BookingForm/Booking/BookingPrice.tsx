import Button from '@/components/Ui/Button/Button';

const BookingPrice = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold text-fire">Ціна замовлення</h4>
      <div className="flex xl:gap-5">
        <div>
          <p>Орієнтовна вартість</p>
          <p>650 грн</p>
          <p>Ціна обговорюється</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email для зворотного зв’язку "
            className="input-base xl:w-[472px] "
          />
          <p>
            Вартість вказана лише для попередньої оцінки бюджету вашого
            замовлення. В неї не включені матеріали та додаткові роботи. Точну
            вартість зможе сказати фахівець після обговорення деталей.
          </p>
          <Button label="Замовити" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default BookingPrice;
