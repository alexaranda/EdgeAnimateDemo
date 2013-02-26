/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['asap, sans-serif']='<script src=\"http://use.edgefonts.net/asap:n7,i4,n4,i7:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(204,217,207,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['14.2%','4.3%','20.3%','6.8%','auto','auto'],
            text:"Human Evolution",
            font:['asap, sans-serif',[150,"%"],"rgba(0,0,0,1)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3]
         },
         {
            id:'one2',
            type:'image',
            rect:['5.5%','40.2%','8.8%','22.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"one.gif",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0%','70.8%','100.1%','6.8%','auto','auto'],
            fill:["rgba(125,182,112,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'two',
            type:'image',
            rect:['13.4%','40%','10.2%','22.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"two.gif",'0px','0px']
         },
         {
            id:'three',
            type:'image',
            rect:['23%','33.3%','8%','27.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"three.gif",'0px','0px']
         },
         {
            id:'four',
            type:'image',
            rect:['31%','31.8%','8%','28.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"four.gif",'0px','0px']
         },
         {
            id:'five',
            type:'image',
            rect:['37.3%','30.8%','9%','29.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"five.gif",'0px','0px']
         },
         {
            id:'six',
            type:'image',
            rect:['45.3%','27.5%','9%','31.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"six.gif",'0px','0px']
         },
         {
            id:'seven',
            type:'image',
            rect:['54.7%','26%','7.5%','32.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"seven.gif",'0px','0px']
         },
         {
            id:'eight',
            type:'image',
            rect:['62.9%','24%','8.8%','34.2%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"eight.gif",'0px','0px']
         },
         {
            id:'nine',
            type:'image',
            rect:['73%','23.3%','8.4%','34.8%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nine.gif",'0px','0px']
         },
         {
            id:'ten',
            type:'image',
            rect:['82.4%','18.5%','9.8%','38.3%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ten.gif",'0px','0px']
         },
         {
            id:'Text3',
            type:'text',
            rect:['15px','33px','92px','20px','auto','auto'],
            text:"Back to Blog",
            align:"left",
            font:['asap, sans-serif',[100,"%"],"rgba(95,95,95,1.00)","normal","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['45.3%','81.2%','16.5%','6.7%','auto','auto'],
            text:"Play Again",
            align:"left",
            font:['asap, sans-serif',[200,"%"],"rgba(95,95,95,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_five}": [
            ["style", "top", '41.55%'],
            ["style", "height", '29.33%'],
            ["style", "opacity", '0'],
            ["style", "left", '29.44%'],
            ["style", "width", '9%']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(204,217,207,1.00)'],
            ["color", "border-color", 'rgba(44,181,61,1.00)'],
            ["style", "top", '-0.02%']
         ],
         "${_ten}": [
            ["style", "top", '32.53%'],
            ["style", "height", '38.25%'],
            ["style", "opacity", '0'],
            ["style", "left", '72.22%'],
            ["style", "width", '9.81%']
         ],
         "${_seven}": [
            ["style", "top", '38.24%'],
            ["style", "height", '32.6%'],
            ["style", "opacity", '0'],
            ["style", "left", '46%'],
            ["style", "width", '7.48%']
         ],
         "${_one2}": [
            ["style", "top", '48.83%'],
            ["style", "height", '22.27%'],
            ["style", "opacity", '0'],
            ["style", "left", '-10.99%'],
            ["style", "width", '8.78%']
         ],
         "${_eight}": [
            ["style", "top", '36.78%'],
            ["style", "height", '34.24%'],
            ["style", "opacity", '0'],
            ["style", "left", '54.11%'],
            ["style", "width", '8.76%']
         ],
         "${_Text2}": [
            ["style", "top", '81.24%'],
            ["style", "height", '6.74%'],
            ["style", "width", '16.45%'],
            ["style", "left", '45.33%'],
            ["style", "font-size", '200%']
         ],
         "${_six}": [
            ["style", "top", '39.37%'],
            ["style", "height", '31.6%'],
            ["style", "opacity", '0'],
            ["style", "left", '37.33%'],
            ["style", "width", '9%']
         ],
         "${_four}": [
            ["style", "top", '42.3%'],
            ["style", "height", '28.39%'],
            ["style", "opacity", '0'],
            ["style", "left", '23.67%'],
            ["style", "width", '8%']
         ],
         "${_three}": [
            ["style", "top", '43.51%'],
            ["style", "height", '27.32%'],
            ["style", "opacity", '0'],
            ["style", "left", '14.22%'],
            ["style", "width", '7.99%']
         ],
         "${_Text}": [
            ["subproperty", "textShadow.blur", '2px'],
            ["style", "letter-spacing", '0em'],
            ["subproperty", "textShadow.offsetV", '2px'],
            ["color", "color", 'rgba(102,102,102,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '39.78%'],
            ["style", "font-size", '200%'],
            ["style", "top", '-10.5%'],
            ["subproperty", "textShadow.offsetH", '2px'],
            ["subproperty", "textShadow.color", 'rgba(173,173,173,0.65)'],
            ["style", "text-indent", '0%'],
            ["style", "height", '6.75%'],
            ["style", "font-family", 'asap, sans-serif'],
            ["style", "word-spacing", '0em'],
            ["style", "width", '27.45%']
         ],
         "${_two}": [
            ["style", "top", '48.03%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '22.78%'],
            ["style", "opacity", '0'],
            ["style", "left", '4.78%'],
            ["style", "width", '10.24%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '320px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(125,182,112,1.00)'],
            ["style", "left", '-0.01%'],
            ["style", "width", '100.11%']
         ],
         "${_nine}": [
            ["style", "top", '36.21%'],
            ["style", "height", '34.79%'],
            ["style", "opacity", '0'],
            ["style", "left", '63.33%'],
            ["style", "width", '8.36%']
         ],
         "${_Text3}": [
            ["style", "top", '33px'],
            ["style", "width", '92px'],
            ["style", "height", '20px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "left", '15px'],
            ["style", "font-size", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5665,
         autoPlay: true,
         timeline: [
            { id: "eid73", tween: [ "style", "${_Text}", "width", '27.45%', { fromValue: '27.45%'}], position: 5665, duration: 0 },
            { id: "eid25", tween: [ "style", "${_two}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 440 },
            { id: "eid42", tween: [ "style", "${_four}", "opacity", '1', { fromValue: '0'}], position: 2170, duration: 485 },
            { id: "eid128", tween: [ "style", "${_five}", "top", '41.55%', { fromValue: '41.55%'}], position: 5665, duration: 0 },
            { id: "eid54", tween: [ "style", "${_seven}", "opacity", '1', { fromValue: '0'}], position: 3620, duration: 530 },
            { id: "eid69", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid40", tween: [ "style", "${_four}", "left", '30.44%', { fromValue: '23.67%'}], position: 2170, duration: 485 },
            { id: "eid62", tween: [ "style", "${_nine}", "opacity", '1', { fromValue: '0'}], position: 4650, duration: 505 },
            { id: "eid27", tween: [ "style", "${_one2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500 },
            { id: "eid71", tween: [ "color", "${_Text}", "color", 'rgba(102,102,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(102,102,102,1.00)'}], position: 5665, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text}", "font-size", '200%', { fromValue: '200%'}], position: 5665, duration: 0 },
            { id: "eid29", tween: [ "style", "${_three}", "left", '23%', { fromValue: '14.22%'}], position: 1690, duration: 480 },
            { id: "eid122", tween: [ "style", "${_eight}", "top", '36.78%', { fromValue: '36.78%'}], position: 5665, duration: 0 },
            { id: "eid131", tween: [ "style", "${_six}", "top", '39.37%', { fromValue: '39.37%'}], position: 5665, duration: 0 },
            { id: "eid48", tween: [ "style", "${_six}", "left", '45.33%', { fromValue: '37.33%'}], position: 3140, duration: 480 },
            { id: "eid50", tween: [ "style", "${_six}", "opacity", '1', { fromValue: '0'}], position: 3140, duration: 480 },
            { id: "eid60", tween: [ "style", "${_nine}", "left", '73%', { fromValue: '63.33%'}], position: 4650, duration: 505 },
            { id: "eid121", tween: [ "style", "${_nine}", "top", '36.21%', { fromValue: '36.21%'}], position: 5665, duration: 0 },
            { id: "eid64", tween: [ "style", "${_ten}", "left", '82.44%', { fromValue: '72.22%'}], position: 5155, duration: 510 },
            { id: "eid129", tween: [ "style", "${_four}", "top", '42.3%', { fromValue: '42.3%'}], position: 5665, duration: 0 },
            { id: "eid116", tween: [ "style", "${_one2}", "top", '48.83%', { fromValue: '48.83%'}], position: 5665, duration: 0 },
            { id: "eid66", tween: [ "style", "${_ten}", "opacity", '1', { fromValue: '0'}], position: 5155, duration: 510 },
            { id: "eid120", tween: [ "style", "${_ten}", "top", '32.53%', { fromValue: '32.53%'}], position: 5665, duration: 0 },
            { id: "eid31", tween: [ "style", "${_three}", "opacity", '1', { fromValue: '0'}], position: 1690, duration: 480 },
            { id: "eid56", tween: [ "style", "${_eight}", "left", '62.89%', { fromValue: '54.11%'}], position: 4150, duration: 500 },
            { id: "eid52", tween: [ "style", "${_seven}", "left", '54.67%', { fromValue: '46%'}], position: 3620, duration: 530 },
            { id: "eid58", tween: [ "style", "${_eight}", "opacity", '1', { fromValue: '0'}], position: 4150, duration: 500 },
            { id: "eid19", tween: [ "style", "${_one2}", "left", '5.46%', { fromValue: '-10.99%'}], position: 750, duration: 500 },
            { id: "eid44", tween: [ "style", "${_five}", "left", '37.33%', { fromValue: '29.44%'}], position: 2655, duration: 485 },
            { id: "eid77", tween: [ "color", "${_Rectangle2}", "border-color", 'rgba(44,181,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(44,181,61,1.00)'}], position: 5665, duration: 0 },
            { id: "eid46", tween: [ "style", "${_five}", "opacity", '1', { fromValue: '0'}], position: 2655, duration: 485 },
            { id: "eid134", tween: [ "style", "${_Rectangle2}", "top", '-0.02%', { fromValue: '-0.02%'}], position: 5665, duration: 0 },
            { id: "eid21", tween: [ "style", "${_two}", "left", '13.44%', { fromValue: '4.78%'}], position: 1250, duration: 440 },
            { id: "eid2", tween: [ "style", "${_Text}", "top", '4.25%', { fromValue: '-10.5%'}], position: 0, duration: 430 },
            { id: "eid16", tween: [ "style", "${_Text}", "top", '4.5%', { fromValue: '4.25%'}], position: 430, duration: 320 },
            { id: "eid130", tween: [ "style", "${_three}", "top", '43.51%', { fromValue: '43.51%'}], position: 5665, duration: 0 },
            { id: "eid123", tween: [ "style", "${_seven}", "top", '38.24%', { fromValue: '38.24%'}], position: 5665, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-230595259");
