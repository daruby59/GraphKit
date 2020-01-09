// 
// core draw function
// revised: 08-02-2019
//
          function draw() {  
            	var canvas = document.getElementById('Smartart');  
            	if (canvas.getContext){  
               	    var gS2 = canvas.getContext('2d');  
            	}  
	//
	// coordinate system layout
	//
	coordinate(x_scale,y_scale,x_step,y_step,x_axis_flag,y_axis_flag,x_grid_flag,y_grid_flag,x_value_flag,y_value_flag,cartesian_size);
	axis_label(x_label,y_label,title);	
	//
	// draw things here 'count' objects created... 
                // actual canvas functionality is in SmartArt_08_02_0219.js
	//
	for (k=1;k<count+1;k++ ) {
	  if (objecta[k] == "Line") {
	    Line(zero[k],one[k],two[k],three[k],wta[k],cla[k]);
                     if (xact[k] == 1) {
                        interactive("line",k,cla[k]);
                     }
	   }
                  //
                  if (objecta[k] == "Slider") {
                        interactive("Slider",k,zero[k]);
	   }
                  //
	  if (objecta[k] == "DropLine") {
	    DropLine(zero[k],one[k],1,cla[k],two[k],three[k]);
	    Point(zero[k],one[k],wta[k],cla[k]);
                     if (xact[k] == 1) {
                        interactive("dropline",k,cla[k]);
                     }
	  }
	  if(objecta[k] == "Label") {
	    Label(zero[k],one[k],two[k],wta[k],cla[k]);
                     if (xact[k] == 1) {
                        interactive("label",k,cla[k]);
                     }
	  }
	    if(objecta[k] == "Circle") {
	    Circle(zero[k]*1.0,one[k]*1.0,two[k]*1.0,wta[k],cla[k],cla[k]);
                      if (xact[k] == 1) {
                        interactive("circle",k,cla[k]);
                     }
	  }
	  if(objecta[k] == "Slice") {
	    Slice(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,four[k]*1.0,wta[k],cla[k],cla[k]);
	  }
	  if(objecta[k] == "Rectangle") {
	    Rectangle(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,wta[k],cla[k],cla[k]);
	  }
	  if(objecta[k] == "Triangle") {
	    Triangle(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,four[k]*1.0,five[k]*1.0,wta[k],cla[k],cla[k]);
	   }
	  if(objecta[k] == "Arrow") {
	     Arrow(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,wta[k],cla[k],four[k]*1.0,five[k]*1.0);
	  }
	  if(objecta[k] == "Curve") {
	    PlotFunction(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,four[k]*1.0,five[k]*1.0,six[k]*1.0,seven[k]*1.0,wta[k],cla[k]);
	  }
                // new code here ... 'Function' and 'Curve' do the same thing.
                //
                  if(objecta[k] == "Function") {
	    PlotFunction(zero[k]*1.0,one[k]*1.0,two[k]*1.0,three[k]*1.0,four[k]*1.0,five[k]*1.0,six[k]*1.0,seven[k]*1.0,wta[k],cla[k]);
	  }
	}
}