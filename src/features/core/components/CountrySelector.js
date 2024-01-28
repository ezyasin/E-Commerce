import { useState } from "react";

const countries = [
  { id: 0, name: "Select a country" },
  { id: 1, name: "USA" },
  { id: 2, name: "Canada" },
  { id: 3, name: "Mexico" },
  { id: 4, name: "United Kingdom" },
  { id: 5, name: "France" },
  { id: 6, name: "Germany" },
  { id: 7, name: "Russia" },
  { id: 8, name: "Japan" },
  { id: 9, name: "China" },
  { id: 10, name: "South Korea" },
  { id: 11, name: "Turkey" },
];

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (event) => {
    const selectedCountry = countries.find(country => country.id === parseInt(event.target.value));
    setSelectedCountry(selectedCountry);
  };

  return (
    <div className="flex flex-col">
      <select
        name="country"
        id="country"
        className="mt-1 p-2 border rounded"
        onChange={handleChange}
        value={selectedCountry.id}
      >
        {countries.map((country) => (
          <option value={country.id} key={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
