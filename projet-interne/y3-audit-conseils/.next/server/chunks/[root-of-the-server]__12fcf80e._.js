module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},16815,e=>{"use strict";async function t({to:t,subject:r,text:o,html:n,attachments:s,cc:a,bcc:i}){try{if(!process.env.RESEND_API_KEY)return console.warn("Email not configured. Skipping email send."),{success:!1,error:"Email configuration is missing. Please set RESEND_API_KEY in your .env file"};let l=Array.isArray(t)?t:[t],d=a?Array.isArray(a)?a:[a]:[],p=i?Array.isArray(i)?i:[i]:[],u=[];if(s&&s.length>0){let t=await e.A(60815),r=await e.A(89793);for(let e of s){let o;if(e.content)o=e.content;else if(e.path){let n=r.isAbsolute(e.path)?e.path:r.join(process.cwd(),e.path);o=await t.readFile(n)}else{console.warn(`Attachment ${e.filename} has no content or path, skipping`);continue}u.push({filename:e.filename,content:o.toString("base64"),type:e.contentType})}}let c=process.env.RESEND_FROM_EMAIL||"hello@ycubeac.com",g={from:`Y3 Audit & Conseils <${c}>`,to:l,subject:r,text:o,html:n||o.replace(/\n/g,"<br>")};d.length>0&&(g.cc=d),p.length>0&&(g.bcc=p),u.length>0&&(g.attachments=u);let x=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify(g)}),m=await x.json();if(!x.ok){let e=m.message||m.error?.message||`HTTP error! status: ${x.status}`;throw console.error("Resend API Error:",{status:x.status,statusText:x.statusText,error:m,payload:{...g,text:g.text.substring(0,100)+"..."}}),Error(e)}return console.log("✅ Email sent successfully via Resend:",{to:t,subject:r,messageId:m.id,from:g.from}),{success:!0,messageId:m.id}}catch(e){return console.error("❌ Error sending email:",{to:t,subject:r,error:e.message,errorDetails:e.response||e.data,stack:e.stack}),{success:!1,error:e.message||"Unknown error occurred",errorDetails:e.response||e.data}}}e.s(["sendMail",()=>t])},44716,e=>{"use strict";function t(e){return`
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
L'\xe9quipe Y3 Audit & Conseils`}}function s(e){let r="",o="";return"confirme"===e.status?(r=`
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
L'\xe9quipe Y3 Audit & Conseils`}}function a(e){return{html:t(`
    <h2 style="color: #073E5D; margin-top: 0;">Nouvelle demande de rendez-vous</h2>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Une nouvelle demande de rendez-vous a \xe9t\xe9 re\xe7ue.
    </p>
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #80C342;">
      <p style="margin: 0 0 10px 0; color: #333333; font-size: 16px;">
        <strong>Nom :</strong> ${e.name}<br>
        <strong>Email :</strong> ${e.email}<br>
        <strong>T\xe9l\xe9phone :</strong> ${e.phone}<br>
        ${e.company?`<strong>Entreprise :</strong> ${e.company}<br>`:""}
        <strong>Service :</strong> ${e.service}<br>
        <strong>Date :</strong> ${new Date(e.date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}<br>
        <strong>Heure :</strong> ${e.time}
      </p>
      ${e.message?`<p style="margin: 10px 0 0 0; color: #333333; font-size: 16px;"><strong>Message :</strong><br>${e.message}</p>`:""}
    </div>
    <p style="color: #333333; font-size: 16px; line-height: 1.6;">
      Veuillez contacter le client pour confirmer le rendez-vous.
    </p>
  `),text:`Nouvelle demande de rendez-vous

Nom : ${e.name}
Email : ${e.email}
T\xe9l\xe9phone : ${e.phone}
${e.company?`Entreprise : ${e.company}
`:""}Service : ${e.service}
Date : ${new Date(e.date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}
Heure : ${e.time}
${e.message?`
Message :
${e.message}`:""}

Veuillez contacter le client pour confirmer le rendez-vous.`}}e.s(["getApplicationConfirmationTemplate",()=>n,"getAppointmentConfirmationTemplate",()=>r,"getAppointmentNotificationTemplate",()=>a,"getAppointmentStatusTemplate",()=>s,"getContactConfirmationTemplate",()=>o])},65107,e=>{"use strict";var t=e.i(86795),r=e.i(91010),o=e.i(70349),n=e.i(90128),s=e.i(39414),a=e.i(4489),i=e.i(18047),l=e.i(8472),d=e.i(86937),p=e.i(91618),u=e.i(16521),c=e.i(89493),g=e.i(69761),x=e.i(56510),m=e.i(11587),f=e.i(93695);e.i(29720);var h=e.i(24633),v=e.i(28549),y=e.i(16815),b=e.i(44716);async function R(e){try{let{name:t,email:r,subject:o,message:n}=await e.json();if(!t||!r||!o||!n)return v.NextResponse.json({error:"Missing required fields"},{status:400});let s={id:"temp-"+Date.now(),name:t,email:r,subject:o,message:n,createdAt:new Date},a=(0,b.getContactConfirmationTemplate)({name:t,subject:o});return await (0,y.sendMail)({to:r,subject:"Merci pour votre message !",text:a.text,html:a.html}),v.NextResponse.json(s,{status:201})}catch(e){return console.error("Error creating contact submission:",e),v.NextResponse.json({error:e instanceof Error?e.message:String(e)},{status:500})}}e.s(["POST",()=>R],28875);var E=e.i(28875);let w=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api.disabled/contact/route",pathname:"/api.disabled/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/site_ycube/projet-interne/y3-audit-conseils/app/api.disabled/contact/route.ts",nextConfigOutput:"export",userland:E}),{workAsyncStorage:C,workUnitAsyncStorage:A,serverHooks:$}=w;function N(){return(0,o.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:A})}async function z(e,t,o){w.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api.disabled/contact/route";v=v.replace(/\/index$/,"")||"/";let y=await w.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:b,params:R,nextConfig:E,parsedUrl:C,isDraftMode:A,prerenderManifest:$,routerServerContext:N,isOnDemandRevalidate:z,revalidateOnlyGenerated:D,resolvedPathname:k,clientReferenceManifest:T,serverActionsManifest:j}=y,S=(0,i.normalizeAppPath)(v),_=!!($.dynamicRoutes[S]||$.routes[k]),q=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,C,!1):t.end("This page could not be found"),null);if(_&&!A){let e=!!$.routes[k],t=$.dynamicRoutes[S];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await q();throw new f.NoFallbackError}}let P=null;!_||w.isDev||A||(P="/index"===(P=k)?"/":P);let O=!0===w.isDev||!_,H=_&&!O;j&&T&&(0,a.setManifestsSingleton)({page:v,clientReferenceManifest:T,serverActionsManifest:j});let M=e.method||"GET",I=(0,s.getTracer)(),L=I.getActiveScopeSpan(),U={params:R,prerenderManifest:$,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:O,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,o,n)=>w.onRequestError(e,t,o,n,N)},sharedContext:{buildId:b}},F=new l.NodeNextRequest(e),Y=new l.NodeNextResponse(t),B=d.NextRequestAdapter.fromNodeNextRequest(F,(0,d.signalFromNodeResponse)(t));try{let a=async e=>w.handle(B,U).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=I.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=r.get("next.route");if(o){let t=`${M} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${v}`)}),i=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var s,l;let d=async({previousCacheEntry:r})=>{try{if(!i&&z&&D&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await a(n);e.fetchMetrics=U.renderOpts.fetchMetrics;let l=U.renderOpts.pendingWaitUntil;l&&o.waitUntil&&(o.waitUntil(l),l=void 0);let d=U.renderOpts.collectedTags;if(!_)return await (0,c.sendResponse)(F,Y,s,U.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==U.renderOpts.collectedRevalidate&&!(U.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&U.renderOpts.collectedRevalidate,o=void 0===U.renderOpts.collectedExpire||U.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:U.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:o}}}}catch(t){throw(null==r?void 0:r.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:z})},!1,N),t}},p=await w.handleResponse({req:e,nextConfig:E,cacheKey:P,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:$,isRoutePPREnabled:!1,isOnDemandRevalidate:z,revalidateOnlyGenerated:D,responseGenerator:d,waitUntil:o.waitUntil,isMinimalMode:i});if(!_)return null;if((null==p||null==(s=p.value)?void 0:s.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",z?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return i&&_||f.delete(m.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,x.getCacheControlHeader)(p.cacheControl)),await (0,c.sendResponse)(F,Y,new Response(p.value.body,{headers:f,status:p.value.status||200})),null};L?await l(L):await I.withPropagatedContext(e.headers,()=>I.trace(p.BaseServerSpan.handleRequest,{spanName:`${M} ${v}`,kind:s.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:S,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:z})},!1,N),_)throw t;return await (0,c.sendResponse)(F,Y,new Response(null,{status:500})),null}}e.s(["handler",()=>z,"patchFetch",()=>N,"routeModule",()=>w,"serverHooks",()=>$,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>A],65107)},60815,e=>{e.v(t=>Promise.all(["server/chunks/[externals]_fs_promises_0bfe4114._.js"].map(t=>e.l(t))).then(()=>t(24868)))},89793,e=>{e.v(t=>Promise.all(["server/chunks/[externals]_path_e30b8067._.js"].map(t=>e.l(t))).then(()=>t(14747)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__12fcf80e._.js.map