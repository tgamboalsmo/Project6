/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('array is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined and not empty', function() {
         	var allFeedsLength = allFeeds.length;
         	for(var i=0;i<allFeedsLength;i++){
         		expect(allFeeds[i].url).toBeDefined(); //Checks if url is defined
         		expect(allFeeds[i].url).not.toBe('');  //Checks if url is not empty
         	}
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined and not empty', function() {
         	var allFeedsLength = allFeeds.length;
         	for(var i=0;i<allFeedsLength;i++){
         		expect(allFeeds[i].name).toBeDefined(); //Checks if name is defined
         		expect(allFeeds[i].name).not.toBe(''); //Checks if name is not empty
         	}
         });
    });


    /* TODO: Write a new test suite named "The menu" */
	describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
         	//Since the 'menu-hidden' class is present in the body element when the menu
         	//is hidden, the test is to check if it exists....if it exists, then true and
         	//test is successful
         	var bodyClassExists = $('body').hasClass('menu-hidden');
         	expect(bodyClassExists).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('is displayed on click and hidden on subsequent click', function() {
          	var bodyClassType;
          	//Based on the previous test, a click trigger is performed and the presence
          	//of the 'menu-hidden' class is checked
          	$('.menu-icon-link').trigger('click');
          	bodyClassType = $('body').hasClass('menu-hidden');
         	expect(bodyClassType).toBe(false);	//menu should be displayed
         	$('.menu-icon-link').trigger('click');
         	bodyClassType = $('body').hasClass('menu-hidden');
         	expect(bodyClassType).toBe(true); //menu should be hidden
          });
	});
	
    /* TODO: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {
		beforeEach(function(done) {
			loadFeed(0, done); //Calls the loadFeed function, then the done() callback
  		});
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */	
  		it("should contain at least a 1 entry element", function(done) {
    		var entryLength = $('.feed').find('.entry').length;
    		expect(entryLength).toBeGreaterThan(0); //Checks that number of entry elements is greater than 0
    		done();
  		});
	});

    /* TODO: Write a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		var entryContent1;
		beforeEach(function(done) {
			loadFeed(0, function() {
				//Calls the loadFeed function with the 0 index feed, then gathers the
				//h2 and p text data based on the 0 index feed
				entryContent1 = $('.feed').find('.entry').text();
				loadFeed(1, done); //Calls loadFeed again with the 1 index feed, then the done() callback
			});
  		});
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it("should changing content when new feed is loaded", function(done) {
        	//Collects the 1 index feed h2 and p text data in a new variable
    		var entryContent2 = $('.feed').find('.entry').text();
    		expect(entryContent1).not.toBe(entryContent2); //Compares the 0 and 1 feed data
    		done();
  		});
    });   
}());
