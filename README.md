# Application Description and How-To
The application is an RSS feed reader that uses the Google Feed Reader API to get the 
information. There are 4 hard coded feeds that are used to display various feed topics.
The feed loads with one particular feed showing with several sub-topics. Each of the sub-topics
can be clicked on to go to that respective website. To change the feed, click on the 
hamburger icon in the upper left hand corner, this will display the hidden menu on the
left (this menu is hidden by default). The menu will show a list of addition feed options.
Clicking on one will show sub-topics for that feed and will cause the menu to be hidden
again.
* To run the application:
	1. Locate the index.html file in the Project6 directory.
	2. Double click it to launch the application in your default browser.
	3. Once the page has loaded, you will see the initial initial feed that has been loaded
	   by looking at the title on the left side of the thick green bar at the top of the
	   screen.
	4. To see the feed menu - Click on the 'hamburger' icon in the upper left hand corner.
	   A menu will appear from the left with the available options. Click on the 'hamburger'
	   icon again to make it disappear.
	5. To select a new feed - Click on the 'hamburger' icon in the upper left hand corner.
	   A menu will appear from the left with the available options. Click on the feed you
	   want to see. This will change the title at the top of the screen and the available
	   blogs/articles to select from. The menu will also disappear back to the left automatically.
	6. To view blog/article for a particular feed - Click anywhere on the row of the article 
	   you want to view. This will take browser to that blog/article within the same window
	   (will not open a new window or tab).

## Application Testing How-To
Application is being performed using the Jasmine library. The testing specifications are
in the feedreader.js file. Testing information is displayed at the bottom of the webpage
using Jasmine.

Testing is performed using 4 test suites:
1.  RSS Feeds - This tests 3 scenarios:
	a.  Verifies that the allFeeds array is defined and not empty.
	b.  Verifies that the URL is defined and not empty in each object stored in the
		allFeeds array.
	c.  Verifies that the name is defined and not empty in each object stored in the
		allFeeds array.
2.  The Menu - This test 2 scenarios:
	a.  Checks that the menu is hidden by default.
	b.  Checks that the menu is displayed when the menu icon is clicked as well as if the
		menu is hidden again when the menu icon is clicked again.
3.  Initial Entries - This has 1 test scenario:
	a.  Ensures that at least 1 entry exists for a feed in the feed container
4.  New Feed Selection - This has 1 test scenario:
	a.  Ensures that when the loadFeed function is called for a new feed that the content
		is actually changed.