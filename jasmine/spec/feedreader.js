// Author: Tim Gamboa
// Date: Sept 2015
// File Description: This file contains the specs to test the functionality of the application

$(function() {
    //The RSS Feeds suite checks that the feeds array and objects exist and have data
    describe('RSS Feeds', function() {
        //Checks the array to make sure it exists, it is an array and has at least 1 entry
        it('array is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(typeof allFeeds).toBe('object');
            expect(allFeeds.length).not.toBe(0);
        });

        //Ensures that the URL for each object exists, it is a string and is not empty
        it('urls are defined and not empty', function() {
            expect(typeof feed.url).toBe('string');
            for(var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(typeof allFeeds[i].url).toBe('string');
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        //Ensures that the name for each object exists and is not empty
        it('names are defined and not empty', function() {
            var allFeedsLength = allFeeds.length;
            for(var i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(typeof allFeeds[i].name).toBe('string');
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    //The Menu suite tests the hiding and showing functionality of the menu using the menu icon
    describe('The menu', function() {
        //Tests that the menu is hidden by default (at page load)
        it('is hidden by default', function() {
            //Since the 'menu-hidden' class is present in the body element when the menu
            //is hidden, the test is to check if it exists....if it exists, then true and
            //test is successful
            var bodyClassExists = $('body').hasClass('menu-hidden');
            expect(bodyClassExists).toBe(true);
        });

        //Tests that the menu appears when clicking on the menu icon and disappears when clicking it again
        it('is displayed on click and hidden on subsequent click', function() {
            var bodyClassType;
            //Based on the previous test, a click trigger is performed and the presence
            //of the 'menu-hidden' class is checked
            $('.menu-icon-link').trigger('click');
            bodyClassType = $('body').hasClass('menu-hidden');
            expect(bodyClassType).toBe(false); //menu should be displayed
            $('.menu-icon-link').trigger('click');
            bodyClassType = $('body').hasClass('menu-hidden');
            expect(bodyClassType).toBe(true); //menu should be hidden
        });
    });

    //The Initial Entries suite tests that at least 1 entry for a feed is loaded to the page
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done); //Calls the loadFeed function, then the done() callback
        });

        //Finds all of the .entry elements under the main .feed element and checks that length is greater than 0
        it("should contain at least a 1 entry element", function(done) {
            var entryLength = $('.feed').find('.entry').length;
            expect(entryLength).toBeGreaterThan(0); //Checks that number of entry elements is greater than 0
            done();
        });
    });

    //The New Feed Selection suite tests that the content actually changes when a new feed is loaded
    describe('New Feed Selection', function() {
        var entryContent1;
        beforeEach(function(done) {
            loadFeed(0, function() {
                //Calls the loadFeed function with the 0 index feed, then gathers the
                //h2 and p text data from those elements based on the 0 index feed
                entryContent1 = $('.feed').find('.entry').text();
                loadFeed(1, done); //Calls loadFeed again with the 1 index feed, then the done() callback
            });
        });

        it("should changing content when new feed is loaded", function(done) {
            //Collects the 1 index feed h2 and p text data from that set of elements in a new variable
            var entryContent2 = $('.feed').find('.entry').text();
            expect(entryContent1).not.toBe(entryContent2); //Compares the 0 and 1 feed data
            done();
        });
    });
}());