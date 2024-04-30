import { FiSearch } from 'react-icons/fi';
import { Button } from './button';

export function SearchInput() {
  return (
    <div className="flex items-center gap-2 pt-6">
      <input
        type="text"
        placeholder="Buscar Restaurantes"
        className="border-none bg-[#F4F4F5] py-[9px] pl-4 rounded-[10px]"
      />
      <Button
        icon={FiSearch}
        className="bg-red-600 text-white p-[10px] rounded-lg"
      />
    </div>
  );
}
