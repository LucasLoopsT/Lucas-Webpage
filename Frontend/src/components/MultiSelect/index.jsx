import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import {
  Container,
  SelectBox,
  Placeholder,
  Tag,
  Dropdown,
  Option,
} from "./styles";

function MultiSelect({
  id,
  title,
  placeholder,
  options,
  value = [],
  setValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    const exists = selected.some((s) => s.id === item.id);

    const newSelected = exists
      ? selected.filter((s) => s.id !== item.id)
      : [...selected, item];

    setSelected(newSelected);
    setValue?.(newSelected.map((i) => i.id));
  };

  const removeItem = (id) => {
    const newSelected = selected.filter((s) => s.id !== id);
    setSelected(newSelected);
    setValue?.(newSelected.map((i) => i.id));
  };

  // fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // sincronizar com form
  useEffect(() => {
    if (value) {
      const initialSelected = options.filter((o) => value.includes(o.id));
      setSelected(initialSelected);
    }
  }, [value, options]);

  return (
    <Container ref={dropdownRef}>
      {title && <label htmlFor={id}>{title}</label>}

      <SelectBox onClick={toggleDropdown}>
        {selected.length === 0 && <Placeholder>{placeholder}</Placeholder>}

        {selected.map((item) => (
          <Tag key={item.id}>
            {item.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeItem(item.id);
              }}
            >
              x
            </button>
          </Tag>
        ))}

        <FaArrowDown style={{ marginLeft: "auto" }} />
      </SelectBox>

      {isOpen && (
        <Dropdown>
          {options.map((item) => (
            <Option key={item.id}>
              <input
                type="checkbox"
                checked={selected.some((s) => s.id === item.id)}
                onChange={() => handleSelect(item)}
              />
              {item.text}
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}

export default MultiSelect;
