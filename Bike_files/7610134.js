!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(139),i=[t];i.push(n(141)),i.push(n(147)),i.push(n(150)),i.push(n(153)),i.push(n(155)),i.push(n(165)),i.push(n(169)),i.push(n(171)),i.push(n(174)),i.push(n(177)),i.push(n(181)),i.push(n(184)),i.push(n(188)),i.push(n(192)),i.push(n(197)),i.push(n(199)),i.push(n(200)),i.push(n(203)),i.push(n(206)),i.push(n(210)),i.push(n(214)),i.push(n(216)),i.push(n(217)),h.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(73),a=n(17),o=n(20);n(83);var s=o.get("stores/directive"),u=n(11);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(86),d=n(89),f=n(90),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8249813621"], "experiments": [{"weightDistributions": [{"entityId": "8246496618", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[Mike F.] Activate Create Project Modal", "bucketingStrategy": null, "variations": [{"id": "8245766753", "actions": [], "name": "Original"}, {"id": "8246496618", "actions": [{"viewId": "8249813621", "changes": [{"dependencies": [], "type": "custom_code", "id": "9CB63E96-BCC2-4AC5-A947-8D1416EDD412", "value": function($){InvProjects.createProjectActions.openModal();
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "8240064433", "integrationSettings": null}], "id": "8257260228", "weightDistributions": null, "name": "[Mike F.] Activate Create Project Modal", "groupId": null, "commitId": "8254345568", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8308882897"], "experiments": [{"weightDistributions": [{"entityId": "8307020264", "endOfRange": 10000}], "audienceName": "Private Cloud Audiences", "name": "Enterprise Page - Private Cloud launch", "bucketingStrategy": null, "variations": [{"id": "8315180515", "actions": [], "name": "Original"}, {"id": "8307020264", "actions": [{"viewId": "8308882897", "changes": [{"dependencies": [], "type": "custom_code", "id": "36A7E928-896F-4AA6-92FA-D9FAABA57D1A", "value": function($){$(document).ready(function() { 
$( '.new-class' ).click(function( event ) {
  alert( 'This button has .new-class' );
});
});
}}, {"selector": ".hero-title-two", "dependencies": ["36A7E928-896F-4AA6-92FA-D9FAABA57D1A"], "attributes": {"html": "World-class security, now with Private Cloud"}, "type": "attribute", "id": "5389523F-9794-4D03-8547-2F89F005A623", "css": {}}, {"selector": ".hero-button > .trial-trigger", "dependencies": ["5389523F-9794-4D03-8547-2F89F005A623"], "attributes": {"html": "TALK TO US ABOUT PRIVATE CLOUD", "class": "new-class"}, "type": "attribute", "id": "5E6AD570-B6B8-4D32-AC35-346FF33699D7", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8305811627"], "changes": null, "id": "8310310575", "integrationSettings": null}], "id": "8303050520", "weightDistributions": null, "name": "Enterprise Page - Private Cloud launch", "groupId": null, "commitId": "8318245308", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8316971607"], "experiments": [{"weightDistributions": [{"entityId": "8318968535", "endOfRange": 10000}], "audienceName": "[FE] Not created Project", "name": "Personalize Homepage Subhead and CTA", "bucketingStrategy": null, "variations": [{"id": "8319022077", "actions": [{"viewId": "8316971607", "changes": [{"dependencies": [], "type": "custom_code", "id": "AF9D86DA-60B8-483F-B7E2-F42D5BD554A2", "value": function($){(function(){

  var $ = window.jQuery;

  var waitFowJQuery = setInterval(function(){
  		
  		if(typeof $ != 'undefined'){

  			var waitFowJQuery = setInterval(function(){
  		
  				if($('.hero-container .hero-subtitle').length > 0){

		  			 clearInterval(waitFowJQuery);
						/*---------------------------------------------------*/
		  			 $('.hero-container .hero-subtitle').html('Welcome back! Create your first project in just a couple of minutes.');
		  			 $('.hero-container .button.hero-button a').html('START BUILDING NOW!');
            /*---------------------------------------------------*/
			  			 
  			  	}

 			},1);

  		}

  },1);


})();
}}]}], "name": "Original"}, {"id": "8318968535", "actions": [{"viewId": "8316971607", "changes": [{"dependencies": [], "type": "custom_code", "id": "F8C197ED-14DC-434E-9ACF-533B2E80A55E", "value": function($){(function(){
	
  console.info('test is running...');
  var waitForJQuery = setInterval(function(){
  		
  		if(typeof window.jQuery != 'undefined'){
	
		clearInterval(waitForJQuery);
  			var waitForElement = setInterval(function(){
  		
  				if($('.hero-container .hero-subtitle').length > 0){

		  			 clearInterval(waitForElement);
						/*---------------------------------------------------*/
             //$('.hero-title').html("Start your first project, and get building!");
		  			 $('.hero-container .hero-subtitle').html('Welcome back! Create your first project in just a couple of minutes.');
		  			 $('.hero-container .button.hero-button a').html('Start Building Now');
					/*---------------------------------------------------*/
			  			 
  			  	}

 			},1);

  		}

  },1);


})();
}}]}], "name": "Variation 2"}], "audienceIds": ["or", "8321901242"], "changes": null, "id": "8316871609", "integrationSettings": null}], "id": "8319022076", "weightDistributions": null, "name": "Personalize Homepage Subhead and CTA", "groupId": null, "commitId": "8355020124", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8401991982"], "experiments": [{"weightDistributions": [{"entityId": "8403771130", "endOfRange": 2500}, {"entityId": "8401992014", "endOfRange": 10000}], "audienceName": "Technology + >100 employees + Desktop Only", "name": "[FE] ABM - Personalized Promotions (Technology)", "bucketingStrategy": null, "variations": [{"id": "8403771130", "actions": [{"viewId": "8401991982", "changes": []}], "name": "Original"}, {"id": "8401992014", "actions": [{"viewId": "8401991982", "changes": [{"dependencies": [], "type": "custom_code", "id": "200D8759-3941-4B25-BB82-FE0A919A8EC0", "value": function($){(function() {

	var $;
	var count = 0;

	var showPopAfterNODays = 3;
	var showPopAfterUniquePageView = 4;

	var companySet = {
		"Microsoft": "IBM",
		"Twitter": "IBM",
		"Netflix": "IBM",
		"IBM": "Microsoft",
		"Twitter": "IBM",
		"Airbnb": "IBM",
		"Salesforce": "IBM"
	};

	var bodyClassFe = "abm_personalised";
	var customStyleFe = ".logo{max-width: 141px !important;}";
	var fontFe = "Open+Sans:300,400,500,600";

	function fe_data(companyName) {

		// Technology

		//  industries targeted content promotions offers for each level
		var ABM_Personalized = [

			{
				type: 'sticky', // modal
				header: "Do you know the ROI of your design?",
				paragraph: "See how " + companyName + " compares to companies like" +
					replaceString(" Microsoft, Twitter, and Netflix. ", companySet[
						companyName], companyName),
				button: "SEE HOW YOU COMPARE",
				url: "https://www.invisionapp.com/enterprise/impact?source=pn-modal",
				//logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
				background1x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
				background2x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
				buttonBgColor: '#2690ec',
				buttonTextColor: '#ffffff',
				backgroundColor: "#1e4171",
				bodyClass: bodyClassFe,
				customStyle: customStyleFe,
				font: fontFe,
				showWhen: "page_load", // page_load or page_views or days or page_views_days
				waypoint: "25%", // or remove

			}, {
				type: 'sticky', // modal
				header: "Design with executives in mind.",
				paragraph: "Learn how design-driven technology companies (like " +
					companyName + ") design for executives.",
				button: "LEARN NOW",
				url: "https://www.invisionapp.com/webinars/how-to-design-for-executives?source=pn-modal",
				//logo: 'https://s3.amazonaws.com/testdev-images/invision/2-Logo.png',
				background1x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
				background2x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
				buttonBgColor: '#ffffff',
				buttonTextColor: '#ff3366',
				backgroundColor: "#f4436b",
				bodyClass: bodyClassFe,
				customStyle: customStyleFe,
				font: fontFe,
				showWhen: "page_views", // page_load or page_views or days or page_views_days
				//waypoint: "25%", // or remove

			}, {

				type: 'modal', // sticky
				header: "Get a personalized demo for " + companyName + ".",
				paragraph: "See why the world's largest companies like " + replaceString(
					" IBM, Twitter, Airbnb, and Salesforce ", companySet[companyName],
					companyName) + " choose InVision Enterprise.   ",
				button: "GET A DEMO",
				url: "https://www.invisionapp.com/signup/demo?source=pn-modal",
				logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
				background1x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
				background2x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
				buttonBgColor: '#2690ec',
				buttonTextColor: '#ffffff',
				backgroundColor: "#1e4171",
				bodyClass: bodyClassFe,
				customStyle: customStyleFe,
				font: fontFe,
				showWhen: "days", // page_load or page_views or days or page_views_days
				//waypoint: "25%", // or remove

			}, {

				type: 'modal', // sticky
				header: "Screen design. Supercharged.",
				paragraph: "Make your screen design process at " + companyName +
					" radically easier.",
				button: "Download Craft",
				url: "https://www.invisionapp.com/craft?source=pn-modal",
				logo: 'https://s3.amazonaws.com/testdev-images/invision/4-Logo.png',
				background1x: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
				background2x: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
				buttonBgColor: '#ffffff',
				buttonTextColor: '#0d61ca',
				backgroundColor: "#0e6adc",
				bodyClass: bodyClassFe,
				customStyle: customStyleFe,
				font: fontFe,
				showWhen: "page_views_days", // page_load or page_views or days or page_views_days
				//waypoint: "25%", // or remove

			}, {

				type: 'modal', // sticky
				header: "Transform your design to development workflow",
				paragraph: "Handoffs from design to dev are challenging – until now. Inspect has transformed collaboration for technology companies like " +
					companyName + ".",
				button: "LEARN HOW",
				url: "https://www.invisionapp.com/webinars/design-to-development-workflow?source=pn-modal",
				logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
				background1x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
				background2x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
				buttonBgColor: '#2690ec',
				buttonTextColor: '#ffffff',
				backgroundColor: "#1c2238",
				bodyClass: bodyClassFe,
				customStyle: customStyleFe,
				font: fontFe,
				showWhen: "page_views_days", // page_load or page_views or days or page_views_days
				//waypoint: "25%", // or remove
			}

		];

		return ABM_Personalized;

	}


    function replaceString(mainHeading, replaceWord, companyName) {

        return mainHeading.replace(companyName, replaceWord);

    }


    // template function for generating promotins tooltip.
    function generatePromotions(object, level) {

        setLevel(level);
        var currentDate = new Date();
        currentDate.addDays(showPopAfterNODays);

        window.optimizely.push({
            type: "event",
            eventName: "ModalShown" + level
        });


        initUniqueContent(object);

        $("#unique-sticky .close").attr("data-level", level);
        $("#unique-modal .close").attr("data-level", level);

        $("#unique-sticky .cta").attr("data-level", level);
        $("#unique-modal .cta").attr("data-level", level);

        $("#unique-sticky").addClass("promotion_modal" + level);
        $("#unique-modal").addClass("promotion_modal" + level);


    }



    // set level in cookies.
    function setLevel(level) {

        var level_st = level || 0;
        document.cookie = "ABM_Personalized_level=" + level_st +
            ";domain=.invisionapp.com;path=/";

    }

    // read cookies helper function
    function readCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;

    }

    // add Date function
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };


    // create blank cookies
    function createCookie(name) {

        document.cookie = name + "= ;domain=.invisionapp.com;path=/";

    }

    // earase cookies
    function eraseCookie(name) {

        createCookie(name, "");

    }

    // unique function
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    };


    // get difference funtion from two date
    function getDiffereceDate(date1, date2) {

        var date1 = new Date(date1);
        var date2 = new Date(date2);
        var diffDays = parseInt((date2 - date1) / (1000 * 60));
        return diffDays;

    }

    // start function
    var start = function(sticky) {

        if (window.location.href.indexOf("/enterprise") == -1 && window.location
            .href.indexOf("/plans") == -1) {

            $("body").addClass("Personalized_Promotions");

            var level = Number(readCookie("ABM_Personalized_level")) || 0;
            var ABM_Personalized = fe_data(reveal.company.name);

            var waitForMOdel = setInterval(function() {

                if (typeof window.initUniqueContent == "function") {

                    clearInterval(waitForMOdel);
                    generatePromotions(ABM_Personalized[level], level);

                }

            });

        }

    };

    // stre pages into cookies
    function storeUniquePage() {

        var views = [];

        if (readCookie("ABM_Personalized_pageView")) {

            views = JSON.parse(readCookie("ABM_Personalized_pageView"));

        } else {

            views = [];
        }

        views.push(window.location.href);

        var uniqueViews = views.unique();

        var saveViews = JSON.stringify(uniqueViews);

        document.cookie = "ABM_Personalized_pageView=" + saveViews +
            ";domain=.invisionapp.com;path=/";

        count = uniqueViews.length;


    }


    // wait for jquery ready
    var waitForJQuery = setInterval(function() {

        if (typeof window.jQuery != "undefined") {

            $ = window.jQuery;

            clearInterval(waitForJQuery);

            /*----------------------------------------------------*/

            /*-------------- storing the pages  ---------*/

            storeUniquePage();

            /*---------------------- model visible all pages expect enterprise and plan ---------------------------*/

            if (window.location.href.indexOf("/enterprise") == -1 && window.location.href.indexOf("/plans") == -1) {

                var currentLevel = Number(readCookie('ABM_Personalized_level')) || 0;
                var model_data = fe_data('blank')[currentLevel];


                var date1Date = readCookie("ABM_Personalized_showAgain") || new Date();
                var date1 = new Date(date1Date);
                var date2 = new Date();

                //  page_load or page_views or days or page_views_days
                if (model_data.showWhen == "page_load") {

                    // show immediate
                    start(currentLevel);

                } else if (model_data.showWhen == "page_views") {

                    // show after page_views
                    if (count >= showPopAfterUniquePageView) {

                        start(currentLevel);

                    }


                } else if (model_data.showWhen == "days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });
                        start(currentLevel);

                    }

                } else if (model_data.showWhen == "page_views_days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });

                    }

                    if (getDiffereceDate(date1, date2) >= 1 || readCookie(
                            "fe_extend_date") || count >= showPopAfterUniquePageView) {
                        // show after days
                        start(currentLevel);
                    }

                }

            }


            $("body").delegate(
                "#unique-sticky .close , #unique-modal .close, #unique-sticky .cta , #unique-modal .cta",
                "mousedown",
                function(event) {

                    eraseCookie('ABM_Personalized_showAgain');
                    eraseCookie('ABM_Personalized_pageView');

                    var currentLevel = Number($(this).attr("data-level")) + 1;

                    window["optimizely"].push({
                        type: "event",
                        eventName: "7610134__fe_clicks_on_the_close_button_promotion_" + currentLevel
                    });


                    var currentDate = new Date();
                    currentDate.addDays(showPopAfterNODays);
                    document.cookie = "ABM_Personalized_showAgain=" + currentDate + ";domain=.invisionapp.com;path=/";

                    if (currentLevel > 4) {

                        currentLevel = 1;
                        var currentDate = new Date();
                        currentDate.addDays(showPopAfterNODays);

                        document.cookie = "ABM_Personalized_showAgain=" +
                            currentDate + ";domain=.invisionapp.com;path=/";

                    }

                    $(".fe_generatePromotions").hide();
                    setLevel(currentLevel);

                });

            /*----------------------------------------------------*/

        }

    }, 30);



})();
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8404292062"], "changes": null, "id": "8406660498", "integrationSettings": null}], "id": "8404700358", "weightDistributions": null, "name": "[FE] ABM - Personalized Promotions (Technology)", "groupId": null, "commitId": "8514913832", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8401991982"], "experiments": [{"weightDistributions": [{"entityId": "8406512700", "endOfRange": 2500}, {"entityId": "8400945346", "endOfRange": 10000}], "audienceName": "Consumer Goods + >100 employees + Desktop Only", "name": " [FE] ABM - Personalized Promotions (Consumer Goods)", "bucketingStrategy": null, "variations": [{"id": "8406512700", "actions": [{"viewId": "8401991982", "changes": []}], "name": "Original"}, {"id": "8400945346", "actions": [{"viewId": "8401991982", "changes": [{"dependencies": [], "type": "custom_code", "id": "57806374-949E-4B36-976A-D6495DE063B0", "value": function($){(function() {
    'use strict';

    var $ = "undefined";
    var count = 0;

    var showPopAfterNODays = 3;
    var showPopAfterUniquePageView = 4;

    var companySet = {
        Target: "Best Buy",
        "H&M": "Best Buy",
        Nike: "Best Buy",
        Walmart: "Best Buy",
        Netflix: "Best Buy",
        Starbucks: "Best Buy"
    };

    var bodyClassFe = "abm_personalised";
    var customStyleFe = ".logo{max-width: 141px !important;} ";
    var fontFe = "Open+Sans:300,400,500,600";


    function fe_data(companyName) {

        //  industries targeted content promotions offers for each level
        var ABM_Personalized = [{
                type: "sticky", // modal
                header: "Do you know the ROI of your design?",
                paragraph: "See how " +
                    companyName + " compares to companies like " +
                    replaceString(" Amazon, H&M, Nike and Walmart. ", companySet[
                        companyName], companyName),
                button: "SEE HOW YOU COMPARE",
                url: "https://www.invisionapp.com/enterprise/impact",
                //logo: "//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png",
                background1x: "https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png",
                background2x: "https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png",
                buttonBgColor: "#2690ec",
                buttonTextColor: "#ffffff",
                backgroundColor: "#1e4171",
                bodyClass: bodyClassFe,
                customStyle: customStyleFe,
                font: fontFe,
                showWhen: "page_load", // page_load or page_views or days or page_views_days
                waypoint: "25%" // or remove
            }, {
                type: "sticky", // modal
                header: "Design with executives in mind",
                paragraph: "Learn how design-driven retail companies (like " +
                    companyName + ") design for executives.",
                button: "LEARN HOW",
                url: "https://www.invisionapp.com/webinars/how-to-design-for-executives",
                //logo: "https://s3.amazonaws.com/testdev-images/invision/2-Logo.png",
                background1x: "https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png",
                background2x: "https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png",
                buttonBgColor: "#ffffff",
                buttonTextColor: "#ff3366",
                backgroundColor: "#f4436b",
                bodyClass: bodyClassFe,
                customStyle: customStyleFe,
                showWhen: "page_views", // page_load or page_views or days or page_views_days
                font: fontFe
                //waypoint: "25%", // or remove
            }, {
                type: "modal", // sticky
                header: "Get a personalized demo for " + companyName + ".",
                paragraph: "See why the world\"s largest companies like " +
                    replaceString(" Amazon, H&M, Nike and Starbucks ", companySet[
                        companyName], companyName) + "  choose InVision Enterprise.   ",
                button: "GET A DEMO",
                url: "https://www.invisionapp.com/enterprise/demo",
                logo: "//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png",
                background1x: "//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png",
                background2x: "//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png",
                buttonBgColor: "#2690ec",
                buttonTextColor: "#ffffff",
                backgroundColor: "#1e4171",
                bodyClass: bodyClassFe,
                customStyle: customStyleFe,
                showWhen: "days", // page_load or page_views or days or page_views_days
                font: fontFe
                // waypoint: "25%", // or remove
            }, {
                type: "modal", // sticky
                header: "Screen design. Supercharged",
                paragraph: "Make your screen design process at " + companyName +
                    " radically easier.",
                button: "Download Craft",
                url: "https://www.invisionapp.com/craft",
                logo: "https://s3.amazonaws.com/testdev-images/invision/4-Logo.png",
                background1x: "https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png",
                background2x: "https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png",
                buttonBgColor: "#ffffff",
                buttonTextColor: "#0d61ca",
                backgroundColor: "#0e6adc",
                bodyClass: bodyClassFe,
                customStyle: customStyleFe,
                showWhen: "page_views_days", // page_load or page_views or days or page_views_days
                font: fontFe
                // waypoint: "25%", // or remove
            }, {

                type: "modal", // sticky
                header: "Transform your design to development workflow",
                paragraph: "Handoffs from design to dev are challenging – until now. Inspect has transformed collaboration for companies like " +
                    companyName + ".",
                button: "LEARN HOW",
                url: "https://www.invisionapp.com/webinars/design-to-development-workflow",
                logo: "//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png",
                background1x: "https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png",
                background2x: "https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png",
                buttonBgColor: "#2690ec",
                buttonTextColor: "#ffffff",
                backgroundColor: "#1c2238",
                bodyClass: bodyClassFe,
                customStyle: customStyleFe,
                showWhen: "page_views_days", // page_load or page_views or days or page_views_days
                font: fontFe
                // waypoint: "25%", // or remove
            }

        ];

        return ABM_Personalized;

    }


    function replaceString(mainHeading, replaceWord, companyName) {

        return mainHeading.replace(companyName, replaceWord);

    }


    // template function for generating promotins tooltip.
    function generatePromotions(object, level) {

        setLevel(level);
        var currentDate = new Date();
        currentDate.addDays(showPopAfterNODays);

        window.optimizely.push({
            type: "event",
            eventName: "ModalShown" + level
        });


        initUniqueContent(object);

        $("#unique-sticky .close").attr("data-level", level);
        $("#unique-modal .close").attr("data-level", level);

        $("#unique-sticky .cta").attr("data-level", level);
        $("#unique-modal .cta").attr("data-level", level);

        $("#unique-sticky").addClass("promotion_modal" + level);
        $("#unique-modal").addClass("promotion_modal" + level);


    }



    // set level in cookies.
    function setLevel(level) {

        var level_st = level || 0;
        document.cookie = "ABM_Personalized_level=" + level_st +
            ";domain=.invisionapp.com;path=/";

    }

    // read cookies helper function
    function readCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;

    }

    // add Date function
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };


    // create blank cookies
    function createCookie(name) {

        document.cookie = name + "= ;domain=.invisionapp.com;path=/";

    }

    // earase cookies
    function eraseCookie(name) {

        createCookie(name, "");

    }

    // unique function
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    };


    // get difference funtion from two date
    function getDiffereceDate(date1, date2) {

        var date1 = new Date(date1);
        var date2 = new Date(date2);
        var diffDays = parseInt((date2 - date1) / (1000 * 60));
        return diffDays;

    }

    // start function
    var start = function(sticky) {

        if (window.location.href.indexOf("/enterprise") == -1 && window.location
            .href.indexOf("/plans") == -1) {

            $("body").addClass("Personalized_Promotions");

            var level = Number(readCookie("ABM_Personalized_level")) || 0;
            var ABM_Personalized = fe_data(reveal.company.name);

            var waitForMOdel = setInterval(function() {

                if (typeof window.initUniqueContent == "function") {

                    clearInterval(waitForMOdel);
                    generatePromotions(ABM_Personalized[level], level);

                }

            });

        }

    };

    // stre pages into cookies
    function storeUniquePage() {

        var views = [];

        if (readCookie("ABM_Personalized_pageView")) {

            views = JSON.parse(readCookie("ABM_Personalized_pageView"));

        } else {

            views = [];
        }

        views.push(window.location.href);

        var uniqueViews = views.unique();

        var saveViews = JSON.stringify(uniqueViews);

        document.cookie = "ABM_Personalized_pageView=" + saveViews +
            ";domain=.invisionapp.com;path=/";

        count = uniqueViews.length;


    }


    // wait for jquery ready
    var waitForJQuery = setInterval(function() {

        if (typeof window.jQuery != "undefined") {

            $ = window.jQuery;

            clearInterval(waitForJQuery);

            /*----------------------------------------------------*/

            /*-------------- storing the pages  ---------*/

            storeUniquePage();

            /*---------------------- model visible all pages expect enterprise and plan ---------------------------*/

            if (window.location.href.indexOf("/enterprise") == -1 && window.location.href.indexOf("/plans") == -1) {

                var currentLevel = Number(readCookie('ABM_Personalized_level')) || 0;
                var model_data = fe_data('blank')[currentLevel];


                var date1Date = readCookie("ABM_Personalized_showAgain") || new Date();
                var date1 = new Date(date1Date);
                var date2 = new Date();

                //  page_load or page_views or days or page_views_days
                if (model_data.showWhen == "page_load") {

                    // show immediate
                    start(currentLevel);

                } else if (model_data.showWhen == "page_views") {

                    // show after page_views
                    if (count >= showPopAfterUniquePageView) {

                        start(currentLevel);

                    }


                } else if (model_data.showWhen == "days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });
                        start(currentLevel);

                    }

                } else if (model_data.showWhen == "page_views_days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });

                    }

                    if (getDiffereceDate(date1, date2) >= 1 || readCookie(
                            "fe_extend_date") || count >= showPopAfterUniquePageView) {
                        // show after days
                        start(currentLevel);
                    }

                }

            }


            $("body").delegate(
                "#unique-sticky .close , #unique-modal .close, #unique-sticky .cta , #unique-modal .cta",
                "mousedown",
                function(event) {

                    eraseCookie('ABM_Personalized_showAgain');
                    eraseCookie('ABM_Personalized_pageView');

                    var currentLevel = Number($(this).attr("data-level")) + 1;

                    window["optimizely"].push({
                        type: "event",
                        eventName: "7610134__fe_clicks_on_the_close_button_promotion_" + currentLevel
                    });


                    var currentDate = new Date();
                    currentDate.addDays(showPopAfterNODays);
                    document.cookie = "ABM_Personalized_showAgain=" + currentDate + ";domain=.invisionapp.com;path=/";

                    if (currentLevel > 4) {

                        currentLevel = 1;
                        var currentDate = new Date();
                        currentDate.addDays(showPopAfterNODays);

                        document.cookie = "ABM_Personalized_showAgain=" +
                            currentDate + ";domain=.invisionapp.com;path=/";

                    }

                    $(".fe_generatePromotions").hide();
                    setLevel(currentLevel);

                });

            /*----------------------------------------------------*/

        }

    }, 30);



})();
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8404910956"], "changes": null, "id": "8407273253", "integrationSettings": null}], "id": "8405803179", "weightDistributions": null, "name": " [FE] ABM - Personalized Promotions (Consumer Goods)", "groupId": null, "commitId": "8515613326", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8401991982"], "experiments": [{"weightDistributions": [{"entityId": "8398902251", "endOfRange": 2500}, {"entityId": "8406512709", "endOfRange": 10000}], "audienceName": "Finance + >100 employees + Desktop Only", "name": "[FE] ABM - Personalized Promotions (Finance)", "bucketingStrategy": null, "variations": [{"id": "8398902251", "actions": [{"viewId": "8401991982", "changes": []}], "name": "Original"}, {"id": "8406512709", "actions": [{"viewId": "8401991982", "changes": [{"dependencies": [], "type": "custom_code", "id": "CF64C5B9-7F90-488B-BD75-1690E3F362D9", "value": function($){(function() {


  var $;
  var count = 0;

  var showPopAfterNODays = 3;
  var showPopAfterUniquePageView = 4;

  var companySet = {
    "Intuit": "Wells Fargo",
    "Capital One": "Wells Fargo",
    "Visa": "Wells Fargo",
    "Walmart": "Wells Fargo"
  };

  var bodyClassFe = "abm_personalised";
  var customStyleFe = ".logo{max-width: 141px !important;}";
  var fontFe = "Open+Sans:300,400,500,600";

  function fe_data(companyName) {

    // Finance
    //  industries targeted content promotions offers for each level
    var ABM_Personalized = [{
        type: 'sticky', // modal
        header: "Do you know the ROI of your design?",
        paragraph: "See how you compare to companies like " +
          replaceString(" Visa, Capital One, and PayPal ", companySet[
            companyName], companyName),
        button: "SEE HOW YOU COMPARE",
        url: "https://www.invisionapp.com/enterprise/impact",
        //logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1e4171",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        font: fontFe,
        showWhen: "page_load", // page_load or page_views or days or page_views_days
        waypoint: "25%", // or remove
      }, {
        type: 'sticky', // modal
        header: "Design with executives in mind",
        paragraph: "Learn how design-driven financial companies (like " +
          companyName + ") design for executives.",
        button: "LEARN HOW",
        url: "https://www.invisionapp.com/webinars/how-to-design-for-executives",
       // logo: 'https://s3.amazonaws.com/testdev-images/invision/2-Logo.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
        buttonBgColor: '#ffffff',
        buttonTextColor: '#ff3366',
        backgroundColor: "#f4436b",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        showWhen: "page_views", // page_load or page_views or days or page_views_days
        font: fontFe,
         //waypoint: "25%", // or remove
      }, {
        type: 'modal', // modal
        header: "Get a personalized demo for " + companyName + ".",
        paragraph: 'See why the world\'s largest companies like ' +
          replaceString(" Intuit, Capital One, and Visa ", companySet[
            companyName], companyName) + ' choose InVision Enterprise.  ',
        button: "GET A DEMO",
        url: "https://www.invisionapp.com/enterprise/demo",
        logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        background1x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
        background2x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1e4171",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        showWhen: "days", // page_load or page_views or days or page_views_days
        font: fontFe,
        // waypoint: "25%", // or remove
      }, {
        type: 'modal', // modal
        header: "Screen design. Supercharged",
        paragraph: "Make your screen design process at " + companyName +
          " radically easier.",
        button: "Download Craft",
        url: "https://www.invisionapp.com/craft",
        logo: 'https://s3.amazonaws.com/testdev-images/invision/4-Logo.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
        buttonBgColor: '#ffffff',
        buttonTextColor: '#0d61ca',
        backgroundColor: "#0e6adc",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        showWhen: "page_views_days", // page_load or page_views or days or page_views_days
        font: fontFe,
        // waypoint: "25%", // or remove
      }, {
        type: 'modal', // modal
        header: "Transform your design to development workflow",
        paragraph: "Handoffs from design to dev are challenging – until now. Inspect has transformed collaboration for financial companies like " +
          companyName + ".",
        button: "LEARN HOW",
        url: "https://www.invisionapp.com/webinars/design-to-development-workflow",
        logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1c2238",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        showWhen: "page_views_days", // page_load or page_views or days or page_views_days
        font: fontFe,
        // waypoint: "25%", // or remove
      }

    ];

    return ABM_Personalized;

  }



    function replaceString(mainHeading, replaceWord, companyName) {

        return mainHeading.replace(companyName, replaceWord);

    }


    // template function for generating promotins tooltip.
    function generatePromotions(object, level) {

        setLevel(level);
        var currentDate = new Date();
        currentDate.addDays(showPopAfterNODays);

        window.optimizely.push({
            type: "event",
            eventName: "ModalShown" + level
        });


        initUniqueContent(object);

        $("#unique-sticky .close").attr("data-level", level);
        $("#unique-modal .close").attr("data-level", level);

        $("#unique-sticky .cta").attr("data-level", level);
        $("#unique-modal .cta").attr("data-level", level);

        $("#unique-sticky").addClass("promotion_modal" + level);
        $("#unique-modal").addClass("promotion_modal" + level);


    }



    // set level in cookies.
    function setLevel(level) {

        var level_st = level || 0;
        document.cookie = "ABM_Personalized_level=" + level_st +
            ";domain=.invisionapp.com;path=/";

    }

    // read cookies helper function
    function readCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;

    }

    // add Date function
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };


    // create blank cookies
    function createCookie(name) {

        document.cookie = name + "= ;domain=.invisionapp.com;path=/";

    }

    // earase cookies
    function eraseCookie(name) {

        createCookie(name, "");

    }

    // unique function
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    };


    // get difference funtion from two date
    function getDiffereceDate(date1, date2) {

        var date1 = new Date(date1);
        var date2 = new Date(date2);
        var diffDays = parseInt((date2 - date1) / (1000 * 60));
        return diffDays;

    }

    // start function
    var start = function(sticky) {

        if (window.location.href.indexOf("/enterprise") == -1 && window.location
            .href.indexOf("/plans") == -1) {

            $("body").addClass("Personalized_Promotions");

            var level = Number(readCookie("ABM_Personalized_level")) || 0;
            var ABM_Personalized = fe_data(reveal.company.name);

            var waitForMOdel = setInterval(function() {

                if (typeof window.initUniqueContent == "function") {

                    clearInterval(waitForMOdel);
                    generatePromotions(ABM_Personalized[level], level);

                }

            });

        }

    };

    // stre pages into cookies
    function storeUniquePage() {

        var views = [];

        if (readCookie("ABM_Personalized_pageView")) {

            views = JSON.parse(readCookie("ABM_Personalized_pageView"));

        } else {

            views = [];
        }

        views.push(window.location.href);

        var uniqueViews = views.unique();

        var saveViews = JSON.stringify(uniqueViews);

        document.cookie = "ABM_Personalized_pageView=" + saveViews +
            ";domain=.invisionapp.com;path=/";

        count = uniqueViews.length;


    }


    // wait for jquery ready
    var waitForJQuery = setInterval(function() {

        if (typeof window.jQuery != "undefined") {

            $ = window.jQuery;

            clearInterval(waitForJQuery);

            /*----------------------------------------------------*/

            /*-------------- storing the pages  ---------*/

            storeUniquePage();

            /*---------------------- model visible all pages expect enterprise and plan ---------------------------*/

            if (window.location.href.indexOf("/enterprise") == -1 && window.location.href.indexOf("/plans") == -1) {

                var currentLevel = Number(readCookie('ABM_Personalized_level')) || 0;
                var model_data = fe_data('blank')[currentLevel];


                var date1Date = readCookie("ABM_Personalized_showAgain") || new Date();
                var date1 = new Date(date1Date);
                var date2 = new Date();

                //  page_load or page_views or days or page_views_days
                if (model_data.showWhen == "page_load") {

                    // show immediate
                    start(currentLevel);

                } else if (model_data.showWhen == "page_views") {

                    // show after page_views
                    if (count >= showPopAfterUniquePageView) {

                        start(currentLevel);

                    }


                } else if (model_data.showWhen == "days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });
                        start(currentLevel);

                    }

                } else if (model_data.showWhen == "page_views_days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });

                    }

                    if (getDiffereceDate(date1, date2) >= 1 || readCookie(
                            "fe_extend_date") || count >= showPopAfterUniquePageView) {
                        // show after days
                        start(currentLevel);
                    }

                }

            }


            $("body").delegate(
                "#unique-sticky .close , #unique-modal .close, #unique-sticky .cta , #unique-modal .cta",
                "mousedown",
                function(event) {

                    eraseCookie('ABM_Personalized_showAgain');
                    eraseCookie('ABM_Personalized_pageView');

                    var currentLevel = Number($(this).attr("data-level")) + 1;

                    window["optimizely"].push({
                        type: "event",
                        eventName: "7610134__fe_clicks_on_the_close_button_promotion_" + currentLevel
                    });


                    var currentDate = new Date();
                    currentDate.addDays(showPopAfterNODays);
                    document.cookie = "ABM_Personalized_showAgain=" + currentDate + ";domain=.invisionapp.com;path=/";

                    if (currentLevel > 4) {

                        currentLevel = 1;
                        var currentDate = new Date();
                        currentDate.addDays(showPopAfterNODays);

                        document.cookie = "ABM_Personalized_showAgain=" +
                            currentDate + ";domain=.invisionapp.com;path=/";

                    }

                    $(".fe_generatePromotions").hide();
                    setLevel(currentLevel);

                });

            /*----------------------------------------------------*/

        }

    }, 30);



})();
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8401580452"], "changes": null, "id": "8400945349", "integrationSettings": null}], "id": "8406512708", "weightDistributions": null, "name": "[FE] ABM - Personalized Promotions (Finance)", "groupId": null, "commitId": "8517643328", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8297278910"], "experiments": [{"weightDistributions": [{"entityId": "8414327842", "endOfRange": 10000}], "audienceName": "paid", "name": "Signup Page personalized for PPC", "bucketingStrategy": null, "variations": [{"id": "8414033602", "actions": [{"viewId": "8297278910", "changes": []}], "name": "Original"}, {"id": "8414327842", "actions": [{"viewId": "8297278910", "changes": [{"value": "<style>body > div.panel-wrapper > a{\n  background: url(//cdn.optimizely.com/img/211020876/2f1edb44ddc1431b86fcdece02615d7b.png) no-repeat;\n    background-size: 118px;\n    width: 118px;\n}\n/*\nbody > div.panel-wrapper > a:hover{\n    background: url(https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/6671690.png?x-amz-meta-iv=2&x-amz-meta-ck=256dd1364a7c8513d9b86a0b84fbd563&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1498867200&Signature=k25SCiZaP0Q0jG6wZ%2Fd4u6v6DM8%3D) no-repeat;\n  background-size: 40px;\n  width: 40px;\n    \n}\n\n*/\n\n\np.try-invision {\n    color: #F36;\n    text-align: center;\n    font-size: 12px;\n    margin-top: 0;\n}\np.try-invision a {\n    color: #F36;\n    text-decoration: underline;\n}\n.form__legal {\n\tpadding-bottom: 10px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "86C33B02-3E2D-40A0-985E-37D346F3F55A"}, {"selector": "h1", "dependencies": ["86C33B02-3E2D-40A0-985E-37D346F3F55A"], "attributes": {"html": "Create and share projects with the world's leading design platform.\n<span class=\"main-panel__subheading\">\n\t\t\t\t\t\t\t\t\t\tGet started absolutely free.  No credit card needed.\n\t\t\t\t\t\t\t\t\t</span>"}, "type": "attribute", "id": "2DE0E6CB-C458-4FF2-B2F0-687CFC03AA03", "css": {}}, {"selector": "button", "dependencies": ["2DE0E6CB-C458-4FF2-B2F0-687CFC03AA03"], "attributes": {"html": "Get Started"}, "type": "attribute", "id": "6C44A1A9-73C4-4457-9923-437BA5851518", "css": {}}, {"selector": ".form__legal", "dependencies": ["6C44A1A9-73C4-4457-9923-437BA5851518"], "attributes": {"html": "By clicking \"<span class=\"sign-up__cta-text\">Get Started</span>\" I agree to InVision's\n<a href=\"http://www.invisionapp.com/terms_of_service?__hstc=195591411.cd66d1b2b2e714fbfda2d5b380f2030f.1496777819070.1496777819070.1496777819070.1&amp;__hssc=195591411.1.1496777819070&amp;__hsfp=257365525\" target=\"_blank\">Terms of Service</a>."}, "type": "attribute", "id": "C4F7E1BE-183C-466A-8EAD-D3208F1EF4BE", "css": {}}, {"value": "<p class=\"try-invision\">Have more than 5 designers on your team? Try <a href=\"https://www.invisionapp.com/enterprise/signup\">InVision Enterprise</a></p>", "selector": ".form__legal", "dependencies": ["C4F7E1BE-183C-466A-8EAD-D3208F1EF4BE"], "operator": "after", "type": "append", "id": "0EC9F427-7053-4EE2-95EC-9F39DCC680F1"}, {"selector": ".try-invision", "dependencies": ["0EC9F427-7053-4EE2-95EC-9F39DCC680F1"], "attributes": {}, "type": "attribute", "id": "3387322E-A74A-4363-8BC7-B761135265BF", "css": {"color": "#596377"}}, {"selector": ".try-invision > a", "dependencies": ["3387322E-A74A-4363-8BC7-B761135265BF"], "attributes": {}, "type": "attribute", "id": "719BA5DE-2AC4-473E-B627-8738FEE98C89", "css": {"color": "#2f7bbd"}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8426261478"], "changes": null, "id": "8418262630", "integrationSettings": null}], "id": "8426310993", "weightDistributions": null, "name": "Signup Page personalized for PPC", "groupId": null, "commitId": "8428872341", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8401991982"], "experiments": [{"weightDistributions": [{"entityId": "8494783331", "endOfRange": 2500}, {"entityId": "8484393103", "endOfRange": 10000}], "audienceName": "Other Industry + >100 employees + Desktop Only", "name": "[FE] ABM - Personalized Promotions (Other Industry)", "bucketingStrategy": null, "variations": [{"id": "8494783331", "actions": [{"viewId": "8401991982", "changes": []}], "name": "Original"}, {"id": "8484393103", "actions": [{"viewId": "8401991982", "changes": [{"dependencies": [], "type": "custom_code", "id": "EEE7F597-C4AD-4EF0-995F-926A65D3492A", "value": function($){(function() {

  var $;
  var count = 0;

  var showPopAfterNODays = 3;
  var showPopAfterUniquePageView = 4;

  var companySet = {
    "Microsoft": "Microsoft",
    "Twitter": "Twitter",
    "Netflix": "Netflix"
  };

  var bodyClassFe = "abm_personalised";
  var customStyleFe = ".logo{max-width: 141px !important;}";
  var fontFe = "Open+Sans:300,400,500,600";

  function fe_data(companyName) {

    // Technology

    //  industries targeted content promotions offers for each level
    var ABM_Personalized = [{
        type: 'sticky', // modal
        header: "Do you know the ROI of your design?",
        paragraph: "See how " + companyName +
          " compares to the world's largest companies.",
        button: "SEE HOW YOU COMPARE",
        // logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        url: "https://www.invisionapp.com/enterprise/impact",
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/1-Hi-ROI.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1e4171",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        font: fontFe,
        showWhen: "page_load", // page_load or page_views or days or page_views_days
        waypoint: "25%", // or remove
      }, {
        type: 'sticky', // modal
        header: "Design with executives in mind",
        paragraph: "Learn how design-driven companies (like " +
          companyName + ") design for executives.",
        button: "LEARN HOW",
        url: "https://www.invisionapp.com/webinars/how-to-design-for-executives",
        //logo: 'https://s3.amazonaws.com/testdev-images/invision/2-Logo.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/2-DesignWith.png',
        buttonBgColor: '#ffffff',
        buttonTextColor: '#ff3366',
        backgroundColor: "#f4436b",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        font: fontFe,
        showWhen: "page_views", // page_load or page_views or days or page_views_days
        //waypoint: "25%", // or remove
      }, {
        type: 'modal', // sticky
        header: "See a demo of InVision Enterprise",
        paragraph: "Teams like " + companyName +
          " rely on InVision Enterprise. Get a demo and see why.",
        button: "GET A DEMO",
        url: "https://www.invisionapp.com/enterprise/demo",
        logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        background1x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
        background2x: '//cdn.optimizely.com/img/7610134/f08f871ea7c442b78c302f23c16266ad.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1e4171",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        font: fontFe,
        showWhen: "days", // page_load or page_views or days or page_views_days
       // waypoint: "25%", // or remove
      }, {
        type: 'modal', // sticky
        header: "Screen design. Supercharged",
        paragraph: "Make your screen design process at " + companyName +
          " radically easier.",
        button: "Download Craft",
        url: "https://www.invisionapp.com/craft",
        logo: 'https://s3.amazonaws.com/testdev-images/invision/4-Logo.png',
        background1: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/4-ScreenDesign.png',
        buttonBgColor: '#ffffff',
        buttonTextColor: '#0d61ca',
        backgroundColor: "#0e6adc",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        showWhen: "page_views_days", // page_load or page_views or days or page_views_days
        font: fontFe,
       // waypoint: "25%", // or remove
      }, {
        type: 'modal', // sticky
        header: "Transform your design to development workflow",
        paragraph: "Handoffs from design to dev are challenging – until now. See how Inspect can transform collaboration at " +
          companyName + ".",
        button: "LEARN HOW",
        url: "https://www.invisionapp.com/webinars/design-to-development-workflow",
        logo: '//cdn.optimizely.com/img/536963401/6efcfe127a464c259b4a84ccf9f483fe.png',
        background1x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
        background2x: 'https://s3.amazonaws.com/testdev-images/invision/5-Workflow.png',
        buttonBgColor: '#2690ec',
        buttonTextColor: '#ffffff',
        backgroundColor: "#1c2238",
        bodyClass: bodyClassFe,
        customStyle: customStyleFe,
        font: fontFe,
        showWhen: "page_views_days", // page_load or page_views or days or page_views_days
       // waypoint: "25%", // or remove
      }

    ];

    return ABM_Personalized;

  }


    function replaceString(mainHeading, replaceWord, companyName) {

        return mainHeading.replace(companyName, replaceWord);

    }


    // template function for generating promotins tooltip.
    function generatePromotions(object, level) {

        setLevel(level);
        var currentDate = new Date();
        currentDate.addDays(showPopAfterNODays);

        window.optimizely.push({
            type: "event",
            eventName: "ModalShown" + level
        });


        initUniqueContent(object);

        $("#unique-sticky .close").attr("data-level", level);
        $("#unique-modal .close").attr("data-level", level);

        $("#unique-sticky .cta").attr("data-level", level);
        $("#unique-modal .cta").attr("data-level", level);

        $("#unique-sticky").addClass("promotion_modal" + level);
        $("#unique-modal").addClass("promotion_modal" + level);


    }



    // set level in cookies.
    function setLevel(level) {

        var level_st = level || 0;
        document.cookie = "ABM_Personalized_level=" + level_st +
            ";domain=.invisionapp.com;path=/";

    }

    // read cookies helper function
    function readCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;

    }

    // add Date function
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };


    // create blank cookies
    function createCookie(name) {

        document.cookie = name + "= ;domain=.invisionapp.com;path=/";

    }

    // earase cookies
    function eraseCookie(name) {

        createCookie(name, "");

    }

    // unique function
    Array.prototype.contains = function(v) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    };


    // get difference funtion from two date
    function getDiffereceDate(date1, date2) {

        var date1 = new Date(date1);
        var date2 = new Date(date2);
        var diffDays = parseInt((date2 - date1) / (1000 * 60));
        return diffDays;

    }

    // start function
    var start = function(sticky) {

        if (window.location.href.indexOf("/enterprise") == -1 && window.location
            .href.indexOf("/plans") == -1) {

            $("body").addClass("Personalized_Promotions");

            var level = Number(readCookie("ABM_Personalized_level")) || 0;
            var ABM_Personalized = fe_data(reveal.company.name);

            var waitForMOdel = setInterval(function() {

                if (typeof window.initUniqueContent == "function") {

                    clearInterval(waitForMOdel);
                    generatePromotions(ABM_Personalized[level], level);

                }

            });

        }

    };

    // stre pages into cookies
    function storeUniquePage() {

        var views = [];

        if (readCookie("ABM_Personalized_pageView")) {

            views = JSON.parse(readCookie("ABM_Personalized_pageView"));

        } else {

            views = [];
        }

        views.push(window.location.href);

        var uniqueViews = views.unique();

        var saveViews = JSON.stringify(uniqueViews);

        document.cookie = "ABM_Personalized_pageView=" + saveViews +
            ";domain=.invisionapp.com;path=/";

        count = uniqueViews.length;


    }


    // wait for jquery ready
    var waitForJQuery = setInterval(function() {

        if (typeof window.jQuery != "undefined") {

            $ = window.jQuery;

            clearInterval(waitForJQuery);

            /*----------------------------------------------------*/

            /*-------------- storing the pages  ---------*/

            storeUniquePage();

            /*---------------------- model visible all pages expect enterprise and plan ---------------------------*/

            if (window.location.href.indexOf("/enterprise") == -1 && window.location.href.indexOf("/plans") == -1) {

                var currentLevel = Number(readCookie('ABM_Personalized_level')) || 0;
                var model_data = fe_data('blank')[currentLevel];


                var date1Date = readCookie("ABM_Personalized_showAgain") || new Date();
                var date1 = new Date(date1Date);
                var date2 = new Date();

                //  page_load or page_views or days or page_views_days
                if (model_data.showWhen == "page_load") {

                    // show immediate
                    start(currentLevel);

                } else if (model_data.showWhen == "page_views") {

                    // show after page_views
                    if (count >= showPopAfterUniquePageView) {

                        start(currentLevel);

                    }


                } else if (model_data.showWhen == "days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });
                        start(currentLevel);

                    }

                } else if (model_data.showWhen == "page_views_days") {

                    if (getDiffereceDate(date1, date2) >= 1) {
                        // show after days

                        window['optimizely'].push({
                            type: "event",
                            eventName: "DaysReset"
                        });

                    }

                    if (getDiffereceDate(date1, date2) >= 1 || readCookie(
                            "fe_extend_date") || count >= showPopAfterUniquePageView) {
                        // show after days
                        start(currentLevel);
                    }

                }

            }


            $("body").delegate(
                "#unique-sticky .close , #unique-modal .close, #unique-sticky .cta , #unique-modal .cta",
                "mousedown",
                function(event) {

                    eraseCookie('ABM_Personalized_showAgain');
                    eraseCookie('ABM_Personalized_pageView');

                    var currentLevel = Number($(this).attr("data-level")) + 1;

                    window["optimizely"].push({
                        type: "event",
                        eventName: "7610134__fe_clicks_on_the_close_button_promotion_" + currentLevel
                    });


                    var currentDate = new Date();
                    currentDate.addDays(showPopAfterNODays);
                    document.cookie = "ABM_Personalized_showAgain=" + currentDate + ";domain=.invisionapp.com;path=/";

                    if (currentLevel > 4) {

                        currentLevel = 1;
                        var currentDate = new Date();
                        currentDate.addDays(showPopAfterNODays);

                        document.cookie = "ABM_Personalized_showAgain=" +
                            currentDate + ";domain=.invisionapp.com;path=/";

                    }

                    $(".fe_generatePromotions").hide();
                    setLevel(currentLevel);

                });

            /*----------------------------------------------------*/

        }

    }, 30);



})();
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8405801110"], "changes": null, "id": "8480737241", "integrationSettings": null}], "id": "8489295188", "weightDistributions": null, "name": "[FE] ABM - Personalized Promotions (Other Industry)", "groupId": null, "commitId": "8513095298", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8522141871"], "experiments": [{"weightDistributions": [{"entityId": "8516961222", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Referral Signup Page", "bucketingStrategy": null, "variations": [{"id": "8520711160", "actions": [{"viewId": "8522141871", "changes": []}], "name": "Original"}, {"id": "8516961222", "actions": [{"viewId": "8522141871", "changes": [{"selector": "button", "dependencies": [], "attributes": {"html": "Sign Up Free"}, "type": "attribute", "id": "C39613E6-A4B1-43D1-A6B3-633888497408", "css": {}}, {"selector": ".referral > .main-panel__subheading", "dependencies": ["C39613E6-A4B1-43D1-A6B3-633888497408"], "attributes": {"html": "Sign up free, no credit card required. If you decide to upgrade, you'll get <span style='color: #11B683; font-weight: bold'>$25 in free credit</span> towards any paid plan."}, "type": "attribute", "id": "E209CFD6-2686-41ED-AC3F-3A1917EB1B21", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "8516890536", "integrationSettings": null}], "id": "8522120203", "weightDistributions": null, "name": "Referral Signup Page", "groupId": null, "commitId": "8522100994", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8521475663"], "experiments": [{"weightDistributions": [{"entityId": "8535230925", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Welcome to InVision onboarding screen V2", "bucketingStrategy": null, "variations": [{"id": "8512795192", "actions": [], "name": "Original"}, {"id": "8535230925", "actions": [{"viewId": "8521475663", "changes": [{"dependencies": [], "type": "custom_code", "id": "C5C68C95-626C-4E71-A768-5960D3442EAC", "value": function($){(function() {

  function startFunction() {
    var $ = window.jQuery;

    var waitforOpenModel = setInterval(function() {
      if ($('.toolbar .button.add').length) {
        clearInterval(waitforOpenModel);
        InvProjects.createProjectActions.openModal();
        stopExperiment();

        //remvoe white overlay after model appear
        // this is use for remove flickering
        setTimeout(function() {
          $('.whiteOverlayModel').removeClass('whiteOverlayModel');
        }, 2000);
      }
    }, 10);
  }

  /*jshint latedef:false*/
  // stop function 
  function stopExperiment() {
    document.cookie = "fe_come_from_page=;domain=.invisionapp.com;path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Wait for jQuery, then start experiment
  var waitForJQueryVariation = setInterval(function() {
    if (typeof window.jQuery != 'undefined') {
      clearInterval(waitForJQueryVariation);
      var $ = window.jQuery;
      /* ---------------  fe_come_from_page  -------------- */
      if (window.location.href.indexOf('main') != -1 && readCookie('fe_come_from_page') == "freehand_lp") {
        startFunction();
      } else {
        $('body').removeClass('whiteOverlayModel');
      }
    }
  }, 100);

})();
}}, {"value": "<style>#intercom-container {\n  z-index: 100 !important;\n}</style>", "selector": "head", "dependencies": ["C5C68C95-626C-4E71-A768-5960D3442EAC"], "type": "append", "id": "1306DCCD-A990-49DE-881D-4CA34E09ADDC"}]}], "name": "Welcome Screen"}], "audienceIds": null, "changes": null, "id": "8522464252", "integrationSettings": null}], "id": "8525494519", "weightDistributions": null, "name": "Welcome to InVision onboarding screen V2", "groupId": null, "commitId": "8540340320", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8544893683"], "experiments": [{"weightDistributions": [{"entityId": "8545782943", "endOfRange": 5000}, {"entityId": "8558130763", "endOfRange": 10000}], "audienceName": "Desktop visitors,Exclude IE 11 ", "name": "[FE] Blog Article Page", "bucketingStrategy": null, "variations": [{"id": "8545782943", "actions": [{"viewId": "8544893683", "changes": [{"dependencies": [], "type": "custom_code", "id": "02D78D96-DABF-45F6-B035-CEF9ACF371A5", "value": function($){(function(){

function start(){

  var $ = window.jQuery;
  $('body').addClass('nav-sample-b toHideElement');

  var main_nav_wrapper = $('#main-nav-wrapper');
  
  main_nav_wrapper.find('a').each(function(){

    $(this).attr('href', function(){

    	if($(this).attr('href').indexOf('category') != -1){
    		return '/blog'+$(this).attr('href');
    	}else{
    		return $(this).attr('href');
    	}
      
    });

  });

  var count = 0;
  function scrollCheck(){

    var $ = window.jQuery;
    var currentScroll = $(window).scrollTop();

    if(currentScroll > 70){

        if(!main_nav_wrapper.hasClass('fe_stickyMenu')){

            main_nav_wrapper.addClass('fe_stickyMenu'); 
            main_nav_wrapper.css('margin-top', '-90px');

            main_nav_wrapper.animate({
              'margin-top': 0
            }, 200);

            count = 1;

          }

      }else{

          if(main_nav_wrapper.hasClass('fe_stickyMenu') && count == 1){

            count = 0;

            main_nav_wrapper.animate({
                'margin-top': '-90px'
              }, 200, function(){

                main_nav_wrapper.removeClass('fe_stickyMenu'); 
                main_nav_wrapper.css('margin-top', '0');

            });

          }

      }

   }

  $(window).scroll(function(){

       if( jQuery('body').outerWidth() > 1006){
		 
			 scrollCheck();
			
		  }

  });

} 


  var waitForJQuery = setInterval(function(){
      
      if(typeof window.jQuery != 'undefined'){
    
      clearInterval(waitForJQuery);

        var waitForElement = setInterval(function(){
          
          var $ = window.jQuery;

          var main_nav_wrapper = $('#main-nav-wrapper');
          
          if(main_nav_wrapper.length > 0){
             
             clearInterval(waitForElement);
             start();
               
            }

      },1);

      }

  },1);



})();
}}, {"value": "<style>html .nav-sample-b .topnav-layout-a,\nhtml .nav-sample-b .topnav-layout-b,\nhtml .nav-sample-b .topnav-layout-c{\n    display: none !important;\n}\n\nhtml body.nav-sample-b div.topnav-layout-b{\n    display: block !important;\n}\n\n\nhtml body.nav-sample-b #main-nav-wrapper .search {\n    display: none !important;\n}\n\nbody.fixed-nav.sticky-footer-on #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36!important;\n    border: 1px solid #f36!important;\n    color: #fff!important;\n}\n\n/*------Global---------*/\n.container.fe_stickyMenu .static span{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input::-webkit-input-placeholder {  color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a:hover {\n        color: #f36 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu {\n    background: #fff;\n    position: fixed;\n    width: 100%;\n    border-bottom: 1px solid #e8e8e8;\n}\n\n\n\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu nav {\n        padding: 19px 60px 15px 60px;\n        padding: 16px 60px 15px 60px;\n}\n\ndiv.topnav-layout-c ul .search {\n    border: 1px solid #d4d7da;\n}\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu .ico-magnifier {\n    display: inline-block;\n    background-position: 0 -2956px;\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n}\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a{ color:#f36!important; }\n\n\n/*== To hide sticky header banner & menu below 1025px starts here ==*/\n@media screen and (max-width: 1024px) and (min-width: 200px) {\nhtml body.toHideElement div.topnav-layout-b {\n    display: none!important;\n}\nhtml body.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav {\n    display: none!important;\n}\nhtml body.toHideElement div.topnav-layout-c {\n    display: none;\n}\nhtml body.toHideElement #main-nav-wrapper nav>ul {\n    display:block!important;\n}\n}\n/*== To hide sticky header banner & menu below 1025px ends here ==*/\n@media screen and (max-width: 549px) and (min-width: 200px) { \nhtml body.toHideElement #main-nav-wrapper nav>ul {\n    display:none!important;\n}\n}\n\n@media screen and (max-width: 1200px) {\nbody.toHideElement #main-nav-wrapper.container nav ul li.search{\n    display:none!important;\n } \n\n}\n\n@media screen and (min-width: 1024px) {\n\n    /**********************For mutual exclusive ******************/\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c {\n        display: block !important;\n    } \n\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-b,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-b\n     {\n        display: none !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul .signup a, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul .signup a {\n        font-family: \"brandon-grotesque\", sans-serif !important;\n        margin-left: 0 !important;\n        font-size: 13px !important;\n        font-weight: 700 !important;\n        color: #f36 !important;\n        border: 0 !important;\n            transition: all .2s ease-in-out;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul .signup a:hover,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul .signup a:hover\n    {\n            color: #fff!important;\n        background: transparent !important;\n        border: none !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul li.search input,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul li.search input\n    {\n        color: #fff!important;\n    }\n\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder \n     { /* Chrome/Opera/Safari */\n      color: #fff !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-moz-placeholder,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-moz-placeholder\n      { /* Firefox 19+ */\n      color: #fff !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder,   /* IE 10+ */\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n      color:#fff  !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-moz-placeholder,  /* Firefox 18- */\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n      color: #fff  !important;\n    }\n\n    /**************/\n\n    body.BSVarC #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder, \n    body.BSVarB #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder \n     { /* Chrome/Opera/Safari */\n      color: #313a43 !important;\n    }\n    body.BSVarC #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search ::-moz-placeholder,\n    body.BSVarB #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search ::-moz-placeholder\n      { /* Firefox 19+ */\n      color: #313a43 !important;\n    }\n    body.BSVarC #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder,   /* IE 10+ */\n    body.BSVarB #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n      color:#313a43  !important;\n    }\n    body.BSVarC #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search :-moz-placeholder,  /* Firefox 18- */\n    body.BSVarB #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n      color: #313a43  !important;\n    }\n    /************************/\n\n    body.BSVarC #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c ul li.search input,\n    body.BSVarB #main-nav-wrapper.fe_stickyMenu .static div.topnav-layout-c ul li.search input\n    {\n        color: #313a43!important;\n    }\n\n    body.BSVarC #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover,\n    body.BSVarB #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover\n    {\n            color: #313a43 !important;\n            border: none !important;\n    }\n\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search\n    {\n    display: inline-block !important;\n\n    }\n}\n\n/*=== search svg recoloring ===*/\nhtml body.toHideElement .ico-magnifier svg .st0 {\n    fill: #b5b5b5 !important;\n}</style>", "selector": "head", "dependencies": ["02D78D96-DABF-45F6-B035-CEF9ACF371A5"], "type": "append", "id": "05D21959-AEAE-49BE-B8BD-95755F850455"}]}], "name": "Original"}, {"id": "8558130763", "actions": [{"viewId": "8544893683", "changes": [{"dependencies": [], "type": "custom_code", "id": "F0E23F70-CE28-413C-B9BD-E5E81B07D195", "value": function($){function CustomGoalTracking(){

  console.info('CustomGoalTracking');
/* --------- core functions --------------------*/

/*

    Returns a function, that, as long as it continues to be invoked, will not
    be triggered. The function will be called after it stops being called for
    N milliseconds. If `immediate` is passed, trigger the function on the
    leading edge, instead of the trailing.


    jQuery(window).scroll(debounce(function() {
      fireEventIfVisible('.fe_top_two_article_outer', 'fe-blog-article-page-additional-content-viewed');
      }, 100) // Debounce for 100ms
    );


*/

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


/*
    This function will fire a optimizely custom event based on item visible on page.
    
    Parameters accepted
    Selects :- .sectionClass
    eventName : Pass the event name that you have build in optimizely
    offSet : offset use when sticky header

    uses example 

    $(window).scroll(debounce(function() {
      fireEventIfVisible('.fe_top_two_article_outer', 'fe-blog-article-page-additional-content-viewed' , 0);
      }, 100) // Debounce for 100ms
    );


*/

var optEevents = [];

function fireEventIfVisible(selector, eventName, offSet) {
  
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(selector).offset().top;
    var elemBottom = elemTop + $(selector).height();

    var offSet =  offSet || 0;

    // If element is visible ...
    if((elemBottom <= (docViewBottom + offSet)) && ((docViewTop + offSet)>= elemTop)){

        if(optEevents.indexOf(eventName) == -1){

            //console.info(eventName);

            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
              type: "event",
              eventName: eventName
            });

            optEevents.push(eventName);

        }
        


    }
    
}


/* --------- core functions --------------------*/

/* --------- triggers functions  --------------------*/

$(window).scroll(debounce(function() {

  fireEventIfVisible('.fe_top_two_article_outer', 'fe-blog-article-page-additional-content-viewed', 300);
  fireEventIfVisible('.subscribeFormWrap', 'fe-blog-article-page-subscribe-Form-viewed', 300);

  }, 100) // Debounce for 100ms
);



};
 
 

(function(){

function start(){

  var $ = window.jQuery;
  $('body').addClass('nav-sample-b fe_blogArticle toHideElement');
	
  var main_nav_wrapper = $('#main-nav-wrapper');
  
  main_nav_wrapper.find('a').each(function(){

    $(this).attr('href', function(){

    	if($(this).attr('href').indexOf('category') != -1){
    		return '/blog'+$(this).attr('href');
    	}else{
    		return $(this).attr('href');
    	}
      
    });

  });

  var count = 0;
  function scrollCheck(){

    var $ = window.jQuery;
    var currentScroll = $(window).scrollTop();

    if(currentScroll > 70){

        if(!main_nav_wrapper.hasClass('fe_stickyMenu')){

            main_nav_wrapper.addClass('fe_stickyMenu'); 
            main_nav_wrapper.css('margin-top', '-90px');

            main_nav_wrapper.animate({
              'margin-top': 0
            }, 200);

            count = 1;

          }

      }else{

          if(main_nav_wrapper.hasClass('fe_stickyMenu') && count == 1){

            count = 0;

            main_nav_wrapper.animate({
                'margin-top': '-90px'
              }, 200, function(){

                main_nav_wrapper.removeClass('fe_stickyMenu'); 
                main_nav_wrapper.css('margin-top', '0');

            });

          }

      }

   }

  $(window).scroll(function(){

       if( jQuery('body').outerWidth() > 1006){
		 
			 scrollCheck();
			
		  }

  });

} 


var waitForJQuery = setInterval(function(){
      
      if(typeof window.jQuery != 'undefined'){
    
      clearInterval(waitForJQuery);

        var waitForElement = setInterval(function(){
          
          var $ = window.jQuery;

          var main_nav_wrapper = $('#main-nav-wrapper');
          
          if(main_nav_wrapper.length > 0){
             
             clearInterval(waitForElement);
             start();
               
            }

      },1);

      }

  },1);



})();


(function(){

	
  function BlogPageStart(){

  	var $ = window.jQuery;
  	$('.dropcap').removeClass('dropcap');

  	var heroImage = $('.hero-bg').attr('data-bg');
  	$('.post-hero').css('background-image', 'url("'+heroImage+'")');

  	var date = $('.blog .post-hero .author-content p:nth-child(3)').html().replace('on ', '');

  	$('.single article.single-post .entry').prepend('<div class="fe_cat_date">'+date+'</div>');



    $('.entry').wrap('<div class="mid_container">');
     var feSubscribeForm =''+ 
		'  <div class="fe_otherArticle fe_subscribeForm_main">'+ 
		'    <div class="fe_subscribeForm">'+ 
		'      <div class="fe_subscribeForm_inner">'+ 
		'      <div class="fe_subscribeForm_inside">'+ 
		'         <div class="fe_subscribeForm_head">'+ 
		'          <h2>Get awesome design content in your inbox  every week</h2>'+ 
		'          <p>Join over 2 million of your fellow designers. Plus get 3 free downloads, Just for signing up.</p>'+ 
		'			</div>'+
		'          <div class="feForm">'+ 
			'          <div class="feForm_inner">'+ 
			'			<div class="feErrorMessage bv-error">Please enter an active email.</div>'+
			'              <input type="email" placeholder="Email Address..." />'+ 
			'              <input type="button" value="Subscribe" />'+ 
			'          </div>'+ 
		'          </div>'+ 
		'      </div>'+ 
		'      </div>'+ 
		'     </div>'+ 
		'  </div>';
	
   
	 
		var height = ($('body').height()/3)*2;

	 $('.mid_container .entry p').each(function(){

	 	if($(this).offset().top >= height){

	 		$(this).addClass('appendForm');
	 	}

	 });

	if($('.invision-user').css('display') == 'none'){

	 	 $('.entry').after(feSubscribeForm);

	 	 if($('.mid_container .entry p').length < 6){

	 	 	$('.mid_container .entry h2:contains(More Sketch tutorials)').before(feSubscribeForm);

	 	 }else{

	 	 	 $('.mid_container .entry p.appendForm:eq(0)').after(feSubscribeForm);

	 	 }
		
		 $('.mid_container .entry .fe_subscribeForm_main').addClass('fe_subscribeForm_main2');
		 $('.fe_subscribeForm_main2').wrap('<div class="subscribeFormWrap"></div>');

	}

	 

	 //  Adding Author to left
	 
    $('.mid_container').prepend('<div id="fe-author-desc" class="fe-new-elem"></div>');
    $('#fe-author-desc').html( jQuery('.author-block')[0].outerHTML);


    $('#fe-author-desc .author-social-media').html(function(){

    	if($(this).find('.author-social-tags').length){

    		return $(this).find('.author-social-tags')[0].outerHTML;

    	}

    });

    $('#fe-author-desc .author-social-tags').html(function(){

    	if($(this).find('.author-social-tags').length){

    		return $(this).find('.author-social-tags')[0].outerHTML;

    	}

    	var data = '';
    	$(this).find('a').each(function(index, value){
    		data += $(this)[0].outerHTML;
    	});

    	return data;

    });

    



  $('#fe-author-desc .author-social-media a:contains(Follow me on Twitter)').addClass('fe_twitter');
  $('#fe-author-desc .author-social-tags a:contains(Twitter)').addClass('fe_twitter');
  $('#fe-author-desc .author-social-tags a:contains(Google+)').addClass('fe_google');
   $('#fe-author-desc .author-social-tags a:contains(Facebook)').addClass('fe_facebook');



    var dataLink = $('.category-link').attr('href');

   	var topTowPages = [];

  
	dataLink = dataLink.replace('sketch','design');

    $.ajax({
		  url:dataLink,
		  type:'get',
		  success: function(data){


		  		var link1 = $(data).find('.column-articles article:not(.static-ad):eq(0) .entry > a:not(.category-link)').attr('href');
		  		var link2 = $(data).find('.column-articles article:not(.static-ad):eq(1) .entry > a:not(.category-link)').attr('href');
		  		var link3 = $(data).find('.column-articles article:not(.static-ad):eq(2) .entry > a:not(.category-link)').attr('href');
				

				topTowPages.push(link1);
				topTowPages.push(link2);
				topTowPages.push(link3);

				var pageUrl = window.location.href;

				var index = topTowPages.indexOf(pageUrl);

				if(index == 0 || index == 1){

					topTowPages.splice(index, 1);

				}else{

					topTowPages.splice(2, 1);

				}
				
				pullTopTwoPageContent(topTowPages);

		  }

		});

    function pullTopTwoPageContent(topTowPages){

    	var count = 0; 
    	var topTwoArticles = [];

    	$.each(topTowPages, function(index, url){

    		

    		(function(url, index){
			
				$.ajax({
				  url:url,
				  type:'get',
				  success: function(data){

				  	count++;
				  	var dataInfo = {};
				  	dataInfo.image = $(data).find('.hero-bg').attr('data-bg');
				  	dataInfo.dataLink = url;
				  	dataInfo.heading = $(data).find('.post-hero .header-content h1').html();
				  	dataInfo.paragraph = $(data).find('.single-post .entry p:eq(0)').html();
				  	dataInfo.author = $(data).find('.author-block').html();
				  	dataInfo.categoryText = $(data).find('.category-link').text();
				  	dataInfo.categoryLink = $(data).find('.category-link').attr('href');


				  	topTwoArticles[index] = dataInfo;

				  	if(count == topTowPages.length){

				  		buildTopTwoPost(topTwoArticles);

				  	}
					
				  }

				});



			})(url, index);

    	});

    }


    function buildTopTwoPost(topTwoArticles){

    	var feItems = '';
    	$.each(topTwoArticles, function(index, value){

    	feItems +=''+ 
		' <div class="fe_otherArticle" data-index="'+index+'">'+ 
		'  <div class="fe_main_div">'+
		'      <div class="fe_article_content">'+ 
		'      <div class="fe_banner_img" style="background-image:url('+value.image+')">'+ 
		'         <a href="'+value.dataLink+'" class="fe_page_link" > <img src="'+value.image+'"> </a>'+ 
		'      </div>'+ 
		'      <div class="fe_banner_text">'+ 
		'          <div class="categoryName"><a href="'+value.categoryLink+'">'+value.categoryText+'</a></div>'+ 
		'           <a href="'+value.dataLink+'" class="fe_page_link" ><h1> '+value.heading+'</h1> </a>'+ 
		'          <p class="fe_paragraph"> '+value.paragraph+'</p>'+ 
		'      <div class="fe_authore">'+value.author+'</div>'+ 
		'      </div>'+
		'      </div>'+ 
		'  </div>'+
		'  </div>';


    	});


    	var categoryText = $('.post-hero .category-link h2').text();
    	var categoryLink = $('.post-hero .category-link').attr('href');

		var combileTwo =''+ 
		'  <div class="fe_top_two_article_outer">'+ 
		'  <div class="fe_top_two_article">'+ 
		'      <div class="article_link_top">'+ 
		'          <span class="read_this"> READ THIS NEXT  </span>'+ 
		'          <a href="'+categoryLink+'" class="more_on_inspration"> MORE ON '+categoryText+'</a>'+ 
		'      </div>'+ 
		'   <div class="clear"></div>'+
		'   <div class="fe_top_two_article_wrap">'+
				feItems+
		'   </div>'+ 
		'   <div class="clear"></div>'+ 
		'  </div>'+
		'  </div>';

		
		if($('.mid_container .entry p').length < 6){

			$('.subscribeFormWrap').before(combileTwo);

		}else{

			$('.mid_container .entry p:eq(6)').after(combileTwo);

		}
		   		

		$('.fe_otherArticle .author-details p').html(function(){
			
			return $(this).find('[itemprop="name"]').html();
			
		});

		var headingHeight = 0;

		$('.fe_banner_text a.fe_page_link h1').each(function(){

			if($(this).height() > headingHeight){

				headingHeight = $(this).height();

			}

		});

		$('.fe_banner_text a.fe_page_link h1').height(headingHeight);


    }

	
	$('body').delegate('.fe_otherArticle .fe_subscribeForm_inner input[type="email"]', 'click', function(event) {

		$('.fe_subscribeForm .bv-error').hide();
		$('.sticky-footer-subscribe').addClass('hideError');

	});

	$('body').delegate('.sticky-footer-subscribe [type="email"]', 'click', function(event) {

		$('.sticky-footer-subscribe').removeClass('hideError');

	});

	var thisFormCount = 0;

	$('body').delegate('.fe_subscribeForm_inner [value="Subscribe"]', 'click', function(event) {

		thisFormCount ++;
		var emailField = $(this).parents('.feForm_inner').find('[type="email"]');

		 $('.sticky-footer-subscribe [name="email"]').val( emailField.val());
		 $('.feForm_inner [name="email"]').val( emailField.val());

		 $('.sticky-footer-subscribe [type="submit"]').click();

			if($('.sticky-footer-subscribe .bv-error').length > 0 ||  emailField.val() == ""){
				
				emailField.addClass('fe_errorText');
				$('.feErrorMessage ').show();

			}else{

				emailField.removeClass('fe_errorText');
				$('.feErrorMessage').hide();

			}

	});

  }
  

  function waitForElementFn() {

	    $ = window.jQuery;

	    var waitForElement = setInterval(function() {
	        if ($('.single-post .related-articles').length > 0) {
	            clearInterval(waitForElement);
						
	            BlogPageStart();
				CustomGoalTracking();
              
	        }
	    }, 50);

	    $( document ).ajaxComplete(function( event, xhr, settings ) {


		    if ( settings.url.indexOf("api/validateEmailBV") != -1 ) {
			
				var emailData =  JSON.parse(xhr.responseText);
				
			     if(emailData.status == "valid"){


			     	$('.feErrorMessage').html($('.fe_subscribeForm_inner .bv-error').html());
			     	$('.feErrorMessage ').hide();

			     }else{

			     	if(thisFormCount > 0){

			     		$('.feErrorMessage ').show();
			     		thisFormCount = 0;
			     	}
			     	

			     	
			     }

			  }

		});

	}
  
  


	var interval = setInterval(function() {
	    if (typeof window.jQuery !== "undefined") {
	        clearInterval(interval);

	        waitForElementFn();

	    }
	}, 50);

})();
}}, {"value": "<style>/*--------- menu css end -------------------*/\n\n@media screen and (max-width: 1023px){\n    nav.fe_new_nav,\n    .fe-new-elem,\n    .fe_subscribeForm_main,\n    .fe_top_two_article_outer {\n        display: none;\n    }\n}\n@media screen and (min-width: 1024px){\n    \nhtml .fe_blogArticle .topnav-layout-a,\nhtml .fe_blogArticle .topnav-layout-b,\nhtml .fe_blogArticle .topnav-layout-c{\n    display: none !important;\n}\n\nhtml body.fe_blogArticle  div.topnav-layout-c ul .search input, \nhtml body.fe_blogArticle div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\nhtml body.fixed-nav #main-nav-wrapper.container .ico-magnifier {\n    display: inline-block;\n    background-position: 0 -2956px;\n    background-repeat: no-repeat;\n    margin-left: 0px !important;\n    margin-right: 0 !important;\n    height: 17px;\n    width: 22px;\n    text-align: center;\n}\n\nhtml body.fixed-nav  #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43 !important;\n}\nhtml body.fixed-nav  #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43 !important;\n}\nhtml body.fixed-nav  #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43  !important;\n}\nhtml body.fixed-nav  #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43  !important;\n}\n\n\nhtml body.fe_blogArticle div.topnav-layout-b{\n    display: block !important;\n}\n\n\nbody.fixed-nav #main-nav-wrapper.container nav>a span{\n    color: #313a43 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container nav a span {\n    color: #313a43;\n}\n\nbody.fixed-nav #main-nav-wrapper.container{\n    position: relative;\n}\n\nbody.fixed-nav #main-nav-wrapper.container nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container nav ul a:hover {\n   color: #f36 !important;\n}\n\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a:hover {\n        color: #f36 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu {\n    background: #fff;\n    position: fixed;\n    width: 100%;\n    border-bottom: 1px solid #e8e8e8;\n}\n\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu nav {\n        padding: 19px 60px 15px 60px;\n        padding: 16px 60px 15px 60px;\n}\n\ndiv.topnav-layout-c ul .search {\n    border: 1px solid #d4d7da;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a{ color:#f36!important; }\n\nbody.fixed-nav.sticky-footer-on #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36!important;\n    border: 1px solid #f36!important;\n    color: #fff!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36 !important;\n    border: 1px solid #f36 !important;\n    color: #FFF !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container nav {\n    padding: 21px 80px 18px !important;\n}\n\n\n.share-widget-container-fixed.on {\n    display: none;\n}\n\n.fe_cat_date {\n    margin-bottom: 20px;\n}\n\n.mid_container  .entry h2{ width:100%!important;}\n\n#carbonads {\n    padding-top: 20px;\n    padding-bottom: 40px\n}\n#carbonads a {\n    text-decoration: none\n}\n#carbonads>span {\n    position: relative;\n    display: block;\n    width: 100%;\n    max-width: 300px;\n    margin-right: auto;\n    margin-left: auto\n}\n.carbon-wrap {\n    position: relative;\n    display: table;\n    width: 100%\n}\n.carbon-img,\n.carbon-text {\n    display: table-cell;\n    text-align: left;\n    vertical-align: middle\n}\n.carbon-img {\n    background-color: #fff\n}\n.carbon-img img {\n    display: block\n}\n.carbon-text {\n    font-size: 12px;\n    line-height: 1.2;\n    padding-left: 15px\n}\n\n#fixed-ad-bug {\n    display: none !important;\n}\n\n\n/* ==================second ====================*/\n\n#main-nav-wrapper.container #main-nav-wrapper #invision_logo {\n    float: left;\n    display: inline-block;\n    vertical-align: middle;\n    height: 33px;\n    width: 100px;\n    background-image: url(https://www.invisionapp.com/assets/img/sprites/global-sa42ef3fae4.png);\n    background-position: 0 -680px;\n    background-repeat: no-repeat;\n    text-indent: -9999px;\n}\n/* ================== Customization by Yeasin ====================*/\n\n.pink-text {\n    color: #f36 !important;\n}\n.column-articles .fe_blog_nav {\n    padding-top: 30px;\n}\n/* ================== variation B ====================*/\n\n\n#main-nav-wrapper .fe_new_nav a#invision_logo {\n    float: left;\n    display: inline-block;\n    vertical-align: middle;\n    height: 39px;\n    width: 100px;\n    background-image: url(https://www.invisionapp.com/assets/img/sprites/global-sa42ef3fae4.png);\n    background-position: 0 -680px;\n    background-repeat: no-repeat;\n    text-indent: -9999px;\n    top: 0;\n    margin-left: 0;\n    margin-left: 10px;\n}\n#main-nav-wrapper.fe_stickyMenu .fe_new_nav a#invision_logo {\n    background-image: url(https://www.invisionapp.com/assets/img/sprites/global-sa42ef3fae4.png);\n    background-position: 0 -733px;\n    top: 0;\n}\n.fe_blog_cat li {\n    display: inline-block;\n}\n.fe_blog_cat {\n    margin: 0 auto;\n    width: 89%;\n    margin-bottom: 35px;\n}\n.fe_blog_cat a {\n    display: inline-block;\n    padding: 3px 15px;\n    font-size: 13px;\n    color: #313a43;\n    font-family: brandon-grotesque, sans-serif;\n    font-weight: 500;\n    text-transform: uppercase;\n    line-height: 1em;\n    display: block;\n    -moz-transition: all .2s ease-in-out;\n    -o-transition: all .2s ease-in-out;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n    cursor: pointer;\n}\n.fe_blog_cat a:hover {\n    color: #f36;\n}\n.fe_blog_cat .cta_button {\n    float: right;\n}\n.fe_blog_cat .cta_button a {\n    color: #f36;\n    line-height: 20px;\n}\n\n\n/***************** subscrib box css  ****************/\n\n.mid_container {\n    position: relative;\n    margin-top: 69px;\n    width: auto;\n\n    max-width: 2800px !important;\n}\n.carbon-poweredby {\n    font-size: 11px;\n    position: absolute;\n    bottom: -20px;\n    left: 0;\n    width: 130px;\n    text-align: center;\n    color: #999\n}\n.fe_otherArticle.fe_subscribeForm_main {\n    right: 0;\n    width: 274px;\n    float: right;\n    top: 0;\n    position: absolute;\n}\n.fe-new-elem {\n    width: 274px;\n    float: left;\n    border: 1px solid #ccc;\n    padding: 14px 22px;\n    border-style: dotted;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.fe_subscribeForm_inner {\n    padding: 30px 20px !important;\n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n    border-style: dotted;\n    padding-bottom: 0;\n    padding-bottom: 20px;\n}\n\n.fe_otherArticle.fe_subscribeForm_main.fe_subscribeForm_main2 .fe_subscribeForm_inner {\n    /* margin: 0 -88px!important; */\n    max-width: 1000px!important;\n    display: inline-block;\n    text-align: left;\n}\n.fe_otherArticle.fe_subscribeForm_main.fe_subscribeForm_main2 .fe_subscribeForm {\n    text-align: center;\n    max-width: 1800px !important;\n}\n\n.fe_subscribeForm_inner h2 {\n    font-size: 20px;\n    font-family: brandon-grotesque, sans-serif;\n    text-transform: uppercase;\n    line-height: 1.4;\n    margin-bottom: 0;\n    font-weight: 600;\n    max-width: 90%;\n}\n.fe_subscribeForm_inner p {\n    font-size: 13px;\n    margin: 20px 0 24px 0;\n    color: #a0a4a7;\n    line-height: 16px;\n    text-transform: uppercase;\n    line-height: 1.8;\n    font-family: brandon-grotesque, sans-serif;\n}\n.feErrorMessage {\n    padding: 7px 0;\n    border: 2px solid #fc3768;\n    margin-top: 16px;\n    color: #fc3768;\n    text-align: center;\n    border-radius: 4px;\n    margin-bottom: 10px;\n    font-size: 13px;\n    position: absolute;\n    width: 100%;\n    bottom: 100%;\n    background: rgba(255, 255, 255, 0.97);\n    display: none;\n}\n.bv-error.feErrorMessage:after, .bv-error.feErrorMessage:before {\n    top: 100%;\n    left: 50%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n.bv-error.feErrorMessage:before {\n    border-color: rgba(255,51,102,0);\n    border-top-color: #f36;\n    border-width: 18px;\n    margin-left: -20px;\n}\n.bv-error.feErrorMessage:after {\n    border-color: rgba(255,51,102,0);\n    border-top-color: #fff;\n    border-width: 14px;\n    margin-left: -16px;\n}\n\n.fe_subscribeForm_inner input[type=\"email\"] {\n    padding: 0 10px;\n    border: 1px solid #e6e5e5;\n    float: none;\n    width: 100%;\n    box-sizing: border-box;\n    line-height: 36px;\n    font-size: 14px;\n    color: #a0a4a7;\n    border-radius: 3px;\n}\n.fe_subscribeForm_inner input[type=\"button\"] {\n    font-family: \"brandon-grotesque\", sans-serif;\n    text-transform: uppercase;\n    background: #fc3768;\n    padding: 0 8px;\n    color: #fff;\n    border-style: none;\n    cursor: pointer;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 95px;\n    -moz-transition: all .2s;\n    -o-transition: all .2s;\n    -webkit-transition: all .2s;\n    transition: all .2s;\n    line-height: 40px;\n    font-size: 14px;\n    border-radius: 3px;\n}\n.fe_subscribeForm_inner input[type=\"button\"]:hover{\n    background:#f42156;\n}\n\n.fe_subscribeForm_inner ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #a0a4a7;\n}\n.fe_subscribeForm_inner ::-moz-placeholder { /* Firefox 19+ */\n  color: #a0a4a7;\n}\n.fe_subscribeForm_inner :-ms-input-placeholder { /* IE 10+ */\n  color: #a0a4a7;\n}\n.fe_subscribeForm_inner :-moz-placeholder { /* Firefox 18- */\n  color: #a0a4a7;\n}\n\n.fe_subscribeForm_head h2,\np {\n    width: auto!important;\n}\n.feForm {\n    margin-top: 14px;\n}\n/***************** subscrib box css  ****************/\n\ndiv#fe-author-desc {\n    text-align: center;\n}\n.fe-new-elem img {\n}\n.single article.single-post .entry {\n    padding-top: 0;\n}\n\nnav.fe_new_nav {\n    width: 100%;\n}\n.mid_container .entry {\n    max-width: 2600px !important;\n    margin: 0 312px;\n}\n.single .mid_container .fluid iframe {\n    width: 100%!important;\n}\n\n\n/*\n--------------------------------\n*/\n\n.article_link_top span.read_this {\n    font-size: 14px;\n    font-family: \"brandon-grotesque\";\n    letter-spacing: .5px;\n}\n.fe_banner_text a.fe_page_link h1 {\n    /* display: inline-block; */\n    /* width: 250px; */\n    font-size: 14px;\n    line-height: 1.5;\n}\n\n.single .column-articles {\n    top: 0!important;\n    \n}\n.fe_top_two_article_outer{\n     text-align: center;\n\n}\n.fe_top_two_article{\n    display: inline-block;\n    text-align: left;\n}\n.fe_top_two_article .article_link_top {\n    margin: 0 0px !important;\n    max-width: 1000px !important;\n}\n.article_link_top .more_on_inspration {\n    float: right;\n    font-family: \"brandon-grotesque\";\n    font-size: 12px;\n    text-decoration: underline;\n    color: #a0a4a7;\n    letter-spacing: .5px;\n    text-transform: uppercase;\n}\n\n.fe_top_two_article {\n    padding: 48px 0px;\n    margin: 0 -88px!important;\n    max-width: 1000px!important;\n}\n\n.fe_top_two_article .fe_otherArticle:nth-child(2) {\n    float: right!important;\n}\n.fe_top_two_article .fe_otherArticle:last-child {\n    float: right;\n}\n\n\n.fe_top_two_article .fe_otherArticle {\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    padding: 23px;\n}\n\n\n.fe_top_two_article .fe_otherArticle .author-social-media{\n    display:none;\n}\n\n.fe_top_two_article .fe_banner_text h1 {\n    margin-bottom: 20px;\n    font-size: 20px;\n    font-family: \"brandon-grotesque\",sans-serif;\n    text-transform: uppercase;\n    font-weight: 400;\n    line-height: 24px;\n}\n\n.fe_top_two_article .fe_paragraph{\n    display:none ! important;\n}\n\n.fe_top_two_article .fe_authore img {\n    width: 28px!important;\n    float: left;\n    border-radius: 50px;\n}\n.fe_top_two_article .fe_banner_img {\n    height: 178px;\n    background-size: cover;\n    background-position: center center;\n}\n.fe_top_two_article .fe_banner_img img {\n    \n    visibility: hidden;\n}\n\n.fe_top_two_article .author-details p span a {\n    font-size: 19px;\n}\n\n.fe_top_two_article .clear {\n    clear: both;\n}\n.categoryName a {\n    font-size: 12px;\n    font-family: \"brandon-grotesque\",sans-serif;\n    color: #a0a4a7 !important;\n    text-transform: uppercase;\n    letter-spacing: .8px;\n}\n.fe_top_two_article .author-details p span a {\n    font-size: 17px;\n}\n.fe_top_two_article .author-details p {\n    margin: 0px;\n}\n\n.fe_top_two_article .fe_otherArticle.fe_subscribeForm_main2 {\n    max-width: 662px!important;\n    margin: 0px -56px !important;\n}\n.fe_top_two_article .categoryName {\n    padding: 9px 0;\n    margin: 0;\n}\n\n.fe_top_two_article .author-details p a {\n    font-size: 14px;\n    display: inline-block;\n    margin-top: -4px;\n    margin-left: 7px;\n    color: #a0a4a7!important;\n}\n\n.fe_top_two_article .fe_main_div {\n    box-shadow: 3px 2px 8px 2px rgba(0,0,0,.1);\n    padding: 20px;\n}\n.fe_top_two_article .fe_top_two_article_wrap {\n    margin:0 -20px !important;\n    max-width: 1000px !important;\n}\n\n\n/* form 2 */\n\n.fe_otherArticle.fe_subscribeForm_main.fe_subscribeForm_main2 {\n    position: relative;\n    top: 0;\n    left: 0;\n    float: none;\n    width: auto;\n    margin: 0 -88px !important;\n    padding: 30px 0;\n    max-width: 1800px !important;\n}\n\nbody .fe_subscribeForm_main2 .fe_subscribeForm_inner {padding: 60px 95px !important;}\nbody .fe_subscribeForm_main2 .fe_subscribeForm_inner .fe_subscribeForm_head{\n    text-align: center;\n}\n.fe_subscribeForm_main2 .fe_subscribeForm_inner .fe_subscribeForm_head h2{text-transform: uppercase;font-size: 20px;}\n.fe_subscribeForm_main2 .fe_subscribeForm_inner .fe_subscribeForm_head p{color: #a0a4a7;font-size: 14px;letter-spacing: .5px;}\n\n.fe_subscribeForm_main2 .fe_subscribeForm_inner .feForm_inner{\n    position: relative;\n    padding-right: 150px;\n}\n.fe_subscribeForm_main2 .fe_subscribeForm_inner input[type=\"email\"]{border-radius: 5px 0 0 5px;padding: 0 23px;line-height: 45px;}\n\n.fe_subscribeForm_main2 .fe_subscribeForm_inner input[type=\"button\"]{\n    position: absolute;\n    right: 0;\n    width: 150px;\n    top:0;\n    margin: 0;\n    line-height: 47px;\n    border-radius: 0 5px 5px 0;\n    font-size: 16px;\n}\n\n/*article .entry p:first-child{\n    margin: 0px auto;\n}*/\n\n#fe-author-desc [itemprop=\"image\"] img{width: 44px;height: 44px;border-radius: 100%;display: block;margin: 0 auto;margin-top: 14px;}\n.fe-new-elem .author-details p{\n     color: #a0a4a7;\n}\n#fe-author-desc a{\n    color: #a0a4a7;\n}\n#fe-author-desc [itemprop=\"name\"] a{\n    color: #000;\n    font-size: 18px;\n    line-height: 21px;\n    display: block;\n    padding-bottom: 20px;\n    float: left;\n    clear: both;\n    width: 100%;\n}\n\n.fe-new-elem .author-details p.author-social-media {\n    /* margin-top:25px; */\n    /* margin-bottom: 10px; */\n}\n.fe-new-elem .author-details p {\n    margin-top: 10px;\n    font-size: 14px;\n    text-align: center;\n}\n\n.fe-new-elem .social-link.fe_twitter{\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAhCAIAAAAkk37yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjc2RUM2NkY3N0QwMTFFNzhFRThEM0I2RDQ1MjJCNkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc2RUM2NzA3N0QwMTFFNzhFRThEM0I2RDQ1MjJCNkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNzZFQzY2RDc3RDAxMUU3OEVFOEQzQjZENDUyMkI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNzZFQzY2RTc3RDAxMUU3OEVFOEQzQjZENDUyMkI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuhG8C0AAATdSURBVHjaxFdJKHVhGL73uuZZFjJljo1ZbEQpSpSiDBFSShaysbKzEJGNyLRRYqNYGMq0IClEGUsZFqQMyTyf/3FfXt9/7nHO/f9/8b/l+u79zvc+7/t873T0kiTp/ocY8Pf09ITPl5cX8+3393dLtFxeXnZ3d6enp7u5udnZ2fn6+ubl5U1NTZl7dXJy8rmSvmRtbW1jY0NSElgm/Sz9/f0xMTE2NjZ6vZ50Ym1tbY1FTk7O9vY2nnl7e5ubmysuLm5oaCBtOvyEf8/PzyUlJSkpKTIM0ACnVVD7+voiIyMJz8rKymAwfDL5tYiPj8/Pzw8LC8MafNzd3dFBHek9Pz93d3fHXmpq6vLyMu09Pj5KqrK+vu7i4oJT8NXV1dVoNNKaIGmLJTw8fH5+HqdOT0/hre719RVfjo6OsEf85ObmzszMsHaihIQeJlthVllZGSERJPtNbJPfHh4e+CU0NLSmpqapqSk2NnZ8fPzDY9K4ublJTyM0sAgODu7p6TEnmYBJDg8P8TBfJ0HiK5EMU5htEkdHR3y2tLSQJ5/AcJ/POzg4kAdZWVkrKys/8Tw7Oyvq1ZtEvGB7e3uyBgqx8PHxaW1tJWc+koUVBQUFYdvW1pYOEzYuvqqqamlpSeb9/f19V1cXlOIx/ZcQJFHNbpBCJNjAwACdfXh4+PYYUd3R0SHLOVJBHERHR7e1tYFexh4cHFSrDwLPWDs5OckI03GwIL4SExNFd8lwJhB24J5w/RkZGdXV1UVFRUyPCrDBJN7e3grAFDJwemFhwdPTU6SI8AhSVIpdZ2dnTY9hNHEeFxcnAzZQsRweHk5LSxsZGUEueXl5cR3FyTeTIPFJC1mA3ZubGybjJ8EDVHQDAgLke0AFPooG1kgP0gUXeU3MYy2yx2Gl7jEfqa+vF+vBB9VUwwCP1KZUFtUBnkljLUaTaPrKn7ASXCoHF6jr7OwUVXNIiwKqRUh1eMbG3R0fHysAc0ahyRCeSDL9IsMQ+4E627A1IiLCvP7omHrUXrRVziiOaqq6f9znvwonPtvb29WACfvs7Aw5ivImkql5o4pC7S4kJGRnZ8cc2ECzAHt5e3ubnJxcW1uLPsoqkOh/AYywxWdhYSEaosI2PIZeLsVDQ0PIORDFDMMazes0F2rGKHMHBweKM4yOOi4LvmZmZtJhrk2aheKnqG5sbJR1dIWoFueKgoICOozWpl4aVaS8vBwRw5MMLlEDGLK7u5udna3SAzQFmUkjFNyle5RXLl7xNaPX0gIDUEVFRWBgIDdXy0VWqshd6sS/AauMkr29vcBWjC+xadK8AcHQOTo6KmmJTmWqmp6eLi0tpWbFQx3VLFk950RPSkriScMiYPECtra2mpubMXAxpHmVJiNgAQ2HVGQQFpOTk5Jlogfvi4uLY2Njq6urV1dX+/v7oB1+Uz/mskU1BEhEL55BbWc7UG0wkOC1xc/PD1+hB7O7RhQQ/t7eXl1dHSqlGEeoIewl1ub9CkM8KmJlZSVM51hRf9/59lh8r7q+vp6YmID3mLkvLi7YYzjK/mGNIcTf3z8hISEqKgpvR+J0gTKJJLSktn8Cf5hgiheYjAVSHqUOQzVe4zByQx0mBVQSTKmYghHkAEM5ZIB7k4BevhftSeEf349ppOJkI22WlNhfAgwAxLKRtAD7Uf8AAAAASUVORK5CYII=) no-repeat center center; \n}\n.fe-new-elem .social-link.fe_google{\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik01Mi4yMTgsMjUuODUyaC03LjUxMnYtNy41MWMwLTAuNTczLTAuNDY1LTEuMDM5LTEuMDM3LTEuMDM5SDQxLjUzYy0wLjU3NiwwLTEuMDQxLDAuNDY2LTEuMDQxLDEuMDM5djcuNTFoLTcuNTEyICAgYy0wLjU3MiwwLTEuMDM5LDAuNDY3LTEuMDM5LDEuMDQxdjIuMTM5YzAsMC41NzQsMC40NjcsMS4wMzksMS4wMzksMS4wMzloNy41MTJ2Ny41MTRjMCwwLjU3NCwwLjQ2NSwxLjAzOSwxLjA0MSwxLjAzOWgyLjEzOSAgIGMwLjU3MiwwLDEuMDM3LTAuNDY1LDEuMDM3LTEuMDM5VjMwLjA3aDcuNTEyYzAuNTcyLDAsMS4wMzktMC40NjUsMS4wMzktMS4wMzl2LTIuMTM5QzUzLjI1NywyNi4zMTgsNTIuNzksMjUuODUyLDUyLjIxOCwyNS44NTJ6Ii8+PHBhdGggZD0iTTI2Ljk3NCwzMi40MzhjLTEuNTgtMS4xMTktMy4wMTYtMi43Ni0zLjA0MS0zLjI2NGMwLTAuOTE4LDAuMDgyLTEuMzU3LDIuMTQxLTIuOTYxYzIuNjYyLTIuMDg0LDQuMTI4LTQuODI0LDQuMTI4LTcuNzE5ICAgYzAtMi42MjUtMC44MDItNC45NTctMi4xNjctNi41OTVoMS4wNTljMC4yMTksMCwwLjQzNC0wLjA2OCwwLjYwOS0wLjE5NmwyLjk1NS0yLjE0MWMwLjM2Ny0wLjI2MywwLjUyMS0wLjczMiwwLjM4MS0xLjE2MSAgIGMtMC4xNDEtMC40MjgtMC41MzctMC43Mi0wLjk4OC0wLjcySDE4LjgzNWMtMS40NDYsMC0yLjkxNSwwLjI1NS00LjM1NywwLjc1MWMtNC44MTYsMS42NjEtOC4xODQsNS43NjUtOC4xODQsOS45NzggICBjMCw1Ljk2OSw0LjYyNCwxMC40OTMsMTAuODA1LDEwLjYzNWMtMC4xMjEsMC40NzMtMC4xODIsMC45MzktMC4xODIsMS4zOTZjMCwwLjkyLDAuMjMzLDEuNzkxLDAuNzEzLDIuNjMzYy0wLjA1NiwwLTAuMTEsMC0wLjE3LDAgICBjLTUuODkyLDAtMTEuMjEsMi44OTEtMTMuMjI5LDcuMTkzYy0wLjUyNiwxLjExOS0wLjc5NCwyLjI1LTAuNzk0LDMuMzY3YzAsMS4wODYsMC4yNzksMi4xMzEsMC44MjYsMy4xMTMgICBjMS4yNjksMi4yNywzLjk5NCw0LjAzMSw3LjY3Nyw0Ljk2MWMxLjkwMSwwLjQ4LDMuOTQ0LDAuNzI1LDYuMDY1LDAuNzI1YzEuOTA2LDAsMy43MjMtMC4yNDYsNS40MDMtMC43MzIgICBjNS4yMzgtMS41MjEsOC42MjUtNS4zNzcsOC42MjUtOS44MjhDMzIuMDMyLDM3LjYwMiwzMC42NTksMzUuMDQ1LDI2Ljk3NCwzMi40Mzh6IE0xMC4yODMsNDIuMjE1YzAtMy4xMDcsMy45NDctNS44MzIsOC40NDYtNS44MzIgICBoMC4xMjFjMC45NzksMC4wMTIsMS45MzQsMC4xNTYsMi44MzQsMC40MzJjMC4zMDksMC4yMTMsMC42MDcsMC40MTYsMC44OTMsMC42MTFjMi4wODQsMS40MiwzLjQ2MSwyLjM1NywzLjg0NCwzLjg2MSAgIGMwLjA5LDAuMzc5LDAuMTM1LDAuNzU4LDAuMTM1LDEuMTI1YzAsMy44NjktMi44ODUsNS44My04LjU3OCw1LjgzQzEzLjY2Myw0OC4yNDIsMTAuMjgzLDQ1LjU5NiwxMC4yODMsNDIuMjE1eiBNMTQuMzc3LDEyLjg1OCAgIGMwLjcwMy0wLjgwMywxLjYyNC0xLjIyNywyLjY1OC0xLjIyN2wwLjExNywwLjAwMmMyLjkyMSwwLjA4Niw1LjcxNiwzLjM0MSw2LjIzLDcuMjU2YzAuMjg5LDIuMTkyLTAuMTk5LDQuMjUzLTEuMzAxLDUuNTA5ICAgYy0wLjcwNSwwLjgwNS0xLjYxMywxLjIyOS0yLjY4OSwxLjIyOWMwLDAsMCwwLTAuMDAyLDBoLTAuMDQ3Yy0yLjg2MS0wLjA4OC01LjcxNi0zLjQ2Ny02LjIyNy03LjM3NyAgIEMxMi44MjksMTYuMDY0LDEzLjI4OSwxNC4wOTksMTQuMzc3LDEyLjg1OHoiLz48L2c+PC9zdmc+) no-repeat center center; \n}\n.fe-new-elem .social-link.fe_facebook{\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yODgsNTEyaC05NlYyNTZoLTY0di05Nmg2NFY5NmMwLTcwLjczNywxMi42NTYtOTYsOTYtOTZoOTZ2OTZoLTY0Yy0zMi40NjksMC0zMiw5LjM4Ny0zMiwzMnYzMmg5NmwtMzIsOTYgIGwtNjMuMzU5LTEuMDA2TDI4OCw1MTJ6IiBmaWxsPSIjMUQxRDFCIi8+PC9zdmc+) no-repeat center center; \n}\n\nspan.author-social-tags {\n    display: block;\n}\n\n.fe-new-elem .social-link {\n     text-indent: -999999px;\n     display: block;\n     background-size: 18px;\n     background-size: 100% !important;\n     margin: auto;\n     width: 18px;\n     display: inline-block;\n     margin: 0 5px;\n}\n\n.author-card {\n    display: none !important;\n}\n\n\n.mid_container,\nnav.fe_new_nav ,\n.blog .post-hero{\n    margin-left: 130px !important;\n    margin-right: 130px!important;\n    width: auto !important;\n}\n\n.blog .post-hero  {\n     height: 441px;\n     position: relative!important;\n     width: auto;\n}\n\n.feForm_inner {\n    position: relative;\n}\n\n.blog .post-hero{\n    background-size: cover;\n}\n.hero-bg .backstretch img{\n    opacity: 0;\n}\n\n.feForm {\n    max-width: 512px !important;\n}\n\n/* article reset*/\n.fe_cat_date {\n    color: #a0a4a7;\n}\n\narticle .entry p, \narticle .entry ul, \narticle .entry ol {\n    color: #333;\n    font-size: 16px;\n    line-height: 1.6;\n}\narticle .entry p {\n    margin: 30px auto;\n}\n\n.single .column-articles {\n    margin: 0 !important;\n}\n\n.subscribeFormWrap{max-width: 1800px !important;}\n\n}\n\n@media screen  and (max-width: 1380px) and (min-width: 1024px){\n\n    \n    .mid_container, nav.fe_new_nav, .blog .post-hero {\n        margin-left: 80px !important;\n        margin-right: 80px!important;\n        width: auto !important;\n    }\n\n}\n\n@media screen  and (max-width: 1439px) and (min-width: 1024px) {\n\n\n    .mid_container .entry {\n        max-width: 1400px;\n        margin: 0 160px;\n    }\n\n    .blog .post-hero .header-content{\n         width: 100%;\n    }\n    .hero-bg .backstretch img{\n        opacity: 0;\n    }\n    .blog .post-hero .header-content h1 {\n        font-size: 34px;\n        line-height: 40px;\n    }\n\n    .blog .post-hero .hero-bg {\n        background-size: cover !important;\n    }\n\n    .blog .post-hero .author-content img {\n        height: 32px;\n        width: 32px;\n            margin-bottom: 2px;\n    }\n   \n    .blog .post-hero .author-content p{\n            font-style: inherit;\n    }\n    .blog .post-hero .author-content a{\n        font-weight: normal;\n    }\n\n    .blog .post-hero .author-content{\n        bottom: 30px;\n    }\n    .blog .post-hero .author-content p:nth-child(3){\n        display: none;\n    }\n\n    .fe_otherArticle.fe_subscribeForm_main:not(.fe_subscribeForm_main2) {\n        display: none;\n    }\n    #fe-author-desc {\n        display: none;\n    }\n    article .entry p {\n        margin: 18px auto;\n    }\n    .fe_cat_date{\n        color: #9e9e9e;\n        font-size: 12px;\n        text-transform: uppercase;\n        font-family: \"brandon-grotesque\",sans-serif;\n    }\n}\n\n@media screen and (min-width: 1440px) {\n\n    body.fixed-nav #main-nav-wrapper.container nav {\n        padding-left: 130px !important;\n        padding-right: 130px!important;\n    }\n\n    .fe_top_two_article .fe_banner_img {\n        height: 140px;\n    }\n    .blog .post-hero .header-content{\n        margin-top: 20px;\n    }\n\n    .blog .post-hero .author-content{\n        display: none;\n    }\n\n   \n\n    .single article.single-post header, .single article.single-post .author-card, .single article.single-post .pixels-photos, .single article.single-post ul, .single article.single-post .fluid, .single article.single-post ol, .single article.single-post video, .single article.single-post iframe, .single article.single-post h1, .single article.single-post .newsletter-signup, .single article.single-post div:not(.entry):not(.invGallery):not(.invGallery-bg):not(.backstretch):not(.sign-up-ctas) {\n        max-width: 1200px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n\n    \n\n     .single .mid_container .fluid iframe {\n        width: 100%!important;\n    }\n\n    .fe_subscribeForm_main2 .fe_subscribeForm_inner .fe_subscribeForm_head h2{\n            font-size: 24px;\n    }\n    \n}\n@media screen and (min-width: 1440px) and (max-width: 1919px) {\n\n    \n    .single .column-articles {\n        top: 0!important;\n    }\n\n    .feForm_inner {\n        padding-right: 0;\n    }\n    .fe_subscribeForm_inner input[type=\"button\"] {\n        position: static;\n        width: 100%;\n        margin-top: 10px;\n    }\n    .fe_subscribeForm_inner input[type=\"email\"] {\n        width: 100%;\n    }\n}\n\n\n@media screen and (min-width: 1920px){\n\n\n      body.fixed-nav #main-nav-wrapper.container nav {\n        padding: 21px 0px 18px !important;\n        max-width: 1657px !important;\n        margin: 0 auto;\n    }\n\n     nav.fe_new_nav ,\n    .blog .post-hero ,\n    .mid_container {\n        margin-left: auto!important;\n        position: relative!important;\n        margin-right: auto !important;\n        max-width: 1660px !important;\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n    }\n    .blog .post-hero {\n        height: 540px;\n    }\n\n    .mid_container .entry {\n        max-width: 2600px !important;\n        margin: 0 430px;\n    }\n    .fe-new-elem,\n    .fe_otherArticle.fe_subscribeForm_main{\n        width: 378px;\n    }\n\n    .fe_subscribeForm_main:not(.fe_subscribeForm_main2) .feForm_inner{\n        position: relative;\n        padding-right: 120px;\n    }\n\n    .fe_subscribeForm_main:not(.fe_subscribeForm_main2) .fe_subscribeForm_inner input[type=\"email\"]{\n\n        border-radius: 5px 0 0 5px;\n\n    }\n\n    .fe_subscribeForm_main:not(.fe_subscribeForm_main2) .fe_subscribeForm_inner input[type=\"button\"]{\n\n        border-radius: 0 5px 5px 0;\n        width: 120px\n\n    }\n\n    .fe_subscribeForm_main:not(.fe_subscribeForm_main2) .fe_subscribeForm_inner h2 {\n        font-size: 22px;\n        line-height: 1.6;\n    }\n\n    .fe_top_two_article .fe_banner_img {\n        height: 180px;\n    }\n\n    .fe-new-elem{\n        padding: 20px 30px;\n    }\n    .fe_subscribeForm_inner {\n        padding: 30px 30px !important;\n    }\n}\n\n/*== To hide sticky header banner & menu below 1025px starts here ==*/\n@media screen and (max-width: 1024px) and (min-width: 200px) {\nhtml body.toHideElement div.topnav-layout-b {\n    display: none!important;\n}\nhtml body.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav {\n    display: none!important;\n}\nhtml body.toHideElement div.topnav-layout-c {\n    display: none;\n}\nhtml body.toHideElement #main-nav-wrapper nav>ul {\n    display:block!important;\n}\n}\n/*== To hide sticky header banner & menu below 1025px ends here ==*/\n@media screen and (max-width: 549px) and (min-width: 200px) { \nhtml body.toHideElement #main-nav-wrapper nav>ul {\n    display:none!important;\n}\n}\n\n\n@media screen and (max-width: 1200px){\n    body.toHideElement #main-nav-wrapper.container nav ul li.search{\n        display:none!important;\n     } \n\n}\n    body.toHideElement div.topnav-layout-b ul .search .search-field-focus {\n        border-bottom:none;\n    }\n\n    body.toHideElement div.topnav-layout-b ul .search {\n        border: 1px solid #d4d7da;\n        border-radius: 100px;\n        padding: 4px 7px 6px 6px !important;\n    }\n\n    body.toHideElement div.topnav-layout-b ul .search .search-field-focus {\n        height:28px!important;\n    }\n\n@media screen and (min-width: 1024px) {\n    /**********************For mutual exclusive ******************/\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c {\n        display: block !important;\n    } \n\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-b,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-b\n     {\n        display: none !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul .signup a, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul .signup a {\n        font-family: \"brandon-grotesque\", sans-serif !important;\n        margin-left: 0 !important;\n        font-size: 13px !important;\n        font-weight: 700 !important;\n        color: #f36 !important;\n        border: 0 !important;\n            transition: all .2s ease-in-out;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul .signup a:hover,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul .signup a:hover\n    {\n            color: #313a43!important;\n        background: transparent !important;\n        border: none !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c ul li.search input,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c ul li.search input\n    {\n        color: #313a43 !important;\n    }\n\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder, \n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-webkit-input-placeholder \n     { /* Chrome/Opera/Safari */\n      color: #313a43 !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-moz-placeholder,\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search ::-moz-placeholder\n      { /* Firefox 19+ */\n      color: #313a43 !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder,   /* IE 10+ */\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n      color: #313a43  !important;\n    }\n    body.BSVarC #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-moz-placeholder,  /* Firefox 18- */\n    body.BSVarB #main-nav-wrapper .static div.topnav-layout-c > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n      color: #313a43  !important;\n    }\n\n\n    body.BSVarC #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover,\n    body.BSVarB #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover\n    {\n            color: #313a43 !important;\n            border: none !important;\n    }\n\n}\n\n/*=== search svg recoloring ===*/\nhtml body.toHideElement .ico-magnifier svg .st0 {\n    fill: #b5b5b5 !important;\n}</style>", "selector": "head", "dependencies": ["F0E23F70-CE28-413C-B9BD-E5E81B07D195"], "type": "append", "id": "9A074C5D-56F5-4ECB-AEED-892E92C412F2"}]}], "name": "Variation #1"}], "audienceIds": ["and", "4582111254", "8605711366"], "changes": null, "id": "8544563553", "integrationSettings": null}], "id": "8542682680", "weightDistributions": null, "name": "[FE] Blog Article Page", "groupId": null, "commitId": "8609403213", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"google_universal_analytics": {"universal_analytics_tracker": "", "universal_analytics_slot": "1"}}, "integrationStringVersion": 2, "viewIds": ["8546803151"], "experiments": [{"weightDistributions": [{"entityId": "8552224761", "endOfRange": 3400}, {"entityId": "8542084167", "endOfRange": 6700}, {"entityId": "8548475676", "endOfRange": 10000}], "audienceName": "Desktop visitors,Exclude IE 11 ", "name": "[FE] Blog Search Experiment", "bucketingStrategy": null, "variations": [{"id": "8552224761", "actions": [{"viewId": "8546803151", "changes": [{"dependencies": [], "type": "custom_code", "id": "F3F35223-8300-41EF-BF63-61D3D0F5AA6F", "value": function($){(function(){

function start(){

  var $ = window.jQuery;
  $('body').addClass('nav-sample-b BSVarA toHideElement');

  var main_nav_wrapper = $('#main-nav-wrapper');
  
  main_nav_wrapper.find('a').each(function(){

    $(this).attr('href', function(){

    	if($(this).attr('href').indexOf('category') != -1){
    		return '/blog'+$(this).attr('href');
    	}else{
    		return $(this).attr('href');
    	}
      
    });

  });

  var count = 0;
  function scrollCheck(){

    var $ = window.jQuery;
    var currentScroll = $(window).scrollTop();

    if(currentScroll > 70){

        if(!main_nav_wrapper.hasClass('fe_stickyMenu')){

            main_nav_wrapper.addClass('fe_stickyMenu'); 
            main_nav_wrapper.css('margin-top', '-90px');

            main_nav_wrapper.animate({
              'margin-top': 0
            }, 200);

            count = 1;

          }

      }else{

          if(main_nav_wrapper.hasClass('fe_stickyMenu') && count == 1){

            count = 0;

            main_nav_wrapper.animate({
                'margin-top': '-90px'
              }, 200, function(){

                main_nav_wrapper.removeClass('fe_stickyMenu'); 
                main_nav_wrapper.css('margin-top', '0');

            });

          }

      }

   }

  $(window).scroll(function(){
	  
	 if( jQuery('body').outerWidth() > 1006){
		 
		 scrollCheck();
		
	  }
      

  });

} 


  var waitForJQuery = setInterval(function(){
      
      if(typeof window.jQuery != 'undefined'){
    
      clearInterval(waitForJQuery);

        var waitForElement = setInterval(function(){
          
          var $ = window.jQuery;

          var main_nav_wrapper = $('#main-nav-wrapper');
          
          if(main_nav_wrapper.length > 0){
             
             clearInterval(waitForElement);
             start();
               
            }

      },1);

      }

  },1);



})();
}}, {"value": "<style>/*variation A*/\n\n.BSVarA .search{\n    display: none !important;\n}\nbody.fixed-nav.sticky-footer-on.BSVarA #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36!important;\n    border: 1px solid #f36!important;\n    color: #fff!important;\n}\n/*variation C*/\n.BSVarC div.topnav-layout-c ul .search input,.BSVarC div.topnav-layout-b ul .search input {\n    width: 180px;\n    height: 20px;\n    padding-left: 10px;\n}\nbody.BSVarC #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n\tmargin-right:5px;\n}\nbody.BSVarB #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n}\n\n/* Input text color for sticky nav */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n.BSVarB .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarB .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n/* Placeholder text color for top nav search input */\n.BSVarC div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #fff;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Icon margin with Blog Article Page v0 */\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  border-bottom: none !important;\n}\n\n/* Input text, search icon color, and icon margin with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  background-position: 0 -2956px !important;\n  margin-left: 6px !important;\n  margin-right: 6px !important;\n}\n\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  color: #313a43!important;\n  border-bottom: none !important;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav .search {\n    border-color: #b5b5b5!important;\n}\n\n/*------Global---------*/\n\n/* Super-specific selector to override !important from Blog Article Page */\n.fe-bs-show-search #main-nav-wrapper .topnav-layout-b li.search {\n  display: inline-block !important;\n}\n\n.container.fe_stickyMenu .static span{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input::-webkit-input-placeholder {  color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a:hover {\n        color: #f36 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu {\n    background: #fff;\n    position: fixed;\n    width: 100%;\n    border-bottom: 1px solid #e8e8e8;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu nav {\n        padding: 19px 60px 15px 60px;\n        padding: 16px 60px 15px 60px;\n}\n\ndiv.topnav-layout-c ul .search,div.topnav-layout-b ul .search  {\n    border: 1px solid #d4d7da;\n    border-radius: 100px;\n    padding: 4px 7px 6px 6px !important;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu .ico-magnifier {\n    display: inline-block;\n    background-position: 0 -2956px;\n    background-repeat: no-repeat;\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    height: 18px;\n    width: 16px;\n}\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a{ color:#f36!important; }\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover {\n    color: #313a43  !important;\n    background: transparent !important;\n}\n\n/*== To hide sticky header banner & menu below 1025px starts here ==*/\n@media screen and (max-width: 1024px) and (min-width: 200px) {\nhtml body.toHideElement div.topnav-layout-b {\n    display: none!important;\n}\nhtml body.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav {\n\tdisplay: none!important;\n}\nhtml body.toHideElement div.topnav-layout-c {\n    display: none;\n}\nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:block!important;\n}\n}\n\n/*== To hide sticky header banner & menu below 1025px ends here ==*/\n@media screen and (max-width: 549px) and (min-width: 200px) { \nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:none!important;\n}\n}</style>", "selector": "head", "dependencies": ["F3F35223-8300-41EF-BF63-61D3D0F5AA6F"], "type": "append", "id": "160312DB-1C0A-47FD-B0E5-33CA8C85A037"}]}], "name": "Original"}, {"id": "8542084167", "actions": [{"viewId": "8546803151", "changes": [{"dependencies": [], "type": "custom_code", "id": "9DA1D647-813C-4F04-946C-5A1394849DED", "value": function($){(function(){

function start(){

  var $ = window.jQuery;
  // If Blog Article Page experiment is not running, add nav

  addNav();

  

  /*jshint latedef:false*/
  function addNav() {

    $('body').addClass('nav-sample-c BSVarB toHideElement');

    var main_nav_wrapper = $('#main-nav-wrapper');
    
    main_nav_wrapper.find('a').each(function(){

      $(this).attr('href', function(){

        if($(this).attr('href').indexOf('category') != -1){
          return '/blog'+$(this).attr('href');
        }else{
          return $(this).attr('href');
        }
        
      });

    });

    var count = 0;
    function scrollCheck(){

      var $ = window.jQuery;
      var currentScroll = $(window).scrollTop();

      if(currentScroll > 70){

          if(!main_nav_wrapper.hasClass('fe_stickyMenu')){

              main_nav_wrapper.addClass('fe_stickyMenu'); 
              main_nav_wrapper.css('margin-top', '-90px');

              main_nav_wrapper.animate({
                'margin-top': 0
              }, 200);

              count = 1;

            }

        }else{

            if(main_nav_wrapper.hasClass('fe_stickyMenu') && count == 1){

              count = 0;

              main_nav_wrapper.animate({
                  'margin-top': '-90px'
                }, 200, function(){

                  main_nav_wrapper.removeClass('fe_stickyMenu'); 
                  main_nav_wrapper.css('margin-top', '0');

              });

            }

        }

     }

    $(window).scroll(function(){

	 if( jQuery('body').outerWidth() > 1006){
		 
		 scrollCheck();
		
	  }

    });
  }

} 


  var waitForJQuery = setInterval(function(){
      
      if(typeof window.jQuery != 'undefined'){
    
      clearInterval(waitForJQuery);

        var waitForElement = setInterval(function(){
          
          var $ = window.jQuery;

          var main_nav_wrapper = $('#main-nav-wrapper');
          
          if(main_nav_wrapper.length > 0){
             
             clearInterval(waitForElement);
             start();
               
            }

      },1);

      }

  },1);



})();
}}, {"value": "<style>/*variation A*/\n\n.BSVarA .search{\n    display: none !important;\n}\nbody.fixed-nav.sticky-footer-on.BSVarA #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36!important;\n    border: 1px solid #f36!important;\n    color: #fff!important;\n}\n/*variation C*/\n.BSVarC div.topnav-layout-c ul .search input,.BSVarC div.topnav-layout-b ul .search input {\n    width: 180px;\n    height: 20px;\n    padding-left: 10px;\n}\nbody.BSVarC #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n\tmargin-right:5px;\n}\nbody.BSVarB #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n}\n\n/* Input text color for sticky nav */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n.BSVarB .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarB .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n/* Placeholder text color for top nav search input */\n.BSVarC div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #fff;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Icon margin with Blog Article Page v0 */\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  border-bottom: none !important;\n}\n\n/* Input text, search icon color, and icon margin with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  background-position: 0 -2956px !important;\n  margin-left: 6px !important;\n  margin-right: 6px !important;\n}\n\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  color: #313a43!important;\n  border-bottom: none !important;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav .search {\n    border-color: #b5b5b5!important;\n}\n\n/*------Global---------*/\n\n/* Super-specific selector to override !important from Blog Article Page */\n.fe-bs-show-search #main-nav-wrapper .topnav-layout-b li.search {\n  display: inline-block !important;\n}\n\n.container.fe_stickyMenu .static span{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input::-webkit-input-placeholder {  color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a:hover {\n        color: #f36 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu {\n    background: #fff;\n    position: fixed;\n    width: 100%;\n    border-bottom: 1px solid #e8e8e8;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu nav {\n        padding: 19px 60px 15px 60px;\n        padding: 16px 60px 15px 60px;\n}\n\ndiv.topnav-layout-c ul .search,div.topnav-layout-b ul .search  {\n    border: 1px solid #d4d7da;\n    border-radius: 100px;\n    padding: 4px 7px 6px 6px !important;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu .ico-magnifier {\n    display: inline-block;\n    background-position: 0 -2956px;\n    background-repeat: no-repeat;\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    height: 18px;\n    width: 16px;\n}\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a{ color:#f36!important; }\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover {\n    color: #313a43  !important;\n    background: transparent !important;\n}\n\n/*== To hide sticky header banner & menu below 1025px starts here ==*/\n@media screen and (max-width: 1024px) and (min-width: 200px) {\nhtml body.toHideElement div.topnav-layout-b {\n    display: none!important;\n}\nhtml body.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav {\n\tdisplay: none!important;\n}\nhtml body.toHideElement div.topnav-layout-c {\n    display: none;\n}\nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:block!important;\n}\n}\n\n/*== To hide sticky header banner & menu below 1025px ends here ==*/\n@media screen and (max-width: 549px) and (min-width: 200px) { \nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:none!important;\n}\n}\n\n/*=== search svg recoloring ===*/\nhtml body.toHideElement .fe_stickyMenu .ico-magnifier svg .st0{\n  fill:#b5b5b5 !important;\n\n}</style>", "selector": "head", "dependencies": ["9DA1D647-813C-4F04-946C-5A1394849DED"], "type": "append", "id": "116440B4-4BB3-468B-8D0C-4410F9F35ECE"}]}], "name": "Variation #1"}, {"id": "8548475676", "actions": [{"viewId": "8546803151", "changes": [{"dependencies": [], "type": "custom_code", "id": "E3907B2E-E2F7-4F9E-999A-41578E83F28B", "value": function($){(function(){

function start(){

  var $ = window.jQuery;

  addNav();

  /*jshint latedef:false*/
  function addNav() {
    $('body').addClass('nav-sample-c BSVarC toHideElement');

    var main_nav_wrapper = $('#main-nav-wrapper');
    
    main_nav_wrapper.find('a').each(function(){

      $(this).attr('href', function(){

        if($(this).attr('href').indexOf('category') != -1){
          return '/blog'+$(this).attr('href');
        }else{
          return $(this).attr('href');
        }
        
      });

    });

    //main_nav_wrapper.find('.search input').addClass('search-field-focus');

    var count = 0;
    function scrollCheck(){

      var $ = window.jQuery;
      var currentScroll = $(window).scrollTop();

      if(currentScroll > 70){

          if(!main_nav_wrapper.hasClass('fe_stickyMenu')){

              main_nav_wrapper.addClass('fe_stickyMenu'); 
              main_nav_wrapper.css('margin-top', '-90px');

              main_nav_wrapper.animate({
                'margin-top': 0
              }, 200);

              count = 1;

            }

        }else{

            if(main_nav_wrapper.hasClass('fe_stickyMenu') && count == 1){

              count = 0;

              main_nav_wrapper.animate({
                  'margin-top': '-90px'
                }, 200, function(){

                  main_nav_wrapper.removeClass('fe_stickyMenu'); 
                  main_nav_wrapper.css('margin-top', '0');

              });

            }

        }

     }

    $(window).scroll(function(){

	 if( jQuery('body').outerWidth() > 1006){
		 
		 scrollCheck();
		
	  }

    });

  }
} 


  var waitForJQuery = setInterval(function(){
      
      if(typeof window.jQuery != 'undefined'){
    
      clearInterval(waitForJQuery);

        var waitForElement = setInterval(function(){
          
          var $ = window.jQuery;

          var main_nav_wrapper = $('#main-nav-wrapper');
          
          if(main_nav_wrapper.length > 0){
             
             clearInterval(waitForElement);
             start();
               
            }

      },1);

      }

  },1);



})();
}}, {"value": "<style>/*variation A*/\n\n.BSVarA .search{\n    display: none !important;\n}\nbody.fixed-nav.sticky-footer-on.BSVarA #main-nav-wrapper.container nav ul li.signup a:hover {\n    background: #f36!important;\n    border: 1px solid #f36!important;\n    color: #fff!important;\n}\n/*variation C*/\n.BSVarC div.topnav-layout-c ul .search input,.BSVarC div.topnav-layout-b ul .search input {\n    width: 180px;\n    height: 20px;\n    padding-left: 10px;\n}\nbody.BSVarC #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n\tmargin-right:5px;\n}\nbody.BSVarB #main-nav-wrapper.container .ico-magnifier {\n    height: 18px!important;\n    width: 16px;\n}\n\n/* Input text color for sticky nav */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n.BSVarB .fe_stickyMenu div.topnav-layout-c ul .search input,.BSVarB .fe_stickyMenu div.topnav-layout-b ul .search input {\n    color: #313a43 !important;\n}\n\n/* Placeholder text color for top nav search input */\n.BSVarC div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #fff;\n}\n.BSVarC div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #fff;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v0 */\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-webkit-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search ::-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-ms-input-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.BSVarC .fe_stickyMenu div.topnav-layout-c ul .search :-moz-placeholder,.BSVarC .fe_stickyMenu div.topnav-layout-b ul .search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\n/* Icon margin with Blog Article Page v0 */\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n\n.fe-bav0 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  border-bottom: none !important;\n}\n\n/* Input text, search icon color, and icon margin with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > i {\n  background-position: 0 -2956px !important;\n  margin-left: 6px !important;\n  margin-right: 6px !important;\n}\n\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search > form > input {\n  color: #313a43!important;\n  border-bottom: none !important;\n}\n\n/* Placeholder text for sticky nav search input with Blog Article Page v1 */\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-webkit-input-placeholder  { /* Chrome/Opera/Safari */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search ::-moz-placeholder  { /* Firefox 19+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-ms-input-placeholder  { /* IE 10+ */\n  color: #313a43;\n}\n.fe-bav1 #main-nav-wrapper > nav > div.topnav-layout-b > ul > li.search :-moz-placeholder  { /* Firefox 18- */\n  color: #313a43;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav .search {\n    border-color: #b5b5b5!important;\n}\n\n/*------Global---------*/\n\n/* Super-specific selector to override !important from Blog Article Page */\n.fe-bs-show-search #main-nav-wrapper .topnav-layout-b li.search {\n  display: inline-block !important;\n}\n\n.container.fe_stickyMenu .static span{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input{ color:#313a43!important;}\n.sticky-footer-on div.topnav-layout-c ul .search input::-webkit-input-placeholder {  color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a {\n    color: #313a43!important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul a:hover {\n        color: #f36 !important;\n}\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu {\n    background: #fff;\n    position: fixed;\n    width: 100%;\n    border-bottom: 1px solid #e8e8e8;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu nav {\n        padding: 19px 60px 15px 60px;\n        padding: 16px 60px 15px 60px;\n}\n\ndiv.topnav-layout-c ul .search,div.topnav-layout-b ul .search  {\n    border: 1px solid #d4d7da;\n    border-radius: 100px;\n    padding: 4px 7px 6px 6px !important;\n}\n\nbody.fixed-nav   #main-nav-wrapper.container.fe_stickyMenu .ico-magnifier {\n    display: inline-block;\n    background-position: 0 -2956px;\n    background-repeat: no-repeat;\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    height: 18px;\n    width: 16px;\n}\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a{ color:#f36!important; }\n\nbody.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav ul .signup.subscribe a:hover {\n    color: #313a43  !important;\n    background: transparent !important;\n}\n\n/*== To hide sticky header banner & menu below 1025px starts here ==*/\n@media screen and (max-width: 1024px) and (min-width: 200px) {\nhtml body.toHideElement div.topnav-layout-b {\n    display: none!important;\n}\nhtml body.fixed-nav #main-nav-wrapper.container.fe_stickyMenu nav {\n\tdisplay: none!important;\n}\nhtml body.toHideElement div.topnav-layout-c {\n    display: none;\n}\nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:block!important;\n}\n}\n\n/*== To hide sticky header banner & menu below 1025px ends here ==*/\n@media screen and (max-width: 549px) and (min-width: 200px) { \nhtml body.toHideElement #main-nav-wrapper nav>ul {\n\tdisplay:none!important;\n}\n}\n\n/*=== search svg recoloring ===*/\nhtml body.toHideElement .fe_stickyMenu .ico-magnifier svg .st0{\n  fill:#b5b5b5 !important;\n\n}</style>", "selector": "head", "dependencies": ["E3907B2E-E2F7-4F9E-999A-41578E83F28B"], "type": "append", "id": "BA0891F7-26DB-495F-BC12-DA10CC432A4A"}]}], "name": "Variation #2"}], "audienceIds": ["and", "4582111254", "8605711366"], "changes": null, "id": "8549695406", "integrationSettings": null}], "id": "8549275351", "weightDistributions": null, "name": "[FE] Blog Search Experiment", "groupId": null, "commitId": "8607581357", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8579480706"], "experiments": [{"weightDistributions": [{"entityId": "8572971905", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[FE] [QA] Personalized Promotions on DesignBetter", "bucketingStrategy": null, "variations": [{"id": "8576062583", "actions": [], "name": "Original"}, {"id": "8572971905", "actions": [{"viewId": "8579480706", "changes": [{"dependencies": [], "type": "custom_code", "id": "DF2AD878-117B-43BA-8ECA-27488F287662", "value": function($){(function poll () {
  if (!window.initUniqueContent) return setTimeout(poll, 50);
  initUniqueContent(
  {
    type: 'sticky', // modal
    header: 'Hello InVisionapp'
  });
})();
}}, {"selector": ".chapter-title > h2", "dependencies": ["DF2AD878-117B-43BA-8ECA-27488F287662"], "attributes": {"html": "This means Optimizely is working! "}, "type": "attribute", "id": "715E4E82-AAD5-428C-86DF-A78CB63DE2F3", "css": {}}, {"selector": ".in-view .chapter-title > h2", "dependencies": ["715E4E82-AAD5-428C-86DF-A78CB63DE2F3"], "attributes": {"html": "Hi Robbie! "}, "type": "attribute", "id": "00B859D6-E1DB-43D3-93E2-987F67B41138", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "8577042436", "integrationSettings": null}], "id": "8582531003", "weightDistributions": null, "name": "[FE] [QA] Personalized Promotions on DesignBetter", "groupId": null, "commitId": "8582580819", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["7382791050", "8579875315", "8590490633"], "experiments": [{"weightDistributions": [{"entityId": "8583153892", "endOfRange": 10000}], "audienceName": "IBM visitors", "name": "IBM personalization ", "bucketingStrategy": null, "variations": [{"id": "8576064838", "actions": [{"viewId": "7382791050", "changes": []}, {"viewId": "8579875315", "changes": []}, {"viewId": "8590490633", "changes": []}], "name": "Original"}, {"id": "8583153892", "actions": [{"viewId": "7382791050", "changes": [{"selector": ".hero-subtitle", "dependencies": [], "attributes": {"html": "Are you using IBM\u2019s best design stack? <br> See IBMers Russell Parrish and Bobby Smith show the latest design tools and practices. "}, "type": "attribute", "id": "49416D68-78B1-49F9-AD16-1E94B20E0BDB", "css": {}}, {"selector": ".hero-play", "dependencies": ["49416D68-78B1-49F9-AD16-1E94B20E0BDB"], "attributes": {"remove": true}, "type": "attribute", "id": "CA1E94D5-8CBF-4A91-9C33-FC726731F086", "css": {}}, {"selector": ".trial-trigger", "dependencies": ["CA1E94D5-8CBF-4A91-9C33-FC726731F086"], "attributes": {"href": "https://www.invisionapp.com/webinars/observe-reflect-make-IBM-collaboration?source=IBM", "html": "Watch Now!"}, "type": "attribute", "id": "F5DF771E-79E7-4020-845B-888D82D025AA", "css": {}}]}, {"viewId": "8579875315", "changes": [{"selector": "h4", "dependencies": [], "attributes": {"html": "Thanks for your interest in InVision! "}, "type": "attribute", "id": "F710A77B-0A08-4539-B407-D446BA6DE072", "css": {}}, {"selector": "#thank-you-content > p", "dependencies": ["F710A77B-0A08-4539-B407-D446BA6DE072"], "attributes": {"html": "More than 5,000 IBMers are already using InVision to collaborate across design, engineering, offering management, and more. "}, "type": "attribute", "id": "C26AE7CA-3820-4A8D-BE0A-CB373487C15E", "css": {}}, {"selector": "a.enterprise", "dependencies": ["C26AE7CA-3820-4A8D-BE0A-CB373487C15E"], "attributes": {"html": "Get access to IBM's InVision"}, "type": "attribute", "id": "7A94F843-0F4F-451C-923F-A703ED2EA824", "css": {}}, {"selector": "#thank-you-feature", "dependencies": ["7A94F843-0F4F-451C-923F-A703ED2EA824"], "attributes": {"html": "<div id=\"thank-you-content\">\n  <span id=\"sponsored\">Brought to you by <span class=\"invision-grey-logo\"></span></span>\n  <h4 data-optly-f710a77b-0a08-4539-b407-d446ba6de072=\"\" style=\"\">Thanks for your interest in InVision! </h4>\n  <p data-optly-c26ae7ca-3820-4a8d-be0a-cb373487c15e=\"\" style=\"\">More than 5,000 IBMers are already using InVision to collaborate across design, engineering, offering management, and more. </p>\n  <a href=\"https://ibm.biz/invisioncontributor\" class=\"cta enterprise pistanos-late\" target=\"_blank\" data-pistanos-num=\"2\" data-pistanos-info=\"Free Trial CTA\" data-pistanos-location=\"Body\" data-optly-7a94f843-0f4f-451c-923f-a703ed2ea824=\"\" style=\"\">Get access to IBM's InVision</a>\n</div>"}, "type": "attribute", "id": "436B9FBF-E907-4A02-B3FC-EFD32553CD66", "css": {}}]}, {"viewId": "8590490633", "changes": [{"selector": "h4", "dependencies": [], "attributes": {"html": "Thanks for your interest in InVision! "}, "type": "attribute", "id": "AA8A6738-C19C-47F0-8164-8ECE3C4A6974", "css": {}}, {"selector": "#thank-you-content > p", "dependencies": ["AA8A6738-C19C-47F0-8164-8ECE3C4A6974"], "attributes": {"html": "More than 5,000 IBMers are already using InVision to collaborate across design, engineering, offering management, and more."}, "type": "attribute", "id": "5A8DBA5A-5831-4813-81D3-BC7022EFDF7C", "css": {}}, {"selector": "a.enterprise", "dependencies": ["5A8DBA5A-5831-4813-81D3-BC7022EFDF7C"], "attributes": {"href": "https://ibm.biz/invisioncontributor", "html": "Get access to IBM's InVision"}, "type": "attribute", "id": "CD64212A-6971-40E7-90B3-AA74B2D4987A", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8584831247"], "changes": null, "id": "8578866690", "integrationSettings": null}], "id": "8583781819", "weightDistributions": null, "name": "IBM personalization ", "groupId": null, "commitId": "8603652926", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "groups": [], "views": [{"category": "home", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/", "match": "simple"}]], "name": "Homepage", "tags": [], "apiName": "homepage", "id": "7382791050"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/", "match": "substring"}]], "name": "Full App", "tags": [], "apiName": "application", "id": "7511471189"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/privacy?jasontest=true", "match": "exact"}]], "name": "Privacy Page (for testing)", "tags": [], "apiName": "privacy_page_for_testing", "id": "8152285231"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "projects.invisionapp.com/share/", "match": "substring"}, {"type": "url", "value": "aqua-1.shared.invision.works/share/", "match": "substring"}]], "name": "Share Commenting", "tags": [], "apiName": "share_commenting_local", "id": "8200842325"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "projects.invisionapp.com/share", "match": "substring"}]], "name": "Shared Protoype (Loaded)", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  // only activate when prototype loaded
  return $(".status").length === 0;
}, "apiName": "shared_protoype_loaded", "id": "8213722717"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/new-features", "match": "substring"}, {"type": "url", "value": "https://www.invisionapp.com/customers", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/tour", "match": "substring"}]], "name": "Marketing Site - Self Serve Pages", "tags": [], "apiName": "marketing_site", "id": "8220875769"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/main", "match": "substring"}]], "name": "InVision Product", "tags": [], "apiName": "invision_product", "id": "8220889035"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise/signup", "match": "simple"}]], "name": "/enterprise/signup", "tags": [], "apiName": "enterprise_trial_lp", "id": "8221074974"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/customers", "match": "simple"}]], "name": "Customers", "tags": [], "apiName": "customers", "id": "8224798984"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/thankyou/enterprise", "match": "substring"}]], "name": "Enterprise Thank You Page", "tags": [], "apiName": "enterprise_thank_you_page", "id": "8225762082"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/thankyou/inspect", "match": "substring"}]], "name": "Inspect Thank You Page", "tags": [], "apiName": "inspect_thank_you_page", "id": "8227950840"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/new-features", "match": "substring"}]], "name": "New Features", "tags": [], "apiName": "new_features", "id": "8235724952"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/tour", "match": "substring"}]], "name": "Tour", "tags": [], "apiName": "httpswwwinvisionappcomtour", "id": "8238428527"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/trial/enterprise", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/plans", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/", "match": "simple"}]], "name": "Live Chat Pages", "tags": [], "apiName": "live_chat_pages", "id": "8241004435"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/main", "match": "simple"}]], "name": "Upgrade only", "tags": [], "activationType": "callback", "activationCode": function callBackFn(activate, options) {		    
  if (window.location.href.indexOf('upgrade') != -1) {	    
    activate();
  }
  
  // adding code to active from any page if navigate to upgrade
  var scope =  window.angular && window.angular.element('body').scope();
if(typeof scope != 'undefined'){			
  scope.$on('$locationChangeSuccess', function(event, next, current) {
  if (next.indexOf('/upgrade') != -1) {
    activate();
  }
  });
} 
}, "apiName": "upgrade_only", "id": "8243064916"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/main", "match": "simple"}], ["not", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]]], "name": "[FE] Project page (New User)", "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  
  if(sessionStorage.getItem('fe_come_from_page') === "signup"){
     activate();
  }
  
}, "apiName": "project_page_new_user", "id": "8247883337"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "createProjectModal", "match": "substring"}]], "name": "Create Project Screen", "tags": [], "apiName": "create_project_screen", "id": "8249813621"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup?setTestCookie=true", "match": "exact"}]], "name": "Signup Page (Set Test Cookie)", "tags": [], "apiName": "set_test_cookie_on_signup_page", "id": "8250110349"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]], "name": "Sign Up page", "tags": [{"category": "other", "locator": function($){sessionStorage.setItem('fe_come_from_page', 'signup');
var tagValue = "signup";
return tagValue;
}, "valueType": "string", "locatorType": "javascript", "apiName": "new_user"}], "apiName": "sign_up_page", "id": "8253219318"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/login", "match": "substring"}]], "name": "LogIn page", "tags": [{"category": "other", "locator": function($){sessionStorage.setItem('fe_come_from_page', 'signin');
var tagValue = "signin";
return tagValue;
}, "valueType": "string", "locatorType": "javascript", "apiName": "new_user"}], "apiName": "login_page", "id": "8257171414"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise", "match": "simple"}]], "name": "Enterprise Page (Classic)", "tags": [], "apiName": "enterprise_page_classic", "id": "8264661603"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/plans", "match": "simple"}]], "name": "Plans Page", "tags": [], "apiName": "plans_page", "id": "8268761417"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com", "match": "simple"}]], "name": "Homepage w/ Enterprise Banner", "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
  if (document.querySelectorAll(".ent_banner_on").length > 0 || document.querySelectorAll("#enterprise_offer_modal").length > 0) {
    activate();
  }
}, "apiName": "homepage_w_enterprise_banner", "id": "8270262579"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "projects.invisionapp.com/d/invitation/accept", "match": "substring"}]], "name": "Collaborator & Team Invite LP", "tags": [], "apiName": "collaborator__team_invite_lp", "id": "8284102196"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/plans", "match": "simple"}]], "name": "Plans Page (Marketing)", "tags": [], "apiName": "pricing", "id": "8289950791"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/feature/inspect", "match": "simple"}]], "name": "Inspect", "tags": [], "apiName": "inspect", "id": "8297175158"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]], "name": "Signup Page", "tags": [], "apiName": "signup_page_1", "id": "8297278910"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]], "name": "Signup Page - AQUA-317 Audience", "tags": [], "activationType": "manual", "apiName": "signup_page", "id": "8298465112"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.beta-www.invisionapp.com/enterprise", "match": "simple"}]], "name": "Beta Site Enterprise Page", "tags": [], "apiName": "beta_site_enterprise_page", "id": "8308882897"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/", "match": "simple"}]], "name": "Home page [Personalize Homepage Subhead]", "tags": [{"category": "other", "locator": function($){var tagValue = "notUsed"; 
return tagValue;
}, "valueType": "string", "locatorType": "javascript", "apiName": "is_project_created"}], "activationType": "callback", "activationCode": function callbackFn(activate, options) {


// going back and forth
var waitformodela = setInterval(function(){
	
	var scopeCount = 0;
	var scope =  window.angular && window.angular.element('body').scope();

	if(typeof scope != 'undefined' || scopeCount > 200){
			
		 clearInterval(waitformodela);
		
		  scope.$on('$locationChangeSuccess', function(event, next, current) {
									
			if (next.indexOf('main#/projects') != -1 && next.length == 49) {
			  
				projectPage();
				
			}
			
		  });
	
			var next = window.location.href;
			
			if (next.indexOf('main#/projects') != -1 && next.length == 49) {
			  
				projectPage();
				
			}
		  
	}else{
		scopeCount++;
	}
	
},10);
	
function projectPage(){
	
	var waitForjQuery = setInterval(function(){
		
		if(typeof window.jQuery != "undefined"){
			
			clearInterval(waitForjQuery);
			
			var waitForElement = setInterval(function(){
				
				var $ = window.jQuery;
				
				if($('.projects-list').length){
					
					clearInterval(waitForElement);
				
					setTimeout(function(){
						
						
						if($('.no-projects-bucket').length == 1){
						
							document.cookie = "fe_Personalize_Homepage=true;domain=.invisionapp.com;path=/";
							
							
						}else{
							
							document.cookie = "fe_Personalize_Homepage=false;domain=.invisionapp.com;path=/";
							
						}
					
					},1500);
					
					
				}

			}, 30);
		}
		
	}, 30);
	
	
}

activate();
	
}, "apiName": "home_page_personalize_homepage_subhead", "id": "8316971607"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/signup/enterprise", "match": "simple"}]], "name": "Enterprise Signup Page", "tags": [], "apiName": "7610134_enterprise_signup_page", "id": "8327568687"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/signup/enterprise", "match": "simple"}, {"type": "url", "value": "https://www.invisionapp.com/trial/enterprise", "match": "simple"}]], "name": "Enterprise Trial and Signup Pages", "tags": [], "apiName": "7610134_enterprise_trial_and_signup_pages", "id": "8329871946"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/main#/projects", "match": "simple"}]], "name": "Project Page", "tags": [], "apiName": "7610134_project_page", "id": "8332147295"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise/", "match": "simple"}]], "name": "Enterprise", "tags": [], "apiName": "7610134_enterprise", "id": "8395531584"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "QZ9E2E934", "match": "regex"}]], "name": "Share Commenting QA", "tags": [], "apiName": "7610134_share_commenting_qa", "id": "8399953536"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "invisionapp", "match": "substring"}], ["not", ["or", {"type": "url", "value": "invisionapp.com/blog", "match": "substring"}]]], "name": "[FE] All Pages", "tags": [], "apiName": "7610134_fe_all_pages", "id": "8401991982"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "invisionapp.com/blog/", "match": "substring"}, {"type": "url", "value": "invisionapp.com\\/blog\\/\\S+", "match": "regex"}]], "name": "[FE] Blog page", "tags": [], "apiName": "7610134_feblog_page", "id": "8407455114"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise/impact", "match": "simple"}, {"type": "url", "value": "https://www.beta-www.invisionapp.com/enterprise/impact", "match": "simple"}]], "name": "enterprise/impact", "tags": [], "apiName": "7610134_enterpriseimpact", "id": "8410870260"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/enterprise/trial", "match": "simple"}]], "name": "enterprise/trial", "tags": [], "apiName": "7610134_enterprisetrial", "id": "8415220092"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/blog", "match": "simple"}]], "name": "[FE] Blog Home", "tags": [], "apiName": "7610134_fe_blog_home", "id": "8418653342"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "invisionapp.com/enterprise/impact", "match": "simple"}]], "name": "[Steve] ROI report", "tags": [], "apiName": "7610134_steve_roi_report", "id": "8426172561"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "projects.invisionapp.com/share/", "match": "substring"}], ["not", ["or", {"type": "url", "value": "/comments", "match": "substring"}, {"type": "url", "value": "/screens", "match": "simple"}]]], "name": "Share Discoverable Commenting", "tags": [], "apiName": "7610134_shared_prototype", "id": "8426212575"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]], "name": "[Steve] Signup page", "tags": [], "apiName": "7610134_steve_signup_page", "id": "8440950824"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.designbetter.co/", "match": "substring"}]], "name": "https://www.designbetter.co/", "tags": [], "apiName": "7610134_httpswwwdesignbetterco", "id": "8484224621"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://muz.li/", "match": "exact"}]], "name": "Muzli home page", "tags": [], "apiName": "7610134_muzli_home_page", "id": "8504601668"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/main", "match": "simple"}], ["not", ["or", {"type": "url", "value": "https://projects.invisionapp.com/d/signup", "match": "simple"}]]], "name": "[FE] Project page (New User from freehand_lp )", "tags": [], "activationType": "callback", "activationCode": function callbackFn(activate, options) {
   
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

  if(readCookie('fe_come_from_page') === "freehand_lp"){
     activate();
  }
  
}, "apiName": "7610134_fe_project_page_new_user_from_freehand_lp_", "id": "8521475663"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/projects\\.invisionapp\\.com\\/d\\/signup\\?utm_source=invite&utm_medium=link&utm_campaign=saasquatch", "match": "regex"}]], "name": "Referral Signup Page", "tags": [], "apiName": "7610134_httpsprojectsinvisionappcomdsignup", "id": "8522141871"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.invisionapp.com/blog/", "match": "substring"}]], "name": "[FE] Blog Article Page", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
    return document.querySelectorAll(".single-post").length > 0;
  }, "apiName": "7610134_fe_blog_article_page", "id": "8544893683"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.invisionapp.com/blog", "match": "substring"}]], "name": "Blog Search Experiment ", "tags": [], "apiName": "7610134_blog_search_experiment_", "id": "8546803151"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/blog/?s=", "match": "substring"}]], "name": "Blog Search Results Page", "tags": [], "apiName": "7610134_blog_search_results_page", "id": "8563871919"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/freehand/document", "match": "substring"}]], "name": "Freehand", "tags": [], "apiName": "7610134_freehand", "id": "8572286600"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://designco-dev-pr-66.herokuapp.com/", "match": "substring"}]], "name": "DesignBetter Staging Site ", "tags": [], "apiName": "7610134_designbetter", "id": "8579480706"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/webinars/observe-reflect-make-IBM-collaboration", "match": "simple"}]], "name": "IBM webinar", "tags": [], "apiName": "7610134_ibm_webinar", "id": "8579875315"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/webinars/design-to-development-workflow", "match": "simple"}]], "name": "Inspect webinar", "tags": [], "apiName": "7610134_inspect_webinar", "id": "8590490633"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.invisionapp.com/webinars/observe-reflect-make-IBM-collaboration", "match": "simple"}]], "name": "IBM Webinar Pageview", "tags": [], "apiName": "7610134_ibm_webinar_pagview", "id": "8603493331"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "invisionapp.com/lp/freehand", "match": "simple"}]], "name": "[Steve] Freehand Landing page", "tags": [], "apiName": "7610134_steve_freehand_landing_page", "id": "8605722339"}], "projectId": "7610134", "namespace": "7610134", "listTargetingCookies": [], "dimensions": [{"segmentId": "5637610161", "id": "5610611370", "apiName": "accountType", "name": "Account Type"}, {"segmentId": "5633860420", "id": "5620751197", "apiName": "teamMember", "name": "Team Member"}, {"segmentId": "5635642224", "id": "5638131759", "apiName": "role", "name": "Role"}, {"segmentId": "5701190303", "id": "5708000170", "apiName": "clicked-enterprise-cta", "name": "Clicked Enterprise CTA"}, {"segmentId": "5758861514", "id": "5766700913", "apiName": "newAccount", "name": "New Account"}, {"segmentId": "7822660745", "id": "7797992441", "apiName": "InferLeadScore", "name": "Infer Lead Score"}, {"segmentId": null, "id": "8218995112", "apiName": "clearbit_over_100_employees", "name": "Clearbit Over 100 Employees"}, {"segmentId": null, "id": "8226350929", "apiName": "clearbit_emp_range", "name": "Clearbit Employees Range"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "4582111254", "name": "Desktop visitors"}, {"conditions": ["and", ["or", ["or", {"value": "private_cloud_testing", "type": "query", "name": "campaign", "match": "exact"}]]], "id": "8305811627", "name": "Private Cloud Audiences"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "fe_Personalize_Homepage", "match": "exact"}]]], "id": "8321901242", "name": "[FE] Not created Project"}, {"conditions": ["and", ["or", ["or", {"value": "window.reveal && window.reveal.company.metrics.employees > 100 && window.reveal.company.tags.indexOf('Financial Services') !=-1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8401580452", "name": "Finance + >100 employees + Desktop Only"}, {"conditions": ["and", ["or", ["or", {"value": "window.reveal && window.reveal.company.metrics.employees > 100 && window.reveal.company.tags.indexOf('Technology') !=-1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8404292062", "name": "Technology + >100 employees + Desktop Only"}, {"conditions": ["and", ["or", ["or", {"value": "var  tags = window.reveal.company.tags;\nwindow.reveal && window.reveal.company.metrics.employees > 100 && (tags.indexOf('Consumer Discretionary') != -1 || tags.indexOf('Consumer Electronics') != -1 || tags.indexOf('Consumer Staples') != -1 || tags.indexOf('Consumer Goods') != -1)", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8404910956", "name": "Consumer Goods + >100 employees + Desktop Only"}, {"conditions": ["and", ["or", ["or", {"value": "var tags = window.reveal.company.tags; \nwindow.reveal && window.reveal.company.metrics.employees > 100 && (tags.indexOf('Technology') == -1 && tags.indexOf('Financial Services') == -1 && tags.indexOf('Consumer Discretionary') == -1 && tags.indexOf('Consumer Electronics') == -1 && tags.indexOf('Consumer Staples') == -1 && tags.indexOf('Consumer Goods') == -1)", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8405801110", "name": "Other Industry + >100 employees + Desktop Only"}, {"conditions": ["and", ["or", ["or", {"value": "paid", "type": "query", "name": "utm_medium", "match": "substring"}], ["or", {"value": "upo-campaign3", "type": "query", "name": "utm_campaign", "match": "exact"}]]], "id": "8426261478", "name": "paid"}, {"conditions": ["and", ["or", ["or", {"value": "window.reveal && window.reveal.company.domain == \"ibm.com\"", "type": "code", "name": null, "match": null}]]], "id": "8584831247", "name": "IBM visitors"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "ie11", "type": "browser_version", "name": null, "match": null}]]]], "id": "8605711366", "name": "Exclude IE 11 "}], "integrationSettings": [], "anonymizeIP": false, "projectJS": function(){var waitForJQuery = setInterval(function() {
    if (typeof window.jQuery != 'undefined') {
        clearInterval(waitForJQuery);
        var $ = window.jQuery;
      
        /* ---------------  fe_come_from_page  -------------- 
        if(window.location.href == "https://www.invisionapp.com/lp/freehand"){
        	
	        $('body').delegate('[value="Start Now"]', 'click', function() {
	            document.cookie = "fe_come_from_page=freehand_lp;domain=.invisionapp.com;path=/";
	        });
              	
        }else{

        	$('body').delegate('[value="Start Now"]', 'click', function() {

	           document.cookie = "fe_come_from_page=;domain=.invisionapp.com;path=/";

	        });
        	
        }
        */


    }
}, 100);

var waitForjQuery = setInterval(function(){

  	if(typeof window.jQuery != "undefined"){
      
      clearInterval(waitForjQuery);
      
     var $ = window.jQuery;
      
       $( document ).ajaxComplete(function( event, xhr, settings ) {
		         
        if ( settings.url.indexOf("api/validateEmailBV") && typeof xhr.responseJSON != "undefined") {

           var subcribeStatus = (xhr.responseJSON.status);

            if(subcribeStatus == "valid"){
              
             window['optimizely'] = window['optimizely'] || [];
              window['optimizely'].push({
              type: "event",
              eventName: "Subscribed"
              });

            };

        }

      });
      
      
       //*************** For blog search experiment***********************//
      
 $( ".search form" ).submit(function( event ) {
  				
        window['optimizely'] = window['optimizely'] || [];
              window['optimizely'].push({
              type: "event",
              eventName: "TOclicks_search_button"
  
							});
        });


    
    }
  
}, 10);
}, "visitorAttributes": [], "accountId": "7610134", "events": [{"category": "add_to_cart", "name": "Billing Page Viewed", "eventType": "custom", "viewId": null, "apiName": "Billing Page Viewed", "id": "8005232813", "eventFilter": null}, {"category": "purchase", "name": "Upgrade.PaymentConfirmationPage", "eventType": "custom", "viewId": null, "apiName": "Upgrade.PaymentConfirmationPage", "id": "8009031895", "eventFilter": null}, {"category": "convert", "name": "Ent.QuestionSubmitted", "eventType": "custom", "viewId": null, "apiName": "Ent.QuestionSubmitted", "id": "8080170125", "eventFilter": null}, {"category": "other", "name": "SignupEnterprise", "eventType": "custom", "viewId": null, "apiName": "SignupEnterprise", "id": "8199891080", "eventFilter": null}, {"category": "other", "name": "Boards.CreateBoard", "eventType": "custom", "viewId": null, "apiName": "Boards.CreateBoard", "id": "8231829251", "eventFilter": null}, {"category": "other", "name": "[FE] SignupSelfServe", "eventType": "custom", "viewId": null, "apiName": "SignupSelfServe", "id": "8233524165", "eventFilter": null}, {"category": "other", "name": "ProjectsTab.CreateFromSample", "eventType": "custom", "viewId": null, "apiName": "ProjectsTab.CreateFromSample", "id": "8234705281", "eventFilter": null}, {"category": "other", "name": "Prototype.Create", "eventType": "custom", "viewId": null, "apiName": "Prototype.Create", "id": "8237146073", "eventFilter": null}, {"category": "other", "name": "Clicked Enterprise Hero", "eventType": "click", "viewId": "7382791050", "apiName": "clicked_enterprise_hero", "id": "8248014481", "eventFilter": {"filterType": "target_selector", "selector": ".ent-btn"}}, {"category": "other", "name": "New User", "eventType": "custom", "viewId": null, "apiName": "new_user", "id": "8248638263", "eventFilter": null}, {"category": "other", "name": "Upgrade.EntQuestionClosed", "eventType": "custom", "viewId": null, "apiName": "Upgrade.EntQuestionClosed", "id": "8257494298", "eventFilter": null}, {"category": "other", "name": "Upgrade.EntQuestionSubmitted", "eventType": "custom", "viewId": null, "apiName": "Upgrade.EntQuestionSubmitted", "id": "8258176240", "eventFilter": null}, {"category": "other", "name": "Click Continue", "eventType": "click", "viewId": "8221074974", "apiName": "click_continue_1", "id": "8261081987", "eventFilter": {"filterType": "target_selector", "selector": "#continueBtn"}}, {"category": "other", "name": "Upgrade.EntQuestionModalView", "eventType": "custom", "viewId": null, "apiName": "Upgrade.EntQuestionModalView", "id": "8263370797", "eventFilter": null}, {"category": "other", "name": "Console.CommentsModeView", "eventType": "custom", "viewId": null, "apiName": "Console.CommentsModeView", "id": "8263862019", "eventFilter": null}, {"category": "other", "name": "Upgrade.View", "eventType": "custom", "viewId": null, "apiName": "Upgrade.View", "id": "8263973359", "eventFilter": null}, {"category": "other", "name": "Boards.ShareBoard", "eventType": "custom", "viewId": null, "apiName": "Boards.ShareBoard", "id": "8264624428", "eventFilter": null}, {"category": "other", "name": "Prototype.Share", "eventType": "custom", "viewId": null, "apiName": "Prototype.Share", "id": "8268362660", "eventFilter": null}, {"category": "other", "name": "Console.BuildModeView", "eventType": "custom", "viewId": null, "apiName": "Console.BuildModeView", "id": "8269186008", "eventFilter": null}, {"category": "other", "name": "Clicked share button", "eventType": "custom", "viewId": null, "apiName": "Clicked share button", "id": "8270184451", "eventFilter": null}, {"category": "other", "name": "Click Skip", "eventType": "click", "viewId": "8247883337", "apiName": "click_skip", "id": "8270319399", "eventFilter": {"filterType": "target_selector", "selector": ".fe_nomalText.skip"}}, {"category": "other", "name": "Screen.UploadedFrontend", "eventType": "custom", "viewId": null, "apiName": "Screen.UploadedFrontend", "id": "8272565467", "eventFilter": null}, {"category": "other", "name": "Collaborator added", "eventType": "custom", "viewId": null, "apiName": "Collaborator added", "id": "8272583658", "eventFilter": null}, {"category": "other", "name": "Click to Enterprise Form Step 2", "eventType": "click", "viewId": "8243064916", "apiName": "click_to_enterprise_form_step_2", "id": "8290064740", "eventFilter": {"filterType": "target_selector", "selector": ".blue"}}, {"category": "other", "name": "Click Enterprise CTA", "eventType": "click", "viewId": "8243064916", "apiName": "click_enterprise_cta", "id": "8292817926", "eventFilter": {"filterType": "target_selector", "selector": ".enterprise .button"}}, {"category": "other", "name": "Upgrade.ChooseProfessionalAnnual", "eventType": "custom", "viewId": null, "apiName": "Upgrade.ChooseProfessionalAnnual", "id": "8298981206", "eventFilter": null}, {"category": "other", "name": "Upgrade.ChooseStarterAnnual", "eventType": "custom", "viewId": null, "apiName": "Upgrade.ChooseStarterAnnual", "id": "8301391135", "eventFilter": null}, {"category": "other", "name": "Click Signup Form CTA", "eventType": "click", "viewId": "8297278910", "apiName": "click_signup_form_cta", "id": "8302257829", "eventFilter": {"filterType": "target_selector", "selector": "button"}}, {"category": "other", "name": "Upgrade.ChooseTeamAnnual", "eventType": "custom", "viewId": null, "apiName": "Upgrade.ChooseTeamAnnual", "id": "8302257860", "eventFilter": null}, {"category": "other", "name": "Two Step Signup - Click Phone Number", "eventType": "click", "viewId": "8298465112", "apiName": "two_step_signup__click_phone_number_1", "id": "8312305029", "eventFilter": {"filterType": "target_selector", "selector": "#phone"}}, {"category": "other", "name": "Signup.DesignTeamQuestionSubmitted", "eventType": "custom", "viewId": null, "apiName": "Signup.DesignTeamQuestionSubmitted", "id": "8313922082", "eventFilter": null}, {"category": "other", "name": "Signup.EntQuestionSubmitted", "eventType": "custom", "viewId": null, "apiName": "Signup.EntQuestionSubmitted", "id": "8316426699", "eventFilter": null}, {"category": "other", "name": "Two Step Signup - Click Enterprise Question", "eventType": "click", "viewId": "8298465112", "apiName": "two_step_signup__click_enterprise_question", "id": "8316426753", "eventFilter": {"filterType": "target_selector", "selector": "#enterprise"}}, {"category": "other", "name": "Signup.PhoneNumberReceived", "eventType": "custom", "viewId": null, "apiName": "Signup.PhoneNumberReceived", "id": "8317530525", "eventFilter": null}, {"category": "other", "name": "Clicks on Optimizely Button Event", "eventType": "click", "viewId": "7382791050", "apiName": "clicks_on_optimizely_button_event", "id": "8318740179", "eventFilter": {"filterType": "target_selector", "selector": ".hero-button > .trial-trigger"}}, {"category": "other", "name": "Two Step Signup - Click Design Team Size", "eventType": "click", "viewId": "8298465112", "apiName": "two_step_signup__click_design_team_size", "id": "8320202568", "eventFilter": {"filterType": "target_selector", "selector": "#team_size"}}, {"category": "other", "name": "sign_up_success _ DO NOT USE", "eventType": "custom", "viewId": null, "apiName": "sign_up_success", "id": "8321050046", "eventFilter": null}, {"category": "other", "name": "Signup.EntTargetRegion", "eventType": "custom", "viewId": null, "apiName": "Signup.EntTargetRegion", "id": "8323044593", "eventFilter": null}, {"category": "other", "name": "Signup.ClearbitEnriched", "eventType": "custom", "viewId": null, "apiName": "Signup.ClearbitEnriched", "id": "8323421161", "eventFilter": null}, {"category": "other", "name": "Click Enterprise Trial Form", "eventType": "click", "viewId": "8329871946", "apiName": "7610134_click_enterprise_trial_form", "id": "8327236044", "eventFilter": {"filterType": "target_selector", "selector": "form"}}, {"category": "other", "name": "enterpriseSignup", "eventType": "custom", "viewId": null, "apiName": "enterpriseSignup", "id": "8327899666", "eventFilter": null}, {"category": "other", "name": "Click Enterprise Form Continue Button", "eventType": "click", "viewId": "8329871946", "apiName": "7610134_click_enterprise_form_continue_button", "id": "8338180806", "eventFilter": {"filterType": "target_selector", "selector": "#continueBtn"}}, {"category": "convert", "name": "Comment.Added", "eventType": "custom", "viewId": null, "apiName": "Comment.Added", "id": "8350900771", "eventFilter": null}, {"category": "other", "name": "Comment.AccountCreationFailure", "eventType": "custom", "viewId": null, "apiName": "Comment.AccountCreationFailure", "id": "8352822924", "eventFilter": null}, {"category": "other", "name": "Comment.Adding", "eventType": "custom", "viewId": null, "apiName": "Comment.Adding", "id": "8354220591", "eventFilter": null}, {"category": "other", "name": "Comment.AccountCreated", "eventType": "custom", "viewId": null, "apiName": "Comment.AccountCreated", "id": "8359371483", "eventFilter": null}, {"category": "other", "name": "[fe] Total clicks on any CTA", "eventType": "click", "viewId": "8401991982", "apiName": "7610134_fe_total_clicks_on_any_cta", "id": "8402403059", "eventFilter": {"filterType": "target_selector", "selector": "#unique-sticky .cta , #unique-modal .cta"}}, {"category": "other", "name": "  [fe] Clicks on the close button promotion 4", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_clicks_on_the_close_button_promotion_4", "id": "8403041915", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model3  .close"}}, {"category": "other", "name": "Subscribe submits", "eventType": "custom", "viewId": null, "apiName": "Subscribed", "id": "8404315661", "eventFilter": null}, {"category": "other", "name": " [fe] CTA for promotion 2", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__cta_for_promotion_2", "id": "8404343049", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model1  .cta"}}, {"category": "other", "name": "[fe] CTA for promotion 1", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__cta_for_promotion_1", "id": "8405830849", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model0  .cta"}}, {"category": "other", "name": "Clicks on the invision navigation elements", "eventType": "click", "viewId": "8407455114", "apiName": "7610134_clicks_on_the_invision_navigation_elements", "id": "8406198893", "eventFilter": {"filterType": "target_selector", "selector": ".fe_site_nav a:not(.standard-trigger)"}}, {"category": "other", "name": "  [fe] Clicks on the close button promotion 2", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_clicks_on_the_close_button_promotion_2", "id": "8407431948", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model1  .close"}}, {"category": "other", "name": " [fe] CTA for promotion 3", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_cta_for_promotion_3", "id": "8408283720", "eventFilter": {"filterType": "target_selector", "selector": " .promotion_model2  .cta"}}, {"category": "other", "name": "Engagement", "eventType": "custom", "viewId": null, "apiName": "engagement", "id": "8409116969", "eventFilter": null}, {"category": "other", "name": "[FE] Clicks on the blog navigation elements", "eventType": "click", "viewId": "8407455114", "apiName": "7610134_clicks_on_the_blog_navigation_elements", "id": "8409657645", "eventFilter": {"filterType": "target_selector", "selector": ".fe_new_nav a:not(.fe_subscribe_cta), .topnav-layout-c a, .topnav-layout-b a"}}, {"category": "other", "name": "  [fe] Clicks on the close button promotion 3", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_clicks_on_the_close_button_promotion_3", "id": "8410552813", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model2  .close"}}, {"category": "other", "name": " [fe] Clicks on the close button promotion 1", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_clicks_on_the_close_button_promotion_1", "id": "8410582035", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model0  .close"}}, {"category": "other", "name": "[FE] Clicks on non-featured articles on the blog homepage", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_fe_clicks_on_nonfeatured_articles_on_the_homepage", "id": "8411071530", "eventFilter": {"filterType": "target_selector", "selector": ".column-articles .inv-scroll-item a:not(.category-link)"}}, {"category": "other", "name": " [fe] CTA for promotion 4", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_cta_for_promotion_4", "id": "8411172912", "eventFilter": {"filterType": "target_selector", "selector": " .promotion_model3  .cta"}}, {"category": "other", "name": "[fe] Modal Shown 5", "eventType": "custom", "viewId": null, "apiName": "ModalShown4", "id": "8411916473", "eventFilter": null}, {"category": "other", "name": "[fe] Modal Shown 2", "eventType": "custom", "viewId": null, "apiName": "ModalShown1", "id": "8411986122", "eventFilter": null}, {"category": "other", "name": " [fe] CTA for promotion 5", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_cta_for_promotion_5", "id": "8412986603", "eventFilter": {"filterType": "target_selector", "selector": " .promotion_model4  .cta"}}, {"category": "other", "name": "[fe] Clicks on the close button promotion 5", "eventType": "click", "viewId": "8401991982", "apiName": "7610134__fe_clicks_on_the_close_button_promotion_5", "id": "8417506688", "eventFilter": {"filterType": "target_selector", "selector": ".promotion_model4  .close"}}, {"category": "other", "name": "[FE] Clicks on features articles on the blog homepage", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_fe_clicks_on_features_articles_on_the_homepage", "id": "8418653347", "eventFilter": {"filterType": "target_selector", "selector": ".hero .content a,.fe_article_content .fe_page_link"}}, {"category": "other", "name": "[fe] Modal Shown 4", "eventType": "custom", "viewId": null, "apiName": "ModalShown3", "id": "8419831816", "eventFilter": null}, {"category": "other", "name": "[fe] Modal Shown 3", "eventType": "custom", "viewId": null, "apiName": "ModalShown2", "id": "8420861307", "eventFilter": null}, {"category": "other", "name": "Subscribe Clicks", "eventType": "click", "viewId": "8407455114", "apiName": "7610134_subscribe_clicks", "id": "8421208952", "eventFilter": {"filterType": "target_selector", "selector": ".fe_subscribe_cta"}}, {"category": "other", "name": "Comment.ToggleCommentModeOn", "eventType": "custom", "viewId": null, "apiName": "Comment.ToggleCommentModeOn", "id": "8421526932", "eventFilter": null}, {"category": "other", "name": "[fe] Model Days Reset", "eventType": "custom", "viewId": null, "apiName": "DaysReset", "id": "8423164906", "eventFilter": null}, {"category": "other", "name": "[FE]  Signup Submitted", "eventType": "custom", "viewId": null, "apiName": "Signup.Submitted", "id": "8424621022", "eventFilter": null}, {"category": "other", "name": "[fe] Modal Shown 1", "eventType": "custom", "viewId": null, "apiName": "ModalShown0", "id": "8427260630", "eventFilter": null}, {"category": "other", "name": "Comment.SignupFormView", "eventType": "custom", "viewId": null, "apiName": "Comment.SignupFormView", "id": "8440404394", "eventFilter": null}, {"category": "other", "name": "Clicks on ENT link from Signup", "eventType": "click", "viewId": "8297278910", "apiName": "7610134_clicks_on_ent_link_from_signup", "id": "8444870250", "eventFilter": {"filterType": "target_selector", "selector": ".try-invision > a"}}, {"category": "other", "name": "Clicks on Blog logo in Blog Nav", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_clicks_on_blog_logo_in_blog_nav", "id": "8459567920", "eventFilter": {"filterType": "target_selector", "selector": ".fe_new_nav span"}}, {"category": "other", "name": "Clicks on Left, Featured Banner", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_clicks_on_left_featured_banner", "id": "8459919217", "eventFilter": {"filterType": "target_selector", "selector": ".fe_banner_left .fe_banner_img > .fe_page_link"}}, {"category": "other", "name": "Subscribes", "eventType": "custom", "viewId": null, "apiName": "Subscribes", "id": "8462483605", "eventFilter": null}, {"category": "other", "name": "Clicks on Left Featured Blog Banner", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_clicks_on_left_featured_blog_banner", "id": "8463218260", "eventFilter": {"filterType": "target_selector", "selector": ".fe_banner_left"}}, {"category": "other", "name": "Clicks on InVision logo in Blog Nav", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_clicks_on_invision_logo_in_blog_nav", "id": "8466268249", "eventFilter": {"filterType": "target_selector", "selector": ".fe_new_nav .logo-hover"}}, {"category": "other", "name": "Click Event for .hero > .cta", "eventType": "click", "viewId": "8504601668", "apiName": "7610134_click_event_for_hero__cta", "id": "8502901125", "eventFilter": {"filterType": "target_selector", "selector": ".hero > .cta"}}, {"category": "other", "name": "[FE] Clicks on any article on the blog homepage", "eventType": "click", "viewId": "8418653342", "apiName": "7610134_fe_clicks_on_any_article_on_the_blog_homepage", "id": "8507082188", "eventFilter": {"filterType": "target_selector", "selector": ".hero .content a,.fe_article_content .fe_page_link,.column-articles .inv-scroll-item a:not(.category-link)"}}, {"category": "other", "name": "Download button clicked", "eventType": "custom", "viewId": null, "apiName": "muzli.download", "id": "8507500579", "eventFilter": null}, {"category": "other", "name": "TOTAL Clicks on the articles in the \"read this next\" section", "eventType": "click", "viewId": "8544893683", "apiName": "7610134_total_clicks_on_the_articles_in_the_read_this_next_section", "id": "8541713776", "eventFilter": {"filterType": "target_selector", "selector": ".fe_article_content"}}, {"category": "other", "name": "TOTAL Clicks on the category link in the \"read this next\"", "eventType": "click", "viewId": "8544893683", "apiName": "7610134_total_clicks_on_the_category_link_in_the_read_this_next", "id": "8550443554", "eventFilter": {"filterType": "target_selector", "selector": ".more_on_inspration"}}, {"category": "other", "name": "TOTAL clicks into the search bar", "eventType": "click", "viewId": "8546803151", "apiName": "7610134_total_clicks_into_the_search_bar", "id": "8568250345", "eventFilter": {"filterType": "target_selector", "selector": ".topnav-layout-c .search"}}, {"category": "other", "name": "Freehand Click Save Draft Button", "eventType": "custom", "viewId": null, "apiName": "Freehand.SaveDraftButtonClick", "id": "8577721374", "eventFilter": null}, {"category": "other", "name": "TOTAL clicks/Enter into the search bar", "eventType": "custom", "viewId": null, "apiName": "TOclicks_search_button", "id": "8583220267", "eventFilter": null}, {"category": "other", "name": "Clicks on search result articles", "eventType": "click", "viewId": "8563871919", "apiName": "7610134_clicks_on_search_result_articles", "id": "8588130042", "eventFilter": {"filterType": "target_selector", "selector": ".search-results article"}}, {"category": "other", "name": "IBM - watch now", "eventType": "click", "viewId": "7382791050", "apiName": "7610134_ibm__watch_now", "id": "8602472798", "eventFilter": {"filterType": "target_selector", "selector": ".trial-trigger"}}, {"category": "other", "name": "[FE] Blog Article Page - Subscribe Form Viewed", "eventType": "custom", "viewId": null, "apiName": "fe-blog-article-page-subscribe-Form-viewed", "id": "8605742109", "eventFilter": null}, {"category": "other", "name": "[FE] Blog Article Page - Additional Content Viewed", "eventType": "custom", "viewId": null, "apiName": "fe-blog-article-page-additional-content-viewed", "id": "8609313929", "eventFilter": null}], "revision": "5269"},h=n(91);if(l.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.shouldLoadInnie())f.registerFunction("getProjectId",(function(){return p.projectId})),d.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var g;g=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],g.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(138).setupPreviewGlobal(),n(138).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(f.registerFunction("getProjectId",(function(){return p.projectId})),d.addScriptSync("https://optimizely.s3.amazonaws.com/js/preview2/7610134.js"))}else if(s.shouldBootstrapDataForPreview()){f.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:f.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),d.addScriptSync(c),n(138).setupPreviewGlobal(),d.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(f.registerFunction("initializeOptimizelyPreview",e),d.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(137).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(e){return d.isEmpty(e)?p.resolve():g.request({url:N,method:"POST",data:e})["catch"]((function(e){_.error("Failed to collect rum data :",e)}))}function r(){var e=E.getCurrentScript();if(e)return e.src}function a(){var e={id:D.getRumId(),v:x,account:A.getAccountId(),project:A.getSnippetId()||A.getProjectId(),snippet:A.getSnippetId(),revision:A.getRevision(),clientVersion:"0.68.0",hasSlave:!1,wxhr:!0},t=w.getBucketingId();t&&(e["user"]=t);try{e["numBehaviorEvents"]=v.getEvents().length}catch(e){_.debug("Unable to get behavior events for RUM:",e)}d.extend(e,o(),c()),m.dispatch(S.SET_RUM_DATA,{data:e})}function o(){var e=y.getGlobal("performance");if(e){var t,n=D.getScriptSrc();try{if(n){_.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;_.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=d.find(a,(function(e){return r.test(e.name)}))}if(t)return d.mapValues(T.ResourceTimingAttributes,(function(e,n){return Math.round(t[n]||0)}))}catch(e){return}}}function s(){try{return!E.querySelector("body")}catch(e){return null}}function u(){try{y.getGlobal("requestAnimationFrame")((function(){var e=D.getRumData().timebase;m.dispatch(S.SET_RUM_DATA,{data:{render:h.now()-(e||0)}})}))}catch(e){return}}function c(){return R.getDurationsFor(d.values(T.RUMPerformanceTimingAttributes))}function l(){var e={numKeys:I.allKeys().length,sizeKeys:I.allKeys().toString().length,sizeValues:I.allValues().toString().length},t=y.getGlobal("performance"),n=t?t.timing:{},r=R.getMarks()||{},a={id:D.getRumId(),v:x,project:A.getSnippetId()||A.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:r};i(a)}var d=n(2),f=n(5),p=n(6).Promise,h=n(10),g=n(11),v=n(67),m=n(14),_=n(17),y=n(66),E=n(65),I=n(71).LocalStorage,T=n(18),S=n(12),b=n(20),A=b.get("stores/global"),w=b.get("stores/visitor_id"),D=b.get("stores/rum"),R=b.get("stores/performance"),N="https://rum.optimizely.com/rum",O=3e3,x="1.0",C=.003;t.initialize=function(){var e=f.generate().replace(/-/g,""),t=Math.random()<C;if(t)return m.dispatch(S.SET_RUM_DATA,{id:e,RumHost:N,inRumSample:t,src:r(),data:{id:e,sync:s(),timebase:h.now(),sampleRate:C}}),u(),y.addEventListener("load",l),new p(function(e,t){setTimeout((function(){a();var n=D.getRumData();n=d.pickBy(n,(function(e){return!d.isUndefined(e)})),i(n).then(e,t)}),O)}).catch((function(e){_.warn("RUM / Error sending data:",e)}))}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===bn?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return E(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function h(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function g(e){return function(t){return e(t)}}function v(e,t){return ye(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===bn,r=e===e,a=null===t,o=t===bn,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function y(e){return hi[e]}function E(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function T(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Pn:t,e>-1&&e%1==0&&e<t}function S(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(Ht(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.t=[],this.i=!!t}function R(){}function N(e,t){return x(e,t)&&delete e[t]}function O(e,t){if(Xi){var n=e[t];return n===Rn?bn:n}return Di.call(e,t)?e[t]:bn}function x(e,t){return Xi?e[t]!==bn:Di.call(e,t)}function C(e,t,n){e[t]=Xi&&n===bn?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function P(){this.a={hash:new R,map:qi?new qi:[],string:new R}}function k(e){var t=this.a;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):qi?t.map["delete"](e):W(t.map,e)}function F(e){var t=this.a;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):qi?t.map.get(e):X(t.map,e)}function V(e){var t=this.a;return Ze(e)?x("string"==typeof e?t.string:t.hash,e):qi?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.a;return Ze(e)?C("string"==typeof e?n.string:n.hash,e,t):qi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.a=new L;++t<n;)this.push(e[t])}function B(e,t){var n=e.a;if(Ze(t)){var i=n.a,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function j(e){var t=this.a;if(Ze(e)){var n=t.a,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function G(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function H(){this.a={array:[],map:null}}function z(e){var t=this.a,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.a,n=t.array;return n?X(n,e):t.map.get(e)}function q(e){var t=this.a,n=t.array;return n?$(n,e):t.map.has(e)}function K(e,t){var n=this.a,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():Gi.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?bn:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Ot(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===bn||Ot(e,Ai[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===bn||Ot(e[t],n))&&("number"!=typeof t||n!==bn||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Ot(i,n)&&(n!==bn||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==bn)return s;if(!Gt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Bn||c==jn;if(fr(e))return Oe(e,t);if(c==zn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new G);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return Gt(e)?Bi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(bn,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=ye(t,g(n))),i?(a=s,u=!1):t.length>=wn&&(a=B,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var h=d;h--;)if(t[h]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Pt(o)&&(n||dr(o)||Ct(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Bt(e[t])}))}function he(e,t,n,i,r){return e===t||(null==e||null==t||!Gt(e)&&!Ht(t)?e!==e&&t!==t:ge(e,t,he,n,i,r))}function ge(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=Oi.call(e),u=u==kn?zn:u),s||(c=Oi.call(t),c=c==kn?zn:c);var l=u==zn&&!I(e),d=c==zn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var h=o||Qt(e)?ze(e,t,n,i,r,a):Ye(e,t,u,n,i,r,a);return a.pop(),h}if(!(r&Cn)){var g=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(g||v){var h=n(g?e.value():e,v?t.value():t,i,r,a);return a.pop(),h}}if(!f)return!1;var h=qe(e,t,n,i,r,a);return a.pop(),h}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?Ee:Ae)(e)}function me(e){return zi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function ye(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function Ee(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&he(e[r],n[r],bn,xn|Cn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?bn:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),Gt(o))r||(r=new G),Te(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):bn;u===bn&&(u=o),ee(e,s,u)}}))}}function Te(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):bn,d=l===bn;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Pt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||Ct(u)?Ct(s)?l=tn(s):!Gt(s)||i&&Bt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Se(e,t){return e=Object(e),Et(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function be(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function Ae(e){return function(t){return null==t?bn:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return Et(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Oe(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function xe(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function Ce(e){return Et(b(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Pe(e){return Et(A(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?xe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ve(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:bn;for(a="function"==typeof a?(r--,a):bn,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Be(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function je(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function Ge(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return Gt(i)?i:n}}function He(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Si&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=Ge(e);return r}function ze(e,t,n,i,r,a){var o=-1,s=r&Cn,u=r&xn,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],h=t[o];if(f!==bn){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==h&&!n(p,h,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case Vn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case Hn:return e!=+e?t!=+t:e==+t;case Yn:case Kn:return e==t+""}return!1}function qe(e,t,n,i,r,a){var o=r&Cn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,h=o;++d<u;){f=s[d];var g,v=e[f],m=t[f];if(!(g===bn?v===m||n(v,m,i,r,a):g)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var _=e.constructor,y=t.constructor;_!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof y&&y instanceof y)&&(p=!1)}return p}function Ke(e,t){var n=e[t];return Yt(n)?n:bn}function We(e){return Oi.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return xe(e);case Vn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case Gn:return Ce(e);case Hn:case Kn:return new i(e);case Yn:return Le(e);case qn:return Pe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:bn;return jt(t)&&(dr(e)||$t(e)||Ct(e))?h(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Ai;return e===n}function tt(e){var t=new D(e.e,e.i);return t.t=De(e.t),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:bn}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:bn}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===bn?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.i=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.e,this.t)}function ht(e,t,n){return t=n?bn:t,ue(e,ve(t))}function gt(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function yt(e,t){return ye(e,ve(t))}function Et(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function Tt(e,t,n){return t=n?bn:t,Re(e,ve(t))}function St(e,t){var n=0;return t=ve(t),ye(ye(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),Ae("value"))}function bt(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=bn),n}}function At(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return bt(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Yi(t===bn?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return Gt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function Ot(e,t){return e===t||e!==e&&t!==t}function xt(e,t){return e>t}function Ct(e){return Pt(e)&&Di.call(e,"callee")&&(!ji.call(e,"callee")||Oi.call(e)==kn)}function Lt(e){return null!=e&&jt(rr(e))&&!Bt(e)}function Pt(e){return Ht(e)&&Lt(e)}function kt(e){return e===!0||e===!1||Ht(e)&&Oi.call(e)==Vn}function Ft(e){return Ht(e)&&Oi.call(e)==Mn}function Vt(e){if(Lt(e)&&(dr(e)||$t(e)||Bt(e.splice)||Ct(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return he(e,t)}function Ut(e){return"number"==typeof e&&Hi(e)}function Bt(e){var t=Gt(e)?Oi.call(e):"";return t==Bn||t==jn}function jt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pn}function Gt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ht(e){return!!e&&"object"==typeof e}function zt(e){return Kt(e)&&e!=+e}function Yt(e){return null!=e&&(Bt(e)?Ci.test(wi.call(e)):Ht(e)&&(I(e)?Ci:li).test(e))}function qt(e){return null===e}function Kt(e){return"number"==typeof e||Ht(e)&&Oi.call(e)==Hn}function Wt(e){if(!Ht(e)||Oi.call(e)!=zn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function Xt(e){return Gt(e)&&Oi.call(e)==Yn}function $t(e){return"string"==typeof e||!dr(e)&&Ht(e)&&Oi.call(e)==Kn}function Qt(e){return Ht(e)&&jt(e.length)&&!!fi[Oi.call(e)]}function Jt(e){return e===bn}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?gr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||T(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||T(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),be(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:be(e,ve(t))}function fn(e,t,n){var i=null==e?bn:e[t];return i===bn&&(i=n),Bt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function hn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,y):e}function gn(e){return function(){return e}}function vn(e){return e}function mn(e){return Ee(gr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||Gt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(Gt(n)&&"chain"in n)||n.chain,o=Bt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.i;if(a||t){var n=e(this.e),r=n.t=De(this.t);return r.push({func:i,args:arguments,thisArg:e}),n.i=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function yn(){return Si._===this&&(Si._=xi),this}function En(){}function In(e){var t=++Ri;return nn(e)+t}function Tn(e){return e&&e.length?c(e,vn,xt):bn}function Sn(e){return e&&e.length?c(e,vn,Zt):bn}var bn,An="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,On=32,xn=1,Cn=2,Ln=1/0,Pn=9007199254740991,kn="[object Arguments]",Fn="[object Array]",Vn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Bn="[object Function]",jn="[object GeneratorFunction]",Gn="[object Map]",Hn="[object Number]",zn="[object Object]",Yn="[object RegExp]",qn="[object Set]",Kn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[$n]=fi[Vn]=fi[Mn]=fi[Un]=fi[Bn]=fi[Gn]=fi[Hn]=fi[zn]=fi[Yn]=fi[qn]=fi[Kn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Fn]=pi[$n]=pi[Vn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[Gn]=pi[Hn]=pi[zn]=pi[Yn]=pi[qn]=pi[Kn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Bn]=pi[Xn]=!1;var hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},gi={"function":!0,object:!0},vi=gi[typeof t]&&t&&!t.nodeType?t:bn,mi=gi[typeof e]&&e&&!e.nodeType?e:bn,_i=mi&&mi.exports===vi?vi:bn,yi=m(vi&&mi&&"object"==typeof n&&n),Ei=m(gi[typeof self]&&self),Ii=m(gi[typeof window]&&window),Ti=m(gi[typeof this]&&this),Si=yi||Ii!==(Ti&&Ti.window)&&Ii||Ei||Ti||Function("return this")(),bi=Array.prototype,Ai=Object.prototype,wi=Function.prototype.toString,Di=Ai.hasOwnProperty,Ri=0,Ni=wi.call(Object),Oi=Ai.toString,xi=Si._,Ci=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=_i?Si.Buffer:bn,Pi=Si.Reflect,ki=Si.Symbol,Fi=Si.Uint8Array,Vi=Pi?Pi.enumerate:bn,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Bi=Object.create,ji=Ai.propertyIsEnumerable,Gi=bi.splice,Hi=Si.isFinite,zi=Object.keys,Yi=Math.max,qi=Ke(Si,"Map"),Ki=Ke(Si,"Set"),Wi=Ke(Si,"WeakMap"),Xi=Ke(Object,"create"),$i=qi?wi.call(qi):"",Qi=Ki?wi.call(Ki):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:bn,er=Zi?Zi.valueOf:bn,tr=Be(fe),nr=je();Vi&&!ji.call({valueOf:1},"valueOf")&&(_e=function(e){return S(Vi(e))});var ir=Ve,rr=Ae("length"),ar=Ui||function(){return[]};(qi&&We(new qi)!=Gn||Ki&&We(new Ki)!=qn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Oi.call(e),n=t==zn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return Gn;case Qi:return qn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return He(e,Nn|On,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,hr(t)||0,n)})),lr=Dt((function(e,t){return He(e,On,bn,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:gn(!1),pr=Number,hr=Number,gr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Ve(t,un(t),e,i)})),_r=Dt((function(e){return e.push(bn,Z),mr.apply(bn,e)})),yr=Ue((function(e,t,n){Ie(e,t,n)})),Er=Dt((function(e,t){return null==e?{}:(t=ye(le(t,1),String),Se(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Se(e,le(t,1))})),Tr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):Ai,L.prototype.clear=P,L.prototype["delete"]=k,L.prototype.get=F,L.prototype.has=V,L.prototype.set=M,U.prototype.push=j,G.prototype.clear=H,G.prototype["delete"]=z,G.prototype.get=Y,G.prototype.has=q,G.prototype.set=K,w.assign=gr,w.assignIn=vr,w.before=bt,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=gt,w.flatten=rt,w.flattenDeep=at,w.iteratee=Tr,w.keys=sn,w.map=yt,w.mapValues=cn,w.matches=mn,w.merge=yr,w.mixin=_n,w.negate=At,w.omit=Er,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=St,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=hn,w.every=ht,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=Ct,w.isArray=dr,w.isBoolean=kt,w.isDate=Ft,w.isEmpty=Vt,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Bt,w.isNaN=zt,w.isNull=qt,w.isNumber=Kt,w.isObject=Gt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Tn,w.min=Sn,w.noConflict=yn,w.noop=En,w.reduce=Et,w.result=fn,w.size=It,w.some=Tt,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=An,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:bi)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.i?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||Ei||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){e.exports=n(7)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<K;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}K=0}function p(){try{var e=n(9);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function h(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return C(a,r,e,i._result)}))})():R(i,r,e,t),r}function g(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return b(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function y(e){try{return e.then}catch(e){return ue.error=e,ue}}function E(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=E(n,t,(function(n){i||(i=!0,t!==n?b(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function T(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return b(e,t)}),(function(t){return D(e,t)}))}function S(e,t,n){t.constructor===e.constructor&&n===h&&t.constructor.resolve===g?T(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function b(t,n){t===n?D(t,m()):e(n)?S(t,n,y(n)):w(t,n)}function A(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(A,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?C(n,i,r,a):r(a);e._subscribers.length=0}}function O(){this.error=null}function x(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function C(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=x(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?b(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){b(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function P(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),q(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(q(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,n=new t(v);return D(n,e),n}function j(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this[re]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&j(),this instanceof H?L(this,e):G())}function z(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=H}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var q=Y,K=0,W=void 0,X=void 0,$=function(e,t){ne[K]=e,ne[K+1]=t,K+=2,2===K&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new O,ce=new O,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===g){var r=y(e);if(r===h&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===H){var a=new n(v);S(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},H.all=M,H.race=U,H.resolve=g,H.reject=B,H._setScheduler=a,H._setAsap=o,H._asap=$,H.prototype={constructor:H,then:h,"catch":function(e){return this.then(null,e)}},H.polyfill=z,H.Promise=H,H}))}).call(t,n(8),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){g&&p&&(g=!1,p.length?h=p.concat(h):v=-1,h.length&&s())}function s(){if(!g){var e=r(o);g=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,g=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,h=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||g||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(2),r=n(12),a=n(14),o=n(6).Promise,s=n(17),u=n(10),c=n(64),l=n(19),d=3;t.isCORSSupported=function(){var e=c.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new o(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=c.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=l.stringify(e.data)),o.open(e.method,e.url,e.async),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,c,l){if(!n)return o.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return o.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(c)&&(c=0);var f={id:n,timeStamp:u.now(),data:e,retryCount:c};return a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Sending event ",n),t.request(e).then((function(e){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),s.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-c," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(13);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,RECORD_LAYER_DECISION_TICKET:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(15);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.u={},this.l={},this.d=0,this.f=[],this.h=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(16),o=n(2);i.prototype.registerStores=function(e){o.forOwn(e,function(e,t){this.u[t]=new a(t,this,e)}.bind(this))},i.prototype.getStore=function(e){return this.u[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,o.each(this.f,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.u,(function(n){n.g(e,t)})),o.each(this.h,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.u,function(e,t){e.hasChanges()&&this.l[t]&&(e.resetChange(),o.each(this.l[t],(function(t){t(e)})))}.bind(this))},i.prototype.reset=function(){this.l={},o.forOwn(this.u,(function(e,t){e.I()}))},i.prototype.getState=function(){var e={};return o.forOwn(this.u,(function(t,n){e[n]=t.T()})),e},i.prototype.onPreAction=function(e){var t=this.f;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.h;return t.push(e),r(t,e)},i.prototype.S=function(e,t){this.l[e]||(this.l[e]=[]),this.l[e].push(t);var n=this.l[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.b=e,this.A=t,this.w=0,this.D=!1,this.R={},r.extend(this,n),this.N={},this.initialize&&this.initialize()}var r=n(2);i.prototype.g=function(e,t){var n=this.R[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.T=function(){return r.cloneDeep(this.N)},i.prototype.on=function(e,t){this.R[e]=t.bind(this)},i.prototype.observe=function(e){return this.A.S(this.b,e)},i.prototype.emitChange=function(){this.D=!0,this.w++},i.prototype.hasChanges=function(){return this.D},i.prototype.resetChange=function(){this.D=!1},i.prototype.getStateId=function(){return this.w},i.prototype.I=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(18),o=n(10),s=n(14),u=n(12),c=n(19);i.prototype.O=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.x(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.O()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};s.dispatch(u.LOG,n)},i.prototype.flush=function(){var e=n(20),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,function(e){this.C(e.logLevel,e.logMessage,!0)}.bind(this))},i.prototype.C=function(e,t,n){var i,o=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:i=console.error;break;case a.LogLevel.WARN:i=console.warn;break;case a.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.O()&&!this.shouldLog(o)||(r.isArray(t)&&r.isString(t[0])&&(t=this.L(t)),this.storeLog(e,t)),i&&this.shouldLog(o)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.C(a.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.C(a.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.L([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(a.LogLevel.INFO,e)},i.prototype.warn=function(){this.C(a.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.C(a.LogLevel.ERROR,[this.P(),e]),this.C(a.LogLevel.INFO,[e.stack])):this.C(a.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.C("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.C("GROUPEND",[].slice.call(arguments))},i.prototype.L=function(e){var t=this.P().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.P=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.x=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(a.LogLevel[e]))?a.LogLevel[e]:null},e.exports=new i}),(function(e,t,n){var i=n(13);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes=i({immediate:null,manual:null,callback:null,polling:null}),t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(function(){return JSON.stringify.apply(null,this)}.bind(arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(2),r=n(14),a=n(21),o=a.create(),s={action_data:n(22),async_request:n(24),audience_data:n(25),change_data:n(26),cleanup:n(27),cookie_options:n(28),event_data:n(29),event_emitter:n(30),dimension_data:n(31),directive:n(32),global:n(33),global_state:n(34),integration_settings:n(35),layer:n(36),layer_data:n(37),log:n(38),observed_redirect:n(39),pending_events:n(40),performance:n(41),plugins:n(42),provider_status:n(43),pending_redirect:n(44),rum:n(45),sandbox:n(46),session:n(47),tracker_optimizely:n(48),ua_data:n(49),view:n(50),view_data:n(51),visitor:n(52),visitor_attribute_entity:n(53),visitor_events:n(54),visitor_events_manager:n(60),visitor_id:n(61),xdomain:n(62)};s["group_data"]=n(63),r.registerStores(s),i.forOwn(s,(function(e,t){o.register("stores/"+t,r.getStore(t))})),e.exports=o}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,this.get.bind(this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.F),this.on(r.SET_CHANGE_APPLIER,this.V),this.on(r.REMOVE_ACTION_STATE,this.M)},F:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.N.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.N.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.N.actions[u]=n}))}))}))})),this.emitChange())},V:function(e){var t=e.actionId,n=e.changeId;this.N.actionState[t]||(this.N.actionState[t]={}),this.N.actionState[t][n]=e.changeApplier},M:function(e){delete this.N.actionState[e.actionId]},get:function(e){return a.safeReference(this.N.actions[e])},getByChangeId:function(e){return i.find(this.N.actions,{changeSet:[{id:e}]})},getChangeApplier:function(e,t){var n=this.N.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.N.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.N.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.N.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.N.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){var i=n(12);e.exports={initialize:function(){this.N={},this.on(i.REGISTER_ASYNC_DEFERRED,this.U),this.on(i.RESOLVE_DEFERRED,this.B),this.on(i.REJECT_DEFERRED,this.j)},getRequest:function(e){return this.N[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},U:function(e){this.N[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},B:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},j:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,function(e){a.deepFreeze(e),this.N[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.N))},getAudiencesMap:function(){return a.safeReference(this.N)},get:function(e){return a.safeReference(this.N[e])},getAudienceName:function(e){var t=i.find(i.values(this.N),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.ADD_CHANGE,this.G),this.on(r.DATA_LOADED,this.F)},getChange:function(e){return this.N[e]},F:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,this.G.bind(this))},G:function(e){a.deepFreeze(e),this.N[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(18);e.exports={initialize:function(){this.N={},i.each(a.Lifecycle,function(e){this.N[e]=[]}.bind(this)),this.on(r.ADD_CLEANUP_FN,this.H),this.on(r.CLEAR_CLEANUP_FN,this.z)},getCleanupFns:function(e){return i.cloneDeep(this.N[e])},H:function(e){this.N[e.lifecycle].push(e.cleanupFn),this.emitChange()},z:function(e){var t=this.N[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.N[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(12),r=31536e4;e.exports={initialize:function(){this.N={currentDomain:null,defaultAgeSeconds:r},this.on(i.SET_COOKIE_DOMAIN,this.Y),this.on(i.SET_COOKIE_AGE,this.q)},getCurrentDomain:function(){return this.N.currentDomain},getDefaultAgeInSeconds:function(){return this.N.defaultAgeSeconds},Y:function(e){this.N.currentDomain=e,this.emitChange()},q:function(e){this.N.defaultAgeSeconds=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.N))},getEventsMap:function(){return a.safeReference(this.N)},get:function(e){return a.safeReference(this.N[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.N),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.N,{pageId:e}))},F:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.N[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(12),o="|";e.exports={initialize:function(){this.N={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.K),this.on(a.REMOVE_EMITTER_HANDLER,this.W)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,function(e){var t=i(e),n=this.N.handlers[t];n&&(a=a.concat(n))}.bind(this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},K:function(e){var t=i(e.filter);this.N.handlers[t]||(this.N.handlers[t]=[]),this.N.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},W:function(e){var t=!1,n=e.token;r.forOwn(this.N.handlers,(function(e,i){r.each(e,(function(i,r){i.token===n&&(t=!0,e.splice(r,1))}))})),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,function(e){a.deepFreeze(e),this.N[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.N))},getById:function(e){return a.safeReference(this.N[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.N),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.X)},getAll:function(){return i.cloneDeep(this.N)},isDisabled:function(){return this.N.disabled},isEditor:function(){return this.N.isEditor},clientHasAlreadyInitialized:function(){return this.N.alreadyInitialized},getForceAudienceIds:function(){return this.N.forceAudienceIds},getForceVariationIds:function(){return this.N.forceVariationIds},getPreviewLayerIds:function(){return this.N.previewLayerIds},getProjectToken:function(){return this.N.projectToken},getForceTracking:function(){return this.N.forceTracking},shouldActivate:function(){return!this.N.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.N.isPreview},shouldBootstrapDataForEditor:function(){return this.N.isEditor},shouldInitialize:function(){return!(this.shouldOptOut()||this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.N.isPreview||this.N.isLegacyPreview||!this.getProjectToken()||this.N.isEditor)},shouldBailForDesktopApp:function(){return!this.N.isEditor&&this.N.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.N.isSlave&&!this.N.isEditor&&this.N.isRunningInV2Editor},shouldOptOut:function(){return this.N.shouldOptOut},shouldSendTrackingData:function(){return!this.N.trackingDisabled&&(!!this.N.forceTracking||!this.N.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.N.isSlave},isRunningInDesktopApp:function(){return this.N.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.N.isRunningInV2Editor},X:function(e){i.extend(this.N,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={holdback:0,isGlobalHoldback:null,listTargetingCookies:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[]},this.on(r.DATA_LOADED,this.Q),this.on(r.ACTIVATE,this.J),this.on(r.RECORD_GLOBAL_DECISION,this.Z)},getRevision:function(){return this.N.revision},getGlobalHoldbackThreshold:function(){return this.N.holdback},getProjectId:function(){return this.N.projectId},getSnippetId:function(){return this.N.snippetId},getAccountId:function(){return this.N.accountId},getNamespace:function(){return this.N.namespace},getActivationId:function(){return this.N.activationId},getAnonymizeIP:function(){return this.N.anonymizeIP},isGlobalHoldback:function(){return!!this.N.isGlobalHoldback},getListTargetingCookieNames:function(){return this.N.listTargetingCookies.slice()},getDCPServiceId:function(){return this.N.dcpServiceId},getDCPKeyfieldLocators:function(){return this.N.dcpKeyfieldLocators},getRecommenderServices:function(){return this.N.recommenderServices},getProjectJS:function(){return this.N.projectJS},getPlugins:function(){return this.N.plugins},J:function(e){this.N.activationId=e.activationId,this.N.isGlobalHoldback=null},Z:function(e){var t=e.isGlobalHoldback;if(null!==this.N.isGlobalHoldback&&this.N.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.N.isGlobalHoldback=t,this.emitChange()},Q:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingCookies","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS"]);if(0!==i.keys(t).length){var n={listTargetingCookies:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.N,n,t),this.emitChange()}}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ee)},getEffectiveReferrer:function(){return this.N.effectiveReferrer},getEffectiveVariationId:function(){return this.N.effectiveVariationId},ee:function(e){i.isUndefined(e.effectiveReferrer)||(this.N.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.N.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F),this.on(r.SET_INTEGRATION_SETTINGS,this.te)},F:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,function(e){this.N[e.id]=e}.bind(this)),this.emitChange())},te:function(e){var t=this.N[e.id];t?i.extend(t,e):this.N[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.N))},get:function(e){return i.cloneDeep(this.N[e])},getReference:function(e){return this.N[e]}}}),(function(e,t,n){var i=n(2),r=n(17),a=n(12),o="*";e.exports={initialize:function(){this.N={},this.on(a.LOAD_PERSISTED_LAYER_STATES,this.ne),this.on(a.RECORD_LAYER_DECISION,this.re),this.on(a.RECORD_LAYER_DECISION_EVENT_ID,this.ae),this.on(a.ACTION_EXECUTED,this.oe)},getLayerState:function(e,t){if(this.N[e]){var n=this.N[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");
return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.N)i.forEach(this.N[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},ne:function(e){e.merge||(this.N={}),i.each(e.layerStates,function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.N[t];if(i.isUndefined(r))this.N[t]={},this.N[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.N[t][n]=e)}}.bind(this)),this.emitChange()},oe:function(e){var t=e.layerId,n=e.pageId;if(!this.N[t])return void r.warn("No Campaign registered for action executed",e);var i;this.N[t][n]?i=this.N[t][n]:this.N[t][o]&&(i=this.N[t][o]),i&&(i.actionTriggered=!0,i.actionSessionId=e.sessionId,i.actionActivationId=e.activationId,i.actionTimestamp=e.timestamp),this.emitChange()},re:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decisionTicketTimestamp:e.timestamp,decision:e.decision,decisionSessionId:e.sessionId,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null,actionTriggered:!1,actionSessionId:null,actionActivationId:null,actionTimestamp:null},n=this.N[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.N[e.layerId]=n,this.emitChange()},ae:function(e){var t=e.layerId,n=e.pageId||o;return this.N[t]?this.N[t][n]?(this.N[t][n].decisionEventId=e.decisionId,void this.emitChange()):void r.warn("Not recording decision event: Layer state not found for view",n):void r.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.F)},F:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||"single_experiment"===e.policy?"single_experiment"===e.policy&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.N.variations[e.id]=e})),t.N.experiments[n.id]=n})),a.deepFreeze(e),t.N.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.N.layers))},getCampaignsMap:function(){return a.safeReference(this.N.layers)},getExperimentsMap:function(){return a.safeReference(this.N.experiments)},getVariationsMap:function(){return a.safeReference(this.N.variations)},getCount:function(){return i.keys(this.N.layers).length},getAllByPageId:function(e){return a.safeReference(i.filter(i.values(this.N.layers),(function(t){return i.includes(t.pageIds,e)})))},get:function(e){return a.safeReference(this.N.layers[e])},getLayerByExperimentId:function(e){var t=i.values(this.N.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.N.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t,n){var i=n(12);e.exports={initialize:function(){this.N={logs:[]},this.on(i.LOG,this.se)},getLogs:function(){return this.N.logs},se:function(e){this.N.logs.push(e),this.emitChange()},T:function(){return this.N.logs.slice()}}}),(function(e,t,n){var i=n(12),r=n(23);e.exports={initialize:function(){this.N={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.ue),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.ce)},get:function(){return r.safeReference(this.N.data)},hasTracked:function(){return this.N.hasTracked},ue:function(e){r.deepFreeze(e),this.N.data=e,this.N.hasTracked=!1,this.emitChange()},ce:function(){this.N.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(12),a=1e3;e.exports={initialize:function(){this.N={},this.on(r.SET_PENDING_EVENT,this.le),this.on(r.REMOVE_PENDING_EVENT,this.de),this.on(r.LOAD_PENDING_EVENTS,this.fe)},getEvents:function(){return this.N},le:function(e){i.keys(this.N).length>=a&&this.pe();var t=e.id,n=e.retryCount;this.N[t]&&this.N[t].retryCount===n||(this.N[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},de:function(e){delete this.N[e.id],this.emitChange()},fe:function(e){this.N=e.events,this.pe(),this.emitChange()},pe:function(){for(var e=i.sortBy(this.N,"timeStamp"),t=0;t<=e.length-a;t++)delete this.N[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(18);e.exports={initialize:function(){this.N={},this.N[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.he)},he:function(e){i.isUndefined(this.N[a.PerformanceData.performance_marks][e.name])&&(this.N[a.PerformanceData.performance_marks][e.name]=[]),this.N[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.N[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,function(e,t){var n=this.N[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}.bind(this),{})}}}),(function(e,t,n){var i=n(12),r=n(18),a=n(2),o=n(17);e.exports={initialize:function(){this.N=a.mapValues(r.PluginTypes,(function(){return{}})),this.on(i.REGISTER_PLUGIN,this.ge)},ge:function(e){var t=e.type,n=e.name,i=e.plugin;if(!(t&&n&&i))throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.N[t])throw new Error("Invalid plugin type specified: "+t);this.N[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.N[e])return this.N[e];throw new Error("Invalid plugin type: "+e)}return this.N},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(12);e.exports={initialize:function(){this.N={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.ve)},getPendingAttributeValue:function(e){if(this.N[e])return this.N[e].pending},ve:function(e){this.N[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.ue)},isExpectingRedirect:function(){return i.isString(this.N.layerId)},getLayerId:function(){return this.N.layerId},ue:function(e){this.isExpectingRedirect()||(this.N.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={inRumSample:!1,id:null,src:null,RumHost:null,data:{}},this.on(r.SET_RUM_DATA,this.me)},me:function(e){i.merge(this.N,e),this.emitChange()},getSampleRum:function(){return this.N.inRumSample},getRumId:function(){return this.N.id},getRumHost:function(){return this.N.RumHost},getRumData:function(){return i.cloneDeep(this.N.data)},getScriptSrc:function(){return this.N.src}}}),(function(e,t,n){var i=n(12);e.exports={initialize:function(){this.N={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this._e)},_e:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.N.natives=e.sandboxedFunctions,this.N.initialized=!0,this.emitChange()},getAll:function(){return this.N.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.N.natives[e]||null},isInitialized:function(){return this.N.initialized}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(10),o=n(5),s=18e5;e.exports={initialize:function(){this.N={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.ye),this.on(r.LOAD_SESSION_STATE,this.Ee)},getState:function(){return i.cloneDeep(this.N)},getSessionId:function(){return this.N.sessionId},Ee:function(e){this.N.sessionId=e.sessionId,this.N.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},ye:function(){var e=a.now(),t=this.N.lastSessionTimestamp;(!this.N.sessionId||e-t>s)&&(this.N.sessionId=o.generate()),this.N.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(12),r=n(2);e.exports={initialize:function(){this.Ie(),this.on(i.FINALIZE_BATCH_SNAPSHOT,this.Te),this.on(i.REGISTER_PREVIOUS_BATCH,this.Se),this.on(i.REGISTER_TRACKER_VISITOR,this.be),this.on(i.REGISTER_TRACKER_EVENT,this.Ae),this.on(i.REGISTER_TRACKER_DECISION,this.we),this.on(i.RESET_TRACKER_EVENTS,this.De),this.on(i.RESET_TRACKER_STORE,this.Ie),this.on(i.RESET_TRACKER_PREVIOUS_BATCHES,this.Re),this.on(i.SET_TRACKER_POLLING,this.Ne),this.on(i.SET_TRACKER_BATCHING,this.Oe),this.on(i.SET_TRACKER_SEND_EVENTS,this.xe),this.on(i.SET_TRACKER_PERSISTABLE_STATE,this.Ce),this.on(i.SET_TRACKER_DIRTY,this.Le),this.on(i.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Pe)},getPersistableState:function(){return this.N.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.N.data,decisions:this.N.decisions,decisionEvents:this.N.decisionEvents,previousBatches:this.N.previousBatches}:{}:null},Ce:function(e){r.isEmpty(this.N.data)||r.isEmpty(e.data)||(this.Te(),this.N.previousBatches.push(this.getEventBatch())),this.N.data=e.data||{},this.N.decisions=e.decisions||[],this.N.decisionEvents=e.decisionEvents||[],r.isEmpty(this.N.previousBatches)||r.isEmpty(e.previousBatches)?this.N.previousBatches=e.previousBatches||[]:this.N.previousBatches=this.N.previousBatches.concat(e.previousBatches),this.emitChange()},Le:function(e){this.N.isDirty=e,this.emitChange()},Ae:function(e){var t=this.ke();!r.isEmpty(t.snapshots)&&r.isEmpty(this.N.decisionEvents)||this.Fe(),this.Ve().events.push(e.event),this.Le(!0)},we:function(e){this.N.decisions.push(e.decision),this.N.decisionEvents.push(e.decisionEvent),this.Le(!0)},be:function(e){r.isEmpty(this.N.data)?this.N.data=e.data:this.Te(),this.N.data.visitors.push(e.visitor),this.N.decisions=e.decisions,this.N.decisionEvents=[],this.Le(!0)},Se:function(e){this.N.previousBatches.push(e),this.Le(!0)},Ie:function(){this.N={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},De:function(){var e=this.ke();this.N.data.visitors=[e],e.snapshots=[],this.Le(!0)},Re:function(){this.N.previousBatches=[],this.Le(!0)},Ne:function(e){this.N.polling=e,this.emitChange()},Oe:function(e){this.N.shouldBatch=e,this.emitChange()},xe:function(e){this.N.canSend=e,this.emitChange()},getEventBatch:function(){return r.cloneDeep(this.N.data)},getPreviousBatches:function(){return r.cloneDeep(this.N.previousBatches)},Me:function(){return this.N.decisionEvents.slice()},Ue:function(){this.N.decisionEvents=[]},Be:function(){return this.N.decisions.slice()},isPolling:function(){return this.N.polling},shouldBatch:function(){return this.N.shouldBatch},Ve:function(){return r.last(this.ke().snapshots)},ke:function(){return r.last(this.N.data.visitors)},Fe:function(){var e=this.Me(),t=this.ke();t.snapshots.push({decisions:this.Be(),events:e}),this.Ue(),this.Le(!0)},Te:function(){this.N.decisionEvents.length>0&&this.Fe()},hasEventsToSend:function(){if(!r.isEmpty(this.N.decisionEvents))return!0;if(!r.isEmpty(this.N.data)){var e=r.some(this.N.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!r.isEmpty(this.N.previousBatches)},canSend:function(){return this.N.canSend},Pe:function(e){var t=this.ke();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={},this.on(r.SET_UA_DATA,this.F)},F:function(e){i.isEmpty(this.N)&&(this.N=e.data)},get:function(){return i.cloneDeep(this.N)}}}),(function(e,t,n){var i=n(2),r=n(17),a=n(12),o={globalTags:{},viewStates:{}};e.exports={initialize:function(){this.N=i.cloneDeep(o),this.on(a.REGISTER_VIEWS,this.je),this.on(a.SET_VIEW_ACTIVE_STATE,this.Ge),this.on(a.UPDATE_PARSED_VIEW_METADATA,this.He),this.on(a.UPDATE_USER_SUPPLIED_METADATA,this.ze),this.on(a.TRACK_VIEW_ACTIVATED_EVENT,this.Ye),this.on(a.SET_GLOBAL_TAGS,this.qe),this.on(a.ACTIVATE,this.Ke)},getAll:function(){var e={};for(var t in this.N.viewStates)e[t]=this.getViewState(t);return e},getViewState:function(e){var t=i.cloneDeep(this.N.viewStates[e]),n=this.N.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.N.viewStates[e]?this.N.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.N.viewStates,function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}.bind(this),[])},isViewActive:function(e){var t=this.N.viewStates[e];return t||r.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.N.globalTags)},Ke:function(){var e=i.cloneDeep(o);i.isEmpty(this.N.globalTags)||(e.globalTags=this.N.globalTags),this.N=e,this.emitChange()},je:function(e){i.each(e.views,function(e){var t=e.id;this.N.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}.bind(this)),this.emitChange()},Ge:function(e){var t=e.view.id;if(!this.N.viewStates[t])throw new Error("No view exists with id "+t);this.N.viewStates[t].isActive=e.isActive,e.isActive?this.N.viewStates[t].activatedTimestamp=e.timestamp:(this.N.viewStates[t].parsedMetadata={},this.N.viewStates[t].userSuppliedMetadata={}),this.emitChange()},He:function(e){var t=e.pageId;if(!this.N.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.N.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},ze:function(e){var t=e.pageId;if(!this.N.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.N.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},Ye:function(e){var t=e.pageId;this.N.viewStates[t]&&(this.N.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},qe:function(e){i.extend(this.N.globalTags,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.N))},getPagesMap:function(){return a.safeReference(this.N)},get:function(e){return a.safeReference(this.N[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.N),{apiName:e}))},F:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,function(e){a.deepFreeze(e),this.N[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.We),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Xe)},getVisitorProfile:function(){return this.N.profile},getVisitorProfileMetadata:function(){return this.N.metadata},getAttribute:function(e,t){var n=this.N.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.N.metadata[e])},Xe:function(e){this.N.profile=e.profile,this.N.metadata=e.metadata,this.emitChange()},We:function(e){var t,n;i.each(e.attributes,function(e){t=this.N.profile,n=this.N.metadata,e.type&&(t=this.N.profile[e.type]=this.N.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,function(t,i){e.type&&(n=this.N.metadata[e.type]=this.N.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}.bind(this))}.bind(this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.$e)},getCustomBehavioralAttributes:function(){return i.filter(this.N,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.N);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.N[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},$e:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,function(e){this.N[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(12));n(55).Event;e.exports={initialize:function(){this.N={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.F),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.Qe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.Je)},getEvents:function(){return this.N.events},getForeignEvents:function(){return this.N.foreignEvents},getForeignEventQueues:function(){return this.N.foreignEventQueues},F:function(e){this.N.events=e,this.emitChange()},Qe:function(e){this.N.foreignEvents[e.key]=e.value},Je:function(e){this.N.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n)}var a=n(2),o=n(56),s=n(57),u=n(59).getFieldValue;t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=s.hashToHex(s.toByteString(this.digest()),s.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=u(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID];var i=u(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS}}),(function(e,t,n){var i=n(58).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(12);e.exports={initialize:function(){this.N={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.Ze)},getBaseMap:function(){return this.N.baseMap},getEventQueue:function(){return this.N.eventQueue},getLastEvent:function(){return this.N.lastEvent},getCleared:function(){return this.N.cleared},getInitialized:function(){return this.N.initialized},Ze:function(e){this.N[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={randomId:null,UUID:null,variationIdMap:{},preferredLayerMap:{}},this.on(r.SET_VISITOR_ID,this.F),this.on(r.UPDATE_VARIATION_ID_MAP,this.et),this.on(r.MERGE_VARIATION_ID_MAP,this.tt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.nt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.it)},getBucketingId:function(){return this.getUUID()||this.getRandomId()},getRandomId:function(){return this.N.randomId},getUUID:function(){return this.N.UUID},getVariationIdMap:function(){return i.cloneDeep(this.N.variationIdMap)},et:function(e){var t=this.N.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.N.variationIdMap[e.layerId]=n,this.emitChange())},tt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.N.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.N.preferredLayerMap)},getPreferredLayerId:function(e){return this.N.preferredLayerMap[e]},nt:function(e){this.N.preferredLayerMap[e.groupId]!==e.layerId&&(this.N.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},it:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.N.preferredLayerMap=n,this.emitChange()},F:function(e){i.extend(this.N,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(12);e.exports={initialize:function(){this.N={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.rt),this.on(r.XDOMAIN_ADD_FRAME,this.at),this.on(r.XDOMAIN_SET_MESSAGE,this.ot),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.st),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.ut),this.on(r.XDOMAIN_SET_DISABLED,this.ct)},getMessages:function(){return i.cloneDeep(this.N.messages)},getNextMessageId:function(){return this.N.messages.length},getMessageById:function(e){return this.N.messages[e]},getSubscribers:function(){return this.N.subscribers},getFrames:function(){return this.N.frames},getNextFrameId:function(){return this.N.frames.length},getDefaultFrame:function(){return this.N.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.N.canonicalOrigins)},isDisabled:function(){return this.N.disabled},rt:function(e){this.N.defaultFrame=e},at:function(e){this.N.frames.push(e)},ot:function(e){this.N.messages[e.messageId]=e.message},st:function(e){this.N.subscribers.push(e.subscriber)},ut:function(e){this.N.canonicalOrigins=e.canonicalOrigins},ct:function(e){this.N.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(23);e.exports={initialize:function(){this.N={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,function(e){a.deepFreeze(e),this.N[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.N))},getGroupsMap:function(){return a.safeReference(this.N)},get:function(e){return a.safeReference(this.N[e])}}}),(function(e,t,n){var i=n(2),r=n(10),a=n(18),o=n(65),s=n(14),u=n(12),c=n(17),l=n(20),d=l.get("stores/sandbox"),f=n(66);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+r.now(),t=o.createElement("iframe");t.name=e,t.style.display="none",o.appendToHead(t);var n=t.contentWindow,l=t.contentDocument;l.write("<script></script>"),l.close();var d=i.mapValues(a.SandboxedFunctions,(function(e){return n[e]}));s.dispatch(u.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){c.warn("Unable to create a sandbox: ",e)}}}),(function(e,t){function n(){return"loading"===t.getReadyState()}t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!n())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return document.head.appendChild(e)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t){t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)}}),(function(e,t,n){var i=n(68);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){_.dispatch(E.SET_VISITOR_EVENTS,e)}function r(e){_.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){_.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){_.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){_.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){_.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return!0}function l(){return O.getEvents()}function d(){return x.getBaseMap()}function f(){return x.getEventQueue()}function p(){return x.getLastEvent()}function h(){return x.getCleared()}function g(){return x.getInitialized()}function v(){return i(l().concat(f())),a([]),l().length>L&&(i(l().slice(-L)),!0)}var m=n(2),_=n(14),y=n(17),E=n(12),I=n(69),T=n(70),S=n(10),b=t,A=n(55).EventBase,w=n(55).Event,D=n(56),R=n(82),N=n(20),O=N.get("stores/visitor_events"),x=N.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},L=1e3;t.initialize=function(e,t){if(!c())return void b.dt();if(!g()){b.ft(e,t);var n=l();n.length>0&&o(n[n.length-1]);var i=f();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){if(!c())return void b.dt();y.debug("Behavior store: adding event",e);var t=b.pt(e);o(t),a(f().concat(t)),b.ht(f())},t.getEvents=function(){return c()?(f().length>0&&(v()&&R.sessionize(l()),b.vt(l()),b.ht(f())),l()):(b.dt(),[])},b.ft=function(e,t){b.mt(e,t)&&(b.vt(l()),b.ht(f())),R.sessionize(l())},b.mt=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(b._t(e)),a(b._t(t))):(n=!0,i(b.yt(e)),a(b.yt(t))),f().length>0&&(v(),n=!0),i(b._updateBaseMapAndMaybeDedupe(l())),b._migrateEventBasesAndUpdateStore()&&(n=!0),n},b.yt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=b.Et(i);t[n]=new w(r,i[D.FIELDS.TIME])}return t},b._migrateEventBasesAndUpdateStore=function(){var e=!1,t=b.It();return R.applyMigrations(t)&&(e=!0,r({}),i(b._updateBaseMapAndMaybeDedupe(l())),a(b._updateBaseMapAndMaybeDedupe(f()))),e},b.Tt=function(){return S.now()},b.pt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||I.OTHER,a=e.tags||{};
e.revenue&&(t=e.revenue);var o=new A(n,i,r,a,t);o=b.St(o);var s=b.Tt(),u=new w(o,s,-1);return R.updateSessionId(p(),u),u},b._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=b.St(e[t].eventBase);return e},b.vt=function(e){var t=b.bt(e);T.persistBehaviorEvents(t)},b.ht=function(e){var t=b.bt(e);T.persistBehaviorEventQueue(t)},b.dt=function(){h()||(i([]),a([]),b.vt(l()),b.ht(f()),r({}),o(null),s(!0))},b.St=function(e){var t=e.hash(),n=d(),i=n[t];if(m.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},b.It=function(){var e=[],t=d();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},b.bt=function(e){for(var t=function(e){var t={};t[D.FIELDS.NAME]=e.getValueOrDefault([D.FIELDS.NAME]),t[D.FIELDS.TYPE]=e.getValueOrDefault([D.FIELDS.TYPE]);var n=e.getValueOrDefault([D.FIELDS.CATEGORY]);m.isUndefined(n)||(t[D.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([D.FIELDS.REVENUE]);m.isUndefined(i)||(t[D.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([D.FIELDS.OPTIONS]);return m.isUndefined(r)||(t[D.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[D.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[D.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},b.Et=function(e,t){var n=new A(e[D.FIELDS.NAME],e[D.FIELDS.TYPE],e[D.FIELDS.CATEGORY],e[D.FIELDS.OPTIONS],e[D.FIELDS.REVENUE]);return m.isUndefined(t)||n.setHash(t),n},b._t=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=b.Et(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new w(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return b._t(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(R.sessionSortPredicate),R.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return u(F.LAYER_MAP)||{}}function r(e,t){A.dispatch(C.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=j.getPreferredLayerMap();f(F.LAYER_MAP,e)}function o(e){A.dispatch(C.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=R.now()),A.dispatch(C.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||b.isUndefined(e[r]))try{var a=w.evaluate(t.getter);b.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),b.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){k.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),A.dispatch(C.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){k.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function u(e){var t=p(e),n=D.getItem(t);if(!n){var i=h(e);n=D.getItem(i),d(e,n)}return n}function c(e){var t=[];return b.each(e,(function(e){b.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function l(e){var t=j.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return b.each(D.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:D.getItem(e)};n.push(a)}})),n}function d(e,t){var n=p(e),i=h(e);D.setItem(n,t),D.removeItem(i)}function f(e,t){try{var i=p(e);try{D.removeItem(h(e)),D.setItem(i,t)}catch(e){throw k.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(81).setItem(i,t)}catch(e){k.warn("Unable to persist visitor data:",e.message)}}function p(e){var n=j.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function h(e){var t=j.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function g(e,t){if(m(e,p(F.EVENT_QUEUE)))A.dispatch(C.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:P.deserialize(t)});else if(m(e,p(F.EVENTS)))A.dispatch(C.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:P.deserialize(t)});else if(m(e,p(F.LAYER_STATES)))A.dispatch(C.LOAD_PERSISTED_LAYER_STATES,{layerStates:t,merge:!0});else if(m(e,p(F.VARIATION_MAP)))A.dispatch(C.MERGE_VARIATION_ID_MAP,{variationIdMap:t});else if(m(e,p(F.VISITOR_PROFILE))){var n=["custom"],i=t;b.each(n,(function(e){var t=U.getPlugin(O.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=v(i,e,t.attributionType);if(!b.isEmpty(n)){var r=[];b.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),A.dispatch(C.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else k.debug("Attribute type",e,"not used by any audiences")}))}}function v(e,t,n){var i=G.getAttribute(t),r=G.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(b.isEmpty(i))return{data:a,metadata:o};var s={};return b.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===O.AttributionTypes.FIRST_TOUCH&&i>=a||n===O.AttributionTypes.LAST_TOUCH&&a>=i||b.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function m(e,t){return e.indexOf(t)>0}function _(){var e=G.getVisitorProfile(),t=G.getVisitorProfileMetadata(),n=U.getAllPlugins(O.PluginTypes.visitorProfileProviders);if(n){var i=b.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=b.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){L.initializeStore(e,t)}function E(e){A.dispatch(C.LOAD_PERSISTED_LAYER_STATES,{layerStates:b.filter(e,(function(e){return!!e.decision}))})}function I(e){e=b.extend({lastSessionTimestamp:0,sessionId:null},e),A.dispatch(C.LOAD_SESSION_STATE,e)}function T(){return"oeu"+R.now()+"r"+Math.random()}function S(e){var t,n,i=U.getAllPlugins(O.PluginTypes.visitorProfileProviders),r=b.filter(i,(function(e){return b.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=b.reduce(t,(function(e,t,n){var i=t,a=b.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),A.dispatch(C.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}var b=n(2),A=n(14),w=n(20),D=n(71).LocalStorage,R=n(10),N=n(80),O=n(18),x=n(6).Promise,C=n(12),L=n(67),P=n(68),k=n(17),F=n(18).VisitorStorageKeys,V=w.get("stores/global"),M=w.get("stores/layer"),U=w.get("stores/plugins"),B=w.get("stores/session"),j=w.get("stores/visitor_id"),G=w.get("stores/visitor"),H=w.get("stores/provider_status");t.getIdFromCookies=function(){var e,t=N.get(O.COOKIES.VISITOR_ID);return e=N.get(O.COOKIES.VISITOR_UUID),t||(t=T()),{randomId:t,UUID:e}},t.setId=function(e){var n=j.getBucketingId();if(A.dispatch(C.SET_VISITOR_ID,e),j.getBucketingId()!==n){t.loadData();try{t.persistVisitorId(e)}catch(e){if(k.error("Visitor / Unable to persist visitorId, disabling tracking"),A.dispatch(C.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof N.MismatchError)throw k.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}}t.refreshSession()},t.getVariationIdMap=function(){return u(F.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){A.dispatch(C.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationId=function(){var e=j.getVariationIdMap();f(F.VARIATION_MAP,e)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistPreferredLayerMap=a,t.persistTrackerOptimizelyData=function(e){f(F.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){A.dispatch(C.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=b.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=b.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=b.partial(s,t),i=b(e).filter({isAsync:!0}).map(n).filter().value();return b.forEach(b.filter(e,(function(e){return!e.isAsync})),n),i.length>0?x.all(i):x.resolve()},t.loadData=function(){y(u(F.EVENTS)||[],u(F.EVENT_QUEUE)||[]);var e=l(F.LAYER_STATES);E(c(e)),I(u(F.SESSION_STATE)||{}),S(u(F.VISITOR_PROFILE)||{});var n=u(F.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){f(F.EVENTS,e)},t.persistBehaviorEventQueue=function(e){f(F.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=M.getLayerStates(t.getNamespace());e=b.map(e,(function(e){return b.omit(e,"namespace")})),f(F.LAYER_STATES,e)},t.persistSessionState=function(){f(F.SESSION_STATE,B.getState())},t.persistVisitorProfile=function(){f(F.VISITOR_PROFILE,_())},t.getUserIdFromKey=function(e,n){var i;return b.includes(e,n)&&b.includes(e,"_")&&b.includes(e,"$$")&&b.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.persistVisitorId=function(e){b.isUndefined(e.UUID)?e.randomId&&N.set(O.COOKIES.VISITOR_ID,e.randomId):null===e.UUID?N.remove(O.COOKIES.VISITOR_UUID):N.set(O.COOKIES.VISITOR_UUID,e.UUID)},t.getAttribute=function(e){return G.getAttribute(e)},t.getPendingAttributeValue=function(e){return H.getPendingAttributeValue(e)},t.loadForeignData=function(){b.each(D.keys(),(function(e){var t=D.getItem(e);t&&g(e,t)}))},t.getNamespace=function(){return V.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=N.getAll();b.forEach(b.keys(e),(function(e){0===e.indexOf(O.COOKIES.SESSION_STATE+"$$")&&N.remove(e)}))}}),(function(e,t,n){var i,r="optimizely_data",a=n(72),o=n(66),s=n(78),u=n(74).create,c=t.Error=u("StorageError"),l=o.getGlobal("localStorage");l?i=a.create(l,r):(s.emitError(new c("Failed to initialize localStorage")),i=a.mockStorage),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.At=e,this.wt=t}var r=n(2),a=n(17),o=n(19),s="$$";i.prototype.Dt=function(e){return[this.wt,e].join(s)},i.prototype.Rt=function(e){return e.replace(this.wt+s,"")},i.prototype.setItem=function(e,t){try{this.At.setItem(this.Dt(e),o.stringify(t))}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.At.removeItem(this.Dt(e))},i.prototype.getItem=function(e){try{return o.parse(this.At.getItem(this.Dt(e)))}catch(e){}return null},i.prototype.keys=function(){var e=r.keys(this.At);return r.map(e,this.Rt.bind(this))},i.prototype.allKeys=function(){return r.keys(this.At)},i.prototype.allValues=function(){return r.values(this.At)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return o.getGlobal("performance")}var r=n(14),a=n(10),o=n(66),s=n(12),u=n(74).create,c=n(20),l=c.get("stores/rum"),d="optimizely:",f=t.Error=u("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;r.dispatch(s.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():a.now()}}),(function(e,t,n){var i=n(75),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(76)(),a=n(77);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){var i=n(79);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(14),o=n(12),s=n(20),u=n(17),c=n(78),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),a.dispatch(o.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){a.dispatch(o.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){u.warn("Error in event emitter handler",e,r),!n&&i.emitErrors&&c.emitError(r,null,t)}}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,d=o.length-1;d>=0;d--)if(s.unshift(o[d]),i=s.join("."),!r.includes(g,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return c.dispatch(l.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(10),o=n(65),s=n(66),u=n(74).create,c=n(14),l=n(12),d=n(20),f=d.get("stores/cookie_options"),p=t.SetError=u("CookieSetError"),h=t.MismatchError=u("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,s,u;n=o.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],s=i.indexOf("="),s>0&&(u=t.safeDecodeURIComponent(i.substring(0,s)),void 0===c[u])){var l=i.substring(s+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,u,c){u=r.extend({encodeValue:!0},u),c!==!1&&(c=!0);var l=[];if(r.isUndefined(u.domain)){var d=f.getCurrentDomain();d||(d=i(s.getLocation(),!0)),u.domain=d}if(u.domain&&l.push("domain="+u.domain),r.isUndefined(u.path)&&(u.path="/"),u.path&&l.push("path="+u.path),r.isUndefined(u.expires)){var g=r.isUndefined(u.maxAge)?f.getDefaultAgeInSeconds():u.maxAge;u.expires=new Date(a.now()+1e3*g)}if(r.isUndefined(u.expires)||l.push("expires="+u.expires.toUTCString()),u.secure&&l.push("secure"),l=l.join(";"),o.setCookie(e+"="+(u.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=u.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new h('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){t.set(e,null,r.extend({},n,{expires:new Date(0)}),!1)};var g=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void _.debug("XDomain","No frame found for origin: "+e.origin);try{t=v.parse(e.data)}catch(t){return void _.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)u.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0}),h.emitInternalError(new E("Xdomain Error: "+t.response.toString()));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(_.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?h.emitInternalError(new E("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?h.emitInternalError(new E("Message ID is < 0: "+t.id)):h.emitInternalError(new E("No stored message found for message ID: "+t.id))}else h.emitInternalError(new E("Message ID is not a number: "+t.id.toString()));return}n.resolver(t.response),u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(v.stringify(n),t.origin)}var o=n(2),s=n(6).Promise,u=n(14),c=n(12),l=n(20),d=n(65),f=n(66),p=n(10),h=n(78),g=n(70),v=n(19),m=n(74).create,_=n(17),y=l.get("stores/xdomain"),E=t.Error=m("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:v.stringify(t)},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){u.dispatch(c.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=d.createElement("iframe");i.src=e+t,d.appendToHead(i),i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};u.dispatch(c.XDOMAIN_ADD_FRAME,r),n(r)}})},t.loadCanonicalOrigins=function(e){u.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=g.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),_.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){return f.addEventListener("message",i),t.loadIframe(e,n).then((function(e){u.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){function i(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u}function r(e,t){var n;n=i(e,t)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):t.getValueOrDefault([s.FIELDS.TIME]),t.setFieldValue(s.FIELDS.SESSION_ID,n)}var a=n(55).Event,o=n(55).EventBase,s=n(56),u=18e5;t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_ID]),u=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?u-36e5:n,i="number"!=typeof i?n:i,e=new a(new o("",""),n,i),r(e,t)},t.sessionize=function(e){var t=e.length;if(0!==t){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var n=1;n<t;n++)r(e[n-1],e[n])}},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(20);i.register("env/jquery",n(84))}),(function(e,t,n){n(66);e.exports=n(85)}),(function(e,t){/*!
	 * jQuery JavaScript Library v1.6.4
	 * http://jquery.com/
	 *
	 * Copyright 2011, John Resig
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 * Copyright 2011, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses.
	 *
	 *
	 */
var n=(function(e,t){function n(e,n,i){if(i===t&&1===e.nodeType){var r="data-"+n.replace(B,"-$1").toLowerCase();if(i=e.getAttribute(r),"string"==typeof i){try{i="true"===i||"false"!==i&&("null"===i?null:F.isNaN(i)?U.test(i)?F.parseJSON(i):i:parseFloat(i))}catch(e){}F.data(e,n,i)}else i=t}return i}function i(e){for(var t in e)if("toJSON"!==t)return!1;return!0}function r(e,n,i){var r=n+"defer",a=n+"queue",o=n+"mark",s=F.data(e,r,t,!0);!s||"queue"!==i&&F.data(e,a,t,!0)||"mark"!==i&&F.data(e,o,t,!0)||setTimeout((function(){F.data(e,a,t,!0)||F.data(e,o,t,!0)||(F.removeData(e,r,!0),s.resolve())}),0)}function a(){return!1}function o(){return!0}function s(e,n,i){var r=F.extend({},i[0]);r.type=e,r.originalEvent={},r.liveFired=t,F.event.handle.call(n,r),r.isDefaultPrevented()&&i[0].preventDefault()}function u(e){var t,n,i,r,a,o,s,u,c,l,d,f,p=[],h=[],g=F._data(this,"events");if(e.liveFired!==this&&g&&g.live&&!e.target.disabled&&(!e.button||"click"!==e.type)){e.namespace&&(d=new RegExp("(^|\\.)"+e.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),e.liveFired=this;var v=g.live.slice(0);for(s=0;s<v.length;s++)a=v[s],a.origType.replace($,"")===e.type?h.push(a.selector):v.splice(s--,1);for(r=F(e.target).closest(h,e.currentTarget),u=0,c=r.length;u<c;u++)for(l=r[u],s=0;s<v.length;s++)a=v[s],l.selector!==a.selector||d&&!d.test(a.namespace)||l.elem.disabled||(o=l.elem,i=null,"mouseenter"!==a.preType&&"mouseleave"!==a.preType||(e.type=a.preType,i=F(e.relatedTarget).closest(a.selector)[0],i&&F.contains(o,i)&&(i=o)),i&&i===o||p.push({elem:o,handleObj:a,level:l.level}));for(u=0,c=p.length;u<c&&(r=p[u],!(n&&r.level>n))&&(e.currentTarget=r.elem,e.data=r.handleObj.data,e.handleObj=r.handleObj,f=r.handleObj.origHandler.apply(r.elem,arguments),f!==!1&&!e.isPropagationStopped()||(n=r.level,f===!1&&(t=!1),!e.isImmediatePropagationStopped()));u++);return t}}function c(e,t){return(e&&"*"!==e?e+".":"")+t.replace(J,"`").replace(Z,"&")}function l(e){return!e||!e.parentNode||11===e.parentNode.nodeType}function d(e,t,n){if(t=t||0,F.isFunction(t))return F.grep(e,(function(e,i){var r=!!t.call(e,i,e);return r===n}));if(t.nodeType)return F.grep(e,(function(e,i){return e===t===n}));if("string"==typeof t){var i=F.grep(e,(function(e){return 1===e.nodeType}));if(de.test(t))return F.filter(t,i,!n);t=F.filter(t,i)}return F.grep(e,(function(e,i){return F.inArray(e,t)>=0===n}))}function f(e,t){return F.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e,t){if(1===t.nodeType&&F.hasData(e)){var n=F.expando,i=F.data(e),r=F.data(t,i);if(i=i[n]){var a=i.events;if(r=r[n]=F.extend({},i),a){delete r.handle,r.events={};for(var o in a)for(var s=0,u=a[o].length;s<u;s++)F.event.add(t,o+(a[o][s].namespace?".":"")+a[o][s].namespace,a[o][s],a[o][s].data)}}}}function h(e,t){var n;1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?t.outerHTML=e.outerHTML:"input"!==n||"checkbox"!==e.type&&"radio"!==e.type?"option"===n?t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue):(e.checked&&(t.defaultChecked=t.checked=e.checked),t.value!==e.value&&(t.value=e.value)),t.removeAttribute(F.expando))}function g(e){return"getElementsByTagName"in e?e.getElementsByTagName("*"):"querySelectorAll"in e?e.querySelectorAll("*"):[]}function v(e){"checkbox"!==e.type&&"radio"!==e.type||(e.defaultChecked=e.checked)}function m(e){F.nodeName(e,"input")?v(e):"getElementsByTagName"in e&&F.grep(e.getElementsByTagName("input"),v)}function _(e,t){t.src?F.ajax({url:t.src,async:!1,dataType:"script"}):F.globalEval((t.text||t.textContent||t.innerHTML||"").replace(be,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)}function y(e,t,n){var i="width"===t?e.offsetWidth:e.offsetHeight,r="width"===t?Fe:Ve;return i>0?("border"!==n&&F.each(r,(function(){n||(i-=parseFloat(F.css(e,"padding"+this))||0),"margin"===n?i+=parseFloat(F.css(e,n+this))||0:i-=parseFloat(F.css(e,"border"+this+"Width"))||0})),i+"px"):(i=we(e,t,t),(i<0||null==i)&&(i=e.style[t]||0),i=parseFloat(i)||0,n&&F.each(r,(function(){i+=parseFloat(F.css(e,"padding"+this))||0,"padding"!==n&&(i+=parseFloat(F.css(e,"border"+this+"Width"))||0),"margin"===n&&(i+=parseFloat(F.css(e,n+this))||0)})),i+"px")}function E(e){return function(t,n){if("string"!=typeof t&&(n=t,t="*"),F.isFunction(n))for(var i,r,a,o=t.toLowerCase().split(Je),s=0,u=o.length;s<u;s++)i=o[s],a=/^\+/.test(i),a&&(i=i.substr(1)||"*"),r=e[i]=e[i]||[],r[a?"unshift":"push"](n)}}function I(e,n,i,r,a,o){a=a||n.dataTypes[0],o=o||{},o[a]=!0;for(var s,u=e[a],c=0,l=u?u.length:0,d=e===nt;c<l&&(d||!s);c++)s=u[c](n,i,r),"string"==typeof s&&(!d||o[s]?s=t:(n.dataTypes.unshift(s),s=I(e,n,i,r,s,o)));return!d&&s||o["*"]||(s=I(e,n,i,r,"*",o)),s}function T(e,n){var i,r,a=F.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((a[i]?e:r||(r={}))[i]=n[i]);r&&F.extend(!0,e,r)}function S(e,t,n,i){if(F.isArray(t))F.each(t,(function(t,r){n||je.test(e)?i(e,r):S(e+"["+("object"==typeof r||F.isArray(r)?t:"")+"]",r,n,i)}));else if(n||null==t||"object"!=typeof t)i(e,t);else for(var r in t)S(e+"["+r+"]",t[r],n,i)}function b(e,n,i){var r,a,o,s,u=e.contents,c=e.dataTypes,l=e.responseFields;for(a in l)a in i&&(n[l[a]]=i[a]);for(;"*"===c[0];)c.shift(),r===t&&(r=e.mimeType||n.getResponseHeader("content-type"));if(r)for(a in u)if(u[a]&&u[a].test(r)){c.unshift(a);break}if(c[0]in i)o=c[0];else{for(a in i){if(!c[0]||e.converters[a+" "+c[0]]){o=a;break}s||(s=a)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),i[o]}function A(e,n){e.dataFilter&&(n=e.dataFilter(n,e.dataType));var i,r,a,o,s,u,c,l,d=e.dataTypes,f={},p=d.length,h=d[0];for(i=1;i<p;i++){if(1===i)for(r in e.converters)"string"==typeof r&&(f[r.toLowerCase()]=e.converters[r]);if(o=h,h=d[i],"*"===h)h=o;else if("*"!==o&&o!==h){if(s=o+" "+h,u=f[s]||f["* "+h],!u){l=t;for(c in f)if(a=c.split(" "),(a[0]===o||"*"===a[0])&&(l=f[a[1]+" "+h])){c=f[c],c===!0?u=l:l===!0&&(u=c);break}}u||l||F.error("No conversion from "+s.replace(" "," to ")),u!==!0&&(n=u?u(n):l(c(n)))}}return n}function w(){try{return new e.XMLHttpRequest}catch(e){}}function D(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}function R(){return setTimeout(N,0),pt=F.now()}function N(){pt=t}function O(e,t){var n={};return F.each(mt.concat.apply([],mt.slice(0,t)),(function(){n[this]=e})),n}function x(e){if(!ht[e]){var t=L.body,n=F("<"+e+">").appendTo(t),i=n.css("display");n.remove(),"none"!==i&&""!==i||(lt||(lt=L.createElement("iframe"),lt.frameBorder=lt.width=lt.height=0),t.appendChild(lt),dt&&lt.createElement||(dt=(lt.contentWindow||lt.contentDocument).document,dt.write(("CSS1Compat"===L.compatMode?"<!doctype html>":"")+"<html><body>"),dt.close()),n=dt.createElement(e),dt.body.appendChild(n),i=F.css(n,"display"),t.removeChild(lt)),ht[e]=i}return ht[e]}function C(e){return F.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var L=e.document,P=e.navigator,k=e.location,F=(function(){function n(){if(!s.isReady){try{L.documentElement.doScroll("left")}catch(e){return void setTimeout(n,1)}s.ready()}}var i,r,a,o,s=function(e,t){return new s.fn.init(e,t,i)},u=e.jQuery,c=e.$,l=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,d=/\S/,f=/^\s+/,p=/\s+$/,h=/\d/,g=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,v=/^[\],:{}\s]*$/,m=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,_=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,y=/(?:^|:|,)(?:\s*\[)+/g,E=/(webkit)[ \/]([\w.]+)/,I=/(opera)(?:.*version)?[ \/]([\w.]+)/,T=/(msie) ([\w.]+)/,S=/(mozilla)(?:.*? rv:([\w.]+))?/,b=/-([a-z]|[0-9])/gi,A=/^-ms-/,w=function(e,t){return(t+"").toUpperCase()},D=P.userAgent,R=Object.prototype.toString,N=Object.prototype.hasOwnProperty,O=Array.prototype.push,x=Array.prototype.slice,C=String.prototype.trim,k=Array.prototype.indexOf,F={};return s.fn=s.prototype={constructor:s,init:function(e,n,i){var r,a,o,u;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("body"===e&&!n&&L.body)return this.context=L,this[0]=L.body,this.selector=e,this.length=1,this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:l.exec(e),!r||!r[1]&&n)return!n||n.jquery?(n||i).find(e):this.constructor(n).find(e);if(r[1])return n=n instanceof s?n[0]:n,u=n?n.ownerDocument||n:L,o=g.exec(e),o?s.isPlainObject(n)?(e=[L.createElement(o[1])],s.fn.attr.call(e,n,!0)):e=[u.createElement(o[1])]:(o=s.buildFragment([r[1]],[u]),e=(o.cacheable?s.clone(o.fragment):o.fragment).childNodes),s.merge(this,e);if(a=L.getElementById(r[2]),a&&a.parentNode){if(a.id!==r[2])return i.find(e);this.length=1,this[0]=a}return this.context=L,this.selector=e,this}return s.isFunction(e)?i.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),s.makeArray(e,this))},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return x.call(this,0)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var i=this.constructor();return s.isArray(e)?O.apply(i,e):s.merge(i,e),i.prevObject=this,i.context=this.context,"find"===t?i.selector=this.selector+(this.selector?" ":"")+n:t&&(i.selector=this.selector+"."+t+"("+n+")"),i},each:function(e,t){return s.each(this,e,t)},ready:function(e){return s.bindReady(),a.done(e),this},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(x.apply(this,arguments),"slice",x.call(arguments).join(","))},map:function(e){return this.pushStack(s.map(this,(function(t,n){return e.call(t,n,t)})))},end:function(){return this.prevObject||this.constructor(null)},push:O,sort:[].sort,splice:[].splice},s.fn.init.prototype=s.fn,s.extend=s.fn.extend=function(){var e,n,i,r,a,o,u=arguments[0]||{},c=1,l=arguments.length,d=!1;for("boolean"==typeof u&&(d=u,u=arguments[1]||{},c=2),"object"==typeof u||s.isFunction(u)||(u={}),l===c&&(u=this,--c);c<l;c++)if(null!=(e=arguments[c]))for(n in e)i=u[n],r=e[n],u!==r&&(d&&r&&(s.isPlainObject(r)||(a=s.isArray(r)))?(a?(a=!1,o=i&&s.isArray(i)?i:[]):o=i&&s.isPlainObject(i)?i:{},u[n]=s.extend(d,o,r)):r!==t&&(u[n]=r));return u},s.extend({noConflict:function(t){return e.$===s&&(e.$=c),t&&e.jQuery===s&&(e.jQuery=u),s},isReady:!1,readyWait:1,holdReady:function(e){e?s.readyWait++:s.ready(!0)},ready:function(e){if(e===!0&&!--s.readyWait||e!==!0&&!s.isReady){if(!L.body)return setTimeout(s.ready,1);if(s.isReady=!0,e!==!0&&--s.readyWait>0)return;a.resolveWith(L,[s]),s.fn.trigger&&s(L).trigger("ready").unbind("ready")}},bindReady:function(){if(!a){if(a=s._Deferred(),"complete"===L.readyState)return setTimeout(s.ready,1);if(L.addEventListener)L.addEventListener("DOMContentLoaded",o,!1),e.addEventListener("load",s.ready,!1);else if(L.attachEvent){L.attachEvent("onreadystatechange",o),e.attachEvent("onload",s.ready);var t=!1;try{t=null==e.frameElement}catch(e){}L.documentElement.doScroll&&t&&n()}}},isFunction:function(e){return"function"===s.type(e)},isArray:Array.isArray||function(e){return"array"===s.type(e)},isWindow:function(e){return e&&"object"==typeof e&&"setInterval"in e},isNaN:function(e){return null==e||!h.test(e)||isNaN(e)},type:function(e){return null==e?String(e):F[R.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==s.type(e)||e.nodeType||s.isWindow(e))return!1;try{if(e.constructor&&!N.call(e,"constructor")&&!N.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var n;for(n in e);return n===t||N.call(e,n)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw e},parseJSON:function(t){return"string"==typeof t&&t?(t=s.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):v.test(t.replace(m,"@").replace(_,"]").replace(y,""))?new Function("return "+t)():void s.error("Invalid JSON: "+t)):null},parseXML:function(n){var i,r;try{e.DOMParser?(r=new DOMParser,i=r.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(e){i=t}return i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||s.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(t){t&&d.test(t)&&(e.execScript||function(t){e["eval"].call(e,t)})(t)},camelCase:function(e){return e.replace(A,"ms-").replace(b,w)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,i){var r,a=0,o=e.length,u=o===t||s.isFunction(e);if(i)if(u){for(r in e)if(n.apply(e[r],i)===!1)break}else for(;a<o&&n.apply(e[a++],i)!==!1;);else if(u){for(r in e)if(n.call(e[r],r,e[r])===!1)break}else for(;a<o&&n.call(e[a],a,e[a++])!==!1;);return e},trim:C?function(e){return null==e?"":C.call(e)}:function(e){return null==e?"":e.toString().replace(f,"").replace(p,"")},makeArray:function(e,t){var n=t||[];if(null!=e){var i=s.type(e);null==e.length||"string"===i||"function"===i||"regexp"===i||s.isWindow(e)?O.call(n,e):s.merge(n,e)}return n},inArray:function(e,t){if(!t)return-1;if(k)return k.call(t,e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},merge:function(e,n){var i=e.length,r=0;if("number"==typeof n.length)for(var a=n.length;r<a;r++)e[i++]=n[r];else for(;n[r]!==t;)e[i++]=n[r++];return e.length=i,e},grep:function(e,t,n){var i,r=[];n=!!n;for(var a=0,o=e.length;a<o;a++)i=!!t(e[a],a),n!==i&&r.push(e[a]);return r},map:function(e,n,i){var r,a,o=[],u=0,c=e.length,l=e instanceof s||c!==t&&"number"==typeof c&&(c>0&&e[0]&&e[c-1]||0===c||s.isArray(e));if(l)for(;u<c;u++)r=n(e[u],u,i),null!=r&&(o[o.length]=r);else for(a in e)r=n(e[a],a,i),null!=r&&(o[o.length]=r);return o.concat.apply([],o)},guid:1,proxy:function(e,n){if("string"==typeof n){var i=e[n];n=e,e=i}if(!s.isFunction(e))return t;var r=x.call(arguments,2),a=function(){return e.apply(n,r.concat(x.call(arguments)))};return a.guid=e.guid=e.guid||a.guid||s.guid++,a},access:function(e,n,i,r,a,o){var u=e.length;if("object"==typeof n){for(var c in n)s.access(e,c,n[c],r,a,i);return e}if(i!==t){r=!o&&r&&s.isFunction(i);for(var l=0;l<u;l++)a(e[l],n,r?i.call(e[l],l,a(e[l],n)):i,o);return e}return u?a(e[0],n):t},now:function(){return(new Date).getTime()},uaMatch:function(e){e=e.toLowerCase();var t=E.exec(e)||I.exec(e)||T.exec(e)||e.indexOf("compatible")<0&&S.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}s.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,i){return i&&i instanceof s&&!(i instanceof e)&&(i=e(i)),s.fn.init.call(this,n,i,t)},e.fn.init.prototype=e.fn;var t=e(L);return e},browser:{}}),s.each("Boolean Number String Function Array Date RegExp Object".split(" "),(function(e,t){F["[object "+t+"]"]=t.toLowerCase()})),r=s.uaMatch(D),r.browser&&(s.browser[r.browser]=!0,s.browser.version=r.version),s.browser.webkit&&(s.browser.safari=!0),d.test(" ")&&(f=/^[\s\xA0]+/,p=/[\s\xA0]+$/),i=s(L),L.addEventListener?o=function(){L.removeEventListener("DOMContentLoaded",o,!1),s.ready()}:L.attachEvent&&(o=function(){"complete"===L.readyState&&(L.detachEvent("onreadystatechange",o),s.ready())}),s})(),V="done fail isResolved isRejected promise then always pipe".split(" "),M=[].slice;F.extend({_Deferred:function(){var e,t,n,i=[],r={done:function(){if(!n){var t,a,o,s,u,c=arguments;for(e&&(u=e,e=0),t=0,a=c.length;t<a;t++)o=c[t],s=F.type(o),"array"===s?r.done.apply(r,o):"function"===s&&i.push(o);u&&r.resolveWith(u[0],u[1])}return this},resolveWith:function(r,a){if(!n&&!e&&!t){a=a||[],t=1;try{for(;i[0];)i.shift().apply(r,a)}finally{e=[r,a],t=0}}return this},resolve:function(){return r.resolveWith(this,arguments),this},isResolved:function(){return!(!t&&!e)},cancel:function(){return n=1,i=[],this}};return r},Deferred:function(e){var t,n=F._Deferred(),i=F._Deferred();return F.extend(n,{then:function(e,t){return n.done(e).fail(t),this},always:function(){return n.done.apply(n,arguments).fail.apply(this,arguments)},fail:i.done,rejectWith:i.resolveWith,reject:i.resolve,isRejected:i.isResolved,pipe:function(e,t){return F.Deferred((function(i){F.each({done:[e,"resolve"],fail:[t,"reject"]},(function(e,t){var r,a=t[0],o=t[1];F.isFunction(a)?n[e]((function(){r=a.apply(this,arguments),r&&F.isFunction(r.promise)?r.promise().then(i.resolve,i.reject):i[o+"With"](this===n?i:this,[r])})):n[e](i[o])}))})).promise()},promise:function(e){if(null==e){if(t)return t;t=e={}}for(var i=V.length;i--;)e[V[i]]=n[V[i]];return e}}),n.done(i.cancel).fail(n.cancel),delete n.cancel,e&&e.call(n,n),n},when:function(e){function t(e){return function(t){n[e]=arguments.length>1?M.call(arguments,0):t,--a||o.resolveWith(o,M.call(n,0))}}var n=arguments,i=0,r=n.length,a=r,o=r<=1&&e&&F.isFunction(e.promise)?e:F.Deferred();if(r>1){for(;i<r;i++)n[i]&&F.isFunction(n[i].promise)?n[i].promise().then(t(i),o.reject):--a;a||o.resolveWith(o,n)}else o!==e&&o.resolveWith(o,r?[e]:[]);return o.promise()}}),F.support=(function(){var e,t,n,i,r,a,o,s,u,c,l,d,f,p,h,g,v=L.createElement("div"),m=L.documentElement;if(v.setAttribute("className","t"),v.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",e=v.getElementsByTagName("*"),t=v.getElementsByTagName("a")[0],!e||!e.length||!t)return{};n=L.createElement("select"),i=n.appendChild(L.createElement("option")),r=v.getElementsByTagName("input")[0],o={leadingWhitespace:3===v.firstChild.nodeType,tbody:!v.getElementsByTagName("tbody").length,htmlSerialize:!!v.getElementsByTagName("link").length,style:/top/.test(t.getAttribute("style")),hrefNormalized:"/a"===t.getAttribute("href"),opacity:/^0.55$/.test(t.style.opacity),cssFloat:!!t.style.cssFloat,checkOn:"on"===r.value,optSelected:i.selected,getSetAttribute:"t"!==v.className,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},r.checked=!0,o.noCloneChecked=r.cloneNode(!0).checked,n.disabled=!0,o.optDisabled=!i.disabled;try{delete v.test}catch(e){o.deleteExpando=!1}!v.addEventListener&&v.attachEvent&&v.fireEvent&&(v.attachEvent("onclick",(function(){o.noCloneEvent=!1})),v.cloneNode(!0).fireEvent("onclick")),r=L.createElement("input"),r.value="t",r.setAttribute("type","radio"),o.radioValue="t"===r.value,r.setAttribute("checked","checked"),v.appendChild(r),s=L.createDocumentFragment(),s.appendChild(v.firstChild),o.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,v.innerHTML="",v.style.width=v.style.paddingLeft="1px",u=L.getElementsByTagName("body")[0],l=L.createElement(u?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&F.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(h in d)l.style[h]=d[h];if(l.appendChild(v),c=u||m,c.insertBefore(l,c.firstChild),o.appendChecked=r.checked,o.boxModel=2===v.offsetWidth,"zoom"in v.style&&(v.style.display="inline",v.style.zoom=1,o.inlineBlockNeedsLayout=2===v.offsetWidth,v.style.display="",v.innerHTML="<div style='width:4px;'></div>",o.shrinkWrapBlocks=2!==v.offsetWidth),v.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",f=v.getElementsByTagName("td"),g=0===f[0].offsetHeight,f[0].style.display="",f[1].style.display="none",o.reliableHiddenOffsets=g&&0===f[0].offsetHeight,v.innerHTML="",L.defaultView&&L.defaultView.getComputedStyle&&(a=L.createElement("div"),a.style.width="0",a.style.marginRight="0",v.appendChild(a),o.reliableMarginRight=0===(parseInt((L.defaultView.getComputedStyle(a,null)||{marginRight:0}).marginRight,10)||0)),l.innerHTML="",c.removeChild(l),v.attachEvent)for(h in{submit:1,change:1,focusin:1})p="on"+h,g=p in v,g||(v.setAttribute(p,"return;"),g="function"==typeof v[p]),o[h+"Bubbles"]=g;return l=s=n=i=u=a=v=r=null,o})(),F.boxModel=F.support.boxModel;var U=/^(?:\{.*\}|\[.*\])$/,B=/([A-Z])/g;F.extend({cache:{},uuid:0,expando:"jQuery"+(F.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?F.cache[e[F.expando]]:e[F.expando],!!e&&!i(e)},data:function(e,n,i,r){if(F.acceptData(e)){var a,o,s=F.expando,u="string"==typeof n,c=e.nodeType,l=c?F.cache:e,d=c?e[F.expando]:e[F.expando]&&F.expando;if(!(!d||r&&d&&l[d]&&!l[d][s])||!u||i!==t)return d||(c?e[F.expando]=d=++F.uuid:d=F.expando),l[d]||(l[d]={},c||(l[d].toJSON=F.noop)),"object"!=typeof n&&"function"!=typeof n||(r?l[d][s]=F.extend(l[d][s],n):l[d]=F.extend(l[d],n)),a=l[d],r&&(a[s]||(a[s]={}),a=a[s]),i!==t&&(a[F.camelCase(n)]=i),"events"!==n||a[n]?(u?(o=a[n],null==o&&(o=a[F.camelCase(n)])):o=a,o):a[s]&&a[s].events}},removeData:function(e,t,n){if(F.acceptData(e)){var r,a=F.expando,o=e.nodeType,s=o?F.cache:e,u=o?e[F.expando]:F.expando;if(s[u]&&(!t||(r=n?s[u][a]:s[u],!r||(r[t]||(t=F.camelCase(t)),delete r[t],i(r))))&&(!n||(delete s[u][a],i(s[u])))){var c=s[u][a];F.support.deleteExpando||!s.setInterval?delete s[u]:s[u]=null,c?(s[u]={},o||(s[u].toJSON=F.noop),s[u][a]=c):o&&(F.support.deleteExpando?delete e[F.expando]:e.removeAttribute?e.removeAttribute(F.expando):e[F.expando]=null)}}},_data:function(e,t,n){return F.data(e,t,n,!0)},acceptData:function(e){if(e.nodeName){var t=F.noData[e.nodeName.toLowerCase()];if(t)return!(t===!0||e.getAttribute("classid")!==t)}return!0}}),F.fn.extend({data:function(e,i){var r=null;if("undefined"==typeof e){if(this.length&&(r=F.data(this[0]),1===this[0].nodeType))for(var a,o=this[0].attributes,s=0,u=o.length;s<u;s++)a=o[s].name,0===a.indexOf("data-")&&(a=F.camelCase(a.substring(5)),n(this[0],a,r[a]));return r}if("object"==typeof e)return this.each((function(){F.data(this,e)}));var c=e.split(".");return c[1]=c[1]?"."+c[1]:"",i===t?(r=this.triggerHandler("getData"+c[1]+"!",[c[0]]),r===t&&this.length&&(r=F.data(this[0],e),r=n(this[0],e,r)),r===t&&c[1]?this.data(c[0]):r):this.each((function(){var t=F(this),n=[c[0],i];t.triggerHandler("setData"+c[1]+"!",n),F.data(this,e,i),t.triggerHandler("changeData"+c[1]+"!",n)}))},removeData:function(e){return this.each((function(){F.removeData(this,e)}))}}),F.extend({_mark:function(e,n){e&&(n=(n||"fx")+"mark",F.data(e,n,(F.data(e,n,t,!0)||0)+1,!0))},_unmark:function(e,n,i){if(e!==!0&&(i=n,n=e,e=!1),n){i=i||"fx";var a=i+"mark",o=e?0:(F.data(n,a,t,!0)||1)-1;o?F.data(n,a,o,!0):(F.removeData(n,a,!0),r(n,i,"mark"))}},queue:function(e,n,i){if(e){n=(n||"fx")+"queue";var r=F.data(e,n,t,!0);return i&&(!r||F.isArray(i)?r=F.data(e,n,F.makeArray(i),!0):r.push(i)),r||[]}},dequeue:function(e,t){t=t||"fx";var n=F.queue(e,t),i=n.shift();"inprogress"===i&&(i=n.shift()),i&&("fx"===t&&n.unshift("inprogress"),i.call(e,(function(){F.dequeue(e,t)}))),n.length||(F.removeData(e,t+"queue",!0),r(e,t,"queue"))}}),F.fn.extend({queue:function(e,n){return"string"!=typeof e&&(n=e,e="fx"),n===t?F.queue(this[0],e):this.each((function(){var t=F.queue(this,e,n);"fx"===e&&"inprogress"!==t[0]&&F.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){F.dequeue(this,e)}))},delay:function(e,t){return e=F.fx?F.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(){var n=this;setTimeout((function(){F.dequeue(n,t)}),e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){function i(){--u||a.resolveWith(o,[o])}"string"!=typeof e&&(n=e,e=t),e=e||"fx";for(var r,a=F.Deferred(),o=this,s=o.length,u=1,c=e+"defer",l=e+"queue",d=e+"mark";s--;)(r=F.data(o[s],c,t,!0)||(F.data(o[s],l,t,!0)||F.data(o[s],d,t,!0))&&F.data(o[s],c,F._Deferred(),!0))&&(u++,r.done(i));return i(),a.promise()}});var j,G,H=/[\n\t\r]/g,z=/\s+/,Y=/\r/g,q=/^(?:button|input)$/i,K=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea)?$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;F.fn.extend({attr:function(e,t){return F.access(this,e,t,!0,F.attr)},removeAttr:function(e){return this.each((function(){F.removeAttr(this,e)}))},prop:function(e,t){return F.access(this,e,t,!0,F.prop)},removeProp:function(e){return e=F.propFix[e]||e,this.each((function(){try{this[e]=t,delete this[e]}catch(e){}}))},addClass:function(e){var t,n,i,r,a,o,s;if(F.isFunction(e))return this.each((function(t){F(this).addClass(e.call(this,t,this.className))}));if(e&&"string"==typeof e)for(t=e.split(z),n=0,i=this.length;n<i;n++)if(r=this[n],1===r.nodeType)if(r.className||1!==t.length){for(a=" "+r.className+" ",o=0,s=t.length;o<s;o++)~a.indexOf(" "+t[o]+" ")||(a+=t[o]+" ");r.className=F.trim(a)}else r.className=e;return this},removeClass:function(e){var n,i,r,a,o,s,u;if(F.isFunction(e))return this.each((function(t){F(this).removeClass(e.call(this,t,this.className))}));if(e&&"string"==typeof e||e===t)for(n=(e||"").split(z),i=0,r=this.length;i<r;i++)if(a=this[i],1===a.nodeType&&a.className)if(e){for(o=(" "+a.className+" ").replace(H," "),s=0,u=n.length;s<u;s++)o=o.replace(" "+n[s]+" "," ");a.className=F.trim(o)}else a.className="";return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return F.isFunction(e)?this.each((function(n){F(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var r,a=0,o=F(this),s=t,u=e.split(z);r=u[a++];)s=i?s:!o.hasClass(r),o[s?"addClass":"removeClass"](r);else"undefined"!==n&&"boolean"!==n||(this.className&&F._data(this,"__className__",this.className),this.className=this.className||e===!1?"":F._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(H," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,i,r=this[0];if(!arguments.length)return r?(n=F.valHooks[r.nodeName.toLowerCase()]||F.valHooks[r.type],n&&"get"in n&&(i=n.get(r,"value"))!==t?i:(i=r.value,"string"==typeof i?i.replace(Y,""):null==i?"":i)):t;var a=F.isFunction(e);return this.each((function(i){var r,o=F(this);1===this.nodeType&&(r=a?e.call(this,i,o.val()):e,null==r?r="":"number"==typeof r?r+="":F.isArray(r)&&(r=F.map(r,(function(e){return null==e?"":e+""}))),n=F.valHooks[this.nodeName.toLowerCase()]||F.valHooks[this.type],n&&"set"in n&&n.set(this,r,"value")!==t||(this.value=r))}))}}),F.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n=e.selectedIndex,i=[],r=e.options,a="select-one"===e.type;if(n<0)return null;for(var o=a?n:0,s=a?n+1:r.length;o<s;o++){var u=r[o];if(u.selected&&(F.support.optDisabled?!u.disabled:null===u.getAttribute("disabled"))&&(!u.parentNode.disabled||!F.nodeName(u.parentNode,"optgroup"))){if(t=F(u).val(),a)return t;i.push(t)}}return a&&!i.length&&r.length?F(r[n]).val():i},set:function(e,t){var n=F.makeArray(t);return F(e).find("option").each((function(){this.selected=F.inArray(F(this).val(),n)>=0})),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(e,n,i,r){var a=e.nodeType;if(!e||3===a||8===a||2===a)return t;if(r&&n in F.attrFn)return F(e)[n](i);if(!("getAttribute"in e))return F.prop(e,n,i);var o,s,u=1!==a||!F.isXMLDoc(e);return u&&(n=F.attrFix[n]||n,s=F.attrHooks[n],s||(X.test(n)?s=G:j&&(s=j))),i!==t?null===i?(F.removeAttr(e,n),t):s&&"set"in s&&u&&(o=s.set(e,i,n))!==t?o:(e.setAttribute(n,""+i),i):s&&"get"in s&&u&&null!==(o=s.get(e,n))?o:(o=e.getAttribute(n),null===o?t:o)},removeAttr:function(e,t){var n;1===e.nodeType&&(t=F.attrFix[t]||t,F.attr(e,t,""),e.removeAttribute(t),X.test(t)&&(n=F.propFix[t]||t)in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(q.test(e.nodeName)&&e.parentNode)F.error("type property can't be changed");else if(!F.support.radioValue&&"radio"===t&&F.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&F.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){return j&&F.nodeName(e,"button")?j.set(e,t,n):void(e.value=t)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,i){var r=e.nodeType;if(!e||3===r||8===r||2===r)return t;var a,o,s=1!==r||!F.isXMLDoc(e);return s&&(n=F.propFix[n]||n,o=F.propHooks[n]),i!==t?o&&"set"in o&&(a=o.set(e,i,n))!==t?a:e[n]=i:o&&"get"in o&&null!==(a=o.get(e,n))?a:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):K.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F.attrHooks.tabIndex=F.propHooks.tabIndex,G={get:function(e,n){var i;return F.prop(e,n)===!0||(i=e.getAttributeNode(n))&&i.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var i;return t===!1?F.removeAttr(e,n):(i=F.propFix[n]||n,i in e&&(e[i]=!0),e.setAttribute(n,n.toLowerCase())),n}},F.support.getSetAttribute||(j=F.valHooks.button={get:function(e,n){var i;return i=e.getAttributeNode(n),i&&""!==i.nodeValue?i.nodeValue:t},set:function(e,t,n){var i=e.getAttributeNode(n);return i||(i=L.createAttribute(n),e.setAttributeNode(i)),i.nodeValue=t+""}},F.each(["width","height"],(function(e,t){F.attrHooks[t]=F.extend(F.attrHooks[t],{set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}})}))),F.support.hrefNormalized||F.each(["href","src","width","height"],(function(e,n){F.attrHooks[n]=F.extend(F.attrHooks[n],{get:function(e){var i=e.getAttribute(n,2);return null===i?t:i}})})),F.support.style||(F.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),F.support.optSelected||(F.propHooks.selected=F.extend(F.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),F.support.checkOn||F.each(["radio","checkbox"],(function(){F.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}})),F.each(["radio","checkbox"],(function(){F.valHooks[this]=F.extend(F.valHooks[this],{set:function(e,t){if(F.isArray(t))return e.checked=F.inArray(F(e).val(),t)>=0}})}));var $=/\.(.*)$/,Q=/^(?:textarea|input|select)$/i,J=/\./g,Z=/ /g,ee=/[^\w\s.|`]/g,te=function(e){return e.replace(ee,"\\$&")};F.event={add:function(e,n,i,r){if(3!==e.nodeType&&8!==e.nodeType){if(i===!1)i=a;else if(!i)return;var o,s;i.handler&&(o=i,i=o.handler),i.guid||(i.guid=F.guid++);var u=F._data(e);if(u){var c=u.events,l=u.handle;c||(u.events=c={}),l||(u.handle=l=function(e){return"undefined"==typeof F||e&&F.event.triggered===e.type?t:F.event.handle.apply(l.elem,arguments)}),l.elem=e,n=n.split(" ");for(var d,f,p=0;d=n[p++];){s=o?F.extend({},o):{handler:i,data:r},d.indexOf(".")>-1?(f=d.split("."),d=f.shift(),s.namespace=f.slice(0).sort().join(".")):(f=[],s.namespace=""),s.type=d,s.guid||(s.guid=i.guid);var h=c[d],g=F.event.special[d]||{};h||(h=c[d]=[],g.setup&&g.setup.call(e,r,f,l)!==!1||(e.addEventListener?e.addEventListener(d,l,!1):e.attachEvent&&e.attachEvent("on"+d,l))),g.add&&(g.add.call(e,s),s.handler.guid||(s.handler.guid=i.guid)),h.push(s),F.event.global[d]=!0}e=null}}},global:{},remove:function(e,n,i,r){if(3!==e.nodeType&&8!==e.nodeType){i===!1&&(i=a);var o,s,u,c,l,d,f,p,h,g,v=0,m=F.hasData(e)&&F._data(e),_=m&&m.events;if(m&&_)if(n&&n.type&&(i=n.handler,n=n.type),!n||"string"==typeof n&&"."===n.charAt(0)){n=n||"";for(s in _)F.event.remove(e,s+n)}else{for(n=n.split(" ");s=n[v++];)if(g=s,h=null,c=s.indexOf(".")<0,l=[],c||(l=s.split("."),s=l.shift(),d=new RegExp("(^|\\.)"+F.map(l.slice(0).sort(),te).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=_[s])if(i){for(f=F.event.special[s]||{},u=r||0;u<p.length&&(h=p[u],i.guid!==h.guid||((c||d.test(h.namespace))&&(null==r&&p.splice(u--,1),f.remove&&f.remove.call(e,h)),null==r));u++);(0===p.length||null!=r&&1===p.length)&&(f.teardown&&f.teardown.call(e,l)!==!1||F.removeEvent(e,s,m.handle),o=null,delete _[s])}else for(u=0;u<p.length;u++)h=p[u],(c||d.test(h.namespace))&&(F.event.remove(e,g,h.handler,u),
p.splice(u--,1));if(F.isEmptyObject(_)){var y=m.handle;y&&(y.elem=null),delete m.events,delete m.handle,F.isEmptyObject(m)&&F.removeData(e,t,!0)}}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,i,r,a){var o,s=n.type||n,u=[];if(s.indexOf("!")>=0&&(s=s.slice(0,-1),o=!0),s.indexOf(".")>=0&&(u=s.split("."),s=u.shift(),u.sort()),r&&!F.event.customEvent[s]||F.event.global[s]){if(n="object"==typeof n?n[F.expando]?n:new F.Event(s,n):new F.Event(s),n.type=s,n.exclusive=o,n.namespace=u.join("."),n.namespace_re=new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.)?")+"(\\.|$)"),!a&&r||(n.preventDefault(),n.stopPropagation()),!r)return void F.each(F.cache,(function(){var e=F.expando,t=this[e];t&&t.events&&t.events[s]&&F.event.trigger(n,i,t.handle.elem)}));if(3!==r.nodeType&&8!==r.nodeType){n.result=t,n.target=r,i=null!=i?F.makeArray(i):[],i.unshift(n);var c=r,l=s.indexOf(":")<0?"on"+s:"";do{var d=F._data(c,"handle");n.currentTarget=c,d&&d.apply(c,i),l&&F.acceptData(c)&&c[l]&&c[l].apply(c,i)===!1&&(n.result=!1,n.preventDefault()),c=c.parentNode||c.ownerDocument||c===n.target.ownerDocument&&e}while(c&&!n.isPropagationStopped());if(!n.isDefaultPrevented()){var f,p=F.event.special[s]||{};if((!p._default||p._default.call(r.ownerDocument,n)===!1)&&("click"!==s||!F.nodeName(r,"a"))&&F.acceptData(r)){try{l&&r[s]&&(f=r[l],f&&(r[l]=null),F.event.triggered=s,r[s]())}catch(e){}f&&(r[l]=f),F.event.triggered=t}}return n.result}}},handle:function(n){n=F.event.fix(n||e.event);var i=((F._data(this,"events")||{})[n.type]||[]).slice(0),r=!n.exclusive&&!n.namespace,a=Array.prototype.slice.call(arguments,0);a[0]=n,n.currentTarget=this;for(var o=0,s=i.length;o<s;o++){var u=i[o];if(r||n.namespace_re.test(u.namespace)){n.handler=u.handler,n.data=u.data,n.handleObj=u;var c=u.handler.apply(this,a);if(c!==t&&(n.result=c,c===!1&&(n.preventDefault(),n.stopPropagation())),n.isImmediatePropagationStopped())break}}return n.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(e){if(e[F.expando])return e;var n=e;e=F.Event(n);for(var i,r=this.props.length;r;)i=this.props[--r],e[i]=n[i];if(e.target||(e.target=e.srcElement||L),3===e.target.nodeType&&(e.target=e.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement),null==e.pageX&&null!=e.clientX){var a=e.target.ownerDocument||L,o=a.documentElement,s=a.body;e.pageX=e.clientX+(o&&o.scrollLeft||s&&s.scrollLeft||0)-(o&&o.clientLeft||s&&s.clientLeft||0),e.pageY=e.clientY+(o&&o.scrollTop||s&&s.scrollTop||0)-(o&&o.clientTop||s&&s.clientTop||0)}return null!=e.which||null==e.charCode&&null==e.keyCode||(e.which=null!=e.charCode?e.charCode:e.keyCode),!e.metaKey&&e.ctrlKey&&(e.metaKey=e.ctrlKey),e.which||e.button===t||(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e},guid:1e8,proxy:F.proxy,special:{ready:{setup:F.bindReady,teardown:F.noop},live:{add:function(e){F.event.add(this,c(e.origType,e.selector),F.extend({},e,{handler:u,guid:e.handler.guid}))},remove:function(e){F.event.remove(this,c(e.origType,e.selector),e)}},beforeunload:{setup:function(e,t,n){F.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}}},F.removeEvent=L.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},F.Event=function(e,t){return this.preventDefault?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?o:a):this.type=e,t&&F.extend(this,t),this.timeStamp=F.now(),void(this[F.expando]=!0)):new F.Event(e,t)},F.Event.prototype={preventDefault:function(){this.isDefaultPrevented=o;var e=this.originalEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=o;var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation()},isDefaultPrevented:a,isPropagationStopped:a,isImmediatePropagationStopped:a};var ne=function(e){var t=e.relatedTarget,n=!1,i=e.type;e.type=e.data,t!==this&&(t&&(n=F.contains(this,t)),n||(F.event.handle.apply(this,arguments),e.type=i))},ie=function(e){e.type=e.data,F.event.handle.apply(this,arguments)};if(F.each({mouseenter:"mouseover",mouseleave:"mouseout"},(function(e,t){F.event.special[e]={setup:function(n){F.event.add(this,t,n&&n.selector?ie:ne,e)},teardown:function(e){F.event.remove(this,t,e&&e.selector?ie:ne)}}})),F.support.submitBubbles||(F.event.special.submit={setup:function(e,t){return!F.nodeName(this,"form")&&(F.event.add(this,"click.specialSubmit",(function(e){var t=e.target,n=F.nodeName(t,"input")||F.nodeName(t,"button")?t.type:"";"submit"!==n&&"image"!==n||!F(t).closest("form").length||s("submit",this,arguments)})),void F.event.add(this,"keypress.specialSubmit",(function(e){var t=e.target,n=F.nodeName(t,"input")||F.nodeName(t,"button")?t.type:"";"text"!==n&&"password"!==n||!F(t).closest("form").length||13!==e.keyCode||s("submit",this,arguments)})))},teardown:function(e){F.event.remove(this,".specialSubmit")}}),!F.support.changeBubbles){var re,ae=function(e){var t=F.nodeName(e,"input")?e.type:"",n=e.value;return"radio"===t||"checkbox"===t?n=e.checked:"select-multiple"===t?n=e.selectedIndex>-1?F.map(e.options,(function(e){return e.selected})).join("-"):"":F.nodeName(e,"select")&&(n=e.selectedIndex),n},oe=function(e){var n,i,r=e.target;Q.test(r.nodeName)&&!r.readOnly&&(n=F._data(r,"_change_data"),i=ae(r),"focusout"===e.type&&"radio"===r.type||F._data(r,"_change_data",i),n!==t&&i!==n&&(null!=n||i)&&(e.type="change",e.liveFired=t,F.event.trigger(e,arguments[1],r)))};F.event.special.change={filters:{focusout:oe,beforedeactivate:oe,click:function(e){var t=e.target,n=F.nodeName(t,"input")?t.type:"";("radio"===n||"checkbox"===n||F.nodeName(t,"select"))&&oe.call(this,e)},keydown:function(e){var t=e.target,n=F.nodeName(t,"input")?t.type:"";(13===e.keyCode&&!F.nodeName(t,"textarea")||32===e.keyCode&&("checkbox"===n||"radio"===n)||"select-multiple"===n)&&oe.call(this,e)},beforeactivate:function(e){var t=e.target;F._data(t,"_change_data",ae(t))}},setup:function(e,t){if("file"===this.type)return!1;for(var n in re)F.event.add(this,n+".specialChange",re[n]);return Q.test(this.nodeName)},teardown:function(e){return F.event.remove(this,".specialChange"),Q.test(this.nodeName)}},re=F.event.special.change.filters,re.focus=re.beforeactivate}F.support.focusinBubbles||F.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){var n=F.event.fix(e);n.type=t,n.originalEvent={},F.event.trigger(n,null,n.target),n.isDefaultPrevented()&&e.preventDefault()}var i=0;F.event.special[t]={setup:function(){0===i++&&L.addEventListener(e,n,!0)},teardown:function(){0===--i&&L.removeEventListener(e,n,!0)}}})),F.each(["bind","one"],(function(e,n){F.fn[n]=function(e,i,r){var a;if("object"==typeof e){for(var o in e)this[n](o,i,e[o],r);return this}if(2!==arguments.length&&i!==!1||(r=i,i=t),"one"===n?(a=function(e){return F(this).unbind(e,a),r.apply(this,arguments)},a.guid=r.guid||F.guid++):a=r,"unload"===e&&"one"!==n)this.one(e,i,r);else for(var s=0,u=this.length;s<u;s++)F.event.add(this[s],e,a,i);return this}})),F.fn.extend({unbind:function(e,t){if("object"!=typeof e||e.preventDefault)for(var n=0,i=this.length;n<i;n++)F.event.remove(this[n],e,t);else for(var r in e)this.unbind(r,e[r]);return this},delegate:function(e,t,n,i){return this.live(t,n,i,e)},undelegate:function(e,t,n){return 0===arguments.length?this.unbind("live"):this.die(t,null,n,e)},trigger:function(e,t){return this.each((function(){F.event.trigger(e,t,this)}))},triggerHandler:function(e,t){if(this[0])return F.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||F.guid++,i=0,r=function(n){var r=(F.data(this,"lastToggle"+e.guid)||0)%i;return F.data(this,"lastToggle"+e.guid,r+1),n.preventDefault(),t[r].apply(this,arguments)||!1};for(r.guid=n;i<t.length;)t[i++].guid=n;return this.click(r)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var se={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};F.each(["live","die"],(function(e,n){F.fn[n]=function(e,i,r,o){var s,u,l,d,f=0,p=o||this.selector,h=o?this:F(this.context);if("object"==typeof e&&!e.preventDefault){for(var g in e)h[n](g,i,e[g],p);return this}if("die"===n&&!e&&o&&"."===o.charAt(0))return h.unbind(o),this;for((i===!1||F.isFunction(i))&&(r=i||a,i=t),e=(e||"").split(" ");null!=(s=e[f++]);)if(u=$.exec(s),l="",u&&(l=u[0],s=s.replace($,"")),"hover"!==s)if(d=s,se[s]?(e.push(se[s]+l),s+=l):s=(se[s]||s)+l,"live"===n)for(var v=0,m=h.length;v<m;v++)F.event.add(h[v],"live."+c(s,p),{data:i,selector:p,handler:r,origType:s,origHandler:r,preType:d});else h.unbind("live."+c(s,p),r);else e.push("mouseenter"+l,"mouseleave"+l);return this}})),F.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),(function(e,t){F.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.bind(t,e,n):this.trigger(t)},F.attrFn&&(F.attrFn[t]=!0)})),/*!
	 * Sizzle CSS Selector Engine
	 *  Copyright 2011, The Dojo Foundation
	 *  Released under the MIT, BSD, and GPL Licenses.
	 *  More information: http://sizzlejs.com/
	 */
(function(){function e(e,t,n,i,r,a){for(var o=0,s=i.length;o<s;o++){var u=i[o];if(u){var c=!1;for(u=u[e];u;){if(u.sizcache===n){c=i[u.sizset];break}if(1!==u.nodeType||a||(u.sizcache=n,u.sizset=o),u.nodeName.toLowerCase()===t){c=u;break}u=u[e]}i[o]=c}}}function n(e,t,n,i,r,a){for(var o=0,s=i.length;o<s;o++){var u=i[o];if(u){var c=!1;for(u=u[e];u;){if(u.sizcache===n){c=i[u.sizset];break}if(1===u.nodeType)if(a||(u.sizcache=n,u.sizset=o),"string"!=typeof t){if(u===t){c=!0;break}}else if(l.filter(t,[u]).length>0){c=u;break}u=u[e]}i[o]=c}}}var i=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,r=0,a=Object.prototype.toString,o=!1,s=!0,u=/\\/g,c=/\W/;[0,0].sort((function(){return s=!1,0}));var l=function(e,t,n,r){n=n||[],t=t||L;var o=t;if(1!==t.nodeType&&9!==t.nodeType)return[];if(!e||"string"!=typeof e)return n;var s,u,c,p,h,v,m,y,E=!0,I=l.isXML(t),T=[],S=e;do if(i.exec(""),s=i.exec(S),s&&(S=s[3],T.push(s[1]),s[2])){p=s[3];break}while(s);if(T.length>1&&f.exec(e))if(2===T.length&&d.relative[T[0]])u=_(T[0]+T[1],t);else for(u=d.relative[T[0]]?[t]:l(T.shift(),t);T.length;)e=T.shift(),d.relative[e]&&(e+=T.shift()),u=_(e,u);else if(!r&&T.length>1&&9===t.nodeType&&!I&&d.match.ID.test(T[0])&&!d.match.ID.test(T[T.length-1])&&(h=l.find(T.shift(),t,I),t=h.expr?l.filter(h.expr,h.set)[0]:h.set[0]),t)for(h=r?{expr:T.pop(),set:g(r)}:l.find(T.pop(),1!==T.length||"~"!==T[0]&&"+"!==T[0]||!t.parentNode?t:t.parentNode,I),u=h.expr?l.filter(h.expr,h.set):h.set,T.length>0?c=g(u):E=!1;T.length;)v=T.pop(),m=v,d.relative[v]?m=T.pop():v="",null==m&&(m=t),d.relative[v](c,m,I);else c=T=[];if(c||(c=u),c||l.error(v||e),"[object Array]"===a.call(c))if(E)if(t&&1===t.nodeType)for(y=0;null!=c[y];y++)c[y]&&(c[y]===!0||1===c[y].nodeType&&l.contains(t,c[y]))&&n.push(u[y]);else for(y=0;null!=c[y];y++)c[y]&&1===c[y].nodeType&&n.push(u[y]);else n.push.apply(n,c);else g(c,n);return p&&(l(p,o,n,r),l.uniqueSort(n)),n};l.uniqueSort=function(e){if(v&&(o=s,e.sort(v),o))for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1);return e},l.matches=function(e,t){return l(e,null,null,t)},l.matchesSelector=function(e,t){return l(t,null,null,[e]).length>0},l.find=function(e,t,n){var i;if(!e)return[];for(var r=0,a=d.order.length;r<a;r++){var o,s=d.order[r];if(o=d.leftMatch[s].exec(e)){var c=o[1];if(o.splice(1,1),"\\"!==c.substr(c.length-1)&&(o[1]=(o[1]||"").replace(u,""),i=d.find[s](o,t,n),null!=i)){e=e.replace(d.match[s],"");break}}}return i||(i="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):[]),{set:i,expr:e}},l.filter=function(e,n,i,r){for(var a,o,s=e,u=[],c=n,f=n&&n[0]&&l.isXML(n[0]);e&&n.length;){for(var p in d.filter)if(null!=(a=d.leftMatch[p].exec(e))&&a[2]){var h,g,v=d.filter[p],m=a[1];if(o=!1,a.splice(1,1),"\\"===m.substr(m.length-1))continue;if(c===u&&(u=[]),d.preFilter[p])if(a=d.preFilter[p](a,c,i,u,r,f)){if(a===!0)continue}else o=h=!0;if(a)for(var _=0;null!=(g=c[_]);_++)if(g){h=v(g,a,_,c);var y=r^!!h;i&&null!=h?y?o=!0:c[_]=!1:y&&(u.push(g),o=!0)}if(h!==t){if(i||(c=u),e=e.replace(d.match[p],""),!o)return[];break}}if(e===s){if(null!=o)break;l.error(e)}s=e}return c},l.error=function(e){throw"Syntax error, unrecognized expression: "+e};var d=l.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n="string"==typeof t,i=n&&!c.test(t),r=n&&!i;i&&(t=t.toLowerCase());for(var a,o=0,s=e.length;o<s;o++)if(a=e[o]){for(;(a=a.previousSibling)&&1!==a.nodeType;);e[o]=r||a&&a.nodeName.toLowerCase()===t?a||!1:a===t}r&&l.filter(t,e,!0)},">":function(e,t){var n,i="string"==typeof t,r=0,a=e.length;if(i&&!c.test(t)){for(t=t.toLowerCase();r<a;r++)if(n=e[r]){var o=n.parentNode;e[r]=o.nodeName.toLowerCase()===t&&o}}else{for(;r<a;r++)n=e[r],n&&(e[r]=i?n.parentNode:n.parentNode===t);i&&l.filter(t,e,!0)}},"":function(t,i,a){var o,s=r++,u=n;"string"!=typeof i||c.test(i)||(i=i.toLowerCase(),o=i,u=e),u("parentNode",i,s,t,o,a)},"~":function(t,i,a){var o,s=r++,u=n;"string"!=typeof i||c.test(i)||(i=i.toLowerCase(),o=i,u=e),u("previousSibling",i,s,t,o,a)}},find:{ID:function(e,t,n){if("undefined"!=typeof t.getElementById&&!n){var i=t.getElementById(e[1]);return i&&i.parentNode?[i]:[]}},NAME:function(e,t){if("undefined"!=typeof t.getElementsByName){for(var n=[],i=t.getElementsByName(e[1]),r=0,a=i.length;r<a;r++)i[r].getAttribute("name")===e[1]&&n.push(i[r]);return 0===n.length?null:n}},TAG:function(e,t){if("undefined"!=typeof t.getElementsByTagName)return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,i,r,a){if(e=" "+e[1].replace(u,"")+" ",a)return e;for(var o,s=0;null!=(o=t[s]);s++)o&&(r^(o.className&&(" "+o.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||i.push(o):n&&(t[s]=!1));return!1},ID:function(e){return e[1].replace(u,"")},TAG:function(e,t){return e[1].replace(u,"").toLowerCase()},CHILD:function(e){if("nth"===e[1]){e[2]||l.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===e[2]&&"2n"||"odd"===e[2]&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&l.error(e[0]);return e[0]=r++,e},ATTR:function(e,t,n,i,r,a){var o=e[1]=e[1].replace(u,"");return!a&&d.attrMap[o]&&(e[1]=d.attrMap[o]),e[4]=(e[4]||e[5]||"").replace(u,""),"~="===e[2]&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,r,a){if("not"===e[1]){if(!((i.exec(e[3])||"").length>1||/^\w/.test(e[3]))){var o=l.filter(e[3],t,n,!0^a);return n||r.push.apply(r,o),!1}e[3]=l(e[3],null,null,t)}else if(d.match.POS.test(e[0])||d.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&"hidden"!==e.type},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!l(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){return"text"===e.getAttribute("type")},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||"button"===e.nodeName.toLowerCase()},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,i){return t===i.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,i){var r=t[1],a=d.filters[r];if(a)return a(e,n,t,i);if("contains"===r)return(e.textContent||e.innerText||l.getText([e])||"").indexOf(t[3])>=0;if("not"===r){for(var o=t[3],s=0,u=o.length;s<u;s++)if(o[s]===e)return!1;return!0}l.error(r)},CHILD:function(e,t){var n=t[1],i=e;switch(n){case"only":case"first":for(;i=i.previousSibling;)if(1===i.nodeType)return!1;if("first"===n)return!0;i=e;case"last":for(;i=i.nextSibling;)if(1===i.nodeType)return!1;return!0;case"nth":var r=t[2],a=t[3];if(1===r&&0===a)return!0;var o=t[0],s=e.parentNode;if(s&&(s.sizcache!==o||!e.nodeIndex)){var u=0;for(i=s.firstChild;i;i=i.nextSibling)1===i.nodeType&&(i.nodeIndex=++u);s.sizcache=o}var c=e.nodeIndex-a;return 0===r?0===c:c%r===0&&c/r>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],i=d.attrHandle[n]?d.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n),r=i+"",a=t[2],o=t[4];return null==i?"!="===a:"="===a?r===o:"*="===a?r.indexOf(o)>=0:"~="===a?(" "+r+" ").indexOf(o)>=0:o?"!="===a?r!==o:"^="===a?0===r.indexOf(o):"$="===a?r.substr(r.length-o.length)===o:"|="===a&&(r===o||r.substr(0,o.length+1)===o+"-"):r&&i!==!1},POS:function(e,t,n,i){var r=t[2],a=d.setFilters[r];if(a)return a(e,n,t,i)}}},f=d.match.POS,p=function(e,t){return"\\"+(t-0+1)};for(var h in d.match)d.match[h]=new RegExp(d.match[h].source+/(?![^\[]*\])(?![^\(]*\))/.source),d.leftMatch[h]=new RegExp(/(^(?:.|\r|\n)*?)/.source+d.match[h].source.replace(/\\(\d+)/g,p));var g=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(L.documentElement.childNodes,0)[0].nodeType}catch(e){g=function(e,t){var n=0,i=t||[];if("[object Array]"===a.call(e))Array.prototype.push.apply(i,e);else if("number"==typeof e.length)for(var r=e.length;n<r;n++)i.push(e[n]);else for(;e[n];n++)i.push(e[n]);return i}}var v,m;L.documentElement.compareDocumentPosition?v=function(e,t){return e===t?(o=!0,0):e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t)?-1:1:e.compareDocumentPosition?-1:1}:(v=function(e,t){var n,i,r=[],a=[],s=e.parentNode,u=t.parentNode,c=s;if(e===t)return o=!0,0;if(s===u)return m(e,t);if(!s)return-1;if(!u)return 1;for(;c;)r.unshift(c),c=c.parentNode;for(c=u;c;)a.unshift(c),c=c.parentNode;n=r.length,i=a.length;for(var l=0;l<n&&l<i;l++)if(r[l]!==a[l])return m(r[l],a[l]);return l===n?m(e,a[l],-1):m(r[l],t,1)},m=function(e,t,n){if(e===t)return n;for(var i=e.nextSibling;i;){if(i===t)return-1;i=i.nextSibling}return 1}),l.getText=function(e){for(var t,n="",i=0;e[i];i++)t=e[i],3===t.nodeType||4===t.nodeType?n+=t.nodeValue:8!==t.nodeType&&(n+=l.getText(t.childNodes));return n},(function(){var e=L.createElement("div"),n="script"+(new Date).getTime(),i=L.documentElement;e.innerHTML="<a name='"+n+"'/>",i.insertBefore(e,i.firstChild),L.getElementById(n)&&(d.find.ID=function(e,n,i){if("undefined"!=typeof n.getElementById&&!i){var r=n.getElementById(e[1]);return r?r.id===e[1]||"undefined"!=typeof r.getAttributeNode&&r.getAttributeNode("id").nodeValue===e[1]?[r]:t:[]}},d.filter.ID=function(e,t){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return 1===e.nodeType&&n&&n.nodeValue===t}),i.removeChild(e),i=e=null})(),(function(){var e=L.createElement("div");e.appendChild(L.createComment("")),e.getElementsByTagName("*").length>0&&(d.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if("*"===e[1]){for(var i=[],r=0;n[r];r++)1===n[r].nodeType&&i.push(n[r]);n=i}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href")&&(d.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null})(),L.querySelectorAll&&!(function(){var e=l,t=L.createElement("div"),n="__sizzle__";if(t.innerHTML="<p class='TEST'></p>",!t.querySelectorAll||0!==t.querySelectorAll(".TEST").length){l=function(t,i,r,a){if(i=i||L,!a&&!l.isXML(i)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(o&&(1===i.nodeType||9===i.nodeType)){if(o[1])return g(i.getElementsByTagName(t),r);if(o[2]&&d.find.CLASS&&i.getElementsByClassName)return g(i.getElementsByClassName(o[2]),r)}if(9===i.nodeType){if("body"===t&&i.body)return g([i.body],r);if(o&&o[3]){var s=i.getElementById(o[3]);if(!s||!s.parentNode)return g([],r);if(s.id===o[3])return g([s],r)}try{return g(i.querySelectorAll(t),r)}catch(e){}}else if(1===i.nodeType&&"object"!==i.nodeName.toLowerCase()){var u=i,c=i.getAttribute("id"),f=c||n,p=i.parentNode,h=/^\s*[+~]/.test(t);c?f=f.replace(/'/g,"\\$&"):i.setAttribute("id",f),h&&p&&(i=i.parentNode);try{if(!h||p)return g(i.querySelectorAll("[id='"+f+"'] "+t),r)}catch(e){}finally{c||u.removeAttribute("id")}}}return e(t,i,r,a)};for(var i in e)l[i]=e[i];t=null}})(),(function(){var e=L.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,n=!1;try{t.call(L.documentElement,"[test!='']:sizzle")}catch(e){n=!0}t&&(l.matchesSelector=function(e,i){if(i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!l.isXML(e))try{if(n||!d.match.PSEUDO.test(i)&&!/!=/.test(i))return t.call(e,i)}catch(e){}return l(i,null,null,[e]).length>0})})(),(function(){var e=L.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>",e.getElementsByClassName&&0!==e.getElementsByClassName("e").length&&(e.lastChild.className="e",1!==e.getElementsByClassName("e").length&&(d.order.splice(1,0,"CLASS"),d.find.CLASS=function(e,t,n){if("undefined"!=typeof t.getElementsByClassName&&!n)return t.getElementsByClassName(e[1])},e=null))})(),L.documentElement.contains?l.contains=function(e,t){return e!==t&&(!e.contains||e.contains(t))}:L.documentElement.compareDocumentPosition?l.contains=function(e,t){return!!(16&e.compareDocumentPosition(t))}:l.contains=function(){return!1},l.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return!!t&&"HTML"!==t.nodeName};var _=function(e,t){for(var n,i=[],r="",a=t.nodeType?[t]:t;n=d.match.PSEUDO.exec(e);)r+=n[0],e=e.replace(d.match.PSEUDO,"");e=d.relative[e]?e+"*":e;for(var o=0,s=a.length;o<s;o++)l(e,a[o],i);return l.filter(r,i)};F.find=l,F.expr=l.selectors,F.expr[":"]=F.expr.filters,F.unique=l.uniqueSort,F.text=l.getText,F.isXMLDoc=l.isXML,F.contains=l.contains})();var ue=/Until$/,ce=/^(?:parents|prevUntil|prevAll)/,le=/,/,de=/^.[^:#\[\.,]*$/,fe=Array.prototype.slice,pe=F.expr.match.POS,he={children:!0,contents:!0,next:!0,prev:!0};F.fn.extend({find:function(e){var t,n,i=this;if("string"!=typeof e)return F(e).filter((function(){for(t=0,n=i.length;t<n;t++)if(F.contains(i[t],this))return!0}));var r,a,o,s=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++)if(r=s.length,F.find(e,this[t],s),t>0)for(a=r;a<s.length;a++)for(o=0;o<r;o++)if(s[o]===s[a]){s.splice(a--,1);break}return s},has:function(e){var t=F(e);return this.filter((function(){for(var e=0,n=t.length;e<n;e++)if(F.contains(this,t[e]))return!0}))},not:function(e){return this.pushStack(d(this,e,!1),"not",e)},filter:function(e){return this.pushStack(d(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?F.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,i,r=[],a=this[0];if(F.isArray(e)){var o,s,u={},c=1;if(a&&e.length){for(n=0,i=e.length;n<i;n++)s=e[n],u[s]||(u[s]=pe.test(s)?F(s,t||this.context):s);for(;a&&a.ownerDocument&&a!==t;){for(s in u)o=u[s],(o.jquery?o.index(a)>-1:F(a).is(o))&&r.push({selector:s,elem:a,level:c});a=a.parentNode,c++}}return r}var l=pe.test(e)||"string"!=typeof e?F(e,t||this.context):0;for(n=0,i=this.length;n<i;n++)for(a=this[n];a;){if(l?l.index(a)>-1:F.find.matchesSelector(a,e)){r.push(a);break}if(a=a.parentNode,!a||!a.ownerDocument||a===t||11===a.nodeType)break}return r=r.length>1?F.unique(r):r,this.pushStack(r,"closest",e)},index:function(e){return e?"string"==typeof e?F.inArray(this[0],F(e)):F.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?F(e,t):F.makeArray(e&&e.nodeType?[e]:e),i=F.merge(this.get(),n);return this.pushStack(l(n[0])||l(i[0])?i:F.unique(i))},andSelf:function(){return this.add(this.prevObject)}}),F.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return F.dir(e,"parentNode")},parentsUntil:function(e,t,n){return F.dir(e,"parentNode",n)},next:function(e){return F.nth(e,2,"nextSibling")},prev:function(e){return F.nth(e,2,"previousSibling")},nextAll:function(e){return F.dir(e,"nextSibling")},prevAll:function(e){return F.dir(e,"previousSibling")},nextUntil:function(e,t,n){return F.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return F.dir(e,"previousSibling",n)},siblings:function(e){return F.sibling(e.parentNode.firstChild,e)},children:function(e){return F.sibling(e.firstChild)},contents:function(e){return F.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:F.makeArray(e.childNodes)}},(function(e,t){F.fn[e]=function(n,i){var r=F.map(this,t,n),a=fe.call(arguments);return ue.test(e)||(i=n),i&&"string"==typeof i&&(r=F.filter(i,r)),r=this.length>1&&!he[e]?F.unique(r):r,(this.length>1||le.test(i))&&ce.test(e)&&(r=r.reverse()),this.pushStack(r,e,a.join(","))}})),F.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?F.find.matchesSelector(t[0],e)?[t[0]]:[]:F.find.matches(e,t)},dir:function(e,n,i){for(var r=[],a=e[n];a&&9!==a.nodeType&&(i===t||1!==a.nodeType||!F(a).is(i));)1===a.nodeType&&r.push(a),a=a[n];return r},nth:function(e,t,n,i){t=t||1;for(var r=0;e&&(1!==e.nodeType||++r!==t);e=e[n]);return e},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var ge=/ jQuery\d+="(?:\d+|null)"/g,ve=/^\s+/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_e=/<([\w:]+)/,ye=/<tbody/i,Ee=/<|&#?\w+;/,Ie=/<(?:script|object|embed|option|style)/i,Te=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/\/(java|ecma)script/i,be=/^\s*<!(?:\[CDATA\[|\-\-)/,Ae={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Ae.optgroup=Ae.option,Ae.tbody=Ae.tfoot=Ae.colgroup=Ae.caption=Ae.thead,Ae.th=Ae.td,F.support.htmlSerialize||(Ae._default=[1,"div<div>","</div>"]),F.fn.extend({text:function(e){return F.isFunction(e)?this.each((function(t){var n=F(this);n.text(e.call(this,t,n.text()))})):"object"!=typeof e&&e!==t?this.empty().append((this[0]&&this[0].ownerDocument||L).createTextNode(e)):F.text(this)},wrapAll:function(e){if(F.isFunction(e))return this.each((function(t){F(this).wrapAll(e.call(this,t))}));if(this[0]){var t=F(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return F.isFunction(e)?this.each((function(t){F(this).wrapInner(e.call(this,t))})):this.each((function(){var t=F(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){return this.each((function(){F(this).wrapAll(e)}))},unwrap:function(){return this.parent().each((function(){F.nodeName(this,"body")||F(this).replaceWith(this.childNodes)})).end()},append:function(){return this.domManip(arguments,!0,(function(e){1===this.nodeType&&this.appendChild(e)}))},prepend:function(){return this.domManip(arguments,!0,(function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)}))},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,(function(e){this.parentNode.insertBefore(e,this)}));if(arguments.length){var e=F(arguments[0]);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,(function(e){this.parentNode.insertBefore(e,this.nextSibling)}));if(arguments.length){var e=this.pushStack(this,"after",arguments);return e.push.apply(e,F(arguments[0]).toArray()),e}},remove:function(e,t){for(var n,i=0;null!=(n=this[i]);i++)e&&!F.filter(e,[n]).length||(t||1!==n.nodeType||(F.cleanData(n.getElementsByTagName("*")),F.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&F.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return F.clone(this,e,t)}))},html:function(e){if(e===t)return this[0]&&1===this[0].nodeType?this[0].innerHTML.replace(ge,""):null;if("string"!=typeof e||Ie.test(e)||!F.support.leadingWhitespace&&ve.test(e)||Ae[(_e.exec(e)||["",""])[1].toLowerCase()])F.isFunction(e)?this.each((function(t){var n=F(this);n.html(e.call(this,t,n.html()))})):this.empty().append(e);else{e=e.replace(me,"<$1></$2>");try{for(var n=0,i=this.length;n<i;n++)1===this[n].nodeType&&(F.cleanData(this[n].getElementsByTagName("*")),this[n].innerHTML=e)}catch(t){this.empty().append(e)}}return this},replaceWith:function(e){return this[0]&&this[0].parentNode?F.isFunction(e)?this.each((function(t){var n=F(this),i=n.html();n.replaceWith(e.call(this,t,i))})):("string"!=typeof e&&(e=F(e).detach()),this.each((function(){var t=this.nextSibling,n=this.parentNode;F(this).remove(),t?F(t).before(e):F(n).append(e)}))):this.length?this.pushStack(F(F.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,i){var r,a,o,s,u=e[0],c=[];if(!F.support.checkClone&&3===arguments.length&&"string"==typeof u&&Te.test(u))return this.each((function(){F(this).domManip(e,n,i,!0)}));if(F.isFunction(u))return this.each((function(r){var a=F(this);e[0]=u.call(this,r,n?a.html():t),a.domManip(e,n,i)}));if(this[0]){if(s=u&&u.parentNode,r=F.support.parentNode&&s&&11===s.nodeType&&s.childNodes.length===this.length?{fragment:s}:F.buildFragment(e,this,c),o=r.fragment,a=1===o.childNodes.length?o=o.firstChild:o.firstChild){n=n&&F.nodeName(a,"tr");for(var l=0,d=this.length,p=d-1;l<d;l++)i.call(n?f(this[l],a):this[l],r.cacheable||d>1&&l<p?F.clone(o,!0,!0):o)}c.length&&F.each(c,_)}return this}}),F.buildFragment=function(e,t,n){var i,r,a,o;return t&&t[0]&&(o=t[0].ownerDocument||t[0]),o.createDocumentFragment||(o=L),1===e.length&&"string"==typeof e[0]&&e[0].length<512&&o===L&&"<"===e[0].charAt(0)&&!Ie.test(e[0])&&(F.support.checkClone||!Te.test(e[0]))&&(r=!0,a=F.fragments[e[0]],a&&1!==a&&(i=a)),i||(i=o.createDocumentFragment(),F.clean(e,o,i,n)),r&&(F.fragments[e[0]]=a?i:1),{fragment:i,cacheable:r}},F.fragments={},F.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){F.fn[e]=function(n){var i=[],r=F(n),a=1===this.length&&this[0].parentNode;if(a&&11===a.nodeType&&1===a.childNodes.length&&1===r.length)return r[t](this[0]),this;for(var o=0,s=r.length;o<s;o++){var u=(o>0?this.clone(!0):this).get();F(r[o])[t](u),i=i.concat(u)}return this.pushStack(i,e,r.selector)}})),F.extend({clone:function(e,t,n){var i,r,a,o=e.cloneNode(!0);if(!(F.support.noCloneEvent&&F.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||F.isXMLDoc(e)))for(h(e,o),i=g(e),r=g(o),a=0;i[a];++a)r[a]&&h(i[a],r[a]);if(t&&(p(e,o),n))for(i=g(e),r=g(o),a=0;i[a];++a)p(i[a],r[a]);return i=r=null,o},clean:function(e,t,n,i){var r;t=t||L,"undefined"==typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||L);for(var a,o,s=[],u=0;null!=(o=e[u]);u++)if("number"==typeof o&&(o+=""),o){if("string"==typeof o)if(Ee.test(o)){o=o.replace(me,"<$1></$2>");var c=(_e.exec(o)||["",""])[1].toLowerCase(),l=Ae[c]||Ae._default,d=l[0],f=t.createElement("div");for(f.innerHTML=l[1]+o+l[2];d--;)f=f.lastChild;if(!F.support.tbody){var p=ye.test(o),h="table"!==c||p?"<table>"!==l[1]||p?[]:f.childNodes:f.firstChild&&f.firstChild.childNodes;for(a=h.length-1;a>=0;--a)F.nodeName(h[a],"tbody")&&!h[a].childNodes.length&&h[a].parentNode.removeChild(h[a])}!F.support.leadingWhitespace&&ve.test(o)&&f.insertBefore(t.createTextNode(ve.exec(o)[0]),f.firstChild),o=f.childNodes}else o=t.createTextNode(o);var g;if(!F.support.appendChecked)if(o[0]&&"number"==typeof(g=o.length))for(a=0;a<g;a++)m(o[a]);else m(o);o.nodeType?s.push(o):s=F.merge(s,o)}if(n)for(r=function(e){return!e.type||Se.test(e.type)},u=0;s[u];u++)if(!i||!F.nodeName(s[u],"script")||s[u].type&&"text/javascript"!==s[u].type.toLowerCase()){if(1===s[u].nodeType){var v=F.grep(s[u].getElementsByTagName("script"),r);s.splice.apply(s,[u+1,0].concat(v))}n.appendChild(s[u])}else i.push(s[u].parentNode?s[u].parentNode.removeChild(s[u]):s[u]);return s},cleanData:function(e){for(var t,n,i,r=F.cache,a=F.expando,o=F.event.special,s=F.support.deleteExpando,u=0;null!=(i=e[u]);u++)if((!i.nodeName||!F.noData[i.nodeName.toLowerCase()])&&(n=i[F.expando])){if(t=r[n]&&r[n][a],t&&t.events){for(var c in t.events)o[c]?F.event.remove(i,c):F.removeEvent(i,c,t.handle);t.handle&&(t.handle.elem=null)}s?delete i[F.expando]:i.removeAttribute&&i.removeAttribute(F.expando),delete r[n]}}});var we,De,Re,Ne=/alpha\([^)]*\)/i,Oe=/opacity=([^)]*)/,xe=/([A-Z]|^ms)/g,Ce=/^-?\d+(?:px)?$/i,Le=/^-?\d/,Pe=/^([\-+])=([\-+.\de]+)/,ke={position:"absolute",visibility:"hidden",display:"block"},Fe=["Left","Right"],Ve=["Top","Bottom"];F.fn.css=function(e,n){return 2===arguments.length&&n===t?this:F.access(this,e,n,!0,(function(e,n,i){return i!==t?F.style(e,n,i):F.css(e,n)}))},F.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=we(e,"opacity","opacity");return""===n?"1":n}return e.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":F.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,i,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var a,o,s=F.camelCase(n),u=e.style,c=F.cssHooks[s];if(n=F.cssProps[s]||s,i===t)return c&&"get"in c&&(a=c.get(e,!1,r))!==t?a:u[n];if(o=typeof i,"string"===o&&(a=Pe.exec(i))&&(i=+(a[1]+1)*+a[2]+parseFloat(F.css(e,n)),o="number"),!(null==i||"number"===o&&isNaN(i)||("number"!==o||F.cssNumber[s]||(i+="px"),c&&"set"in c&&(i=c.set(e,i))===t)))try{u[n]=i}catch(e){}}},css:function(e,n,i){var r,a;return n=F.camelCase(n),a=F.cssHooks[n],n=F.cssProps[n]||n,"cssFloat"===n&&(n="float"),a&&"get"in a&&(r=a.get(e,!0,i))!==t?r:we?we(e,n):void 0},swap:function(e,t,n){var i={};for(var r in t)i[r]=e.style[r],e.style[r]=t[r];n.call(e);for(r in t)e.style[r]=i[r]}}),F.curCSS=F.css,F.each(["height","width"],(function(e,t){F.cssHooks[t]={get:function(e,n,i){var r;if(n)return 0!==e.offsetWidth?y(e,t,i):(F.swap(e,ke,(function(){r=y(e,t,i)})),r)},set:function(e,t){return Ce.test(t)?(t=parseFloat(t),t>=0?t+"px":void 0):t}}})),F.support.opacity||(F.cssHooks.opacity={get:function(e,t){return Oe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=F.isNaN(t)?"":"alpha(opacity="+100*t+")",a=i&&i.filter||n.filter||"";n.zoom=1,t>=1&&""===F.trim(a.replace(Ne,""))&&(n.removeAttribute("filter"),i&&!i.filter)||(n.filter=Ne.test(a)?a.replace(Ne,r):a+" "+r)}}),F((function(){F.support.reliableMarginRight||(F.cssHooks.marginRight={get:function(e,t){var n;return F.swap(e,{display:"inline-block"},(function(){n=t?we(e,"margin-right","marginRight"):e.style.marginRight})),n}})})),L.defaultView&&L.defaultView.getComputedStyle&&(De=function(e,n){var i,r,a;return n=n.replace(xe,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)?((a=r.getComputedStyle(e,null))&&(i=a.getPropertyValue(n),""!==i||F.contains(e.ownerDocument.documentElement,e)||(i=F.style(e,n))),i):t}),L.documentElement.currentStyle&&(Re=function(e,t){var n,i=e.currentStyle&&e.currentStyle[t],r=e.runtimeStyle&&e.runtimeStyle[t],a=e.style;return!Ce.test(i)&&Le.test(i)&&(n=a.left,r&&(e.runtimeStyle.left=e.currentStyle.left),a.left="fontSize"===t?"1em":i||0,i=a.pixelLeft+"px",a.left=n,r&&(e.runtimeStyle.left=r)),""===i?"auto":i}),we=De||Re,F.expr&&F.expr.filters&&(F.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return 0===t&&0===n||!F.support.reliableHiddenOffsets&&"none"===(e.style.display||F.css(e,"display"))},F.expr.filters.visible=function(e){return!F.expr.filters.hidden(e)});var Me,Ue,Be=/%20/g,je=/\[\]$/,Ge=/\r?\n/g,He=/#.*$/,ze=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ye=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qe=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Ke=/^(?:GET|HEAD)$/,We=/^\/\//,Xe=/\?/,$e=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Qe=/^(?:select|textarea)/i,Je=/\s+/,Ze=/([?&])_=[^&]*/,et=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,tt=F.fn.load,nt={},it={},rt=["*/"]+["*"];try{Me=k.href}catch(e){Me=L.createElement("a"),Me.href="",Me=Me.href}Ue=et.exec(Me.toLowerCase())||[],F.fn.extend({load:function(e,n,i){if("string"!=typeof e&&tt)return tt.apply(this,arguments);if(!this.length)return this;var r=e.indexOf(" ");if(r>=0){var a=e.slice(r,e.length);e=e.slice(0,r)}var o="GET";n&&(F.isFunction(n)?(i=n,n=t):"object"==typeof n&&(n=F.param(n,F.ajaxSettings.traditional),o="POST"));var s=this;return F.ajax({url:e,type:o,dataType:"html",data:n,complete:function(e,t,n){n=e.responseText,e.isResolved()&&(e.done((function(e){n=e})),s.html(a?F("<div>").append(n.replace($e,"")).find(a):n)),i&&s.each(i,[n,t,e])}}),this},serialize:function(){return F.param(this.serializeArray())},serializeArray:function(){return this.map((function(){return this.elements?F.makeArray(this.elements):this})).filter((function(){return this.name&&!this.disabled&&(this.checked||Qe.test(this.nodeName)||Ye.test(this.type))})).map((function(e,t){var n=F(this).val();return null==n?null:F.isArray(n)?F.map(n,(function(e,n){return{name:t.name,value:e.replace(Ge,"\r\n")}})):{name:t.name,value:n.replace(Ge,"\r\n")}})).get()}}),F.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),(function(e,t){F.fn[t]=function(e){return this.bind(t,e)}})),F.each(["get","post"],(function(e,n){F[n]=function(e,i,r,a){return F.isFunction(i)&&(a=a||r,r=i,i=t),F.ajax({type:n,url:e,data:i,success:r,dataType:a})}})),F.extend({getScript:function(e,n){return F.get(e,t,n,"script")},getJSON:function(e,t,n){return F.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?T(e,F.ajaxSettings):(t=e,e=F.ajaxSettings),T(e,t),e},ajaxSettings:{url:Me,isLocal:qe.test(Ue[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":rt},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":F.parseJSON,"text xml":F.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:E(nt),ajaxTransport:E(it),ajax:function(e,n){function i(e,n,i,o){if(2!==E){E=2,u&&clearTimeout(u),s=t,a=o||"",T.readyState=e>0?4:0;var c,d,_,y,I,S=n,w=i?b(f,T,i):t;if(e>=200&&e<300||304===e)if(f.ifModified&&((y=T.getResponseHeader("Last-Modified"))&&(F.lastModified[r]=y),(I=T.getResponseHeader("Etag"))&&(F.etag[r]=I)),304===e)S="notmodified",c=!0;else try{d=A(f,w),S="success",c=!0}catch(e){S="parsererror",_=e}else _=S,S&&!e||(S="error",e<0&&(e=0));T.status=e,T.statusText=""+(n||S),c?g.resolveWith(p,[d,S,T]):g.rejectWith(p,[T,S,_]),T.statusCode(m),m=t,l&&h.trigger("ajax"+(c?"Success":"Error"),[T,f,c?d:_]),v.resolveWith(p,[T,S]),l&&(h.trigger("ajaxComplete",[T,f]),--F.active||F.event.trigger("ajaxStop"))}}"object"==typeof e&&(n=e,e=t),n=n||{};var r,a,o,s,u,c,l,d,f=F.ajaxSetup({},n),p=f.context||f,h=p!==f&&(p.nodeType||p instanceof F)?F(p):F.event,g=F.Deferred(),v=F._Deferred(),m=f.statusCode||{},_={},y={},E=0,T={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=y[n]=y[n]||e,_[e]=t}return this},getAllResponseHeaders:function(){return 2===E?a:null},getResponseHeader:function(e){var n;if(2===E){if(!o)for(o={};n=ze.exec(a);)o[n[1].toLowerCase()]=n[2];n=o[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(f.mimeType=e),
this},abort:function(e){return e=e||"abort",s&&s.abort(e),i(0,e),this}};if(g.promise(T),T.success=T.done,T.error=T.fail,T.complete=v.done,T.statusCode=function(e){if(e){var t;if(E<2)for(t in e)m[t]=[m[t],e[t]];else t=e[T.status],T.then(t,t)}return this},f.url=((e||f.url)+"").replace(He,"").replace(We,Ue[1]+"//"),f.dataTypes=F.trim(f.dataType||"*").toLowerCase().split(Je),null==f.crossDomain&&(c=et.exec(f.url.toLowerCase()),f.crossDomain=!(!c||c[1]==Ue[1]&&c[2]==Ue[2]&&(c[3]||("http:"===c[1]?80:443))==(Ue[3]||("http:"===Ue[1]?80:443)))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=F.param(f.data,f.traditional)),I(nt,f,n,T),2===E)return!1;if(l=f.global,f.type=f.type.toUpperCase(),f.hasContent=!Ke.test(f.type),l&&0===F.active++&&F.event.trigger("ajaxStart"),!f.hasContent&&(f.data&&(f.url+=(Xe.test(f.url)?"&":"?")+f.data,delete f.data),r=f.url,f.cache===!1)){var S=F.now(),w=f.url.replace(Ze,"$1_="+S);f.url=w+(w===f.url?(Xe.test(f.url)?"&":"?")+"_="+S:"")}(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),f.ifModified&&(r=r||f.url,F.lastModified[r]&&T.setRequestHeader("If-Modified-Since",F.lastModified[r]),F.etag[r]&&T.setRequestHeader("If-None-Match",F.etag[r])),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+rt+"; q=0.01":""):f.accepts["*"]);for(d in f.headers)T.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(f.beforeSend.call(p,T,f)===!1||2===E))return T.abort(),!1;for(d in{success:1,error:1,complete:1})T[d](f[d]);if(s=I(it,f,n,T)){T.readyState=1,l&&h.trigger("ajaxSend",[T,f]),f.async&&f.timeout>0&&(u=setTimeout((function(){T.abort("timeout")}),f.timeout));try{E=1,s.send(_,i)}catch(e){E<2?i(-1,e):F.error(e)}}else i(-1,"No Transport");return T},param:function(e,n){var i=[],r=function(e,t){t=F.isFunction(t)?t():t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=F.ajaxSettings.traditional),F.isArray(e)||e.jquery&&!F.isPlainObject(e))F.each(e,(function(){r(this.name,this.value)}));else for(var a in e)S(a,e[a],n,r);return i.join("&").replace(Be,"+")}}),F.extend({active:0,lastModified:{},etag:{}});var at=F.now(),ot=/(\=)\?(&|$)|\?\?/i;F.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return F.expando+"_"+at++}}),F.ajaxPrefilter("json jsonp",(function(t,n,i){var r="application/x-www-form-urlencoded"===t.contentType&&"string"==typeof t.data;if("jsonp"===t.dataTypes[0]||t.jsonp!==!1&&(ot.test(t.url)||r&&ot.test(t.data))){var a,o=t.jsonpCallback=F.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s=e[o],u=t.url,c=t.data,l="$1"+o+"$2";return t.jsonp!==!1&&(u=u.replace(ot,l),t.url===u&&(r&&(c=c.replace(ot,l)),t.data===c&&(u+=(/\?/.test(u)?"&":"?")+t.jsonp+"="+o))),t.url=u,t.data=c,e[o]=function(e){a=[e]},i.always((function(){e[o]=s,a&&F.isFunction(s)&&e[o](a[0])})),t.converters["script json"]=function(){return a||F.error(o+" was not called"),a[0]},t.dataTypes[0]="json","script"}})),F.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return F.globalEval(e),e}}}),F.ajaxPrefilter("script",(function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)})),F.ajaxTransport("script",(function(e){if(e.crossDomain){var n,i=L.head||L.getElementsByTagName("head")[0]||L.documentElement;return{send:function(r,a){n=L.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,r){(r||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),n=t,r||a(200,"success"))},i.insertBefore(n,i.firstChild)},abort:function(){n&&n.onload(0,1)}}}}));var st,ut=!!e.ActiveXObject&&function(){for(var e in st)st[e](0,1)},ct=0;F.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&w()||D()}:w,(function(e){F.extend(F.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})})(F.ajaxSettings.xhr()),F.support.ajax&&F.ajaxTransport((function(n){if(!n.crossDomain||F.support.cors){var i;return{send:function(r,a){var o,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");try{for(s in r)u.setRequestHeader(s,r[s])}catch(e){}u.send(n.hasContent&&n.data||null),i=function(e,r){var s,c,l,d,f;try{if(i&&(r||4===u.readyState))if(i=t,o&&(u.onreadystatechange=F.noop,ut&&delete st[o]),r)4!==u.readyState&&u.abort();else{s=u.status,l=u.getAllResponseHeaders(),d={},f=u.responseXML,f&&f.documentElement&&(d.xml=f),d.text=u.responseText;try{c=u.statusText}catch(e){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=d.text?200:404}}catch(e){r||a(-1,e)}d&&a(s,c,d,l)},n.async&&4!==u.readyState?(o=++ct,ut&&(st||(st={},F(e).unload(ut)),st[o]=i),u.onreadystatechange=i):i()},abort:function(){i&&i(0,1)}}}}));var lt,dt,ft,pt,ht={},gt=/^(?:toggle|show|hide)$/,vt=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,mt=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];F.fn.extend({show:function(e,t,n){var i,r;if(e||0===e)return this.animate(O("show",3),e,t,n);for(var a=0,o=this.length;a<o;a++)i=this[a],i.style&&(r=i.style.display,F._data(i,"olddisplay")||"none"!==r||(r=i.style.display=""),""===r&&"none"===F.css(i,"display")&&F._data(i,"olddisplay",x(i.nodeName)));for(a=0;a<o;a++)i=this[a],i.style&&(r=i.style.display,""!==r&&"none"!==r||(i.style.display=F._data(i,"olddisplay")||""));return this},hide:function(e,t,n){if(e||0===e)return this.animate(O("hide",3),e,t,n);for(var i=0,r=this.length;i<r;i++)if(this[i].style){var a=F.css(this[i],"display");"none"===a||F._data(this[i],"olddisplay")||F._data(this[i],"olddisplay",a)}for(i=0;i<r;i++)this[i].style&&(this[i].style.display="none");return this},_toggle:F.fn.toggle,toggle:function(e,t,n){var i="boolean"==typeof e;return F.isFunction(e)&&F.isFunction(t)?this._toggle.apply(this,arguments):null==e||i?this.each((function(){var t=i?e:F(this).is(":hidden");F(this)[t?"show":"hide"]()})):this.animate(O("toggle",3),e,t,n),this},fadeTo:function(e,t,n,i){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=F.speed(t,n,i);return F.isEmptyObject(e)?this.each(r.complete,[!1]):(e=F.extend({},e),this[r.queue===!1?"each":"queue"]((function(){r.queue===!1&&F._mark(this);var t,n,i,a,o,s,u,c,l,d=F.extend({},r),f=1===this.nodeType,p=f&&F(this).is(":hidden");d.animatedProperties={};for(i in e){if(t=F.camelCase(i),i!==t&&(e[t]=e[i],delete e[i]),n=e[t],F.isArray(n)?(d.animatedProperties[t]=n[1],n=e[t]=n[0]):d.animatedProperties[t]=d.specialEasing&&d.specialEasing[t]||d.easing||"swing","hide"===n&&p||"show"===n&&!p)return d.complete.call(this);!f||"height"!==t&&"width"!==t||(d.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===F.css(this,"display")&&"none"===F.css(this,"float")&&(F.support.inlineBlockNeedsLayout?(a=x(this.nodeName),"inline"===a?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}null!=d.overflow&&(this.style.overflow="hidden");for(i in e)o=new F.fx(this,d,i),n=e[i],gt.test(n)?o["toggle"===n?p?"show":"hide":n]():(s=vt.exec(n),u=o.cur(),s?(c=parseFloat(s[2]),l=s[3]||(F.cssNumber[i]?"":"px"),"px"!==l&&(F.style(this,i,(c||1)+l),u=(c||1)/o.cur()*u,F.style(this,i,u+l)),s[1]&&(c=("-="===s[1]?-1:1)*c+u),o.custom(u,c,l)):o.custom(u,n,""));return!0})))},stop:function(e,t){return e&&this.queue([]),this.each((function(){var e=F.timers,n=e.length;for(t||F._unmark(!0,this);n--;)e[n].elem===this&&(t&&e[n](!0),e.splice(n,1))})),t||this.dequeue(),this}}),F.each({slideDown:O("show",1),slideUp:O("hide",1),slideToggle:O("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){F.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),F.extend({speed:function(e,t,n){var i=e&&"object"==typeof e?F.extend({},e):{complete:n||!n&&t||F.isFunction(e)&&e,duration:e,easing:n&&t||t&&!F.isFunction(t)&&t};return i.duration=F.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in F.fx.speeds?F.fx.speeds[i.duration]:F.fx.speeds._default,i.old=i.complete,i.complete=function(e){F.isFunction(i.old)&&i.old.call(this),i.queue!==!1?F.dequeue(this):e!==!1&&F._unmark(this)},i},easing:{linear:function(e,t,n,i){return n+i*e},swing:function(e,t,n,i){return(-Math.cos(e*Math.PI)/2+.5)*i+n}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),F.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(F.fx.step[this.prop]||F.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var e,t=F.css(this.elem,this.prop);return isNaN(e=parseFloat(t))?t&&"auto"!==t?t:0:e},custom:function(e,t,n){function i(e){return r.step(e)}var r=this,a=F.fx;this.startTime=pt||R(),this.start=e,this.end=t,this.unit=n||this.unit||(F.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,i.elem=this.elem,i()&&F.timers.push(i)&&!ft&&(ft=setInterval(a.tick,a.interval))},show:function(){this.options.orig[this.prop]=F.style(this.elem,this.prop),this.options.show=!0,this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),F(this.elem).show()},hide:function(){this.options.orig[this.prop]=F.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t,n,i=pt||R(),r=!0,a=this.elem,o=this.options;if(e||i>=o.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),o.animatedProperties[this.prop]=!0;for(t in o.animatedProperties)o.animatedProperties[t]!==!0&&(r=!1);if(r){if(null==o.overflow||F.support.shrinkWrapBlocks||F.each(["","X","Y"],(function(e,t){a.style["overflow"+t]=o.overflow[e]})),o.hide&&F(a).hide(),o.hide||o.show)for(var s in o.animatedProperties)F.style(a,s,o.orig[s]);o.complete.call(a)}return!1}return o.duration==1/0?this.now=i:(n=i-this.startTime,this.state=n/o.duration,this.pos=F.easing[o.animatedProperties[this.prop]](this.state,n,0,1,o.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},F.extend(F.fx,{tick:function(){for(var e=F.timers,t=0;t<e.length;++t)e[t]()||e.splice(t--,1);e.length||F.fx.stop()},interval:13,stop:function(){clearInterval(ft),ft=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){F.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=("width"===e.prop||"height"===e.prop?Math.max(0,e.now):e.now)+e.unit:e.elem[e.prop]=e.now}}}),F.expr&&F.expr.filters&&(F.expr.filters.animated=function(e){return F.grep(F.timers,(function(t){return e===t.elem})).length});var _t=/^t(?:able|d|h)$/i,yt=/^(?:body|html)$/i;return"getBoundingClientRect"in L.documentElement?F.fn.offset=function(e){var t,n=this[0];if(e)return this.each((function(t){F.offset.setOffset(this,e,t)}));if(!n||!n.ownerDocument)return null;if(n===n.ownerDocument.body)return F.offset.bodyOffset(n);try{t=n.getBoundingClientRect()}catch(e){}var i=n.ownerDocument,r=i.documentElement;if(!t||!F.contains(r,n))return t?{top:t.top,left:t.left}:{top:0,left:0};var a=i.body,o=C(i),s=r.clientTop||a.clientTop||0,u=r.clientLeft||a.clientLeft||0,c=o.pageYOffset||F.support.boxModel&&r.scrollTop||a.scrollTop,l=o.pageXOffset||F.support.boxModel&&r.scrollLeft||a.scrollLeft,d=t.top+c-s,f=t.left+l-u;return{top:d,left:f}}:F.fn.offset=function(e){var t=this[0];if(e)return this.each((function(t){F.offset.setOffset(this,e,t)}));if(!t||!t.ownerDocument)return null;if(t===t.ownerDocument.body)return F.offset.bodyOffset(t);F.offset.initialize();for(var n,i=t.offsetParent,r=t,a=t.ownerDocument,o=a.documentElement,s=a.body,u=a.defaultView,c=u?u.getComputedStyle(t,null):t.currentStyle,l=t.offsetTop,d=t.offsetLeft;(t=t.parentNode)&&t!==s&&t!==o&&(!F.offset.supportsFixedPosition||"fixed"!==c.position);)n=u?u.getComputedStyle(t,null):t.currentStyle,l-=t.scrollTop,d-=t.scrollLeft,t===i&&(l+=t.offsetTop,d+=t.offsetLeft,!F.offset.doesNotAddBorder||F.offset.doesAddBorderForTableAndCells&&_t.test(t.nodeName)||(l+=parseFloat(n.borderTopWidth)||0,d+=parseFloat(n.borderLeftWidth)||0),r=i,i=t.offsetParent),F.offset.subtractsBorderForOverflowNotVisible&&"visible"!==n.overflow&&(l+=parseFloat(n.borderTopWidth)||0,d+=parseFloat(n.borderLeftWidth)||0),c=n;return"relative"!==c.position&&"static"!==c.position||(l+=s.offsetTop,d+=s.offsetLeft),F.offset.supportsFixedPosition&&"fixed"===c.position&&(l+=Math.max(o.scrollTop,s.scrollTop),d+=Math.max(o.scrollLeft,s.scrollLeft)),{top:l,left:d}},F.offset={initialize:function(){var e,t,n,i=L.body,r=L.createElement("div"),a=parseFloat(F.css(i,"marginTop"))||0,o="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";F.extend(r.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),r.innerHTML=o,i.insertBefore(r,i.firstChild),e=r.firstChild,t=e.firstChild,n=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=5!==t.offsetTop,this.doesAddBorderForTableAndCells=5===n.offsetTop,t.style.position="fixed",t.style.top="20px",this.supportsFixedPosition=20===t.offsetTop||15===t.offsetTop,t.style.position=t.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=t.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=i.offsetTop!==a,i.removeChild(r),F.offset.initialize=F.noop},bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return F.offset.initialize(),F.offset.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(F.css(e,"marginTop"))||0,n+=parseFloat(F.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var i=F.css(e,"position");"static"===i&&(e.style.position="relative");var r,a,o=F(e),s=o.offset(),u=F.css(e,"top"),c=F.css(e,"left"),l=("absolute"===i||"fixed"===i)&&F.inArray("auto",[u,c])>-1,d={},f={};l?(f=o.position(),r=f.top,a=f.left):(r=parseFloat(u)||0,a=parseFloat(c)||0),F.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(d.top=t.top-s.top+r),null!=t.left&&(d.left=t.left-s.left+a),"using"in t?t.using.call(e,d):o.css(d)}},F.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),i=yt.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(F.css(e,"marginTop"))||0,n.left-=parseFloat(F.css(e,"marginLeft"))||0,i.top+=parseFloat(F.css(t[0],"borderTopWidth"))||0,i.left+=parseFloat(F.css(t[0],"borderLeftWidth"))||0,{top:n.top-i.top,left:n.left-i.left}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent||L.body;e&&!yt.test(e.nodeName)&&"static"===F.css(e,"position");)e=e.offsetParent;return e}))}}),F.each(["Left","Top"],(function(e,n){var i="scroll"+n;F.fn[i]=function(n){var r,a;return n===t?(r=this[0])?(a=C(r),a?"pageXOffset"in a?a[e?"pageYOffset":"pageXOffset"]:F.support.boxModel&&a.document.documentElement[i]||a.document.body[i]:r[i]):null:this.each((function(){a=C(this),a?a.scrollTo(e?F(a).scrollLeft():n,e?n:F(a).scrollTop()):this[i]=n}))}})),F.each(["Height","Width"],(function(e,n){var i=n.toLowerCase();F.fn["inner"+n]=function(){var e=this[0];return e&&e.style?parseFloat(F.css(e,i,"padding")):null},F.fn["outer"+n]=function(e){var t=this[0];return t&&t.style?parseFloat(F.css(t,i,e?"margin":"border")):null},F.fn[i]=function(e){var r=this[0];if(!r)return null==e?null:this;if(F.isFunction(e))return this.each((function(t){var n=F(this);n[i](e.call(this,t,n[i]()))}));if(F.isWindow(r)){var a=r.document.documentElement["client"+n],o=r.document.body;return"CSS1Compat"===r.document.compatMode&&a||o&&o["client"+n]||a}if(9===r.nodeType)return Math.max(r.documentElement["client"+n],r.body["scroll"+n],r.documentElement["scroll"+n],r.body["offset"+n],r.documentElement["offset"+n]);if(e===t){var s=F.css(r,i),u=parseFloat(s);return F.isNaN(u)?s:u}return this.css(i,"string"==typeof e?e:e+"px")}})),F})(window);n.noConflict(!0),e.exports=n}),(function(e,t,n){function i(){var e=Boolean(_.result(window.optimizely,"initialized"));T.dispatch(E.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){var e=D.getUserAgent()||"";if(!_.isString(e))return void y.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(_.includes(e,t))return y.warn("Directive / Matches bot:",t),!0};_.some(t,n)&&(y.log("Directive / Disabling tracking"),T.dispatch(E.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function a(){var e=S.get(b.COOKIES.OPT_OUT),n=N.getQueryParamValue(O.OPT_OUT);e?n===e||"true"!==n&&"false"!==n?T.dispatch(E.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):t.setOptOut("true"===n):"true"===n&&t.setOptOut(!0)}function o(){var e=!1,t=[O.AB_PREVIEW,O.DISABLE];t.push(O.EDITOR);for(var n=0;n<t.length;n++)if("true"===N.getQueryParamValue(t[n])){y.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}T.dispatch(E.LOAD_DIRECTIVE,{disabled:e})}function s(){T.dispatch(E.LOAD_DIRECTIVE,{isPreview:!1})}function u(){var e=N.getQueryParamValue(O.LEGACY_PREVIEW);e&&y.log("Directive / Is legacy preview mode"),T.dispatch(E.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function c(){T.dispatch(E.LOAD_DIRECTIVE,{isEditor:!1})}function l(){T.dispatch(E.LOAD_DIRECTIVE,{isSlave:!1})}function d(){var e=D.getGlobal("optlyDesktop"),t=!(!e||_.isUndefined(e["p13nInner"]));t&&y.log("Directive / Is running in desktop app editor"),T.dispatch(E.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function f(){var e="true"===N.getQueryParamValue(O.EDITOR_V2);e&&y.log("Directive / Is running in editor"),T.dispatch(E.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function p(){var e=S.get(b.COOKIES.TOKEN)||null,t=N.getQueryParamValue(O.TOKEN)||e;T.dispatch(E.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(b.COOKIES.PREVIEW),t=[],n=N.getQueryParamValue(O.FORCE_AUDIENCES);if(n)t=n.split(",");else if(e)try{var i=R.parse(e);t=i.forceAudienceIds}catch(t){var r=new w("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(y.log("Directive / Force Audience IDs:",t),T.dispatch(E.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function g(){var e=S.get(b.COOKIES.PREVIEW),t=[],n=N.getQueryParamValue(O.FORCE_VARIATIONS);if(n)t=n.split(",");else if(e)try{var i=R.parse(e);t=i.forceVariationIds}catch(t){var r=new w("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(y.log("Directive / Force Variation IDs:",t),T.dispatch(E.LOAD_DIRECTIVE,{forceVariationIds:t}))}function v(){var e=N.getQueryParamValue(O.FORCE_TRACKING);e&&T.dispatch(E.LOAD_DIRECTIVE,{forceTracking:e})}function m(){var e="OFF",t=N.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&y.setLogMatch(n[1])}y.setLogLevel(e)}var _=n(2),y=n(17),E=n(12),I=n(78),T=n(14),S=n(80),b=n(18),A=n(74).create,w=t.JSONParseError=A("JSONParseError"),D=n(66),R=n(19),N=n(87),O={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){m(),r(),i(),a(),o(),c(),s(),u(),l(),d(),f(),p(),h(),g(),v()},t.setOptOut=function(e){e?(y.warn("Directive / Opting out"),S.set(b.COOKIES.OPT_OUT,"true",null,!0)):S.remove(b.COOKIES.OPT_OUT),T.dispatch(E.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(66),r=n(88);t.getLanguage=function(){return i.getNavigatorLanguage()},t.getQueryParams=r.getQueryParams,t.getQueryParamValue=r.getQueryParamValue,t.getUrl=function(){return i.getHref()}}),(function(e,t,n){var i=n(2),r=n(66);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(65),r=n(17),a=n(11);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);if(i.write('<script id="'+o+'" src="'+e+'"></script>'),!i.querySelector("#"+o))throw new Error("Document.write failed to append script");n&&n()}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var s=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:s})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){var i=n(66),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===he.getCount()?(K.log("Activating after delay of",e,"ms because no Experiments are running"),N.dispatch(q.SET_RUM_DATA,{data:{activateDfd:!0}}),setTimeout(O.emitActivateEvent,e)):O.emitActivateEvent()}function r(e){we.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!Ae.push(e,t)})))}function o(e,t){try{var n=F.parse(t);W.setItem(e,n)}catch(n){var i=new U("Failed to syncRemoteKeyToLocal with value "+t+" (key "+e+")"),r={originalMessage:n.message};x.emitInternalError(i,r)}}function s(e){return w.each(e,(function(e,t){o(t,e)})),e}function u(){var e=ve.getAccountId(),t="https://a7610134.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";X.subscribe(o);var i=X.fetchAll().then((function(e){var t=Se.getCanonicalOrigins();if(t){var n=X.getXDomainUserId(e,t);n&&(K.log("Syncing cross-origin visitor randomId:",n),C.persistVisitorId({randomId:n}))}return e})).then(s);return R.all([X.load(t,n),i.then((function(){C.loadForeignData()})).then((function(){K.log("Loaded visitor data from foreign origins"),O.emitOriginsSyncedEvent()}),(function(e){K.debug("Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),K.debug("Enqueuing sync to happen after visitorId set."),N.dispatch(q.ADD_CLEANUP_FN,{lifecycle:$.Lifecycle.postVisitorProfileLoad,cleanupFn:O.emitOriginsSyncedEvent})}))])}function c(e){var t=fe.getVisitorProfile();return C.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=pe.getAllPlugins($.PluginTypes.visitorProfileProviders),r=ve.getGlobalHoldbackThreshold(),a=fe.getVisitorProfile();C.populateLazyVisitorData(i,a);var o=Ie.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=fe.getVisitorProfile();if(t){var c=Ie.getVariationIdMap();s=c[t.id]}var l;n&&(l=n.id);var d={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,pageId:l,layer:t};return G.createTicket(d)}function d(e){return{bucketingId:Ie.getBucketingId(),preferredLayerId:Ie.getPreferredLayerMap()[e.id]}}function f(e){var t=he.getAllByPageId(e.id),n=Ee.getForceVariationIds(),i=Ee.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=be.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});K.log("Deciding Campaigns/Experiments for Page",z.description(e));var a=w.map(r.groups,P.description).join(", ");K.log("Groups:",a);var o=w.map(r.individual,L.description).join(", ");K.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(p,n,i,e))||[],u=w.map(r.individual,w.partial(h,n,i,e)),c=s.concat(u);return R.all(c).then((function(t){var n=w.filter(t,(function(e){return!!e}));return K.log("All Campaigns/Experiments for Page (by Campaign id)",z.description(e),"resolved:",w.map(n,L.description).join(", ")),n}))}function p(e,n,i,r){try{var a=d(r),o=G.decideGroup(r,a);if(o.reason)return K.debug("Not activating Group",P.description(r),"; reason:",o.reason),R.resolve();var s=he.get(o.layerId);return s?w.includes(s.pageIds,i.id)?t.decideAndExecuteLayerASAP(e,n,i,s):(K.debug("Not activating Group",P.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page"),R.resolve()):(K.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),R.resolve())}catch(e){return K.error("Error getting decision for Group",P.description(r),"; ",e),R.reject(e)}}function h(e,t,n,i){return new R(function(r,a){try{_(i,e,t,n,(function(a){g(i,e,t,n,a),r(i)}))}catch(e){K.error("Error getting decision for Campaign: "+L.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=L.description(e);K.log("Activating Campaign",a,"on Page",z.description(i));var o=T(e,r,t,n),s=!(!t.length&&!n.length),u=b(e,o,s)||[],c=A(u,i);if(v(c,e,o,i),Y.trackDecisionEvent(o,r),o.error)throw o.error;return G.isInCohort(o)?void m(c,e,o,i):void K.log("Not activating Campaign: "+L.description(e)+"; not in the cohort because:",o.reason)}function v(e,t,n,i){var r=L.description(t);K.log("Preparing actions",e,"for Campaign",r,"on Page",z.description(i)),w.forEach(e,k.prepareAction)}function m(e,t,n,i){var r=L.description(t);return K.log("Executing actions",e,"for Campaign",r,"on Page",z.description(i)),R.all(w.map(e,(function(e){return k.executePreparedAction(e).then(w.partial(O.emitActionAppliedEvent,e))}))).then((function(){K.log("All page actions for",n,"applied:",e),O.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){K.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=L.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=ge.get(t);return n&&e.push(n),e}),[]);I(o,L.getActivationTimeout(e),(function(){var t=l(o,e,i);y(t,o,e),r(t)}))}function y(e,t,n){var i=w.map(e.audienceIds,ge.get.bind(ge)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));K.log("When deciding Campaign",L.description(n),"visitor is in audiences:",E(i),"and not in audiences:",E(r))}function E(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i={},r=pe.getAllPlugins($.PluginTypes.audienceMatchers);w.each(e,(function(e){var t=J.requiredAudienceFields(e,r);w.each(t,(function(e){i[e]=!0}))}));var a=w.reduce(i,(function(e,t,n){if(w.isUndefined(C.getAttribute(n))){var i=C.getPendingAttributeValue(n);w.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=Z.firstToResolve(w.map(a,(function(e){return R.resolve(e).then((function(){var e=fe.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(J.isInAudience(e,t,r))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));R.race([s,new R(function(e,n){setTimeout(n,t)})]).then((function(){K.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){K.log("Activating Campaign after timeout on Audiences",e),n()}))}function T(e,t,n,i){var r,a=L.description(e);return n.length?r=G.getDummyLayerDecision(e,n):(i.length&&(K.log("Applying force audienceIds:",i,"to Campaign",a),t=w.cloneDeep(t),t.audienceIds=i),r=G.decideLayer(e,t)),K.log("Recording decision for Campaign",a,t,"->",r),L.recordLayerDecision(e.id,t,r),r.variationId&&r.experimentId&&(C.updateVariationIdMap(e.id,r.experimentId,r.variationId),C.persistVariationId()),e.groupId&&(C.updatePreferredLayerMap(e.groupId,e.id),C.persistPreferredLayerMap()),O.emitLayerDecided({layer:e,decisionTicket:t,decision:r}),r}function S(e){var t=le.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();N.dispatch(q.CLEAR_CLEANUP_FN,{lifecycle:e})}}function b(e,t,n){var i=L.description(e),r="NOT applying changes for Campaign";if(!n&&ve.isGlobalHoldback())return K.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return K.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return K.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(me.getLayerActions(t.layerId)||[],me.getExperimentActions(t.experimentId)||[],me.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return K.log("Got Actions for Campaign:",i,a),a}function A(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||e.pageId===t.id}))}var w=n(2),D=n(5),R=n(6).Promise,N=n(14),O=n(92),x=n(78),C=n(70),L=n(95),P=n(96),k=n(97),F=n(19),V=n(102),M=n(74).create,U=t.JSONParseError=M("JSONParseError"),B=t.ActivationCodeError=M("ActivationCodeError"),j=t.ProjectJSError=M("ProjectJSError"),G=n(103),H=n(109),z=n(110),Y=n(115),q=n(12),K=n(17),W=n(71).LocalStorage,X=n(81),$=n(18),Q=n(79),J=n(108),Z=n(121),ee=n(93),te=n(122),ne=n(65),ie=n(80),re=n(120),ae=n(99),oe=n(123),se=n(119),ue=(n(73),n(20)),ce=ue.get("stores/layer"),le=ue.get("stores/cleanup"),de=ue.get("stores/session"),fe=ue.get("stores/visitor"),pe=ue.get("stores/plugins"),he=ue.get("stores/layer_data"),ge=ue.get("stores/audience_data"),ve=ue.get("stores/global"),me=ue.get("stores/action_data"),_e=ue.get("stores/view_data"),ye=ue.get("stores/view"),Ee=ue.get("stores/directive"),Ie=ue.get("stores/visitor_id"),Te=ue.get("stores/pending_events"),Se=ue.get("stores/xdomain"),be=ue.get("stores/group_data"),Ae=n(124),we=n(137),De=1e3,Re=1e3,Ne=t;t.initialize=function(e){if(Q.on({filter:{type:"error"},handler:r}),N.dispatch(q.DATA_LOADED,{data:e.clientData}),K.log("Initialized with DATA:",e.clientData),a(),Ee.isDisabled()||Ee.shouldOptOut())return void K.log("Controller / Is disabled");var n=!1,o=ie.get($.COOKIES.REDIRECT);if(o){var s=o.match(/^(\d+)\|(.*)/);if(s){K.debug("Found legacy redirect data:",o);var c=s[1],l=s[2];N.dispatch(q.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),n=!0}}var d=ve.getProjectJS();if(w.isFunction(d))try{V.apply(d)}catch(e){K.error("Error while executing projectJS: ",e),x.emitError(new j(e))}w.each(e.plugins||[],(function(e){try{e(H)}catch(e){x.emitInternalError(e)}})),w.each(ve.getPlugins()||[],(function(e){try{V.apply(e,[H])}catch(e){x.emitError(e)}})),n||se.load(),fe.observe(C.persistVisitorProfile),ce.observe(C.persistLayerStates),de.observe(C.persistSessionState),Te.observe(oe.persistPendingEvents),Q.on({filter:{type:"lifecycle",name:"viewActivated"},handler:t.onViewActivated}),t.initializeApi();var f=oe.getPendingEvents();if(f&&(N.dispatch(q.LOAD_PENDING_EVENTS,{events:f}),oe.retryPendingEvents(f)),Q.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),O.emitInitializedEvent(),!Ee.shouldActivate())return R.resolve();
var p=[],h=u();if(Se.getCanonicalOrigins()){var g=re.makeTimeoutPromise(Re),v=R.race([h,g])["catch"]((function(e){K.error("Failed to initialize xDomain storage: ",e)})).then(i);p.push(v)}else p.push(h),i();return R.all(p)},t.activate=function(){try{var e=[];K.log("Activated client"),w.forEach(ye.getActiveViewStates(),(function(e){z.deactivate(_e.get(e.id))})),S($.Lifecycle.preActivate),N.dispatch(q.ACTIVATE,{activationId:D.generate()}),z.registerViews(_e.getAll()),C.setId(C.getIdFromCookies()),e.push(Y.trackPostRedirectDecisionEvent()),N.dispatch(q.MERGE_VARIATION_ID_MAP,{variationIdMap:C.getVariationIdMap()}),C.persistVariationId(),N.dispatch(q.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:C.getPreferredLayerMap()}),C.persistPreferredLayerMap(),S($.Lifecycle.postVisitorProfileLoad),e.push(c(pe.getAllPlugins($.PluginTypes.visitorProfileProviders)).then((function(){K.log("Populated visitor profile")})));var t=l(),n=G.decideGlobal(t);K.log("Made global decision",t,"->",n),N.dispatch(q.RECORD_GLOBAL_DECISION,n);var i=Y.trackClientActivation();return i?K.log("Tracked activation event",i):K.log("Not tracking activation event"),Ne.setUpViewActivation(),S($.Lifecycle.postViewsActivated),S($.Lifecycle.postActivate),O.emitActivatedEvent(),R.all(e).then((function(){Q.emit({type:ee.TYPES.LIFECYCLE,name:"activateDeferredDone"}),K.log("All immediate effects of activation resolved")}),x.emitError)}catch(e){x.emitError(e)}},Ne.setUpViewActivation=function(){var e=_e.getAll();w.each(e,(function(e){e.activationType?e.activationType===$.ViewActivationTypes.callback?(K.debug("Setting up conditional activation for Page",z.description(e)),Ne.activateViewOnCallback(e)):e.activationType===$.ViewActivationTypes.polling&&(K.debug("Setting up polling activation for Page",z.description(e)),te.pollFor(w.partial(V.apply,e.activationCode),null,w.partial(ae.isTimedOut,Date.now())).then((function(){z.activate(e)}))["catch"]((function(t){K.warn("Failed to activate view ",e,t)}))):z.activate(e)}))},Ne.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});Ae.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return ye.isViewActive(e.id)}});try{V.apply(e.activationCode,[t,n])}catch(t){var i=new B("("+t.toString()+") in activationCode for "+z.description(e));x.emitError(i,{originalError:t,userError:!0})}},t.onViewActivated=function(e){var t=e.data.view;try{if(!Ie.getBucketingId())throw new Error("View activated with no visitorId set");var n,i=f(t)["catch"](x.emitError),r=function(){z.parseViewTags(t);var e=Y.trackViewActivation(t);e?K.log("Tracked activation for Page",z.description(t),e):K.log("Not Tracking activation for Page",z.description(t))};return n=ne.isReady()?R.resolve(r()):te.pollFor(ne.isReady,De).then(r),R.all([i,n])}catch(e){x.emitError(e)}},t.initializeApi=function(){var e={get:Ae.get,push:Ae.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.decideAndExecuteLayerASAP=h}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"];return r.extend({},e,{changeSet:r.map(e.changeSet,(function(e){return r.pick(e,t)}))})}var r=n(2),a=n(20),o=a.get("stores/audience_data"),s=n(79),u=n(93),c=n(94);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=c.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=c.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:u.TYPES.ACTION,name:"applied",data:{type:e.type,changes:i(e).changeSet,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId}};s.emit(t)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:{actions:r.map(t,i),decision:e}};s.emit(n)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t,n){var i=n(2);t.translateDecisionToCampaignDecision=function(e){return r(i.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return t.campaign=e.data.layer,t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}};var r=function(e,t){var n=i.omit(e,i.keys(t));return i.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(20),a=n(14),o=n(10),s=n(12),u=r.get("stores/global"),c=r.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return a.dispatch(s.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:o.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(e,t,n){function i(e,t,n){var i={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};o.dispatch(s.SET_CHANGE_APPLIER,i)}function r(e,t,n,o){if(a.includes(o,t))return void u.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var s=v.getChange(t);if(!s){var l="Change with id "+t+" is absent";return o.length&&(l+=" but listed as a dependency for "+o[o.length-1]),void u.warn(l)}e[t]=new c(function(l){var h=a.map(s.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(s.src){var m="change_"+s.src,_=f.makeAsyncRequest(m,(function(){return p.addScriptAsync("https://cdn.optimizely.com/public/7610134/data"+s.src,(function(){f.resolveRequest(m)}))})).then((function(){s=v.getChange(s.id),i(s,n,d.now())}));h.push(_)}c.all(h).then((function(){var e=d.now(),i=g.getChangeApplier(t,n.id);return i?(u.debug("Action / Applying change:",s),i.apply().then((function(){u.debug("Action / Applied change for the first time in "+(d.now()-e)+"ms:",s),l()}))):(u.debug("Action / Not applying change ",t," - No changeApplier found."),void l())}))["catch"]((function(e){u.error("Action / Failed to apply change:",s,e),l()}))})}return e[t]}var a=n(2),o=n(14),s=n(12),u=n(17),c=n(6).Promise,l=n(20),d=n(10),f=n(98),p=n(89),h=l.get("stores/global"),g=l.get("stores/action_data"),v=l.get("stores/change_data"),m=l.get("stores/session"),_=n(99),y=n(101);_.initialize(),t.prepareAction=function(e){u.debug("Action / Preparing:",e),o.dispatch(s.ACTION_EXECUTED,{sessionId:m.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:d.now(),activationId:h.getActivationId()});var t=d.now();a.forEach(e.changeSet,(function(n){o.dispatch(s.ADD_CHANGE,n),n.src||i(v.getChange(n.id),e,t)}))},t.executePreparedAction=function(e){u.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){return r(t,n.id,e,[])}));return c.all(n).then((function(){u.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(6).Promise,r=n(14),a=n(12),o=n(20),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new i(function(e,t){o=e,u=t});return r.dispatch(a.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(a.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(a.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(100),a=n(20).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){var i=n(7).Promise,r=n(10),a=n(20),o=a.get("stores/plugins"),s=n(18),u=n(17);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(75),Logger=__webpack_require__(17),di=__webpack_require__(20),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){function i(e,t){d.debug("Decision / Deciding layer for group: ",v.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)d.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(e)),n=r;else try{n=u.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",c="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new h(c);return{layerId:null,reason:c}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=_.getPlugin(l.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=_.getAllPlugins(l.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return p.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(104),c=n(105),l=n(18),d=n(17),f=n(78),p=n(108),h=n(106).DecisionError,g=n(95),v=n(96),m=n(20),_=m.get("stores/plugins"),y=m.get("stores/global"),E=m.get("stores/layer_data"),I="single_experiment";t.createTicket=function(e){var t;if(e.layer){var n=!1,i=a(e.layer.policy);s.isFunction(i.includePageIdInDecisionTicket)?n=i.includePageIdInDecisionTicket(e.layer):i.includePageIdInDecisionTicket===!0&&(n=!0),n&&(t=e.pageId)}var r={bucketingId:e.bucketingId,audienceIds:o(e.visitorProfile,e.audiences),globalHoldback:e.globalHoldback,preferredVariationMap:e.preferredVariationMap,activationId:y.getActivationId(),pageId:t};return r},t.decideGlobal=function(e){var t=u.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){d.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new h("No experiments in layer.");try{if(r.decideLayer){d.debug("Decision / Using decider's custom decideLayer.");var l=r.decideLayer(e,t);n=l.experiment,i=l.variation}else d.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=c.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof h?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",f.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(d.log("Decision / Applying force variation:",i.variationId,"to Campaign",g.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(d.log("No variation matches ids:",t,"in Campaign",g.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=E.get(e.layerId);return!(t.policy===I&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(57),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(104),a=n(106).DecisionError,o=n(107),s=n(17),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||o.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,o,c){if(!e.variations||0===e.variations.length)throw new a('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new a('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=o;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new a('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new a("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(2),u=n(17),c=n(19),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,c=0;c<r.fieldsNeeded.length;c++)if(a=r.fieldsNeeded[c],s=e[a],o.isUndefined(s))return void u.debug("Audience / Required field",a,"for type",i,"has no value");u.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(107),u=n(17);t.isInAudience=function(e,t,n){var i=r(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,i)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){var i=n(2),r=n(79),a=n(14),o=n(20),s=n(12),u=n(18);t.registerApiModule=function(e,t){i.isArray(t)&&(t=o.evaluate(t)),a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=o.get(e);n||o.register(e,t)},t.registerVisitorProfileProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?o.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var a;a=i.isString(e.matcher)?o.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return a(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=o.evaluate(e));var t=r.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=r.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.eventImplementations,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==s.CUSTOM){var n=g.getPlugin(o.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):l.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(20),o=n(18),s=n(111),u=n(14),c=n(10),l=n(17),d=n(12),f=n(107),p=n(92),h=n(112),g=a.get("stores/plugins"),v=a.get("stores/view"),m=a.get("stores/view_data"),_=a.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=h.getTagValue(t)}catch(e){e instanceof h.Error?l.warn("Page / Ignoring unparseable tag",t,e):l.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(g.getAllPlugins(o.PluginTypes.viewProviders),(function(t){e[t.provides]=a.evaluate(t.getter)})),e},t.registerViews=function(e){u.dispatch(d.REGISTER_VIEWS,{views:e})},t.activate=function(e,n){var r=v.getViewState(e.id);if(r.isActive)return void l.log("Not activating Page, already active ",t.description(e));var a=t.createViewTicket();if(!t.hasValidStaticConditions(e,a))return void l.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions);t.setViewActiveState(e,!0),l.log("Activated Page",t.description(e)),t.parseViewTags(e),n&&t.setUserSuppliedViewTags(e.id,n),p.emitViewActivated({view:e,metadata:n});var o=_.getByPageId(e.id);i(o,!0)},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void l.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),l.log("Deactivated Page",t.description(e)),p.emitPageDeactivated({page:e});var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){u.dispatch(d.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){u.dispatch(d.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){u.dispatch(d.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){u.dispatch(d.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=g.getAllPlugins(o.PluginTypes.viewMatchers);l.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),l.debug("Matching to current value:",t);var i=f.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return l.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(18).PluginTypes,r=n(20),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(113),t.Error=n(114).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(74).create;t.Error=i("TagError")}),(function(e,t,n){function i(e,t,n,i,r){var a=K.get(t.layerId),o=V.description(a),s=c(e,t,n),u=l(s,t.isLayerHoldback,i),d=X.isExpectingRedirect(),f=X.getLayerId();if(d&&f===a.id){B.persist(s,r),A.log("Relaying decision for redirect Campaign",o,s);var p=P.TrackLayerDecisionTimingFlags.preRedirectPolicy;u.timing=p,_(p,[P.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],u),A.log("Called trackLayerDecision for redirect Campaign",o,u)}else{var p=P.TrackLayerDecisionTimingFlags.nonRedirectPolicy;u.timing=p,_(p,[P.NonRedirectPolicies.TRACK_IMMEDIATELY],u),A.log("Called trackLayerDecision for non-redirect Campaign",o,u)}}function r(e,t,n,i,r){var a=K.get(t.layerId),o=V.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),A.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()}),i=J.getByApiName(e),r=i&&i.pageId?h(i):z.getActiveViewTags(),a=E.extend({},r,t),o=i&&i.category?i.category:k.OTHER;return E.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()});return E.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:k.OTHER,r=h(e);return E.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()});return E.extend(e,{eventTags:{}})}function c(e,t,n){var i=K.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=E.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=E.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=U.getReferrer()||O.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decisionId:e,activationId:G.getActivationId(),namespace:G.getNamespace(),timestamp:R.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:G.getAccountId(),projectId:G.getProjectId(),revision:String(G.getRevision()),clientVersion:N.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:E.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=E.extend({},e,{isLayerHoldback:t,clientEngine:N.ENGINE,anonymizeIP:E.isNull(G.getAnonymizeIP())?void 0:G.getAnonymizeIP(),userFeatures:g(n)});return i}function d(e,t,n,i){return{decisionId:e,timestamp:R.now(),revision:G.getRevision(),clientEngine:N.ENGINE,clientVersion:N.VERSION,projectId:G.getProjectId(),accountId:G.getAccountId(),activationId:G.getActivationId(),sessionId:H.getSessionId(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decision:t,decisionTicket:n,userFeatures:g(i)}}function f(e){var t={eventId:b.generate(),timestamp:R.now(),revision:G.getRevision(),clientEngine:N.ENGINE,clientVersion:N.VERSION,projectId:G.getProjectId(),accountId:G.getAccountId(),activationId:G.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:G.isGlobalHoldback(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:g(e.visitorProfile)};return t}function p(e){var t=z.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function h(e){var t={};return e.pageId?p(e.pageId):t}function g(e){var t=Y.getAllPlugins(L.PluginTypes.visitorProfileProviders),n=E.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return E.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!E.isUndefined(a)){E.isObject(a)?o=E.map(a,(function(e,t){var n=E.isObject(e)?e:{value:e};return E.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=E(o).map((function(e){return E.pick(E.extend({},i,e),E.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){A.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);A.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),A.debug("Calling each with data: ",t),E.each(i,(function(e){try{A.debug("Calling plugin: "+e.name),e.hookFn(t),A.debug("Called plugin: "+e.name)}catch(e){A.error(e)}}))}function m(e,t){var n=[];return E.each(Y.getAllPlugins(L.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){A.error(e)}})),n}function _(e,t,n){var i=y(e,t);A.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),A.debug("Calling each with data: ",n),E.each(i,(function(e){try{A.debug("Calling plugin: "+e.name),e.hookFn(n),A.debug("Called plugin: "+e.name)}catch(e){A.error(e)}}))}function y(e,t){var n=[];return E.each(Y.getAllPlugins(L.PluginTypes.analyticsTrackers),(function(i,r){E.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var E=n(2),I=n(14),T=n(12),S=n(78),b=n(5),A=n(17),w=n(20),D=n(67),R=n(10),N=n(116),O=n(65),x=n(79),C=n(93),L=n(18),P=n(117),k=n(69),F=n(111),V=n(95),M=n(6).Promise,U=n(118),B=n(119),j=n(120),G=(n(73),w.get("stores/global")),H=w.get("stores/session"),z=w.get("stores/view"),Y=w.get("stores/plugins"),q=w.get("stores/layer"),K=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee=null,te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:F.CUSTOM,category:n.eventCategory,tags:E.omit(n.eventTags,"revenue")};if(E.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:F.CUSTOM,tags:E.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=K.get(e.layerId),a=V.description(n);if(!Q.shouldSendTrackingData())return void A.log("Analytics / Not tracking decision for Campaign",a);var o=b.generate();I.dispatch(T.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:o});var s=$.getVisitorProfile();ee?(i(o,e,t,s,ee),r(o,e,t,s,!0)):r(o,e,t,s,!1)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return M.resolve();if(W.hasTracked())return M.resolve();var e=W.get();if(!e)return M.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=P.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,_(i,[P.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new M(function(e,t){var n=x.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),x.off(n)}})}),a=j.makeTimeoutPromise(ne);return M.race([r,a]).then((function(){A.log("Calling trackers after successful sync")}),(function(e){A.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=P.TrackLayerDecisionTimingFlags.postRedirectPolicy,_(P.TrackLayerDecisionTimingFlags.postRedirectPolicy,[P.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){A.error("Error when calling trackers after sync:",e)}))}return _(P.TrackLayerDecisionTimingFlags.postRedirectPolicy,[P.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA),M.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,
type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=z.getViewState(e.id);if(!t.isActive)return void A.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(D.addEvent(i),I.dispatch(T.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t,n){t.VERSION="0.68.0",t.ENGINE="js"}),(function(e,t,n){var i=n(13);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(2),r=n(20),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){function i(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e){d.log("Relay / Found redirect cookie:",e);var t=r(e),n=f.get(h.COOKIES.VISITOR_ID);t.visitorId=u.isString(n)?n:null;var i=f.get(h.COOKIES.VISITOR_UUID);return t.visitorUUID=u.isString(i)?i:null,t}}function r(e){var t={},n=e.split("&");return u.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void d.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=E[i];if(!r&&(r=u.find(_,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+m)})),!r))return void d.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+m.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||u.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||u.identity)(a),t[r.name]=a}catch(t){return d.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function a(e,t){var n=null;if(e){var i=v.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&u.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){d.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function o(e,t){var n=null,i=v.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&u.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){d.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function s(e){var t=e.pageId||void 0;c.dispatch(l.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorUUID||e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),c.dispatch(l.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),c.dispatch(l.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var u=n(2),c=n(14),l=n(12),d=n(17),f=n(80),p=n(78),h=n(18),g=(n(117),n(20)),v=g.get("stores/plugins"),m=".",_=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return u.map(e,encodeURIComponent).join(",")},encodeValueString:u.identity,decodeValueString:u.identity,valueFromValueString:function(e){return u.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"visitorUUID",relayName:"uuid",isNullable:!0},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:a,valueFromValueString:o,isNullable:!0}],y={},E={};u.forEach(_,(function(e){y[e.name]=e,E[e.relayName]=e})),t.persist=function(e,t){d.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=i()),e){var t=[];return u.forEach(_,(function(n){(u.isNull(e[n.name])||u.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void d.error("Relay / Observed redirect data with missing fields:",t):(c.dispatch(l.LOAD_REDIRECT_DATA,e),c.dispatch(l.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){s(e)}}),e)}}}),(function(e,t,n){var i=n(6).Promise;t.makeTimeoutPromise=function(e){return new i(function(t,n){setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){var i=n(6).Promise,r=n(2);t.firstToResolve=function(e){return new i(function(t){r.each(e,(function(e){i.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(6).Promise,a=100,o=50;t.pollFor=function(e,t,n){var s,u;return i.isFunction(n)?u=n:(s=n||a,u=function(){return s--,s<-1}),t=t||o,new r(function(n,i){!(function r(){var a;if(!u()){try{var o=e();if(o)return n(o)}catch(e){a=e}return setTimeout(r,t)}i(a||new Error("Poll timed out"))})()})}}),(function(e,t,n){var i=n(2),r=n(71).LocalStorage,a=n(17),o=n(11),s=n(18),u=n(78),c=n(20),l=c.get("stores/pending_events"),d=s.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=l.getEvents();r.setItem(d,e),n(81).setItem(d,e)}catch(e){a.warn("PendingEvents / Unable to set localStorage key, error was: ",e),u.emitInternalError(e)}},t.getPendingEvents=function(){return r.getItem(d)},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){o.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||a.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(17),a=n(125),o=n(20),s=o.get("stores/plugins"),u=n(18),c=[n(134),n(135),n(136)],l=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(c[s]&&(a=c[s][n]),t&&l.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o)}catch(e){r.error(e)}return!0},t.get=function(e){var t=a[e];return t?(i.isArray(t)&&(t=o.evaluate(t)),t):(t=s.getPlugin(u.PluginTypes.apiModules,e))?t:void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(a.policy===l&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],d=e.getLayerStates();s.policy===l&&(d=o.filter(d,(function(e){var n=t.get(e.layerId);return n&&n.policy===l})));var f=o.map(d,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=c.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(116),u=n(126),c=n(118),l="single_experiment";t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var o={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:n.getCampaignsMap(),pages:i.getPagesMap(),experiments:n.getExperimentsMap(),variations:n.getVariationsMap(),projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION};return o.groups=r.getGroupsMap(),o}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId(),UUID:e.getUUID()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,d,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,d,i,{includeOfferConsistency:!1,policy:l}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return d.isGlobalHoldback()},getActivationId:function(){return d.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=c.getExperimentAndVariation();return e&&(e.referrer=c.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:s.experiment,variation:s.variation};return r.layer.policy!==l&&o.extend(c,{campaign:s.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(127).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(133)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(e.policy!==v||!r){var s=e.policy!==v&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];e.policy!==v&&(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var h=u.reduce(p,(function(e,t){return e+t.length}),0),g=d.length-1+(s?1:0),m=g*l.length,_=h+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var y=a-_,E=d.length,I=[],T=d.length-1;T>=0;T--){var S=d[T],b=Math.min(S.length,Math.floor(y/E));y-=b,E--,I.unshift(S.substring(0,b))}var A=u.map(I,(function(e,t){return e+p[t]}));return s&&A.push(f),A.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),h=d.names,g=d.idStrings,m=u.reduce(g,(function(e,t){return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,y={};y.variation=Math.min(h.variation.length,Math.floor(_/3)),_-=y.variation,y.experiment=Math.min(h.experiment.length,Math.floor(_/2)),_-=y.experiment,y.layer=_;var E={};u.each(h,(function(e,t){E[t]=e.substring(0,y[t])}));var I=[];return e.policy!==v&&I.push(E.layer+g.layer),I=I.concat([E.experiment+g.experiment,E.variation+g.variation,s]),I.join(l)}var u=n(2),c=n(20),l=":",d="everyone_else",f="holdback",p="treatment",h="",g=n(17),v="single_experiment";t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||h,experiment:t.name||h,variation:n.name||h};if(o&&(s=u.mapValues(s,i)),s.experiment===h&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(g.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=h),e===h)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(6).Promise,r=n(128).observeSelector,a=n(131).waitForElement,o=n(132).waitUntil,s=n(129).poll;t.create=function(){return{observeSelector:r,poll:s,Promise:i,waitForElement:a,waitUntil:o}}}),(function(e,t,n){function i(){if(t.shouldUseMutationObserver()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},n=d.getDocumentElement(),i=new MutationObserver(function(){this.disconnect(),l.each(l.keys(g),a),this.observe(n,e)});return function(t){var r=g[t];i.observe(n,e),r.cancelObservation=function(){delete g[t],l.isEmpty(g)&&i.disconnect()}}}return function(e){var t=p.poll(l.partial(a,e));g[e].cancelObservation=function(){t(),delete g[e]}}}function r(e){var t=g[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(g[e]){if(o(g[e]))return 0===g[e].matchedCount&&l.isFunction(g[e].options.onTimeout)&&g[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(g[e].selector);t.length&&(l.each(t,(function(t){t.Nt&&t.Nt[e]||g[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;g[e]&&g[e].callbackQueue.length;){var t=g[e].callbackQueue.shift();if(u(t,e),g[e].matchedCount=g[e].matchedCount+1,g[e].callback(t),g[e].options.once)return void r(e)}}function u(e,t){e.Nt||(e.Nt={}),e.Nt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=n(65),f=n(5).generate,p=n(129),h={once:!1,onTimeout:null,timeout:null},g={},v=function(e){(v=i())(e)};t.shouldUseMutationObserver=function(){return!1},t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=f();return n=l.merge({},h,n||{}),g[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},v(i),setTimeout(a.bind(null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){u[e]&&a.each(u[e].callbacks,(function(e){e.call(null)}))}function r(e,t){u[t]&&u[t].callbacks[e]&&(delete u[t].callbacks[e],a.some(u[t].callbacks)||(clearInterval(u[t].id),delete u[t]))}var a=n(2),o=n(5).generate,s=n(130).DEFAULT_INTERVAL,u={};t.poll=function(e,t){a.isNumber(t)||(t=s),u[t]||(u[t]={callbacks:{},id:setInterval(a.partial(i,t),t)});var n=o();return u[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(u,(function(e,t){clearInterval(e.id),delete u[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(6).Promise,r=n(128).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(6).Promise,r=n(129).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(79);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(135);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(12),a=n(18),o=n(124),s=n(125),u=n(115),c=n(98),l=n(86),d=n(79),f=n(14),p=n(17),h=n(109),g=n(110),v=n(70),m=n(92),_=n(81),y=n(19),E=n(10),I=n(20),T=I.get("stores/dimension_data"),S=I.get("stores/view_data"),b=I.get("stores/visitor_id"),A=I.get("stores/layer_data"),w=I.get("stores/directive"),D=86400,R=90;t.event=function(e){g.updateAllViewTags();var t=function(){var t=u.trackCustomEvent(e.eventName,e.tags);t?p.log("API / Tracking custom event:",e.eventName,e.tags):p.log("API / Not tracking custom event:",e.eventName)};b.getBucketingId()?t():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=S.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?g.activate(t,e.tags):(g.deactivate(t),p.log("API / Deactivated Page",g.description(t)))};b.getBucketingId()?i():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){g.setGlobalTags(e.tags)},t.user=function(e){i.each(e,(function(e,t){"userId"===t?(p.log("API / Setting visitor UUID to",e),v.persistVisitorId({UUID:e})):"attributes"===t&&(p.log("API / Setting visitor attributes:",e),i.each(e,(function(e,t){var n,i=t,o="custom",s=T.getById(t)||T.getByApiName(t);s&&(i=s.id,n=s.segmentId||s.id);var u=function(){f.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:o,metadata:{lastModified:E.now()}}]})};b.getBucketingId()?u():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postVisitorProfileLoad,cleanupFn:u})})))}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;l.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<R&&(p.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",R,", setting to minimum."),t=R),p.log("API / Setting cookie age to",t,"days."),f.dispatch(r.SET_COOKIE_AGE,t*D)},t.cookieDomain=function(e){p.log("API / Setting cookie domain to",e.cookieDomain),f.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);p.log("API / Disabling tracking"),f.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else p.log("API / Disabling everything"),f.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),p.setLogMatcher(n),p.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(s[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');h.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;c.makeAsyncRequest(t),c.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0,d.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");d.off(e.token)},t.load=function(e){f.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");f.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=A.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=A.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);v.updateVariationIdMap(r,e.experimentId,a),b.getBucketingId()&&v.persistVariationId()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+y.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),_.loadCanonicalOrigins(e.canonicalOrigins)},t.activate=function(){w.shouldActivate()?m.emitActivateEvent():p.debug("Not activating.")},t.sendEvents=function(){m.emitSendEvents()},t.holdEvents=function(){m.emitHoldEvents()}}),(function(e,t){}),(function(e,t,n){var i=(n(2),n(116),n(10),n(11),n(17)),r=n(20);n(74).BaseError,r.get("stores/global");t.handleError=function(e,t){t?i.error("Uncaught error:",e,t):i.error("Uncaught error:",e)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){u.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),u.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(93),s=n(66),u=n(79),c=n(20),l=c.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=s.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){s.getGlobal(d)||s.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(140))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(142)),e.registerAudienceMatcher("behavior",n(144))}}),(function(e,t,n){var i=n(143);e.exports={provides:"events",isTransient:!0,getter:["stores/visitor_events",function(e){return i.getEvents(e)}]}}),(function(e,t,n){var i=n(2),r=n(68);t.getEvents=function(e){var t=r.getEvents(),n=[].concat.apply([],i.values(e.getForeignEvents())),a=[].concat.apply([],i.values(e.getForeignEventQueues()));return r.mergeAllEvents([t,n,a])}}),(function(e,t,n){var i=n(2),r=n(145),a=n(146),o=n(19);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=o.parse(t.value);return n=i.isUndefined(s.version)?[s]:r.buildFromSpecV0_1(s),i.every(n,(function(t){return a.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),c=s.groupField(r);return d.extend(i,{select:[{field:c}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return d.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(d.isUndefined(e))throw new Error("rule is undefined");if(!d.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(d.isArray(e["filter"])?d.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+f.stringify(e["reduce"]["aggregator"])+" to unsorted items"),d.isArray(e["sort"])?d.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(f.stringify(a)||String(a)),c=e["reduce"]["n"],l="index "+(f.stringify(c)||String(c));d.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),d.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!d.isNumber(c)||isNaN(c)||parseInt(c,10)!==c||c<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):d.isUndefined(c)||t.push("reduce: "+l+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(f.stringify(e)||String(e));if(!d.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u={FIELDS:n(56).FIELDS,FIELDS_V0_2:n(56).FIELDS_V0_2},c=n(146),l=n(17),d=n(2),f=n(19);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(e,t)]},s.groupField=function(e){return d.isString(e)&&(e=[e]),e=e||c.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),d.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return d.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:e[0]||+new Date(0)},{value:e[1]||+new Date}]}:(l.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",
DEFAULT_BEHAVIOR:"default_behavior",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return d.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||d.includes(d.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+f.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else l.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&d.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+f.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:d.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return d.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(d.each(e["sort"],(function(e){d.includes(["ascending","descending"],e["direction"])&&(d.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=d.filter(d.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&d.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return d.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[c.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?d.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):d.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(d.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return d.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(f.stringify(e)||String(e));if(!d.isArray(e)||!d.every(e,d.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=d.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),d.includes(r,e[0])?n+" is not supported here":d.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(f.stringify(e)||String(e)),i="value "+(f.stringify(t)||String(t));if(!d.isString(e)&&!d.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!d.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!d.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(d.isArray(t)&&2===t.length&&d.isNumber(t[0])&&d.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(d.isString(t)||d.isArray(t)&&2===t.length&&d.isString(t[0])&&d.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!d.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(18),a=n(17),o=a.log.bind(a),s=n(10),u=n(59).getFieldValue,c=n(19),l=t;l.getValueOrDefault=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=u(e,t);return"undefined"==typeof i&&(i=n),i},l.maybeTrimLowerCase=function(e){return"string"==typeof e?e.trim().toLowerCase():e},l.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},l.DEFAULT_FIELD=["*"],l.booleanOperators={eq:function(e){var t=i.map(e,l.maybeTrimLowerCase);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],l.maybeTrimLowerCase);return i.includes(t,l.maybeTrimLowerCase(e[0]))},between:function(e){return e[1]<=e[0]&&e[0]<=e[2]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},l.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},l.aggregateOperators={sum:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i},avg:function(e,t){if(0===t.length)return 0;for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i/t.length},max:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.NEGATIVE_INFINITY,r=0;r<t.length;r++)i=Math.max(i,l.getValueOrDefault(t[r],n,Number.NEGATIVE_INFINITY));return i},min:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.POSITIVE_INFINITY,r=0;r<t.length;r++)i=Math.min(i,l.getValueOrDefault(t[r],n,Number.POSITIVE_INFINITY));return i},count:function(e,t){return t.length}},l.functions={now:function(){return s.now()}},l.getScalarOperator=function(e){return e in l.booleanOperators?l.booleanOperators[e]:e in l.arithmeticOperators?l.arithmeticOperators[e]:null},l.operate=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l.getValueOrDefault(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in l.functions?l.functions[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=l.getScalarOperator(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(l.operate,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},l.groupBy=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l.getValueOrDefault(o,f),h=f.join(".");u[h]=p,s.push(encodeURIComponent(h)+"="+encodeURIComponent(c.stringify(p)))}var g=s.join("&");n.hasOwnProperty(g)||(n[g]={fieldValues:u,events:[]}),n[g].events.push(o)}return n},l.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")},l.aggregate=function(e,t){var n={};return i.each(t,(function(t,i){n[i]={};for(var r=0;r<e.length;r++){var o=e[r],s=o["op"];if(s in l.aggregateOperators){var u=(o["args"]&&o["args"][0]||{})["field"]||l.DEFAULT_FIELD,c=l.generateAlias(s,u),d=l.aggregateOperators[s]([u],t.events);n[i][c]=d}else a.error("Rules","Unknown aggregate operator "+s)}})),n},l.project=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},l.orderBy=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l.getValueOrDefault(t,s,0),c=l.getValueOrDefault(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)},l.rewrite=function(e){function t(e,o){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(o&&e["op"]in l.aggregateOperators){var s=(e["args"]&&e["args"][0]||{})["field"]||l.DEFAULT_FIELD,u=l.generateAlias(e["op"],s);return u in r||(n.push({op:e["op"],args:e["args"]}),r[u]=!0),{field:[u]}}for(var c=[],d=e["args"]||[],f=0;f<d.length;f++)c[f]=t(d[f],o);return{op:e["op"],args:c}}var n=[],r={},o={};e.hasOwnProperty(l.clause.WHERE)&&(o[l.clause.WHERE]=t(e[l.clause.WHERE],!1)),e.hasOwnProperty(l.clause.HAVING)&&(o[l.clause.HAVING]=t(e[l.clause.HAVING],!0)),(e.hasOwnProperty(l.clause.AGGREGATE)||n.length>0)&&(o[l.clause.AGGREGATE]=(e[l.clause.AGGREGATE]||[]).concat(n));for(var s=[l.clause.GROUP_BY,l.clause.ORDER_BY,l.clause.SELECT,l.clause.OFFSET,l.clause.LIMIT],u=0;u<s.length;u++)e.hasOwnProperty(s[u])&&(o[s[u]]=e[s[u]]);return e.hasOwnProperty(l.clause.FROM)&&(o[l.clause.FROM]=l.rewrite(e[l.clause.FROM])),o},l.verify=function(e,t){t=t||0;var n=[];if(e.hasOwnProperty(l.clause.WHERE)?e[l.clause.WHERE]["op"]?e[l.clause.WHERE]["op"]in l.booleanOperators||n.push("Non-boolean WHERE clause operator"):n.push("Missing WHERE clause operator"):n.push("Missing WHERE clause"),e.hasOwnProperty(l.clause.HAVING)&&(e[l.clause.HAVING]["op"]?e[l.clause.HAVING]["op"]in l.booleanOperators||n.push("Non-boolean HAVING clause operator"):n.push("Missing HAVING clause operator")),e.hasOwnProperty(l.clause.GROUP_BY)&&!e.hasOwnProperty(l.clause.AGGREGATE)&&n.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(l.clause.SELECT)){var r=e[l.clause.SELECT];if(i.isArray(r))for(var a=0;a<r.length;a++)r[a]["op"]&&r[a]["op"]in l.aggregateOperators&&n.push('In SELECT clause, aggregate operator "'+r[a]["op"]+'" specified in selector at index '+a);else n.push("SELECT clause must be an array")}if(e.hasOwnProperty(l.clause.OFFSET)){var o=e[l.clause.OFFSET];(!i.isNumber(o)||Number(o)<0||Number(o)!==Math.floor(Number(o)))&&n.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(l.clause.LIMIT)){var s=e[l.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&n.push("LIMIT must be a non-negative integer")}return t>0&&(n=i.map(n,(function(e){return"Sub-rule "+t+": "+e}))),e.hasOwnProperty(l.clause.FROM)&&(n=n.concat(l.verify(e[l.clause.FROM],t+1))),n},l.select=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return l.operate(t,e)}))}))},l.executeRecursively=function(e,t){var n=t;if(e.hasOwnProperty(l.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[l.clause.FROM]),n=l.executeRecursively(e[l.clause.FROM],n),a.debug("Results after FROM:",n)),a.debug("Evaluating WHERE clause:",e[l.clause.WHERE]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.WHERE])})),a.debug("Results after WHERE:",n),e.hasOwnProperty(l.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[l.clause.AGGREGATE]);var r=l.groupBy(e[l.clause.GROUP_BY],n),o=l.aggregate(e[l.clause.AGGREGATE],r);n=l.project(r,o),a.debug("Results after AGGREGATE:",n)}e.hasOwnProperty(l.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[l.clause.HAVING]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.HAVING])})),a.debug("Results after HAVING:",n)),e.hasOwnProperty(l.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[l.clause.ORDER_BY]),n=l.orderBy(e[l.clause.ORDER_BY],n),a.debug("Results after ORDER_BY:",n));var s=0;e.hasOwnProperty(l.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[l.clause.OFFSET]),s=Number(e[l.clause.OFFSET]));var u;return e.hasOwnProperty(l.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[l.clause.LIMIT]),u=s+Number(e[l.clause.LIMIT])),(s>0||!i.isUndefined(u))&&(n=n.slice(s,u),a.debug("Results after OFFSET/LIMIT:",n)),e.hasOwnProperty(l.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[l.clause.SELECT]),n=l.select(e[l.clause.SELECT],n),a.debug("Results after SELECT:",n)),n},l.execute=function(e,t){e=l.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",t);var n=l.verify(e);if(n.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+n.join("\n"));var i=l.executeRecursively(e,t);return a.debug("Rule result:",i),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),i},l.isSatisfied=function(e,t){try{return l.execute(e,t).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(148))}}),(function(e,t,n){var i=n(149),r=n(143),a=n(145),o=n(2),s=n(19);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity","stores/visitor_events","stores/visitor",function(e,t,n){var u=e.getProjectId(),c=o.filter(o.map(t.getCustomBehavioralAttributes(u),(function(e){try{return{id:e.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(s.parse(e.rule_json))}}catch(e){return}}))),l=r.getEvents(n);return i.evaluate(c,l)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*u.MILLIS_IN_A_DAY;n-=n%u.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(17),o={FIELDS:n(56).FIELDS},s=n(146),u=n(145);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var u=0;u<e.length;u++)o[e[u].id]=e[u].defaultValue;return o}var c=i(n),l=r(n,60);for(u=0;u<e.length;u++){var d=e[u],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=s.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(151)),e.registerAudienceMatcher("first_session",n(152))}}),(function(e,t,n){var i=n(2),r=n(143),a=n(59).getFieldValue,o=n(56);e.exports={provides:"first_session",shouldTrack:!0,getter:["stores/visitor_events",function(e){var t=r.getEvents(e);if(t&&t.length>0){var n=a(t[0],[o.FIELDS.SESSION_ID]);return i.every(t,(function(e){return e[o.FIELDS.SESSION_ID]===n}))}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(154))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(143),d=n(145),f=n(146);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(156)),e.registerVisitorProfileProvider(n(161)),e.registerVisitorProfileProvider(n(162)),e.registerAudienceMatcher("browser_version",n(163))}}),(function(e,t,n){var i=n(157);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(66),a=n(158),o=n(14),s=n(20),u=n(12),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=a.parseUA(r.getUserAgent()),o.dispatch(u.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){var i=n(159),r=n(2);t.parseUA=function(e){var t=new i(e),n=t.getBrowser(),r=t.getOS(),c=t.getDevice(),l=s(c),d=u(r["name"]),f=o(c["type"],l,d);return{browser:{id:a(n["name"]),version:n["version"]},platform:{id:d,version:r["version"]},device:{id:l,type:c["type"]||(f?"mobile":"desktop"),isMobile:f}}};var a=function(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=function(t){return t.toLowerCase()===e};for(var n in c)if(r.some(c[n]||[],t))return n;return"unknown"},o=function(e,t,n){if(r.includes(["mobile","tablet"],e))return!0;if(t&&"unknown"!==t)for(var i in l)if(t===l[i])return!0;var a=["android","blackberry","ios","windows phone"];return!!r.includes(a,n)},s=function(e){return e.model in l?l[e.model]:e.type||"unknown"},u=function(e){return(e||"unknown").toLowerCase()},c={gc:["Chrome","chromium","silk","yandex","maxthon"],edge:["Edge"],ie:["Internet Explorer","iemobile"],ff:["Firefox","iceweasel"],opera:["Opera","opera mini","opera tablet"],safari:["Safari","mobile safari","webkit"],ucbrowser:["UC Browser"]},l={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.12",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",h="model",g="name",v="type",m="vendor",_="version",y="architecture",E="console",I="mobile",T="tablet",S="smarttv",b="wearable",A="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(){for(var e,t,n,i,r,o,s,u=0,f=arguments;u<f.length&&!o;){var p=f[u],h=f[u+1];if(typeof e===l){e={};for(i in h)h.hasOwnProperty(i)&&(r=h[i],typeof r===d?e[r[0]]=a:e[r]=a)}for(t=n=0;t<p.length&&!o;)if(o=p[t++].exec(this.getUA()))for(i=0;i<h.length;i++)s=o[++n],r=h[i],typeof r===d&&r.length>0?2==r.length?typeof r[1]==c?e[r[0]]=r[1].call(this,s):e[r[0]]=r[1]:3==r.length?typeof r[1]!==c||r[1].exec&&r[1].test?e[r[0]]=s?s.replace(r[1],r[2]):a:e[r[0]]=s?r[1].call(this,s,r[2]):a:4==r.length&&(e[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):a):e[r]=s?s:a;u+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[g,_],[/(opios)[\/\s]+([\w\.]+)/i],[[g,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[g,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[g,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[g,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[g,_],[/(yabrowser)\/([\w\.]+)/i],[[g,"Yandex"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[g,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[g,"WeChat"],_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[g,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[g,/(.+)/,"$1 WebView"],_],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[g,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[g,_],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[g,"UCBrowser"],_],[/(dolfin)\/([\w\.]+)/i],[[g,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[g,"Chrome"],_],[/;fbav\/([\w\.]+);/i],[_,[g,"Facebook"]],[/fxios\/([\w\.-]+)/i],[_,[g,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[g,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,g],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[g,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[g,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[g,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[g,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[y,"amd64"]],[/(ia32(?=;))/i],[[y,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[y,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[y,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[y,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[y,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[y,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[h,m,[v,T]],[/applecoremedia\/[\w\.]+ \((ipad)/],[h,[m,"Apple"],[v,T]],[/(apple\s{0,1}tv)/i],[[h,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,h,[v,T]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[h,[m,"Amazon"],[v,T]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[h,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[h,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[h,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,h,[v,I]],[/\(bb10;\s(\w+)/i],[h,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[h,[m,"Asus"],[v,T]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[h,"Xperia Tablet"],[v,T]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[h,"Xperia Phone"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,h,[v,E]],[/android.+;\s(shield)\sbuild/i],[h,[m,"Nvidia"],[v,E]],[/(playstation\s[34portablevi]+)/i],[h,[m,"Sony"],[v,E]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[h,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,h,[v,T]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[h,/_/g," "],[v,I]],[/(nexus\s9)/i],[h,[m,"HTC"],[v,T]],[/(nexus\s6p)/i],[h,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,h,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[h,[m,"Microsoft"],[v,E]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[h,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[h,[m,"Motorola"],[v,T]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[h,w.trim],[v,S]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[m,"Samsung"],[v,S]],[/\(dtv[\);].+(aquos)/i],[h,[m,"Sharp"],[v,S]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],h,[v,T]],[/smart-tv.+(samsung)/i],[m,[v,S],h],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],h,[v,I]],[/sie-(\w+)*/i],[h,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],h,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[h,[m,"Acer"],[v,T]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],h,[v,T]],[/(lg) netcast\.tv/i],[m,h,[v,S]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[h,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[h,[m,"Lenovo"],[v,T]],[/linux;.+((jolla));/i],[m,h,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,h,[v,b]],[/android.+;\s(glass)\s\d/i],[h,[m,"Google"],[v,b]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+a000(1)\s+build/i],[h,[m,"OnePlus"],[v,I]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,h]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[g,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[g,_],[/rv\:([\w\.]+).*(gecko)/i],[_,g]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[g,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[g,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[g,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[g,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[g,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[g,"Symbian"],_],[/\((series40);/i],[g],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[g,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[g,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[g,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[g,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[g,_],[/(haiku)\s(\w+)/i],[g,_],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[g,"iOS"],[_,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[g,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[g,_]]},O=function(e,t){if(!(this instanceof O))return new O(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e=D.rgx.apply(this,i.browser);return e.major=w.major(e.version),e},this.getCPU=function(){return D.rgx.apply(this,i.cpu)},this.getDevice=function(){return D.rgx.apply(this,i.device)},this.getEngine=function(){return D.rgx.apply(this,i.engine)},this.getOS=function(){return D.rgx.apply(this,i.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};O.VERSION=o,O.BROWSER={NAME:g,MAJOR:p,VERSION:_},O.CPU={ARCHITECTURE:y},O.DEVICE={MODEL:h,VENDOR:m,TYPE:v,CONSOLE:E,MOBILE:I,SMARTTV:S,TABLET:T,WEARABLE:b,EMBEDDED:A},O.ENGINE={NAME:g,VERSION:_},O.OS={NAME:g,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=O),t.UAParser=O):"function"===c&&n(160)?(i=function(){return O}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r.UAParser=O;var x=r.jQuery||r.Zepto;if(typeof x!==l){var C=new O;x.ua=C.getResult(),x.ua.get=function(){return C.getUA()},x.ua.set=function(e){C.setUA(e);var t=C.getResult();for(var n in t)x.ua[n]=t[n]}}})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(164).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){
var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(166)),e.registerAudienceMatcher("campaign",n(167))}}),(function(e,t,n){var i=n(87);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(168);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(170))}}),(function(e,t,n){var i=n(2),r=n(102);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("cookies",n(173))}}),(function(e,t,n){var i=n(80);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(168);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(175));var t=n(176);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(17),a=n(18),o=n(20),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:a.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var a=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,a={id:u.segmentId||u.id,value:t.value}):c||r.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=a,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(168);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(178)),e.registerVisitorProfileProvider(n(179)),e.registerAudienceMatcher("device",n(180))}}),(function(e,t,n){var i=n(157);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.id?e.id:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(182)),e.registerAudienceMatcher("query",n(183))}}),(function(e,t,n){var i=n(87);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(2),r=n(168);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("referrer",n(186))}}),(function(e,t,n){var i=n(65),r=n(118);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(187);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("&"),i=[];return s.each(n,(function(e){0!==e.indexOf(c)&&i.push(e)})),t[1]=i.join("&"),t.join("?")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(189)),e.registerAudienceMatcher("source_type",n(191))}}),(function(e,t,n){var i=n(65),r=n(190),a=n(87),o=n(118),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(a.getQueryParamValue("utm_source")||a.getQueryParamValue("gclid")||a.getQueryParamValue("otm_source"))return"campaign";for(var e=o.getReferrer()||i.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&r.getDomain(e)!==r.getDomain(a.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(168);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(193)),e.registerVisitorProfileProvider(n(194)),e.registerAudienceMatcher("time_and_day",n(195))}}),(function(e,t,n){var i=n(10);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(196);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){e.exports=function(e){e.registerAnalyticsTracker("avro",n(198))}}),(function(e,t,n){function i(e){function t(e,t,n){var i=g({type:R,name:n,value:t});return i&&e.push(i),e}var n=y.keys(G),i=y.omit(e,n),r=y.pick(e,n),a=y.reduce(i,t,[]),o=y.reduce(r,(function(e,n,i){var r=G[i];r.excludeFeature||t(a,n,i);try{r.validate(n),n=r.sanitize(n),e.push({name:i,value:n})}catch(e){E.emitError(new j("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),[]);return{eventFeatures:a,eventMetrics:o}}function r(e,t){var n=u(e,t),r=i(e.eventTags);return r.eventFeatures.push(g({type:D,name:"",value:e.viewCategory})),y.extend(n,r,{eventEntityId:e.pageId,eventType:N,eventName:e.pageId})}function a(e,t,n){var i=u(e,t),r=e.event.pageId,a=[],o=[];if(a.push(g({type:A,name:"selector",value:e.selector})),a.push(g({type:A,name:"view_id",value:e.event.pageId})),r){var s=n.getActivationEventId(e.event.pageId);s&&o.push({eventId:n.getActivationEventId(e.event.pageId),relationship:H.VIEW_ACTIVATED})}return y.forOwn(e.eventTags,(function(e,t){var n=g({type:R,name:t,value:e},P);n&&a.push(n)})),y.extend(i,{eventEntityId:e.event.id,eventType:e.event.category,eventName:e.event.apiName,eventFeatures:a,relatedEvents:o})}function o(e,t){var n=u(e,t),r=i(e.eventTags);return y.extend(n,r,{eventEntityId:e.eventEntityId,eventType:e.eventCategory,eventName:e.eventApiName})}function s(e,t){var n=u(e,t);return n.layerStates=[],y.extend(n,{eventType:x,eventName:O})}function u(e,t){var n=f(e.userFeatures),i=p(e.activeViewStates,t),r=d(e.layerStates),a=y.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{eventId:e.eventId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,eventFeatures:[],eventMetrics:[],relatedEvents:[],layerStates:r,userFeatures:n,activeViews:i,isGlobalHoldback:e.isGlobalHoldback}}function c(e){var t=y.map(e.decisionTicketAudienceIds,(function(e){return{id:e}})),n=f(e.userFeatures);return{decisionId:e.decisionId,anonymizeIP:e.anonymizeIP,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:e.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,decisionTicket:{audiences:t,bucketingId:e.visitorUUID||e.visitorId},decision:h(e),userFeatures:n,isGlobalHoldback:!1}}function l(e){var t=e.decisionTicket,n=e.decision,i=y.map(t.audienceIds,(function(e){return{id:e}})),r=f(e.userFeatures),a=y.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{decisionId:e.decisionId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:n.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:B.getRandomId(),visitorUUID:B.getUUID(),decisionTicket:{audiences:i,bucketingId:t.bucketingId},decision:h(n),userFeatures:r,isGlobalHoldback:U.isGlobalHoldback()}}function d(e){return y.map(e,(function(e){var t=null,n=e.decisionTicket;if(n){var i=y.map(n.audienceIds,(function(e){return{id:e}}));t={audiences:i,bucketingId:n.bucketingId}}return{layerId:e.layerId,revision:e.revision,decisionTicket:t,decision:h(e.decision),decisionActivationId:e.decisionActivationId,decisionSessionId:e.decisionSessionId,decisionEventId:e.decisionEventId,decisionTimestamp:e.decisionTimestamp,actionTriggered:e.actionTriggered,actionSessionId:e.actionSessionId,actionActivationId:e.actionActivationId,actionTimestamp:e.actionTimestamp}}))}function f(e){return y.reduce(e,(function(e,t){try{v(t.value),e.push(y.pick(t,["id","type","name","shouldIndex","value"]))}catch(e){P.warn("Error evaluating user feature",t,e)}return e}),[])}function p(e,t){return y.map(e,(function(e){var n=[];try{var i=t.get(e.id);n.push(g({type:D,name:"",value:i.category}))}catch(t){P.error("Unable to find Page category for Page with id",e.id)}return y.forOwn(e.metadata,(function(e,t){var i=g({type:w,name:t,value:e},P);i&&n.push(i)})),{viewId:e.id,activatedTimestamp:e.activatedTimestamp,viewFeatures:n}}))}function h(e){return y.pick(e,["experimentId","variationId","isLayerHoldback"])}function g(e){var t=y.extend({id:null,shouldIndex:!0},e);try{v(e.value)}catch(t){return void P.error("Error evaluating feature:",e,t)}return t}function v(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=k.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function m(e){if(null==e)throw new Error("Metric value is null");if(!y.isNumber(e))throw new Error("Metric value is not numeric")}function _(e){return C?L:e}var y=n(2),E=n(78),I=n(117),T="https://logx.optimizely.com",S=T+"/log/decision",b=T+"/log/event",A="event",w="view_tag",D="view_category",R="tags",N="view_activated",O="client_activation",x="client_activation",C=!0,L="AUTO",P=n(17),k=n(19),F=n(11),V=n(74).create,M=n(20),U=M.get("stores/global"),B=M.get("stores/visitor_id"),j=t.Error=V("AvroError"),G={revenue:{validate:m,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:m,sanitize:Math.floor,excludeFeature:!0},value:{validate:m,sanitize:y.identity}},H={VIEW_ACTIVATED:"view_activation"};t.preRedirectPolicy=I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,t.postRedirectPolicy=I.PostRedirectPolicies.TRACK_AFTER_SYNC,t.nonRedirectPolicy=I.NonRedirectPolicies.TRACK_IMMEDIATELY,t.trackLayerDecision=function(e){var t=c(e);F.retryableRequest({url:S,method:"POST",data:t},t.decisionId)},t.onLayerDecision=[function(){return function(e){var t=l(e);F.retryableRequest({url:S,method:"POST",data:t},t.decisionId)}}],t.onPageActivated=["stores/view_data",function(e){return function(t){var n=r(t,e,P);F.retryableRequest({url:b,method:"POST",data:n},n.eventId)}}],t.onClientActivation=["stores/view_data",function(e){return function(t){var n=s(t,e,P);F.retryableRequest({url:b,method:"POST",data:n},n.eventId)}}],t.onCustomEvent=["stores/view_data",function(e){return function(t){var n=o(t,e);F.retryableRequest({url:b,method:"POST",data:n},n.eventId)}}],t.onClickEvent=["stores/view_data","stores/view",function(e,t){return function(n){var i=a(n,e,t);F.retryableRequest({url:b,method:"POST",data:i},i.eventId)}}]}),(function(e,t,n){function i(e){var t=e.getGlobal(d);return t?e.getGlobal(t):null}var r=n(2),a=n(17),o=n(122),s=n(118),u=n(66),c=n(117),l=n(19),d="GoogleAnalyticsObject",f=150,p="google_universal_analytics",h=n(126),g=["stores/layer_data",function(e,t){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,o=t.decision.variationId,s=e.get(n),u=t.decision.isLayerHoldback,c=r.find(s.experiments,{id:i});if(c){var l=c["integrationSettings"]||s["integrationSettings"]||{};if(l){var d=l[p];if(d){var g=r.find(c.variations,{id:o});if(g){var v=h.generateAnalyticsString(s,c,g,u,f,!0);if(v)return m(v,d)["catch"]((function(e){a.warn("Tracker for",p,"failed:",e)}))}}}}}}],v=function(e){var t=e.integrationSettings;if(t&&t[p]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},o=e.isLayerHoldback,s=h.generateAnalyticsString(n,i,r,o,f,!0);if(s)return m(s,t[p])["catch"]((function(e){a.warn("Tracker for",p,"failed:",e)}))}},m=function(e,t){var n=50,r=200;return o.pollFor((function(){return i(u)}),r,n).then((function(n){var i=t.universal_analytics_tracker,r=i?i+".":"",a=t.universal_analytics_slot,o=s.getReferrer();o&&n(r+"set","referrer",o);var u={nonInteraction:!0};u["dimension"+a]=e,n(r+"send","event","Optimizely","Assigned To Campaign",u)}))},_={preRedirectPolicy:c.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:c.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:c.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:g,trackLayerDecision:v,serializeSettings:l.stringify,deserializeSettings:l.parse};e.exports=function(e){e.registerAnalyticsTracker("google_universal_analytics",_)}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(201)),e.registerViewMatcher("url",n(202))}}),(function(e,t,n){var i=n(87);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(187);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){var i=n(112).enums.locatorType;e.exports=function(e){e.registerViewTagLocator(i.JAVASCRIPT,n(204))}}),(function(e,t,n){var i=n(205),r=n(102);e.exports=function(e,t){var n=e.locator;if("function"==typeof n){var a=r.apply(n,t);return i(e.valueType,a)}return null}}),(function(e,t,n){var i=n(112).enums,r=n(112).Error,a=n(2);e.exports=function(e,t){if(a.isUndefined(t)||a.isNull(t))return t;var n=t;switch(e){case i.valueType.STRING:a.isString(t)||(n=String(t));break;case i.valueType.NUMBER:if(n=Number(t),isNaN(n))throw new r(t+" is not a number");break;case i.valueType.CURRENCY:if(n=Number(t),isNaN(n)||Math.floor(n)!==n)throw new r(t+" cannot be parsed as currency (must be an integer)");break;default:throw new r("Unknown ViewTag type: "+e)}return n}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(207),a=n(115),o=n(17),s=n(110);e.exports=function(e){var t=new r(function(e){s.updateAllViewTags();var t=a.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=function(e){a.forEach(this.events,function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){c.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}.bind(this))}.bind(this)}function r(e,t,n){for(var i=e.target,r=0;i;){var o;try{o=s(i,t)}catch(o){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:o.message,eventId:n.id};return c.emitError(new l("Unable to evaluate match for element"),u),!1}if(o)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(74).create,s=n(208),u=n(65),c=n(78),l=t.Error=o("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(209)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){this.change=e,this.identifier=t.identifier,this.startTime=t.startTime}var r=n(2),a=n(100),o=n(211),s=n(212),u=n(65),c=n(213),l=n(17),d=n(99),f=n(127).create();i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=o();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);this.unobserveSelector=f.observeSelector(this.change.selector,this.applyToElement.bind(this),{timeout:r.partial(d.isTimedOut,this.startTime),onTimeout:r.partial(this.applyDeferred.reject,new Error("Unable to find selector."))});var t=u.querySelectorAll(this.change.selector);r.each(t,this.applyToElement.bind(this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.applyToElement=function(e){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return void l.debug("Not applying AppendChange to element",e,"because it was inserted by this change");var n;switch(this.change.operator){case c.DOMInsertionType.AFTER:n=c.insertAdjacentHTMLType.AFTER_END;break;case c.DOMInsertionType.APPEND:n=c.insertAdjacentHTMLType.BEFORE_END;break;case c.DOMInsertionType.BEFORE:n=c.insertAdjacentHTMLType.BEFORE_BEGIN;break;case c.DOMInsertionType.PREPEND:n=c.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=c.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),s.setData(e,this.change.id,this.identifier,[]);var i,o,d=this.numberOfRootNodes(this.change.value)-1;n===c.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,o=this.getSiblingElements(i,d,!1)):n===c.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,o=this.getSiblingElements(i,d,!0)):n===c.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,o=this.getSiblingElements(i,d,!1)):n===c.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,o=this.getSiblingElements(i,d,!0)),o.unshift(i),r.each(o,function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:u.parentElement(e);n.setAttribute(t,"");var i=s.getData(n,this.change.id,this.identifier)||[];i.push(e),s.setData(n,this.change.id,this.identifier,i),r.each(u.childrenOf(n),function(e){e.setAttribute(t,"")}.bind(this))}.bind(this)),this.applyDeferred.resolve()},e.exports=function(e){e.registerChangeApplier(c.changeType.APPEND,i)}}),(function(e,t,n){var i=n(2),r=n(6).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t){function n(e,t){return[e,t].join("_")}t.getData=function(e,t,i){var r=n(t,i);return e.optimizelyChangeData&&e.optimizelyChangeData[r]?e.optimizelyChangeData[r]:null},t.removeData=function(e,t,i){e.optimizelyChangeData&&delete e.optimizelyChangeData[n(t,i)]},t.setData=function(e,t,i,r){if("object"!=typeof r)throw new Error("setData expects an object");e.optimizelyChangeData||(e.optimizelyChangeData={}),e.optimizelyChangeData[n(t,i)]=r}}),(function(e,t,n){var i=n(13);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e,t){this.change=r.cloneDeep(e),this.change=f.transformVisibilityAttributesToCSS(this.change),this.change=f.mergeCSSWithStyle(this.change),this.identifier=t.identifier,this.startTime=t.startTime}var r=n(2),a=n(100),o=n(211),s=n(212),u=n(65),c=n(213),l=n(17),d=n(99),f=n(215),p=n(127).create();i.prototype.apply=function(){this.applyDeferred=o();try{this.unobserveSelector=p.observeSelector(this.change.selector,this.applyToElement.bind(this),{timeout:r.partial(d.isTimedOut,this.startTime),onTimeout:r.partial(this.applyDeferred.reject,new Error("Unable to find selector."))});var e=u.querySelectorAll(this.change.selector);r.each(e,this.applyToElement.bind(this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.applyToElement=function(e){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t)){var n="AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e;return l.debug(n),void this.applyDeferred.reject(n)}var i={};r.forOwn(this.change.attributes,(function(n,a){switch(a){case c.selectorChangeType.CLASS:r.isUndefined(e.className)||(i[c.selectorChangeType.CLASS]=e.className,e.className=n);break;case c.selectorChangeType.HREF:r.isUndefined(e.href)||(i[c.selectorChangeType.HREF]=e.href,e.href=n);break;case c.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(i[c.selectorChangeType.HTML]=e.innerHTML,e.innerHTML=n,r.each(u.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case c.selectorChangeType.SRC:r.isUndefined(e.src)||(i[c.selectorChangeType.SRC]=e.src,e.src=n);break;case c.selectorChangeType.STYLE:r.isUndefined(e.style.cssText)||(i[c.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=n);break;case c.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(i[c.selectorChangeType.TEXT]=e.textContent,e.textContent=n);break;default:throw new Error("Unrecognized attribute: "+a)}})),e.setAttribute(t,""),s.setData(e,this.change.id,this.identifier,i),this.applyDeferred.resolve()},e.exports=function(e){e.registerChangeApplier(c.changeType.ATTRIBUTE,i)}}),(function(e,t,n){var i=n(2),r=n(213);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.mergeCSSWithStyle=function(e){if(!e.css)return e;var t=e.attributes&&e.attributes.style||"",n="";i.each(e.css,(function(e,i){var r=new RegExp(i+"\\s?:");t&&r.test(t)||(n+=i+": "+e+"; ")}));var r=i.cloneDeep(e);return r.attributes||(r.attributes={}),r.attributes.style=n+t,delete r.css,r}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(211),o=n(213),s=n(102);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(105),r=n(106).DecisionError,a="single_experiment",o={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,o)}})]);