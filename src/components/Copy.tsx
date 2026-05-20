import { name, year } from '../lib/config';

export default function Copy() {
  return (
    <span className="px-1">
      &copy;{year}&nbsp;{name}.com
    </span>
  );
}
