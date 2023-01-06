import { useState } from "react";
import ICountry from "../interfaces/ICountry";
import ItemCountry from "./ItemCountry";

interface ICountryProps {
  children: ICountry;
}

export default function Country({ children }: ICountryProps) {
  const demographicDensity = children.area
    ? parseInt(String(children.population / children.area)).toFixed(2)
    : 0;

  const [isVisited, setIsVisited] = useState(false);
  const { name, capital, region, population, area, flag } = children;

  const visitedStyle = isVisited ? "bg-yellow-50" : "";

  return (
    <div
      className={`border p-2 m-2 flex flex-row 
      item-center space-x-2 cursor-pointer ${visitedStyle}`}
      onClick={() => setIsVisited((currentValue) => !currentValue)}
    >
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <ItemCountry label="Nome:">{name}</ItemCountry>
        </li>
        <li>
          <ItemCountry label="Capital:">{capital}</ItemCountry>
        </li>
        <li>
          <ItemCountry label="Região:">{region}</ItemCountry>
        </li>
        <li>
          <ItemCountry label="População:">{String(population)}</ItemCountry>
        </li>
        <li>
          <ItemCountry label="Área:">{String(area)}</ItemCountry>
        </li>
        <li>
          <ItemCountry label="Densidade:">
            {String(demographicDensity)}
          </ItemCountry>
          {demographicDensity}
        </li>
        <li>{flag}</li>
      </ul>
    </div>
  );
}
