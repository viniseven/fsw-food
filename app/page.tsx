import Image from 'next/image';
import { Header } from './components/header';
import { SearchInput } from './components/searchInput';
import { CategoryList } from './components/categoryList';

export default function Home() {
  return (
    <main className="px-5">
      <Header />
      <SearchInput />
      <CategoryList />
    </main>
  );
}
