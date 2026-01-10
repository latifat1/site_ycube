module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},12388,(e,t,r)=>{t.exports=e.x("@prisma/client-7c354e4641fa1594",()=>require("@prisma/client-7c354e4641fa1594"))},9714,e=>{"use strict";function t(e){return`
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Y3 Audit & Conseils</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #073E5D; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Y3 Audit & Conseils</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${e}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 10px 0; font-size: 14px;">
                <strong>Y3 Audit & Conseils</strong><br>
                Cocody, Riviera<br>
                Email: hello@ycubeac.com<br>
                T\xe9l\xe9phone: +225 05 46 00 63 93
              </p>
              <p style="color: #999999; margin: 10px 0 0 0; font-size: 12px;">
                Cet email a \xe9t\xe9 envoy\xe9 automatiquement, merci de ne pas y r\xe9pondre directement.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()}function r(e){return{html:t(`
    <h2 style="color: #073E5D; margin-top: 0;">Confirmation de votre demande de rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${e.name}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien re\xe7u votre demande de rendez-vous pour le service : <strong>${e.service}</strong>.
    </p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #80C342;">
      <p style="margin: 0; color: #333333; font-size: 16px;">
        <strong>Date pr\xe9vue :</strong> ${new Date(e.date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}<br>
        <strong>Heure :</strong> ${e.time}
      </p>
    </div>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous vous contacterons rapidement pour confirmer la date et l'heure d\xe9finitives.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'\xe9quipe Y3 Audit & Conseils</strong>
    </p>
  `),text:`Bonjour ${e.name},

Nous avons bien re\xe7u votre demande de rendez-vous pour le service : ${e.service}.

Date pr\xe9vue : ${new Date(e.date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
Heure : ${e.time}

Nous vous contacterons rapidement pour confirmer la date et l'heure d\xe9finitives.

Cordialement,
L'\xe9quipe Y3 Audit & Conseils`}}function o(e){return{html:t(`
    <h2 style="color: #073E5D; margin-top: 0;">Merci pour votre message !</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${e.name}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien re\xe7u votre message concernant : <strong>"${e.subject}"</strong>.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Notre \xe9quipe va l'examiner et vous r\xe9pondra dans les plus brefs d\xe9lais.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'\xe9quipe Y3 Audit & Conseils</strong>
    </p>
  `),text:`Bonjour ${e.name},

Nous avons bien re\xe7u votre message : "${e.subject}".

Nous vous r\xe9pondrons rapidement.

Cordialement,
L'\xe9quipe Y3 Audit & Conseils`}}function n(e){return{html:t(`
    <h2 style="color: #073E5D; margin-top: 0;">Votre candidature a bien \xe9t\xe9 re\xe7ue !</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${e.firstName}</strong>,
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous avons bien re\xe7u votre candidature pour le poste de <strong>${e.position}</strong>.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Nous vous remercions de l'int\xe9r\xeat port\xe9 \xe0 notre cabinet. Nous reviendrons vers vous apr\xe8s \xe9tude de votre dossier.
    </p>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'\xe9quipe Y3 Audit & Conseils</strong>
    </p>
  `),text:`Bonjour ${e.firstName},

Nous avons bien re\xe7u votre candidature pour le poste de ${e.position}.

Nous vous remercions de l'int\xe9r\xeat port\xe9 \xe0 notre cabinet.
Nous reviendrons vers vous apr\xe8s \xe9tude de votre dossier.

Cordialement,
L'\xe9quipe Y3 Audit & Conseils`}}function i(e){let r="",o="";return"confirme"===e.status?(r=`
      <div style="background-color: #d4edda; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #28a745;">
        <p style="margin: 0; color: #155724; font-size: 16px;">
          <strong>✅ Votre rendez-vous est confirm\xe9 !</strong><br>
          Date : ${e.date?new Date(e.date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"À confirmer"}<br>
          Heure : ${e.time||"À confirmer"}
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Nous vous attendons avec plaisir \xe0 cette date.
      </p>
    `,o=`Votre rendez-vous pour le service ${e.service} est confirm\xe9 pour le ${e.date?new Date(e.date).toLocaleDateString("fr-FR"):"date à confirmer"} \xe0 ${e.time||"heure à confirmer"}.`):"a_replanifier"===e.status?(r=`
      <div style="background-color: #fff3cd; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #ffc107;">
        <p style="margin: 0; color: #856404; font-size: 16px;">
          <strong>⚠️ Votre rendez-vous doit \xeatre replanifi\xe9</strong>
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Merci de r\xe9pondre \xe0 ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.
      </p>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        Nous reviendrons vers vous pour confirmer la nouvelle date.
      </p>
    `,o=`Votre rendez-vous pour le service ${e.service} doit \xeatre replanifi\xe9. Merci de r\xe9pondre \xe0 ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.`):"annule"===e.status&&(r=`
      <div style="background-color: #f8d7da; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #dc3545;">
        <p style="margin: 0; color: #721c24; font-size: 16px;">
          <strong>❌ Votre rendez-vous a \xe9t\xe9 annul\xe9</strong>
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        N'h\xe9sitez pas \xe0 nous recontacter pour fixer une nouvelle date.
      </p>
    `,o=`Nous vous informons que votre rendez-vous pour le service ${e.service} a \xe9t\xe9 annul\xe9. N'h\xe9sitez pas \xe0 nous recontacter pour fixer une nouvelle date.`),{html:t(`
    <h2 style="color: #073E5D; margin-top: 0;">Mise \xe0 jour de votre rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Bonjour <strong>${e.name}</strong>,
    </p>
    ${r}
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <strong>L'\xe9quipe Y3 Audit & Conseils</strong>
    </p>
  `),text:`Bonjour ${e.name},

${o}

Cordialement,
L'\xe9quipe Y3 Audit & Conseils`}}e.s(["getApplicationConfirmationTemplate",()=>n,"getAppointmentConfirmationTemplate",()=>r,"getAppointmentStatusTemplate",()=>i,"getContactConfirmationTemplate",()=>o])},65972,e=>{"use strict";var t=e.i(47667),r=e.i(25757),o=e.i(71077),n=e.i(5803),i=e.i(28567),a=e.i(7273),s=e.i(36696),l=e.i(64885),d=e.i(43637),p=e.i(84698),u=e.i(88192),c=e.i(22039),x=e.i(86510),g=e.i(73236),m=e.i(69488),f=e.i(93695);e.i(24093);var h=e.i(37003),v=e.i(40195),y=e.i(12388),b=e.i(13338),C=e.i(9714);let R=new y.PrismaClient;async function w(e){try{let{name:t,email:r,subject:o,message:n}=await e.json();if(!t||!r||!o||!n)return v.NextResponse.json({error:"Missing required fields"},{status:400});let i=await R.contactSubmission.create({data:{name:t,email:r,subject:o,message:n}}),a=(0,C.getContactConfirmationTemplate)({name:t,subject:o});return await (0,b.sendMail)({to:r,subject:"Merci pour votre message !",text:a.text,html:a.html}),v.NextResponse.json(i,{status:201})}catch(e){return console.error("Error creating contact submission:",e),v.NextResponse.json({error:e instanceof Error?e.message:String(e)},{status:500})}}e.s(["POST",()=>w],73354);var E=e.i(73354);let N=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/projet-interne/y3-audit-conseils/app/api/contact/route.ts",nextConfigOutput:"",userland:E}),{workAsyncStorage:A,workUnitAsyncStorage:q,serverHooks:z}=N;function $(){return(0,o.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:q})}async function j(e,t,o){N.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/contact/route";v=v.replace(/\/index$/,"")||"/";let y=await N.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:b,params:C,nextConfig:R,parsedUrl:w,isDraftMode:E,prerenderManifest:A,routerServerContext:q,isOnDemandRevalidate:z,revalidateOnlyGenerated:$,resolvedPathname:j,clientReferenceManifest:k,serverActionsManifest:T}=y,D=(0,s.normalizeAppPath)(v),S=!!(A.dynamicRoutes[D]||A.routes[j]),P=async()=>((null==q?void 0:q.render404)?await q.render404(e,t,w,!1):t.end("This page could not be found"),null);if(S&&!E){let e=!!A.routes[j],t=A.dynamicRoutes[D];if(t&&!1===t.fallback&&!e){if(R.experimental.adapterPath)return await P();throw new f.NoFallbackError}}let O=null;!S||N.isDev||E||(O="/index"===(O=j)?"/":O);let H=!0===N.isDev||!S,_=S&&!H;T&&k&&(0,a.setManifestsSingleton)({page:v,clientReferenceManifest:k,serverActionsManifest:T});let M=e.method||"GET",L=(0,i.getTracer)(),U=L.getActiveScopeSpan(),I={params:C,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!R.experimental.authInterrupts},cacheComponents:!!R.cacheComponents,supportsDynamicResponse:H,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:R.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o,n)=>N.onRequestError(e,t,o,n,q)},sharedContext:{buildId:b}},F=new l.NodeNextRequest(e),B=new l.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(F,(0,d.signalFromNodeResponse)(t));try{let a=async e=>N.handle(Y,I).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${M} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${v}`)}),s=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&z&&$&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await a(n);e.fetchMetrics=I.renderOpts.fetchMetrics;let l=I.renderOpts.pendingWaitUntil;l&&o.waitUntil&&(o.waitUntil(l),l=void 0);let d=I.renderOpts.collectedTags;if(!S)return await (0,c.sendResponse)(F,B,i,I.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==I.renderOpts.collectedRevalidate&&!(I.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&I.renderOpts.collectedRevalidate,o=void 0===I.renderOpts.collectedExpire||I.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:I.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await N.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:z})},!1,q),t}},p=await N.handleResponse({req:e,nextConfig:R,cacheKey:O,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:z,revalidateOnlyGenerated:$,responseGenerator:d,waitUntil:o.waitUntil,isMinimalMode:s});if(!S)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",z?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),E&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,x.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&S||f.delete(m.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,c.sendResponse)(F,B,new Response(p.value.body,{headers:f,status:p.value.status||200})),null};U?await l(U):await L.withPropagatedContext(e.headers,()=>L.trace(p.BaseServerSpan.handleRequest,{spanName:`${M} ${v}`,kind:i.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await N.onRequestError(e,t,{routerKind:"App Router",routePath:D,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:z})},!1,q),S)throw t;return await (0,c.sendResponse)(F,B,new Response(null,{status:500})),null}}e.s(["handler",()=>j,"patchFetch",()=>$,"routeModule",()=>N,"serverHooks",()=>z,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>q],65972)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f567683._.js.map