export default interface ICountry {
  id: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  area: number | null;
  flag: string;
  nameLowerCase: string;
}
