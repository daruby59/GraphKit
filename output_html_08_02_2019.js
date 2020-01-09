//
// popup window for pasting code into a text file for future use...
// revised: 08-02-2019
//
function window1() {
     j1window = window.open('', 'ax', 'height=400, width=500, toolbar=no, scrollbars=yes');
     //
     // new code here
     //
     var interact_flag = 0;
     //
     j1window.document.write("\&lt;"+"!DOCTYPE HTML"+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"HTML"+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"head"+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"meta charset = \"UTF-8\""+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"title"+"\&gt;"+title+"\&lt;"+"\&#47;"+"title"+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"script src=\"Smart_art_08_02_2019.js\""+"\&gt;"+"\&lt;"+"\&#47;"+"script"+"\&gt;"+"<br/>");
     j1window.document.write("\&lt;"+"script type=\"text"+"\&#47;"+"javascript\""+"\&gt;"+"<br/>");
     //
     // sliders -- add function calls...
     //
     for (k=1;k<count+1;k++) {
          if (objecta[k] == "Slider") {
             j1window.document.write("var $a"+k+" = 0;"+"<br/>");
             j1window.document.write("function doit"+k+"(xx) {"+"<br/>");
             j1window.document.write("$a"+k+" = xx*1.0;"+"<br/>");
             j1window.document.write("draw();"+"<br/>");
             j1window.document.write("}"+"<br/>");
          }
     }
     //
     j1window.document.write("function draw() {"+"<br/>");
     j1window.document.write("var canvas = document.getElementById(\'Smartart\'); "+"<br/>");
     j1window.document.write("if (canvas.getContext){ "+"<br/>");
     j1window.document.write("var gS2 = canvas.getContext(\'2d\'); "+"<br/>");
     j1window.document.write("} "+"<br/>");
     j1window.document.write(""+"\&#47;"+"\&#47;"+"<br/>");
     j1window.document.write(""+"\&#47;"+"\&#47;"+" Graphing code begins here... equations (i.e., $c = $a3 + $a4) may be inserted."+"<br/>");
     j1window.document.write(""+"\&#47;"+"\&#47;"+"<br/>");
     //
     j1window.document.write("coordinate("+x_scale+","+y_scale+","+x_step+","+y_step+","+x_axis_flag+","+y_axis_flag+","+x_grid_flag+","+y_grid_flag+","+x_value_flag+","+y_value_flag+","+cartesian_size+");"+"<br/>");
     j1window.document.write("axis_label(\""+x_label+"\",\""+y_label+"\",\""+title+"\");"+"<br/>");
     //
     // numeric coordinates or coefficients
     // color -- in quotes
     // line weight -- font size
     // drop -- display parameters
     //
     for (k=1;k<count+1;k++) {
 	   if (objecta[k] == "Line") {
                      if (xact[k] == 1) {
                          interact_flag = interact_flag+1;
                          if (interact_flag >0) {
                              j1window.document.write("Line("+zero[k]+"+$a,"+one[k]+","+two[k]+"+$a,"+three[k]+","+wta[k]+",\""+cla[k]+"\");"+"<br/>");
                          }
                      }
	      j1window.document.write("Line("+zero[k]+","+one[k]+","+two[k]+","+three[k]+","+wta[k]+",\""+cla[k]+"\");"+"<br/>");
	   }
                   //
	   if (objecta[k] == "DropLine") {
                     if (xact[k] == 1) {
                           j1window.document.write("DropLine("+zero[k]+"+$a,"+one[k]+","+wta[k]+ ",\""+cla[k]+"\"," +two[k]+","+three[k]+");"+"<br/>");
	           j1window.document.write("Point("+zero[k]+"+$a,"+one[k]+","+wta[k]+",\""+cla[k]+"\");"+"<br/>");
                     }
	     j1window.document.write("DropLine("+zero[k]+","+one[k]+","+wta[k]+ ",\""+cla[k]+"\"," +two[k]+","+three[k]+");"+"<br/>");
	     j1window.document.write("Point("+zero[k]+","+one[k]+","+wta[k]+",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Label") {
                     if (xact[k] == 1) {
	              j1window.document.write("Label("+zero[k]+"+$a,"+one[k]+",\""+two[k]+"\",\""+wta[k]+"\",\""+cla[k]+"\");"+"<br/>");
                     }
                     j1window.document.write("Label("+zero[k]+","+one[k]+",\""+two[k]+"\",\""+wta[k]+"\",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Circle") {
                     if (xact[k] == 1) {
                          interact_flag = interact_flag+1;
                          if (interact_flag == 1) {
                              j1window.document.write("Circle("+zero[k]*1.0+"+$a,"+one[k]*1.0+","+two[k]*1.0+","+wta[k]+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
                          }
	           if (interact_flag == 2) {
                              j1window.document.write("Circle("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+"+$a,"+wta[k]+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
                          }
                      }
	              j1window.document.write("Circle("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+wta[k]+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Slice") {
	    j1window.document.write("Slice("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+three[k]*1.0+","+four[k]*1.0+","+wta[k]*1.0+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Rectangle") {
	    j1window.document.write("Rectangle("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+three[k]*1.0+","+wta[k]+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Triangle") {
	    j1window.document.write("Triangle("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+three[k]*1.0+","+four[k]*1.0+","+five[k]*1.0+","+wta[k]*1.0+",\""+cla[k]+"\",\""+cla[k]+"\");"+"<br/>");
	  }
                  //
	  if(objecta[k] == "Arrow") {
	    j1window.document.write("Arrow("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+three[k]*1.0+","+wta[k]*1.0+",\""+cla[k]+"\","+four[k]*1.0+","+five[k]*1.0+");"+"<br/>");
	  }
                  //
                  // need an exponential curve
                  //
	  if(objecta[k] == "Curve" || objecta[k] == "Function") {
	        j1window.document.write("PlotFunction("+zero[k]*1.0+","+one[k]*1.0+","+two[k]*1.0+","+three[k]*1.0+","+four[k]*1.0+"," +five[k]*1.0+","+six[k]*1.0+","+seven[k]*1.0+","+wta[k]+",\""+cla[k]+"\");"+"<br/>");
	  }
       }	
       j1window.document.write(""+"\&#47;"+"\&#47;"+"<br/>");
       j1window.document.write("}"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"script "+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"style type=\"text/css\" "+"\&gt;"+"<br/>");
       j1window.document.write("canvas { border: 0px solid black; } "+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"style"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"head "+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"body onload=\"draw();\""+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"table border = \"0\" cellspacing=\"0\" cellpadding=\"0\""+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"tr"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"td"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"canvas id=\"Smartart\" width=\"400\" height=\"400\" bgcolor=\"white\""+"\&gt;"+"<br/>");
       j1window.document.write("No support for the HTML-5 object!"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"canvas"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"td"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"tr"+"\&gt;"+"<br/>");
       //
       // add slider HTML
       //
       for (k=1;k<count+1;k++) {
            if (objecta[k] == "Slider") {
               j1window.document.write("\&lt;" + "tr" + "\&gt;" + "<br/>");
               j1window.document.write("\&lt;" + "td" + "\&gt;" + "<br/>");
               j1window.document.write("\&lt;" + "form" + "\&gt;" + "<br/>");
               //
               j1window.document.write(""+zero[k]+" ($a"+k+") ");
               j1window.document.write("\&lt;" + "input type=\"range\" name = \"slider_"+k+"\" min= \""+one[k]+"\" max = \""+two[k]+"\"  value = \""+wta[k]+"\" step = \""+three[k]+"\" onchange=\"doit"+k+"(this.form.slider_"+k+".value);\"" + "\&#47;" + "\&gt;" + "<br/>");
               //
               j1window.document.write("\&lt;" + "\&#47;" + "form" + "\&gt;" + "<br/>");
               j1window.document.write("\&lt;" + "\&#47;" + "td" + "\&gt;" + "<br/>");
               j1window.document.write("\&lt;" + "\&#47;" + "tr" + "\&gt;" + "<br/>");
           }
       }
       //
       j1window.document.write("\&lt;"+"\&#47;"+"table"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"body"+"\&gt;"+"<br/>");
       j1window.document.write("\&lt;"+"\&#47;"+"html"+"\&gt;"+"<br/>");
       //
}