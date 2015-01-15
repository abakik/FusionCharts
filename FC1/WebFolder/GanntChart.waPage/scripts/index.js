
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock
	function getDrugAxis(){
		var drugAxis=[];
//		var drugAxis='[';
//		for(var x=0;x<helloworld.drugs1().length;x++){
//				if(x==helloworld.drugs1().length-1)
//				drugAxis+='{label: "'+helloworld.drugs1()[x].Drug_1+'" }';
//				else
//            	drugAxis+='{label: "'+helloworld.drugs1()[x].Drug_1+'" },';	
//        }
//        drugAxis+=']'
		for(var x=0;x<helloworld.drugs1().length;x++){
			drugAxis.push({label: helloworld.drugs1()[x].Drug_1});
		}
        //alert(drugAxis[0].label);
	return drugAxis;
	}
	
	function getDrugTimes(){
		var drugTimes=[];
		alert(helloworld.times()[0].StartDate)
		for(var x=0;x<helloworld.times().length;x++){
			drugTimes.push({start: helloworld.times()[x].StartDate, end:helloworld.times()[x].endDate});
		}
        alert(drugTimes[0].start);
	return drugTimes;
	}
		
	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert(helloworld.drugs1().length);	
	FusionCharts.ready(function (FusionCharts) {
           var mychart = new FusionCharts({
    type: 'gantt',
    renderAt: 'chart-container',
    width: '750',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "dateformat": "mm/dd/yyyy",
            "caption": "Social Media Optimization",
            "subcaption": "Typical Steps Involved",
            "theme": "fint",
            "canvasBorderAlpha": "40"
        },
        "categories": [{
            "category": [{
                "start": "01/01/2015",
                "end": "01/31/2015",
                "label": "Jan '15"
            }, {
                "start": "02/01/2015",
                "end": "02/28/2015",
                "label": "Feb '15"
            }, {
                "start": "03/01/2015",
                "end": "03/31/2015",
                "label": "Mar '15"
            }, {
                "start": "04/01/2015",
                "end": "04/30/2015",
                "label": "Apr '15"
            }, {
                "start": "05/01/2015",
                "end": "05/31/2015",
                "label": "May '15"
            }, {
                "start": "06/01/2015",
                "end": "06/30/2015",
                "label": "Jun '15"
            }, {
                "start": "07/01/2015",
                "end": "07/31/2015",
                "label": "Jul '15"
            }, {
                "start": "08/01/2015",
                "end": "08/31/2015",
                "label": "Aug '15"
            }]
        }],
        "processes": {
            "fontsize": "12",
            "isbold": "1",
            "align": "right",
            "process": getDrugAxis()
           
            
//            [
//            {
//                "label": helloworld.drugs1()[0].Drug_1
//            }, {
//                "label": "Survey 2000 Customers"
//            }, {
//                "label": "Interpret Requirements"
//            }, {
//                "label": "Market Analysis"
//          
//            }]
        },
        "tasks": {
            "task": getDrugTimes()
//            [{
//                "start": "08/04/2014",
//                "end": "08/10/2014"
//            }, {
//                "start": "08/08/2014",
//                "end": "08/19/2014"
//            }, {
//                "start": "08/19/2014",
//                "end": "12/02/2014"
//            }, {
//                "start": "08/24/2014",
//                "end": "01/03/2015"
//      
//            }]
        }

    }
}
);
            // Render the chart
            mychart.render('chartContainersources_xt_docs_tag_data_gauge_and_widgets_guide_gantt_chart_creating_simple_gantt_chart_example_16');
        });
	
		

		
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
