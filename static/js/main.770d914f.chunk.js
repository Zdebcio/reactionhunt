(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),i=a.n(s),r=(a(15),a(1)),c=a(2),o=a(4),m=a(3),u=a(5),d=(a(16),function(e){return l.a.createElement("li",{onClick:function(){return e.selectMode(e.mode.number)},className:e.gameMode===e.mode.number?"start__game-option active":"start__game-option"},e.mode.name)}),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).gameMods=[{number:0,name:"Standardowy"},{number:1,name:"Tylko 4 pola"},{number:2,name:"Tylko 6 p\xf3l"}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gameMode,a=this.gameMods.map((function(a){return l.a.createElement(d,{key:a.number,gameMode:t,mode:a,selectMode:e.props.handleSelectMode})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"content start"},l.a.createElement("section",{className:"start__game-mode"},l.a.createElement("h2",{className:"start__title"},"Typ gry"),l.a.createElement("ul",{className:"start__game-list"},a)),l.a.createElement("section",{className:"start__bottom-section"},l.a.createElement("button",{onClick:function(){return e.props.changeComponent("rules")},className:"start__rules-btn"},l.a.createElement("i",{className:"fas fa-question"})),l.a.createElement("button",{onClick:function(){return e.props.changeComponent("game")},className:"start__new-game-btn"},"Start"))))}}]),t}(n.Component),f=(a(17),function(e){return l.a.createElement("main",{className:"content rules"},l.a.createElement("h2",{className:"rules__title"},"Zasady"),l.a.createElement("p",{className:"rules__text"},l.a.createElement("strong",{className:"rules__text--strong"},"ReactionHunt")," to ma\u0142a gra w kt\xf3rej liczy si\u0119 skupienie i reakcja gracza."),l.a.createElement("p",{className:"rules__text"},"Gra zbudowana jest z"," ",l.a.createElement("span",{className:"rules__text--span"},"kilku kolorowych p\xf3l"),", z kt\xf3rych ",l.a.createElement("span",{className:"rules__text--span"},"jedno jest w\u0142a\u015bciwe"),". W przeci\u0105gu trzech sekund na prawid\u0142owym z nich pojawi si\u0119 na kr\xf3tki czas ",l.a.createElement("span",{className:"rules__text--span"},"symbol oka"),"."),l.a.createElement("img",{className:"rules__img",src:"./images/eye-on.png",alt:"symbol oka"}),l.a.createElement("p",{className:"rules__text"},"Zadaniem gracza jest wychwycenie lub trafienie kt\xf3re pole jest prawdziwe oraz"," ",l.a.createElement("span",{className:"rules__text--span"},"zdobycie jak najwi\u0119kszej liczby punkt\xf3w")," ","bez spud\u0142owania."),l.a.createElement("p",{className:"rules__text"},"U g\xf3ry ekranu"," ",l.a.createElement("span",{className:"rules__text--span"},"wy\u015bwietla si\u0119 czas (w postaci \u017c\xf3ltego paska)")," ","w przeci\u0105gu kt\xf3rego ma si\u0119 pojawi\u0107 symbol oka. Po jego up\u0142ywie gracz jest zdany na swoj\u0105 intuicje."),l.a.createElement("p",{className:"rules__text"},l.a.createElement("span",{className:"rules__text--span"},"Mo\u017cna wybra\u0107 pole w dowolnym momencie gry"),", zar\xf3wno przed pojawieniem si\u0119 samego symbolu jak i po up\u0142ywie czasu sugeruj\u0105cego kiedy si\u0119 mo\u017ce pojawi\u0107."),l.a.createElement("p",{className:"rules__text"},"W grze mamy trzy tryby:"),l.a.createElement("ol",{className:"rules__list"},l.a.createElement("li",{className:"rules__list-text"},l.a.createElement("span",{className:"rules__text--span"},"Standardowy")," \u2013 Klasyczny tryb w kt\xf3rym gr\u0119 zaczynam od 4 p\xf3l, a wraz z rosn\u0105cym poziomem zwi\u0119ksza si\u0119 ich ilo\u015b\u0107 do sze\u015bciu."),l.a.createElement("li",{className:"rules__list-text"},l.a.createElement("span",{className:"rules__text--span"},"Tylko 4 pola")," \u2013 Tryb \u0142atwy, w kt\xf3rym przez ca\u0142a gr\u0119 wybieramy spo\u015br\xf3d tylko 4 p\xf3l."),l.a.createElement("li",{className:"rules__list-text"},l.a.createElement("span",{className:"rules__text--span"},"Tylko 6 p\xf3l")," \u2013 Tryb trudny, w kt\xf3rym przez ca\u0142a gr\u0119 wybieramy spo\u015br\xf3d 6 p\xf3l.")),l.a.createElement("p",{className:"rules__text"},"Dodatkowo wraz ze wzrostem poziom\xf3w"," ",l.a.createElement("span",{className:"rules__text--span"},"zwi\u0119ksza si\u0119 trudno\u015b\u0107 gry")," w postaci zmiany wielko\u015bci i widoczno\u015bci ikony oka."))}),_=function(e){return e.isBtnActive?l.a.createElement("button",{onClick:e.backToPrev,className:"header__back-button"},l.a.createElement("i",{className:"fas fa-arrow-left"})):l.a.createElement("button",{className:"header__back-button header__back-button--disabled"},l.a.createElement("i",{className:"fas fa-arrow-left"}))},h=(a(18),function(e){var t=!0;return e.prevComponent===e.activeComponent&&(t=!1),l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"header__logo"},"Reaction",l.a.createElement("span",{className:"header__logo--color"},"Hunt")),l.a.createElement(_,{isBtnActive:t,backToPrev:e.backToPrev}))}),k=a(7),v=function(e){var t=e.clickedField,a=e.isLevelRender,n=!t&&a?{color:"red",animationName:"counter"}:{};return l.a.createElement("div",{style:n,className:"game__counter"})},b=(a(19),a(9)),g=a.n(b),y=null,E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isFieldVisible:!1,firstVisibled:!1},a.visibleOff=function(){a.setState({isFieldVisible:!1})},a.visible=function(){a.setState({isFieldVisible:!0,firstVisibled:!0}),a.props.setTimeout(a.visibleOff,100)},a.startVisibleOn=function(){if(a.props.field.isTrue&&!a.props.clickedField&&!a.state.isFieldVisible){var e=Math.floor(2200*Math.random()+800);y=a.props.setTimeout(a.visible,e)}},a.clickField=function(e){a.props.handleClickField(e),a.props.clearTimeout(y)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.field,a=t.isTrue,n=t.id,s=this.props.fieldsNumber;this.state.firstVisibled||this.startVisibleOn();return l.a.createElement("div",{className:6===s?"game__field field game__field--six":"game__field field",ref:this.ref,onClick:function(){return e.clickField(n)}},this.state.isFieldVisible&&l.a.createElement("i",{style:function(){var t=e.props.level;if(t>10)return t>20?t>30?t>40?{opacity:"0.05",fontSize:"2rem"}:{opacity:"0.05",fontSize:"3rem"}:{opacity:"0.2",fontSize:"4rem"}:{opacity:"0.5"}}(),className:"fas fa-eye"}),e.props.clickedField?a?l.a.createElement("i",{className:"fas fa-check"}):e.props.clickedFieldId===n?l.a.createElement("i",{className:"fas fa-times"}):null:null)}}]),t}(n.Component),N=g()(E),w=(a(27),function(e){var t=e.points,a=e.level;return l.a.createElement("section",{className:"game__stats"},l.a.createElement("div",{className:"game__results"},l.a.createElement("h2",{className:"game__title"},t),l.a.createElement("h3",{className:"game__title game__title--small"},"Poziom ",a)),l.a.createElement("div",{className:"game__complete"},e.finishLevel()))}),z=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={fieldsInGame:[],fieldsNumber:4,points:0,pointsPerRound:null,level:1,clickedField:!1,clickedFieldId:null,isLevelRender:!1},a.renderNewLevel=function(){for(var e=a.state.fieldsNumber,t=[],n=0;n<e;n++)t.push({id:n+1,isTrue:!1});t[Math.floor(Math.random()*t.length)].isTrue=!0,a.setState({fieldsInGame:t}),4===t.length?a.setState({pointsPerRound:2}):6===t.length&&a.setState({pointsPerRound:3})},a.handleClickField=function(e){a.state.clickedField||a.setState({clickedField:!0,clickedFieldId:e})},a.handleNextLevel=function(){var e=a.state,t=e.pointsPerRound,n=e.fieldsInGame,l=e.clickedField,s=e.clickedFieldId,i=e.level,r=Object(k.a)(n).filter((function(e){return e.isTrue}));l&&s===r[0].id&&a.setState((function(e){return{clickedField:!1,clickedFieldId:null,points:e.points+t,level:e.level+1,isLevelRender:!1}})),0===a.props.gameMode&&10===i&&a.setState({fieldsNumber:6,pointsPerRound:3})},a.handleResetGame=function(){a.setState({points:0,level:1,clickedField:!1,clickedFieldId:null,isLevelRender:!1})},a.finishLevel=function(){var e=a.state,t=e.clickedField,n=e.clickedFieldId;return t?n===Object(k.a)(a.state.fieldsInGame).filter((function(e){return e.isTrue}))[0].id?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"game__complete-title game__complete-title--win"},"Gratulacje, wygra\u0142e\u015b!"),l.a.createElement("button",{className:"game__complete-button",onClick:a.handleNextLevel},"Nast\u0119pny poziom")):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"game__complete-title game__complete-title--lose"},"Przegra\u0142e\u015b!"),l.a.createElement("button",{className:"game__complete-button",onClick:a.handleResetGame},"Zagraj ponownie")):null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.gameMode;0===e||1===e?this.setState({fieldsNumber:4}):2===e&&this.setState({fieldsNumber:6})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.clickedField,a=e.isLevelRender;t||a||(this.renderNewLevel(),this.setState({isLevelRender:!0}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.fieldsInGame,n=t.points,s=t.level,i=t.clickedField,r=t.clickedFieldId,c=t.fieldsNumber,o=t.isLevelRender,m=a.map((function(t){return l.a.createElement(N,{key:t.id,field:t,handleClickField:e.handleClickField,clickedField:i,clickedFieldId:r,fieldsNumber:c,level:s})}));return l.a.createElement("main",{className:"content game"},l.a.createElement(v,{clickedField:i,isLevelRender:o}),l.a.createElement("div",{className:"game__wrapper"},l.a.createElement(w,{points:n,level:s,finishLevel:this.finishLevel}),l.a.createElement("section",{className:"game__board"},this.state.isLevelRender&&m)))}}]),t}(n.Component),j=(a(28),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={gameMode:0,activeComponent:"start",prevComponent:"start"},a.handleChangeActiveComponent=function(e){a.setState((function(t){return{activeComponent:e,prevComponent:t.activeComponent}}))},a.handleBackToPrevComponent=function(){a.setState((function(e){return{activeComponent:e.prevComponent}}))},a.handleSelectMode=function(e){a.setState({gameMode:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.gameMode,n=t.activeComponent,s=t.prevComponent;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{backToPrev:this.handleBackToPrevComponent,activeComponent:n,prevComponent:s}),function(){switch(n){case"start":return l.a.createElement(p,{gameMode:a,handleSelectMode:e.handleSelectMode,changeComponent:e.handleChangeActiveComponent});case"game":return l.a.createElement(z,{gameMode:a});case"rules":return l.a.createElement(f,null);default:return null}}())}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.770d914f.chunk.js.map