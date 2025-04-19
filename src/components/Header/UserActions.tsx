export const UserActions = () => {
  return (
    <div className="flex gap-4 text-sm text-fire">
      <a href="/login" className="hover:text-mineShaft transition-colors">
        Увійти як фахівець
      </a>
      <a href="/register" className="hover:text-mineShaft transition-colors">
        Стати фахівцем
      </a>
    </div>
  );
};
