import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { Button } from './button';

export function Header() {
  return (
    <div className="flex justify-between items-center pt-7">
      <Image src="/logo.svg" width={100} height={30} alt="FSW Foods" />
      <Button icon={FiMenu} />
    </div>
  );
}
