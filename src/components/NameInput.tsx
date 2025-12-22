import * as React from "react";

interface NameInputProps {
  onNameSubmit: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ onNameSubmit }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onNameSubmit(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        className="rounded-md p-3 text-black"
        type="text"
        placeholder="Nama"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="rounded-xl p-2 px-4 bg-transparent border-2 text-black"
        onClick={handleSubmit}
      >
        <p className="text-sky-50">Ambil Ayat Emas</p>
      </button>
    </div>
  );
};

export default NameInput;
