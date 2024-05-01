import { db } from '../lib/prisma';
import { CategoryItem } from './categoryItem';

export async function CategoryList() {
  const categories = await db.category.findMany({});

  return (
    <div className='flex gap-3 py-6 overflow-x-auto no-scrollbar'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
