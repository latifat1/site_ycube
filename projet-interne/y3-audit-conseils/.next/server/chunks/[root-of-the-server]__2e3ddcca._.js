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
L'\xe9quipe Y3 Audit & Conseils`}}function n(e){return{html:t(`
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
L'\xe9quipe Y3 Audit & Conseils`}}function o(e){return{html:t(`
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
L'\xe9quipe Y3 Audit & Conseils`}}function s(e){let r="",n="";return"confirme"===e.status?(r=`
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
    `,n=`Votre rendez-vous pour le service ${e.service} est confirm\xe9 pour le ${e.date?new Date(e.date).toLocaleDateString("fr-FR"):"date à confirmer"} \xe0 ${e.time||"heure à confirmer"}.`):"a_replanifier"===e.status?(r=`
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
    `,n=`Votre rendez-vous pour le service ${e.service} doit \xeatre replanifi\xe9. Merci de r\xe9pondre \xe0 ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.`):"annule"===e.status&&(r=`
      <div style="background-color: #f8d7da; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #dc3545;">
        <p style="margin: 0; color: #721c24; font-size: 16px;">
          <strong>❌ Votre rendez-vous a \xe9t\xe9 annul\xe9</strong>
        </p>
      </div>
      <p style="color: #333333; font-size: 16px; line-height: 1.6;">
        N'h\xe9sitez pas \xe0 nous recontacter pour fixer une nouvelle date.
      </p>
    `,n=`Nous vous informons que votre rendez-vous pour le service ${e.service} a \xe9t\xe9 annul\xe9. N'h\xe9sitez pas \xe0 nous recontacter pour fixer une nouvelle date.`),{html:t(`
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

${n}

Cordialement,
L'\xe9quipe Y3 Audit & Conseils`}}e.s(["getApplicationConfirmationTemplate",()=>o,"getAppointmentConfirmationTemplate",()=>r,"getAppointmentStatusTemplate",()=>s,"getContactConfirmationTemplate",()=>n])},17101,e=>{"use strict";var t=e.i(47667),r=e.i(25757),n=e.i(71077),o=e.i(5803),s=e.i(28567),a=e.i(7273),i=e.i(36696),l=e.i(64885),d=e.i(43637),u=e.i(84698),p=e.i(88192),c=e.i(22039),m=e.i(86510),x=e.i(73236),g=e.i(69488),f=e.i(93695);e.i(24093);var h=e.i(37003),v=e.i(40195),y=e.i(12388),b=e.i(13338),R=e.i(9714);let E=null;async function C(e){try{let t,r=function(){if(!E)try{if(!process.env.DATABASE_URL)throw console.error("DATABASE_URL is not defined in environment variables"),Error('DATABASE_URL is not configured. Please create a .env file with DATABASE_URL="file:../../prisma/dev.db"');(E=new y.PrismaClient({log:["error"]})).$connect().catch(e=>{throw console.error("Failed to connect to database:",e),e})}catch(e){throw console.error("Failed to initialize Prisma:",e),console.error("DATABASE_URL:",process.env.DATABASE_URL),e}return E}(),{service:n,name:o,company:s,phone:a,email:i,date:l,time:d,message:u}=await e.json();if(!n||!o||!a||!i||!l||!d){let e=[];return n||e.push("service"),o||e.push("name"),a||e.push("phone"),i||e.push("email"),l||e.push("date"),d||e.push("time"),v.NextResponse.json({error:"Champs manquants",details:`Les champs suivants sont requis : ${e.join(", ")}`},{status:400})}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))return v.NextResponse.json({error:"Email invalide",details:"Le format de l'email n'est pas valide"},{status:400});try{t=await r.appointment.create({data:{service:n,name:o,company:s||null,phone:a,email:i,date:new Date(l),time:d,message:u||null}})}catch(t){if(console.error("Database error:",t),console.error("Database error details:",{code:t.code,message:t.message,meta:t.meta,stack:t.stack,cause:t.cause}),"P2002"===t.code)return v.NextResponse.json({error:"Erreur de base de données",details:"Un rendez-vous similaire existe déjà"},{status:409});if("P1001"===t.code||t.message?.includes("Can't reach database server"))return v.NextResponse.json({error:"Erreur de connexion à la base de données",details:"Impossible de se connecter à la base de données. Veuillez vérifier la configuration."},{status:503});if(t.message?.includes("ENOENT")||t.message?.includes("no such file")||t.message?.includes("SQLITE_CANTOPEN"))return v.NextResponse.json({error:"Base de données introuvable",details:"Le fichier de base de données n'existe pas. Veuillez exécuter: npx prisma migrate deploy"},{status:500});if("P2003"===t.code||t.message?.includes("Invalid")||t.message?.includes("Validation"))return v.NextResponse.json({error:"Erreur de validation",details:t.message||"Les données envoyées ne sont pas valides. Vérifiez que tous les champs requis sont remplis correctement."},{status:400});let e=t.message||"Impossible d'enregistrer le rendez-vous. Veuillez réessayer plus tard.";return v.NextResponse.json({error:"Erreur de base de données",details:e,code:t.code||"UNKNOWN",meta:t.meta||null},{status:500})}try{let e=(0,R.getAppointmentConfirmationTemplate)({name:o,service:n,date:l,time:d}),t=await (0,b.sendMail)({to:i,subject:"Confirmation de votre demande de rendez-vous",text:e.text,html:e.html});t.success||console.warn("Email sending failed:",t.error)}catch(e){console.error("Email sending failed:",e)}return v.NextResponse.json({success:!0,appointment:t,message:"Rendez-vous créé avec succès"},{status:201})}catch(e){if(console.error("Error creating appointment:",e),console.error("Error stack:",e.stack),console.error("Error name:",e.name),console.error("Error message:",e.message),e instanceof SyntaxError||e.message?.includes("JSON"))return v.NextResponse.json({error:"Format de données invalide",details:"Les données envoyées ne sont pas au bon format"},{status:400});if(e.message?.includes("PrismaClient")||e.message?.includes("prisma"))return v.NextResponse.json({error:"Erreur de configuration",details:"Le client de base de données n'est pas correctement configuré. Veuillez exécuter: npx prisma generate"},{status:500});if(e.message?.includes("DATABASE_URL")||e.message?.includes("PrismaClient"))return v.NextResponse.json({error:"Erreur de configuration",details:e.message||'Le client de base de données n\'est pas correctement configuré. Veuillez créer un fichier .env avec DATABASE_URL="file:../../prisma/dev.db"'},{status:500});return v.NextResponse.json({error:"Une erreur est survenue",details:e.message||"Erreur lors du traitement de votre demande"},{status:500})}finally{try{E&&await E.$disconnect()}catch(e){console.error("Error disconnecting Prisma:",e)}}}e.s(["POST",()=>C],52085);var A=e.i(52085);let w=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/appointment/route",pathname:"/api/appointment",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/projet-interne/y3-audit-conseils/app/api/appointment/route.ts",nextConfigOutput:"",userland:A}),{workAsyncStorage:N,workUnitAsyncStorage:z,serverHooks:j}=w;function T(){return(0,n.patchFetch)({workAsyncStorage:N,workUnitAsyncStorage:z})}async function q(e,t,n){w.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/appointment/route";v=v.replace(/\/index$/,"")||"/";let y=await w.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:b,params:R,nextConfig:E,parsedUrl:C,isDraftMode:A,prerenderManifest:N,routerServerContext:z,isOnDemandRevalidate:j,revalidateOnlyGenerated:T,resolvedPathname:q,clientReferenceManifest:D,serverActionsManifest:$}=y,k=(0,i.normalizeAppPath)(v),S=!!(N.dynamicRoutes[k]||N.routes[q]),P=async()=>((null==z?void 0:z.render404)?await z.render404(e,t,C,!1):t.end("This page could not be found"),null);if(S&&!A){let e=!!N.routes[q],t=N.dynamicRoutes[k];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await P();throw new f.NoFallbackError}}let L=null;!S||w.isDev||A||(L="/index"===(L=q)?"/":L);let _=!0===w.isDev||!S,U=S&&!_;$&&D&&(0,a.setManifestsSingleton)({page:v,clientReferenceManifest:D,serverActionsManifest:$});let O=e.method||"GET",B=(0,s.getTracer)(),H=B.getActiveScopeSpan(),I={params:R,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:_,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n,o)=>w.onRequestError(e,t,n,o,z)},sharedContext:{buildId:b}},F=new l.NodeNextRequest(e),M=new l.NodeNextResponse(t),V=d.NextRequestAdapter.fromNodeNextRequest(F,(0,d.signalFromNodeResponse)(t));try{let a=async e=>w.handle(V,I).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=B.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${O} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${O} ${v}`)}),i=!!(0,o.getRequestMeta)(e,"minimalMode"),l=async o=>{var s,l;let d=async({previousCacheEntry:r})=>{try{if(!i&&j&&T&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await a(o);e.fetchMetrics=I.renderOpts.fetchMetrics;let l=I.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=I.renderOpts.collectedTags;if(!S)return await (0,c.sendResponse)(F,M,s,I.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[g.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==I.renderOpts.collectedRevalidate&&!(I.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&I.renderOpts.collectedRevalidate,n=void 0===I.renderOpts.collectedExpire||I.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:I.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:j})},!1,z),t}},u=await w.handleResponse({req:e,nextConfig:E,cacheKey:L,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:j,revalidateOnlyGenerated:T,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:i});if(!S)return null;if((null==u||null==(s=u.value)?void 0:s.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",j?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,m.fromNodeOutgoingHttpHeaders)(u.value.headers);return i&&S||f.delete(g.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,x.getCacheControlHeader)(u.cacheControl)),await (0,c.sendResponse)(F,M,new Response(u.value.body,{headers:f,status:u.value.status||200})),null};H?await l(H):await B.withPropagatedContext(e.headers,()=>B.trace(u.BaseServerSpan.handleRequest,{spanName:`${O} ${v}`,kind:s.SpanKind.SERVER,attributes:{"http.method":O,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:j})},!1,z),S)throw t;return await (0,c.sendResponse)(F,M,new Response(null,{status:500})),null}}e.s(["handler",()=>q,"patchFetch",()=>T,"routeModule",()=>w,"serverHooks",()=>j,"workAsyncStorage",()=>N,"workUnitAsyncStorage",()=>z],17101)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2e3ddcca._.js.map