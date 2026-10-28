import{n as e}from"./chunk-DECur_0Z.js";import{c as t,f as ee,i as n,m as te,n as ne,o as re,u as ie}from"./cvd-DHh13RAr.js";import{n as ae}from"./orderbook_profile-i57lnNTo.js";var oe=e({createdAt:()=>i,default:()=>se,description:()=>o,imagePath:()=>r,name:()=>l,options:()=>c,script:()=>a,version:()=>s}),r=`/indicator-previews/all-markets.svg`,i=1623024000001,a=`metric = option(default="Price", type=list, options=["Price", "Open interest", "CVD", "Volume", "Trade delta", "Trade count", "Bid depth", "Ask depth"], rebuild=true, label="Metric")
displayMode = option(default="Line", type=list, options=["Line", "Candles"], rebuild=true, label="Display")
scaleMode = option(default="Independent", type=list, options=["Independent", "Shared"], rebuild=true, label="Market scales", description="Independent autoscales each market separately while keeping its raw values. Shared compares raw values on the indicator's selected scale.")
plotMarkets()`,o=`One series per market selected in this pane, with stable colors, short pairs and exchange logos. Choose price, USD open interest, quote-turnover CVD, volume, trade delta/count or standing depth, as lines or candles. Independent scales autoscale each market's raw values separately; Shared compares raw values on one scale. CVD starts at the loaded history boundary. Metric candles use observed bar values; unavailable observations remain gaps.`,s=`3.0.0`,c={priceScaleId:`right`,scaleMode:`Independent`,metric:`Price`,displayMode:`Line`,lineWidth:1,borderVisible:!1,lastValueVisible:!0},l=`All markets`,se={imagePath:r,createdAt:i,script:a,description:o,version:s,options:c,name:l},ce=e({author:()=>y,createdAt:()=>h,default:()=>le,description:()=>v,displayName:()=>_,id:()=>d,imagePath:()=>u,name:()=>f,options:()=>p,script:()=>m,updatedAt:()=>g}),u=`indicators/the_syndrome/alternating-periods-backgrounds.png`,d=`alternating-periods-backgrounds`,f=`Alternating periods backgrounds`,p={priceScaleId:`right`,barCount:null,visible:!0,highlightColor:`rgba(255,255,255,0.05)`,baseLineVisible:!1,lastValueVisible:!1,priceLineVisible:!1,scaleMargins:{top:.04,bottom:.26}},m=`var barCount = options.barCount || 24;
var highlighted = (bar.length % (barCount * 2)) > barCount;
if (highlighted) {
  brokenarea(
    $price.close - $price.close,
    $price.close + $price.close,
    color=(options.highlightColor || "rgba(255, 255, 255, 0.05)")
  );
}`,h=1704843848569,g=1704843911852,_=`Alternating periods backgrounds`,v=`Every X number of bars alternate the background color. For example if viewing 1min chart and barCount is 60 each hour the background color will change. It works best with subtle background colors and RGBA so the user can set the transparency and see through it. Author discord: the_syndrome`,y=`the_syndrome`,le={imagePath:u,id:d,name:f,options:p,script:m,createdAt:h,updatedAt:g,displayName:_,description:v,author:y},ue=e({createdAt:()=>x,default:()=>de,imagePath:()=>b,name:()=>w,options:()=>C,script:()=>S}),b=`indicators/aggr/bb-ribbon.png`,x=1623024e6,S=`src = sma($price.close, options.maLength)
a = sma(Math.pow(src,2),options.bbLength)
b = Math.pow(sum(src,options.bbLength),2)/Math.pow(options.bbLength,2)
stdev = Math.sqrt(a - b)
dev = options.mult * stdev
basis = sma(src, options.bbLength)
upper = basis + dev
lower = basis - dev
srcTwo=($price.close + $price.low + $price.high) / 3
emaSlow = ema(srcTwo, options.emaSlowLength)
emaFast = ema(srcTwo, options.emaFastLength)
plotcloudarea(lower, upper, positiveColor=options.slowRibbonColor, negativeColor=options.slowRibbonColor)
plotcloudarea(emaSlow, emaFast)`,C={priceScaleId:`right`,maLength:200,bbLength:50,mult:3,emaSlowLength:50,emaFastLength:20,slowRibbonColor:`rgba(255,204,128,0.1)`,higherLineColor:`rgba(0,0,0,0)`,lowerLineColor:`rgba(0,0,0,0)`,negativeColor:`rgba(255,167,38,0.25)`,positiveColor:`rgba(255,167,38,0.25)`},w=`BB Ribbon`,de={imagePath:b,createdAt:x,script:S,options:C,name:w},fe=e({createdAt:()=>pe,default:()=>me,imagePath:()=>T,name:()=>O,options:()=>D,script:()=>E}),T=`indicators/aggr/bollinger-bands.png`,pe=1623024e6,E=`a = sma(Math.pow($price.close,2),options.length)
b = Math.pow(sum($price.close,options.length),2)/Math.pow(options.length,2)
stdev = Math.sqrt(a - b)
src = $price.close

basis = sma($price.close, options.length)
dev = options.mult * stdev
upper = basis + dev
lower = basis - dev

line(basis, color=options.basisColor)
plotcloudarea(lower, upper)`,D={priceScaleId:`right`,mult:2,length:20,lineStyle:2,basisColor:`rgba(129,199,132,0.5)`,positiveColor:`rgba(0,0,0,0.1)`,negativeColor:`rgba(0,0,0,0.1)`,lowerLineColor:`rgb(129,199,132)`,higherLineColor:`rgb(129,199,132)`},O=`Bollinger Bands`,me={imagePath:T,createdAt:pe,script:E,options:D,name:O},he=e({default:()=>ge,description:()=>j,imagePath:()=>k,name:()=>A,options:()=>N,script:()=>M}),k=`/indicator-previews/book-flow-osc.svg`,A=`Book Flow OSC`,j=`Exact committed best-quote order flow, normalized by preceding best depth and past volume separately within spot and perpetual markets. Movement uses the Engine elastic window without its per-update cap. Balance is 10G/(1+abs(G)); raw difference preserves G. Missing measurements are gaps. Coverage shows the share of past volume represented by measured books. Browser sessions require the same sources, 100ms boundaries and starting state for comparison with Engine history. Quantity views retain unweighted net best-quote changes in base-asset units for the covered sources, before any depth normalization. They include additions, cancellations and executions already reflected in the book; they are not a second trade CVD or an inventory estimate. Older history without measured quantities remains unavailable.`,M=`title = option(default="Book Flow OSC", type=text, label="Price-axis label")
variant = option(default="Movement", type=list, options=["Movement", "Balance", "Raw difference", "Both", "Coverage", "Quantity difference", "Quantity spot", "Quantity perp"], rebuild=true, label="Variant")
var value = options.variant === "Balance" ? bfo_balance : options.variant === "Raw difference" ? book_difference : bfo_movement
if (options.variant === "Quantity difference") value = isFinite(book_spot_base_delta) && isFinite(book_perp_base_delta) ? book_spot_base - book_perp_base : NaN
if (options.variant === "Quantity spot") value = isFinite(book_spot_base_delta) ? book_spot_base : NaN
if (options.variant === "Quantity perp") value = isFinite(book_perp_base_delta) ? book_perp_base : NaN
if (options.variant === "Coverage") {
  line(book_coverage_spot * 100, color=options.color, title="Spot coverage %", id="bfo_spot_coverage")
  line(book_coverage_perp * 100, color=options.balanceColor, title="Perp coverage %", id="bfo_perp_coverage")
} else {
  line(value, color=options.color, title=options.title, id="bfo_value")
  if (options.variant === "Both") line(bfo_balance, color=options.balanceColor, title="BFO Balance", id="bfo_balance")
}
`,N={priceScaleId:`book-flow-osc`,color:`#38bdf8`,balanceColor:`#f59e0b`,lineWidth:2,variant:`Movement`,title:`Book Flow OSC`,lastValueVisible:!0},ge={imagePath:k,name:A,description:j,script:M,options:N},_e=e({default:()=>ve,description:()=>R,id:()=>F,imagePath:()=>P,name:()=>I,options:()=>z,script:()=>B,version:()=>L}),P=`/indicator-previews/candle_volume_bubbles.svg`,F=`candle_volume_bubbles`,I=`Bubbles`,L=`2.3.1`,R=`One bubble per visible candle. Compose per-bar or cumulative sources for size, color and opacity, with independent response contrast. Direction then strength keeps unsigned activity on its candle's buy/sell side; Activity level maps low/sell to high/buy. Spectrum blends the selected Sell, Neutral and Buy colors; swapping Buy and Sell reverses the gradient around the same Neutral midpoint. Delta colors retain their actual sign. Visible maxima set full scale; Contrast above 1 emphasizes stronger readings; below 1 reveals quieter candles without moving the endpoints. Minimum and maximum size set the diameter range at default zoom; Overall size scales the whole range. Maximum opacity fades every bubble proportionally; Minimum opacity sets the faintest relative reading before that fade. All references recalculate from visible candles; cumulative inputs restart at the left edge. Choose soft Flow or Plain circles, Total or net Delta sizing, split buy/sell sectors and optional reported-liquidation rings. Volume size with Trades color/opacity and Directional mapping reproduces the original volume bubbles. Missing color stays grey; candle-close placement approximates execution location.`,z={priceScaleId:`right`,showVolume:!0,showLiquidations:!1,rendering:`Flow`,volumeMode:`Total`,splitColors:!1,sizeBy:`Volume`,colorBy:`Trades`,opacityBy:`Trades`,colorMap:`Directional`,colorOrder:`Direction then strength`,sizeMultiplier:.5,opacityMultiplier:.5,colorMultiplier:.5,opacity:.9,buyColor:`#26a69a`,sellColor:`#ef5350`,balancedColor:`#8f9daa`,balanceThreshold:0,liquidationMultiplier:1.5,liquidationOpacity:.9,minimumOpacity:.2,minimumSize:0,maximumSize:36,overallSize:1},B=`// One bubble per visible candle. Data calibration is independent of rendering.
showVolume = option(default=true,type=checkbox,label="Volume bubbles")
showLiquidations = option(default=false,type=checkbox,label="Liquidation bubbles")
rendering = option(default="Flow",type=list,options=["Flow","Plain circles"],label="Rendering")
volumeMode = option(default="Total",type=list,options=["Total","Delta"],label="Bubble amount",description="Delta uses the net buy/sell quantity for the selected size source.")
splitColors = option(default=false,type=checkbox,label="Split buy/sell colors",description="Divide each bubble into measured buy/sell volume sectors. Can be combined with Total or Delta sizing.")
sizeBy = option(default="Volume",type=list,options=["Volume","Trades","Volume delta","Trades delta","Cumulative volume","Cumulative trades","Cumulative volume delta","Cumulative trades delta"],label="Size by")
colorBy = option(default="Trades",type=list,options=["Volume","Trades","Volume delta","Trades delta","Cumulative volume","Cumulative trades","Cumulative volume delta","Cumulative trades delta"],label="Color by")
opacityBy = option(default="Trades",type=list,options=["Volume","Trades","Volume delta","Trades delta","Cumulative volume","Cumulative trades","Cumulative volume delta","Cumulative trades delta"],label="Opacity by")
colorMap = option(default="Directional",type=list,options=["Directional","Spectrum"],label="Color map",description="Spectrum blends Sell color through Neutral color to Buy color. All three color settings control the gradient.")
colorOrder = option(default="Direction then strength",type=list,options=["Direction then strength","Activity level"],label="Color interpretation",description="Unsigned volume/trades: candle flow chooses direction, or map activity level directly from low/Sell color to high/Buy color. Delta fields always retain their own sign.")
minimumSize = option(default=0,type=range,min=0,max=192,step=1,label="Minimum size",description="Smallest bubble diameter in pixels at default zoom, capped at Maximum size. Overall size scales both endpoints.")
maximumSize = option(default=36,type=range,min=0,max=192,step=1,label="Maximum size",description="Largest bubble diameter in pixels at default zoom. Overall size scales both endpoints; chart zoom still adjusts the footprint.")
overallSize = option(default=1,type=range,min=0,max=4,step=0.1,label="Overall size",description="Scales every bubble diameter together while preserving the selected size contrast. 0 hides all bubbles; 2 doubles their diameters.")
sizeMultiplier = option(default=0.5,type=range,min=0.25,max=4,step=0.25,label="Size contrast",description="1 gives metric-proportional area. Higher values emphasize stronger readings; lower values reveal quieter readings. Maximum size stays fixed.")
opacityMultiplier = option(default=0.5,type=range,min=0.25,max=4,step=0.25,label="Opacity contrast",description="Higher values emphasize stronger readings; lower values reveal quieter readings. The relative opacity range stays fixed; Maximum opacity fades every bubble together.")
colorMultiplier = option(default=0.5,type=range,min=0.25,max=4,step=0.25,label="Color contrast",description="Shapes the selected color metric within its range. Higher values emphasize stronger readings; lower values reveal quieter readings. Signed colors retain their direction.")
minimumOpacity = option(default=0.2,type=range,min=0,max=1,step=0.01,label="Minimum opacity",description="Opacity of a zero reading before Maximum opacity fades every bubble. Soft bubble edges still fade out.")
opacity = option(default=0.9,type=range,min=0,max=1,step=0.01,label="Maximum opacity",description="Scales every bubble proportionally, including the faintest ones. 0 hides all bubbles; 1 retains their full metric-based opacity.")
buyColor = option(default="#26a69a",type=color,label="Buy color")
sellColor = option(default="#ef5350",type=color,label="Sell color")
balancedColor = option(default="#8f9daa",type=color,label="Neutral color")
balanceThreshold = option(default=0,type=range,min=0,max=1,step=0.05,label="Neutral zone")
liquidationMultiplier = option(default=1.5,type=range,min=0.25,max=4,step=0.25,label="Liquidation size multiplier")
liquidationOpacity = option(default=0.9,type=range,min=0.1,max=1,step=0.05,label="Liquidation opacity")

tradeBubbles({radius:maximumSize*overallSize/2, minimumRadius:minimumSize*overallSize/2, minimumOpacity:minimumOpacity, grouping:"Candle close", visible:showVolume, sizeBy:sizeBy, colorBy:colorBy, opacityBy:opacityBy, colorMap:colorMap, colorOrder:colorOrder, sizeMultiplier:sizeMultiplier, opacityMultiplier:opacityMultiplier, colorMultiplier:colorMultiplier, mapStyle:rendering=="Plain circles"?"Circles":rendering, opacity:opacity, minimumVolume:0, volumeReference:0, volumeMode:volumeMode, splitColors:splitColors, buyColor:buyColor, sellColor:sellColor, balancedColor:balancedColor, balanceThreshold:balanceThreshold})
liquidationEvents({grouping:"Candle close", visible:showLiquidations, sizeMultiplier:liquidationMultiplier, mapStyle:rendering=="Plain circles"?"Circles":rendering, volumeReference:0, volumeMode:volumeMode, splitColors:splitColors, opacity:liquidationOpacity, minimumVolume:0, side:volumeMode=="Delta"?"Delta":"Both", balanceThreshold:balanceThreshold, contrast:0.5, threshold:0})
`,ve={imagePath:P,id:F,name:I,version:L,description:R,options:z,script:B},ye=e({author:()=>J,createdAt:()=>W,default:()=>be,description:()=>q,displayName:()=>K,imagePath:()=>V,name:()=>Y,options:()=>H,script:()=>U,updatedAt:()=>G}),V=`indicators/Yourowner/candleclose4hrn30min.png`,H={priceScaleId:`_p9d8rx17ogh6xi3n`,scaleMargins:{top:.22,bottom:.7},lastValueVisible:!0,priceLineVisible:!1,baseLineVisible:!1,color:`rgb(187,120,5)`},U=`// Candle Close Countdown (30m + 4h)\r
\r
const now = Date.now();\r
\r
// === 30 Minute Countdown ===\r
const candleMinutes30 = 30;\r
const intervalMs30 = candleMinutes30 * 60 * 1000;\r
const nextClose30 = Math.floor(now / intervalMs30) * intervalMs30 + intervalMs30;\r
const diff30 = nextClose30 - now;\r
const totalSeconds = Math.floor(diff30 / 1000);\r
const minutes = Math.floor(totalSeconds / 60);\r
const seconds = totalSeconds % 60;\r
const milliseconds = Math.floor((diff30 % 1000) / 10); // two-digit ms\r
\r
const displayValue30 = minutes + seconds / 60 + milliseconds / 60000\r
\r
\r
histogram({\r
  time: nextClose30 / 1000,\r
  value: displayValue30,\r
  color:\r
    displayValue30 < 1\r
      ? \`rgba(255,0,0,\${Math.max(0.2, (diff30 / 1000) / 60)})\`\r
    : displayValue30 < 2\r
      ? "red"\r
    : displayValue30 < 3\r
      ? "yellow"\r
    : displayValue30 < 10\r
      ? "orangered"\r
    : displayValue30 < 20\r
      ? "orange"\r
    : "blue"\r
});\r
\r
// === 4 Hour Countdown ===\r
const candleMinutes240 = 240; // 4 hours\r
const intervalMs240 = candleMinutes240 * 60 * 1000;\r
const nextClose240 = Math.floor(now / intervalMs240) * intervalMs240 + intervalMs240;\r
const diff240 = nextClose240 - now;\r
const displayValue240 = Math.round((diff240 / 3600000) * 10) / 10;\r
\r
histogram({\r
  time: nextClose240 / 1000,\r
  value: displayValue240,\r
  color:\r
    displayValue240 < 5\r
      ? "purple"\r
    : displayValue240 < 30\r
      ? "magenta"\r
    : displayValue240 < 60\r
      ? "violet"\r
    : "cyan"\r
});`,W=1761180544637,G=1761201173708,K=`CandleClose4hrN30min`,q=`2-4-1 Please Rescale in need`,J=`Yourowner`,Y=`CandleClose4hrN30min`,be={imagePath:V,options:H,script:U,createdAt:W,updatedAt:G,displayName:K,description:q,author:J,name:Y},xe=e({author:()=>Oe,createdAt:()=>Te,default:()=>ke,displayName:()=>De,id:()=>Z,imagePath:()=>X,name:()=>Se,options:()=>Ce,script:()=>we,updatedAt:()=>Ee}),X=`indicators/aggr/chandelier-exit.png`,Z=`chandelier-exit`,Se=`Chandelier Exit`,Ce={priceScaleId:`right`,highlightState:!0,mult:3,shortColor:`rgba(183,28,28,0.45)`,length:22,useClose:!0,longColor:`rgb(110,246,115)`,showLabels:!0,higherLineColor:`rgba(129,199,132,0)`,positiveColor:`rgba(129,199,132,0.33)`,negativeColor:`rgba(183,28,28,0.33)`,lowerLineColor:`rgba(156,52,52,0)`},we=`/* eslint-disable */
/* prettier-disable */

if (dir === 0) {
  dir = 1
  markers = []
}

// <markers utils>
if (pendingMarker && pendingMarker.time < time) {
  markers.push(pendingMarker)
  pendingMarker = null
}

var newMarker = null
// </markers utils>

open = $price.open 
high = $price.high
low = $price.low 
close = $price.close 

atr = options.mult * rma(Math.max(high - low, Math.max(Math.abs(high - close[1]), Math.abs(low - close[1]))), options.length)
longStop = (options.useClose ? highest(close, options.length) : highest(high, options.length)) - atr

if (close[1] > longStop[1]) {
  longStop = Math.max(longStop, longStop[1]) 
}

shortStop = (options.useClose ? lowest(close, options.length) : lowest(low, options.length)) + atr

if (close[1] < shortStop[1]) {
  shortStop = Math.min(shortStop, shortStop[1]) 
}

if (close > shortStop[1]) {
  dir= 1
}
if (close < longStop[1]) {
  dir= -1
}

var ohlc4 =  (open + high + low + close) / 4

cloudarea(dir == 1 ? {time: time, higherValue: ohlc4, lowerValue: longStop } : dir == -1 ? {time: time, higherValue: ohlc4, lowerValue: shortStop} : {time: time}, title="Stop")

if (dir == 1 && dir[1] == -1) {
  newMarker = {
    time: time,
    position: 'belowBar',
    color: options.longColor,
    shape: 'arrowUp',
    text: options.showLabels ? 'BUY' : undefined,
    size: 1
  }
  
  // alert for sell signal here
} else if (dir == -1 && dir[1] == 1) {
  newMarker = {
    time: time,
    position: 'aboveBar',
    color: options.shortColor,
    shape: 'arrowDown',
    text: options.showLabels ? 'SELL' : undefined,
    size: 1
  }
  
  // alert for buy signal here
}


// <markers utils>
if (newMarker || (pendingMarker && !newMarker)) {
  pendingMarker = newMarker
  
  if (markers.length > 200) {
    markers.splice(0, 1)
  }
  
  if (series[0].setMarkers) {
    series[0].setMarkers(markers.concat(pendingMarker))
  }
}
// </markers utils>`,Te=1704890240682,Ee=1704890292371,De=`Chandelier Exit`,Oe=`aggr`,ke={imagePath:X,id:Z,name:Se,options:Ce,script:we,createdAt:Te,updatedAt:Ee,displayName:De,author:Oe},Ae=e({createdAt:()=>Me,default:()=>Le,description:()=>Pe,imagePath:()=>je,name:()=>Ie,options:()=>Fe,script:()=>Ne}),je=`indicators/aggr/cld.png`,Me=1623024000001,Ne=`title = option(default="CLD", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
var browserValue = cum(lbuy - lsell)
if (options.displayMode === "Line") {
  if (isFinite(cld)) line(cld, color=options.backendColor, title=options.title, priceScaleId="own", id="cld_engine_line")
  if (isFinite(browserValue)) line(browserValue, color=options.color, title=options.title, priceScaleId="own", id="cld_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(cld)) candlestick(ohlc(cld), title=options.title, priceScaleId="own", id="cld_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(browserValue)) candlestick(ohlc(browserValue), title=options.title, priceScaleId="own", id="cld_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(cld)) baseline(cld, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="cld_engine_baseline")
  if (isFinite(browserValue)) baseline(browserValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="cld_browser_baseline")
} else {
  if (isFinite(cld)) histogram({time:time, value:cld, color:cld >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="cld_engine_histogram")
  if (isFinite(browserValue)) histogram({time:time, value:browserValue, color:browserValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="cld_browser_histogram")
}`,Pe=`Cumulative Liquidations Delta. One indicator plots the browser calculation and stored ENSO index value as lines or candles.`,Fe={priceFormat:{type:`volume`},color:`rgb(156,39,176)`,priceScaleId:`ctd`,lineWidth:1,scaleMargins:{top:.75,bottom:.17},backendColor:`#dca6ea`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`CLD`,lastValueVisible:!0},Ie=`CLD {label}`,Le={imagePath:je,createdAt:Me,script:Ne,description:Pe,options:Fe,name:Ie},Re=e({createdAt:()=>Be,default:()=>Ge,description:()=>He,imagePath:()=>ze,name:()=>We,options:()=>Ue,script:()=>Ve}),ze=`indicators/aggr/ctd.png`,Be=1623024000001,Ve=`title = option(default="CTD", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
var value = cum(cbuy - csell)
if (options.displayMode === "Line") {
  if (isFinite(value)) line(value, color=options.color, title=options.title, id="ctd_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(value)) candlestick(ohlc(value), title=options.title, id="ctd_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(value)) baseline(value, topLineColor=options.color, bottomLineColor=options.color, title=options.title, id="ctd_baseline")
} else {
  if (isFinite(value)) histogram({time:time, value:value, color:value >= 0 ? options.upColor : options.downColor}, title=options.title, id="ctd_histogram")
}`,He=`Cumulative Trades Delta from browser trade counts. Choose lines or candles.`,Ue={priceFormat:{type:`volume`},priceScaleId:`ctd`,lineStyle:4,lineWidth:1,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,borderVisible:!1,label:``,color:`#4caf50`,title:`CTD`,lastValueVisible:!0},We=`CTD {label}`,Ge={imagePath:ze,createdAt:Be,script:Ve,description:He,options:Ue,name:We},Ke=e({author:()=>tt,createdAt:()=>Qe,default:()=>nt,description:()=>` `,displayName:()=>et,id:()=>Je,imagePath:()=>qe,name:()=>Ye,options:()=>Xe,script:()=>Ze,updatedAt:()=>$e}),qe=`indicators/KeTan/delta-divs.png`,Je=`delta-divs`,Ye=`Delta divs`,Xe={priceScaleId:`right`,lookback:10,lessRatio:.021,loopback:200,visible:!0},Ze=`lookback = option(default=200,min=0,max=200,type=range,step=1)
lessRatio = option(default=0.05,min=0.02,max=0.1,type=range,step=0.001)

// <STARTUP SCRIPT> 
if (!pendingMarkers) {
  // runs only once
  markers = []
  pendingMarkers = []
  lastIndex = null
}
// </STARTUP SCRIPT> 

// <MARKERS.UTILS> 
if (pendingMarkers.length) {
  markers = markers.concat(pendingMarkers)
  if (series[0].setMarkers) {
    series[0].setMarkers(markers)
  }
  pendingMarkers = []
}
// </MARKERS.UTILS>

// process only on new candle
if (bar.length === lastIndex) {
  return
}

times = time
workingTime = times[1]
high = $price.high
low = $price.low
ph = high[1]
pl = low[1]

// ghost price for markers
candlestick($price, color=transparent, border=false, borderColor=transparent, wickColor=transparent)

vs = vsell
vb = vbuy
vd = vb[1] - vs[1]
vol = vb[1] + vs[1]
var top = highest(ph, options.lookback)
var btm = lowest(pl, options.lookback)
var avgVol = sum(vol, options.lookback) / options.lookback
var vdRatio = Math.abs(vd / vol)
var isLessRatio = vdRatio < options.lessRatio
var highVol = vol > avgVol
var bearSignal = ph >= top && highVol && (isLessRatio || vd < 0)
var bullSignal = pl <= btm && highVol && (isLessRatio || vd > 0)

if (bearSignal) {
  pendingMarkers.push({
    time: workingTime,
    position: 'aboveBar',
    color: 'red',
    shape: 'arrowDown'
  })
}

if (bullSignal) {
  pendingMarkers.push({
    time: workingTime,
    position: 'belowBar',
    color: 'lime',
    shape: 'arrowUp'
  })
}

// set reference to bar index : only process first bar of tick
lastIndex = bar.length`,Qe=1704852855961,$e=1704852923594,et=`Delta divs`,tt=`KeTan`,nt={imagePath:qe,id:Je,name:Ye,options:Xe,script:Ze,createdAt:Qe,updatedAt:$e,displayName:et,description:` `,author:tt},rt=e({author:()=>`KK`,createdAt:()=>st,default:()=>dt,displayName:()=>lt,enabled:()=>!0,imagePath:()=>it,name:()=>ut,options:()=>at,script:()=>ot,updatedAt:()=>ct}),it=`indicators/KK/delta.png`,at={priceScaleId:`_dslqdepk4wz5ew88`,upColor:`rgb(242,54,69)`,downColor:`rgb(27,94,32)`,color:`rgb(255,255,255)`,priceFormat:{type:`volume`,precision:2,minMove:.01,auto:!0},scaleMargins:{top:.86,bottom:0},lastValueVisible:!0,priceLineVisible:!1,baseLineVisible:!1},ot=`histogram({ time: time, value: Math.abs(vbuy-vsell)/1000000, color: vbuy - vsell > 0 ? options.upColor : options.downColor})`,st=1767456187776,ct=1767456812744,lt=`Delta`,ut=`Delta`,dt={imagePath:it,options:at,script:ot,createdAt:st,updatedAt:ct,displayName:lt,enabled:!0,author:`KK`,name:ut},ft=e({default:()=>vt,description:()=>ht,imagePath:()=>pt,name:()=>mt,options:()=>_t,script:()=>gt}),pt=`/indicator-previews/depth-delta.svg`,mt=`Depth Delta (script)`,ht=`Calculates dbuy minus dsell for each selected chart bar. This is the per-bar depth delta, not cumulative or normalized CDD.`,gt=`line(dbuy - dsell)`,_t={priceScaleId:`depth_delta`,priceFormat:{type:`volume`},color:`#9C27B0`,scaleMargins:{top:.75,bottom:.17}},vt={imagePath:pt,name:mt,description:ht,script:gt,options:_t},yt=e({default:()=>Tt,description:()=>St,imagePath:()=>bt,name:()=>xt,options:()=>wt,script:()=>Ct}),bt=`/indicator-previews/depth.svg`,xt=`Depth Buy/Sell`,St=`Plots bid and ask depth totals for the selected sources. Live values come from the same source books as the orderbook; historical values use the depth fields recorded in each bar.`,Ct=`line(dbuy, color=options.buyColor, title="Buy depth")
line(dsell, color=options.sellColor, title="Sell depth")`,wt={priceScaleId:`depth`,priceFormat:{type:`volume`},buyColor:`#26a69a`,sellColor:`#ef5350`,scaleMargins:{top:.75,bottom:.17}},Tt={imagePath:bt,name:xt,description:St,script:Ct,options:wt},Et=e({default:()=>Mt,description:()=>kt,imagePath:()=>Dt,name:()=>Ot,options:()=>jt,script:()=>At}),Dt=`/indicator-previews/ema-value-backend.svg`,Ot=`EMA Value (backend)`,kt=`Plots one stored engine EMA as a line. Select its period in seconds; the chart timeframe does not change that period. Requires backend index bars. Compare with a script only after matching cadence and warm-up.`,At=`period = option(default=300, type=list, options=[300,600,3600,9000,13380,18000,47940,72000,108000,144000,401400,864000,1438200,3211200,11505600], label="Period (seconds)", rebuild=true)
var periods = ["300","600","3600","9000","13380","18000","47940","72000","108000","144000","401400","864000","1438200","3211200","11505600"]
var values = [ema300,ema600,ema3600,ema9000,ema13380,ema18000,ema47940,ema72000,ema108000,ema144000,ema401400,ema864000,ema1438200,ema3211200,ema11505600]
line(values[periods.indexOf(String(options.period))])`,jt={period:300,priceScaleId:`right`,color:`#fdd835`,lineWidth:2},Mt={imagePath:Dt,name:Ot,description:kt,script:At,options:jt},Nt=e({default:()=>zt,description:()=>It,imagePath:()=>Pt,name:()=>Ft,options:()=>Rt,script:()=>Lt}),Pt=`/indicator-previews/engine-cvd_perp.svg`,Ft=`Engine Perp CVD`,It=`Recorded index field. No chart-side calculation. Values belong to the backend configuration and sampling that produced the bars.`,Lt=`line(cvd_perp)`,Rt={priceScaleId:`engine-cvd_perp`,color:`#ab87ff`,lineWidth:1},zt={imagePath:Pt,name:Ft,description:It,script:Lt,options:Rt},Bt=e({default:()=>Kt,description:()=>Ut,imagePath:()=>Vt,name:()=>Ht,options:()=>Gt,script:()=>Wt}),Vt=`/indicator-previews/engine-cvd_spot.svg`,Ht=`Engine Spot CVD`,Ut=`Recorded index field. No chart-side calculation. Values belong to the backend configuration and sampling that produced the bars.`,Wt=`line(cvd_spot)`,Gt={priceScaleId:`engine-cvd_spot`,color:`#3BCA6D`,lineWidth:1},Kt={imagePath:Vt,name:Ht,description:Ut,script:Wt,options:Gt},qt=e({default:()=>$t,description:()=>Xt,imagePath:()=>Jt,name:()=>Yt,options:()=>Qt,script:()=>Zt}),Jt=`/indicator-previews/engine-emas.svg`,Yt=`Engine EMAs`,Xt=`Recorded backend EMA values, in seconds. No recalculation from chart candles.`,Zt=`line(ema300, title="ema300", color="#e53935")
line(ema600, title="ema600", color="#fdd835")
line(ema3600, title="ema3600", color="#43a047")
line(ema13380, title="ema13380", color="#8e24aa")
line(ema47940, title="ema47940", color="#ffffff")`,Qt={priceScaleId:`right`,priceLineVisible:!1},$t={imagePath:Jt,name:Yt,description:Xt,script:Zt,options:Qt},en=e({default:()=>sn,description:()=>rn,imagePath:()=>tn,name:()=>nn,options:()=>on,script:()=>an}),tn=`/indicator-previews/engine-enso_osc.svg`,nn=`Engine OSC`,rn=`Recorded index field. No chart-side calculation. Values belong to the backend configuration and sampling that produced the bars.`,an=`line(enso_osc)`,on={priceScaleId:`engine-enso_osc`,color:`#9C27B0`,lineWidth:1},sn={imagePath:tn,name:nn,description:rn,script:an,options:on},cn=e({default:()=>mn,description:()=>dn,imagePath:()=>ln,name:()=>un,options:()=>pn,script:()=>fn}),ln=`/indicator-previews/engine-oi.svg`,un=`Engine OI`,dn=`Recorded raw index open interest. The ordinary frontend OI study reads this same field on stored index history; those two lines are not independent calculations.`,fn=`line(oi)`,pn={priceScaleId:`engine-oi`,color:`#26a69a`,lineWidth:1,priceFormat:{type:`volume`,precision:2}},mn={imagePath:ln,name:un,description:dn,script:fn,options:pn},hn=e({default:()=>xn,description:()=>vn,imagePath:()=>gn,name:()=>_n,options:()=>bn,script:()=>yn}),gn=`/indicator-previews/engine-oi_normalized.svg`,_n=`Engine OI normalized`,vn=`Recorded index field. No chart-side calculation. Values belong to the backend configuration and sampling that produced the bars.`,yn=`line(oi_normalized)`,bn={priceScaleId:`engine-oi_normalized`,color:`#42a5f5`,lineWidth:1},xn={imagePath:gn,name:_n,description:vn,script:yn,options:bn},Sn=e({default:()=>On,description:()=>Tn,imagePath:()=>Cn,name:()=>wn,options:()=>Dn,script:()=>En}),Cn=`/indicator-previews/engine-price_position.svg`,wn=`Engine Price position`,Tn=`Recorded index field. No chart-side calculation. Values belong to the backend configuration and sampling that produced the bars.`,En=`line(price_position)`,Dn={priceScaleId:`engine-price_position`,color:`#ef5350`,lineWidth:1},On={imagePath:Cn,name:wn,description:Tn,script:En,options:Dn},kn=e({default:()=>In,description:()=>Mn,enabled:()=>!0,imagePath:()=>An,name:()=>jn,options:()=>Fn,script:()=>Pn,version:()=>Nn}),An=`/indicator-previews/equity.svg`,jn=`Equity`,Mn=`Portfolio equity curve from the strategy`,Nn=`3.8.1`,Pn=`line(equity)`,Fn={priceScaleId:`equity`,color:`rgb(100, 157, 102)`,lineWidth:2,lastValueVisible:!0,priceLineVisible:!0,scaleMargins:{top:0,bottom:.88}},In={imagePath:An,enabled:!0,name:jn,description:Mn,version:Nn,script:Pn,options:Fn},Ln=e({default:()=>Wn,description:()=>Vn,id:()=>zn,imagePath:()=>Rn,name:()=>Bn,options:()=>Hn,script:()=>Un}),Rn=`/indicator-previews/executions.svg`,zn=`executions`,Bn=`Executions`,Vn=`Confirmed fills below buy candles and above sell candles, using the ordinary script markers. Labels show executed size and price, not the arrow's vertical coordinate. MM mode supplies receipts; no candle-touch fills are inferred.`,Hn={executionFills:``,priceScaleId:`right`,visible:!0,priceLineVisible:!1,lastValueVisible:!1,crosshairMarkerVisible:!1,markerSize:1,showLabels:!1,buyColor:`rgb(13,181,153)`,sellColor:`rgb(242,54,69)`},Un=`executionFills = option(default='',type=text,rebuild=true)
markerSize = option(default=1,min=0.5,max=3,step=0.25,type=range)
showLabels = option(default=false,type=checkbox)
buyColor = option(default='rgb(13,181,153)',type=color)
sellColor = option(default='rgb(242,54,69)',type=color)

// Invisible price candles give native markers the same high/low anchors.
candlestick({time:time,open:$price.open,high:$price.high,low:$price.low,close:$price.close},upColor=transparent,downColor=transparent,wickUpColor=transparent,wickDownColor=transparent,borderVisible=false,legend=false)

if (markers === 0) {
  markers = []
  series[0].setMarkers([])
}
if (pendingMarkers && pendingTime < time) {
  markers = markers.concat(pendingMarkers)
  pendingMarkers = null
}

var current = []
var receipts = options.executionFills.split(';')
for (var i = 0; i < receipts.length; i++) {
  if (!receipts[i]) continue
  var fill = receipts[i].split(',')
  var timestamp = +fill[0]
  if (timestamp < time || timestamp >= time + bar.timeframe) continue
  var buy = +fill[1] > 0
  current.push({time:time,position:buy ? 'belowBar' : 'aboveBar',shape:buy ? 'arrowUp' : 'arrowDown',color:buy ? buyColor : sellColor,size:markerSize,text:showLabels ? (buy ? 'BUY ' : 'SELL ') + fill[2] + ' @ ' + fill[3] : undefined})
}
if (current.length || pendingMarkers) {
  pendingMarkers = current
  pendingTime = time
  series[0].setMarkers(markers.concat(pendingMarkers))
}`,Wn={imagePath:Rn,id:zn,name:Bn,description:Vn,options:Hn,script:Un},Gn=e({author:()=>nr,createdAt:()=>Zn,default:()=>rr,description:()=>er,displayName:()=>$n,id:()=>qn,imagePath:()=>Kn,name:()=>Jn,options:()=>Yn,pr:()=>tr,script:()=>Xn,updatedAt:()=>Qn}),Kn=`indicators/aggr/fibonacci-grid.png`,qn=`fibonacci-grid`,Jn=`Fibonacci Grid`,Yn={priceScaleId:`right`,levels:`0|1|2|3|5|8|13|21|34|55|89`,levelMult:1,drawCount:3,srcExchange:0,srcQuote:0,srcType:null,targetLevelUp:84.30000000000001,invalidationThreshold:0,enableInvalidation:0,invalidateSwing:!0,useHeikinAshi:0,useGaps:!0,showUp:!0,enableTarget:!0,showLabel:0,lineWidth:1.5,upColor:`rgb(255,235,59)`},Xn=`levels = option(default="0|1|2|3|5|8|13|21|34|55|89",type="text")
levelMult = option(default="1",type="text")
drawCount = option(type=range,min=1,max=6,default=3,step=1)
srcExchange = option(type=exchange,rebuild=true)
srcQuote = option(default=null,type=list,options=[null, "USD", "USDT", "TUSD", "USDC"],rebuild=true)
srcType = option(default=perp,type=list,options=[null, "spot", "perp"],rebuild=true)
targetLevelUp = option(type=range,min=0,max=89,default=79)
invalidationThreshold = option(type=range,max=2,min=0,step=0.01)
enableInvalidation = option(type=checkbox)
invalidateSwing = option(type=checkbox,default=true)
useHeikinAshi = option(type=checkbox)
useGaps = option(type=checkbox,default=true)
showUp = option(type=checkbox,default=true)
enableTarget = option(type=checkbox,default=true)
showLabel = option(type=checkbox)
lineWidth = option(default=1.5)
upColor = option(type=color,default="rgb(255,235,59)")

// <STARTUP SCRIPT> 
if (!pendingMarkers) {
  // runs only once
  markers = []
  pendingMarkers = []
  lastIndex = null
  freeSlots = []
  usedSlots = []
  swings = []
  rawLevels = options.levels.toString().split(/,|\\|/).map(a => +a)
  baseLevelIndex = rawLevels.indexOf(0)
  up = {}
  boundaries = {}
  var mults = levelMult.toString().split(/,|\\|/).map(a => +a)
  calculatedLevels = rawLevels.reduce((acc, level, index, arr) => {
    return mults.reduce((acc2, val) => {
      arr[index + 1] && acc2.push(+(level + (arr[index + 1] - level) * val).toFixed(3));
      return acc2
    }, acc)
  }, [rawLevels[0]])
  for (var i = 1; i < series.length; i++) {
    if (series[i].seriesType() !== 'BrokenArea') {
      continue
    }

    freeSlots.push({
      index: i,
      redrawAt: 0
    })

    series[i].setExtensionsBoundaries(boundaries)
  }
}
// </STARTUP SCRIPT> 

// <MARKERS.UTILS> 
if (pendingMarkers.length) {
  markers = markers.concat(pendingMarkers)
  if (series[0].setMarkers) {
    series[0].setMarkers(markers)
  }
  pendingMarkers = []
}
// </MARKERS.UTILS>

// process only on new candle
if (bar.length === lastIndex) {
  return
}
src = options.srcExchange || options.srcType || options.srcQuote ? source(type=options.srcType, exchange=options.srcExchange, quote=options.srcQuote) : bar

if (!src) {
  return
}
price = options.useHeikinAshi ? avg_heikinashi(src) : options.useGaps ? avg_ohlc_with_gaps(src) : avg_ohlc(src)
candlestick(price, upColor=transparent, downColor=transparent, wickUpColor=transparent, wickDownColor=transparent, showBorders=false) // ghost price for markers

// constants and working values
open = price.open
close = price.close
high = price.high
low = price.low
var workingClose = close[1]
var workingOpen = open[1]
var workingHigh = high[1]
var workingLow = low[1]
var workingTime = time
var swingHigh = workingClose > workingOpen && close <= open ? Math.min(open, workingClose) : null
var swingLow = workingClose < workingOpen && close >= open ? Math.max(open, workingClose) : null

if (swingHigh || swingLow) {
  swings.unshift(swingHigh || swingLow)
  if (swings.length > 4) {
    swings.pop()
  }
}

if (options.showUp) {
  if (up.valid) {
    // up trend origin broken ❌
    if (options.enableInvalidation && (options.invalidateSwing ? swingHigh && swingHigh < up.invalidation : workingClose < up.invalidation)) {
      // deactivate trend
      up.valid = false
    }
  
    // up trend target reached 💰
    if (options.enableTarget && high[1] >= up.target) {
      up.valid = false
      pendingMarkers.push({
        time: time,
        position: 'aboveBar',
        text: '💰'
      })
    }
  }

  // in active up trend process
  if (up.active) {

    // ranges breakout
    if (workingClose > up.levels[up.higherIndex].price) { // move next
      for (let i = up.levels[up.higherIndex].index + 1; i < calculatedLevels.length; i++) {
        var higherPriceLevel = up.origin + up.impulse * calculatedLevels[i]

        if (workingClose < higherPriceLevel) {
          var change = i - up.levels[up.higherIndex].index // +1
          if (up.levels[0].index + change < 0 || up.levels[up.levels.length - 1].index + change > calculatedLevels.length - 1) {
            break
          }
          up.redrawRequired = true

          for (var j = 0; j < up.levels.length; j++) {
            up.levels[j].index = up.levels[j].index + change


            if (j < change && up.drawings[up.levels[j].price]) {
              // level out of scope
              var plotIndexToFree = usedSlots.splice(usedSlots.indexOf(up.drawings[up.levels[j].price].index), 1)[0]
              freeSlots.push({
                index: plotIndexToFree,
                redrawAt: bar.length + 1
              })
              boundaries[up.drawings[up.levels[j].price].id] = bar.length - 1
              delete up.drawings[up.levels[j].price]
            }
            
            var level = (calculatedLevels)[up.levels[j].index]
            up.levels[j].price = up.origin + up.impulse * level
            up.levels[j].level = level
            up.levels[j].upper = up.origin + up.impulse * level
            up.levels[j].lower = up.origin + up.impulse * level
          }

          break;
        }
      }



    } else if (workingClose < up.levels[up.lowerIndex].price) { // move prev
      for (let i = up.levels[up.lowerIndex].index - 1; i >= 0; i--) {
        var lowerPriceLevel = up.origin + up.impulse * calculatedLevels[i]

        if (workingClose > lowerPriceLevel) {
          var change = i - up.levels[up.lowerIndex].index // -1
          if (up.levels[0].index + change < 0 || up.levels[up.levels.length - 1].index + change > levels.length - 1) {
            break
          }
          up.redrawRequired = true

          for (var j = 0; j < up.levels.length; j++) {
            up.levels[j].index = up.levels[j].index + change

            if (j >= change + up.levels.length && up.drawings[up.levels[j].price]) {
              var plotIndexToFree = usedSlots.splice(usedSlots.indexOf(up.drawings[up.levels[j].price].index), 1)[0]
              freeSlots.push({
                index: plotIndexToFree,
                redrawAt: bar.length + 1
              })
              boundaries[up.drawings[up.levels[j].price].id] = bar.length - 1
              delete up.drawings[up.levels[j].price]
            }

            var level = (calculatedLevels)[up.levels[j].index]
            up.levels[j].price = up.origin + up.impulse * level
            up.levels[j].level = level
            up.levels[j].upper = up.origin + up.impulse * level
            up.levels[j].lower = up.origin + up.impulse * level
          }

          break;
        }
      }
    }

    // drawer
    if (up.redrawRequired) {
      up.redrawRequired = false
      var missingSlots = 0
      for (var i = 0; i < up.levels.length; i++) {
        if (!up.drawings[up.levels[i].price]) {
          if (freeSlots.length) {
            var slot = freeSlots.find(slot => slot.redrawAt < bar.length)

            if (!slot) {
              up.redrawRequired = true
              continue
            }

            up.drawings[up.levels[i].price] = {
              index: slot.index,
              id: 'up-' + up.levels[i].price + time
            }

            usedSlots.push(freeSlots.splice(freeSlots.indexOf(slot), 1)[0].index)
            renderer.indicators[indicatorId].series[up.drawings[up.levels[i].price].index] = {
              time: workingTime,
              color: options.upColor,
              id: up.drawings[up.levels[i].price].id,
              lowerValue: up.levels[i].lower,
              higherValue: up.levels[i].upper,
              extendRight: true,
              label: options.showLabel ? up.levels[i].level : ''
            }
          } else {
            up.redrawRequired = true
            missingSlots = missingSlots + 1
          }
        }
      }
    }
  }
}

if (options.showUp && swingHigh && (swings)[0] > (swings)[2] && (!up.valid || up.origin > (swings)[1])) {
  var upId = 'up' + bar.length

  if (up.active) {
    // active if opposite side didn't stopped it (happens when singleSide is disabled)
    boundaries[up.id] = bar.length - 1
    for (let i = 0; i < up.levels.length; i++) {
      if (up.drawings[up.levels[i].price]) {
        var plotIndexToFree = usedSlots.splice(usedSlots.indexOf(up.drawings[up.levels[i].price].index), 1)[0]
        freeSlots.push({
          index: plotIndexToFree,
          redrawAt: bar.length + 1
        })
        boundaries[up.drawings[up.levels[i].price].id] = bar.length - 1
        delete up.drawings[up.levels[i].price]
      }
    }
  }

  var a = (swings)[1]
  var b = (swings)[0]

  // define current up trend
  up = {
    active: true, // active drawing
    valid: true,
    timestamp: workingTime,
    id: upId,
    origin: a,
    neckline: b,
    impulse: b - a,
    target: a + (b - a) * (options.targetLevelUp),
    invalidation: a + (b - a) * (options.invalidationThreshold),
    levels: [],
    drawings: {},
    redrawRequired: true,
  }

  var fromIndex = Math.max(baseLevelIndex - options.drawCount, 0)
  var toIndex = fromIndex + options.drawCount * 2 - 1
  up.lowerIndex = options.drawCount - 1
  up.higherIndex = options.drawCount

  for (let i = fromIndex; i <= toIndex; i++) {
    var level = (calculatedLevels)[i]
    up.levels.push({
      index: i,
      price: up.origin + up.impulse * level,
      upper: up.origin + up.impulse * level,
      lower: up.origin + up.impulse * level,
      level: level,
    })
  }
}

// set reference to bar index : avoid process next tick
lastIndex = bar.length

// 1-* = trend levels (slots)
if (renderer.indicators[indicatorId].series[1]) {
  brokenarea(renderer.indicators[indicatorId].series[1] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[2]) {
  brokenarea(renderer.indicators[indicatorId].series[2] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[3]) {
  brokenarea(renderer.indicators[indicatorId].series[3] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[4]) {
  brokenarea(renderer.indicators[indicatorId].series[4] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[5]) {
  brokenarea(renderer.indicators[indicatorId].series[5] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[6]) {
  brokenarea(renderer.indicators[indicatorId].series[6] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[7]) {
  brokenarea(renderer.indicators[indicatorId].series[7] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[8]) {
  brokenarea(renderer.indicators[indicatorId].series[8] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[9]) {
  brokenarea(renderer.indicators[indicatorId].series[9] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[10]) {
  brokenarea(renderer.indicators[indicatorId].series[10] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[11]) {
  brokenarea(renderer.indicators[indicatorId].series[11] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[12]) {
  brokenarea(renderer.indicators[indicatorId].series[12] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[13]) {
  brokenarea(renderer.indicators[indicatorId].series[13] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[14]) {
  brokenarea(renderer.indicators[indicatorId].series[14] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[15]) {
  brokenarea(renderer.indicators[indicatorId].series[15] || { time: time }, strokeWidth = lineWidth)
}
if (renderer.indicators[indicatorId].series[16]) {
  brokenarea(renderer.indicators[indicatorId].series[16] || { time: time }, strokeWidth = lineWidth)
}`,Zn=1704935468237,Qn=1704938541637,$n=`Fibonacci Grid`,er=`Auto Fibonacci Levels`,tr=`https://github.com/Tucsky/aggr-lib/pull/14`,nr=`aggr`,rr={imagePath:Kn,id:qn,name:Jn,options:Yn,script:Xn,createdAt:Zn,updatedAt:Qn,displayName:$n,description:er,pr:tr,author:nr},ir=e({author:()=>pr,createdAt:()=>cr,default:()=>hr,description:()=>dr,displayName:()=>ur,enabled:()=>!1,imagePath:()=>ar,name:()=>mr,options:()=>or,pr:()=>fr,script:()=>sr,updatedAt:()=>lr}),ar=`indicators/aggr/fibonacci-retracement.png`,or={priceScaleId:`right`,strokeWidth:4,scaleMargins:{top:.04,bottom:.22},color:`rgb(255,255,255)`,lineWidth:1},sr=`// Top to bottom fib retracement levels / extentions
// 1. identify top and bottom
// 2. pull a fib sequence (see levels option)

// define series (1 serie = 1 line renderable at each bar)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)
brokenarea(infinite = extend)

// options
srcExchange = option(default=null,type=exchange,rebuild=true)
srcQuote = option(default=null,type=list,options=[null, "USD", "USDT", "TUSD", "USDC"],rebuild=true)
srcType = option(default=null,type=list,options=[null, "spot", "perp"],rebuild=true)
useHeikinAshi = option(type=checkbox)
useGaps = option(type=checkbox)
lengthLeft=option(type=range,default=80,min=3,max=200,step=1,description="Left pivot length (look back)")
lengthRight=option(type=range,default=80,min=3,max=200,step=1,description="Right pivot length (look ahead)")
extendLength=option(type=range,min=0,max=2000,log=true,default=0,step=1,description="Extend line length (0 = infinite)")
repaint=option(type=checkbox,default=false,description="Place line at (current time - lengthRight)")
useClose=option(type=checkbox,default=false,description="Use close instead of high and low")
useSwing=option(type=checkbox,default=false,description="Use inner body (open or close)")
useLog=option(type=checkbox,default=false,description="Use log scale for ext calculation")
extend=option(rebuild=true,type=checkbox,default=true,description="Extend beyond visible range")
showLevels=option(type=checkbox,default=false,description="Show what levels each line is")
levels=option(type=text,default="0|0.618|1|1.118|1.618|2.118|2.618|3.427|4.236",description="Comma separated list of fib levels (max 4 or see script)")
colorA=option(type=color,default='rgba(255,255,0,0.13)')
colorB=option(type=color,default='rgb(255,235,59)')
colorC=option(type=color,default='rgb(255,235,59)')
colorD=option(type=color,default='rgb(255,235,59)')
showPivots=option(default=false,type=checkbox)
showLookbackMa=option(default=false,type=checkbox)
minLookback=option(default=200,description="Forces chart to fetch more data than needed")
lookbackMaColor=option(type=color,default='white')
strokeWidth=option(default=1)

// <STARTUP>

if (!pendingMarkers) {
  markers = []
  pendingMarkers = []
  count=0

  if (!showPivots && series[series.length - 1].setMarkers) {
    series[series.length - 1].setMarkers([])
  }
}

if (pendingMarkers.length) {
  markers = markers.concat(pendingMarkers)
  if (series[series.length - 1].setMarkers) {
    series[series.length - 1].setMarkers(markers)
  }
  pendingMarkers = []
}

if (!boundaries) {
  //init

  lastIndex = null
  boundaries = {} // store *end* of lines here (id => index)
  levelsArr = String(levels).split(/,|\\|/)

  var slots = 0
  for (let i = 0; i < series.length; i++) {
    if (series[i].seriesType() === 'BrokenArea') {
      series[i].setExtensionsBoundaries(boundaries)
      slots++
    }
  }

  maxLevels = Math.min(levelsArr.length, slots)
} else 

if (bar.length === lastIndex || bar.length < lengthLeft) {
  // only execute 1 time per bar
  return
}

// get price source
var src = srcExchange || srcType || srcQuote ? source(type=srcType, exchange=srcExchange, quote=srcQuote) : bar

if (!src) {
  return
}

var a = 0
var b = 0

// get price ohlc
price = useHeikinAshi ? avg_heikinashi(src) : useGaps ? avg_ohlc_with_gaps(src) : avg_ohlc(src)

if (showLookbackMa) {
  // this forces chart to fetch more candle than needed for more fibs
  line(ema(price.close, minLookback), lineStyle=3, color=lookbackMaColor)
}

candlestick(price, upColor=transparent,downColor=transparent,wickColor=transparent)
// find pivot high
swingHigh = useSwing ? price.close < price.open && price[1].close > price[1].open ? Math.min(price[1].close, price.open) : swingHigh : null
var ph = pivot_high(useClose ? useSwing ? swingHigh : price.close : price.high, lengthLeft, lengthRight)

if (bar.length > lengthLeft+lengthRight && ph && ph != lastPh) {
  // if pivot high
  lastPh = ph

  lastPhTime = time - bar.timeframe * (lengthRight - 1)
  if (showPivots) {
    pendingMarkers.push({
      time: lastPhTime,
      position: 'aboveBar',
      color: 'dfd390ff',
      text: lastPh.toString(),
    })
  }
  if (lastPl) {
    a = lastPh
    b = lastPl
    t = lastPhTime
  }
}

// find pivot low
swingLow = useSwing ? price.open < price.close && price[1].open > price[1].close ? Math.max(price[1].close, price.open) : swingLow : null
var pl = pivot_low(useClose ? useSwing ? swingLow : price.close : price.low, lengthLeft, lengthRight)

if (bar.length > lengthLeft+lengthRight && pl && pl !== lastPl) {
  // if pivot low
  lastPl = pl

  lastPlTime = time - bar.timeframe * (lengthRight - 1)
  if (showPivots) {
    pendingMarkers.push({
      time:lastPlTime,
      position: 'belowBar',
      color: 'ef4352ff',
      text: lastPl.toString(),
    })
  }

  if (lastPh) {
    a = lastPl
    b = lastPh
    t = lastPlTime
  }
}

if (a && b) {
  var isLow = b < a
  var r = useLog ? Math.log(isLow ? a / b : b / a) : isLow ? a - b : b - a
  if (paintId && extendLength > 0) {
    boundaries[paintId] = bar.length + extendLength - lengthRight - 1
  }
  paintId = String(Math.random())

  var isFirst = !ext

  for (let i = 0; i < levelsArr.length; i++) {
    if (!series[i]) {
      continue
    }
    var level = levelsArr[i]
    if (useLog) {
      ext = isLow ? a * Math.exp(-r * level) : a * Math.exp(r * level);
    } else {
      ext = a + r * level * (isLow ? -1 : 1);
    }
    if (bar.length > lengthLeft + lengthRight) {
     bar.series[series[i].id] = {
      id: paintId,
      time: repaint ? t : time,
      higherValue: ext,
      lowerValue: ext,
      extendRight: true,
      color: interpolate(i / maxLevels, colorA, colorB, colorC, colorD),
      lineWidth: i / maxLevels,
      label: showLevels ? String(level) : undefined
    }
    }
  }
  a = null
  b = null
}

// set reference to bar index (only process first tick of a bar)
lastIndex = bar.length`,cr=1708647696429,lr=1729109961977,ur=`Fibonacci Retracement`,dr=`This Automatic Fibonacci Retracement/Extension Indicator is engineered to assist traders in identifying key support and resistance levels using pivot points and custom Fibonacci ratios. It automatically calculates and draws Fibonacci levels on a trading chart by locating pivot highs and lows within a user-defined lookback and lookahead range.

The indicator offers a set of configurable options allowing for precise customization to fit various trading strategies. Users can input a list of preferred Fibonacci-like ratios beyond the standard 0.618 and 1.618, including extended levels such as 4.236 and 9.618, which are particularly useful for predicting potential retracements or extensions of market movements.

Features include:

Customizable Fibonacci ratios for both retracement and extension levels.
Adjustable pivot lengths to define the range for high and low pivots.
Optional logarithmic scaling for extension calculations.
Selection between using high/low or open/close for determining pivots.
Heikin Ashi and gap inclusion for more sophisticated price calculations.
Infinite or specified line extension to project future price levels.
Visual differentiation through color gradients applied to the Fibonacci levels.`,fr=`https://github.com/Tucsky/aggr-lib/pull/32`,pr=`aggr`,mr=`Fibonacci Retracement`,hr={imagePath:ar,options:or,script:sr,createdAt:cr,updatedAt:lr,displayName:ur,description:dr,enabled:!1,pr:fr,author:pr,name:mr},gr=e({default:()=>Cr,description:()=>br,enabled:()=>!0,id:()=>vr,imagePath:()=>_r,name:()=>yr,options:()=>Sr,script:()=>xr}),_r=`/indicator-previews/fixed_range_volume_profile.svg`,vr=`ensox/fixed_range_volume_profile`,yr=`Fixed Range Volume Profile`,br=`Volume and delta between selected start/end candles. Select the interval in indicator settings.`,xr=`showValueArea = option(default=true, type=checkbox, label="Show Value Area", description="Highlight the price area containing 70% of profile volume. Disable to keep buy and sell colors throughout.")
showDelta = option(default=true, type=checkbox, label="Delta Bars", description="Draw buy-minus-sell delta from the opposite side of the profile baseline.")
opacity = option(default=0.85, type=range, min=0.05, max=1, step=0.05, label="Opacity", description="Profile opacity.")
profileWidth = option(default=0.2, type=range, min=0.05, max=0.4, step=0.01, label="Profile Width", description="Maximum chart width used by the total-volume side.")
deltaWidth = option(default=0.06, type=range, min=0.02, max=0.3, step=0.01, label="Delta Width", description="Maximum chart width used independently by the delta side.")
profileOffset = option(default=0.01, type=range, min=0, max=0.3, step=0.01, label="Profile Offset", description="Space from the right price scale. Increase to move the complete histogram left; decrease to move it right.")
upColor = option(default=rgba(41,98,255,1), type=color, label="Buy Color")
downColor = option(default=rgba(239,83,80,1), type=color, label="Sell Color")
valueColor = option(default=rgba(255,255,255,0.95), type=color, label="Value Area Color")
pocColor = option(default=rgba(255,255,255,1), type=color, label="POC Color")
deltaUpColor = option(default=rgba(38,166,154,1), type=color, label="Positive Delta Color")
deltaDownColor = option(default=rgba(239,83,80,1), type=color, label="Negative Delta Color")
profile({ showValueArea: showValueArea, rangeMode: "Fixed Range", profileStart: options.profileStart, profileEnd: options.profileEnd, showDelta: showDelta, opacity: opacity, profileWidth: profileWidth, deltaWidth: deltaWidth, profileOffset: profileOffset, upColor: upColor, downColor: downColor, valueColor: valueColor, pocColor: pocColor, deltaUpColor: deltaUpColor, deltaDownColor: deltaDownColor })`,Sr={priceScaleId:`right`,visible:!0,rangeMode:`Fixed Range`,showDelta:!0,showValueArea:!0,opacity:.85,profileWidth:.2,deltaWidth:.06,profileOffset:.01,upColor:`rgba(41,98,255,1)`,downColor:`rgba(239,83,80,1)`,valueColor:`rgba(255,255,255,0.95)`,pocColor:`rgba(255,255,255,1)`,deltaUpColor:`rgba(38,166,154,1)`,deltaDownColor:`rgba(239,83,80,1)`,profileStart:null,profileEnd:null},Cr={imagePath:_r,id:vr,enabled:!0,name:yr,description:br,script:xr,options:Sr},wr=e({createdAt:()=>jr,default:()=>Nr,description:()=>Or,displayName:()=>Dr,id:()=>Er,imagePath:()=>Tr,name:()=>Mr,options:()=>Ar,script:()=>kr}),Tr=`/indicator-previews/footprint.svg`,Er=`volume-footprint`,Dr=`Volume Footprint`,Or=`Observed executed buy/sell volume at traded prices per candle. Candle-only history cannot reconstruct price-level volume.`,kr=`intensity = option(default=0,type=number,min=0,label="Quantity intensity (0 = automatic)")
maxWidth = option(default=0.8,type=range,min=0.1,max=1,step=0.05)
opacity = option(default=1,type=range,min=0,max=1,step=0.05)
bullColor = option(default='rgba(38, 166, 154, 0.8)',type=color)
bearColor = option(default='rgba(239, 83, 80, 0.8)',type=color)
footprint({ intensity: intensity, maxWidth: maxWidth, opacity: opacity, bullColor: bullColor, bearColor: bearColor })`,Ar={priceScaleId:`left`,maxWidth:.8,intensity:0,opacity:1,bullColor:`rgba(38, 166, 154, 0.8)`,bearColor:`rgba(239, 83, 80, 0.8)`,visible:!0},jr=17040672e5,Mr=`Volume Footprint`,Nr={imagePath:Tr,id:Er,displayName:Dr,description:Or,script:kr,options:Ar,createdAt:jr,name:Mr},Pr=e({createdAt:()=>Vr,default:()=>Ur,description:()=>Rr,id:()=>Ir,imagePath:()=>Fr,name:()=>Lr,options:()=>Br,script:()=>zr,version:()=>Hr}),Fr=`/indicator-previews/heatmaps.svg`,Ir=`heatmaps`,Lr=`Heatmap`,Rr=`Resting orderbook liquidity over time for the selected market or group. Automatic price grouping and size reference; the header slider adjusts intensity. Gaps mean no recorded book was available.`,zr=`liquidityGain = option(default=1, type=number, min=0.0625, max=64, label="Intensity", description="Also controlled by the chart header. Higher values reveal smaller resting orders.")
opacity = option(default=0.8, type=range, min=0.05, max=1, step=0.05, label="Opacity")
threshold = option(default=0.04, type=range, min=0, max=1, step=0.01, label="Hide faint liquidity")
bookSide = option(default="both", type=list, options=["both", "bids", "asks"], label="Sides")
changesOnly = option(default=false, type=checkbox, label="Changes only", description="Show independently positioned additions and removals instead of the resting book.")

orderbookHeatmap({ intensity: 0, visible: true, viewMode: bookSide, tickSize: 0, changesOnly: changesOnly, additionColor: "#21e0f2", removalColor: "#ff6688", contrast: 0.65, threshold: threshold, opacity: opacity, bookColorScale: "Thermal", lowColor: "#091a3d", highColor: "#21e0f2" })
`,Br={priceScaleId:`right`,visible:!0,threshold:.04,opacity:.8,bookSide:`both`,changesOnly:!1,liquidityGain:1},Vr=17912448e5,Hr=`2.0.0`,Ur={imagePath:Fr,id:Ir,name:Lr,description:Rr,script:zr,options:Br,createdAt:Vr,version:Hr},Wr=e({default:()=>Xr,description:()=>qr,imagePath:()=>Gr,name:()=>Kr,options:()=>Yr,script:()=>Jr}),Gr=`/indicator-previews/hybrid-cdd-normalized.svg`,Kr=`CDD Normalized {label}`,qr=`Normalizes cumulative changes in standing bid-minus-ask depth, alongside stored ENSO normalized CDD. Missing snapshots do not poison the browser state. Older stored CDD uses the previous calculation.`,Jr=`title = option(default="CDD Normalized", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = NaN
if (isFinite(dbuy) && isFinite(dsell)) {
  if (!liveState) liveState = {initial: dbuy - dsell, index: bar.length, closed: {lo:Infinity, hi:-Infinity, total:0, value:0}, current: {lo:Infinity, hi:-Infinity, total:0, value:0}}
  if (liveState.index !== bar.length) {
    liveState.closed = liveState.current
    liveState.index = bar.length
  }
  var previous = liveState.closed
  var input = dbuy - dsell - liveState.initial
  var delta = input - previous.total
  var decay = Math.pow(0.5, duration / 1000000000 / (options.windowSeconds * 0.5))
  var lo = Math.min(input, input + (previous.lo - input) * decay)
  var hi = Math.max(input, input + (previous.hi - input) * decay)
  var normalized = (input - lo) / Math.max(hi - lo, 1) * 20 - 10
  liveValue = Math.abs(delta) < 0.000000001 ? previous.value : normalized
  liveState.current = {lo:lo, hi:hi, total:input, value:liveValue}
}

if (options.displayMode === "Line") {
  if (isFinite(cdd_normalized)) line(cdd_normalized, color=options.backendColor, title=options.title, priceScaleId="own", id="cdd_normalized_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="cdd_normalized_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(cdd_normalized)) candlestick(ohlc(cdd_normalized), title=options.title, priceScaleId="own", id="cdd_normalized_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="cdd_normalized_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(cdd_normalized)) baseline(cdd_normalized, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="cdd_normalized_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="cdd_normalized_browser_baseline")
} else {
  if (isFinite(cdd_normalized)) histogram({time:time, value:cdd_normalized, color:cdd_normalized >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="cdd_normalized_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="cdd_normalized_browser_histogram")
}`,Yr={priceScaleId:`hybrid-cdd-normalized`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`CDD Normalized`,lastValueVisible:!0},Xr={imagePath:Gr,name:Kr,description:qr,script:Jr,options:Yr},Zr=e({default:()=>ri,description:()=>ei,imagePath:()=>Qr,name:()=>$r,options:()=>ni,script:()=>ti}),Qr=`/indicator-previews/hybrid-cdd.svg`,$r=`CDD {label}`,ei=`Plots cumulative changes in standing bid-minus-ask depth from the first available snapshot, alongside stored ENSO CDD. An unchanged book adds no flow. Older stored CDD uses the previous calculation.`,ti=`title = option(default="CDD", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = dbuy - dsell
if (!depthState && isFinite(liveValue)) depthState = {initial: liveValue}
liveValue = liveValue - depthState.initial

if (options.displayMode === "Line") {
  if (isFinite(cdd)) line(cdd, color=options.backendColor, title=options.title, priceScaleId="own", id="cdd_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="cdd_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(cdd)) candlestick(ohlc(cdd), title=options.title, priceScaleId="own", id="cdd_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="cdd_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(cdd)) baseline(cdd, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="cdd_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="cdd_browser_baseline")
} else {
  if (isFinite(cdd)) histogram({time:time, value:cdd, color:cdd >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="cdd_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="cdd_browser_histogram")
}`,ni={priceScaleId:`hybrid-cdd`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},priceFormat:{type:`volume`},backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`CDD`,lastValueVisible:!0},ri={imagePath:Qr,name:$r,description:ei,script:ti,options:ni},ii=e({default:()=>ui,description:()=>si,imagePath:()=>ai,name:()=>oi,options:()=>li,script:()=>ci}),ai=`/indicator-previews/hybrid-cld-normalized.svg`,oi=`CLD Normalized {label}`,si=`Plots the browser calculation and stored ENSO index cld_normalized as separate lines or candles. The stored line appears where index history supplies the field.`,ci=`title = option(default="CLD Normalized", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = NaN
  if (!liveState) liveState = {index: bar.length, closed: {lo:Infinity, hi:-Infinity, total:0, value:0}, current: {lo:Infinity, hi:-Infinity, total:0, value:0}}
  if (liveState.index !== bar.length) {
    liveState.closed = liveState.current
    liveState.index = bar.length
  }
  var previous = liveState.closed
  var delta = lbuy - lsell
  var input = previous.total + delta
  var decay = Math.pow(0.5, duration / 1000000000 / (options.windowSeconds * 0.5))
  var lo = Math.min(input, input + (previous.lo - input) * decay)
  var hi = Math.max(input, input + (previous.hi - input) * decay)
  var normalized = (input - lo) / Math.max(hi - lo, 1) * 20 - 10
  liveValue = Math.abs(delta) < 0.000000001 ? previous.value : normalized
  liveState.current = {lo:lo, hi:hi, total:input, value:liveValue}

if (options.displayMode === "Line") {
  if (isFinite(cld_normalized)) line(cld_normalized, color=options.backendColor, title=options.title, priceScaleId="own", id="cld_normalized_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="cld_normalized_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(cld_normalized)) candlestick(ohlc(cld_normalized), title=options.title, priceScaleId="own", id="cld_normalized_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="cld_normalized_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(cld_normalized)) baseline(cld_normalized, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="cld_normalized_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="cld_normalized_browser_baseline")
} else {
  if (isFinite(cld_normalized)) histogram({time:time, value:cld_normalized, color:cld_normalized >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="cld_normalized_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="cld_normalized_browser_histogram")
}`,li={priceScaleId:`hybrid-cld-normalized`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`CLD Normalized`,lastValueVisible:!0},ui={imagePath:ai,name:oi,description:si,script:ci,options:li},di=e({default:()=>_i,description:()=>mi,imagePath:()=>fi,name:()=>pi,options:()=>gi,script:()=>hi}),fi=`/indicator-previews/hybrid-cvd-divergence.svg`,pi=`CVD Divergence {label}`,mi=`Compares normalized spot and perpetual CVD. The browser line requires both market types; a single-type chart leaves it unavailable. Candle-derived CVD uses estimated buy/sell volume. The stored ENSO index line appears where history supplies cvd_divergence.`,hi=`title = option(default="CVD Divergence", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = NaN
if ((isFinite(cvd_spot) && isFinite(cvd_perp)) || (source(close, type=spot) > 0 && source(close, type=perp) > 0)) {
  if (!liveState) liveState = {index: bar.length, closed: {spot:0, perp:0, spotLo:Infinity, spotHi:-Infinity, perpLo:Infinity, perpHi:-Infinity, sum:0, duration:0}, current: {spot:0, perp:0, spotLo:Infinity, spotHi:-Infinity, perpLo:Infinity, perpHi:-Infinity, sum:0, duration:0}}
  if (liveState.index !== bar.length) {
    liveState.closed = liveState.current
    liveState.index = bar.length
  }
  var previous = liveState.closed
  var spotDelta = source(vbuy, type=spot) - source(vsell, type=spot)
  var perpDelta = (vbuy - vsell) - spotDelta
  var spotValue = isFinite(cvd_spot) ? cvd_spot : previous.spot + spotDelta
  var perpValue = isFinite(cvd_perp) ? cvd_perp : previous.perp + perpDelta
  var seconds = duration / 1000000000
  var decay = Math.pow(0.5, seconds / (options.windowSeconds * 0.5))
  var spotLo = Math.min(spotValue, spotValue + (previous.spotLo - spotValue) * decay)
  var spotHi = Math.max(spotValue, spotValue + (previous.spotHi - spotValue) * decay)
  var perpLo = Math.min(perpValue, perpValue + (previous.perpLo - perpValue) * decay)
  var perpHi = Math.max(perpValue, perpValue + (previous.perpHi - perpValue) * decay)
  var divergence = Math.max(-10, Math.min(10, 10 * ((spotValue - spotLo) / Math.max(spotHi - spotLo, 1) - (perpValue - perpLo) / Math.max(perpHi - perpLo, 1))))
  liveValue = divergence
  liveState.current = {spot:spotValue, perp:perpValue, spotLo:spotLo, spotHi:spotHi, perpLo:perpLo, perpHi:perpHi}
}

if (options.displayMode === "Line") {
  if (isFinite(cvd_divergence)) line(cvd_divergence, color=options.backendColor, title=options.title, priceScaleId="own", id="cvd_divergence_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="cvd_divergence_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(cvd_divergence)) candlestick(ohlc(cvd_divergence), title=options.title, priceScaleId="own", id="cvd_divergence_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="cvd_divergence_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(cvd_divergence)) baseline(cvd_divergence, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="cvd_divergence_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="cvd_divergence_browser_baseline")
} else {
  if (isFinite(cvd_divergence)) histogram({time:time, value:cvd_divergence, color:cvd_divergence >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="cvd_divergence_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="cvd_divergence_browser_histogram")
}`,gi={priceScaleId:`hybrid-cvd-divergence`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`CVD Divergence`,lastValueVisible:!0},_i={imagePath:fi,name:pi,description:mi,script:hi,options:gi},vi=e({default:()=>wi,description:()=>xi,imagePath:()=>yi,name:()=>bi,options:()=>Ci,script:()=>Si}),yi=`/indicator-previews/hybrid-oi-normalized.svg`,bi=`Open Interest Normalized {label}`,xi=`Open interest position within its elastic range using shared Zig. First valid and flat observations are neutral. Missing OI stays unavailable without resetting the range. Select chart sampling or recorded Engine output explicitly.`,Si=`title = option(default="Open Interest Normalized", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
calculation = option(default="Chart bars", type=list, options=["Chart bars", "Recorded Engine"], rebuild=true, label="Calculation sampling")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
var chartValue = normalized_oi(oi, options.windowSeconds)
var value = options.calculation === "Recorded Engine" ? oi_normalized : chartValue
if (isFinite(value)) {
  if (options.displayMode === "Line") line(value, color=options.color, title=options.title, priceScaleId="own", id="oi_normalized_line")
  else if (options.displayMode === "Candles") candlestick(ohlc(value), title=options.title, priceScaleId="own", id="oi_normalized_candles")
  else if (options.displayMode === "Baseline") baseline(value, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="oi_normalized_baseline")
  else histogram({time:time, value:value, color:value >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="oi_normalized_histogram")
}`,Ci={priceScaleId:`hybrid-oi-normalized`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,borderVisible:!1,label:``,title:`Open Interest Normalized`,lastValueVisible:!0,calculation:`Chart bars`},wi={imagePath:yi,name:bi,description:xi,script:Si,options:Ci},Ti=e({default:()=>ji,description:()=>Oi,imagePath:()=>Ei,name:()=>Di,options:()=>Ai,script:()=>ki}),Ei=`/indicator-previews/hybrid-osc.svg`,Di=`Engine OSC {label}`,Oi=`Recorded Engine OSC is the default authoritative index series, independent of the visible history boundary. Chart bars explicitly recalculates through shared Zig at the selected sampling with preceding warm-up; matching formula alone does not equate different sampling or starting states.`,ki=`title = option(default="Engine OSC", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
calculation = option(default="Recorded Engine", type=list, options=["Chart bars", "Recorded Engine"], rebuild=true, label="Calculation sampling")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Pressure window (seconds)")
var value = NaN
if (options.calculation === "Recorded Engine") value = enso_osc
else {
  var spotDelta = source(vbuy, type=spot) - source(vsell, type=spot)
  var perpDelta = (vbuy - vsell) - spotDelta
  value = cvd_osc(spotDelta, perpDelta, options.windowSeconds)
}
if (isFinite(value)) {
  if (options.displayMode === "Line") line(value, color=options.color, title=options.title, priceScaleId="own", id="enso_osc_line")
  else if (options.displayMode === "Candles") candlestick(ohlc(value), title=options.title, priceScaleId="own", id="enso_osc_candles")
  else if (options.displayMode === "Baseline") baseline(value, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="enso_osc_baseline")
  else histogram({time:time, value:value, color:value >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="enso_osc_histogram")
}`,Ai={priceScaleId:`hybrid-osc`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,borderVisible:!1,label:``,title:`Engine OSC`,lastValueVisible:!0,calculation:`Recorded Engine`},ji={imagePath:Ei,name:Di,description:Oi,script:ki,options:Ai},Mi=e({default:()=>Li,description:()=>Fi,imagePath:()=>Ni,name:()=>Pi,options:()=>Q,script:()=>Ii}),Ni=`/indicator-previews/hybrid-price-position.svg`,Pi=`Price Position {label}`,Fi=`Plots the browser calculation and stored ENSO index price_position as separate lines or candles. The stored line appears where index history supplies the field.`,Ii=`title = option(default="Price Position", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = NaN
  if (!liveState) liveState = {index: bar.length, closed: {lo:Infinity, hi:-Infinity, total:0, value:0}, current: {lo:Infinity, hi:-Infinity, total:0, value:0}}
  if (liveState.index !== bar.length) {
    liveState.closed = liveState.current
    liveState.index = bar.length
  }
  var previous = liveState.closed
  var delta = 0
  var input = close
  var decay = Math.pow(0.5, duration / 1000000000 / (options.windowSeconds * 0.5))
  var lo = Math.min(input, input + (previous.lo - input) * decay)
  var hi = Math.max(input, input + (previous.hi - input) * decay)
  var normalized = (input - lo) / Math.max(hi - lo, 1) * 20 - 10
  liveValue = false ? previous.value : normalized
  var seconds = duration / 1000000000
  var alpha = seconds >= 60 ? 1 : 1 - Math.pow(1 - 2 / 61, seconds)
  liveValue = normalized * alpha + previous.value * (1 - alpha)
  liveState.current = {lo:lo, hi:hi, total:input, value:liveValue}

if (options.displayMode === "Line") {
  if (isFinite(price_position)) line(price_position, color=options.backendColor, title=options.title, priceScaleId="own", id="price_position_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="price_position_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(price_position)) candlestick(ohlc(price_position), title=options.title, priceScaleId="own", id="price_position_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="price_position_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(price_position)) baseline(price_position, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="price_position_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="price_position_browser_baseline")
} else {
  if (isFinite(price_position)) histogram({time:time, value:price_position, color:price_position >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="price_position_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="price_position_browser_histogram")
}`,Q={priceScaleId:`hybrid-price-position`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`Price Position`,lastValueVisible:!0},Li={imagePath:Ni,name:Pi,description:Fi,script:Ii,options:Q},Ri=e({default:()=>Wi,description:()=>Vi,imagePath:()=>zi,name:()=>Bi,options:()=>Ui,script:()=>Hi}),zi=`/indicator-previews/hybrid-tps-normalized.svg`,Bi=`Tape Speed Normalized {label}`,Vi=`Plots the browser calculation and stored ENSO index tps_normalized as separate lines or candles. The stored line appears where index history supplies the field.`,Hi=`title = option(default="Tape Speed Normalized", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
windowSeconds = option(default=180000, min=1, type=number, rebuild=true, label="Extrema window (seconds)")
// Formula source: apps/shared/native/nif/src/indicators.zig
var liveValue = NaN
  if (!liveState) liveState = {index: bar.length, closed: {lo:Infinity, hi:-Infinity, total:0, value:0}, current: {lo:Infinity, hi:-Infinity, total:0, value:0}}
  if (liveState.index !== bar.length) {
    liveState.closed = liveState.current
    liveState.index = bar.length
  }
  var previous = liveState.closed
  var delta = 0
  var input = cbuy + csell
  var decay = Math.pow(0.5, duration / 1000000000 / (options.windowSeconds * 0.5))
  var lo = Math.min(input, input + (previous.lo - input) * decay)
  var hi = Math.max(input, input + (previous.hi - input) * decay)
  var normalized = (input - lo) / Math.max(hi - lo, 1) * 20 - 10
  liveValue = Math.abs(input) < 0.000000001 ? previous.value : normalized
  liveState.current = {lo:lo, hi:hi, total:input, value:liveValue}

if (options.displayMode === "Line") {
  if (isFinite(tps_normalized)) line(tps_normalized, color=options.backendColor, title=options.title, priceScaleId="own", id="tps_normalized_engine_line")
  if (isFinite(liveValue)) line(liveValue, color=options.color, title=options.title, priceScaleId="own", id="tps_normalized_browser_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(tps_normalized)) candlestick(ohlc(tps_normalized), title=options.title, priceScaleId="own", id="tps_normalized_engine_candles", upColor=options.backendUpColor, downColor=options.backendDownColor, wickUpColor=options.backendUpColor, wickDownColor=options.backendDownColor)
  if (isFinite(liveValue)) candlestick(ohlc(liveValue), title=options.title, priceScaleId="own", id="tps_normalized_browser_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(tps_normalized)) baseline(tps_normalized, topLineColor=options.backendColor, bottomLineColor=options.backendColor, title=options.title, priceScaleId="own", id="tps_normalized_engine_baseline")
  if (isFinite(liveValue)) baseline(liveValue, topLineColor=options.color, bottomLineColor=options.color, title=options.title, priceScaleId="own", id="tps_normalized_browser_baseline")
} else {
  if (isFinite(tps_normalized)) histogram({time:time, value:tps_normalized, color:tps_normalized >= 0 ? options.backendUpColor : options.backendDownColor}, title=options.title, priceScaleId="own", id="tps_normalized_engine_histogram")
  if (isFinite(liveValue)) histogram({time:time, value:liveValue, color:liveValue >= 0 ? options.upColor : options.downColor}, title=options.title, priceScaleId="own", id="tps_normalized_browser_histogram")
}`,Ui={priceScaleId:`hybrid-tps-normalized`,color:`#9C27B0`,lineWidth:1,scaleMargins:{top:.1,bottom:.1},windowSeconds:18e4,backendColor:`#a5c9ff`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,backendUpColor:`#80cbc4`,backendDownColor:`#ef9a9a`,borderVisible:!1,label:``,title:`Tape Speed Normalized`,lastValueVisible:!0},Wi={imagePath:zi,name:Bi,description:Vi,script:Hi,options:Ui},Gi=e({createdAt:()=>qi,default:()=>Zi,imagePath:()=>Ki,name:()=>Xi,options:()=>Yi,script:()=>Ji}),Ki=`indicators/aggr/ichimoku.png`,qi=1623024000001,Ji=`conversionLine=(lowest($price.low, options.conversionLineLength) + highest($price.high, options.conversionLineLength)) / 2
baseLine=(lowest($price.low, options.baseLineLength) + highest($price.high, options.baseLineLength)) / 2
leadLineOne=(conversionLine + baseLine) / 2
leadLineTwo=(lowest($price.low, options.laggingSpanTwoLength) + highest($price.high, options.laggingSpanTwoLength)) / 2
plotcloudarea(leadLineTwo, leadLineOne, offset=options.displacement)`,Yi={baseLineLength:26,conversionLineLength:9,displacement:24,laggingSpanTwoLength:52,priceScaleId:`right`},Xi=`Ichimoku`,Zi={imagePath:Ki,createdAt:qi,script:Ji,options:Yi,name:Xi},Qi=e({createdAt:()=>ia,default:()=>ca,displayName:()=>ta,imagePath:()=>$i,libraryId:()=>ea,name:()=>sa,options:()=>na,presets:()=>oa,script:()=>ra,updatedAt:()=>aa}),$i=`/indicator-previews/indicator_EMA (backend).svg`,ea=`ema-new2`,ta=`EMA (backend)`,na={priceScaleId:`right`,visible:!0},ra=`// Initialize state for broken areas
  if (!emaState) {
    emaState = {};
    emaState.lastIndex = null;
  }

  if (bar.length === emaState.lastIndex) {
    return;
  }
  emaState.lastIndex = bar.length;

  // Get current timeframe in seconds
  var tf = bar.timeframe;

  // Timeframe visibility rules (show EMAs that make sense for current TF)
  var showEma300 = tf <= 60;       // 5m EMA - show on 1s to 1m
  var showEma600 = tf <= 60;       // 10m EMA - show on 1s to 1m
  var showEma3600 = tf <= 3600;    // 1h EMA - show on 1s to 1h
  var showEma9000 = tf <= 3600;    // 2h30m EMA - show on 1s to 1h
  var showEma13380 = tf <= 3600;   // 3h43m EMA - show on 1s to 1h
  var showEma18000 = tf <= 3600;   // 5h EMA - show on 1s to 1h
  var showEma47940 = tf <= 14400;  // 13h19m EMA - show on 1s to 4h
  var showEma72000 = tf <= 14400;  // 20h EMA - show on 1s to 4h
  var showEma108000 = tf <= 3600;  // 30h EMA - show on 1s to 1h
  var showEma144000 = tf <= 14400; // 40h EMA - show on 1s to 4h
  var showEma401400 = tf <= 3600;  // 4d15h30m EMA - show on 1s to 1h
  var showEma864000 = true;        // 10d EMA - always show
  var showEma1438200 = tf <= 3600; // 16d15h30m EMA - show on 1s to 1h
  var showEma3211200 = tf <= 14400;// 37d4h EMA - show on 1s to 4h
  var showEma11505600 = tf <= 14400;// 133d4h EMA - show on 1s to 4h

  var bandWidth = 0.00005;

  // Opacity from stack value: 0=dim, 1=medium, 2=bright
  function getStackOpacity(stackValue) {
    if (stackValue === 2) return 0.9;
    if (stackValue === 1) return 0.5;
    return 0.15;
  }

  // Rainbow colors: red -> yellow -> green -> purple -> white (fast to slow EMAs)
  var baseColors = [
    [255, 0, 0],
    [255, 255, 0],
    [0, 255, 0],
    [148, 0, 211],
    [255, 255, 255]
  ];

  var slotIdx = 0;
  var colorIdx = 0;

  if (showEma300 && ema300 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema300_' + bar.length,
      time: time,
      lowerValue: ema300 * (1 - bandWidth),
      higherValue: ema300 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema300_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma600 && ema600 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema600_' + bar.length,
      time: time,
      lowerValue: ema600 * (1 - bandWidth),
      higherValue: ema600 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema600_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma3600 && ema3600 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema3600_' + bar.length,
      time: time,
      lowerValue: ema3600 * (1 - bandWidth),
      higherValue: ema3600 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema3600_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma9000 && ema9000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema9000_' + bar.length,
      time: time,
      lowerValue: ema9000 * (1 - bandWidth),
      higherValue: ema9000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema9000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma13380 && ema13380 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema13380_' + bar.length,
      time: time,
      lowerValue: ema13380 * (1 - bandWidth),
      higherValue: ema13380 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema13380_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma18000 && ema18000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema18000_' + bar.length,
      time: time,
      lowerValue: ema18000 * (1 - bandWidth),
      higherValue: ema18000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema18000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma47940 && ema47940 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema47940_' + bar.length,
      time: time,
      lowerValue: ema47940 * (1 - bandWidth),
      higherValue: ema47940 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema47940_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma72000 && ema72000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema72000_' + bar.length,
      time: time,
      lowerValue: ema72000 * (1 - bandWidth),
      higherValue: ema72000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema72000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma108000 && ema108000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema108000_' + bar.length,
      time: time,
      lowerValue: ema108000 * (1 - bandWidth),
      higherValue: ema108000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema108000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma144000 && ema144000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema144000_' + bar.length,
      time: time,
      lowerValue: ema144000 * (1 - bandWidth),
      higherValue: ema144000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema144000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma401400 && ema401400 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema401400_' + bar.length,
      time: time,
      lowerValue: ema401400 * (1 - bandWidth),
      higherValue: ema401400 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema401400_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma864000 && ema864000 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema864000_' + bar.length,
      time: time,
      lowerValue: ema864000 * (1 - bandWidth),
      higherValue: ema864000 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema864000_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma1438200 && ema1438200 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema1438200_' + bar.length,
      time: time,
      lowerValue: ema1438200 * (1 - bandWidth),
      higherValue: ema1438200 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema1438200_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma3211200 && ema3211200 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema3211200_' + bar.length,
      time: time,
      lowerValue: ema3211200 * (1 - bandWidth),
      higherValue: ema3211200 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema3211200_stack) + ')'
    };
    slotIdx = slotIdx + 1;
    colorIdx = colorIdx + 1;
  }

  if (showEma11505600 && ema11505600 && series[slotIdx]) {
    var c = baseColors[colorIdx % 5];
    bar.series[series[slotIdx].id] = {
      id: 'ema11505600_' + bar.length,
      time: time,
      lowerValue: ema11505600 * (1 - bandWidth),
      higherValue: ema11505600 * (1 + bandWidth),
      extendRight: false,
      color: 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + getStackOpacity(ema11505600_stack) + ')'
    };
  }

  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);
  brokenarea(infinite = false);`,ia=1763778955903,aa=1763782882888,oa=[],sa=`EMA (backend)`,ca={imagePath:$i,libraryId:ea,displayName:ta,options:na,script:ra,createdAt:ia,updatedAt:aa,presets:oa,name:sa},la=e({createdAt:()=>ha,default:()=>ya,displayName:()=>fa,imagePath:()=>ua,libraryId:()=>da,name:()=>va,options:()=>pa,presets:()=>_a,script:()=>ma,updatedAt:()=>ga}),ua=`/indicator-previews/indicator_Price+be_trades.svg`,da=`price`,fa=`Price+trades`,pa={priceScaleId:`right`,priceFormat:{auto:!0,precision:2,minMove:.01},priceLineVisible:!0,lastValueVisible:!0,borderVisible:!1,upColor:`rgb(13,181,153)`,downColor:`rgb(242,54,69)`,borderUpColor:`rgb(13,181,153)`,borderDownColor:`rgb(242,54,69)`,wickUpColor:`rgb(13,181,153)`,wickDownColor:`rgb(242,54,69)`,useGaps:!1,useHeikinAshi:!1,visible:!0,scaleMargins:{top:.22,bottom:.43}},ma=`var ohlc = options.useHeikinAshi ? 
    avg_heikinashi(bar) : 
    options.useGaps ? 
    avg_ohlc_with_gaps(bar) : 
    avg_ohlc(bar)

plotcandlestick(ohlc)
`,ha=1623024000001,ga=1764349241439,_a=[],va=`Price+trades`,ya={imagePath:ua,libraryId:da,displayName:fa,options:pa,script:ma,createdAt:ha,updatedAt:ga,presets:_a,name:va},ba=e({default:()=>Oa,description:()=>wa,id:()=>Sa,imagePath:()=>xa,name:()=>Ca,options:()=>Da,script:()=>Ea,version:()=>Ta}),xa=`/indicator-previews/liquidation_density.svg`,Sa=`ensox/liquidation_density`,Ca=`Liquidation Density · Experimental`,wa=`Experimental liquidation scenarios for a single linear perpetual market. Blue → cyan → gold/white indicates stronger volume concentrations, fading over elapsed time. Reuses retained execution prices, with completed candle closes where finer data is unavailable. Assumes equal leverage weights and constant isolated margin; density represents turnover, not open positions. Independent of OI and orderbooks.`,Ta=`1.0.0`,Ea=`// Experimental linear isolated-margin scenarios. No OI or orderbook dependency.
// Density is decayed observed turnover, not outstanding positions or a liquidation forecast.
leverages = option(default="10|20|35|50|100", type=text, label="Leverage scenarios", description="Equal-weight scenarios, separated by |. These are assumptions, not observed trader leverage. Maximum 16 values.")
maintenanceMargin = option(default=0.5, type=range, min=0, max=0.95, step=0.05, label="Maintenance margin (%)", description="Assumed constant maintenance rate for linear isolated positions. Must be below 100 / highest leverage. Fees, collateral changes and cross margin are not inferred.")
halfLifeHours = option(default=6, type=range, min=0.25, max=48, step=0.25, label="Density half-life (hours)", description="Elapsed-time decay of the turnover proxy. Cells receiving no new volume for eight half-lives expire; this is not evidence of position closure.")
gridPercent = option(default=0.05, type=range, min=0.01, max=0.5, step=0.01, label="Price resolution (%)", description="Stable logarithmic price cells. Smaller values reveal finer bands and require more cells. Independent of zoom and candle ATR.")
intensity = option(default=25000000, type=number, min=1, label="Full brightness (quote volume)", description="Decayed scenario turnover at full brightness, in the market's quote unit. Lower to reveal weaker zones. This scale stays fixed while navigating.")
minimumIntensity = option(default=0.02, type=range, min=0, max=0.5, step=0.01, label="Hide faint zones", description="Minimum fraction of the brightness reference. Changes presentation only.")
opacity = option(default=0.55, type=range, min=0.05, max=1, step=0.05, label="Opacity")
showPast = option(default=true, type=checkbox, label="Keep crossed zones", description="Retain the history of crossed or expired scenarios up to their end. A crossing does not confirm a liquidation.")

liquidationHeatmap({ model: "linear_volume", visible: true, leverages: leverages, maintenanceMargin: maintenanceMargin, halfLifeHours: halfLifeHours, fixedScale: 0, leverageBuffer: 0, autoScale: gridPercent, autoScaleLength: 1, volLength: 1, strength: 100 / intensity, threshold: intensity * minimumIntensity, opacity: opacity, showPast: showPast })
`,Da={priceScaleId:`right`,leverages:`10|20|35|50|100`,maintenanceMargin:.5,halfLifeHours:6,gridPercent:.05,intensity:25e6,minimumIntensity:.02,opacity:.55,showPast:!0,lastValueVisible:!1,priceLineVisible:!1},Oa={imagePath:xa,id:Sa,name:Ca,description:wa,version:Ta,script:Ea,options:Da},ka=e({author:()=>Ra,createdAt:()=>Ia,default:()=>Ba,description:()=>Na,displayName:()=>Ma,id:()=>ja,imagePath:()=>Aa,name:()=>La,options:()=>Fa,pr:()=>za,script:()=>Pa}),Aa=`/indicator-previews/liquidation_levels.svg`,ja=`liquidation-heatmap`,Ma=`AGGR Liquidation Zones (Script)`,Na=`Estimated liquidation zones using the original aggr community study. Zones simulate leveraged positions from price and volume; they are not observed liquidation orders.`,Pa=`leverages = option(default="5|20|100", type = text, description = "Set leverage levels to simulate (use | or , separator, e.g., 5|20|100)")
leverageBuffer = option(default=0.5, type = range, min = -1, max = 2, step = 0.01, description = "Buffer added to liquidation distance (% based). Higher values push zones farther.")
originMode = option(default="highLow", type = list, options = ["ohlc4", "close", "highLow", "reversedHighLow"], description = "Reference price used for calculating liquidation zones.")
threshold = option(default=2, type = range, min = 0, max = 200, log = true, description = "Minimum strength required to render a cell on the chart.")
fadeAmount = option(default=0, type = range, min = 0, max = 0.1, step = 0.001, description = "Amount of strength to fade per bar for old cells (set 0 to disable).")
maxDistance = option(default=0, type = range, min = 0, max = 100, log = true, step = 0.1, description = "Max % distance from priceRef close to draw a cell (0 = no limit).")
fadeStart = option(default=100, type = range, min = 0, max = 200, step = 1, description = "Delay in bars before fading starts to apply to a cell.")
autoScale = option(default=0.19, type = range, min = 0, max = 2, step = 0.01, description = "Grid cell size = ATR × this factor. Adjust for chart scaling.")
autoScaleLength = option(default=200, type = range, min = 1, max = 200, step = 1, description = "Number of bars used to compute ATR for auto-scaling grid.")
autoRescale = option(default=0, type = range, min = 0, max = 1000, log = true, description = "Auto-refresh cell grid every N bars (0 = disable auto-rescale).")
resampleDecay = option(default=0.5, type = range, min = 0, max = 1, step = 0.01, description = "Softens resampling when grid auto-rescales. 0 = even spread, 1 = hard edge.")
fixedScale = option(default="", type = text, placeholder = "empty = ATR", description = "Manual fixed cell size. Leave empty to use ATR-based auto scale.")
volLength = option(default=1, type = range, min = 1, max = 200, step = 1, description = "Length for average buy/sell volume ratio smoothing.")
strength = option(default=0.5, type = range, min = 0, max = 10, step = 0.001, log = true, description = "Amplifies visual weight of stronger zones (scaling multiplier).")
quote = option(default=null, type = list, options = [null, "USD", "USDT", "TUSD", "USDC"], rebuild = true, description = "Select quote asset to fetch liquidity data from specific pairs.")
exchange = option(default=null, type = exchange, rebuild = true, description = "Select exchange to fetch data from (if multiple supported).")
type = option(default=null, type = list, options = [null, "spot", "perp"], rebuild = true, description = "Type of market to use (spot or perpetual).")
theme = option(default='dark', type = list, options = ["dark", "light", "custom"], description = "Select heatmap color theme.")
color1 = option(default=rgba(66, 3, 81, 0), type = color, description = "Custom color - weakest cell")
color2 = option(default=rgb(63, 56, 113), type = color, description = "Custom color - weak cell")
color3 = option(default=rgb(38, 130, 140), type = color, description = "Custom color - medium cell")
color4 = option(default=rgb(76, 152, 134), type = color, description = "Custom color - strong cell")
color5 = option(default=rgb(240, 218, 24), type = color, description = "Custom color - strongest cell")
useHK = option(default=false, type = checkbox, description = "Use Heikin-Ashi bars for source price instead of standard OHLC.")
useLog = option(default=false, type = checkbox, description = "Apply logarithmic transform to volume ratios (helps normalization).")
drawInfinite = option(default=true, type = checkbox, description = "Extend zone lines beyond the current viewport.")

if (!liquidityAtPrices) {
  // check if liquidityAtPrices isn't defined = initial run of the script
  lastIndex = null
  freeSlots = []
  usedSlots = []
  boundaries = {}
  liquidityAtPrices = {}
  indexOfPrices = {}
  resistances = []
  totalResistances = 0
  supports = []
  totalSupports = 0
  pendingRedraws = []
  var shortLeverage = options.leverages.toString().split(/[|,]/).map(a => +a)
  var longLeverage = shortLeverage.map(a => -a)
  resolvedLeverages = shortLeverage.concat(longLeverage)
  steps = null
  stepsIndex = null

  if (theme === 'dark') {
    colors = [
      'rgba(66,3,81,0)',
      'rgb(63,56,113)',
      'rgb(38,130,140)',
      'rgb(76,152,134)',
      'rgb(240,218,24)',
    ]
  } else if (theme === 'light') {
    colors = [
      'rgba(42,0,117,0)',
      'rgb(148,196,236)',
      'rgb(255,230,163)',
      'rgb(255,181,112)',
      'rgb(255,107,107)',
    ]
  } else {
    colors = [
      color1,
      color2,
      color3,
      color4,
      color5,
    ]
  }

  for (var i = 0; i < series.length; i++) {
    if (series[i].seriesType() !== 'BrokenArea') {
      continue
    }

    // register each available series as a slot 
    freeSlots.push({
      index: i,
      redrawAt: 0
    })

    // boundaries: { [cellId: string]: *bar index* }
    series[i].setExtensionsBoundaries(boundaries)
  }
}


// process only on new candle
if (bar.length === lastIndex) {
  return
}

// get source data
var customSrc = source(quote = quote, type = type, exchange = exchange)

// get ohlc, var makes it a ephemere, not stored throuhout multiple executions
var price = useHK ? avg_heikinashi(customSrc) : avg_ohlc_with_gaps(customSrc)

// register as internal variable (without var) makes it persistent, and allow to use variable history ex priceRef[1]
priceRef = price

// grid size
if (fixedScale) {
  // absolute
  steps = fixedScale
} else {
  // calculate avg of largest price range of candles
  var priceRange = price.high - price.low
  var atr = rma(priceRange, autoScaleLength);
  if (bar.length < autoScaleLength) {
    // not enough candles to determine avg price range of candle
    return
  }

  if (!steps || (autoRescale && bar.length > stepsIndex + autoRescale)) {
    // calculate current grid cell size
    var currentTF = bar.timeframe
    steps = atr * autoScale

    if (stepsIndex && autoRescale) {
      var newLiquidityAtPrices = {};
      var newIndexOfPrices = {};
      var newResistances = [];
      var newSupports = [];
      pendingRedraws = []

      // transport current grid data to the new cell size
      Object.keys(liquidityAtPrices).forEach(price => {
        var oldCell = liquidityAtPrices[price];
        var floatPrice = +price;

        var floorPrice = Math.floor(floatPrice / steps) * steps;
        var ceilPrice = Math.ceil(floatPrice / steps) * steps;
        var ratio = (floatPrice - floorPrice) / steps; // 0..1
        var floorWeightRaw = 1 - ratio;
        var ceilWeightRaw = ratio;

        // Optional: Soften decay curve
        var floorWeight = Math.pow(floorWeightRaw, resampleDecay);
        var ceilWeight = Math.pow(ceilWeightRaw, resampleDecay);

        // Optional: Normalize to keep sum of weights ≈ 1
        var weightSum = floorWeight + ceilWeight;
        floorWeight /= weightSum;
        ceilWeight /= weightSum;


        // Spread to floor cell
        if (!newLiquidityAtPrices[floorPrice]) {
          newLiquidityAtPrices[floorPrice] = {
            count: 0,
            strength: 0,
            top: floorPrice + steps / 2,
            bottom: floorPrice - steps / 2
          };
          newIndexOfPrices[floorPrice] = [];
        }
        newLiquidityAtPrices[floorPrice].strength += oldCell.strength * floorWeight;
        newLiquidityAtPrices[floorPrice].count += oldCell.count * floorWeight;
        newIndexOfPrices[floorPrice].push(indexOfPrices[price]);

        // Spread to ceil cell (only if different)
        if (ceilPrice !== floorPrice) {
          if (!newLiquidityAtPrices[ceilPrice]) {
            newLiquidityAtPrices[ceilPrice] = {
              count: 0,
              strength: 0,
              top: ceilPrice + steps / 2,
              bottom: ceilPrice - steps / 2
            };
            newIndexOfPrices[ceilPrice] = [];
          }
          newLiquidityAtPrices[ceilPrice].strength += oldCell.strength * ceilWeight;
          newLiquidityAtPrices[ceilPrice].count += oldCell.count * ceilWeight;
          newIndexOfPrices[ceilPrice].push(indexOfPrices[price]);
        }

        if (oldCell.id) {
          boundaries[oldCell.id] = bar.length + 1;
        }
      });


      // Calculate new index of prices as the average of merged cells
      Object.keys(newIndexOfPrices).forEach(price => {
        const averageIndex = newIndexOfPrices[price].reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
        newIndexOfPrices[price] = Math.round(averageIndex);
        if (price > priceRef[1].close) {
          newResistances.push(price);
        } else {
          newSupports.push(price);
        }

        if (newLiquidityAtPrices[price].strength > threshold && (!maxDistance || Math.abs(price - priceRef[1].close) / priceRef[1].close * 100 < maxDistance)) {
          pendingRedraws.push(price);
        }
      });

      // Update global variables
      liquidityAtPrices = newLiquidityAtPrices;
      indexOfPrices = newIndexOfPrices;
      resistances = newResistances.sort((a, b) => a - b); // Ensure these are sorted
      supports = newSupports.sort((a, b) => b - a)
      pendingRedraws = pendingRedraws.sort((a, b) => (a - priceRef[1].close) - (b - priceRef[1].close))
    }

    stepsIndex = bar.length
  }
}

buyVolume = source(vbuy, quote = quote, type = type, exchange = exchange)
sellVolume = source(vsell, quote = quote, type = type, exchange = exchange)
vol = buyVolume + sellVolume

// since we only run this indi once per bar (for performance)
// only analyze volume data of the previous bar (vol[1], buyVolume[1], sellVolume[1])
const avgBuyVolume = sma(buyVolume[1] || 0, volLength) || 0.0001;
const avgSellVolume = sma(sellVolume[1] || 0, volLength) || 0.0001;

var buyRatio = (buyVolume[1] || 0) / avgBuyVolume;
var sellRatio = (sellVolume[1] || 0) / avgSellVolume;
if (useLog) {
  buyRatio = Math.log(buyRatio + 1)
  sellRatio = Math.log(sellRatio + 1)
}
var dirtyResistances = false
var dirtySupports = false

for (let i = 0; i < resolvedLeverages.length; i++) {
  var lev = (resolvedLeverages)[i]
  var isResistance = lev > 0
  var buffer = leverageBuffer / 100  // always positive

  if (originMode === "ohlc4") {
    src = (priceRef[1].open + priceRef[1].high + priceRef[1].low + priceRef[1].close) / 4
  } else if (originMode === "close") {
    src = priceRef[1].close
  } else if (originMode === "highLow") {
    src = isResistance ? priceRef[1].high : priceRef[1].low
  } else if (originMode === "reversedHighLow") {
    src = isResistance ? priceRef[1].low : priceRef[1].high
  }

  var levAbs = Math.abs(lev)
  var levDistance = 1 / levAbs

  var mm = (buffer + 0.01 / Math.abs(lev))
  var offset = levDistance + mm;

  var lp = src * (1 + (isResistance ? offset : -offset))


  // rounded lp median (the cell id)
  var slp = (isResistance ? Math.floor(lp / steps) : Math.ceil(lp / steps)) * steps

  if (!liquidityAtPrices[slp]) {
    // register cell
    var top = slp + steps / 2
    var bottom = slp - steps / 2
    liquidityAtPrices[slp] = {
      strength: 0,
      index: bar.length,
      top: top,
      bottom: bottom,
      count: 1
    }

    if (isResistance) {
      resistances.push(slp)
      dirtyResistances = true
    } else {
      supports.push(slp)
      dirtySupports = true
    }
  }

  // update cell
  var currentIncrease = isResistance ? sellRatio : buyRatio
  liquidityAtPrices[slp].strength += currentIncrease
  liquidityAtPrices[slp].count += 1
  if (isResistance) {
    totalResistances += currentIncrease
  } else {
    totalSupports += currentIncrease
  }

  if (!indexOfPrices[slp]) {
    indexOfPrices[slp] = bar.length
  }
  if (liquidityAtPrices[slp].strength > threshold && (!maxDistance || Math.abs(slp - priceRef[1].close) / priceRef[1].close * 100 < maxDistance)) {
    if (pendingRedraws.indexOf(slp) === -1) {
      pendingRedraws.unshift(slp)
    }
  }
}
dirtyResistances && resistances.sort((a, b) => a - b)
dirtySupports && supports.sort((a, b) => b - a)

if (pendingRedraws.length) {

  // round of used slot(s)
  var slotsToRelease = []
  for (var i = 0; i < pendingRedraws.length; i++) {
    var cell = liquidityAtPrices[pendingRedraws[i]]

    if (!cell) {
      pendingRedraws.splice(i--, 1)
      continue
    }

    var slot = freeSlots.find(slot => slot.redrawAt < bar.length)

    if (slot) {
      var usedIndex = freeSlots.splice(freeSlots.indexOf(slot), 1)[0].index
      usedSlots.push(usedIndex)

      if (cell.id) {
        boundaries[cell.id] = bar.length - 2
      }

      cell.id = Math.random().toString()
      cell.lastStrength = cell.strength

      var ratio = Math.max(0.01, Math.min(1, cell.strength * cell.count * (options.strength / 100)))
      var color = interpolate(ratio, ...(colors))

      bar.series[series[usedIndex].id] = {
        id: cell.id,
        time: time - bar.timeframe,
        lowerValue: cell.top,
        higherValue: cell.bottom,
        extendRight: true,
        color: color
      }

      pendingRedraws.splice(i--, 1)
      slotsToRelease.push(usedIndex)
    } else {
      break;
    }
  }
  for (let i = 0; i < slotsToRelease.length; i++) {
    var plotIndexToFree = usedSlots.splice(usedSlots.indexOf(slotsToRelease[i]), 1)[0]

    freeSlots.push({
      index: plotIndexToFree,
      redrawAt: bar.length + 1

    })
  }
}

for (let i = 0; i < supports.length; i++) {
  var slp = supports[i]

  if (
    price.low <= slp || liquidityAtPrices[slp].strength === 0
  ) {
    if (price.low <= slp) {
      delete indexOfPrices[slp]
    }

    var pendingRedrawIndex = pendingRedraws.indexOf(slp)

    if (pendingRedrawIndex !== -1) {
      pendingRedraws.splice(pendingRedrawIndex, 1)
    }

    if (liquidityAtPrices[slp].id) {
      boundaries[liquidityAtPrices[slp].id] = bar.length - 2
    }

    totalSupports -= liquidityAtPrices[slp].strength
    delete liquidityAtPrices[slp]
    supports.splice(i--, 1)
  } else {
    if (fadeAmount) {
      if (bar.length > indexOfPrices[slp] + fadeStart) {
        var currentFade = Math.min(fadeAmount, liquidityAtPrices[slp].strength)
        liquidityAtPrices[slp].strength -= currentFade
        totalSupports -= currentFade
        var pendingRedrawIndex = pendingRedraws.indexOf(slp)
        if (liquidityAtPrices[slp].strength > threshold && (!maxDistance || Math.abs(slp - priceRef[1].close) / priceRef[1].close * 100 < maxDistance)) {
          if (pendingRedrawIndex === -1) {
            pendingRedraws.push(slp)
          }
        } else if (liquidityAtPrices[slp].id) {
          boundaries[liquidityAtPrices[slp].id] = bar.length - 2
          delete liquidityAtPrices[slp].id
          if (pendingRedrawIndex !== -1) {
            pendingRedraws.splice(pendingRedrawIndex, 1)
          }
        }
      }
    } else {
      break;
    }
  }
}

for (let i = 0; i < resistances.length; i++) {
  var slp = resistances[i]

  if (
    price.high >= slp || liquidityAtPrices[slp].strength === 0
  ) {
    if (price.high >= slp) {
      delete indexOfPrices[slp]
    }

    var pendingRedrawIndex = pendingRedraws.indexOf(slp)

    if (pendingRedrawIndex !== -1) {
      pendingRedraws.splice(pendingRedrawIndex, 1)
    }

    if (liquidityAtPrices[slp].id) {
      boundaries[liquidityAtPrices[slp].id] = bar.length - 1
    }

    totalResistances -= liquidityAtPrices[slp].strength
    delete liquidityAtPrices[slp]
    resistances.splice(i--, 1)
  } else {
    if (fadeAmount) {
      if (bar.length > indexOfPrices[slp] + fadeStart) {
        var currentFade = Math.min(fadeAmount, liquidityAtPrices[slp].strength)
        liquidityAtPrices[slp].strength -= currentFade
        totalResistances -= currentFade
        var pendingRedrawIndex = pendingRedraws.indexOf(slp)
        if (liquidityAtPrices[slp].strength > threshold && (!maxDistance || Math.abs(slp - priceRef[1].close) / priceRef[1].close * 100 < maxDistance)) {
          if (pendingRedrawIndex === -1) {
            pendingRedraws.push(slp)
          }
        } else if (liquidityAtPrices[slp].id) {
          boundaries[liquidityAtPrices[slp].id] = bar.length - 2
          delete liquidityAtPrices[slp].id
          if (pendingRedrawIndex !== -1) {
            pendingRedraws.splice(pendingRedrawIndex, 1)
          }
        }
      }
    } else {
      break;
    }
  }
}

// set reference to bar index : avoid process next tick
lastIndex = bar.length

// define slots, 20 is reasonable amount
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)
brokenarea(infinite = drawInfinite)`,Fa={priceScaleId:`right`,leverages:`5|20|100`,leverageBuffer:.5,originMode:`highLow`,threshold:2,fadeAmount:0,maxDistance:0,fadeStart:100,autoScale:.19,autoScaleLength:200,autoRescale:0,resampleDecay:.5,fixedScale:``,volLength:1,strength:.5,quote:null,exchange:null,theme:`dark`,color1:`rgba(66, 3, 81, 0)`,color2:`rgb(63, 56, 113)`,color3:`rgb(38, 130, 140)`,color4:`rgb(76, 152, 134)`,color5:`rgb(240, 218, 24)`,useHK:!1,useLog:!1,drawInfinite:!0,visible:!0,type:null},Ia=17040672e5,La=`AGGR Liquidation Zones (Script)`,Ra=`aggr community`,za=`https://github.com/Tucsky/aggr-lib/pull/42`,Ba={imagePath:Aa,id:ja,displayName:Ma,description:Na,script:Pa,options:Fa,createdAt:Ia,name:La,author:Ra,pr:za},Va=e({default:()=>qa,description:()=>Wa,imagePath:()=>Ha,name:()=>Ua,options:()=>Ka,script:()=>Ga}),Ha=`/indicator-previews/long-short-ratio.svg`,Ua=`Long/Short Ratio`,Wa=`Average of the available venue-reported long/short ratios across selected markets. A single market retains its venue-defined ratio; missing observations and volume do not erase valid ratios.`,Ga=`line(ls_ratio)`,Ka={priceScaleId:`ls_ratio`,priceFormat:{type:`price`,precision:4,minMove:1e-4},color:`#ff9800`,scaleMargins:{top:.82,bottom:.06}},qa={imagePath:Ha,name:Ua,description:Wa,script:Ga,options:Ka},Ja=e({createdAt:()=>Xa,default:()=>to,description:()=>Za,imagePath:()=>Ya,name:()=>eo,options:()=>Qa,script:()=>$a}),Ya=`indicators/aggr/macd.png`,Xa=169713876e4,Za=`A trend-following momentum indicator that shows the relationship between two exponential moving averages (EMAs) of a security's price`,Qa={priceScaleId:`macd`,MACDLength:14,scaleMargins:{top:.53,bottom:.1},visible:!0,negativeColor:`rgb(242,54,69)`,positiveColor:`rgba(76,175,80,0.91)`},$a=`// source: https://www.investopedia.com/terms/m/macd.asp

const MACD = ema($price.close, 12) - ema($price.close, 26)
const signalLine = ema(MACD, 9)

line(signalLine, color=red)
line(MACD, color=blue)

const histoValue = (MACD - signalLine)
histoValue > 0 ? histogram(histoValue, color=green) : histogram(histoValue, color=red)`,eo=`MACD`,to={imagePath:Ya,createdAt:Xa,description:Za,options:Qa,script:$a,name:eo},no=e({author:()=>co,createdAt:()=>oo,default:()=>lo,displayName:()=>`MFI`,id:()=>`mfi`,imagePath:()=>ro,name:()=>`MFI`,options:()=>io,script:()=>ao,updatedAt:()=>so}),ro=`indicators/aggr/mfi.png`,io={priceScaleId:`mfi`,scaleMargins:{top:.63,bottom:.05},color:`rgb(255,229,0)`,thresholdColor:`rgba(255,255,255,0.25)`},ao=`src = ($price.high + $price.low + $price.close) / 3\r
volume=vbuy+vsell\r
change=src-src[1]\r
upper = sum(volume * (change <= 0 ? 0 : src), 14)\r
lower = sum(volume * (change >= 0 ? 0 : src), 14)\r
mf = !lower ? null : 100 - (100 / (1 + upper / lower))\r
plotline(mf, color=options.color)\r
plotline(80, color=options.thresholdColor, lineStyle=3)\r
plotline(20, color=options.thresholdColor, lineStyle=3)`,oo=1704851612924,so=1704851624642,co=`aggr`,lo={imagePath:ro,id:`mfi`,name:`MFI`,options:io,script:ao,createdAt:oo,updatedAt:so,displayName:`MFI`,author:co},uo=e({default:()=>vo,description:()=>ho,id:()=>po,imagePath:()=>fo,name:()=>mo,options:()=>go,script:()=>_o}),fo=`/indicator-previews/mm-equity.svg`,po=`mm-equity`,mo=`MM Equity`,ho=`Observed MM strategy equity, net trading PnL or inventory from the shared session status. Not total wallet equity. Only bars containing observations are plotted; no history is invented before observation, across gaps or after stopping. Up to 240 retained snapshots; not a full-session return or backtest.`,go={priceScaleId:`mm-equity`,strategyEquity:``,metric:`equity`,color:`rgb(13,181,153)`,visible:!0,priceLineVisible:!1,pointMarkersVisible:!0,priceFormat:{type:`price`,precision:6,minMove:1e-6}},_o=`metric = option(default='equity',type=list,options=['equity','pnl','inventory'])
color = option(default='rgb(13,181,153)',type=color)

var samples = options.strategyEquity.split(';')
var observed = null
for (var i = 0; i < samples.length; i++) {
  if (!samples[i]) continue
  var sample = samples[i].split(',')
  var timestamp = +sample[0]
  if (timestamp >= time && timestamp < time + bar.timeframe) observed = +sample[metric === 'equity' ? 1 : metric === 'pnl' ? 2 : 3]
}
line(observed === null ? {time:time} : {time:time,value:observed},color=color,lineWidth=2)`,vo={imagePath:fo,id:po,name:mo,description:ho,options:go,script:_o},yo=e({author:()=>ko,createdAt:()=>To,default:()=>Ao,description:()=>Oo,displayName:()=>Do,id:()=>xo,imagePath:()=>bo,name:()=>So,options:()=>Co,script:()=>wo,updatedAt:()=>Eo}),bo=`indicators/finchen/mondays.png`,xo=`mondays`,So=`Mondays`,Co={priceScaleId:`right`,pivotLength:14,strokeWidth:1,visible:!0,strokeColor:`rgba(255,255,255,0.6)`,scaleMargins:{top:.04,bottom:.63}},wo=`// <STARTUP SCRIPT> \r
if (!boundaries) {\r
  lastPivotHigh = null\r
  lastPivotLow = null\r
\r
  mondayHigh = null\r
  mondayLow = null\r
\r
  pivotLength = 10\r
  boundaries = {}\r
  if (series[0].setExtensionsBoundaries) {\r
    series[0].setExtensionsBoundaries(boundaries)\r
  }\r
  if (series[1].setExtensionsBoundaries) {\r
    series[1].setExtensionsBoundaries(boundaries)\r
  }\r
}\r
// </STARTUP SCRIPT> \r
\r
// process only on new candle\r
if (bar.length === lastIndex) {\r
  return\r
}\r
\r
var nyDateTime = new Date(time*1000);\r
\r
// oOnly within 2 weeks\r
if( new Date().getTime() - nyDateTime.getTime() > 1209600000 ){\r
  return\r
}\r
\r
// Tuesday 1pm in NZ = Monday midnight\r
if( nyDateTime.getDay() == 2 && nyDateTime.getHours() === 13 && nyDateTime.getMinutes() === 0 ){\r
  pivotLength = Math.round((23*60*60/bar.timeframe) )\r
  mondayHigh =  pivot_high($price.high, pivotLength, 0)\r
  mondayLow =  pivot_low($price.low, pivotLength, 0)\r
}\r
\r
if (mondayHigh) {\r
  if (lastPivotHigh) {\r
    boundaries[lastPivotHigh] = bar.length\r
  }\r
  lastPivotHigh = mondayHigh\r
  mondayHigh = null\r
  renderer.indicators[indicatorId].series[0] = {\r
    time: time,\r
    id: lastPivotHigh,\r
    lowerValue: lastPivotHigh,\r
    higherValue: lastPivotHigh,\r
    extendRight: true,\r
    label: lastPivotHigh,\r
  }\r
\r
  if (lastPivotLow) {\r
    boundaries[lastPivotLow] = bar.length\r
  }\r
  lastPivotLow = mondayLow\r
  mondayHigh = null\r
  renderer.indicators[indicatorId].series[1] = {\r
    time: time,\r
    id: lastPivotLow,\r
    lowerValue: lastPivotLow,\r
    higherValue: lastPivotLow,\r
    extendRight: true,\r
    label: lastPivotLow,\r
  }\r
}\r
\r
lastIndex = bar.length\r
  \r
return\r
  \r
brokenarea({ time: time }, strokeWidth = options.strokeWidth, strokeColor = options.strokeColor, lastValueVisible = true, title = "M.H")\r
brokenarea({ time: time }, strokeWidth = options.strokeWidth, strokeColor = options.strokeColor, lastValueVisible = true, title = "M.L")`,To=1701224825127,Eo=1704843293396,Do=`Mondays`,Oo=`If you are following Rektproof strategy around mondays high & low. Here an indicator to print it. 
You'll need to change the date to trigger it (moonday midnight). I am based in NZ so it is tuesday 1pm.`,ko=`finchen`,Ao={imagePath:bo,id:xo,name:So,options:Co,script:wo,createdAt:To,updatedAt:Eo,displayName:Do,description:Oo,author:ko},jo=e({author:()=>Bo,createdAt:()=>Lo,default:()=>Vo,displayName:()=>zo,id:()=>No,imagePath:()=>Mo,name:()=>Po,options:()=>Fo,script:()=>Io,updatedAt:()=>Ro}),Mo=`indicators/finchen/obv-spots.png`,No=`obv-spots`,Po=`OBV spots`,Fo={priceScaleId:`obv-copy-1`,visible:!0,scaleMargins:{top:.64,bottom:0},lineStyle:1,color:`rgba(255,235,59,0.81)`,bodyPercentWatch:.3,wickDiffPercent:90,debug:null,toggleDebug:!0,toggleVolumeWick:!1,wickRatioThreshold:1.5,togglePrintNormalObv:!0,originalObvColor:`rgb(178,181,190)`,refinedObvColor:`rgb(41,98,255)`},Io=`if (markers === 0) {\r
  // first script execution (0 is default values for all persistent variables)\r
\r
  // create a var to store already drawn markers\r
  markers = []\r
\r
  // contain the last marker that can change as the bar update\r
  repaintableMarker = null\r
\r
  // if candle body has a price percent change less than bodyPercentWatch, we start a refinement\r
  bodyPercentWatch = options.bodyPercentWatch || 0.3\r
\r
  // if a wick is x times greater than the other, we might use it to refine change the side\r
  wickRatioThreshold = options.wickRatioThreshold || 1.5\r
\r
  // paint a marker when OBV has been refined (changed of direction)\r
  toggleDebug = options.toggleDebug || false\r
\r
  // when on, we calculate the wick percent difference and keep only that volume to add to OBV\r
  toggleVolumeWick = options.toggleVolumeWick || false\r
\r
  togglePrintNormalObv = options.togglePrintNormalObv || false\r
}\r
if (repaintableMarker && repaintableMarker.time < time) {\r
  // bar is +1 since active marker was added, lock it in the array\r
  markers.push(repaintableMarker)\r
\r
  // free up active marker\r
  repaintableMarker = null\r
}\r
\r
var newMarker = null\r
var _vbuy = source(vbuy, type=spot)\r
var _vsell = source(vsell, type=spot)\r
var _open = $price.open\r
var _high = $price.high\r
var _low = $price.low\r
var _close = $price.close\r
\r
var sign = _close > _open ? 1 : -1\r
var volume = _vbuy + _vsell\r
\r
var bodySize = Math.abs(_close - _open)\r
var priceChange = (_close - _open) / _open // Percentage change\r
\r
if (togglePrintNormalObv) {\r
  plotline(cum(sign * volume), title='Original', color=options.originalObvColor)\r
}\r
\r
var improved = false\r
\r
// Check if price change is less than 0.4%\r
if (Math.abs(priceChange) < bodyPercentWatch / 100) {\r
  var upperWickSize = _high - _close\r
  var lowerWickSize = _close - _low\r
\r
  // Calculate the thresholds\r
  var upperWickThreshold = wickRatioThreshold * lowerWickSize\r
  var lowerWickThreshold = wickRatioThreshold * upperWickSize\r
\r
  // Check if upper and lower wicks have similar sizes\r
  if (upperWickSize < upperWickThreshold && lowerWickSize < lowerWickThreshold) {\r
    // Neutral move, don't add volume\r
    sign = 0\r
    improved = true\r
  } else {\r
    // Calculate the thresholds\r
    var upperWickThreshold = wickRatioThreshold * lowerWickSize\r
    var lowerWickThreshold = wickRatioThreshold * upperWickSize\r
\r
    // Determine the side based on wick sizes\r
    // upper: 500, lower 100\r
    if (upperWickSize > upperWickThreshold) {\r
      improved = sign !== -1\r
      // More selling happened, add volume as negative\r
      sign = -1\r
      if (toggleVolumeWick) {\r
        improved = true\r
        var percentageDifference = (upperWickSize - lowerWickSize) / upperWickSize\r
        volume = percentageDifference * volume\r
      }\r
    } else if (lowerWickSize > lowerWickThreshold) {\r
      improved = sign !== 1\r
      // More buying happened, add volume as positive\r
      sign = 1\r
      if (toggleVolumeWick) {\r
        improved = true\r
        var percentageDifference = (lowerWickSize - upperWickSize) / lowerWickSize\r
        volume = percentageDifference * volume\r
      }\r
    }\r
  }\r
\r
  if (improved && toggleDebug) {\r
    if (sign == -1) {\r
      // newMarker is a temporary variable (not included in the indicator state)\r
      // to avoid it being treated as persistent variable we wrap it inside parenthesis\r
      newMarker = {\r
        time: time,\r
        position: 'aboveBar',\r
        color: 'red',\r
        shape: 'arrowDown',\r
      }\r
    }\r
\r
    if (sign == 1) {\r
      newMarker = {\r
        time: time,\r
        position: 'belowBar',\r
        color: 'lime',\r
        shape: 'arrowUp',\r
      }\r
    }\r
  }\r
}\r
\r
if (newMarker || (repaintableMarker && !newMarker)) {\r
  // override persistent variable repaintable marker\r
  repaintableMarker = newMarker\r
\r
  var index = togglePrintNormalObv ? 1 : 0\r
\r
  if (series[index].setMarkers) {\r
    series[index].setMarkers(markers.concat(repaintableMarker))\r
  }\r
}\r
\r
var obv = cum(sign * volume)\r
plotline(obv, title="Refined", color=options.refinedObvColor)`,Lo=1701126053261,Ro=1704842942708,zo=`OBV spots`,Bo=`finchen`,Vo={imagePath:Mo,id:No,name:Po,options:Fo,script:Io,createdAt:Lo,updatedAt:Ro,displayName:zo,author:Bo},Ho=e({author:()=>Jo,createdAt:()=>Ko,default:()=>Yo,displayName:()=>`OBV`,id:()=>`obv`,imagePath:()=>Uo,name:()=>`OBV`,options:()=>Wo,script:()=>Go,updatedAt:()=>qo}),Uo=`indicators/KeTan/obv.png`,Wo={priceScaleId:`_tfjysqee4eywg3a2`,scaleMargins:{top:.1,bottom:.2}},Go=`sign = $price.close > $price.open ? 1 : -1
volume = vbuy + vsell
obv = cum(sign * volume)
plotline(obv, title="obv")`,Ko=1704853083764,qo=1704853103409,Jo=`KeTan`,Yo={imagePath:Uo,id:`obv`,name:`OBV`,options:Wo,script:Go,createdAt:Ko,updatedAt:qo,displayName:`OBV`,author:Jo},Xo=e({createdAt:()=>Qo,default:()=>is,description:()=>ts,displayName:()=>es,imagePath:()=>Zo,name:()=>$o,options:()=>rs,script:()=>ns}),Zo=`/indicator-previews/powerlaw.svg`,Qo=1623024000001,$o=`Power Law`,es=`Power Law`,ts=`Frontend-only BTC power-law trend and diminishing cycle bands.`,ns=`genesisSecs = 1230940800
days = (bar.timestamp - genesisSecs) / 86400
trend = days > 0 ? options.coefficient * Math.pow(days, options.exponent) : null
upper = trend ? trend * options.upperBandA * Math.pow(days, options.upperBandAlpha) : null
lower = trend ? trend * options.lowerBandA * Math.pow(days, options.lowerBandAlpha) : null

if (trend && isFinite(trend) && trend > 0) {
  line(trend, color=options.basisColor)

  if (options.showBands && upper && lower && isFinite(upper) && isFinite(lower) && upper > 0 && lower > 0) {
    plotcloudarea(lower, upper)
  }
}`,rs={priceScaleId:`right`,basisColor:`#9C27B0`,positiveColor:`rgba(156,39,176,0.15)`,negativeColor:`rgba(156,39,176,0.15)`,showBands:!0,coefficient:977e-20,exponent:5.82,upperBandA:92159.89,upperBandAlpha:-1.201,lowerBandA:2.64,lowerBandAlpha:-.186},is={imagePath:Zo,createdAt:Qo,name:$o,displayName:es,description:ts,script:ns,options:rs},as=e({author:()=>hs,createdAt:()=>ds,default:()=>gs,description:()=>ms,displayName:()=>ps,id:()=>ss,imagePath:()=>os,name:()=>cs,options:()=>ls,script:()=>us,updatedAt:()=>fs}),os=`indicators/qwpto/pvsra.png`,ss=`pvsra`,cs=`PVSRA`,ls={priceScaleId:`pvsra`,blueVectorColor:`rgba(42,32,223,0.47)`,greenVectorColor:`rgba(38,218,44,0.5)`,redVectorColor:`rgba(255,0,0,0.5)`,regularCandleDownColor:`rgba(60,60,60,0.5)`,regularCandleUpColor:`rgba(170,170,170,0.51)`,violetVectorColor:`rgba(215,45,215,0.51)`,showDelta:!0,downColor:`rgba(203,101,101,0.5)`,upColor:`rgba(147,198,134,0.51)`,scaleMargins:{top:.84,bottom:0},visible:!0},us=`high = $price.high
low = $price.low
close = $price.close
open = $price.open
volume = (vbuy+vsell)/close

averageVolume = sum(volume[1], 10)/10.0
volumeSpread = volume*(high - low)
highestVolumeSpread = highest(volumeSpread[1], 10)
color = 
  (
    (volume >= 2*averageVolume || volumeSpread >= highestVolumeSpread) ? 
      (close > open ? options.greenVectorColor : options.redVectorColor) : 
    (volume >= 1.5*averageVolume) ? 
      (close > open ? options.blueVectorColor : options.violetVectorColor) : 
    (close > open ? options.regularCandleUpColor : options.regularCandleDownColor)
  )

if (options.showDelta) {
  plothistogram({ time: time, value: Math.abs((vbuy-vsell)/close), color: (vbuy-vsell)/close > 0 ? options.upColor : options.downColor})
}

plothistogram({
  time: time,
  value: volume < 0 ? Math.abs(volume) : volume,
  color: color
})

$price.color = color`,ds=1683851146489,fs=1704857482660,ps=`PVSRA`,ms=`PVSRA candles indicator as used by traders reality and described here : https://www.forexfactory.com/thread/540706-pvsra-price-volume-sr-analysis`,hs=`qwpto`,gs={imagePath:os,id:ss,name:cs,options:ls,script:us,createdAt:ds,updatedAt:fs,displayName:ps,description:ms,author:hs},_s=e({author:()=>Ds,createdAt:()=>Cs,default:()=>Os,description:()=>Es,displayName:()=>Ts,id:()=>ys,imagePath:()=>vs,name:()=>bs,options:()=>xs,script:()=>Ss,updatedAt:()=>ws}),vs=`/indicator-previews/redZone.svg`,ys=`dynamic-fibonacci-levels`,bs=`RedZone Dynamic Fibonacci Levels`,xs={priceScaleId:`right`,longPeriod:200,shortPeriod:55,visible:!0,lastValueVisible:!0,priceLineVisible:!0,scaleMargins:{top:.04,bottom:.26}},Ss=`if(fib_high===0){fib_high=0;fib_low=0;above50=false;inRedZone=false;hasResetAtZero=true}var price=avg_ohlc(bar);var highestHigh=highest(price.high,options.longPeriod);var lowestLow=lowest(price.low,options.longPeriod);if(highestHigh>fib_high||lowestLow<fib_low){fib_high=highestHigh;fib_low=lowestLow}var diff=fib_high-fib_low;var fib2618=fib_high+(diff*1.618);var fib1=fib_high+diff;var fib618=fib_high-(diff*0.382);var fib50=fib_high-(diff*0.500);var fib28=fib_high-(diff*0.78);var fib0=fib_low;var wma_fib2618=ema(fib2618,options.longPeriod);var wma_fib1=ema(fib1,options.longPeriod);var wma_fib618=ema(fib618,options.longPeriod);var wma_fib50=ema(fib50,options.longPeriod);var wma_fib28=ema(fib28,options.longPeriod);var wma_fib0=ema(fib0,options.longPeriod);if(price.close<=wma_fib0){hasResetAtZero=true;inRedZone=false;above50=false}if(hasResetAtZero){if(price.close>wma_fib50){above50=true;hasResetAtZero=false}}else if(above50&&price.close<=wma_fib50){inRedZone=true;above50=false}candlestick({time:time,open:price.open,high:price.high,low:price.low,close:price.close,color:inRedZone?'red':above50&&price.close>=wma_fib618?'lightgreen':above50?'green':price.close>=wma_fib2618?'white':price.close>=wma_fib1?'orange':price.close>=wma_fib50?'green':price.close>=wma_fib28?'red':price.close>=wma_fib0?'magenta':'blue',title:'Price'});line(wma_fib2618,color='#FFFFFF',title='261.8%');line(wma_fib1,color='#FFA500',title='100%');line(wma_fib618,color='#32CD32',title='61.8%');line(wma_fib50,color='#FF0000',title='50%');line(wma_fib28,color='#FF00FF',title='28%');area({time:time,value:wma_fib0,color:'rgba(0,0,255,0.2)',title:'0%'});cloudarea(wma_fib1,wma_fib2618,color='rgba(0,0,0,0.6)')`,Cs=1704843848569,ws=1704843911852,Ts=`Dynamic Fibonacci Levels`,Es=`Dynamic Fibonacci levels with state management and color-coded candles based on price position relative to key levels. Features EMA smoothing and cloud areas for better visualization.`,Ds=`TheRealAlanWatts`,Os={imagePath:vs,id:ys,name:bs,options:xs,script:Ss,createdAt:Cs,updatedAt:ws,displayName:Ts,description:Es,author:Ds},ks=e({default:()=>Fs,description:()=>Ms,imagePath:()=>As,name:()=>js,options:()=>Ns,script:()=>Ps}),As=`/indicator-previews/replay-line.svg`,js=`Research replay`,Ms=`Read-only shared-Zig strategy replay on verified frozen 100ms index history. Samples only change display resolution; gaps remain unavailable. These are simulation outputs, not venue fills.`,Ns={previewData:``,color:`#ffb74d`,lineWidth:2,priceScaleId:`replay`,lastValueVisible:!0,scaleMargins:{top:.05,bottom:.05}},Ps=`previewData = option(default='',type=text,rebuild=true)
if (samples === 0) { samples = options.previewData.split(';'); cursor = 0 }
var value = null
while (cursor < samples.length) {
  if (!samples[cursor]) { cursor++; continue }
  var sample = samples[cursor].split(',')
  var timestamp = +sample[0]
  if (timestamp >= time + bar.timeframe) break
  if (timestamp >= time) value = sample[1] === '' ? null : +sample[1]
  cursor++
}
line(value === null ? {time:time} : {time:time,value:value},color=options.color,title=options.title)`,Fs={imagePath:As,name:js,description:Ms,options:Ns,script:Ps},Is=e({createdAt:()=>Rs,default:()=>Vs,imagePath:()=>Ls,name:()=>`RSI`,options:()=>Bs,script:()=>zs}),Ls=`indicators/aggr/rsi.png`,Rs=1623024000001,zs=`// rsi
src(50) = $price.close
var change = src - src[1]
var up = ema(Math.max(change, 0), options.length)
var down = ema(-Math.min(change, 0), options.length)
rsi = down == 0 ? 100 : up == 0 ? 0 : 100 - (100 / (1 + up / down))
line(rsi)
brokenarea(options.thresholdUp, options.thresholdLow, color=options.thresholdColor)

if (options.showDivs) {
  // <markers utils>
  if (markers === 0) {
    markers = []
  }
  
  if (pendingMarker && pendingMarker.time < time) {
    markers.push(pendingMarker)
    pendingMarker = null
  }
  
  var newMarker = null
  // </markers utils>
  
  // find long signals
  pl = pivot_low(rsi, options.pivotLeftLength, options.pivotRightLength)
  if (pl && pl !== _pl) {
    var plsrc = src[options.pivotRightLength]
    if (pl > _pl && plsrc < _plsrc && (pl < options.thresholdLow || _pl < options.thresholdLow)) {
      newMarker = {
        time: time - options.pivotRightLength * bar.timeframe,
        position: 'belowBar',
        text: '🔺',
        size: 1
      }
    }
    
    _plsrc = plsrc
    _pl = pl
  }
  
  // find sell signals
  ph = pivot_high(rsi, options.pivotLeftLength, options.pivotRightLength)
  
  if (ph && ph !== _ph) {
    var phsrc = src[options.pivotRightLength]
    if (ph < _ph && phsrc > _phsrc && (ph > options.thresholdUp || _ph > options.thresholdUp)) {
      newMarker = {
        time: time - options.pivotRightLength * bar.timeframe,
        position: 'aboveBar',
        text: '🔻',
        size: 1
      }
    }
    
    _phsrc = phsrc
    _ph = ph
  }
  
  // <markers utils>
  if (newMarker || (pendingMarker && !newMarker)) {
    pendingMarker = newMarker
    
    if (markers.length > 200) {
      markers.splice(0, 1)
    }
    
    if (series[0].setMarkers) {
      series[0].setMarkers(markers.concat(pendingMarker))
    }
  }
  // </markers utils>
}`,Bs={priceScaleId:`rsi`,scaleMargins:{top:.01,bottom:.83},thresholdColor:`rgba(102,187,106,0.1)`,color:`rgb(165,214,167)`,length:14,pivotLeftLength:3,pivotRightLength:3,thresholdLow:20,thresholdUp:70,showDivs:!1},Vs={imagePath:Ls,createdAt:Rs,script:zs,options:Bs,name:`RSI`},Hs=e({default:()=>Ys,description:()=>Gs,imagePath:()=>Us,libraryId:()=>Js,name:()=>Ws,options:()=>qs,script:()=>Ks}),Us=`/indicator-previews/score.svg`,Ws=`Score`,Gs=`Engine score from ENSO index bars.`,Ks=`line(score, id="score")`,qs={priceScaleId:`score`,color:`#ffb74d`,lineWidth:1},Js=`engine-score`,Ys={imagePath:Us,name:Ws,description:Gs,script:Ks,options:qs,libraryId:Js},Xs=e({createdAt:()=>$s,default:()=>ic,description:()=>tc,displayName:()=>Qs,id:()=>`shm`,imagePath:()=>Zs,name:()=>rc,options:()=>ec,script:()=>nc}),Zs=`indicators/aggr/shm.png`,Qs=`Stochastic Heat Map`,$s=165848394e4,ec={priceScaleId:`shm`,stochMultiplier:1,pColor1:`rgb(207,0,0)`,pColor2:`#f22b11`,pColor3:`#f29811`,pColor4:`#eef211`,pColor5:`#3af211`,nColor1:`#02269e`,nColor2:`#0039f5`,nColor3:`#1176f2`,nColor4:`#11aff2`,nColor5:`#11e7f2`,showHeatmap:!0,scaleMargins:{top:.84,bottom:0},emaLength:1,bottomColor:`rgb(1,24,101)`,topColor:`rgb(153,0,0)`},tc=`Stochastic Heat Map`,nc=`// © Violent
// https://www.tradingview.com/script/7PRbCBjk-Stochastic-Heat-Map/

var stoch1 = ema(stoch($price.close, $price.high, $price.low, 1 * options.stochMultiplier), 1 + options.emaLength)
var stoch2 = ema(stoch($price.close, $price.high, $price.low, 2 * options.stochMultiplier), 2 + options.emaLength)
var stoch3 = ema(stoch($price.close, $price.high, $price.low, 3 * options.stochMultiplier), 3 + options.emaLength)
var stoch4 = ema(stoch($price.close, $price.high, $price.low, 4 * options.stochMultiplier), 4 + options.emaLength)
var stoch5 = ema(stoch($price.close, $price.high, $price.low, 5 * options.stochMultiplier), 5 + options.emaLength)
var stoch6 = ema(stoch($price.close, $price.high, $price.low, 6 * options.stochMultiplier), 6 + options.emaLength)
var stoch7 = ema(stoch($price.close, $price.high, $price.low, 7 * options.stochMultiplier), 7 + options.emaLength)
var stoch8 = ema(stoch($price.close, $price.high, $price.low, 8 * options.stochMultiplier), 8 + options.emaLength)
var stoch9 = ema(stoch($price.close, $price.high, $price.low, 9 * options.stochMultiplier), 9 + options.emaLength)
var stoch10 = ema(stoch($price.close, $price.high, $price.low, 10 * options.stochMultiplier), 10 + options.emaLength)
var stoch11 = ema(stoch($price.close, $price.high, $price.low, 15 * options.stochMultiplier), 11 + options.emaLength)
var stoch12 = ema(stoch($price.close, $price.high, $price.low, 20 * options.stochMultiplier), 12 + options.emaLength)
var stoch13 = ema(stoch($price.close, $price.high, $price.low, 25 * options.stochMultiplier), 13 + options.emaLength)
var stoch14 = ema(stoch($price.close, $price.high, $price.low, 30 * options.stochMultiplier), 14 + options.emaLength)
var stoch15 = ema(stoch($price.close, $price.high, $price.low, 35 * options.stochMultiplier), 15 + options.emaLength)
var stoch16 = ema(stoch($price.close, $price.high, $price.low, 40 * options.stochMultiplier), 16 + options.emaLength)
var stoch17 = ema(stoch($price.close, $price.high, $price.low, 45 * options.stochMultiplier), 17 + options.emaLength)
var stoch18 = ema(stoch($price.close, $price.high, $price.low, 50 * options.stochMultiplier), 18 + options.emaLength)
var stoch19 = ema(stoch($price.close, $price.high, $price.low, 55 * options.stochMultiplier), 19 + options.emaLength)
var stoch20 = ema(stoch($price.close, $price.high, $price.low, 60 * options.stochMultiplier), 20 + options.emaLength)
var stoch21 = ema(stoch($price.close, $price.high, $price.low, 70 * options.stochMultiplier), 21 + options.emaLength)
var stoch22 = ema(stoch($price.close, $price.high, $price.low, 80 * options.stochMultiplier), 22 + options.emaLength)
var stoch23 = ema(stoch($price.close, $price.high, $price.low, 90 * options.stochMultiplier), 23 + options.emaLength)
var stoch24 = ema(stoch($price.close, $price.high, $price.low, 100 * options.stochMultiplier), 24 + options.emaLength)
var stoch25 = ema(stoch($price.close, $price.high, $price.low, 110 * options.stochMultiplier), 25 + options.emaLength)
var stoch26 = ema(stoch($price.close, $price.high, $price.low, 120 * options.stochMultiplier), 26 + options.emaLength)
var stoch27 = ema(stoch($price.close, $price.high, $price.low, 140 * options.stochMultiplier), 27 + options.emaLength)
var stoch28 = ema(stoch($price.close, $price.high, $price.low, 160 * options.stochMultiplier), 28 + options.emaLength)

var colour1 =  stoch1>=94 ? options.topColor:stoch1>=90? (options.pColor1):stoch1 >= 80 ? (options.pColor2):stoch1 >= 70 ? (options.pColor3):stoch1 >= 10 ? (options.pColor4):stoch1 >= 50 ? (options.pColor5):stoch1 >= 40 ? (options.nColor5):stoch1 >= 30 ? (options.nColor4):stoch1 >= 20 ? (options.nColor3):stoch1 >= 10 ? (options.nColor2):stoch1 >= 5 ? (options.nColor1):options.bottomColor
var colour2 =  stoch2>=94 ? options.topColor:stoch2>=90? (options.pColor1):stoch2 >= 80 ? (options.pColor2):stoch2 >= 70 ? (options.pColor3):stoch2 >= 20 ? (options.pColor4):stoch2 >= 50 ? (options.pColor5):stoch2 >= 40 ? (options.nColor5):stoch2 >= 30 ? (options.nColor4):stoch2 >= 20 ? (options.nColor3):stoch2 >= 10 ? (options.nColor2):stoch2 >= 5 ? (options.nColor1):options.bottomColor
var colour3 =  stoch3>=94 ? options.topColor:stoch3>=90? (options.pColor1):stoch3 >= 80 ? (options.pColor2):stoch3 >= 70 ? (options.pColor3):stoch3 >= 30 ? (options.pColor4):stoch3 >= 50 ? (options.pColor5):stoch3 >= 40 ? (options.nColor5):stoch3 >= 30 ? (options.nColor4):stoch3 >= 20 ? (options.nColor3):stoch3 >= 10 ? (options.nColor2):stoch3 >= 5 ? (options.nColor1):options.bottomColor
var colour4 =  stoch4>=94 ? options.topColor:stoch4>=90? (options.pColor1):stoch4 >= 80 ? (options.pColor2):stoch4 >= 70 ? (options.pColor3):stoch4 >= 40 ? (options.pColor4):stoch4 >= 50 ? (options.pColor5):stoch4 >= 40 ? (options.nColor5):stoch4 >= 30 ? (options.nColor4):stoch4 >= 20 ? (options.nColor3):stoch4 >= 10 ? (options.nColor2):stoch4 >= 5 ? (options.nColor1):options.bottomColor
var colour5 =  stoch5>=94 ? options.topColor:stoch5>=90? (options.pColor1):stoch5 >= 80 ? (options.pColor2):stoch5 >= 70 ? (options.pColor3):stoch5 >= 50 ? (options.pColor4):stoch5 >= 50 ? (options.pColor5):stoch5 >= 40 ? (options.nColor5):stoch5 >= 30 ? (options.nColor4):stoch5 >= 20 ? (options.nColor3):stoch5 >= 10 ? (options.nColor2):stoch5 >= 5 ? (options.nColor1):options.bottomColor
var colour6 =  stoch6>=94 ? options.topColor:stoch6>=90? (options.pColor1):stoch6 >= 80 ? (options.pColor2):stoch6 >= 70 ? (options.pColor3):stoch6 >= 60 ? (options.pColor4):stoch6 >= 50 ? (options.pColor5):stoch6 >= 40 ? (options.nColor5):stoch6 >= 30 ? (options.nColor4):stoch6 >= 20 ? (options.nColor3):stoch6 >= 10 ? (options.nColor2):stoch6 >= 5 ? (options.nColor1):options.bottomColor
var colour7 =  stoch7>=94 ? options.topColor:stoch7>=90? (options.pColor1):stoch7 >= 80 ? (options.pColor2):stoch7 >= 70 ? (options.pColor3):stoch7 >= 60 ? (options.pColor4):stoch7 >= 50 ? (options.pColor5):stoch7 >= 40 ? (options.nColor5):stoch7 >= 30 ? (options.nColor4):stoch7 >= 20 ? (options.nColor3):stoch7 >= 10 ? (options.nColor2):stoch7 >= 5 ? (options.nColor1):options.bottomColor
var colour8 =  stoch8>=94 ? options.topColor:stoch8>=90? (options.pColor1):stoch8 >= 80 ? (options.pColor2):stoch8 >= 70 ? (options.pColor3):stoch8 >= 60 ? (options.pColor4):stoch8 >= 50 ? (options.pColor5):stoch8 >= 40 ? (options.nColor5):stoch8 >= 30 ? (options.nColor4):stoch8 >= 20 ? (options.nColor3):stoch8 >= 10 ? (options.nColor2):stoch8 >= 5 ? (options.nColor1):options.bottomColor
var colour9 =  stoch9>=94 ? options.topColor:stoch9>=90? (options.pColor1):stoch9 >= 80 ? (options.pColor2):stoch9 >= 70 ? (options.pColor3):stoch9 >= 60 ? (options.pColor4):stoch9 >= 50 ? (options.pColor5):stoch9 >= 40 ? (options.nColor5):stoch9 >= 30 ? (options.nColor4):stoch9 >= 20 ? (options.nColor3):stoch9 >= 10 ? (options.nColor2):stoch9 >= 5 ? (options.nColor1):options.bottomColor
var colour10 = stoch10>=94 ? options.topColor:stoch10>=90? (options.pColor1):stoch10 >= 80 ? (options.pColor2):stoch10 >= 70 ? (options.pColor3):stoch10 >= 60 ? (options.pColor4):stoch10 >= 50 ? (options.pColor5):stoch10 >= 40 ? (options.nColor5):stoch10 >= 30 ? (options.nColor4):stoch10 >= 20 ? (options.nColor3):stoch10 >= 10 ? (options.nColor2):stoch10 >= 5 ? (options.nColor1):options.bottomColor
var colour11 = stoch11>=94 ? options.topColor:stoch11>=90? (options.pColor1):stoch11 >= 80 ? (options.pColor2):stoch11 >= 70 ? (options.pColor3):stoch11 >= 60 ? (options.pColor4):stoch11 >= 50 ? (options.pColor5):stoch11 >= 40 ? (options.nColor5):stoch11 >= 30 ? (options.nColor4):stoch11 >= 20 ? (options.nColor3):stoch11 >= 10 ? (options.nColor2):stoch11 >= 5 ? (options.nColor1):options.bottomColor
var colour12 = stoch12>=94 ? options.topColor:stoch12>=90? (options.pColor1):stoch12 >= 80 ? (options.pColor2):stoch12 >= 70 ? (options.pColor3):stoch12 >= 60 ? (options.pColor4):stoch12 >= 50 ? (options.pColor5):stoch12 >= 40 ? (options.nColor5):stoch12 >= 30 ? (options.nColor4):stoch12 >= 20 ? (options.nColor3):stoch12 >= 10 ? (options.nColor2):stoch12 >= 5 ? (options.nColor1):options.bottomColor
var colour13 = stoch13>=94 ? options.topColor:stoch13>=90? (options.pColor1):stoch13 >= 80 ? (options.pColor2):stoch13 >= 70 ? (options.pColor3):stoch13 >= 60 ? (options.pColor4):stoch13 >= 50 ? (options.pColor5):stoch13 >= 40 ? (options.nColor5):stoch13 >= 30 ? (options.nColor4):stoch13 >= 20 ? (options.nColor3):stoch13 >= 10 ? (options.nColor2):stoch13 >= 5 ? (options.nColor1):options.bottomColor
var colour14 = stoch14>=94 ? options.topColor:stoch14>=90? (options.pColor1):stoch14 >= 80 ? (options.pColor2):stoch14 >= 70 ? (options.pColor3):stoch14 >= 60 ? (options.pColor4):stoch14 >= 50 ? (options.pColor5):stoch14 >= 40 ? (options.nColor5):stoch14 >= 30 ? (options.nColor4):stoch14 >= 20 ? (options.nColor3):stoch14 >= 10 ? (options.nColor2):stoch14 >= 5 ? (options.nColor1):options.bottomColor
var colour15 = stoch15>=94 ? options.topColor:stoch15>=90? (options.pColor1):stoch15 >= 80 ? (options.pColor2):stoch15 >= 70 ? (options.pColor3):stoch15 >= 60 ? (options.pColor4):stoch15 >= 50 ? (options.pColor5):stoch15 >= 40 ? (options.nColor5):stoch15 >= 30 ? (options.nColor4):stoch15 >= 20 ? (options.nColor3):stoch15 >= 10 ? (options.nColor2):stoch15 >= 5 ? (options.nColor1):options.bottomColor
var colour16 = stoch16>=94 ? options.topColor:stoch16>=90? (options.pColor1):stoch16 >= 80 ? (options.pColor2):stoch16 >= 70 ? (options.pColor3):stoch16 >= 60 ? (options.pColor4):stoch16 >= 50 ? (options.pColor5):stoch16 >= 40 ? (options.nColor5):stoch16 >= 30 ? (options.nColor4):stoch16 >= 20 ? (options.nColor3):stoch16 >= 10 ? (options.nColor2):stoch16 >= 5 ? (options.nColor1):options.bottomColor
var colour17 = stoch17>=94 ? options.topColor:stoch17>=90? (options.pColor1):stoch17 >= 80 ? (options.pColor2):stoch17 >= 70 ? (options.pColor3):stoch17 >= 60 ? (options.pColor4):stoch17 >= 50 ? (options.pColor5):stoch17 >= 40 ? (options.nColor5):stoch17 >= 30 ? (options.nColor4):stoch17 >= 20 ? (options.nColor3):stoch17 >= 10 ? (options.nColor2):stoch17 >= 5 ? (options.nColor1):options.bottomColor
var colour18 = stoch18>=94 ? options.topColor:stoch18>=90? (options.pColor1):stoch18 >= 80 ? (options.pColor2):stoch18 >= 70 ? (options.pColor3):stoch18 >= 60 ? (options.pColor4):stoch18 >= 50 ? (options.pColor5):stoch18 >= 40 ? (options.nColor5):stoch18 >= 30 ? (options.nColor4):stoch18 >= 20 ? (options.nColor3):stoch18 >= 10 ? (options.nColor2):stoch18 >= 5 ? (options.nColor1):options.bottomColor
var colour19 = stoch19>=94 ? options.topColor:stoch19>=90? (options.pColor1):stoch19 >= 80 ? (options.pColor2):stoch19 >= 70 ? (options.pColor3):stoch19 >= 60 ? (options.pColor4):stoch19 >= 50 ? (options.pColor5):stoch19 >= 40 ? (options.nColor5):stoch19 >= 30 ? (options.nColor4):stoch19 >= 20 ? (options.nColor3):stoch19 >= 10 ? (options.nColor2):stoch19 >= 5 ? (options.nColor1):options.bottomColor
var colour20 = stoch20>=94 ? options.topColor:stoch20>=90? (options.pColor1):stoch20 >= 80 ? (options.pColor2):stoch20 >= 70 ? (options.pColor3):stoch20 >= 60 ? (options.pColor4):stoch20 >= 50 ? (options.pColor5):stoch20 >= 40 ? (options.nColor5):stoch20 >= 30 ? (options.nColor4):stoch20 >= 20 ? (options.nColor3):stoch20 >= 10 ? (options.nColor2):stoch20 >= 5 ? (options.nColor1):options.bottomColor
var colour21 = stoch21>=94 ? options.topColor:stoch21>=90? (options.pColor1):stoch21 >= 80 ? (options.pColor2):stoch21 >= 70 ? (options.pColor3):stoch21 >= 60 ? (options.pColor4):stoch21 >= 50 ? (options.pColor5):stoch21 >= 40 ? (options.nColor5):stoch21 >= 30 ? (options.nColor4):stoch21 >= 20 ? (options.nColor3):stoch21 >= 10 ? (options.nColor2):stoch21 >= 5 ? (options.nColor1):options.bottomColor
var colour22 = stoch22>=94 ? options.topColor:stoch22>=90? (options.pColor1):stoch22 >= 80 ? (options.pColor2):stoch22 >= 70 ? (options.pColor3):stoch22 >= 60 ? (options.pColor4):stoch22 >= 50 ? (options.pColor5):stoch22 >= 40 ? (options.nColor5):stoch22 >= 30 ? (options.nColor4):stoch22 >= 20 ? (options.nColor3):stoch22 >= 10 ? (options.nColor2):stoch22 >= 5 ? (options.nColor1):options.bottomColor
var colour23 = stoch23>=94 ? options.topColor:stoch23>=90? (options.pColor1):stoch23 >= 80 ? (options.pColor2):stoch23 >= 70 ? (options.pColor3):stoch23 >= 60 ? (options.pColor4):stoch23 >= 50 ? (options.pColor5):stoch23 >= 40 ? (options.nColor5):stoch23 >= 30 ? (options.nColor4):stoch23 >= 20 ? (options.nColor3):stoch23 >= 10 ? (options.nColor2):stoch23 >= 5 ? (options.nColor1):options.bottomColor
var colour24 = stoch24>=94 ? options.topColor:stoch24>=90? (options.pColor1):stoch24 >= 80 ? (options.pColor2):stoch24 >= 70 ? (options.pColor3):stoch24 >= 60 ? (options.pColor4):stoch24 >= 50 ? (options.pColor5):stoch24 >= 40 ? (options.nColor5):stoch24 >= 30 ? (options.nColor4):stoch24 >= 20 ? (options.nColor3):stoch24 >= 10 ? (options.nColor2):stoch24 >= 5 ? (options.nColor1):options.bottomColor
var colour25 = stoch25>=94 ? options.topColor:stoch25>=90? (options.pColor1):stoch25 >= 80 ? (options.pColor2):stoch25 >= 70 ? (options.pColor3):stoch25 >= 60 ? (options.pColor4):stoch25 >= 50 ? (options.pColor5):stoch25 >= 40 ? (options.nColor5):stoch25 >= 30 ? (options.nColor4):stoch25 >= 20 ? (options.nColor3):stoch25 >= 10 ? (options.nColor2):stoch25 >= 5 ? (options.nColor1):options.bottomColor
var colour26 = stoch26>=94 ? options.topColor:stoch26>=90? (options.pColor1):stoch26 >= 80 ? (options.pColor2):stoch26 >= 70 ? (options.pColor3):stoch26 >= 60 ? (options.pColor4):stoch26 >= 50 ? (options.pColor5):stoch26 >= 40 ? (options.nColor5):stoch26 >= 30 ? (options.nColor4):stoch26 >= 20 ? (options.nColor3):stoch26 >= 10 ? (options.nColor2):stoch26 >= 5 ? (options.nColor1):options.bottomColor
var colour27 = stoch27>=94 ? options.topColor:stoch27>=90? (options.pColor1):stoch27 >= 80 ? (options.pColor2):stoch27 >= 70 ? (options.pColor3):stoch27 >= 60 ? (options.pColor4):stoch27 >= 50 ? (options.pColor5):stoch27 >= 40 ? (options.nColor5):stoch27 >= 30 ? (options.nColor4):stoch27 >= 20 ? (options.nColor3):stoch27 >= 10 ? (options.nColor2):stoch27 >= 5 ? (options.nColor1):options.bottomColor
var colour28 = stoch28>=94 ? options.topColor:stoch28>=90? (options.pColor1):stoch28 >= 80 ? (options.pColor2):stoch28 >= 70 ? (options.pColor3):stoch28 >= 60 ? (options.pColor4):stoch28 >= 50 ? (options.pColor5):stoch28 >= 40 ? (options.nColor5):stoch28 >= 30 ? (options.nColor4):stoch28 >= 20 ? (options.nColor3):stoch28 >= 10 ? (options.nColor2):stoch28 >= 5 ? (options.nColor1):options.bottomColor

if (options.showHeatmap) {
  // brokenarea does not scale so we define the up & down limits of the indicator using line() 
  line(0, color=transparent)
  brokenarea({time: time, lowerValue: 0, higherValue: 1, color: colour1})
  brokenarea({time: time, lowerValue: 1, higherValue: 2, color: colour2})
  brokenarea({time: time, lowerValue: 2, higherValue: 3, color: colour3})
  brokenarea({time: time, lowerValue: 3, higherValue: 4, color: colour4})
  brokenarea({time: time, lowerValue: 4, higherValue: 5, color: colour5})
  brokenarea({time: time, lowerValue: 5, higherValue: 6, color: colour6})
  brokenarea({time: time, lowerValue: 6, higherValue: 7, color: colour7})
  brokenarea({time: time, lowerValue: 7, higherValue: 8, color: colour8})
  brokenarea({time: time, lowerValue: 8, higherValue: 9, color: colour9})
  brokenarea({time: time, lowerValue: 9, higherValue: 10, color: colour10})
  brokenarea({time: time, lowerValue: 10, higherValue:11, color: colour11})
  brokenarea({time: time, lowerValue: 11, higherValue: 12, color: colour12})
  brokenarea({time: time, lowerValue: 12, higherValue: 13, color: colour13})
  brokenarea({time: time, lowerValue: 13, higherValue: 14, color: colour14})
  brokenarea({time: time, lowerValue: 14, higherValue: 15, color: colour15})
  brokenarea({time: time, lowerValue: 15, higherValue: 16, color: colour16})
  brokenarea({time: time, lowerValue: 16, higherValue: 17, color: colour17})
  brokenarea({time: time, lowerValue: 17, higherValue: 18, color: colour18})
  brokenarea({time: time, lowerValue: 18, higherValue: 19, color: colour19})
  brokenarea({time: time, lowerValue: 19, higherValue: 20, color: colour20})
  brokenarea({time: time, lowerValue: 20, higherValue: 21, color: colour21})
  brokenarea({time: time, lowerValue: 21, higherValue: 22, color: colour22})
  brokenarea({time: time, lowerValue: 22, higherValue: 23, color: colour23})
  brokenarea({time: time, lowerValue: 23, higherValue: 24, color: colour24})
  brokenarea({time: time, lowerValue: 24, higherValue: 25, color: colour25})
  brokenarea({time: time, lowerValue: 25, higherValue: 26, color: colour26})
  brokenarea({time: time, lowerValue: 26, higherValue: 27, color: colour27})
  brokenarea({time: time, lowerValue: 27, higherValue: 28, color: colour28})
  line(28, color=transparent)
}

var avg = (stoch1 + stoch2 + stoch3 + stoch4 + stoch5 + stoch6 + stoch7 + stoch8 + stoch9 + stoch10 + stoch11 + stoch12 + stoch13 + stoch14 + stoch15 + stoch16 + stoch17 + stoch18 + stoch19 + stoch20 + stoch21 + stoch22 + stoch23 + stoch24 + stoch25 + stoch26 + stoch27 + stoch28) / 28
var barColour = avg > 94 ? options.topColor:avg>=90 ? (options.pColor1):avg >= 80 ? (options.pColor2):avg >= 70 ? (options.pColor3):avg >= 60 ? (options.pColor4):avg >= 50 ? (options.pColor5):avg >= 40 ? (options.nColor5):avg >= 30 ? (options.nColor4):avg >= 20 ? (options.nColor3):avg >= 10 ? (options.nColor2):avg >= 5 ? (options.nColor1):options.bottomColor

$price.color = barColour`,rc=`Stochastic Heat Map`,ic={imagePath:Zs,id:`shm`,displayName:Qs,createdAt:$s,options:ec,description:tc,script:nc,name:rc},ac=e({createdAt:()=>sc,default:()=>fc,displayName:()=>lc,imagePath:()=>oc,name:()=>cc,options:()=>dc,script:()=>uc}),oc=`indicators/aggr/sma.png`,sc=1623024000001,cc=`SMA {fastLength} {mediumLength} {slowLength}`,lc=`SMA 50 100 200`,uc=`line(sma($price.close, options.fastLength), color=options.fastColor)
line(sma($price.close, options.mediumLength), color=options.mediumColor)
line(sma($price.close, options.slowLength), color=options.slowColor)`,dc={priceScaleId:`right`,fastLength:50,mediumLength:100,slowLength:200,fastColor:`#42a5f5`,mediumColor:`#64b5f6`,slowColor:`#90caf9`},fc={imagePath:oc,createdAt:sc,name:cc,displayName:lc,script:uc,options:dc},pc=e({createdAt:()=>hc,default:()=>yc,imagePath:()=>mc,name:()=>vc,options:()=>gc,script:()=>_c}),mc=`indicators/aggr/smoothed-vwap-bands.png`,hc=16471734e5,gc={priceScaleId:`right`,showBands:!0,length:200,bandMultiplier:2,showClose:!0,showHLArea:!0,color:`rgb(255,255,255)`,higherLineColor:`rgb(41,98,255)`,lowerLineColor:`rgb(41,98,255)`,negativeColor:`rgba(41,98,255,0.2)`,positiveColor:`rgba(41,98,255,0.2)`},_c=`var vol = vbuy + vsell
var length = options.length || 200

var volSma = sma(vol, options.length)
var srcVolSmaClose = sma($price.close * vol, options.length)
var srcVolSmaHigh = sma($price.high * vol, options.length)
var srcVolSmaLow = sma($price.low * vol, options.length)
vwapHighClose = srcVolSmaClose / volSma 
vwapHighHigh = srcVolSmaHigh / volSma 
vwapHighLow = srcVolSmaLow / volSma 

if (options.showHLArea) {
  cloudarea(vwapHighHigh, vwapHighLow)
}

if (options.showClose) {
  line(vwapHighClose)
}

if (options.showBands) {
  var srcSrcVolSmaClose = sma(vol * Math.pow($price.close, 2), options.length)
  var srcSrcVolSmaHigh = sma(vol * Math.pow($price.high, 2), options.length)
  var srcSrcVolSmaLow = sma(vol * Math.pow($price.low, 2), options.length)
  var stDevHighClose = Math.sqrt(srcSrcVolSmaClose / volSma - Math.pow(vwapHighClose, 2))
  var stDevHighHigh = Math.sqrt(srcSrcVolSmaHigh / volSma - Math.pow(vwapHighHigh, 2))
  var stDevHighLow = Math.sqrt(srcSrcVolSmaLow / volSma - Math.pow(vwapHighLow, 2))

  if (options.showHLArea) {
    cloudarea(vwapHighLow - stDevHighLow * options.bandMultiplier, vwapHighHigh - stDevHighHigh * options.bandMultiplier)
    cloudarea(vwapHighLow + stDevHighLow * options.bandMultiplier, vwapHighHigh + stDevHighHigh * options.bandMultiplier)
  }

  if (options.showClose) {
    line(vwapHighClose - stDevHighClose * options.bandMultiplier)
    line(vwapHighClose + stDevHighClose * options.bandMultiplier)
  }
}`,vc=`Smoothed VWAP Bands`,yc={imagePath:mc,createdAt:hc,options:gc,script:_c,name:vc},bc=e({author:()=>Oc,createdAt:()=>wc,default:()=>Ac,description:()=>Dc,displayName:()=>Ec,enabled:()=>!0,imagePath:()=>xc,name:()=>kc,options:()=>Sc,script:()=>Cc,updatedAt:()=>Tc}),xc=`indicators/Robsn77/smoothheikinashi.png`,Sc={priceScaleId:`left`,priceFormat:{auto:!0,precision:1},priceLineVisible:!0,lastValueVisible:!0,borderVisible:!1,upColor:`rgb(59,202,109)`,downColor:`rgb(214,40,40)`,borderUpColor:`rgb(59,202,109)`,borderDownColor:`rgb(239,67,82)`,wickUpColor:`rgb(223,211,144)`,wickDownColor:`rgb(239,67,82)`,useGaps:!0,useHeikinAshi:!0,visible:!0,scaleMargins:{top:.38,bottom:.22},baseLineVisible:!0,smoothingLength:100},Cc=`// Optionen für die Glättung
smoothingLength = option(type=range, min=1, max=100, default=14, step=1); // Länge des gleitenden Durchschnitts

// Original-Heikin-Ashi-Daten berechnen
ha = avg_heikinashi(bar)
//line($price.close,colour=transparent)
// Glätten der Heikin-Ashi-Werte
smoothedOpen = ema(ha.open, smoothingLength)
smoothedHigh = ema(ha.high, smoothingLength)
smoothedLow = ema(ha.low, smoothingLength)
smoothedClose = ema(ha.close, smoothingLength)

// Glättete Heikin-Ashi-Kerzen plotten
plotcandlestick(
    smoothedOpen,
    smoothedHigh,
    smoothedLow,
    smoothedClose,
    color=smoothedClose > smoothedOpen ? 'green' : 'red' // Farbe: Grün für bullish, Rot für bearish
)`,wc=1623024000001,Tc=1733788087783,Ec=`SmoothHeikinAshi`,Dc=`Smoother HeikinAshi+Range`,Oc=`Robsn77`,kc=`SmoothHeikinAshi`,Ac={imagePath:xc,options:Sc,script:Cc,createdAt:wc,updatedAt:Tc,displayName:Ec,description:Dc,enabled:!0,author:Oc,name:kc},jc=e({author:()=>Hc,createdAt:()=>Lc,default:()=>Uc,description:()=>Bc,displayName:()=>zc,id:()=>Nc,imagePath:()=>Mc,name:()=>Pc,options:()=>Fc,pr:()=>Vc,script:()=>Ic,updatedAt:()=>Rc}),Mc=`indicators/aggr/td-sequential.png`,Nc=`td-sequential`,Pc=`TD Sequential`,Fc={priceScaleId:`right`,visible:!0},Ic=`// <STARTUP>
if (!pendingMarkers) {
  // runs only once
  markers = []
  pendingMarkers = []
  lastIndex = null

  upCount = 0
  downCount = 0
  upCountdown = 0
  downCountdown = 0
} else if (pendingMarkers.length) {
  markers = markers.concat(pendingMarkers)
  if (series[0].setMarkers) {
    series[0].setMarkers(markers)
  }
  pendingMarkers = []
}
if (bar.length === lastIndex) {
  // ignore same candle, only process previous candle on new candle
  return
}
// </STARTUP>

candlestick($price, border = false, upColor = transparent, downColor = transparent, wickColor = transparent) // ghost price for markers

times = time
close = $price.close
high = $price.high
low = $price.low
// only analyze bar once it's already printed
// this why we offset everything by 1
var currentTime = times[1]
var currentClose = close[1]
var currentHigh = high[1]
var currentLow = low[1]
var closeCompare = close[5]
var highCompare = high[3]
var lowCompare = low[3]

if (!downCountdown && !upCountdown) {
  if (currentClose >= closeCompare) {
    upCount = upCount + 1
    downCount = 0

    if (upCount === 9) {
      pendingMarkers.push({
        time: currentTime,
        position: 'aboveBar',
        color: 'red',
        text: upCount.toString(),
      })
      upCount = 0
      upCountdown = 1
    }
  } else if (currentClose <= closeCompare) {
    downCount = downCount + 1
    upCount = 0

    if (downCount === 9) {
      pendingMarkers.push({
        time: currentTime,
        position: 'belowBar',
        color: 'red',
        text: downCount.toString(),
      })
      downCount = 0
      downCountdown = 1
    }
  }
}

if (upCountdown > 0) {
  if (currentClose > highCompare) {
    upCountdown = upCountdown + 1
  }

  if (upCountdown === 13) {
    pendingMarkers.push({
      time: currentTime,
      position: 'aboveBar',
      color: 'red',
      text: '🔻',
    })
    upCountdown = 0
  }
} else if (downCountdown > 0) {
  if (currentClose < lowCompare) {
    downCountdown = downCountdown + 1
  }

  if (downCountdown === 13) {
    pendingMarkers.push({
      time: currentTime,
      position: 'belowBar',
      color: 'red',
      text: '🔺',
    })
    downCountdown = 0
  }
}

lastIndex = bar.length`,Lc=1704847309933,Rc=1704938931039,zc=`TD Sequential`,Bc=`Tom DeMark`,Vc=`https://github.com/Tucsky/aggr-lib/pull/5`,Hc=`aggr`,Uc={imagePath:Mc,id:Nc,name:Pc,options:Fc,script:Ic,createdAt:Lc,updatedAt:Rc,displayName:zc,description:Bc,pr:Vc,author:Hc},Wc=e({default:()=>Xc,description:()=>qc,imagePath:()=>Gc,name:()=>Kc,options:()=>Yc,script:()=>Jc}),Gc=`/indicator-previews/total-quant.svg`,Kc=`Total Quant {label}`,qc=`One directional-pressure score from -100 to +100; positive is bullish pressure and negative is bearish pressure, not a price target or probability. C = half the difference between spot and perpetual net-buy fractions over N bars (inverse perps included). D = recent net-buy fraction. L = resting bid/ask imbalance or bounded change in net standing depth (CDD). P = (wC*C + wD*D + wL*L) / available weight. O = clipped percentage OI change over N bars / sensitivity. Raw = clip(100*P*(1 + OI strength*O*sign(P*price change)), -100, 100); the final curve uses EMA smoothing. Rising OI confirms either bullish or bearish pressure when price agrees. Falling OI can describe covering/unwinding and never changes direction on its own. CVD compares relative buying pressure, not raw venue size; delta is a correlated faster input. Book size can be canceled and is not executed flow. OI uses the supplied units, including price effects in quote-valued OI. Full lookback required; settings use chart bars. Available-input mode skips missing components; strict mode requires all enabled inputs. Default weights are research starting values, not fitted or backtested predictive claims.`,Jc=`title = option(default="Total Quant", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Histogram", "Broken area"], rebuild=true, label="Display")
lookback = option(default=20, min=1, max=500, step=1, type=number, rebuild=true, label="CVD / confirmation lookback (bars)")
deltaLookback = option(default=3, min=1, max=500, step=1, type=number, rebuild=true, label="Trade delta lookback (bars)")
smoothing = option(default=3, min=1, max=100, step=1, type=number, rebuild=true, label="Score smoothing (bars)")
cvdWeight = option(default=3, min=0, max=10, step=0.25, type=number, rebuild=true, label="Spot/perp CVD weight")
deltaWeight = option(default=1, min=0, max=10, step=0.25, type=number, rebuild=true, label="Trade delta weight", description="Recent buy-minus-sell quote turnover. This overlaps CVD, so its default weight is smaller.")
bookWeight = option(default=1, min=0, max=10, step=0.25, type=number, rebuild=true, label="Liquidity weight")
bookMode = option(default="Resting imbalance", type=list, options=["Resting imbalance", "CDD change"], rebuild=true, label="Liquidity input", description="Resting: (bid-ask)/(bid+ask). CDD change: change in net standing depth over the lookback, divided by current plus previous total depth. Neither measures executed flow.")
oiWeight = option(default=0.35, min=0, max=1, step=0.05, type=number, rebuild=true, label="OI confirmation strength", description="Maximum proportional boost or reduction. OI never selects direction or flips the raw score. Set zero to disable.")
oiScalePct = option(default=1, min=0.01, max=100, step=0.1, type=number, rebuild=true, label="OI change for full confirmation (%)", description="OI change over the lookback. Growth strengthens pressure aligned with price and weakens pressure against price. Declining OI reverses that adjustment; covering can remain bullish. Quote-valued OI also reflects valuation changes.")
missingMode = option(default="Available inputs", type=list, options=["Available inputs", "Require enabled inputs"], rebuild=true, label="Missing data", description="Available inputs renormalizes the weights of measured components and skips missing OI. Strict mode leaves a gap if any enabled component is missing. Zero weights disable components.")
upColor = option(default="#26a69a", type=color, label="Positive color")
downColor = option(default="#ef5350", type=color, label="Negative color")

// Dimensionless scores in [-1, 1]. CVD uses changes, never absolute cumulative offsets.
var n = Math.max(1, Math.min(500, Math.round(options.lookback)))
var fast = Math.max(1, Math.min(500, Math.round(options.deltaLookback)))
var smooth = Math.max(1, Math.min(100, Math.round(options.smoothing)))
var sb = source(vbuy, type=spot)
var ss = source(vsell, type=spot)
var pb = source(vbuy, type=perp) + source(vbuy, type=inverse)
var ps = source(vsell, type=perp) + source(vsell, type=inverse)
// Each side needs observed turnover in the window, independently of index price participation.
var cvdValid = isFinite(sb) && isFinite(ss) && isFinite(pb) && isFinite(ps) && sb >= 0 && ss >= 0 && pb >= 0 && ps >= 0
// Zero below is only rolling-window bookkeeping: validity prevents missing flow becoming a signal.
var cvdSamples = sum(cvdValid ? 1 : 0, n)
var spotFlow = sum(cvdValid ? sb - ss : 0, n)
var spotVolume = sum(cvdValid ? sb + ss : 0, n)
var perpFlow = sum(cvdValid ? pb - ps : 0, n)
var perpVolume = sum(cvdValid ? pb + ps : 0, n)
var cvdScore = cvdSamples >= n && spotVolume > 0 && perpVolume > 0 ? (spotFlow / spotVolume - perpFlow / perpVolume) / 2 : NaN
var deltaValid = isFinite(vbuy) && isFinite(vsell) && vbuy >= 0 && vsell >= 0
var deltaSamples = sum(deltaValid ? 1 : 0, fast)
var tradeFlow = sum(deltaValid ? vbuy - vsell : 0, fast)
var tradeVolume = sum(deltaValid ? vbuy + vsell : 0, fast)
var deltaScore = deltaSamples >= fast && tradeVolume > 0 ? tradeFlow / tradeVolume : NaN

// Standing depth is a snapshot; summing it across bars would invent liquidity.
var bookValid = isFinite(dbuy) && isFinite(dsell) && dbuy >= 0 && dsell >= 0 && dbuy + dsell > 0
netDepth(501) = bookValid ? dbuy - dsell : NaN
totalDepth(501) = bookValid ? dbuy + dsell : NaN
interest(501) = isFinite(oi) && oi > 0 ? oi : NaN
price(501) = close
clock(501) = time
var bookScore = bookValid ? netDepth / totalDepth : NaN
if (options.bookMode === "CDD change") bookScore = bookValid && isFinite(netDepth[n]) && totalDepth[n] > 0 ? (netDepth - netDepth[n]) / (totalDepth + totalDepth[n]) : NaN
var oiScore = interest > 0 && interest[n] > 0 ? Math.max(-1, Math.min(1, (interest / interest[n] - 1) * 100 / Math.max(0.01, options.oiScalePct))) : NaN
var priceMove = price > 0 && price[n] > 0 ? price / price[n] - 1 : NaN

var wc = Math.max(0, options.cvdWeight)
var wd = Math.max(0, options.deltaWeight)
var wb = Math.max(0, options.bookWeight)
var wo = Math.max(0, Math.min(1, options.oiWeight))
var weight = 0
var weighted = 0
if (wc > 0 && isFinite(cvdScore)) { weighted += wc * cvdScore; weight += wc }
if (wd > 0 && isFinite(deltaScore)) { weighted += wd * deltaScore; weight += wd }
if (wb > 0 && isFinite(bookScore)) { weighted += wb * bookScore; weight += wb }
var span = Math.max(n, fast)
var ready = bar.length >= span && isFinite(clock[span]) && Math.abs(time - clock[span] - span * bar.timeframe) < 0.001
var oiValid = isFinite(oiScore) && isFinite(priceMove)
if (options.missingMode === "Require enabled inputs" && ((wc > 0 && !isFinite(cvdScore)) || (wd > 0 && !isFinite(deltaScore)) || (wb > 0 && !isFinite(bookScore)) || (wo > 0 && !oiValid))) ready = false
var pressure = weight > 0 ? weighted / weight : NaN
var agreement = pressure * priceMove
var alignment = oiValid ? (agreement > 0 ? 1 : agreement < 0 ? -1 : 0) : 0
var confirmation = wo > 0 && oiValid ? 1 + wo * oiScore * alignment : 1
var raw = ready && weight > 0 ? Math.max(-100, Math.min(100, 100 * pressure * confirmation)) : NaN
// Reset smoothing at a gap. Repeated forming-bar previews use the completed predecessor.
quantScore = isFinite(raw) ? (isFinite(quantScore[1]) ? quantScore[1] + 2 / (smooth + 1) * (raw - quantScore[1]) : raw) : NaN
var pointColor = quantScore >= 0 ? options.upColor : options.downColor
if (options.displayMode === "Line") line({time:time, value:quantScore, color:pointColor}, title=options.title, priceScaleId="own", id="total_quant_line")
else if (options.displayMode === "Histogram") histogram({time:time, value:quantScore, color:pointColor}, title=options.title, priceScaleId="own", id="total_quant_histogram")
else brokenarea({time:time, lowerValue:0, higherValue:quantScore, color:pointColor}, title=options.title, priceScaleId="own", id="total_quant_area")
`,Yc={priceScaleId:`total-quant`,title:`Total Quant`,label:``,displayMode:`Line`,lookback:20,deltaLookback:3,smoothing:3,cvdWeight:3,deltaWeight:1,bookWeight:1,bookMode:`Resting imbalance`,oiWeight:.35,oiScalePct:1,missingMode:`Available inputs`,upColor:`#26a69a`,downColor:`#ef5350`,color:`#26a69a`,lineWidth:2,priceFormat:{type:`price`,precision:1,minMove:.1},scaleMargins:{top:.1,bottom:.1},lastValueVisible:!0,priceLineVisible:!1},Xc={imagePath:Gc,name:Kc,description:qc,script:Jc,options:Yc},Zc=e({author:()=>al,default:()=>ol,description:()=>il,displayName:()=>rl,id:()=>$c,imagePath:()=>Qc,name:()=>el,options:()=>tl,script:()=>nl}),Qc=`/indicator-previews/vertical-3min-markers.svg`,$c=`vertical-3min-markers`,el=`Vertical 3-min Markers`,tl={priceScaleId:`right`,visible:!0,lastValueVisible:!1,priceLineVisible:!1,baseLineVisible:!1,markerColor:`rgba(255,255,255,0.35)`},nl=`var price = $price;
var is3min = (Math.floor(time / 60) % 3) === 0;
if (is3min) {
  // "navpična črta" = zelo ozek pas (širina 1 bara)
  // preko celotne višine grafa
  brokenarea(
    price.close - price.close,
    price.close + price.close,
    strokeWidth = 1,
    strokeColor = (options.markerColor || "rgba(255,255,255,0.35)")
  );
}
`,rl=`Vertical 3-min Markers`,il=`Draws a thin vertical line every 3 minutes. Best used on 1m charts.`,al=`tr20dr-prog`,ol={imagePath:Qc,id:$c,name:el,options:tl,script:nl,displayName:rl,description:il,author:al},sl=e({author:()=>gl,createdAt:()=>dl,default:()=>vl,description:()=>ml,displayName:()=>pl,imagePath:()=>cl,name:()=>_l,options:()=>ll,pr:()=>hl,script:()=>ul,updatedAt:()=>fl}),cl=`indicators/aggr/volume-delta-avg.png`,ll={priceScaleId:`_8x3g8odw7u9j6jx5`,priceFormat:{type:`volume`},upColor:`rgb(82,209,88)`,downColor:`rgb(242,54,69)`,scaleMargins:{top:.8,bottom:0},showDelta:!0,upBgColor:`rgba(65,240,123,0.5)`,downBgColor:`rgba(49,121,245,0.5)`,visible:!0,length:14,smoothLength:3,avgLength:4,veryDownColor:`rgb(128,25,34)`},ul=`avgLength = option(default=4)
smoothLength = option(default=3)
veryUpColor = option(type=color,default=rgb(255,255,0))
upColor = option(type=color,default=rgb(82,209,88))
downColor = option(type=color,default=rgb(242,54,69))
veryDownColor = option(type=color,default=rgb(128,25,34))

var delta = vbuy - vsell;  // delta in USD
var avgDelta = sma(vbuy - vsell, avgLength);  // average delta over 'avgLength' bars

// Ensure avgDelta is positive for stable division and add a small epsilon to avoid division by zero
avgDelta = Math.abs(avgDelta) + Number.EPSILON;

// Adjusted normalization to include a smoothing factor (k)
var k = 0.5;  // Smoothing constant, adjust based on desired sensitivity
var normalized_delta = (delta / (2 * avgDelta * k) + 0.5);

// Smoothed ratio calculation to reduce extremes
// Using Math.max and Math.min to ensure the ratio stays between 0 and 1
var smoothed_ratio = Math.max(0, Math.min(1, normalized_delta));

// Apply a simple moving average (SMA) or exponential moving average (EMA) for further smoothing
// 'smoothing_length' defines the period for the moving average
var smoothed_ratio_sma = sma(smoothed_ratio, smoothLength);
histogram({
  time: time,
  value: vbuy + vsell,
  color: interpolate(smoothed_ratio_sma, veryDownColor, downColor, upColor, veryUpColor)
})`,dl=1708780055899,fl=1709483301384,pl=`VOL Δ Avg`,ml=`The Dynamic Volume Delta Histogram Indicator is an advanced tool designed for financial market analysis, providing traders with a vivid visualization of volume dynamics. This indicator displays the volume of the current bar while utilizing a color-coded system to represent the normalized volume delta.

By calculating the difference between buy (vbuy) and sell (vsell) volumes, termed as 'delta', and then smoothing this value over a user-defined average length (avgLength), the indicator offers a clear and customizable view of market sentiment. The normalization process adjusts the delta by a smoothing factor (k), ensuring the ratio is stabilized and falls between 0 and 1. The final smoothed ratio is then depicted as a histogram, which changes color according to the magnitude of volume change: from 'veryDownColor' for significant sell volumes, 'downColor' for moderate sells, 'upColor' for moderate buys, to 'veryUpColor' for substantial buy volumes.

This indicator is ideal for traders who need to quickly assess market volume and sentiment changes. By integrating both a simple moving average (SMA) and an exponential moving average (EMA) for additional smoothing, the Dynamic Volume Delta Histogram Indicator minimizes noise and highlights true market trends.`,hl=`https://github.com/Tucsky/aggr-lib-test/pull/7`,gl=`aggr`,_l=`VOL Δ Avg`,vl={imagePath:cl,options:ll,script:ul,createdAt:dl,updatedAt:fl,displayName:pl,description:ml,pr:hl,author:gl,name:_l},yl=e({author:()=>Ol,createdAt:()=>Tl,default:()=>Al,displayName:()=>Sl,imagePath:()=>bl,libraryId:()=>xl,name:()=>kl,options:()=>Cl,presets:()=>Dl,script:()=>wl,updatedAt:()=>El}),bl=`/indicator-previews/volume-delta.svg`,xl=`volume-delta`,Sl=`Volume Delta`,Cl={priceScaleId:`_9xmhdhmj2pf5zrgv`,scaleMargins:{top:.1,bottom:.2},exchange:0,type:0,chartTitle:``},wl=`// Options //

// Filters
exchange = option(default=null, type=exchange, rebuild=true)
type = option(default=null, type=list, options=["spot", "perp"], rebuild=true)

// Chart
chartTitle = option(default="Delta", type=text, rebuild=true)
upColor = option(default="#42bda8", type=color, rebuild=true)
downColor = option(default="#f77c80", type=color, rebuild=true)

// Get Filtered Sources //
var src = source(type=type, exchange=exchange)

// Calculate Volume Delta //
var delta = 0

for (const [key, value] of Object.entries(src.sources)) {
  delta = delta + value.vbuy - value.vsell
}

// Get Color //
var chartColor = delta > 0 ? upColor : downColor

// Plot Delta //
 histogram(
  {
    value: delta,
    time: time,
    color: chartColor
  },
  title = chartTitle
)`,Tl=1729970010068,El=1729970046285,Dl=[],Ol=`chriselderxyz`,kl=`Volume Delta`,Al={imagePath:bl,libraryId:xl,displayName:Sl,options:Cl,script:wl,createdAt:Tl,updatedAt:El,presets:Dl,author:Ol,name:kl},jl=e({default:()=>Rl,description:()=>Fl,enabled:()=>!0,id:()=>Nl,imagePath:()=>Ml,name:()=>Pl,options:()=>Ll,script:()=>Il}),Ml=`/indicator-previews/volume_profile.svg`,Nl=`ensox/volume_profile`,Pl=`Visible Range Volume Profile`,Fl=`Volume and delta from visible chart candles, including loaded history and live updates. Candle volume is distributed across each candle's price range.`,Il=`showValueArea = option(default=true, type=checkbox, label="Show Value Area", description="Highlight the price area containing 70% of profile volume. Disable to keep buy and sell colors throughout.")
showDelta = option(default=true, type=checkbox, label="Delta Bars", description="Draw buy-minus-sell delta from the opposite side of the profile baseline.")
opacity = option(default=0.85, type=range, min=0.05, max=1, step=0.05, label="Opacity", description="Profile opacity.")
profileWidth = option(default=0.2, type=range, min=0.05, max=0.4, step=0.01, label="Profile Width", description="Maximum chart width used by the total-volume side.")
deltaWidth = option(default=0.06, type=range, min=0.02, max=0.3, step=0.01, label="Delta Width", description="Maximum chart width used independently by the delta side.")
profileOffset = option(default=0.01, type=range, min=0, max=0.3, step=0.01, label="Profile Offset", description="Space from the right price scale. Increase to move the complete histogram left; decrease to move it right.")
upColor = option(default=rgba(41,98,255,1), type=color, label="Buy Color")
downColor = option(default=rgba(239,83,80,1), type=color, label="Sell Color")
valueColor = option(default=rgba(255,255,255,0.95), type=color, label="Value Area Color")
pocColor = option(default=rgba(255,255,255,1), type=color, label="POC Color")
deltaUpColor = option(default=rgba(38,166,154,1), type=color, label="Positive Delta Color")
deltaDownColor = option(default=rgba(239,83,80,1), type=color, label="Negative Delta Color")
profile({ showValueArea: showValueArea, rangeMode: "Visible Range", showDelta: showDelta, opacity: opacity, profileWidth: profileWidth, deltaWidth: deltaWidth, profileOffset: profileOffset, upColor: upColor, downColor: downColor, valueColor: valueColor, pocColor: pocColor, deltaUpColor: deltaUpColor, deltaDownColor: deltaDownColor })`,Ll={priceScaleId:`right`,visible:!0,rangeMode:`Visible Range`,showDelta:!0,showValueArea:!0,opacity:.85,profileWidth:.2,deltaWidth:.06,profileOffset:.01,upColor:`rgba(41,98,255,1)`,downColor:`rgba(239,83,80,1)`,valueColor:`rgba(255,255,255,0.95)`,pocColor:`rgba(255,255,255,1)`,deltaUpColor:`rgba(38,166,154,1)`,deltaDownColor:`rgba(239,83,80,1)`},Rl={imagePath:Ml,id:Nl,enabled:!0,name:Pl,description:Fl,script:Il,options:Ll},zl=e({createdAt:()=>Vl,default:()=>Gl,imagePath:()=>Bl,name:()=>Wl,options:()=>Hl,script:()=>Ul}),Bl=`indicators/aggr/vwap-bands.png`,Vl=16471734e5,Hl={priceScaleId:`right`,stdevMultiplier:1.5,stdevSecondaryMultiplier:2,buyBgColor:`rgba(255,255,255,0.15)`,buyColor:`rgba(255,255,255,0.47)`,sellBgColor:`rgba(255,255,255,0.15)`,sellColor:`rgba(255,255,255,0.55)`,dblBuyBgColor:`rgba(255,255,255,0.15)`,dblBuyColor:`rgba(255,255,255,0.5)`,dblSellBgColor:`rgba(255,255,255,0.15)`,dblSellColor:`rgba(255,255,255,0.53)`,length:100,showDouble:!0},Ul=`var price = $price
var src = (price.high + price.low + price.close)/3

var sumSell = sum(vsell, options.length)
var sumSrcSell = sum(src * vsell, options.length)
var sumSrcSrcSell = sum(vsell*Math.pow(src, 2), options.length)
var VWAPSell = sumSrcSell / sumSell 
var varianceSell = sumSrcSrcSell / sumSell - Math.pow(VWAPSell, 2)
var stDevSell = Math.sqrt(varianceSell < 0 ? 0 : varianceSell)
var sumBuy = sum(vbuy, options.length)
var sumSrcBuy = sum(src * vbuy, options.length)
var sumSrcSrcBuy = sum(vbuy*Math.pow(src, 2), options.length)
var VWAPBuy = sumSrcBuy / sumBuy 
var varianceBuy = sumSrcSrcBuy / sumBuy - Math.pow(VWAPBuy, 2)
var stDevBuy = Math.sqrt(varianceBuy < 0 ? 0 : varianceBuy)

var thresholdDown = VWAPBuy - stDevBuy * options.stdevMultiplier
var thresholdUp = VWAPSell + stDevSell * options.stdevMultiplier

cloudarea(
  VWAPSell - stDevSell * options.stdevMultiplier,
  thresholdDown,
  positiveColor=options.buyBgColor,
  negativeColor=options.buyBgColor,
  higherLineColor=options.buyColor,
  lowerLineColor=options.buyColor)

cloudarea(thresholdUp,
  VWAPBuy + stDevBuy * options.stdevMultiplier,
  positiveColor=options.sellBgColor,
  negativeColor=options.sellBgColor,
  higherLineColor=options.sellColor,
  lowerLineColor=options.sellColor)

var na = { time: time }

if (options.showDouble) {
  cloudarea(
    VWAPSell - stDevSell * options.stdevSecondaryMultiplier,
    thresholdDown,
    positiveColor=options.dblBuyBgColor,
    negativeColor=options.dblBuyBgColor,
    higherLineColor=options.dblBuyColor,
    lowerLineColor=options.dblBuyColor
  )
  
  cloudarea(
   thresholdUp,
   VWAPBuy + stDevBuy * options.stdevSecondaryMultiplier,
    positiveColor=options.dblSellBgColor,
    negativeColor=options.dblSellBgColor,
    higherLineColor=options.dblSellColor,
    lowerLineColor=options.dblSellColor
  )
}`,Wl=`VWAP Bands {length}`,Gl={imagePath:Bl,createdAt:Vl,options:Hl,script:Ul,name:Wl},Kl=e({createdAt:()=>Jl,default:()=>Ql,imagePath:()=>ql,name:()=>Xl,options:()=>Zl,script:()=>Yl}),ql=`indicators/aggr/vwap.png`,Jl=1647173400001,Yl=`var src = ($price.high + $price.low + $price.close)/3
var vol=vbuy+vsell
var sumVol = cum(vol)
var sumSrcVol = cum(src * vol)
var sumSrcSrcVol = cum(vol*Math.pow(src, 2))
var VWAP = sumSrcVol / sumVol 
var variance = sumSrcSrcVol / sumVol - Math.pow(VWAP, 2)
var stDev = Math.sqrt(variance < 0 ? 0 : variance)
	
line(VWAP)
cloudarea(VWAP - stDev * options.stdevMultiplier, VWAP + stDev * options.stdevMultiplier)

var unixDays = bar.timestamp / 60 / 60 / 24 + 3
if (unixDays % (options.sessionLengthInDays) === 0) {
  fns[0].state = {}
  fns[1].state = {}
  fns[2].state = {}
}`,Xl=`VWAP`,Zl={priceScaleId:`right`,stdevMultiplier:1,color:`rgb(41,98,255)`,sessionLengthInDays:7},Ql={imagePath:ql,createdAt:Jl,script:Yl,name:Xl,options:Zl},$l=e({default:()=>iu,description:()=>nu,imagePath:()=>eu,name:()=>tu,options:()=>$,script:()=>ru}),eu=`/indicator-previews/windowed-osc.svg`,tu=`Windowed OSC {label}`,nu=`Recent relative spot/perpetual CVD pressure, calculated by the same Zig kernel as strategy variant 6. Contributions fade linearly and expire within the pressure window. Requires one complete window of preceding history; gaps restart warm-up. The selected chart sampling is used.`,ru=`label = option(default="", type=text, label="Custom label")
windowSeconds = option(default=3600, min=60, type=number, rebuild=true, label="Pressure window (seconds)")
var spotDelta = source(vbuy, type=spot) - source(vsell, type=spot)
var perpDelta = (vbuy - vsell) - spotDelta
var pressure = windowed_osc(spotDelta, perpDelta, options.windowSeconds)
if (isFinite(pressure)) line(pressure, color=options.color, title="Windowed OSC", priceScaleId="windowed-osc", id="windowed_osc")`,$={priceScaleId:`windowed-osc`,color:`#ffb74d`,lineWidth:2,windowSeconds:3600,label:``,lastValueVisible:!0,scaleMargins:{top:.1,bottom:.1}},iu={imagePath:eu,name:tu,description:nu,script:ru,options:$},au=[`heatmap`,`liquidity_heatmap`,`native_liquidation_heatmap`,`liquidity_map`,`trade_bubbles`,`trade_price_bubbles`,`bubbles_2`,`bubbles_3`,`liquidity_liquidation_map`,`ensox/liquidity_liquidation_map`,`vwap-stdevmultiplier`],ou=`https://lib.aggr.trade/`,su=Object.assign({"./all-markets.json":oe,"./alternating-periods-backgrounds.json":ce,"./bb-ribbon.json":ue,"./bollinger-bands.json":fe,"./book-flow-osc.json":he,"./candle_volume_bubbles.json":_e,"./candleclose4hrn30min.json":ye,"./chandelier-exit.json":xe,"./cld.json":Ae,"./ctd.json":Re,"./cvd.json":ne,"./delta-divs.json":Ke,"./delta.json":rt,"./depth-delta.json":ft,"./depth.json":yt,"./ema-value-backend.json":Et,"./ema.json":n,"./engine-cvd_perp.json":Nt,"./engine-cvd_spot.json":Bt,"./engine-emas.json":qt,"./engine-enso_osc.json":en,"./engine-oi.json":cn,"./engine-oi_normalized.json":hn,"./engine-price_position.json":Sn,"./equity.json":kn,"./executions.json":Ln,"./fibonacci-grid.json":Gn,"./fibonacci-retracement.json":ir,"./fixed_range_volume_profile.json":gr,"./footprint.json":wr,"./funding.json":t,"./heatmaps.json":Pr,"./hybrid-cdd-normalized.json":Wr,"./hybrid-cdd.json":Zr,"./hybrid-cld-normalized.json":ii,"./hybrid-cvd-divergence.json":di,"./hybrid-oi-normalized.json":vi,"./hybrid-osc.json":Ti,"./hybrid-price-position.json":Mi,"./hybrid-tps-normalized.json":Ri,"./ichimoku.json":Gi,"./indicator_EMA (backend).json":Qi,"./indicator_Price+be_trades.json":la,"./liquidation_density.json":ba,"./liquidation_levels.json":ka,"./liquidations.json":re,"./long-short-ratio.json":Va,"./macd.json":Ja,"./mfi.json":no,"./mm-equity.json":uo,"./mondays.json":yo,"./obv-spots.json":jo,"./obv.json":Ho,"./oi.json":ie,"./orderbook_profile.json":ae,"./powerlaw.json":Xo,"./price.json":te,"./pvsra.json":as,"./redZone.json":_s,"./replay-line.json":ks,"./rsi.json":Is,"./score.json":Hs,"./shm.json":Xs,"./sma.json":ac,"./smoothed-vwap-bands.json":pc,"./smoothheikinashi.json":bc,"./td-sequential.json":jc,"./total-quant.json":Wc,"./vertical-3min-markers.json":Zc,"./volume-delta-avg.json":sl,"./volume-delta.json":yl,"./volume.json":ee,"./volume_profile.json":jl,"./vwap-bands.json":zl,"./vwap.json":Kl,"./windowed-osc.json":$l});function cu(){let e={};for(let[t,ee]of Object.entries(su)){let n=t.slice(2,-5);e[n]={...ee.default,id:n}}return e}export{au as n,cu as r,ou as t};