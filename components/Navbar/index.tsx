import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter;
  const { asPath } = useRouter();
  return (
    <>
      <ul className=" sticky top-0">
        <li className={asPath == "/" ? "bg-red-500" : ""}>
          <Link href="/">
            <div>home</div>
          </Link>
        </li>
        <li className={asPath == "/pragmatic" ? "bg-red-500" : ""}>
          <Link href="/pragmatic">
            <div>pragmatic</div>
          </Link>
        </li>
        <li className={asPath == "/pgsoft" ? "bg-red-500" : ""}>
          <Link href="/pgsoft">
            <div>pgsoft</div>
          </Link>
        </li>
        <li className={asPath == "/habanero" ? "bg-red-500" : ""}>
          <Link href="/habanero">
            <div>habanero</div>
          </Link>
        </li>
        <li className={asPath == "/microgaming" ? "bg-red-500" : ""}>
          <Link href="/microgaming">
            <div>microgaming</div>
          </Link>
        </li>
        <li className={asPath == "/spadegaming" ? "bg-red-500" : ""}>
          <Link href="/spadegaming">
            <div>spadegaming</div>
          </Link>
        </li>
        <li className={asPath == "/jokergaming" ? "bg-red-500" : ""}>
          <Link href="/jokergaming">
            <div>jokergaming</div>
          </Link>
        </li>
        <li className={asPath == "/queenmaker" ? "bg-red-500" : ""}>
          <Link href="/queenmaker">
            <div>queenmaker</div>
          </Link>
        </li>
      </ul>
    </>
  );
}
