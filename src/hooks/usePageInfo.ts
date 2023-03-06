import { useSearchParams } from 'react-router-dom';

type HookOutput = [number, number, string];

export function usePageInfo(): HookOutput {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const perPage = Number(searchParams.get('perPage')) || 8;
  const sortBy = searchParams.get('sortBy') || 'name';

  return [currentPage, perPage, sortBy];
}
