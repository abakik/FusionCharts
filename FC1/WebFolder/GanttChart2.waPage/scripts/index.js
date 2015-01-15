
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

function getDrugDosesTimes(){
		var drugTimes=[];
		//alert(helloworld.getDoses()[0].StartDate)
		for(var x=0;x<helloworld.getDoses().length;x++){
			if(helloworld.getDoses()[x].StartDate!=null)
			drugTimes.push({start: helloworld.getDoses()[x].StartDate, end:helloworld.getDoses()[x].endDate, processid:helloworld.getDoses()[x].Drug_1, label:helloworld.getDoses()[x].dose1});
			if(helloworld.getDoses()[x].startDate2!=null)
			drugTimes.push({start: helloworld.getDoses()[x].startDate2, end:helloworld.getDoses()[x].endDate2, processid:helloworld.getDoses()[x].Drug_1, label:helloworld.getDoses()[x].dose2});
		}
        alert(drugTimes[3].start);
	return drugTimes;
	}


	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
	
	
	getDrugDosesTimes();
	FusionCharts.ready(function (FusionCharts) {
           var mychart = new FusionCharts({
    type: 'gantt',
    renderAt: 'chart-container',
    width: '650',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Development Division - Work Schedule",
            "subcaption": "Year Overview",
            "dateformat": "mm/dd/yyyy",
            "outputDateFormat": "ddds mnl, yyyy",
            "canvasBorderAlpha": "30",
            "theme": "fint"
        },
        "categories": [{
            "category": 
            
            [{
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
            }, {
                "start": "09/01/2015",
                "end": "09/30/2015",
                "label": "Sep '15"
            }, {
                "start": "10/01/2015",
                "end": "10/31/2015",
                "label": "Oct '15"
            }, {
                "start": "11/01/2015",
                "end": "11/31/2015",
                "label": "Nov '15"
            }
        
            ]
            
        }],
        "processes": {
            "fontsize": "12",
            "isbold": "1",
            "align": "left",
            "headertext": "Employee",
            "headerfontsize": "14",
            "headervalign": "middle",
            "headeralign": "left",
            "process": [{
                "label": "John S.",
                "id": "Halo"
            }, {
                "label": "David G.",
                "id": "Palo"
            }, {
                "label": "Mary P.",
                "id": "Risp"
            }, {
                "label": "Andrew H.",
                "id": "Flep"
            }, {
                "label": "Neil M.",
                "id": "EMP125"
            }]
        },
        "tasks": {
            "showlabels": "1",
            "task": getDrugDosesTimes()
            
//            [{
//                "processid": "Halo",
//                "start": "3/21/2015",
//                "end": "4/21/2015",
//                "label": "Logo-I"
//            }, {
//                "processid": "Halo",
//                "start": "6/22/2015",
//                "end": "7/22/2015",
//                "label": "Logo-II"
//            }, {
//                "processid": "Halo",
//                "start": "9/23/2015",
//                "end": "10/24/2015",
//                "label": "Website template"
//            }, {
//                "processid": "EMP122",
//                "start": "5/21/2015",
//                "end": "9/25/2015",
//                "label": "PHP Blueprint"
//            }, {
//                "processid": "Palo",
//                "start": "2/21/2015",
//                "end": "4/21/2015",
//                "label": "Testing Specification"
//            }, {
//                "processid": "Palo",
//                "start": "5/22/2015",
//                "end": "7/22/2015",
//                "label": "Testing tool research"
//            }, {
//                "processid": "Palo",
//                "start": "9/23/2015",
//                "end": "10/25/2015",
//                "label": "Testing tool integration"
//            }, {
//                "processid": "Risp",
//                "start": "1/22/2015",
//                "end": "2/22/2015",
//                "label": "QA"
//            }, {
//                "processid": "Risp",
//                "start": "3/2/2015",
//                "end": "3/23/2015",
//                "label": "QA"
//            }, {
//                "processid": "Risp",
//                "start": "4/24/2015",
//                "end": "6/25/2015",
//                "label": "QA"
//            }, {
//                "processid": "Risp",
//                "start": "7/25/2015",
//                "end": "8/25/2015",
//                "label": "Weekly Meet"
//            }]
            
        }
    }
}
);
            // Render the chart
            mychart.render('chartContainersources_xt_docs_tag_data_gauge_and_widgets_guide_gantt_chart_adding_multiple_tasks_to_a_process_example_1999');
        });
	

	// end of function	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
