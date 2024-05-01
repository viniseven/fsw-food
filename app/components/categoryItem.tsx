import Image from 'next/image';
import { Category } from '@prisma/client';

interface CategoryItemProps {
  category: Category;
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div>
      <Image src={category.imageUrl} alt={category.name} />
      <span>{category.name}</span>
    </div>
  );
}
