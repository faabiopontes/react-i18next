import Link from "next/link";
import { PageProps } from "@/app/types";

export default function Page({ params: { lng } }: PageProps) {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>second page</Link>
    </>
  );
}
