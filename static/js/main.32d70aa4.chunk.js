(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{36:function(e,t,r){},37:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(9),a=r.n(c),i=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,59)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))},s=r(14),l=r(10),u=r(23),d=(r(36),r(37),r(26)),b=r(8),h=r(27),p=r(24),f=r.n(p),v="FETCH_TRIVIA_START",g="FETCH_TRIVIA_SUCCESS",y="FETCH_TRIVIA_FAIL",j="TRIVIA_ANSWERED",w=new Error("Failed with unknown response code..."),O=function(){return function(e){console.log("in dispatch!"),e({type:v}),f.a.get("https://opentdb.com/api.php?amount=1&encode=base64&category=15").then((function(t){switch(console.log(t.data.response),t.data.response_code){case 0:e({type:g,payload:t.data.results[0]});break;case 1:e({type:y,payload:"Not enough questions for your query."});break;case 2:e({type:y,payload:"Query has invalid paramter."});break;case 3:e({type:y,payload:"Session Token Not Found. (Possibly expired?)"});break;case 4:e({type:y,payload:"Session Token has returned all possible questions for the specified query."});break;default:throw w}})).catch((function(t){return e({type:y,payload:t.message})}))}},I=r(25),k=r.n(I),T=r(3),x=[],F=function(e){for(var t=0,r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t);for(var n="#",o=0;o<3;o++){n+=("00"+(t>>8*o&255).toString(16)).substr(-2)}return n},m=Object(l.b)((function(e){return{triviaQuestion:e.triviaQuestion,correct:e.correct}}),(function(e){return{onFetchTrivia:function(){e(O())},onTriviaAnswered:function(t){e(function(e){return function(t){t({type:j,payload:e}),setTimeout((function(){t(O())}),3e3)}}(t))}}}))((function(e){console.log(e);x=function(){var t=[].concat(Object(d.a)(e.triviaQuestion.incorrect_answers),[e.triviaQuestion.correct_answer]);if(console.log(t,"correct answer:",e.triviaQuestion.correct_answer),JSON.stringify(x.sort())!==JSON.stringify(t.sort())){for(var r,n=t.length;0!==n;){r=Math.floor(Math.random()*n),n--;var o=[t[r],t[n]];t[n]=o[0],t[r]=o[1]}return t}return x}(),Object(n.useEffect)((function(){e.onFetchTrivia()}),[]);var t=function(t){t.preventDefault(),console.log(t.target.value,e.triviaQuestion.correct_answer),null===e.correct&&(t.target.value===e.triviaQuestion.correct_answer?e.onTriviaAnswered(!0):e.onTriviaAnswered(!1))};return Object(T.jsx)(b.a,{border:"dark",text:"white",bg:"dark",style:{maxHeight:"50vh",maxWidth:"50vw"},children:Object(T.jsxs)(b.a.Body,{children:[Object(T.jsx)(b.a.Title,{style:{color:null!==e.correct?e.correct?"#32de84":"red":"white"},children:atob(e.triviaQuestion.question)}),x.map((function(e){return Object(T.jsx)(h.a,{onClick:t,block:!0,style:{background:F(atob(e)),color:k()(F(atob(e))).yiq,transition:"0"},value:e,size:"lg",variant:"primary",children:atob(e)})})),Object(T.jsx)("br",{}),Object(T.jsx)(b.a.Footer,{children:Object(T.jsx)("strong",{children:null!==e.correct?e.correct?"Correct!":"Incorrect!":null})})]})})}));var R=function(){return Object(T.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",background:"#9C42B8"},className:"App",children:Object(T.jsx)(m,{})})},_=r(6),A={triviaQuestion:{category:"RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=",type:"bXVsdGlwbGU=",difficulty:"bWVkaXVt",question:"V2hhdCB3YXMgdGhlIGNoYXJhY3RlciBLaXJieSBvcmlnaW5hbGx5IGdvaW5nIHRvIGJlIG5hbWVkPw==",correct_answer:"UG9wb3Bv",incorrect_answers:["RGVkZWRl","V2FkZGxlIERlZQ==","UHJpbmNlIFB1ZmY="]},error:"",isFetching:!1,correct:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer @",t),t.type){case v:return Object(_.a)(Object(_.a)({},e),{},{isFetching:!0,error:""});case g:return Object(_.a)(Object(_.a)({},e),{},{correct:null,isFetching:!1,triviaQuestion:t.payload});case y:return Object(_.a)(Object(_.a)({},e),{},{error:t.payload});case j:return console.log("TRIVIA ANSWERED!"),Object(_.a)(Object(_.a)({},e),{},{correct:t.payload});default:return e}},S=(r(57),Object(s.b)(C,Object(s.a)(u.a)));a.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(l.a,{store:S,children:Object(T.jsx)(R,{})})}),document.getElementById("root")),i()}},[[58,1,2]]]);
//# sourceMappingURL=main.32d70aa4.chunk.js.map