

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var documentEvent = {};	// @document
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// Add your code here
		var dataArr=helloworld.hello();
		  FusionCharts.ready(function(){
		    var revenueChart = new FusionCharts({
		        "type": "column2d",
		        "renderAt": "chartContainer",
		        "width": "500",
		        "height": "300",
		        "dataFormat": "json",
		        "dataSource":  {
		          "chart": {
		            "caption": "Monthly revenue for last year",
		            "subCaption": "Harry's SuperMart",
		            "xAxisName": "Month",
		            "yAxisName": "Revenues (In USD)",
		            "theme": "fint"
		         },
		         "data": dataArr
		      }

		  });
		revenueChart.render();
		})
		
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here


	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
