import{n as e}from"./chunk-DECur_0Z.js";var t=e({default:()=>o,enabled:()=>!0,imagePath:()=>n,name:()=>r,options:()=>a,script:()=>i}),n=`indicators/aggr/price.png`,r=`Price`,i=`priceStyle = option(default="Candles", type=list, options=["Candles", "Hollow candles", "Heikin Ashi", "Line", "Baseline", "Histogram"], rebuild=true, label="Price style")
var ohlc = options.priceStyle === "Heikin Ashi" ? avg_heikinashi(bar) : options.useGaps ? avg_ohlc_with_gaps(bar) : avg_ohlc(bar)
plotcandlestick(ohlc, seriesType=["Line", "Baseline", "Histogram"].includes(options.priceStyle) ? options.priceStyle : "Candlestick", hollow=options.priceStyle === "Hollow candles")`,a={priceScaleId:`right`,priceFormat:{auto:!0,precision:1},priceLineVisible:!0,lastValueVisible:!0,borderVisible:!0,upColor:`rgb(59,202,109)`,downColor:`rgb(214,40,40)`,borderUpColor:`rgb(59,202,109)`,borderDownColor:`rgb(239,67,82)`,wickUpColor:`rgb(223,211,144)`,wickDownColor:`rgb(239,67,82)`,useGaps:!1,priceStyle:`Candles`},o={imagePath:n,enabled:!0,name:r,script:i,options:a},s=e({default:()=>p,description:()=>u,enabled:()=>!0,imagePath:()=>c,name:()=>l,options:()=>f,script:()=>d}),c=`indicators/aggr/volume.png`,l=`Volume`,u=`Buy and sell notional volume, total, and optional absolute buy-minus-sell delta. Coinalyze base quantities are valued at candle close.`,d=`line(vbuy, visible=false, priceLineVisible=false, lastValueVisible=false, legend="b", id="volume_buy")
line(vsell, visible=false, priceLineVisible=false, lastValueVisible=false, legend="s", id="volume_sell")
line(vbuy-vsell, visible=false, priceLineVisible=false, lastValueVisible=false, legend="Δ", id="volume_signed_delta")
if (options.showDelta) {
  histogram({time:time, value:Math.abs(vbuy-vsell), color:vbuy > vsell ? options.upColor : options.downColor}, legend=false, id="volume_delta")
}
histogram({time:time, value:vbuy + vsell, color:vbuy > vsell ? (options.showDelta ? options.upBgColor : options.upColor) : (options.showDelta ? options.downBgColor : options.downColor)}, legend=false, id="volume_total")`,f={priceFormat:{type:`volume`},upColor:`rgb(59,202,109)`,downColor:`rgb(235,30,47)`,priceScaleId:`volume`,scaleMargins:{top:.84,bottom:0},showDelta:!0,upBgColor:`rgba(59,202,109,0.5)`,downBgColor:`rgba(235,30,47,0.5)`},p={imagePath:c,enabled:!0,name:l,description:u,script:d,options:f},m=e({default:()=>x,description:()=>v,enabled:()=>!0,id:()=>g,imagePath:()=>h,name:()=>_,options:()=>b,script:()=>y}),h=`/indicator-previews/oi.svg`,g=`ensox/oi`,_=`Open Interest {label}`,v=`Open interest in USD, summed across selected markets. Each source contributes its latest observed value; unavailable sources do not erase other contributions. Choose lines or candles; this is not the normalized OI oscillator.`,y=`title = option(default="Open Interest", type=text, label="Price-axis label")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
if (options.displayMode === "Line") {
  if (isFinite(oi)) line(oi, color=options.color, title=options.title, id="oi_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(oi)) candlestick(ohlc(oi), title=options.title, id="oi_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(oi)) baseline(oi, topLineColor=options.color, bottomLineColor=options.color, title=options.title, id="oi_baseline")
} else {
  if (isFinite(oi)) histogram({time:time, value:oi, color:oi >= 0 ? options.upColor : options.downColor}, title=options.title, id="oi_histogram")
}`,b={priceFormat:{type:`volume`,precision:2},priceScaleId:`oi_pane`,color:`#26a69a`,lineWidth:1.5,scaleMargins:{top:.08,bottom:.08},displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,borderVisible:!1,label:``,title:`Open Interest`,lastValueVisible:!0},x={imagePath:h,id:g,enabled:!0,name:_,description:v,script:y,options:b},S=e({default:()=>k,description:()=>E,enabled:()=>!0,id:()=>w,imagePath:()=>C,name:()=>T,options:()=>O,script:()=>D}),C=`/indicator-previews/funding.svg`,w=`ensox/funding`,T=`Funding Rate`,E=`Funding rate in percent per 8 hours, weighted by USD open interest. Only rates with observed OI and verified periods contribute; unavailable inputs never erase other sources. Green above zero, red below zero.`,D=`if (isFinite(funding_rate)) baseline(funding_rate * 100, baseValue={type:"price", price:0}, topLineColor=options.positiveColor, bottomLineColor=options.negativeColor)`,O={priceFormat:{type:`percent`,precision:4,minMove:1e-4,auto:!1},priceScaleId:`funding_pane`,positiveColor:`#26a69a`,negativeColor:`#ef5350`,lineWidth:1.5,scaleMargins:{top:.08,bottom:.08}},k={imagePath:C,id:w,enabled:!0,name:T,description:E,script:D,options:O},A=e({default:()=>I,description:()=>N,enabled:()=>!0,imagePath:()=>j,name:()=>M,options:()=>F,script:()=>P}),j=`indicators/aggr/liquidations.png`,M=`Liquidations`,N=`Liquidations by side`,P=`line(lbuy, visible=false, priceLineVisible=false, lastValueVisible=false, legend="lbuy", id="liquidations_buy")
line(lsell, visible=false, priceLineVisible=false, lastValueVisible=false, legend="lsell", id="liquidations_sell")
histogram(lbuy, color=options.upColor, legend=false)
histogram(-lsell, color=options.downColor, legend=false)`,F={priceFormat:{type:`volume`},priceScaleId:`volume_liquidations`,upColor:`rgb(255,76,243)`,downColor:`rgb(255,183,77)`,scaleMargins:{top:.75,bottom:.17}},I={imagePath:j,enabled:!0,name:M,description:N,script:P,options:F},L=e({createdAt:()=>z,default:()=>W,displayName:()=>V,imagePath:()=>R,name:()=>B,options:()=>U,script:()=>H}),R=`indicators/aggr/ema.png`,z=1623024000001,B=`EMA {length1} {length2} {length3} {length4} {length5}`,V=`EMA 5 10 60 223 799`,H=`line(ema($price.close, options.length1), color=options.color1)
line(ema($price.close, options.length2), color=options.color2)
line(ema($price.close, options.length3), color=options.color3)
line(ema($price.close, options.length4), color=options.color4)
line(ema($price.close, options.length5), color=options.color5)`,U={priceScaleId:`right`,length1:5,length2:10,length3:60,length4:223,length5:799,color1:`#e53935`,color2:`#fdd835`,color3:`#43a047`,color4:`#8e24aa`,color5:`#ffffff`,legend:!1},W={imagePath:R,createdAt:z,name:B,displayName:V,script:H,options:U},G=e({default:()=>Z,description:()=>J,enabled:()=>!0,imagePath:()=>K,name:()=>q,options:()=>X,script:()=>Y}),K=`indicators/aggr/cvd.png`,q=`CVD {marketType} {label}`,J=`Cumulative Volume Delta for Total, Spot, or Perp markets. Stored ENSO history anchors the live cumulative series.`,Y=`title = option(default="CVD {marketType}", type=text, label="Price-axis label")
marketType = option(default="Total", type=list, options=["Total", "Spot", "Perp"], rebuild=true, label="Market group")
label = option(default="", type=text, label="Custom label")
displayMode = option(default="Line", type=list, options=["Line", "Candles", "Baseline", "Histogram"], rebuild=true, label="Display")
var buy = options.marketType === "Spot" ? source(vbuy, type=spot) : options.marketType === "Perp" ? source(vbuy, type=perp) + source(vbuy, type=inverse) : vbuy
var sell = options.marketType === "Spot" ? source(vsell, type=spot) : options.marketType === "Perp" ? source(vsell, type=perp) + source(vsell, type=inverse) : vsell
var delta = buy - sell
var storedValue = options.marketType === "Spot" ? cvd_spot : options.marketType === "Perp" ? cvd_perp : cvd_total
var liveValue = cum(isFinite(delta) ? delta : 0)
if (buy + sell > 0 || isFinite(storedValue)) ready = 1
if (!isFinite(offset)) offset = 0
if (isFinite(storedValue)) offset = storedValue - liveValue
var value = close > 0 && ready ? isFinite(storedValue) ? storedValue : liveValue + offset : NaN
if (options.displayMode === "Line") {
  if (isFinite(value)) line(value, color=options.color, title=options.title, id="cvd_line")
} else if (options.displayMode === "Candles") {
  if (isFinite(value)) candlestick(ohlc(value), title=options.title, id="cvd_candles")
} else if (options.displayMode === "Baseline") {
  if (isFinite(value)) baseline(value, topLineColor=options.color, bottomLineColor=options.color, title=options.title, id="cvd_baseline")
} else {
  if (isFinite(value)) histogram({time:time, value:value, color:value >= 0 ? options.upColor : options.downColor}, title=options.title, id="cvd_histogram")
}`,X={priceScaleId:`cvd`,priceFormat:{type:`volume`},color:`#3BCA6D`,scaleMargins:{top:.84,bottom:0},marketType:`Total`,displayMode:`Line`,upColor:`#26a69a`,downColor:`#ef5350`,borderVisible:!1,label:``,title:`CVD {marketType}`,lastValueVisible:!0},Z={imagePath:K,enabled:!0,name:q,description:J,script:Y,options:X};export{I as a,S as c,p as d,s as f,L as i,x as l,t as m,G as n,A as o,o as p,W as r,k as s,Z as t,m as u};