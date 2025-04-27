import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Link
        to="#"
        className="flex text-fire hover:text-mineShaft transition-colors py-2"
      >
        Сервіси
      </Link>
    </nav>
  );
};
