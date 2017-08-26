(function() {
  var Clearbit, providePlugin,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  providePlugin = function(pluginName, pluginConstructor) {
    var tryApply = function() {
      var ga = window[window['GoogleAnalyticsObject'] || 'ga'];

      if (typeof ga === 'function') {
        ga('provide', pluginName, pluginConstructor);
        return true;
      } else {
        return false;
      }
    }

    if (tryApply()) {
      // Native support
    } else if (window.analytics && typeof window.analytics.ready === 'function') {
      // Segment support
      analytics.ready(tryApply);
    } else {
      console.error("Clearbit error: 'ga' variable not found.");
    }
  };

  Clearbit = (function() {
    function Clearbit(tracker, config) {
      this.tracker = tracker;
      this.config = config != null ? config : {};
      this.triggerEvent = bind(this.triggerEvent, this);
      this.setDimensions = bind(this.setDimensions, this);
      this.set = bind(this.set, this);
      this.done = bind(this.done, this);
      this.mapping = this.config.mapping || {};
      this.done({"ip":"14.1.51.50","domain":"bizdojo.com","fuzzy":true,"company":{"id":"6ba5de1b-50dd-4329-9904-6e7538608f6a","name":"BizDojo","legalName":null,"domain":"bizdojo.com","domainAliases":["bizdojo.co.nz","collaborators.co"],"url":"http://bizdojo.com","site":{"url":"http://bizdojo.com","title":"BizDojo","h1":"Hello. We are BizDojo.","metaDescription":"The future of work is social\r\nBIZDOJO\r\n\r\nCommunity and space where you and your business can grow\r\n\r\nFind a location","metaAuthor":null,"phoneNumbers":["+64 800 249 3656"],"emailAddresses":["timmy@bizdojo.com","jessica.gasiunas@bizdojo.com","petreece@bizdojo.com","ryan@bizdojo.com","violet@bizdojo.com","annie@bizdojo.com","Heloise@bizdojo.com","jonah@bizdojo.com","nick@bizdojo.com","lachlan@bizdojo.com"]},"category":{"sector":null,"industryGroup":null,"industry":null,"subIndustry":null},"tags":["Marketplace","B2B"],"description":"The future of work is social\r\nBIZDOJO\r\n\r\nCommunity and space where you and your business can grow\r\n\r\nFind a location","foundedYear":null,"location":"c/o The BizDojo, Suite 205, Ironbank, 150 Karangahape Rd, Grafton, Auckland 1010, New Zealand","timeZone":"Pacific/Auckland","utcOffset":12,"geo":{"streetNumber":"150","streetName":"Karangahape Road","subPremise":null,"city":"Auckland","postalCode":"1010","state":"Auckland","stateCode":"Auckland","country":"New Zealand","countryCode":"NZ","lat":-36.8580469,"lng":174.7605157},"logo":"https://logo.clearbit.com/bizdojo.com","facebook":{"handle":"bizdojo"},"linkedin":{"handle":"company/the-bizdojo"},"twitter":{"handle":"BizDojo","id":"75989300","bio":"NZ’s leading coworking community in Auckland, Wellington \u0026 Christchurch. For creatives, freelancers, independents \u0026 start-ups. Collaboration is in our DNA.","followers":6600,"following":1214,"location":"Aotearoa","site":"https://t.co/HeKxb1mtzD","avatar":"https://pbs.twimg.com/profile_images/748708679763963904/WOp6ndzw_normal.jpg"},"crunchbase":{"handle":"organization/the-bizdojo"},"emailProvider":false,"type":"private","ticker":null,"phone":null,"metrics":{"alexaUsRank":3822654,"alexaGlobalRank":3063624,"googleRank":null,"employees":5,"employeesRange":"1-10","marketCap":null,"raised":null,"annualRevenue":null},"tech":["typekit_by_adobe","google_tag_manager","instagram","squarespace","facebook_connect","facebook_advertiser","google_analytics","amazon_s3"]}});
    }

    Clearbit.prototype.done = function(response) {
      if (!(response != null ? response.company : void 0)) {
        return;
      }
      this.setDimensions(response.company);
      return this.triggerEvent(response.company);
    };

    Clearbit.prototype.set = function(key, value) {
      if (key && value) {
        return this.tracker.set(key, value);
      }
    };

    Clearbit.prototype.setDimensions = function(company) {
      var ref, ref1;
      this.set(this.mapping.companyName, company.name);
      this.set(this.mapping.companyDomain, company.domain);
      this.set(this.mapping.companyType, company.type);
      this.set(this.mapping.companyTags, (ref = company.tags) != null ? ref.join(',') : void 0);
      this.set(this.mapping.companyTech, (ref1 = company.tech) != null ? ref1.join(',') : void 0);
      this.set(this.mapping.companySector, company.category.sector);
      this.set(this.mapping.companyIndustryGroup, company.category.industryGroup);
      this.set(this.mapping.companyIndustry, company.category.industry);
      this.set(this.mapping.companySubIndustry, company.category.subIndustry);
      this.set(this.mapping.companyCountry, company.geo.countryCode);
      this.set(this.mapping.companyState, company.geo.stateCode);
      this.set(this.mapping.companyCity, company.geo.city);
      this.set(this.mapping.companyFunding, company.metrics.raised);
      this.set(this.mapping.companyEmployeesRange, company.metrics.employeesRange);
      this.set(this.mapping.companyEmployees, company.metrics.employees);
      return this.set(this.mapping.companyAlexaRank, company.metrics.alexaGlobalRank);
    };

    Clearbit.prototype.triggerEvent = function(company) {
      return this.tracker.send(
        'event',
        'Clearbit',
        'Enriched',
        'Clearbit Enriched',
        {nonInteraction: true}
      );
    };

    return Clearbit;

  })();

  providePlugin('Clearbit', Clearbit);

  

  

}).call(this);
