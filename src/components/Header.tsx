interface IHeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <div className="w-full mx-auto p-4 bg-green-200 text-center">
      <p className=" font-semibold text-lg">{children}</p>
    </div>
  );
}
