=== Plugin Name ===
Contributors: Dan Dietz
Donate link: http://www.limeleafllc.com/code/collapse-sub-pages/
Tags: wp-admin, collapse, edit pages, admin, pages
Requires at least: 2.9
Tested up to: 2.9.2
Stable tag: 0.0.7

Simply hides any child/sub pages on the Edit Pages admin screen (edit-pages.php). Adds child expand and collapse controls.

== Description ==

This wordpress plugin simply hides any child/sub pages on the Edit Pages admin screen (edit-pages.php). You can click to expand/collapse the child pages for any particular parent, and also expand/collapse all.

Current Features:

*   Collapse all child pages when Edit Pages loads
*	Expand and collapse child pages using a button on the parent
*   Remembers your settings, so you can leave and come back to the page just how you left it
*	Expand and collapse all links (at to top of page)
*	Auto expands items when conducting a searching (if parent is not returned)
*	Nice looking icons

A few notes:

*   This is a javascript/jquery driven plugin
*   Your Edit Pages screen will load normally, then the javascript plugin will collapse child pages
*   This is not fancy, it is simply designed to get the job done

== Installation ==

1. Download and un-zip archive
1. Upload `collapse-sub-pages` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Enjoy a de-cluttered Edit Pages screen 

== Frequently Asked Questions ==

= Why does the Edit Pages screen load and then collapse suddenly? =

The plugin is javascript driven.  So it depends on the page fully loading, and then collapsing the items that are children. Sorry, that's just how it works. It's not fancy, we know.

= I just searched for a page, why doesn't it show? =

This issue is resolved in version 0.0.3 and up. If you're still having trouble, try clicking the 'Expand All' link at the top of the page.

= What about some amazing features? =

Yeah, we know this plugin could have a million bells and whistles.  But the bottom line is that we probably won't implement them since we're getting the job done with what it already does.  Feel free to modify the plugin with whatever extras you want (and let us know, we just might include your changes).

== Screenshots ==

1. After activation all child/sub pages on the Edit Pages admin screen will collapse. Some cool new links will be available at the top, along with the +/- icons next to each parent.
2. Clicking will expand the immediate children for that parent page, further nested children will remain collapsed until expanded.

== Changelog ==

= 0.0.7 = 
* Added feature to remember the previously collapsed configuration (requires cookies enabled)

= 0.0.6 = 
* Updated style sheet location (inside css dir again)

= 0.0.5 = 
* Correcting the published .zip package

= 0.0.4 =
* Corrected main version number

= 0.0.3 =
* No real code changes
* Correcting readme.txt
* Moved css file (wordpress was ignoring my css dir??)

= 0.0.2 =
* Added admin check to prevent needlessly loading script on front end pages.
* Added check to prevent collapsing children if parent is not on page (ie. when doing searches).
* Added +/- icons that toggle when clicked.

= 0.0.1 =
* Initial release.

== Upgrade Notice ==
