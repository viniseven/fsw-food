import { db } from '../lib/prisma';
import { CategoryItem } from './categoryItem';

export async function CategoryList() {
  const categories = await db.category.findMany({});

  return (
    <div>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
