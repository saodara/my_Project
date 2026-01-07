import{j as e,B as N,I as p,C as c,H as S,P as x,a as k,r as $,G as T,S as h,b as q,c as C,d as I,e as W,f as R,g as A,t as l,m as i,h as d,i as E,k as y,F as j,l as v,n as r,o as P,p as f}from"./index-Qp3oFRE6.js";import{s as V}from"./scrollToTop-CQXUqqHG.js";import{F as B}from"./FreeTrial-BPjxbqJ9.js";const G=()=>e.jsxs(N,{children:[e.jsx("div",{className:"banner-img flex items-center justify-center",children:e.jsx("img",{className:"banner-icon",src:p.Streamvibe,alt:""})}),e.jsx(c,{className:"text-center",children:e.jsxs("div",{className:"banner-content mx-auto",children:[e.jsx(S,{children:"The Best Streaming Experience"}),e.jsx(x,{className:"banner-text text-lg",children:"DARA Vibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockblusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the contnet you want to watch."}),e.jsxs(k,{to:$.SHOWS,children:[e.jsx("span",{className:"btn-icon",children:e.jsx("img",{src:p.Play,alt:""})}),e.jsx("span",{className:"btn-text",children:"Start Watching Now"})]})]})})]}),F=()=>{var t;const s={dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:6e3,speed:300,slidesToShow:5,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]};return e.jsxs(T,{children:[e.jsx(h,{title:"Explore our wide variety of categories",text:"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."}),e.jsx(c,{children:e.jsx(q,{children:e.jsx(C,{...s,nextArrow:e.jsx(A,{}),prevArrow:e.jsx(R,{}),children:(t=I)==null?void 0:t.map(n=>e.jsx(W,{data:n},n.id))})})})]})},Q=d.section`
  .stream-dev-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${i.lg`
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    `}

    ${i.sm`
        grid-template-columns: 100%;
    `}
  }

  .stream-dev-item {
    background: ${l.linearGradient.full};
    padding: 40px;
    border-radius: 12px;
    border: 1px solid ${l.colors.black15};

    ${i.xl`
        padding: 30px;
    `}

    ${i.lg`
        padding: 16px;
    `}

    .item-head {
      column-gap: 16px;
    }

    .item-icon {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      border: 1px solid ${l.colors.black15};
    }

    .icon-wrapper {
      width: 32px;
      height: 32px;
      img {
        width: auto;
      }
    }

    .item-body {
      margin-top: 30px;

      ${i.lg`
            margin-top: 16px;
        `}
    }
  }
`,H=()=>{var s;return e.jsxs(Q,{className:"section-py",children:[e.jsx(h,{title:"We Provide you streaming experience across various devices.",text:"With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatiable with a wide range of devices, ensuring that you never miss a moment of entertainment."}),e.jsx(c,{children:e.jsx("div",{className:"stream-dev-content",children:e.jsx("div",{className:"stream-dev-list grid",children:(s=E)==null?void 0:s.map(t=>e.jsxs("div",{className:"stream-dev-item",children:[e.jsxs("div",{className:"item-head flex items-center justify-start",children:[e.jsx("div",{className:"item-icon bg-black12 flex items-center justify-center",children:e.jsx("div",{className:"icon-wrapper flex items-center justify-center",children:e.jsx("img",{src:t.icon,alt:""})})}),e.jsx(y,{className:"item-title",children:t.device_name})]}),e.jsx("div",{className:"item-body",children:e.jsx(x,{children:t.description})})]},t.id))})})})]})},_=d.section`
  .common-q-list {
    grid-template-columns: repeat(2, 1fr);

    .q-list-one,
    .q-list-two {
      .item {
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }

    ${i.lg`
        grid-template-columns: 100%;

        .q-list-one{
            .item{
                &:last-child{
                    &::after{
                        display: block;
                    }
                }
            }
        }
    `}
  }
`,M=d.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(229, 0, 0, 0) 0%,
      #e50000 16.67%,
      rgba(229, 0, 0, 0) 100%
    );
  }

  &.no-b-gradient {
    &::after {
      display: none;
    }
  }

  .item-grid {
    grid-template-columns: 52px auto;
    column-gap: 20px;
    padding: 30px;

    ${i.lg`
        padding: 20px 0;
        grid-template-columns: 48px auto;
    `}
  }

  .item-sn {
    width: 52px;
    height: 54px;
    border-radius: 10px;
    border: 1px solid ${l.colors.black15};

    ${i.lg`
        width: 46px;
        height: 46px;
        border-radius: 8px;
    `}
  }

  .item-head {
    margin-top: 10px;
    column-gap: 12px;
    cursor: pointer;
  }

  .item-title {
    margin-top: 0;
  }

  .item-text {
    max-height: 0;
    overflow: hidden;
    transition: ${l.transitions.allEaseInOut};
    &.show {
      max-height: 100%;
    }
  }

  .item-btn{
    width: 28px;
    height: 28px;
    padding: 5px;
    margin-top: -3px;

    ${i.lg`
        width: 24px;
        height: 24px;
    `}
  }
`,O=()=>{var t,n,o,m;let s=Math.ceil(j.length/2);return e.jsxs(_,{className:"section-py",children:[e.jsx(h,{title:"Frequently Asked Questions",text:"Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",rightContenType:"title-button"}),e.jsx(c,{children:e.jsx("div",{className:"common-q-content",children:e.jsxs("div",{className:"common-q-list grid",children:[e.jsx("div",{className:"q-list-one",children:(n=(t=j)==null?void 0:t.slice(0,s))==null?void 0:n.map((a,u)=>{let g=u+1;return e.jsx(b,{data:a,count:g},a.id)})}),e.jsx("div",{className:"q-list-two",children:(m=(o=j)==null?void 0:o.slice(s))==null?void 0:m.map((a,u)=>{let g=s+(u+1);return e.jsx(b,{data:a,count:g},a.id)})})]})})})]})},b=({data:s,count:t})=>{const n=t<10?`0${t}`:t,[o,m]=v.useState(!0),a=()=>{m(!o)};return e.jsx(M,{className:"item",children:e.jsxs("div",{className:"item-grid grid",children:[e.jsx("div",{className:"item-sn bg-black12 text-white flex items-center justify-center text-xl font-semibold",children:n}),e.jsxs("div",{className:"item-body",children:[e.jsxs("div",{className:"item-head flex justify-between items-start",onClick:a,children:[e.jsx("h4",{className:"item-title text-xl",children:s.question}),e.jsx("button",{className:"item-btn bg-transparent",children:o?e.jsx("img",{src:p.Plus,alt:""}):e.jsx("img",{src:p.Minus,alt:""})})]}),e.jsx("div",{className:`item-text ${o?"":"show"}`,children:e.jsx(x,{children:s.answer})})]})]})})};b.propTypes={data:r.shape({id:r.string.isRequired,question:r.string.isRequired,answer:r.string.isRequired}).isRequired,count:r.number.isRequired};const z=d.section`
  .subs-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    ${i.lg`
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        `}

    ${i.sm`
            grid-template-columns: 100%;
        `}
  }
`,L=d.section`
    border-radius: 12px;
    padding: 40px;
    border: 1px solid ${l.colors.black15};

    ${i.lg`
        padding: 24px;
    `}

    ${i.sm`
        padding: 16px;
    `}

    .item-price{
        margin: 24px 0 32px 0;
        column-gap: 4px;

        ${i.lg`
            margin: 24px 0;
        `}

        &-text{
            font-size: 40px;

            ${i.lg`
                font-size: 24px;
            `}
        }
    }

    .item-btn-group{
        gap: 12px;
        
        .item-btn{
            flex: 1;
        }
    }
    
`,w=()=>{var s;return e.jsxs(z,{children:[e.jsx(h,{title:"Choose the plan that's right for you",text:"Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"}),e.jsx(c,{children:e.jsx("div",{className:"subs-content",children:e.jsx("div",{className:"subs-list grid",children:(s=P)==null?void 0:s.map(t=>e.jsx(D,{data:t},t.id))})})})]})},D=({data:s})=>e.jsxs(L,{className:"bg-black10 flex flex-col justify-between",children:[e.jsxs("div",{className:"item-top",children:[e.jsx(y,{children:s.plan}),e.jsx(x,{children:s.description})]}),e.jsxs("div",{className:"item-bottom",children:[e.jsx("div",{className:"item-price flex items-baseline flex-wrap",children:e.jsxs("p",{className:"item-price-text font-semibold",children:["$",s.monthly_price]})}),e.jsxs("div",{className:"item-btn-group flex items-center flex-wrap",children:[e.jsx(f,{className:"item-btn",children:e.jsx("span",{className:"btn-text",children:"Start Free Trial"})}),e.jsx(f,{className:"item-btn",children:e.jsx("span",{className:"btn-text",children:"Choose Plan"})})]})]})]});w.propTypes={data:r.shape({id:r.string.isRequired,plan:r.string.isRequired,description:r.string,monthly_price:r.number.isRequired,yearly_price:r.number.isRequired})};const K=()=>(v.useEffect(()=>V(),[]),e.jsxs("div",{className:"pg-home",children:[e.jsx(G,{}),e.jsx(F,{}),e.jsx(H,{}),e.jsx(O,{}),e.jsx(w,{}),e.jsx(B,{})]}));export{K as default};
