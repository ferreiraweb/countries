interface ICountriesProps {
  children: React.ReactNode;
}

export default function Countries({ children }: ICountriesProps) {
  return <div className="border p-2"> {children} </div>;
}
