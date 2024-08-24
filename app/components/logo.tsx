import { Globe } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex flex-row items-center justify-evenly gap-4 leading-none text-white">
      <div>
        <Globe className="size-12 rotate-[15deg]" />
      </div>
      <p className="flex-initial text-[44px]">TODO-GraphQL</p>
    </div>
  );
}
