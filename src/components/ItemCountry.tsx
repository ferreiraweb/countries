interface IItemCountryProps {
  children: string;
  label: string;
}

export default function ItemCountry({
  children: value,
  label,
}: IItemCountryProps) {
  return (
    <>
      <span className="font-semibold mr-2">{label}</span>
      <span>{value}</span>
    </>
  );
}
