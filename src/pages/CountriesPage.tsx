import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

import Countries from "../components/Countries";
import Country from "../components/Country";
import { allCountries } from "../data/countries";

export default function CountriesPage() {
  const [countryFilter, setCountryFilter] = useState("unit");

  function handleInputCountryOnChange(e: any) {
    setCountryFilter(e.currentTarget.value);
  }

  const countryFilterLowerCase = countryFilter.trim().toLowerCase(); // evitar fazer este processamento dentro do filter

  const filteredCountry =
    countryFilter.length > 2
      ? allCountries.filter(({ nameLowerCase }) =>
          nameLowerCase.includes(countryFilterLowerCase)
        )
      : [];

  /* --------------------------------------------------- */

  return (
    <>
      <Header>Countries 3</Header>
      <Main>
        <div className="w-2/3">
          <TextInput
            label="Nome do país (mínimo 3 caracteres)"
            value={countryFilter}
            handleInputOnChange={handleInputCountryOnChange}
            autofocus={true}
          />
        </div>
      </Main>

      {/* aplicação do conceito de composition (prop children) 
          que evita o problema conhecido como prop drilling
      */}
      <Countries>
        <div className="border p-2">
          <p className=" font-semibold text-center mb-3">
            Total Países: {filteredCountry.length}
          </p>
          {filteredCountry.map((country) => (
            <Country key={country.id}>{country}</Country>
          ))}
        </div>
      </Countries>
    </>
  );
}
