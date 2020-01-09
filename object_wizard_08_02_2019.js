//
// this is the graphical object popup window -- gather the parameters of the object to be drawn
// close the window in 'housekeeping'
// code update: 08-02-2019
//
function xpop(temi) {
   //
   j2window = window.open('','', 'height=160, width=600, top = 100, left=600, toolbar=no, status=no, scrollbars=no, location=no, menubar=no');
   j2window.document.write("<html><head><title>"+temi+" Object</title></head>");
   j2window.document.write("<body leftmargin=\"5\" topmargin=\"0\" bgcolor=\"#efefef\">");
   j2window.document.write("<form name = \"fin\">");
   j2window.document.write("<span style=\"font-family: arial, helvetica, sans-serif; color: #000000; font-size: small; display: block; padding-top: 5px; width:470px; height: 30px; text-align: center; border-bottom: solid thin navy;\"><b>Add a "+temi+"</b></span>");
   j2window.document.write("<span style = \"font-weight: bold; font-family: arial; font-size: small; padding:5px; border-bottox: solid thin navy;\"> ");
   //
   if (temi == "Line") {
      j2window.document.write("Interactive: <input type = \"checkbox\" name = \"atwo\" value = 0 onchange = \"value = 1\";/>"); 
      j2window.document.write("End points (x1, y1, x2, y2): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" onfocus = \"if(this.value !=\'') this.value=\'';\"/></span>");    
   }
   //
   if (temi == "Arrow") {
       j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
      j2window.document.write("End points (x1, y1, x2, y2, tail = 1, head = 1): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
   }
   //
   if (temi == "Rectangle") {
      j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
      j2window.document.write("Location (x1, y1, width, height): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
   }
   //
   if (temi == "Triangle") {
      j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
      j2window.document.write("Vertices (x1, y1, x2, y2, x3, y3): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
   }
   //
   if (temi == "DropLine") {
       j2window.document.write("Interactive: <input type = \"checkbox\" name = \"atwo\" value = 0 onchange = \"value = 1\";/>"); 
      j2window.document.write("Coordinates (x1, y1, x-drop = 1, ydrop = 1): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
   }
   //
   if (temi == "Circle") {
      j2window.document.write("Interactive: <input type = \"radio\" name = \"atwo\" value = 0 onchange = \"value = 1\";/>"); 
      j2window.document.write("Center (x1, y1, radius): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
    }
    //
    if (temi == "Label") {
      j2window.document.write("Interactive: <input type = \"checkbox\" name = \"atwo\" value = 0 onchange = \"value = 1\";/>"); 
      j2window.document.write("Location (x1, y1, text): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
    }
    //
    if (temi == "Function") {
      j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
      j2window.document.write("f(x) = a + bx + cx<sup>2</sup> + dx<sup>3</sup> + ex<sup>0.5</sup> + h/x <br/>");
      j2window.document.write("(<i>enter coefficients:</i> a, b, c, d, e, h, start,end): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 120px; height: 20px;\" /></span>"); 
    }
    //
    if (temi == "Slice") {
       j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
       j2window.document.write("Center (x1, y1, radius, start angle,degrees): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 100px; height: 20px;\" /></span>"); 
    }	
    //
    // 07-29-2019 -- new code here....
    //
    if (temi == "Slider") {
       j2window.document.write("<input type = \"hidden\" name = \"atwo\" value = 0 onchange = \"value = 0\";/>"); 
       j2window.document.write("text, min value,max value,step): <input type = \"text\" name = \"aone\" value = \"\" style = \"width: 120px; height: 20px;\" /></span>"); 
    }	
    //
    j2window.document.write("<span style = \"font-weight: bold; font-family: arial; font-size: small; padding:5px; border-bottox: solid thin navy;\"> ");
    //
    if(temi== "Label") {
       j2window.document.write(" Font (10, 12b, 12i, 14, ...) <input type = \"text\" name = \"weight\" value = \"\" style = \"width: 30px; height: 20px;\" /> px</span><br/><br/>"); 
    }
    //
    if(temi== "Slider") {
       j2window.document.write(" Initial value: <input type = \"text\" name = \"weight\" value = \"\" style = \"width: 20px; height: 20px;\" /> </span><br/><br/>"); 
    }
    //
    if (temi != "Label" && temi != "Slider") {
       j2window.document.write(" weight (1, 2, 3, ...) <input type = \"text\" name = \"weight\" value = \"\" style = \"width: 20px; height: 20px;\" /></span><br/><br/>"); 
    }
   //
   // color picker -- not used for the slider(s)
   if(temi != "Slider") {
      //
      j2window.document.write("<span style = \"font-weight: bold; font-family: arial; font-size: small; padding:5px;\">Click on a color:</span><br/> ");
      //
      // color picker
      //
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");    
      j2window.document.write("<div class = \"yy\" id=\"red\" style = \"background-color: #ff0000; width: 15px; height: 15px;\" onclick=\"opener.cly(0);\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"maroon\" style = \"background-color: #990000; width: 15px; height: 15px;\" onclick=\"opener.cly(1);\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"magenta\" style = \"background-color: #ff00ff; width: 15px; height: 15px;\" onclick=\"opener.cly(2);\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"purple\" style = \"background-color: #990099; width: 15px; height: 15px;\" onclick=\"opener.cly(3)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"green\" style = \"background-color: #00ff00; width: 15px; height: 15px;\" onclick=\"opener.cly(4)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"pine\" style = \"background-color: #009900; width: 15px; height: 15px;\" onclick=\"opener.cly(5)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"blue\" style = \"background-color: #0000ff; width: 15px; height: 15px;\" onclick=\"opener.cly(7)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"navy\" style = \"background-color: #000099; width: 15px; height: 15px;\" onclick=\"opener.cly(8)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"aqua\" style = \"background-color: #00ffff; width: 15px; height: 15px;\" onclick=\"opener.cly(9)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"teal\" style = \"background-color: #009999; width: 15px; height: 15px;\" onclick=\"opener.cly(6)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"thunder\" style = \"background-color: #0098ff; width: 15px; height: 15px;\" onclick=\"opener.cly(10)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"a2z\" style = \"background-color: #6496db; width: 15px; height: 15px;\" onclick=\"opener.cly(11)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"orange\" style = \"background-color: #ff6600; width: 15px; height: 15px;\" onclick=\"opener.cly(12)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"yellow\" style = \"background-color: #ffff00; width: 15px; height: 15px;\" onclick=\"opener.cly(17)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"silver\" style = \"background-color: #dedede; width: 15px; height: 15px;\" onclick=\"opener.cly(13)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"gray\" style = \"background-color: #c0c0c0; width: 15px; height: 15px;\" onclick=\"opener.cly(14)\">&#160;</div>");
      j2window.document.write("</div> "); 
      j2window.document.write("<div style = \"display: inline-block; cursor: pointer;\">");  
      j2window.document.write("<div class = \"yy\" id=\"white\" style = \"background-color: #ffffff; width: 13px; height: 14px; border: solid thin #000000; \" onclick=\"opener.cly(16)\">&#160;</div>");
      j2window.document.write("<div class = \"yy\" id=\"black\" style = \"background-color: #000000; width: 15px; height: 15px;\" onclick=\"opener.cly(15)\">&#160;</div>");
   }
   j2window.document.write("</div> "); 
   j2window.document.write("<center><input type = \"submit\" value=\"Add item\" onclick=\"opener.doSomething(fin.aone.value,fin.weight.value,fin.atwo.value); \"/></center>");
   j2window.document.write("</form>");
   j2window.document.write("</body></html>");
}