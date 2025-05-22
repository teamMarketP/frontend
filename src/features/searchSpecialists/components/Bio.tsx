type Props = {
  text: string | null;
  truncate?: boolean;
};

const Bio = ({ text, truncate = true }: Props) => (
  <p
    className={`w-full text-sm text-cod-gray text-justify break-words tracking-[-0.04em] ${
      truncate ? 'line-clamp-5 xl:line-clamp-9' : ''
    }`}
  >
    <span className="font-semibold">Про себе:</span> {text || 'Опис відсутній'}
  </p>
);

export default Bio;
