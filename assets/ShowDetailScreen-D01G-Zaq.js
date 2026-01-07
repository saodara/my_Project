import{u as t,K as g,j as s,L as b,k as u,M as N,O as w,Q as S,b as f,c as k,f as v,g as y,R as M,T as C,P as n,U as j,V as D,I as x,t as h,m as l,h as E,W as $,q as L,X as T,l as p,Y as W,y as G,E as A,z as I,C as P}from"./index-Cw7gRJ0b.js";import{s as R}from"./scrollToTop-CQXUqqHG.js";import{F}from"./FreeTrial-LA0d5nh4.js";const H=()=>{const e=t(g);return s.jsxs(b,{className:"detail-block",children:[s.jsx(u,{children:"Seasons and Episodes"}),e==null?void 0:e.map(i=>s.jsx(N,{seasonData:i},i.id))]})},_=()=>{const e=t(w),i={dots:!1,infinite:!0,speed:300,autoplay:!0,autplaySpeed:6e3,slidesToShow:1,centerMode:!0,variableWidth:!0,slidesToScroll:1};return s.jsxs(S,{className:"detail-block show-cast",children:[s.jsx("h4",{className:"detail-block-title",children:"Cast"}),s.jsx(f,{children:e&&s.jsx(k,{...i,nextArrow:s.jsx(y,{}),prevArrow:s.jsx(v,{}),children:e==null?void 0:e.map(a=>{var r,c,d;return s.jsx("div",{className:"show-cast-item",children:s.jsx("div",{className:"item-content",children:s.jsx("img",{src:(c=(r=a==null?void 0:a.person)==null?void 0:r.image)==null?void 0:c.medium,alt:"",className:"object-fit-cover"})})},(d=a==null?void 0:a.person)==null?void 0:d.id)})})})]})},q=()=>{const e=t(M);return s.jsxs(C,{children:[s.jsx(H,{}),s.jsxs("div",{className:"detail-block show-description",children:[s.jsx("h4",{className:"detail-block-title",children:"Description"}),s.jsx(n,{className:"text-white",dangerouslySetInnerHTML:{__html:e}})]}),s.jsx(_,{})]})},z=()=>{var i,a;const e=t(j);return console.log(e),s.jsx(D,{children:s.jsxs("div",{className:"detail-block",children:[s.jsxs("div",{className:"detail-block-item",children:[s.jsxs(n,{className:"block-item-title flex items-center justify-start",children:[s.jsx("span",{className:"title-icon",children:s.jsx("img",{src:x.CalendarGrey,alt:""})}),s.jsx("span",{className:"title-text",children:"Released Date"})]}),s.jsx("div",{className:"block-item-body",children:s.jsx("div",{className:"block-item-pill text-md",children:e==null?void 0:e.premiered})})]}),s.jsxs("div",{className:"detail-block-item",children:[s.jsxs(n,{className:"block-item-title flex items-center justify-start",children:[s.jsx("span",{className:"title-icon",children:s.jsx("img",{src:x.LanguageGrey,alt:""})}),s.jsx("span",{className:"title-text",children:"Available Laguage"})]}),s.jsx("div",{className:"block-item-body",children:s.jsx("div",{className:"block-item-pill text-md",children:e==null?void 0:e.language})})]}),s.jsxs("div",{className:"detail-block-item",children:[s.jsxs(n,{className:"block-item-title flex items-center justify-start",children:[s.jsx("span",{className:"title-icon",children:s.jsx("img",{src:x.StarGrey,alt:""})}),s.jsx("span",{className:"title-text",children:"Ratings"})]}),s.jsx("div",{className:"block-item-body",children:s.jsxs("div",{className:"block-item-pill text-md",children:[((i=e==null?void 0:e.rating)==null?void 0:i.average)||0," / 10"]})})]}),s.jsxs("div",{className:"detail-block-item",children:[s.jsxs(n,{className:"block-item-title flex items-center justify-start",children:[s.jsx("span",{className:"title-icon",children:s.jsx("img",{src:x.GridGrey,alt:""})}),s.jsx("span",{className:"title-text",children:"Genres"})]}),s.jsx("div",{className:"block-item-body flex items-center flex-wrap",children:(a=e==null?void 0:e.genres)==null?void 0:a.map((r,c)=>s.jsx("div",{className:"block-item-pill text-md",children:r},c))})]})]})})},B=E.div`
    display: flex;
    margin-top: 60px;
    column-gap: 20px;

    ${l.xl`
        flex-direction: column;
        margin-top: 40px;
    `}

    ${l.lg`
        margin-top: 30px;
    `}

    ${l.sm`
        margin-top: 20px;
    `}

    .detail-block{
        padding: 40px;
        background-color: ${h.colors.black10};
        border: 1px solid ${h.colors.black15};
        border-radius: 12px;
        margin-bottom: 30px;

        &:last-child{
            margin-bottom: 0;
        }

        ${l.xxl`
            padding: 30px;
        `}

        ${l.xl`
            padding: 20px;
        `}

        ${l.lg`
            padding: 16px;
        `}

        ${l.sm`
            padding: 12px;
        `}
    }
`,U=()=>{const{id:e}=$(),i=L(),a=t(T),r=t(o=>o.shows.isLoading.fetchSingleShow),c=t(o=>o.shows.isError.fetchSingleShow),d=t(o=>o.shows.error),m=t(j);return console.log(m),p.useEffect(()=>R(),[]),p.useEffect(()=>{i(W(e))},[i,e]),r?s.jsx(G,{}):c?s.jsx(A,{error:d}):s.jsxs("div",{className:"pg-show-detail",children:[a&&s.jsx(I,{showData:a}),s.jsx(P,{children:a&&s.jsxs(B,{children:[s.jsx(q,{}),s.jsx(z,{metaData:m})]})}),s.jsx(F,{})]})};export{U as default};
