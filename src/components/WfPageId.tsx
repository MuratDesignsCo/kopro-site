import Script from "next/script";
import WfPageIdClient from "./WfPageIdClient";

export default function WfPageId({ id }: { id: string }) {
  return (
    <>
      <Script id={`wf-page-${id}`} strategy="beforeInteractive">{`document.documentElement.setAttribute('data-wf-page', '${id}');`}</Script>
      <WfPageIdClient id={id} />
    </>
  );
}
