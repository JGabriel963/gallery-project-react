import { useCallback, useState } from "react";
import SearchIcon from "../assets/icons/search.svg?react";
import InputText from "./input-text";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");

  const debouncedSetValue = useCallback(
    debounce((value: string) => console.log("Valor com debounce", value), 2000),
    []
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    console.log("Campo de texto", value);

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
