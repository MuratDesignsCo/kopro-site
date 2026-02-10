import Script from "next/script";

export default function SiteScripts() {
  return (
    <>
      <Script
        id="wf-mod-js"
        strategy="beforeInteractive"
      >{`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}</Script>

      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="beforeInteractive"
      />
      <Script id="webfont-load" strategy="beforeInteractive">{`WebFont.load({ google: { families: ["Poppins:300,400,500,600,700"] } });`}</Script>

      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Script
        data-memberstack-app="app_cmiu85zsd00fk0st9ez036x5x"
        src="https://static.memberstack.com/scripts/v2/memberstack.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c11e3ba5e041d7d54d%2Fimportucanddefinelocales-1.1.1.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c16b483cfc95edb442%2Fcssimporter-0.1.0.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=693414c0a24bd9a413f912b8"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script src="/js/kopro.js" strategy="afterInteractive" />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/gsap/3.14.2/SplitText.min.js"
        strategy="afterInteractive"
      />
      <Script id="gsap-register" strategy="afterInteractive">{`gsap.registerPlugin(ScrollTrigger,SplitText);`}</Script>

      <Script id="slater-load" strategy="afterInteractive">{`document.addEventListener(\"DOMContentLoaded\", function() {function loadkopro(e){let t=document.createElement(\"script\");t.setAttribute(\"src\",e),t.setAttribute(\"type\",\"module\"),document.body.appendChild(t),t.addEventListener(\"load\",()=>{console.log(\"Slater loaded KOPRO.js: https://slater.app/18135.js\")}),t.addEventListener(\"error\",e=>{console.log(\"Error loading file\",e)})}let src=window.location.host.includes(\"webflow.io\")?\"https://slater.app/18135.js\":\"https://assets.slater.app/slater/18135.js?v=1.0\";loadkopro(src);})`}</Script>

      <Script id="memberstack-plan-route" strategy="afterInteractive">{`document.addEventListener("DOMContentLoaded", function () {\n  const path = window.location.pathname.replace(/\\/$/, "");\n  if (!path.startsWith("/app/dashboard")) return;\n  const PLAN_ROUTE_MAP = {\n    "pln_etape-2-9p7l0n8x": "/app/dashboard/etape-02",\n    "pln_-tape-3-lw750huj": "/app/dashboard/etape-03",\n    "pln_-tape-3-bis-fj760hbc": "/app/dashboard/etape-03-bis",\n    "pln_-tape-4-o56h0nq1": "/app/dashboard/etape-04",\n    "pln_-tape-4-bis-z8960ul1": "/app/dashboard/etape-04-bis",\n    "pln_-tape-5-o26i0nyt": "/app/dashboard/etape-05",\n    "pln_-tape-6-j3770hua": "/app/dashboard/etape-06",\n    "pln_-tape-7-is780hfr": "/app/dashboard/etape-07",\n    "pln_-tape-8-bl6m0ndu": "/app/dashboard/etape-08",\n    "pln_-tape-08-bis-l5790h5k": "/app/dashboard/etape-08-bis"\n  };\n  const backLink = document.getElementById("dashboardback");\n  if (!window.$memberstackDom) return;\n  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {\n    if (!member) return;\n    const plans = member.planConnections || [];\n    if (!plans.length) return;\n    const activePlanId = plans[0].planId || plans[0].id;\n    const targetRoute = PLAN_ROUTE_MAP[activePlanId];\n    if (!targetRoute) return;\n    const normalizedTarget = targetRoute.replace(/\\/$/, "");\n    if (backLink) {\n      backLink.setAttribute("href", targetRoute);\n    }\n    if (path !== normalizedTarget) {\n      window.location.replace(targetRoute);\n    }\n  });\n});`}</Script>

      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c16b483cfc95edb450%2Femptyfieldsremoval-1.1.0.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c112a7dbb31adf19af%2Fmetadatahandler-0.0.5.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c1548e903d14de2c3f%2Fenablevisiblebuttons-0.0.7.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.prod.website-files.com/693414c0a24bd9a413f912b8%2F685146e1d8a68f749232b664%2F693496c112a7dbb31adf19d5%2Fenableuploadstateview-0.0.3.js"
        strategy="afterInteractive"
      />
    </>
  );
}
