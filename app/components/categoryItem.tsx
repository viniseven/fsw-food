import Image from 'next/image';
import { Category } from '@prisma/client';

interface CategoryItemProps {
  category: Category;
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-full border border-red-500 w-[134px]">
      <Image src={category.imageUrl} alt={category.name} width={30} height={30}/>
      <span className='font-semibold text-sm'>{category.name}</span>
    </div>
  );
}
