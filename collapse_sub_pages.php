<?php
/*
Plugin Name: Collapse Sub-Pages
Plugin URI: http://www.limeleafllc.com/code/
Description: Collapses sub-pages on the Edit Pages page, providing easier management when you have lots of pages with children.  Family management, limeleaf style.
Author: Dan Dietz - limeleaf
Version: 0.0.7

Author URI: http://limeleafllc.com

Copyright 2010 by Dan Dietz & limeleaf llc

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/
 
// Stop direct call
if(preg_match('#' . basename(__FILE__) . '#', $_SERVER['PHP_SELF'])) { die('You are not allowed to call this page directly.'); }

// ini_set('display_errors', '1');
// ini_set('error_reporting', E_ALL);
if (!class_exists('collapsePagesLoader')) {
class collapsePagesLoader {

	var $version     = '0.0.1';
	var $minium_WP   = '2.9';
	//var $updateURL   = 'http://nextgen.boelinger.com/version.php';
	//var $donators    = 'http://nextgen.boelinger.com/donators.php';
	
	function collapsePagesLoader() {
		//Define constants
		define('COLLAPSEPAGES_URLPATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );
		
		if ( is_admin() ) {
			//Load Scripts
			wp_enqueue_script('jquery');
			wp_enqueue_script('jquery-cookie', COLLAPSEPAGES_URLPATH .'js/jquery.cookie.js', 'jquery', '1.0');
			wp_enqueue_script('collapse_pages', COLLAPSEPAGES_URLPATH .'js/collapse_pages.js', FALSE, '2.1');
		
			//Load Styles
			wp_enqueue_style('collapse_pages_styles', COLLAPSEPAGES_URLPATH .'css/collapse_pages_styles.css', false, '0.0.1', 'screen');
			
		}//-if ( is_admin() )
		
		//Add some links on the plugin page
		add_filter('plugin_row_meta', array(&$this, 'add_plugin_links'), 10, 2);
	}
	
	// Taken from Google XML Sitemaps from Arne Brachhold
	function add_plugin_links($links, $file) {
		
		if ( $file == plugin_basename(__FILE__) ) {
			$links[] = '<a href="http://www.limeleafllc.com/code/collapse-sub-pages/">Overview</a>';
			$links[] = '<a href="http://wordpress.org/tags/collapse-sub-pages?forum_id=10">Get help</a>';
			//$links[] = '<a href="http://limeleafllc.com/collapse-sub-pages">Contribute</a>';
			//$links[] = '<a href="http://alexrabe.de/donation/">Donate</a>';
		}
		return $links;
	}
	
}//-class nggFadeIn

	global $collapsePages;
	$collapsePages = new collapsePagesLoader();
}//-if (!class_exists('collapsePagesLoader'))

?>