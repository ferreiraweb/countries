interface IHeaderProps {
  children: string;
}

export default function Header({ children: titulo }: IHeaderProps) {
  return (
    <div className="w-full mx-auto p-4 bg-green-200 text-center">
      <p className=" font-semibold text-lg">{titulo}</p>
    </div>
  );
}
