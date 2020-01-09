//
// script Habitat Art
//
// housekeeping                             
//
// June 12, 2019 -- 08-02-2019
//                                                           
                var k=1;
                flag1=-1;
                flag2=0;
                var x1 = 0;
                var x2 = 0;
                var y1 = 0;
                var y2 = 0;
                var rr = 0;
                var gg = 0;
                var bb = 0;
                var wt = 1;
                var cl = "black";
                var txt = "";
                //
                var x_scale = 100.0;
                var y_scale = 100.0;
                var x_step = 10.0;
                var y_step = 10.0;
                var x_grid_flag = 1.0;
                var x_value_flag = 1.0;
                var x_axis_flag = 1.0;
                var y_grid_flag = 1.0;
                var y_value_flag = 1.0;
                var y_axis_flag = 1.0;
                var cartesian_size = 300.0;
                //
                var x_label = "X-axis";
                var y_label = "Y-axis";
                 //
                var x_div = 0;
                var y_div = 0;
               //
                var x_count = 0;
                var y_count = 0;
                var x_length=1;
                var y_length = 1;
                var title = "";
                var x_pos = 1;
                var y_pos = 1;
                var cartesian_size = 240; 
                var size_temp = 240;
	var color_flag = -1;
	var begin = 0;
// 
// color picker 
// 
// from A9 - SmartArt color codes...
// 
// reddy_brown [Fill(7869463)]), 
// peacock blue [Fill(1270682)]), 
// darkish green [Fill(1865266)]), 
// blueberry [Fill(4013458)]), 
// faded purple [Fill(9333913)]), 
// dark sky blue ,[Fill(2461666)]), 
// green [Fill(4704305)]), 
// orange [Fill(14778913)]), 
// cherry [Fill(13773105)]), 
// gray [Fill(8684676)])], 
// 
// sb = smartbuilder, rr = red color component, gg = green color component, bb = blue color component 
// 
// var sb_code = [7869463, 1270682, 1865266, 4013458, 9333913, 2461666, 4704305, 14778913, 13773105, 8684676, 999999, 555555, 0];
// var rr_code =   [128, 000, 000, 000, 102, 000, 000, 255, 225, 240, 255, 224, 000];
// var gg_code = [000, 153, 128, 102, 102, 000, 225, 102, 000, 240, 255, 224, 000]; 
// var bb_code = [000, 255, 000, 204, 255, 128, 000, 000, 000, 240, 255, 224, 000]; 
// 
// n = 17 
//	
// color choices
//
var sb_code = ["red","maroon","magenta","purple","green","pine","teal","blue","navy","aqua","thunder","a2z","orange","silver","gray","black","white","yellow"];
var rr_code = [255,128,255,102,000,000,000,000,000,000,000,100,255,240,192,000,255,255,0,0];
var gg_code = [000,000,000,102,255,128,128,000,000,255,153,150,102,240,192,000,255,255,0,0];
var bb_code = [000,000,255,255,000,000,128,255,128,255,255,219,000,240,192,000,255,0,0,0];
//
function select_color(cl) {
    // default black
    rr = 0;
    gg = 0;
    bb = 0;
    //
    color_flag = -1;
    for (i=0;i<18;i++) {
        if(cl == sb_code[i]) {
            rr = rr_code[i];
            gg = gg_code[i];
            bb = bb_code[i];
            color_flag=1;
        }
     }
}
//
// color error
//
function color_error() {
var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                    var gS2 = canvas.getContext('2d');
                }
	gS2.fillStyle = "rgba(255,0,0,0.4)";
	gS2.fillRect(90,20,200,20);
	gS2.fillStyle = "rgb(255,255,255)";
	gS2.font = "12px Arial";
	gS2.fillText("Bad color code or fill code",110,35);
}
//
// draw a canvas line
//
function drawLine(x1,y1,x2,y2,wt,cl) {
var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();
                gS2.moveTo(x1,y1);
                gS2.lineTo(x2,y2);
                gS2.closePath;
                gS2.stroke();
}
//
// ===============< Objects begin here >==============================================
//
// note: an interactive
//
function interactive(jbo,k2,clax) {
    var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
    //
    gS2.fillStyle = "black";
    gS2.font = "bold 12px Arial";
    if (jbo != "Slider") {
         gS2.fillText(""+clax+" "+jbo+": $a(.)",10,310+15*k);
    }
    if (jbo == "Slider") {
         gS2.fillText(""+clax+" "+jbo+": $a"+k,160,310+15*k);
    }
}
//
// --------------------------------------------------------------------------------------------------
// PlotFunction(constant,linear,quadratic,cubed,inverse, root, start,end,wt,cl)
// --------------------------------------------------------------------------------------------------
// Plot Function from Graphkit (lock down)
//
function PlotFunction(constant,linear,quadratic,cubed,root,inverse,start,end,wt,cl) { 
	var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                // start = 50;
                // end = 400;
	select_color(cl);
                 gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();        
                var  k = start+0.01;
                var y_plot = constant + linear*k + quadratic*Math.pow(k,2) + cubed*Math.pow(k,3) + root*Math.pow(k,0.5)+inverse/k;
                gS2.moveTo(40+start*(x_pos),cartesian_size+40-y_plot*(y_pos));
                for (k=start;k<=end;k=k+1){
                  y_plot = constant + linear*k + quadratic*Math.pow(k,2) + cubed*Math.pow(k,3) + root*Math.pow(k,0.5)+inverse/k;
                  gS2.lineTo(40+k*(x_pos),cartesian_size+40-y_plot*(y_pos));
                }
                gS2.closePath;
                gS2.stroke();
}
//
function saPlotFunction(constant,linear,quadratic,cubed,inverse,start,end,wt,cl) { 
	var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                //
                var start_flag = 0;
                var end_flag = 0;
                //
                for (k =40;k < cartesian_size;k++) {
                   temp = constant + linear*k + quadratic*Math.pow(k,2) + cubed*Math.pow(k,3) + inverse/k;
                   if (start_flag == 0) {
                      if ((cartesian_size+40-(temp*y_pos)) > 120) {
                         start = (k-40);
                         start_flag = 1;
                        //
                      }
                   }
                }
                start = 0;
                end = x_step*x_count;
                //
              
                gS2.beginPath();        
                var  k = start;
                var y_plot = constant + linear*k + quadratic*Math.pow(k,2) + cubed*Math.pow(k,3) + inverse/k;
                gS2.moveTo(40+start*(x_pos),cartesian_size+40-y_plot*(y_pos));
                for (k=start;k<=end;k=k+1){
                  y_plot = constant + linear*k + quadratic*Math.pow(k,2) + cubed*Math.pow(k,3) + inverse/k;
                    temp = (cartesian_size+40 - (y_plot*y_pos))
                    if ( temp > 60 && temp < (40+cartesian_size) ) {
                       gS2.lineTo(40+k*(x_pos),cartesian_size+40-y_plot*(y_pos));
                    }
                }
                gS2.closePath;
                gS2.stroke();
}
// -----------------------------------------------------------------
// rectangle
// -----------------------------------------------------------------
function Rectangle(x1,y1,x2,y2,wt,cl,cl2) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
	if (color_flag < 0) {
	  color_error();
	}
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.lineTo(40+x1*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.closePath();
                gS2.fill();  
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.lineTo(40+x1*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.closePath();
                gS2.stroke();    
}       
//
function saRectangle(x1,y1,x2,y2,wt,cl,cl2) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
	if (color_flag < 0) {
	  color_error();
	}
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.lineTo(40+x1*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.closePath();
                gS2.fill();  
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+(x1+x2)*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.lineTo(40+x1*x_pos,cartesian_size+40-(y1-y2)*y_pos);
                gS2.closePath();
                gS2.stroke();    
}       
// --------------------------------------------------------------
// triangle
// --------------------------------------------------------------
function Triangle(x1,y1,x2,y2,x3,y3,wt,cl,cl2) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+x2*x_pos,cartesian_size+40-y2*y_pos);
                gS2.lineTo(40+x3*x_pos,cartesian_size+40-y3*y_pos);
                gS2.closePath();
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+x2*x_pos,cartesian_size+40-y2*y_pos);
                gS2.lineTo(40+x3*x_pos,cartesian_size+40-y3*y_pos);
                gS2.closePath();
                gS2.stroke();
               }
//
function saTriangle(x1,y1,x2,y2,x3,y3,wt,cl,cl2) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+x2*x_pos,cartesian_size+40-y2*y_pos);
                gS2.lineTo(40+x3*x_pos,cartesian_size+40-y3*y_pos);
                gS2.closePath();
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.lineTo(40+x2*x_pos,cartesian_size+40-y2*y_pos);
                gS2.lineTo(40+x3*x_pos,cartesian_size+40-y3*y_pos);
                gS2.closePath();
                gS2.stroke();
               }
// --------------------------------------------------------------------------
// circle csCircle(x1,y1,rad,wt,cl,cl2)
// --------------------------------------------------------------------------
function Circle(x1,y1,rad,wt,cl,cl2) {
               var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
	if (cl2 == "white") {
	   gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
	}
	else {
                  gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
	}
                // rad = rad/20;
                gS2.beginPath();
                gS2.lineWidth=wt;
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
//
function saCircle(x1,y1,rad,wt,cl,cl2) {
               var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
	if (cl2 == "white") {
	   gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
	}
	else {
                  gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
	}
                rad = rad/20;
                gS2.beginPath();
                gS2.lineWidth=wt;
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
// ------------------------------------------------------------------------------
// pie slice
// ------------------------------------------------------------------------------
// csSlice(x1,y1,rad,start,arc,wt,cl,cl2)
//
function Slice(x1,y1,rad,begin,cra,wt,cl,cl2) {
               var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.lineWidth=wt;
	gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,(begin/180.0)*Math.PI,(cra/180.0)*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,(begin/180.0)*Math.PI,(cra/180.0)*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
//
function saSlice(x1,y1,rad,begin,cra,wt,cl,cl2) {
               var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl2);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.5)";
                gS2.beginPath();
                gS2.lineWidth=wt;
	gS2.moveTo(40+x1*x_pos,cartesian_size+40-y1*y_pos);
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,begin*Math.PI,cra*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                select_color(cl);
                gS2.lineWidth=wt;
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,begin*Math.PI,cra*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
// --------------------------------------------------------------------------
// draw a object line
// --------------------------------------------------------------------------
function Line(x1,y1,x2,y2,wt,cl) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();
                gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                gS2.lineTo(40+x2*(x_pos),cartesian_size+40-y2*(y_pos));
                gS2.closePath;
                gS2.stroke();
}
//
function saLine(x1,y1,x2,y2,wt,cl) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();
                gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                gS2.lineTo(40+x2*(x_pos),cartesian_size+40-y2*(y_pos));
                gS2.closePath;
                gS2.stroke();
}
// ------------------------------------------------------------------------------
// arrows
// ------------------------------------------------------------------------------
function Arrow(x1,y1,x2,y2,wt,cl,start_flag,end_flag) {
                // start_flag = 1;
                // end_flag=1;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();
                gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                gS2.lineTo(40+x2*(x_pos),cartesian_size+40-y2*(y_pos));
                gS2.closePath;
                gS2.stroke();
	//
                // trig needs work for arrow heads...
                //
                if (start_flag == 1) {
                  var x1a = 40+x1*(x_pos);
                  var y1a = cartesian_size+40-y1*(y_pos);
                  var radx = 10.0;
                  gS2.lineWidth=1;
                  gS2.beginPath();
                  var degree = Math.atan2((y2-y1),(x1-x2));
                  ay=radx*Math.sin(degree-(Math.PI/6.0));
                  ax=radx*Math.cos(degree-(Math.PI/6.0));
                  gS2.moveTo(x1a-ax,y1a-ay);
                  gS2.lineTo(x1a,y1a);
                  ay=radx*Math.sin(degree+(Math.PI/6.0));
                  ax=radx*Math.cos(degree+(Math.PI/6.0));
                  gS2.lineTo(x1a-ax,y1a-ay);
                  gS2.closePath;
                  gS2.stroke();
                }
                //
                if (end_flag == 1) {
                  var x2a = 40+x2*(x_pos);
                  var y2a = cartesian_size+40-y2*(y_pos);
                  var radx = 10.0;
                  gS2.lineWidth=1;
                  gS2.beginPath();
                  var degree = Math.atan2((y2-y1),(x1-x2));
                  ay=radx*Math.sin(degree-(Math.PI/6.0));
                  ax=radx*Math.cos(degree-(Math.PI/6.0));
                  gS2.moveTo(x2a+ax,y2a+ay);
                  gS2.lineTo(x2a,y2a);
                  ay=radx*Math.sin(degree+(Math.PI/6.0));
                  ax=radx*Math.cos(degree+(Math.PI/6.0));
                  gS2.lineTo(x2a+ax,y2a+ay);
                  gS2.closePath;
                  gS2.stroke();
                }
}
//
function saXarrow(x1,y1,x2,y2,cl,z1,cl2,wt,direction) {
                start_flag = 1;
                end_flag=1;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.lineWidth=wt;
                gS2.beginPath();
                gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                gS2.lineTo(40+x2*(x_pos),cartesian_size+40-y2*(y_pos));
                gS2.closePath;
                gS2.stroke();
	//
                // trig needs work for arrow heads...
                //
                if (start_flag == 1) {
                  var x1a = 40+x1*(x_pos);
                  var y1a = cartesian_size+40-y1*(y_pos);
                  var radx = 10.0;
                  gS2.lineWidth=1;
                  gS2.beginPath();
                  var degree = Math.atan2((y2-y1),(x1-x2));
                  ay=radx*Math.sin(degree-(Math.PI/6.0));
                  ax=radx*Math.cos(degree-(Math.PI/6.0));
                  gS2.moveTo(x1a-ax,y1a-ay);
                  gS2.lineTo(x1a,y1a);
                  ay=radx*Math.sin(degree+(Math.PI/6.0));
                  ax=radx*Math.cos(degree+(Math.PI/6.0));
                  gS2.lineTo(x1a-ax,y1a-ay);
                  gS2.closePath;
                  gS2.stroke();
                }
                //
                if (end_flag == 1) {
                  var x2a = 40+x2*(x_pos);
                  var y2a = cartesian_size+40-y2*(y_pos);
                  var radx = 10.0;
                  gS2.lineWidth=1;
                  gS2.beginPath();
                  var degree = Math.atan2((y2-y1),(x1-x2));
                  ay=radx*Math.sin(degree-(Math.PI/6.0));
                  ax=radx*Math.cos(degree-(Math.PI/6.0));
                  gS2.moveTo(x2a+ax,y2a+ay);
                  gS2.lineTo(x2a,y2a);
                  ay=radx*Math.sin(degree+(Math.PI/6.0));
                  ax=radx*Math.cos(degree+(Math.PI/6.0));
                  gS2.lineTo(x2a+ax,y2a+ay);
                  gS2.closePath;
                  gS2.stroke();
                }
}
// -------------------------------------------------------
// dashed dropline
// -------------------------------------------------------
function DashedLine(x0,y1,x1,y0,cl,wt) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.lineWidth=1;
                if (y0 == y1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40,cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=45;i<40+x1*(x_pos);i=i+5) {
                     gS2.fillRect(i,cartesian_size+39-y1*(y_pos),1,3);
                  }
                }
                //
                if (x0 == x1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40);
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=280-y1*(y_pos); i<cartesian_size+40;i=i+5) {
                     gS2.fillRect(39+x1*(x_pos),i,3,1);
                  }
                }
}
//
function saDashedLine(x0,y1,x1,y0,cl,wt) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.lineWidth=1;
                if (y0 == y1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40,cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=45;i<40+x1*(x_pos);i=i+5) {
                     gS2.fillRect(i,cartesian_size+39-y1*(y_pos),1,3);
                  }
                }
                //
                if (x0 == x1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40);
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=280-y1*(y_pos); i<cartesian_size+40;i=i+5) {
                     gS2.fillRect(39+x1*(x_pos),i,3,1);
                  }
                }
}
// --------------------------------------------------------------------
// dropline
// --------------------------------------------------------------------
function DropLine(x1,y1,wt,cl,x_drop,y_drop) { 
          var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.lineWidth=1;
                if (y_drop == 1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40,cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=45;i<40+x1*(x_pos);i=i+5) {
                     gS2.fillRect(i,cartesian_size+39-y1*(y_pos),1,3);
                  }
                }
                //
                if (x_drop == 1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40);
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=280-y1*(y_pos); i<cartesian_size+40;i=i+5) {
                     gS2.fillRect(39+x1*(x_pos),i,3,1);
                  }
                }
                // new code here
                rad = wt/20;
                select_color(cl);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.50)";
                gS2.beginPath();
                gS2.lineWidth=1;
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                gS2.lineWidth=1;
                gS2.strokeStyle = "rgb(0,0,0)";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
//
function saDropLine(x1,y1,wt,cl,x_drop,y_drop) { 
          var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.lineWidth=1;
                if (y_drop == 1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40,cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=45;i<40+x1*(x_pos);i=i+5) {
                     gS2.fillRect(i,cartesian_size+39-y1*(y_pos),1,3);
                  }
                }
                //
                if (x_drop == 1) {
                  gS2.strokeStyle = "rgb("+rr+","+gg+","+bb+")";
                  gS2.beginPath();
                  gS2.moveTo(40+x1*(x_pos),cartesian_size+40-y1*(y_pos));
                  gS2.lineTo(40+x1*(x_pos),cartesian_size+40);
                  gS2.closePath;
                  gS2.stroke();
                  //
                  gS2.fillStyle = "rgb(255,255,255)";
                  for (i=280-y1*(y_pos); i<cartesian_size+40;i=i+5) {
                     gS2.fillRect(39+x1*(x_pos),i,3,1);
                  }
                }
                // new code here
                rad = wt/20;
                select_color(cl);
                gS2.fillStyle = "rgba("+rr+","+gg+","+bb+",0.50)";
                gS2.beginPath();
                gS2.lineWidth=1;
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.fill();
                //
                gS2.lineWidth=1;
                gS2.strokeStyle = "rgb(0,0,0)";
                gS2.beginPath();
                gS2.arc(40+x1*x_pos,cartesian_size+40-y1*y_pos,rad*x_pos,0,2.0*Math.PI);
                gS2.closePath;
                gS2.stroke();
}
// ----------------------------------------------
// plot a point
// ----------------------------------------------
function Point(x1,y1,wt,cl,cl2) {
                // wt = 6;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.fillRect(40-(wt/2)+x1*x_pos,cartesian_size+40-(wt/2)-y1*y_pos,wt,wt);
}
//
function saPoint(x1,y1,wt,cl,cl2) {
                wt = 6;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
                gS2.fillRect(40-(wt/2)+x1*x_pos,cartesian_size+40-(wt/2)-y1*y_pos,wt,wt);
}
// ------------------------------------------------
// draw a label
// ------------------------------------------------
function Label(x1,y1,txt,wt,cl) {
                //
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                //
                select_color(cl);
                //
                temp = wt;
                // bold
                if (temp.indexOf("b") > -1) {
                    wt = temp.slice(0,temp.indexOf("b"));
                    gS2.font = "bold "+wt+"px Arial";
                }
                // italics
                if (temp.indexOf("i") > -1) {
                    wt = temp.slice(0,temp.indexOf("i"));
                    gS2.font = "italic "+wt+"px Arial";
                }
                // neither
                if (temp.indexOf("b") == -1 && temp.indexOf("i") == -1) {
                    gS2.font = ""+wt+"px Arial";
                }
                gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
                temp = txt;
                // 
                // new code 07-17-2019....
                // subscript
                //
                if (temp.indexOf("_") > -1) {
                      var base = temp.slice(0,temp.indexOf("_"));
                      var subtext = temp.slice(temp.indexOf("_"));
                      subtext = subtext.slice(1);
                      endx = subtext.indexOf("_");
                      subtext = subtext.slice(0, endx);
                      var width = gS2.measureText(base).width;
                      gS2.fillText(base,40-(width/2)+x1*x_pos,cartesian_size+40-y1*y_pos);
                      gS2.fillText(subtext,40+(width/2)+x1*x_pos,cartesian_size+45-y1*y_pos);
                }
                //
                // superscript
                //
                if (temp.indexOf("^") > -1) {
                      var base = temp.slice(0,temp.indexOf("^"));
                      var suptext = temp.slice(temp.indexOf("^"));
                      suptext = suptext.slice(1);
                      endx = suptext.indexOf("^");
                      suptext = suptext.slice(0, endx);
                      var width = gS2.measureText(base).width;
                      gS2.fillText(base,40-(width/2)+x1*x_pos,cartesian_size+40-y1*y_pos);
                      gS2.fillText(suptext,40+(width/2)+x1*x_pos,cartesian_size+35-y1*y_pos);
                }
                //
                // neither
                //
                 if (temp.indexOf("_") == -1 && temp.indexOf("^") == -1) {
                   var width = gS2.measureText(temp).width;
                   gS2.fillText(txt,40-(width/2)+x1*x_pos,cartesian_size+40-y1*y_pos);
                }
}
//
function saLabel(x1,y1,txt,cl) {
                wt = 12;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.font = ""+wt+"px Arial";
                gS2.fillStyle = "rgb("+rr+","+gg+","+bb+")";
                temp = txt;
                var width = gS2.measureText(temp).width;
                gS2.fillText(txt,40-(width/2)+x1*x_pos,cartesian_size+40-y1*y_pos);
}
// depreciated
function wLabel(txt,x1,y1,z1,z2,z3) {
                wt = 12;
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                select_color(cl);
                gS2.font = ""+wt+"px Arial";
                gS2.fillStyle = "rgb(0,0,0)";
                temp = txt;
                var width = gS2.measureText(temp).width;
                gS2.fillText(txt,40-(width/2)+x1*x_pos,cartesian_size+40-y1*y_pos);
}
// ----------------------------------------------------
// axis labels
// ----------------------------------------------------
function AxisLabels(x_label,y_label) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                gS2.font = "bold 12px Arial";
                gS2.fillStyle = "rgb(0,0,0)";
                temp = x_label;
                var width = gS2.measureText(temp).width;
                gS2.fillText(x_label,cartesian_size+40-width,cartesian_size+75);
                gS2.fillText(y_label,40,35);
}
//
function axis_label(x_label,y_label,title) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                gS2.font = "bold 12px Arial";
                gS2.fillStyle = "rgb(0,0,0)";
                temp = x_label;
                var width = gS2.measureText(temp).width;
                gS2.fillText(x_label,cartesian_size+40-width,cartesian_size+75);
                gS2.fillText(y_label,40,35);
                temp = title;
                var width = gS2.measureText(temp).width;
                gS2.fillText(title,(40+cartesian_size/2)-width/2,18);
}
//
function Title(ttl) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                   var gS2 = canvas.getContext('2d');
                }
                gS2.font = "bold 14px Arial";
                gS2.fillStyle = "rgb(0,0,0)";
                temp = ttl;
                var width = gS2.measureText(temp).width;
                gS2.fillText(ttl,(40+cartesian_size/2)-width/2,18);
}
//
function LongAxisLabels(x_label,y_label) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                gS2.font = "bold 12px Arial";
                gS2.fillStyle = "rgb(0,0,0)";
                temp = x_label;
                var width = gS2.measureText(temp).width;
                gS2.fillText(x_label,cartesian_size+40-width,cartesian_size+75);
                gS2.fillText(y_label,40,35);
                temp = title;
                var width = gS2.measureText(temp).width;
                gS2.fillText(title,(40+cartesian_size/2)-width/2,18);
}
// -------------------------------------------------------------------------------------------------------------------------------------------
// coordinate system
// -------------------------------------------------------------------------------------------------------------------------------------------
function CoordinateSystem(xx_start,xx_length,yy_start,yy_length,xx_step,yy_step,size_temp,size_temp2) {
                 x_scale= xx_length/xx_step;
                 y_scale =yy_length/yy_step;
                 x_grid_flag = 1;
                 y_grid_flag = 1;
                 x_axis_flag = 1;
                 y_axis_flag = 1;
                 x_value_flag = 1;
                 y_value_flag = 1;
                //
                 coordinate(xx_length,yy_length,xx_step,yy_step,x_grid_flag,y_grid_flag,x_axis_flag,y_axis_flag,x_value_flag,y_value_flag,size_temp);
}
function SerifStep(z1,z2) {
}
// accommodate SmartArt
function coordinate(x_scale,y_scale,x_step,y_step,x_axis_flag,y_axis_flag,x_grid_flag,y_grid_flag,x_value_flag,y_value_flag,size_temp) {
                var canvas = document.getElementById('Smartart');
                if (canvas.getContext){
                  var gS2 = canvas.getContext('2d');
                }
                //
                // cartesian size in pixels
                cartesian_size = size_temp*1.0;
                if (cartesian_size > 300) {
                  cartesian_size = 300;
                }
                // diagnostics
                //
                flag2 =  1;
                gS2.fillStyle = "rgb(0,0,0)";
                gS2.fillText("X_step: "+x_step,50,50+flag2*15);
                // gS2.fillText("X_count: "+x_count,50,95+flag2*15);
                //
                // x_div, y_div  = scaling values for smartart to pixels conversion
                //
                x_div = cartesian_size/(x_scale/x_step);
                y_div = cartesian_size/(y_scale/y_step);
                //
                // for grid mark tick count -- not used here
                //
                x_count = x_scale/x_step;
                y_count = y_scale/y_step;
                //
                // scaled position -- number of pixels per unit
                //
                x_pos = cartesian_size/x_scale;
                y_pos = cartesian_size/y_scale;
                //
                // background
                //
                gS2.fillStyle = "rgb(255,255,255)";
                gS2.fillRect(0,0,450,420);
                gS2.fillStyle = "rgb(240,240,240)";
                gS2.fillRect(40,40,cartesian_size,cartesian_size);
                gS2.fillStyle = "rgb(255,255,255)";
                gS2.fillRect(40,40,cartesian_size,cartesian_size);
                //
                // show axes ?
                //
                // cl = "black";
                wt = 3;
                gS2.lineWidth=wt;
                // select_color(cl);
                // y-axis
                  if (y_axis_flag == 1 ) {
                     drawLine(40,40,40,cartesian_size+40,wt,"black");
                  }
                // x-axis
                  if (x_axis_flag == 1 ) {
                    drawLine(40,cartesian_size+40,cartesian_size+40,cartesian_size+40,wt,"black");
                  }
                //
                // show grid lines ?
                //
                  gS2.lineWidth=1;
                  // cl = "gray";
                  wt = 1;
                  // horizontal lines
                  if (y_grid_flag ==1) {
                    for (var i=40;i<cartesian_size+40;i=i+y_div) {
                      drawLine(42,i,cartesian_size+40,i,wt,"gray");
                    }
                  }
                  //vertical lines
                  if (x_grid_flag ==1) {
                    for (var i=40+x_div;i<cartesian_size+50;i=i+x_div) {
                      drawLine(i,40,i,cartesian_size+38,wt,"gray");
                    }
                  }
                //
                // show grid labels?
                //
                  // x-axis values
                  if (x_value_flag ==1) {
                    for (var i=1;i<=x_count;i=i+1) {
                      gS2.font = "12px Arial";
                      gS2.fillStyle = "Black";
                      var j = i*x_step;
                      gS2.fillText(""+j,35+i*x_div,cartesian_size+55);
                    }
                  }
                  // y-axis values
                  if (y_value_flag ==1) {
                    for (var i=1;i<y_count;i=i+1) {
                      gS2.font = "12px Arial";
                      gS2.fillStyle = "Black";
                      temp = i*y_step;
                      var width = gS2.measureText(temp).width;
                      gS2.fillText(""+temp,35-width,cartesian_size+45-i*y_div);
                    }
                  }
}
//
// end of script
//