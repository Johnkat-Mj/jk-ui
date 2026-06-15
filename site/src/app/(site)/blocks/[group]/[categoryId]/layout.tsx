import { SiteCaret } from "@/components/atoms/site-caret";
import { BlockListNav } from "../../components/block-list-nav";
import { LinearPattern } from "@/app/(site)/components/linear-pattern";

export default async function BlockLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    group: string;
    categoryId: string;
  }>;
}>) {
  const { group } = await params;
  return (
    <>
      <div className="relative w-full -mt-20 h-20">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="flex justify-between size-full max-w-300 mx-auto relative">
            <div aria-hidden="true"
              className="absolute inset-x-0 bottom-8 top-14 flex noise-subtle opacity-60 dark:opacity-50"></div>
            <LinearPattern className="relative" />
            <LinearPattern className="relative" />
            <SiteCaret className="top-8.5 left-[-3.5px] " />
            <SiteCaret className="top-12.5 left-2.75 " />
            <SiteCaret className="top-8.5 right-[-3.5px] " />
            <SiteCaret className="top-12.5 right-2.75 " />
          </div>
        </div>
      </div>
      <main className="w-full">
        <BlockListNav  />
        {children}
      </main>
    </>
  );
}
