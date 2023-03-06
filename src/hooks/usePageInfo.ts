import { useSearchParams } from 'react-router-dom';

type HookOutput = [number, number];

export function usePageInfo(): HookOutput {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const perPage = Number(searchParams.get('perPage')) || 8;

  return [currentPage, perPage];
}
