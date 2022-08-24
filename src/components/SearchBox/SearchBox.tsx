import React, { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

const SearchBox: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearch] = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    if (searchValue) {
      setSearch({ search: searchValue});
    } else {
      searchParams.delete('search');
      setSearch(searchParams);
    }
  }, [searchValue]);

  return (
    <div>
      <input
        className="form-control p-2 rounded"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
