import Button from '@/components/Ui/Button/Button';

const HomePage = () => {
  return (
    <div>
      <Button type="button" label="Пошук" />
      <Button type="submit" label="Google Auth" disabled />
    </div>
  );
};

export default HomePage;
