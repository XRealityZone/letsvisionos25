import{P as W,R as j,V as q,_ as U,e as B,f as S,g as h,h as m,i as T,j as x,l as C,la as Y,m as D,n as L,o as V,p as G,q as z,r as g,t as M,v as H}from"./chunk-CQPOAFVU.mjs";import{h as d,k as v,l as E,m as I,o as w,t as P,u as O}from"./chunk-BW5H3LPM.mjs";import"./chunk-FIZTVOUW.mjs";import{c as e}from"./chunk-A3IIQ6X3.mjs";var ae="default"in h?B:h,p={},K=ae;p.createRoot=K.createRoot;p.hydrateRoot=K.hydrateRoot;var N=p.createRoot,X=p.hydrateRoot;var u={cG5d1XCwS:{elements:{bGQqiIVrj:"schedule",CTK8pq23T:"home",dekjl8vTO:"sponsors",ekgGzgBjD:"blank0",G9zbLh2X8:"blank2",GBrUDWOXA:"blank1",KrzRllYhO:"blank1-2",kUADceSVP:"speakers",OeIsxeBs6:"team",pUprYfOEj:"hero",PYdiqTHfU:"faq",ry8in7S0n:"partners",Tl1_5YYow:"booths",wMCo1TeMG:"tickets",x5p1bxMEy:"team-1",XvvcKpbOI:"blank1-1",YHWEPKnF_:"blank1-3"},page:m(()=>import("./sxUwM_hSKNAwSKj_4vQv8656IRVqFKej0i4LkGXje_E.LOFKLSUR.mjs")),path:"/"},ukGi7vqWu:{elements:{bJxuVKO3n:"hero",HKjqFa2Eq:"highlights",VfTQOsImP:"testimonials"},page:m(()=>import("./UXhGcjXTKv_t-XnBl55Q2zVav0V5R1lRhKF9zc7W2YU.KQIGP5OJ.mjs")),path:"/404"}},R=[{code:"en",id:"default",name:"English",slug:""},{code:"zh-CN",id:"tW13wsXjn",name:"Chinese (China)",slug:"cn"}],b={},Q="0f30566268db0beb576c171b884acb12eb68882e55be7b5101e61a32d3eb2f41";async function ne({routeId:a,pathVariables:c,localeId:l}){await u[a].page.preload();let t=d(q,{isWebsite:!0,routeId:a,pathVariables:c,routes:u,collectionUtils:b,framerSiteId:Q,notFoundPage:m(()=>import("./UXhGcjXTKv_t-XnBl55Q2zVav0V5R1lRhKF9zc7W2YU.KQIGP5OJ.mjs")),isReducedMotion:!1,localeId:l,locales:R,preserveQueryParams:void 0,siteCanonicalURL:"https://letsvisionos.swiftgg.team",EditorBar:typeof e>"u"?void 0:m(async()=>{let{createEditorBar:f}=await import("https://edit.framer.com/init.mjs");return{default:f({dependencies:{__version:1,framer:{useCurrentRoute:x,useLocaleInfo:D,useRouter:T},react:{createElement:d,memo:v,useCallback:I,useEffect:w,useRef:P,useState:O},"react-dom":{createPortal:S}}})}})}),o=d(j,{children:t,value:{codeBoundaries:!0,editorBarOnPageEditing:!1,editorBarSubtle:!1,pauseOffscreen:!0,replaceNestedLinks:!0}}),n=d(W,{children:o});return d(C,{children:n,value:{global:{enter:{mask:{angle:0,type:"wipe",width:"100%"},opacity:1,rotate:0,rotate3d:!1,rotateX:0,rotateY:0,scale:1,transition:{damping:30,delay:0,duration:.4,ease:[.27,0,.51,1],mass:1,stiffness:400,type:"tween"},x:"0px",y:"0px"}},routes:{}}})}var J=typeof document<"u";if(J){e.__framer_importFromPackage=(c,l)=>()=>d(M,{error:'Package component not supported: "'+l+'" in "'+c+'"'}),e.process={...e.process,env:{...e.process?e.process.env:void 0,NODE_ENV:"production"}},e.__framer_events=e.__framer_events||[],H();let a=document.getElementById("main");"framerHydrateV2"in a.dataset?A(!0,a):A(!1,a)}function se(){J&&e.__framer_events.push(arguments)}async function A(a,c){function l(t,o,n=!0){if(t.caught||e.__framer_hadFatalError)return;let s=o?.componentStack;if(n){if(console.warn(`Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`,t,s),Math.random()>.01)return}else console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/");se(n?"published_site_load_recoverable_error":"published_site_load_error",{message:String(t),componentStack:s,stack:s?void 0:t instanceof Error&&typeof t.stack=="string"?t.stack:null})}try{let t,o,n,s;if(a){let r=JSON.parse(c.dataset.framerHydrateV2);t=r.routeId,o=r.localeId,n=r.pathVariables,s=r.breakpoints,g(u,t)}else{g(u,void 0);let r=z(u,decodeURIComponent(location.pathname),!0,R);t=r.routeId,o=r.localeId,n=r.pathVariables}typeof e<"u"&&(async()=>{let r=u[t],Z="default",y=R.find(({id:i})=>o?i===o:i===Z).code,F=null;if(r?.collectionId&&b){let i=await b[r.collectionId]?.(),[k]=Object.values(n);i&&typeof k=="string"&&(F=await i.getRecordIdBySlug(k,y||void 0)??null)}let _=Intl.DateTimeFormat().resolvedOptions(),$=_.timeZone,ee=_.locale;await new Promise(i=>{document.prerendering?document.addEventListener("prerenderingchange",i,{once:!0}):i()}),e.__framer_events.push(["published_site_pageview",{framerSiteId:Q??null,routePath:r?.path||"/",collectionItemId:F,framerLocale:y||null,webPageId:t,referrer:document.referrer||null,url:e.location.href,hostname:e.location.hostname||null,pathname:e.location.pathname||null,hash:e.location.hash||null,search:e.location.search||null,timezone:$,locale:ee}])})();let f=await ne({routeId:t,localeId:o,pathVariables:n});a?(Y("framer-rewrite-breakpoints",()=>{U(s),e.__framer_onRewriteBreakpoints?.(s)}),E(()=>{G(),V(),L(),X(c,f,{onRecoverableError:l})})):N(c,{onRecoverableError:l}).render(f)}catch(t){throw l(t,void 0,!1),t}}export{ne as getPageRoot};
//# sourceMappingURL=script_main.7E7XYXQF.mjs.map
