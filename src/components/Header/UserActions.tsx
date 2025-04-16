export const UserActions = () => {
  return (
    <div className="flex gap-4 text-sm text-mineShaft">
      <a href="/login" className="hover:text-fire transition-colors">
        Увійти як фахівець
      </a>
      <a href="/register" className="hover:text-fire transition-colors">
        Стати фахівцем
      </a>
    </div>
  );
};
