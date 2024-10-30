/**
 * Collapse Sub Pages
 *
 * JavaScript to dynamically find and collapse child pages on
 * the Edit Pages page in wordpress admin.
 *
 * I am not a jQuery expert... don't judge me by my crappy code!
 */
 
jQuery(document).ready( function() {
	/**
	 * Stores all the id's of rows that are parents.
	 */
	var oParentRows = {};
	
	/*
	 * Hide all sub pages (children) at startup
	 */
	collapseAllSubPages(true);
	
	/*
	 * Add Expand/Collapse ALL Links to DOM
	 */
	jQuery('.subsubsub').append('<li class="expand_all_link"> | <a href="javascript:void(0);">Expand All</a></li><li class="collapse_all_link"> | <a href="javascript:void(0);">Collapse All</a></li>');
	
	/*
	 * Register Expand All Link
	 */
	jQuery(".expand_all_link a").click( function() {
		jQuery('#posts-filter table tr').each(function(){
			jQuery(this).show();
			toggleIcons(jQuery(this).find('.expand_link a'),true);
		});
		
		jQuery('.post_parent').each(function(){
			sParent = jQuery(this).html();
			sParentId = '#page-' + sParent;
			
			if(sParent != "0") fncUpdateCookie(sParentId);
		});
	});
	
	/*
	 * Register Collapse All Link
	 */
	jQuery(".collapse_all_link a").click( function() {
		collapseAllSubPages();
	});
	
	/*
	 * Register Parent Expand/Collapse Links
	 */
	var sPageId;
	jQuery(".expand_link a").click( function() {
		sRowId	= jQuery(this).closest('tr').attr('id');
		sPageId	= sRowId.replace('page-','');
		
		jQuery('.post_parent').each(function(){
			if(jQuery(this).html() == sPageId){ 
				oRow		= jQuery(this).closest('tr');
				sParentId	= '#page-' + oRow.find('.post_parent').html();
				oRow.toggle();
				
				/*
				 * Set the cookie with parent pages that have been expanded
				 */
				if(oRow.is(":visible")){
					fncUpdateCookie(sParentId);
				}else{
					fncRemoveCookie(sParentId);
				}
			}
			
		});

		toggleIcons(this);
	});
	
	/**
	 * Collapse All Sub-pages on the page
	 *
	 * Wordpress didn't make it easy, did they?
	 */
	function collapseAllSubPages(bOnLoad){
		if(typeof bOnLoad == "undefined") bOnLoad = false;
		
		if(!bOnLoad) jQuery.cookie('expanded',null);
		
		jQuery('.post_parent').each(function(){
			sParent = jQuery(this).html();
			sParentId = '#page-' + sParent;
			
			if(bOnLoad){
				bCookied = fncCheckCookie(sParentId);
			}else{
				bCookied = false;
			}
			
			/*
			 * Check if:
			 * 1) This is a child AND
			 * 2) The parent exists AND
			 */
			if(sParent != "0" && jQuery(sParentId).length != 0){
								
				/*
				 * Add link to parent if we haven't already
				 */
				if(sParentId in oParentRows){
					//do nothing
				}else{
					addParentRow([sParentId]);
					jQuery(sParentId).find('strong').append('<span class="expand_link"><a href="javascript:void(0);">[children]</a></span>');
				}//-if(sParentId in oParentRows)
				
				/*
				 * Collapse child if we haven't "remembered" this link as being expanded
				 */
				if(!bCookied) jQuery(this).closest('tr').hide();
				
			}//-if(sParent != "0" && jQuery(sParentId).length > 0)
			
			/*
			 * Set "+" or "-" icon
			 */
			if(bCookied){
				jQuery(sParentId).find('.expand_link a').attr('class','minus');
			}else{
				jQuery(sParentId).find('.expand_link a').attr('class','');
			}
			
		});//-jQuery('.post_parent').each(function()
		
	}//-function collapseAllSubPages()
	
	/**
	 * Toggle the +/- icons on the children links
	 */
	function toggleIcons(obj,bExpandAll){
		if(typeof bExpandAll == "undefined") bExpandAll = false;
		
		if('minus' == jQuery(obj).attr('class')){
			if(!bExpandAll) jQuery(obj).attr('class','');
		}else{
			jQuery(obj).addClass('minus');
		}
	}
		
	/**
	 * Update the object that holds parent row ids
	 *
	 * I know this is lame, but i really like if(x in z)
	 */
	function addParentRow(a){
		for(var i=0;i<a.length;i++){
			oParentRows[a[i]]=null;
		}
	}//-function addParentRow(a)
	
	/**
	 * Sets the 'expanded' cookie to remember
	 * links that have been user expanded.
	 */
	function fncUpdateCookie(sParentId){
		bFound 		= false;
		sCookie		= jQuery.cookie('expanded');
		
		if(sCookie){
			aCurrentCookie = sCookie.split('|');
		}else{
			aCurrentCookie = [];
		}
		
		for(i=0; i <= aCurrentCookie.length; i++){
			if(aCurrentCookie[i] == sParentId){
				bFound = true;
				break;
			}
		}
		
		if(!bFound){
			aCurrentCookie.push(sParentId);
			jQuery.cookie('expanded', aCurrentCookie.join("|"), "{ expires: 10 }");
		}
	}//-function fncCheckCookie(sParentId)

	/**
	 * Checks the 'expanded' cookie to see if
	 * current link has been user expanded.
	 */
	function fncCheckCookie(sParentId){
		bFound 		= false;
		sCookie		= jQuery.cookie('expanded');
		
		if(sCookie){
			aCurrentCookie = sCookie.split('|');
		}else{
			aCurrentCookie = [];
		}
		
		for(i=0; i <= aCurrentCookie.length; i++){
			if(aCurrentCookie[i] == sParentId){
				return true;
			}
		}
		
		return false;
	}//-function fncCheckCookie(sParentId)

	/**
	 * Pops an array item off the array, and resaves cookie
	 */
	function fncRemoveCookie(sParentId){
		sCookie		= jQuery.cookie('expanded');
		
		if(sCookie){
			aCurrentCookie = sCookie.split('|');
		}else{
			aCurrentCookie = [];
		}
		
		for(i=0; i <= aCurrentCookie.length; i++){
			if(aCurrentCookie[i] == sParentId){
				aCurrentCookie.splice(i,1);
				break;
			}
		}
		
		jQuery.cookie('expanded', aCurrentCookie.join("|"), "{ expires: 10 }");
	}

});