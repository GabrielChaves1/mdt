import{C as d}from"./index-c2b54d01.js";import{c as D,S as ee,s as H,n as te,i as N,a as V,t as re,f as se,b as ie,r as W,d as ne,e as C,g as h,u as oe,p as ae,h as o,C as le,j as Q,k as c,l as i,Z as ce,B as G,L as ue,m as w,o as de}from"./index-42cf2d40.js";import{M as R,A,E as he}from"./index-dfe5cd39.js";import{T as fe}from"./index-bdc69d45.js";import"./index-4b38e630.js";const pe=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),me=D("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),ye=D("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);class ge extends ee{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),q(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),H(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&K(this.currentQuery,a,this.options,s)&&this.executeFetch(),this.updateResult(r),n&&(this.currentQuery!==a||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();n&&(this.currentQuery!==a||this.options.enabled!==s.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t),s=this.createResult(r,t);return be(this,s,t)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(te)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),N||this.currentResult.isStale||!V(this.options.staleTime))return;const r=re(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(N||this.options.enabled===!1||!V(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||se.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,a=this.options,n=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,v=t!==s,m=v?t.state:this.currentQueryInitialState,b=v?this.currentResult:this.previousQueryResult,{state:f}=t;let{dataUpdatedAt:E,error:z,errorUpdatedAt:j,fetchStatus:S,status:g}=f,B=!1,L=!1,y;if(r._optimisticResults){const p=this.hasListeners(),M=!p&&q(t,r),_=p&&K(t,s,r,a);(M||_)&&(S=ie(t.options.networkMode)?"fetching":"paused",E||(g="loading")),r._optimisticResults==="isRestoring"&&(S="idle")}if(r.keepPreviousData&&!f.dataUpdatedAt&&b!=null&&b.isSuccess&&g!=="error")y=b.data,E=b.dataUpdatedAt,g=b.status,B=!0;else if(r.select&&typeof f.data<"u")if(n&&f.data===(l==null?void 0:l.data)&&r.select===this.selectFn)y=this.selectResult;else try{this.selectFn=r.select,y=r.select(f.data),y=W(n==null?void 0:n.data,y,r),this.selectResult=y,this.selectError=null}catch(p){this.selectError=p}else y=f.data;if(typeof r.placeholderData<"u"&&typeof y>"u"&&g==="loading"){let p;if(n!=null&&n.isPlaceholderData&&r.placeholderData===(u==null?void 0:u.placeholderData))p=n.data;else if(p=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof p<"u")try{p=r.select(p),this.selectError=null}catch(M){this.selectError=M}typeof p<"u"&&(g="success",y=W(n==null?void 0:n.data,p,r),L=!0)}this.selectError&&(z=this.selectError,y=this.selectResult,j=Date.now(),g="error");const I=S==="fetching",O=g==="loading",P=g==="error";return{status:g,fetchStatus:S,isLoading:O,isSuccess:g==="success",isError:P,isInitialLoading:O&&I,data:y,dataUpdatedAt:E,error:z,errorUpdatedAt:j,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>m.dataUpdateCount||f.errorUpdateCount>m.errorUpdateCount,isFetching:I,isRefetching:I&&!O,isLoadingError:P&&f.dataUpdatedAt===0,isPaused:S==="paused",isPlaceholderData:L,isPreviousData:B,isRefetchError:P&&f.dataUpdatedAt!==0,isStale:U(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,H(s,r))return;this.currentResult=s;const a={cache:!0},n=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(v=>{const m=v;return this.currentResult[m]!==r[m]&&u.has(m)})};(t==null?void 0:t.listeners)!==!1&&n()&&(a.listeners=!0),this.notify({...a,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!ne(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){C.batch(()=>{if(t.onSuccess){var r,s,a,n;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(a=(n=this.options).onSettled)==null||a.call(n,this.currentResult.data,null)}else if(t.onError){var l,u,v,m;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(v=(m=this.options).onSettled)==null||v.call(m,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:b})=>{b(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ve(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function q(e,t){return ve(e,t)||e.state.dataUpdatedAt>0&&F(e,t,t.refetchOnMount)}function F(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&U(e,t)}return!1}function K(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&U(e,r)}function U(e,t){return e.isStaleByTime(t.staleTime)}function be(e,t,r){return r.keepPreviousData?!1:r.placeholderData!==void 0?t.isPlaceholderData:e.getCurrentResult()!==t}var $={},Re={get exports(){return $},set exports(e){$=e}},X={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=h;function xe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Se=typeof Object.is=="function"?Object.is:xe,Ce=x.useState,we=x.useEffect,Qe=x.useLayoutEffect,Ee=x.useDebugValue;function Ie(e,t){var r=t(),s=Ce({inst:{value:r,getSnapshot:t}}),a=s[0].inst,n=s[1];return Qe(function(){a.value=r,a.getSnapshot=t,T(a)&&n({inst:a})},[e,r,t]),we(function(){return T(a)&&n({inst:a}),e(function(){T(a)&&n({inst:a})})},[e]),Ee(r),r}function T(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Se(e,r)}catch{return!0}}function Oe(e,t){return t()}var Pe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Oe:Ie;X.useSyncExternalStore=x.useSyncExternalStore!==void 0?x.useSyncExternalStore:Pe;(function(e){e.exports=X})(Re);const Me=$.useSyncExternalStore,Y=h.createContext(!1),Te=()=>h.useContext(Y);Y.Provider;function ke(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const Ae=h.createContext(ke()),Fe=()=>h.useContext(Ae);function $e(e,t){return typeof e=="function"?e(...t):!!e}const De=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},Ue=e=>{h.useEffect(()=>{e.clearReset()},[e])},ze=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:s})=>e.isError&&!t.isReset()&&!e.isFetching&&$e(r,[e.error,s]),je=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},Be=(e,t)=>e.isLoading&&e.isFetching&&!t,Le=(e,t,r)=>(e==null?void 0:e.suspense)&&Be(t,r),He=(e,t,r)=>t.fetchOptimistic(e).then(({data:s})=>{e.onSuccess==null||e.onSuccess(s),e.onSettled==null||e.onSettled(s,null)}).catch(s=>{r.clearReset(),e.onError==null||e.onError(s),e.onSettled==null||e.onSettled(void 0,s)});function Ne(e,t){const r=oe({context:e.context}),s=Te(),a=Fe(),n=r.defaultQueryOptions(e);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=C.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=C.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=C.batchCalls(n.onSettled)),je(n),De(n,a),Ue(a);const[l]=h.useState(()=>new t(r,n)),u=l.getOptimisticResult(n);if(Me(h.useCallback(v=>{const m=s?()=>{}:l.subscribe(C.batchCalls(v));return l.updateResult(),m},[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),h.useEffect(()=>{l.setOptions(n,{listeners:!1})},[n,l]),Le(n,u,s))throw He(n,l,a);if(ze({result:u,errorResetBoundary:a,useErrorBoundary:n.useErrorBoundary,query:l.getCurrentQuery()}))throw u.error;return n.notifyOnChangeProps?u:l.trackResult(u)}function Ve(e,t,r){const s=ae(e,t,r);return Ne(s,ge)}const Z=o(le)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'warns  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,We=o.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,J=o.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  flex: 1;
  height: 100%;
  border-radius: .6rem;
  border: solid .1rem ${e=>e.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${e=>e.theme.colors.primary};
  }

  span {
    font-size: 3rem;
    font-weight: 800;
    color: ${e=>e.theme.colors.primary};
  }
`;o.div`
  grid-area: warns;
  position: relative;
`;o.div`
  grid-area: graphic;
`;o.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  p {
    font-size: 1.4rem;
    color: ${e=>e.theme.text.subtitle};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary};
  }
`;const qe=o.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ke=o.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,Ze=o.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme:e})=>Q(.85,e.colors.primary)};
`,Je=o.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`,Ge=o.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.title};
  user-select: text;
`,Xe=o.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`;function Ye(){return c(Ke,{children:[c(Ze,{children:[i(Je,{children:"John Doe"}),i(Ge,{children:"Boa tarde pessoal!"})]}),i(Xe,{children:"Hoje ás 16:35"})]})}const k=h.memo(Ye),_e=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,et=o.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
`,tt=o.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.5rem;
`,rt=o.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
  width: 100%;
`,st=o.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:e})=>Q(.6,e.text.title)}
  }
`,it=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function nt(){const{colors:e}=ce();return c(d.Root,{children:[i(d.Header,{children:c(d.Column,{children:[i(d.Title,{children:"Chat Geral"}),i(d.Subtitle,{children:"Bate-papo geral da policia"})]})}),i(d.Separator,{}),i(d.Content,{children:c(_e,{children:[c(et,{children:[i(k,{}),i(k,{}),i(k,{})]}),i(d.Separator,{}),i(tt,{children:c(rt,{children:[i(st,{placeholder:"Mensagem..."}),i(it,{children:i(ye,{color:e.primary})})]})})]})})]})}const ot=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,at=o.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,lt=o.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:e})=>e.border.primary};
`,ct=o.p`
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,ut=o.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  border-radius: 3rem;
  background: ${({theme:e})=>Q(.8,e.colors.primary)};
`;o.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`;const dt=h.forwardRef((e,t)=>{function r(){}return c(R.Root,{onOpen:r,ref:t,children:[i(R.Header,{title:"Policiais On-line",subtitle:"Atualmente há 5 policiais em serviço"}),i(R.Content,{children:i(ot,{children:c(lt,{children:[c(at,{children:[i(ct,{children:"John Doe"}),i(ut,{children:"Coronel | PMERJ"})]}),i(A,{icon:pe,label:"Marcar no Mapa"})]})})})]})}),ht=dt,ft=o.textarea`
  resize: none;
  width: 100%;
  height: 11.6rem;
  padding: 1.2rem 1rem;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${e=>e.theme.text.title};

  &::placeholder {
    color: ${e=>Q(.7,e.theme.text.title)};
  }
`,pt=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,mt=o.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,yt=h.forwardRef((e,t)=>{const[r,s]=h.useState();function a(){s(Date.now())}return c(R.Root,{onOpen:a,ref:t,children:[i(R.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),c(R.Content,{children:[c(pt,{children:[i(fe,{max:60,autoFocus:!0,placeholder:"Título do aviso"}),i(ft,{placeholder:"Descrição do aviso"})]}),i(mt,{children:i(G,{children:"Publicar"})})]})]})}),gt=yt,vt=o.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bt=o.p`
  color: ${e=>e.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,Rt=o.span`
  color: ${e=>e.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,xt=o.div`
  display: flex;
  flex-direction: column;
`;function St({author:e,description:t,id:r,title:s}){return c(vt,{children:[c(xt,{children:[i(bt,{children:s}),c(Rt,{children:["Autor: ",e.name," #",e.id]})]}),i(G,{size:"sm",children:"Ver mais"})]})}const Ct=h.memo(St);function Mt(){var l;const{data:e,isLoading:t}=Ve(["getInitialData"],()=>de("getInitialData")),r=h.useRef(null),s=h.useRef(null),a=()=>{var u;(u=r.current)==null||u.openModal()},n=()=>{var u;(u=s.current)==null||u.openModal()};return t||!e?i(Z,{children:i(ue,{})}):c(Z,{children:[i(ht,{ref:r}),i(gt,{ref:s}),i("div",{style:{gridArea:"banner"},children:i(w.Root,{style:{height:"100%"},children:c(w.Header,{children:[c(w.Title,{children:["Bem-vindo ",i("b",{children:e.officer.name}),"!"]}),e.canStartPatrol&&i(w.Action,{children:"Iniciar Patrulha"})]})})}),c(We,{children:[c(J,{children:[i("h1",{children:"Prisões"}),i("span",{children:e.totalOfPrisions})]}),c(J,{children:[i("h1",{children:"Multas"}),i("span",{children:e.totalOfFines})]})]}),i("div",{style:{gridArea:"warns"},children:c(d.Root,{children:[c(d.Header,{children:[c(d.Column,{children:[i(d.Title,{children:"Avisos"}),i(d.Subtitle,{children:"Resumo de avisos da guarnição"})]}),i(A,{onClick:n,label:"Criar aviso",icon:me})]}),i(d.Separator,{}),i(d.Content,{children:i(qe,{children:(l=e.notices)==null?void 0:l.map(u=>i(Ct,{...u}))})})]})}),i("div",{style:{gridArea:"players"},children:i(d.Root,{children:c(d.Header,{children:[c(d.Column,{children:[i(d.Title,{children:"Policiais On-line"}),c(d.Subtitle,{children:["Policiais ativos no momento (",e.totalOfWorkingOfficers,")"]})]}),i(A,{onClick:a,label:"Ver Policiais",icon:he})]})})}),i("div",{style:{gridArea:"chat"},children:i(nt,{})})]})}export{Mt as default};
