import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import ICountry from "../interfaces/ICountry";

import { allCountries } from "../data/countries";

export default function CountriesPage() {
  const [countryFilter, setCountryFilter] = useState("Brazil");

  function handleInputCountryOnChange(e: any) {
    setCountryFilter(e.currentTarget.value);
  }

  const countryFilterLowerCase = countryFilter.toLowerCase(); // evitar fazer este processamento dentro do filter

  const filteredCountry =
    countryFilter.length > 2
      ? allCountries.filter(({ nameLowerCase }) =>
          nameLowerCase.includes(countryFilterLowerCase)
        )
      : [];

  console.log(filteredCountry);

  /* --------------------------------------------------- */

  return (
    <>
      <Header>Countries 2</Header>
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

      {filteredCountry.map((country) => (
        <p key={country.id}>{country.name}</p>
      ))}
    </>
  );
}
