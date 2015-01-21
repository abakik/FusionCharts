
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var zeroed = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock


	function prepCategories(){
		var cats=[];
		var endDateStart=zeroDate(helloworld.getDosesDatesDesc());
		var endDateEnd=lastDate(helloworld.getDosesDatesDesc());
		var startDateStart=zeroDate(helloworld.getDosesDatesAsc());
		var startDateEnd=lastDate(helloworld.getDosesDatesAsc());
		//alert("stat date "+startDateStart);
//		cats.push({start: "01/01/2015", end:"01/31/2015", label:"Jan '15"});
//		cats.push({start: "02/01/2015", end:"02/28/2015", label:"Feb '15"});
//		cats.push({start: "03/01/2015", end:"03/31/2015", label:"Mar '15"});
//		cats.push({start: "04/01/2015", end:"04/30/2015", label:"Apr '15"});
//		cats.push({start: "05/01/2015", end:"05/31/2015", label:"May '15"});
//		cats.push({start: "06/01/2015", end:"06/30/2015", label:"Jun '15"});
//		cats.push({start: "07/01/2015", end:"07/31/2015", label:"Jul '15"});
//		cats.push({start: "08/01/2015", end:"08/31/2015", label:"Aug '15"});
//		cats.push({start: "09/01/2015", end:"09/28/2015", label:"Sep '15"});
//		cats.push({start: "10/01/2015", end:"10/31/2015", label:"Oct '15"});
//		cats.push({start: "11/01/2015", end:"11/30/2015", label:"Nov '15"});
//		cats.push({start: "01/01/2015", end:"03/31/2015", label:"Q1"});
//		cats.push({start: "04/01/2015", end:"06/30/2015", label:"Q2"});
//		cats.push({start: "07/01/2015", end:"09/30/2015", label:"Q3"});
//		cats.push({start: "10/01/2015", end:"12/31/2015", label:"Q4"});
		var dayCount =helloworld.getPeriodDayCount();
		//alert(dayCount);
		var numMonths=(dayCount/30);
		var partsDate=startDateStart.split('/');
		var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		var catMonth;
		
		for(var i=0;i<numMonths;i++){
			if(parseInt(partsDate[0])==13){
				partsDate[0]="01";
				partsDate[2]=(parseInt(partsDate[2])+1).toString();
				alert("year+ "+partsDate[2]);
			}
			switch(partsDate[0]){
			case "01":
				catMonth=months[0]; break;
			case "02":
				catMonth=months[1]; break;
			case "03":
				catMonth=months[2]; break;
			case "04":
				catMonth=months[3]; break;
			case "05":
				catMonth=months[4]; break;
			case "06":
				catMonth=months[5]; break;
			case "07":
				catMonth=months[6]; break;
			case "08":
				catMonth=months[7]; break;
			case "09":
				catMonth=months[8]; break;
			case "10":
				catMonth=months[9]; break;
			case "11":
				catMonth=months[10]; break;
			case "12":
				catMonth=months[11]; break;		
			}
			cats.push({start: partsDate[0]+"/01/"+partsDate[2], end:partsDate[0]+"/30/"+partsDate[2], label:catMonth+" "+partsDate[2].substr(2,2)});
			//alert(partsDate[0]);
			partsDate[0]=(parseInt(partsDate[0])+1).toString();
			//alert(partsDate[0]);
			if(partsDate[0]!="10" || partsDate[0]!="11" || partsDate[0]!="12" || partsDate[0]!="13")
			partsDate[0]="0"+partsDate[0];
			
		
		}
//		cats.push({start: startDateStart, end:midDate, label:"Q1"});
//		cats.push({start: midDate, end:endDateEnd, label:"Q4"});
		//alert(dayCount.days);
		
		
		return cats;
		//alert(endDateStart+" "+endDateEnd);
//            [{
//                "start": "01/01/2015",
//                "end": "01/31/2015",
//                "label": "Jan '15"
//            }, 
//            {
//                "start": "02/01/2015",
//                "end": "02/28/2015",
//                "label": "Feb '15"
//            }, {
//                "start": "03/01/2015",
//                "end": "03/31/2015",
//                "label": "Mar '15"
//            }, {
//                "start": "04/01/2015",
//                "end": "04/30/2015",
//                "label": "Apr '15"
//            }, {
//                "start": "05/01/2015",
//                "end": "05/31/2015",
//                "label": "May '15"
//            }, {
//                "start": "06/01/2015",
//                "end": "06/30/2015",
//                "label": "Jun '15"
//            }, {
//                "start": "07/01/2015",
//                "end": "07/31/2015",
//                "label": "Jul '15"
//            }, {
//                "start": "08/01/2015",
//                "end": "08/31/2015",
//                "label": "Aug '15"
//            }, {
//                "start": "09/01/2015",
//                "end": "09/30/2015",
//                "label": "Sep '15"
//            }, {
//                "start": "10/01/2015",
//                "end": "10/31/2015",
//                "label": "Oct '15"
//            }, 
//            {
//                "start": "11/01/2015",
//                "end": "11/31/2015",
//                "label": "Nov '15"
//            }

	
	}


	function zeroDate(dateStr){ // mm/dd/yyyy
		var partsDate=dateStr.split('/');
		var newDate=partsDate[1]+"/"+"01/"+partsDate[2];
		return newDate;
	}
	function lastDate(dateStr){ // mm/dd/yyyy
		var partsDate=dateStr.split('/');
		var newDate=partsDate[1]+"/"+"30/"+partsDate[2];
		return newDate;
	}

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert(helloworld.getPeriodDayCount());
		prepCategories();
	};// @lock

	zeroed.click = function zeroed_click (event)// @startlock
	{// @endlock
		// Add your code here
		//alert(helloworld.getDosesDatesDesc());
		alert(zeroDate(helloworld.getDosesDatesDesc()));
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
//		var d = new Date();
//		var n = d.getDate();
//		var x=getFirstLastDates();
//		//x.formatDate();
//		var xParts = x.split('-');
//		n=d.getTime();
//		var y=new Date(n);
//		//alert(xParts[2].substring(0, 2)+"</br> "+y+"</br>");
//		var test = d.format("DD-MMM-YYYY");
		//alert(getPeriodDayCount());


	};// @lock

function getPeriodDayCount(){


	//alert(helloworld.getDosesDatesAsc()[0].StartDate); // Start date of the category
    //alert(helloworld.getDosesDatesDesc()[0].endDate2);
    //alert("First month is "+);
//	for(var x=0;x<helloworld.getDosesDatesAsc().length;x++){
//	
//	
//	}
return helloworld.getPeriodDayCount();
}

function getDrugDosesTimes(){
		var drugTimes=[];
		//alert(helloworld.getDoses()[0].StartDate)
		for(var x=0;x<helloworld.getDoses().length;x++){
			if(helloworld.getDoses()[x].StartDate!=null)
			drugTimes.push({start: helloworld.getDoses()[x].StartDate, end:helloworld.getDoses()[x].endDate, processid:helloworld.getDoses()[x].Drug_1, label:helloworld.getDoses()[x].dose1});
			if(helloworld.getDoses()[x].startDate2!=null)
			drugTimes.push({start: helloworld.getDoses()[x].startDate2, end:helloworld.getDoses()[x].endDate2, processid:helloworld.getDoses()[x].Drug_1, label:helloworld.getDoses()[x].dose2});
		}
       // alert(drugTimes[3].start);
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
            "category": prepCategories()
            
//            [{
//                "start": "01/01/2015",
//                "end": "01/31/2015",
//                "label": "Jan '15"
//            }, 
//            {
//                "start": "02/01/2015",
//                "end": "02/28/2015",
//                "label": "Feb '15"
//            }, {
//                "start": "03/01/2015",
//                "end": "03/31/2015",
//                "label": "Mar '15"
//            }, {
//                "start": "04/01/2015",
//                "end": "04/30/2015",
//                "label": "Apr '15"
//            }, {
//                "start": "05/01/2015",
//                "end": "05/31/2015",
//                "label": "May '15"
//            }, {
//                "start": "06/01/2015",
//                "end": "06/30/2015",
//                "label": "Jun '15"
//            }, {
//                "start": "07/01/2015",
//                "end": "07/31/2015",
//                "label": "Jul '15"
//            }, {
//                "start": "08/01/2015",
//                "end": "08/31/2015",
//                "label": "Aug '15"
//            }, {
//                "start": "09/01/2015",
//                "end": "09/30/2015",
//                "label": "Sep '15"
//            }, {
//                "start": "10/01/2015",
//                "end": "10/31/2015",
//                "label": "Oct '15"
//            }, 
//            {
//                "start": "11/01/2015",
//                "end": "11/31/2015",
//                "label": "Nov '15"
//            }
//        
//            ]
            
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
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("zeroed", "click", zeroed.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
