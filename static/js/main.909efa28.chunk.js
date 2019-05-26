(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},49:function(e,t,a){},8:function(e){e.exports={OGS_API_ROOT:"https://online-go.com/api/v1/players/",OGS_ROOT:"http://online-go.com/"}},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),c=a.n(r),o=(a(48),a(49),a(9)),i=a(1),l=a(2),m=a(4),p=a(3),h=a(5),u=a(37),d=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.player.username?"statistics for player ".concat(this.props.player.username," (").concat(this.props.player.rank,")"):"statistics";return s.a.createElement("nav",{className:"navbar navbar-dark Header"},s.a.createElement(u.Helmet,null,s.a.createElement("title",null,this.props.player.username?"statistics for player ".concat(this.props.player.username," (").concat(this.props.player.rank,")"):"g0tstats?")),s.a.createElement("a",{href:"".concat("/g0tstats-react","/"),className:"navbar-brand"},s.a.createElement("img",{className:"OGS_logo d-inline-block align-top",src:"https://cdn.online-go.com/assets/ogs_dark.svg",alt:"OGS logo"}),s.a.createElement("h1",{className:"page_title"},e)))}}]),t}(n.Component),f=Object(o.b)(function(e){return{player:e.player}})(d),g=function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"Welcome!"),s.a.createElement("p",{className:"instruction"},"Start by entering username into the search field to the right (case-sensitive)."),s.a.createElement("p",null,"You can also use userID: my profile page is ",s.a.createElement("em",null,"https://online-go.com/user/view/197819"),", meaning my user ID is 197819."))},E=a(17),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={username:""},a.updateSearchUser=function(e){a.setState({username:e.target.value})},a.submit=function(e){e.preventDefault(),a.props.history.push("/user/".concat(a.state.username)),a.setState({username:""}),document.activeElement&&document.activeElement.blur()},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.submit},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{value:this.state.username,onChange:this.updateSearchUser,name:"id",type:"text",required:!0,placeholder:"Username or ID",className:"form-control"}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"g0t Stats?"))),s.a.createElement("small",{className:"tip help-block"},s.a.createElement("em",null,"*Tip: mouse over/tap on a chart to see more info.")))}}]),t}(n.Component),O=Object(E.d)(y),v=a(39),b=a.n(v),D=[["total_games_stats","Total games played on OGS"],["game_results","Game results distribution"],["ranked_games_stats","Ranked games"],["unranked_games_stats","Unranked games"],["even_games_stats","Even games"],["tournament_games_stats","Performance in tournaments"],["board_sizes_stats","Performance across board sizes"],["time_settings_stats","Performance across time settings"],["opponents_stats","Opponents statistics"],["misc_stats","Miscellaneous statistics"]],k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).renderLink=function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{href:"#".concat(e[0]),onClick:function(){return a.props.scrollToElem(e[0])}},e[1]))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(b.a,{className:"navi_list",items:D.map(function(e){return e[0]}),currentClassName:"active"},D.map(this.renderLink))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.showQuickLinks?s.a.createElement("div",{className:"navi hidden-sm hidden-xs"},s.a.createElement("hr",null),s.a.createElement(k,{scrollToElem:this.props.scrollToElem})):null;return s.a.createElement("div",{className:"col-lg-3 col-md-4 order-md-2 sidebar"},s.a.createElement("nav",{className:"side_nav sticky-top"},s.a.createElement(O,null),e))}}]),t}(n.Component),S=Object(o.b)(function(e){return{showQuickLinks:e.chartsData.length>0}})(_),C=a(18),N=a.n(C),w=a(19),P=a.n(w),x=a(26),G=a(8),T=a(27),j=a.n(T),L=function(e){return new j.a(function(t,a){isNaN(e)?N.a.get("".concat(G.OGS_API_ROOT,"?username=").concat(e)).done(function(e){e.results.length>0?t(e.results[0].id):a("Error: user not found. Are you sure you entered the correct username? If it still doesn't work, try using userID instead.")}).fail(function(e){a("Error connecting to OGS server. <strong>Error code: ".concat(e.status,"</strong>. Please try again later or contact me if you really have the need to stalk that person."))}):t(e)})},A=function(e){return new j.a(function(t,a){N.a.get("".concat(G.OGS_API_ROOT).concat(e)).done(function(e){t(e)}).fail(function(e){a("Error connecting to OGS server. <strong>Error code: ".concat(e.status,"</strong>. Please try again later or contact me if you really have the need to stalk that person."))})})},R=function(e,t){return void 0===t&&(t="".concat(G.OGS_API_ROOT).concat(e,"/games/?ended__isnull=false&annulled=false&ordering=-ended&page_size=50")),new j.a(function(e,a){N.a.get(t).done(function(t){e(t)}).fail(function(e){a(e)})})},W=function(e){return e<28?28-e+"k":e-27+"d"},z=a(32),H=new Date(-864e13),F=new Date(864e13),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{from:H,to:F},t=e.from,a=e.to;return function(e,n){e(M(n().games.results.filter(function(e){var n=new Date(e.ended);return n>=t&&n<=a})))}},M=function(e){return{type:"UPDATE_CHART_DATA_SOURCE",payload:e}},U=function(e){return function(){var t=Object(x.a)(P.a.mark(function t(a,n){var s,r,c,o,i,l,m;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(s=n().games.fetching)&&s.cancel(),t.prev=2,r=[],c=R(e),a(B(c)),t.next=8,c;case 8:o=t.sent,r.push.apply(r,Object(z.a)(o.results)),i=0,l=Math.ceil(o.count/50);case 12:if(!o.next){t.next=22;break}return i++,m=R(e,o.next),a(Y({promise:m,fetchingPage:i,fetchingTotalPage:l})),t.next=18,m;case 18:o=t.sent,r.push.apply(r,Object(z.a)(o.results)),t.next=12;break;case 22:a(Q({results:r})),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(2),a(J(t.t0.toString()));case 28:a(I());case 29:case"end":return t.stop()}},t,null,[[2,25]])}));return function(e,a){return t.apply(this,arguments)}}()},B=function(e){return{type:"FETCH_GAMES_START",payload:e}},Y=function(e){return{type:"FETCH_GAMES_PROGRESS",payload:{fetching:e.promise,fetchingPage:e.fetchingPage,fetchingTotalPage:e.fetchingTotalPage}}},Q=function(e){return{type:"FETCH_GAMES_SUCCESS",payload:e}},J=function(e){return{type:"FETCH_GAMES_FAILURE",payload:{error:e}}},q=function(e){return{type:"FETCH_PLAYER_START",payload:e}},$=function(e){return{type:"FETCH_PLAYER_SUCCESS",payload:e}},K=function(e){return{type:"FETCH_PLAYER_FAILURE",payload:{error:e}}},V=(a(81),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isFetchingPlayer,a=e.errorMessage,n=e.currentPage,r=e.totalPages,c=r?s.a.createElement("span",null," of ",r):null,o=t?s.a.createElement("p",null,"Fetching user info from OGS"):s.a.createElement("p",null,"Fetching games result from OGS: page ",n,c);return s.a.createElement("div",{className:"loading_text"},s.a.createElement("svg",{className:"loading_icon animating",width:"150",height:"150"},s.a.createElement("line",{className:"hrline",x1:"0",y1:"71.5",x2:"142",y2:"71.5",stroke:"#f8f8ff",strokeWidth:"1"}),s.a.createElement("line",{className:"vrline",x1:"71.5",y1:"0",x2:"71.5",y2:"142",stroke:"#f8f8ff",strokeWidth:"1"}),s.a.createElement("circle",{className:"black_stone3",cx:"71.5",cy:"28.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),s.a.createElement("circle",{className:"black_stone2",cx:"28.5",cy:"71.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),s.a.createElement("circle",{className:"black_stone1",cx:"114.5",cy:"71.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),s.a.createElement("circle",{className:"black_stone4",cx:"71.5",cy:"114.5",r:"19.5",strokeWidth:"0",fill:"#000000"}),s.a.createElement("circle",{className:"white_stone",cx:"71.5",cy:"71.5",r:"20",strokeWidth:"0",fill:"#f8f8ff"})),o,a)}}]),t}(n.Component)),X=Object(o.b)(function(e){var t=e.player,a=e.games;return{isFetchingPlayer:t.fetching,currentPage:a.fetchingPage,totalPages:a.fetchingTotalPage,errorMessage:t.fetchError||a.fetchError}})(V);function Z(e,t){return!(e.players.black.id===t&&e.black_lost||e.players.white.id===t&&e.white_lost)}function ee(e,t){var a=t.players.black.id===e.id&&t.white_lost||t.players.white.id===e.id&&t.black_lost;if("Resignation"===t.outcome)e["".concat(a?"Plr":"Opp","+Res")]++;else if("Timeout"===t.outcome)e["".concat(a?"Plr":"Opp","+Time")]++;else if(isNaN(t.outcome.split(" ")[0]))e["".concat(a?"Plr":"Opp","+Other")]++;else{var n=parseFloat(t.outcome.split(" ")[0],10),s=Math.floor(n/10),r=10*(s<4?s:4)+"+";r="".concat(a?"Plr":"Opp","+").concat(r),e["".concat(a?"Plr":"Opp","+Count")]++,e[r]++}return e}var te={computeWinLoseStatistics:function(e,t){var a=0,n=0,s=0,r=0;return e.forEach(function(e){e.players.black.id===t?(a++,e.black_lost&&s++):(n++,e.white_lost&&r++)}),{blackGames:a,blackLosses:s,whiteGames:n,whiteLosses:r}},computeWinLoseDistributions:function(e,t){var a={id:t,"Opp+Other":0,"Opp+Count":0,"Opp+Time":0,"Opp+Res":0,"Opp+40+":0,"Opp+30+":0,"Opp+20+":0,"Opp+10+":0,"Opp+0+":0,"Plr+0+":0,"Plr+10+":0,"Plr+20+":0,"Plr+30+":0,"Plr+40+":0,"Plr+Res":0,"Plr+Time":0,"Plr+Count":0,"Plr+Other":0};return e.reduce(ee,a)},computeBoardSizes:function(e,t){var a=0,n=0,s=0,r=0,c=0,o=0,i=0,l=0;return e.forEach(function(e){19===e.width&&19===e.height?(a++,Z(e,t)||c++):13===e.width&&13===e.height?(n++,Z(e,t)||o++):9===e.width&&9===e.height?(s++,Z(e,t)||i++):(r++,Z(e,t)||l++)}),{nineteenGames:a,thirteenGames:n,nineGames:s,otherGames:r,nineteenLosses:c,thirteenLosses:o,nineLosses:i,otherLosses:l}},computeTimeSettings:function(e,t){var a=0,n=0,s=0,r=0,c=0,o=0;return e.forEach(function(e){e.time_per_move<20?(a++,Z(e,t)||r++):e.time_per_move>10800?(s++,Z(e,t)||o++):(n++,Z(e,t)||c++)}),{blitzGames:a,liveGames:n,correspondenceGames:s,blitzLosses:r,liveLosses:c,correspondenceLosses:o}},computeOpponentsInfo:function(e,t){var a=[],n=0,s={rank:70},r={rank:0},c={games:0},o={rank:0};for(var i in e.forEach(function(e){var n=e.players.black.id===t?e.players.white:e.players.black;Z(e,t)&&n.ranking>o.rank&&(o={id:n.id,username:n.username,rank:n.ranking,url:e.related.detail.split("games/")[1],outcome:"Resignation"===e.outcome?"a bloody":"an intense"}),a[n.id]?a[n.id]++:a[n.id]=1,a[n.id]>c.games&&(c={id:n.id,username:n.username,rank:n.ranking,games:a[n.id]}),n.ranking>r.rank&&(r={id:n.id,username:n.username,rank:n.ranking}),n.ranking<s.rank&&(s={id:n.id,username:n.username,rank:n.ranking})}),n=0,a)a.hasOwnProperty(i)&&n++;return{strongestOpp:r,weakestOpp:s,mostPlayed:c,strongestDefeated:o,numberOfOpponents:n,averageGamePerOpponent:(e.length/n).toFixed(2)}},isPlayerWin:Z},ae=a(7),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#000000","#f8f8ff"],pieSliceTextStyle:{color:"#d93344"},legend:{position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}},subChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=te.computeWinLoseStatistics(this.props.gamesData.games,this.props.gamesData.playerId),t=[["Color","Games"],["Black",e.blackGames],["White",e.whiteGames]],a=[["Result","Games"],["Losses",e.blackLosses+e.whiteLosses],["Wins",e.blackGames+e.whiteGames-(e.blackLosses+e.whiteLosses)]],n=e.blackGames>0?[["Result","Games"],["Losses",e.blackLosses],["Wins",e.blackGames-e.blackLosses]]:null,r=e.whiteGames>0?[["Result","Games"],["Losses",e.whiteLosses],["Wins",e.whiteGames-e.whiteLosses]]:null;return s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),s.a.createElement("div",{className:"row"},t?s.a.createElement("div",{className:"col-sm-6 mr-auto ml-auto"},s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:t,width:"100%",height:"300px"})):null),s.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),s.a.createElement("div",{className:"row"},a?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"Total"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.subChartOptions,data:a,width:"100%",height:"250px"})):null,n?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"As Black"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.subChartOptions,data:n,width:"100%",height:"250px"})):null,r?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"As White"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.subChartOptions,data:r,width:"100%",height:"250px"})):null),this.props.footer)}}]),t}(n.Component),se=Object(o.b)(function(e){var t=e.player,a=e.chartsData;return{playerId:t.id,games:a}})(ne),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}},columnChartOptions:{backgroundColor:"transparent",isStacked:!0,chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}},hAxis:{textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:11}},vAxis:{textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:11}}}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateChartData(this.props.gamesData)}},{key:"componentWillReceiveProps",value:function(e){e.gamesData!==this.props.gamesData&&this.generateChartData(e.gamesData)}},{key:"generateChartData",value:function(e){var t=te.computeWinLoseDistributions(e.games,e.playerId);this.setState({chartData1:[["Result","Games"],["Resign",t["Plr+Res"]],["Timeout",t["Plr+Time"]],["Scoring",t["Plr+Count"]],["Other",t["Plr+Other"]]],chartData2:[["Result","Games"],["Resign",t["Opp+Res"]],["Timeout",t["Opp+Time"]],["Scoring",t["Opp+Count"]],["Other",t["Opp+Other"]]],chartData3:[["Outcome","Games opponent wins","Games player wins"],["40+",t["Opp+40+"],null],["30+",t["Opp+30+"],null],["20+",t["Opp+20+"],null],["10+",t["Opp+10+"],null],["0+",t["Opp+0+"],null],["0+",null,t["Plr+0+"]],["10+",null,t["Plr+10+"]],["20+",null,t["Plr+20+"]],["30+",null,t["Plr+30+"]],["40+",null,t["Plr+40+"]]]})}},{key:"render",value:function(){return s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),s.a.createElement("div",{className:"row"},this.state.chartData2?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"Losses"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData2,width:"100%",height:"300px"})):null,this.state.chartData1?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"Wins"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData1,width:"100%",height:"300px"})):null),s.a.createElement("div",{className:"row"},this.state.chartData3?s.a.createElement("div",{className:"col-12"},s.a.createElement("h3",{className:"text-center"},"Score differences distribution"),s.a.createElement(ae.a,{chartType:"ColumnChart",options:this.state.columnChartOptions,data:this.state.chartData3,width:"100%",height:"300px"})):null))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}},pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateChartData(this.props.gamesData)}},{key:"componentWillReceiveProps",value:function(e){e.gamesData!==this.props.gamesData&&this.generateChartData(e.gamesData)}},{key:"generateChartData",value:function(e){var t=te.computeBoardSizes(e.games,e.playerId);this.setState({chartData1:[["Size","Games"],["19x19",t.nineteenGames],["13x13",t.thirteenGames],["9x9",t.nineGames],["Other",t.otherGames]],chartData2:t.nineteenGames>0?[["Result","Games"],["Losses",t.nineteenLosses],["Wins",t.nineteenGames-t.nineteenLosses]]:null,chartData3:t.thirteenGames>0?[["Result","Games"],["Losses",t.thirteenLosses],["Wins",t.thirteenGames-t.thirteenLosses]]:null,chartData4:t.nineGames>0?[["Result","Games"],["Losses",t.nineLosses],["Wins",t.nineGames-t.nineLosses]]:null,chartData5:t.otherGames>0?[["Result","Games"],["Losses",t.otherLosses],["Wins",t.otherGames-t.otherLosses]]:null})}},{key:"render",value:function(){return s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),s.a.createElement("div",{className:"row"},this.state.chartData1?s.a.createElement("div",{className:"col-md-6 mr-auto ml-auto"},s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:this.state.chartData1,width:"100%",height:"300px"})):null),s.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),s.a.createElement("div",{className:"row"},this.state.chartData2?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"19x19"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData2,width:"100%",height:"250px"})):null,this.state.chartData3?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"13x13"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData3,width:"100%",height:"250px"})):null,this.state.chartData4?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"9x9"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData4,width:"100%",height:"250px"})):null,this.state.chartData5?s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",{className:"text-center"},"Other Sizes"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData5,width:"100%",height:"250px"})):null))}}]),t}(n.Component),oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={mainChartOptions:{backgroundColor:"transparent",chartArea:{top:30},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}},pieChartOptions:{backgroundColor:"transparent",chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],pieSliceTextStyle:{color:"#ffffff"},legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}}}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateChartData(this.props.gamesData)}},{key:"componentWillReceiveProps",value:function(e){e.gamesData!==this.props.gamesData&&this.generateChartData(e.gamesData)}},{key:"generateChartData",value:function(e){var t=te.computeTimeSettings(e.games,e.playerId);this.setState({chartData1:[["Size","Games"],["Blitz",t.blitzGames],["Live",t.liveGames],["Correspondence",t.correspondenceGames]],chartData2:t.blitzGames>0?[["Result","Games"],["Losses",t.blitzLosses],["Wins",t.blitzGames-t.blitzLosses]]:null,chartData3:t.liveGames>0?[["Result","Games"],["Losses",t.liveLosses],["Wins",t.liveGames-t.liveLosses]]:null,chartData4:t.correspondenceGames>0?[["Result","Games"],["Losses",t.correspondenceLosses],["Wins",t.correspondenceGames-t.correspondenceLosses]]:null})}},{key:"render",value:function(){return s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),s.a.createElement("div",{className:"row"},this.state.chartData1?s.a.createElement("div",{className:"col-sm-6 mr-auto ml-auto"},s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.mainChartOptions,data:this.state.chartData1,width:"100%",height:"300px"})):null),s.a.createElement("h3",{className:"text-center"},"Win/Loss ratio"),s.a.createElement("div",{className:"row"},this.state.chartData2?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"Blitz"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData2,width:"100%",height:"250px"})):null,this.state.chartData3?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"Live"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData3,width:"100%",height:"250px"})):null,this.state.chartData4?s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h5",{className:"text-center"},"Correspondence"),s.a.createElement(ae.a,{chartType:"PieChart",options:this.state.pieChartOptions,data:this.state.chartData4,width:"100%",height:"250px"})):null))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateChartData(this.props.gamesData)}},{key:"componentWillReceiveProps",value:function(e){e.gamesData!==this.props.gamesData&&this.generateChartData(e.gamesData)}},{key:"generateChartData",value:function(e){var t=te.computeOpponentsInfo(e.games,e.playerId),a=t.weakestOpp.rank-5,n=t.strongestOpp.rank-5,s=this.props.player.ranking-5;this.setState({numberOfOpponents:t.numberOfOpponents,weakestLegendStyle:{marginLeft:"".concat(a/33*100,"%")},strongestLegendStyle:{marginLeft:"".concat((n-a)/33*100,"%")},weakestDisp:{href:"".concat(G.OGS_ROOT,"user/view/").concat(t.weakestOpp.id,"/").concat(t.weakestOpp.username),title:"".concat(t.weakestOpp.username," (").concat(W(t.weakestOpp.rank),")"),style:{left:"".concat(a/33*100,"%")},img:"".concat(G.OGS_API_ROOT).concat(t.weakestOpp.id,"/icon?size=32")},userDisp:{href:"".concat(G.OGS_ROOT,"user/view/").concat(this.props.player.id,"/").concat(this.props.player.username),title:"".concat(this.props.player.username," (").concat(W(this.props.player.ranking),")"),style:{left:"".concat(s/33*100,"%")},img:"".concat(G.OGS_API_ROOT).concat(this.props.player.id,"/icon?size=32")},strongestDisp:{href:"".concat(G.OGS_ROOT,"user/view/").concat(t.strongestOpp.id,"/").concat(t.strongestOpp.username),title:"".concat(t.strongestOpp.username," (").concat(W(t.strongestOpp.rank),")"),style:{left:"".concat(n/33*100,"%")},img:"".concat(G.OGS_API_ROOT).concat(t.strongestOpp.id,"/icon?size=32")},mostPlayedDisp:{href:"".concat(G.OGS_ROOT,"user/view/").concat(t.mostPlayed.id,"/").concat(t.mostPlayed.username),img:"".concat(G.OGS_API_ROOT).concat(t.mostPlayed.id,"/icon?size=32"),username:"".concat(t.mostPlayed.username," (").concat(W(t.mostPlayed.rank),")"),games:t.mostPlayed.games},strongestDefeatedDisp:{href:"".concat(G.OGS_ROOT,"user/view/").concat(t.strongestDefeated.id,"/").concat(t.strongestDefeated.username),img:"".concat(G.OGS_API_ROOT).concat(t.strongestDefeated.id,"/icon?size=32"),username:"".concat(t.strongestDefeated.username," (").concat(W(t.strongestDefeated.rank),")"),gameHref:"http://online-go.com/game/".concat(t.strongestDefeated.url)},averageGamePerOpponent:t.averageGamePerOpponent})}},{key:"render",value:function(){return this.state.numberOfOpponents?s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title,": ",this.state.numberOfOpponents),s.a.createElement("div",{className:"row"},s.a.createElement("div",{id:"opponents_polars_chart",className:"opponent_chart col-8 mr-auto ml-auto"},s.a.createElement("ul",{className:"bar_legend"},s.a.createElement("li",{style:this.state.weakestLegendStyle},s.a.createElement("div",null,"Weakest Opponent"),s.a.createElement("span",null)),s.a.createElement("li",{style:this.state.strongestLegendStyle},s.a.createElement("div",null,"Strongest Opponent"),s.a.createElement("span",null))),s.a.createElement("div",{className:"bar_chart"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.weakestDisp.href,"data-toggle":"tooltip","data-placement":"top",title:this.state.weakestDisp.title,style:this.state.weakestDisp.style},s.a.createElement("img",{src:this.state.weakestDisp.img,alt:this.state.weakestDisp.title})),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.userDisp.href,"data-toggle":"tooltip","data-placement":"top",title:this.state.userDisp.title,style:this.state.userDisp.style},s.a.createElement("img",{src:this.state.userDisp.img,alt:this.state.userDisp.title})),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.strongestDisp.href,"data-toggle":"tooltip","data-placement":"top",title:this.state.strongestDisp.title,style:this.state.strongestDisp.style},s.a.createElement("img",{src:this.state.strongestDisp.img,alt:this.state.strongestDisp.title}))),s.a.createElement("ul",{className:"ruler"},s.a.createElement("li",null,s.a.createElement("span",null),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("em",null,"25k")))),s.a.createElement("li",null,s.a.createElement("span",null),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("em",null,"10k")))),s.a.createElement("li",null,s.a.createElement("span",null),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("em",null,"1d")))),s.a.createElement("li",null,s.a.createElement("span",null),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("em",null,"9d"))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12"},s.a.createElement("ul",{className:"info_list"},s.a.createElement("li",null,"Most played with:"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.mostPlayedDisp.href},s.a.createElement("img",{className:"img-20",src:this.state.mostPlayedDisp.img,alt:this.state.mostPlayedDisp.username})," ",this.state.mostPlayedDisp.username)," ","in ",this.state.mostPlayedDisp.games," games."),s.a.createElement("li",null,"Scored a triumphant victory against"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.strongestDefeatedDisp.href},s.a.createElement("img",{className:"img-20",src:this.state.strongestDefeatedDisp.img,alt:this.state.strongestDefeatedDisp.username})," ",this.state.strongestDefeatedDisp.username)," ","in"," ",s.a.createElement("a",{href:this.state.strongestDefeatedDisp.gameHref,target:"_blank",rel:"noopener noreferrer"},"a bloody game"),"."),s.a.createElement("li",null,"Average game per opponent: ",this.state.averageGamePerOpponent," games."))))):s.a.createElement("section",{className:"stats_block"})}}]),t}(n.Component),le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={columnChartOptions:{backgroundColor:"transparent",isStacked:!0,chartArea:{top:10},colors:["#d93344","#41CD64","#5486d1","#9d4dc5"],legend:{maxLines:2,position:"bottom",textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:14}},hAxis:{textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:11}},vAxis:{textStyle:{color:"#f8f8ff",fontName:"Helvetica Neue",fontSize:11}}}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateChartData(this.props.gamesData)}},{key:"componentWillReceiveProps",value:function(e){e.gamesData!==this.props.gamesData&&this.generateChartData(e.gamesData)}},{key:"generateChartData",value:function(e){}},{key:"render",value:function(){return s.a.createElement("section",{className:"stats_block"},s.a.createElement("h2",{id:this.props.id,className:"text-center"},this.props.title),s.a.createElement("div",{className:"row"},this.state.chartData?s.a.createElement("div",{className:"col-12"},s.a.createElement("h3",{className:"text-center"},"Activities in the past 15 days"),s.a.createElement(ae.a,{chartType:"ColumnChart",options:this.state.columnChartOptions,data:this.state.chartData,width:"100%",height:"300px"})):null))}}]),t}(n.Component),me=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"createGameData",value:function(e){return{playerId:this.props.player.id,games:e}}},{key:"render",value:function(){var e=this,t=this.createGameData(this.props.chartsData),a=t.games.reduce(function(t,a){return te.isPlayerWin(a,e.props.player.id)?t:t+1},0),n=t.games.filter(function(e){return e.ranked}),r=t.games.filter(function(e){return!e.ranked}),c=t.games.filter(function(e){return 0===e.handicap}),o=t.games.filter(function(e){return null!==e.tournament}),i=o.reduce(function(e,t){return-1===e.indexOf(t.tournament)&&e.push(t.tournament),e},[]);return s.a.createElement("div",null,t.games.length>0&&s.a.createElement(se,{title:"Total games played on OGS: ".concat(t.games.length),id:"total_games_stats",gamesData:t,footer:a>=50?s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-12"},s.a.createElement("p",{className:"gratz"},"Congratulations, ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://senseis.xmp.net/?page=LoseYourFirst50GamesAsQuicklyAsPossible"},"you have lost your first 50 games"),"!"))):null}),t.games.length>0&&s.a.createElement(re,{title:"Game results distribution",id:"game_results",gamesData:t}),n.length>0&&s.a.createElement(se,{title:"Ranked Games: ".concat(n.length),id:"ranked_games_stats",gamesData:this.createGameData(n)}),r.length>0&&s.a.createElement(se,{title:"Unranked Games: ".concat(r.length),id:"unranked_games_stats",gamesData:this.createGameData(r)}),c.length>0&&s.a.createElement(se,{title:"Even Games: ".concat(c.length),id:"even_games_stats",gamesData:this.createGameData(c)}),o.length>0&&s.a.createElement(se,{title:"Participated in ".concat(i.length," tournaments"),id:"tournament_games_stats",gamesData:this.createGameData(o)}),t.games.length>0&&s.a.createElement(ce,{title:"Performance across board sizes",id:"board_sizes_stats",gamesData:t}),t.games.length>0&&s.a.createElement(oe,{title:"Performance across time settings",id:"time_settings_stats",gamesData:t}),t.games.length>0&&s.a.createElement(ie,{title:"Number of opponents faced",id:"opponents_stats",gamesData:t,player:this.props.player}),t.games.length>0&&s.a.createElement(le,{title:"Miscellaneous statistics",id:"misc_stats",gamesData:t,player:this.props.player}))}}]),t}(n.Component),pe=Object(o.b)(function(e){return{chartsData:e.chartsData,player:e.player}})(me),he=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"scrollToElem",value:function(e){N()("html,body").animate({scrollTop:N()("#"+e).offset().top},"fast")}},{key:"componentDidMount",value:function(){this.props.user&&this.props.getPlayerData(this.props.user)}},{key:"componentWillReceiveProps",value:function(e){e.user!==this.props.user&&this.props.getPlayerData(e.user)}},{key:"render",value:function(){return s.a.createElement("main",{className:"App"},s.a.createElement(f,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(S,{scrollToElem:this.scrollToElem}),s.a.createElement("div",{className:"col-lg-9 order-md-1 col-md-8 content-wrapper"},this.props.showLoading?s.a.createElement(X,null):this.props.showStatistics?s.a.createElement(pe,null):s.a.createElement(g,null)))))}}]),t}(n.Component),ue=Object(o.b)(function(e){var t=e.player,a=e.games,n=e.chartsData;return{showLoading:t.fetching||t.fetchError||a.fetching||a.fetchError,showStatistics:n.length>0}},function(e){return{getPlayerData:function(t){return e(function(e){return function(){var t=Object(x.a)(P.a.mark(function t(a,n){var s,r,c,o,i;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(s=n().player.fetching)&&s.cancel(),t.prev=2,r=L(e),a(q(r)),t.next=7,r;case 7:return c=t.sent,o=A(c),a(q(o)),t.next=12,o;case 12:i=t.sent,a(U(i.id)),a($({id:i.id,username:i.username,rank:W(i.ranking),registrationData:i.registration_date})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),a(K(t.t0));case 20:case"end":return t.stop()}},t,null,[[2,17]])}));return function(e,a){return t.apply(this,arguments)}}()}(t))}}})(he),de=a(29),fe=function(e){var t=e.reduxStore;return s.a.createElement(o.a,{store:t},s.a.createElement(de.a,null,s.a.createElement(E.a,{path:"/user/:user",component:function(e){var t=e.match;return s.a.createElement(ue,{user:t.params.user})}}),s.a.createElement(E.a,{exact:!0,path:"/",component:ue})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(41),Ee=a(42),ye=a(16),Oe=a(15),ve={username:"",rank:"",fetching:null,fetchError:""},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_PLAYER_START":return Object(Oe.a)({},e,{fetching:n,fetchFailure:""});case"FETCH_PLAYER_SUCCESS":return Object(Oe.a)({},e,{fetching:null},n);case"FETCH_PLAYER_FAILURE":return Object(Oe.a)({},e,{fetching:null,fetchFailure:n.error});default:return e}},De=new Date(-864e13),ke=new Date(864e13),_e={results:[],fetching:!1,fetchingPage:0,fetchingTotalPage:0,fetchError:"",start:De,end:ke},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_GAMES_START":return Object(Oe.a)({},e,{fetching:n,fetchingPage:1,fetchingTotalPage:0,fetchError:"",start:De,end:ke});case"FETCH_GAMES_PROGRESS":return Object(Oe.a)({},e,n);case"FETCH_GAMES_SUCCESS":return Object(Oe.a)({},e,{fetching:null},n,{start:new Date(n.results.length?n.results[n.results.length-1].ended:De),end:new Date(n.results.length?n.results[0].ended:ke)});case"FETCH_GAMES_FAILURE":return Object(Oe.a)({},e,{fetching:null,fetchError:n.error});default:return e}},Ce=[],Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_CHART_DATA_SOURCE":return n;case"FETCH_GAMES_START":return Ce;default:return e}},we=Object(ye.combineReducers)({player:be,games:Se,chartsData:Ne}),Pe=Object(ye.createStore)(we,Object(ge.composeWithDevTools)(Object(ye.applyMiddleware)(Ee.a)));c.a.render(s.a.createElement(fe,{reduxStore:Pe}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.909efa28.chunk.js.map