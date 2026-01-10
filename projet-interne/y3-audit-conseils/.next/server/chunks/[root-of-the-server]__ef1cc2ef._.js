module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},12388,(e,t,r)=>{t.exports=e.x("@prisma/client-7c354e4641fa1594",()=>require("@prisma/client-7c354e4641fa1594"))},9714,e=>{"use strict";function t(e){return`
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
L'\xe9quipe Y3 Audit & Conseils`}}e.s(["getApplicationConfirmationTemplate",()=>n,"getAppointmentConfirmationTemplate",()=>r,"getAppointmentStatusTemplate",()=>i,"getContactConfirmationTemplate",()=>o])},24868,(e,t,r)=>{t.exports=e.x("fs/promises",()=>require("fs/promises"))},26991,e=>{"use strict";var t=e.i(47667),r=e.i(25757),o=e.i(71077),n=e.i(5803),i=e.i(28567),s=e.i(7273),a=e.i(36696),l=e.i(64885),d=e.i(43637),u=e.i(84698),p=e.i(88192),c=e.i(22039),x=e.i(86510),m=e.i(73236),g=e.i(69488),f=e.i(93695);e.i(24093);var h=e.i(37003),v=e.i(40195),y=e.i(12388),b=e.i(24868),E=e.i(14747),w=e.i(13338),R=e.i(9714);let C=null;async function N(e){try{let t,r=await e.formData(),o=r.get("firstName"),n=r.get("lastName"),i=r.get("email"),s=r.get("phone"),a=r.get("position"),l=r.get("cv"),d=r.get("coverLetter");if(!o||!n||!i||!s||!a||!l){let e=[];return o||e.push("firstName"),n||e.push("lastName"),i||e.push("email"),s||e.push("phone"),a||e.push("position"),l||e.push("cv"),v.NextResponse.json({error:"Champs manquants",details:`Les champs suivants sont requis : ${e.join(", ")}`},{status:400})}if(!(l instanceof File))return v.NextResponse.json({error:"Format de fichier invalide",details:"Le CV doit être un fichier valide"},{status:400});let u=E.default.join(process.cwd(),"public","uploads","cvs");try{await (0,b.mkdir)(u,{recursive:!0})}catch(e){if("EEXIST"!==e.code)throw console.error("Error creating uploads directory:",e),Error("Impossible de créer le dossier d'upload")}let p=Buffer.from(await l.arrayBuffer()),c=`${Date.now()}-${l.name.replace(/[^a-zA-Z0-9.-]/g,"_")}`,x=E.default.join(u,c);try{await (0,b.writeFile)(x,p)}catch(e){return console.error("Error writing CV file:",e),v.NextResponse.json({error:"Erreur lors de l'enregistrement du fichier",details:"Impossible d'enregistrer le CV. Vérifiez les permissions du dossier."},{status:500})}try{let e=function(){if(!C)try{if(!process.env.DATABASE_URL)throw console.error("DATABASE_URL is not defined in environment variables"),Error('DATABASE_URL is not configured. Please create a .env file with DATABASE_URL="file:../../prisma/dev.db"');C=new y.PrismaClient({log:["error"]})}catch(e){throw console.error("Failed to initialize Prisma:",e),e}return C}();t=await e.jobApplication.create({data:{firstName:o,lastName:n,email:i,phone:s,position:a,cvPath:`/uploads/cvs/${c}`,coverLetter:d||null}})}catch(e){console.error("Database error:",e);try{await (0,b.unlink)(x)}catch(e){console.error("Error deleting uploaded file:",e)}if("P1001"===e.code||e.message?.includes("Can't reach database server"))return v.NextResponse.json({error:"Erreur de connexion à la base de données",details:"Impossible de se connecter à la base de données. Veuillez vérifier la configuration."},{status:503});if(e.message?.includes("ENOENT")||e.message?.includes("no such file")||e.message?.includes("SQLITE_CANTOPEN"))return v.NextResponse.json({error:"Base de données introuvable",details:"Le fichier de base de données n'existe pas. Veuillez exécuter: npm run prisma:migrate"},{status:500});return v.NextResponse.json({error:"Erreur de base de données",details:e.message||"Impossible d'enregistrer la candidature. Veuillez réessayer plus tard.",code:e.code||"UNKNOWN"},{status:500})}try{let e=(0,R.getApplicationConfirmationTemplate)({firstName:o,position:a}),t=await (0,w.sendMail)({to:i,subject:"Votre candidature a bien été reçue !",text:e.text,html:e.html});t.success||console.warn("Email sending failed:",t.error)}catch(e){console.error("Email sending failed:",e)}try{let e=`Nouvelle candidature spontan\xe9e

Informations du candidat :
- Nom : ${n}
- Pr\xe9nom : ${o}
- Email : ${i}
- T\xe9l\xe9phone : ${s}
- Poste recherch\xe9 : ${a}
${d?`- Lettre de motivation :
${d}
`:""}
Date de candidature : ${new Date().toLocaleString("fr-FR")}

Le CV est joint \xe0 cet email.`,t=await (0,w.sendMail)({to:process.env.ADMIN_EMAIL||"hello@ycubeac.com",subject:`Nouvelle candidature spontan\xe9e - ${o} ${n} - ${a}`,text:e,attachments:[{filename:c,path:x}]});t.success||console.warn("Admin email sending failed:",t.error)}catch(e){console.error("Admin email sending failed:",e)}return v.NextResponse.json({success:!0,application:t,message:"Candidature créée avec succès"},{status:201})}catch(e){if(console.error("Error creating job application:",e),console.error("Error stack:",e.stack),console.error("Error name:",e.name),e instanceof SyntaxError||e.message?.includes("JSON"))return v.NextResponse.json({error:"Format de données invalide",details:"Les données envoyées ne sont pas au bon format"},{status:400});return v.NextResponse.json({error:"Une erreur est survenue",details:e.message||"Erreur lors du traitement de votre demande"},{status:500})}finally{try{C&&await C.$disconnect()}catch(e){console.error("Error disconnecting Prisma:",e)}}}e.s(["POST",()=>N],23921);var A=e.i(23921);let $=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/application/route",pathname:"/api/application",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/projet-interne/y3-audit-conseils/app/api/application/route.ts",nextConfigOutput:"",userland:A}),{workAsyncStorage:j,workUnitAsyncStorage:z,serverHooks:T}=$;function q(){return(0,o.patchFetch)({workAsyncStorage:j,workUnitAsyncStorage:z})}async function D(e,t,o){$.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/application/route";v=v.replace(/\/index$/,"")||"/";let y=await $.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:b,params:E,nextConfig:w,parsedUrl:R,isDraftMode:C,prerenderManifest:N,routerServerContext:A,isOnDemandRevalidate:j,revalidateOnlyGenerated:z,resolvedPathname:T,clientReferenceManifest:q,serverActionsManifest:D}=y,k=(0,a.normalizeAppPath)(v),P=!!(N.dynamicRoutes[k]||N.routes[T]),S=async()=>((null==A?void 0:A.render404)?await A.render404(e,t,R,!1):t.end("This page could not be found"),null);if(P&&!C){let e=!!N.routes[T],t=N.dynamicRoutes[k];if(t&&!1===t.fallback&&!e){if(w.experimental.adapterPath)return await S();throw new f.NoFallbackError}}let L=null;!P||$.isDev||C||(L="/index"===(L=T)?"/":L);let _=!0===$.isDev||!P,O=P&&!_;D&&q&&(0,s.setManifestsSingleton)({page:v,clientReferenceManifest:q,serverActionsManifest:D});let I=e.method||"GET",U=(0,i.getTracer)(),H=U.getActiveScopeSpan(),B={params:E,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!w.experimental.authInterrupts},cacheComponents:!!w.cacheComponents,supportsDynamicResponse:_,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:w.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o,n)=>$.onRequestError(e,t,o,n,A)},sharedContext:{buildId:b}},F=new l.NodeNextRequest(e),M=new l.NodeNextResponse(t),V=d.NextRequestAdapter.fromNodeNextRequest(F,(0,d.signalFromNodeResponse)(t));try{let s=async e=>$.handle(V,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=U.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${I} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${I} ${v}`)}),a=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let d=async({previousCacheEntry:r})=>{try{if(!a&&j&&z&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await s(n);e.fetchMetrics=B.renderOpts.fetchMetrics;let l=B.renderOpts.pendingWaitUntil;l&&o.waitUntil&&(o.waitUntil(l),l=void 0);let d=B.renderOpts.collectedTags;if(!P)return await (0,c.sendResponse)(F,M,i,B.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[g.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,o=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await $.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:O,isOnDemandRevalidate:j})},!1,A),t}},u=await $.handleResponse({req:e,nextConfig:w,cacheKey:L,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:j,revalidateOnlyGenerated:z,responseGenerator:d,waitUntil:o.waitUntil,isMinimalMode:a});if(!P)return null;if((null==u||null==(i=u.value)?void 0:i.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});a||t.setHeader("x-nextjs-cache",j?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,x.fromNodeOutgoingHttpHeaders)(u.value.headers);return a&&P||f.delete(g.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,m.getCacheControlHeader)(u.cacheControl)),await (0,c.sendResponse)(F,M,new Response(u.value.body,{headers:f,status:u.value.status||200})),null};H?await l(H):await U.withPropagatedContext(e.headers,()=>U.trace(u.BaseServerSpan.handleRequest,{spanName:`${I} ${v}`,kind:i.SpanKind.SERVER,attributes:{"http.method":I,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await $.onRequestError(e,t,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:O,isOnDemandRevalidate:j})},!1,A),P)throw t;return await (0,c.sendResponse)(F,M,new Response(null,{status:500})),null}}e.s(["handler",()=>D,"patchFetch",()=>q,"routeModule",()=>$,"serverHooks",()=>T,"workAsyncStorage",()=>j,"workUnitAsyncStorage",()=>z],26991)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef1cc2ef._.js.map