// Initialize variables
// code update: 07-29-2019
//
var ex = 0;
var ey = 0;
var idx = 0;
var cl = "";
var item = "";
var wt = "1";
var res = [0,0,0,0,0,0,0,0,0,0,0,0];
var count = 0;
var cl_temp = "black";
var wt_temp = 1;
var instruction = "";
var flag4 = 0;
//
// an objet can have up to 9 parameters plus weight / font-size and color
//
var zero = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var one = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var two = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var three = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var four = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var five = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var six = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var seven = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var eight = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//
var wta = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var xact = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var objecta = ["line","line","line","line","line","line","line","line","line","line","line","line"];
var cla = [0,0,0,0,0,0,0,0,0,00,0,0,0,0,0,0,0,0,0];
//
var instruct = [
"Line(x1,y1,x2,y2,line-weight)",
"Rectangle(x1,y1,x2,y2,line-weight)", 
"DropLine(x1,y1,line-weight,x_drop,y_drop)",
"Triangle(x1,y1,x2,y2,x3,y3,line-weight)",
"Function(constant,linear,squared,cubed,root,inverse,start,end,line-weight)",
"Arrow(x1,y1,x2,y2,line-weight,start_flag,end_flag)",
"Circle(x1,y1,rad,line-weight)",
"Slice(x1,y1,rad,start ,arc,line-weight)",
"Label(x1,y1,txt)","",""];
//
var constant = 0;
var linear = 0;
var squared = 0;
var cubed = 0;
var inverse = 0;
var root = 0;
var start = 0;
var end = 0;
//
// undo or image reverse countdown
//
function undo() {
    if (count >= 1) {
        count = count -1;
        draw();
    }
}
//
// reset the application -- some problem here
//
function resetx() {
    for (i=0;i<20;i++) {
        one[i] = 0;
        two[i] = 0;
        three[i] = 0;
        four[i] = 0;
        five[i] = 0;
        six[i] = 0;
        seven[i] = 0;
        eight[i] = 0;
        wta[i] = 0;
        cla[i] = 0;
        objecta[i] = 0;
        xact[i] = 0;
    }
    count = 0;
    draw();
}
//
// popup wizard gathering the parameters of an object to be drawn
//
function cly(yy) {
    cl_temp=sb_code[yy];
    draw();
}
//
function clz(zz) {
   item = sb_object[zz];
   instruction = instruct[zz];
   xpop(item);
   draw();
}
//
// object choices
//
var sb_object = ["Line","Rectangle","DropLine","Triangle","Function","Arrow","Circle","Slice","Label","Slider",""];
//
// add a new graphical object -- from image buttons -- 19 objects max.
// xobj is a string of (0 - 8) comma-separated parameters -- 'split' into an array
//
function doSomething(xobj,wt2,xact2) {
    count = count + 1;
    if (count > 19) {
        count = 19;
    }
    //
    res = xobj.split(",");
    //
    zero[count] = res[0];
    one[count] = res[1];
    two[count] = res[2];
    three[count] = res[3];
    four[count] = res[4];
    five[count] = res[5];
    six[count] = res[6];
    seven[count] = res[7];
    eight[count] = res[8];
    wta[count] = wt2;
    cla[count] = cl_temp;
    objecta[count] = item;
    xact[count] = xact2;
  //
  // if (flag4 == 0) {
  j2window.close();
  // }
  draw(xobj);
}
// -----------------------------------------------------------------------------------
// application line
// -----------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------
// coordinate system update -- from form elements
// idx = form element reference, csvalue = text or number
// ---------------------------------------------------------------------------------
function csUpdate(idx,csvalue) {
     if (idx == "1") {
       title = csvalue;
     }
     if (idx == "2") {
       cartesian_size = csvalue*1.0;
     }
     if (idx == "3") {
          if (document.cs.x_axis_on.checked==true) {
               x_axis_flag = 1;
          }
          if(document.cs.x_axis_on.checked==false) {
               x_axis_flag = 0;
          }
     }
     if (idx == "4") {
        if (document.cs.x_grid_on.checked==true) {
           x_grid_flag = 1;
        }
        if(document.cs.x_grid_on.checked==false) {
           x_grid_flag = 0;
        }
    }
    if (idx == "5") {
        if (document.cs.x_number_on.checked==true) {
             x_value_flag  = 1;
        }
        if(document.cs.x_number_on.checked==false) {
             x_value_flag = 0;
        }
    }
    if (idx == "6") {
        x_label = csvalue;
    }
    if (idx == "7") {
        x_scale = csvalue*1.0;
    }
    if (idx == "8") {
       x_step = csvalue*1.0;
    }
    if (idx == "9") {
        y_label = csvalue;
    }
    if (idx == "10") {
        y_scale = csvalue*1.0;
    }
    if (idx == "11") {
        y_step = csvalue*1.0;
    }
    if (idx == "12") {
        if (document.cs.y_axis_on.checked==true) {
            y_axis_flag = 1;
        }
        if(document.cs.y_axis_on.checked==false) {
            y_axis_flag = 0;
        }
    }
    if (idx == "13") {
        if (document.cs.y_grid_on.checked==true) {
           y_grid_flag = 1;
        }
        if(document.cs.y_grid_on.checked==false) {
           y_grid_flag = 0;
        }
    }
    if (idx == "14") {
        if (document.cs.y_number_on.checked==true) {
           y_value_flag  = 1;
        }
        if(document.cs.y_number_on.checked==false) {
           y_value_flag = 0;
        }
    }
    draw();
}