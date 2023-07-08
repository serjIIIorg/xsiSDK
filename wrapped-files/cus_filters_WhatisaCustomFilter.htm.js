var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-03D93FB4-9105-49B7-957C-8F047EDDFE5E\" />\n\
      <meta name=\"indexterm\" content=\"custom filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: overview\" />\n\
      <meta name=\"indexterm\" content=\"filters: described\" />\n\
      <meta name=\"indexterm\" content=\"selection filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: selection\" />\n\
      <meta name=\"indexterm\" content=\"filters: explorer views\" />\n\
      <meta name=\"indexterm\" content=\"explorer views: filters\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom Filter?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-03D93FB4-9105-49B7-957C-8F047EDDFE5E\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom Filter?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6E4CBDF-6349-4E75-ACB7-53D5DBDA6FB3\"></a></span>In Softimage, filters allow a user to focus on specific types of objects. For example,\n\
            Softimage includes a Polygon Mesh filter that removes (filters out) everything that\n\
            is not a polygon mesh. In a 3D view, filters modify the behavior of the selection\n\
            tool, making it easier for users to select only the objects they want (for example,\n\
            only polygon meshes, not nulls or control objects or surface meshes). In the explorer,\n\
            filters remove unwanted nodes from the element tree. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E0AC5C1-2226-4CA8-96A4-2AF9D9B6D79B\"></a></span>A custom filter is a self-installing plug-in that implements a Match callback. The\n\
            job of the Match callback is to determine whether an object should be filtered out.\n\
            For example, the following example implements a 3D object filter. \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [JScript]\n\
//------------------------------------------------------------------\n\
// Install callback for the plug-in\n\
//------------------------------------------------------------------\n\
function XSILoadPlugin( oPluginRegistrar )\n\
{\n\
	// Give the plug-in a <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	oPluginRegistrar.Name = \"MyFilters\";\n\
\n\
	// Register a filter named \"MyFilter\" for 3D objects\n\
	oPluginRegistrar.RegisterFilter( \"MyFilter\", siFilter3DObject );\n\
\n\
}\n\
\n\
//------------------------------------------------------------------\n\
// Match callback for the filter registered under the <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \"MyFilter\"\n\
//------------------------------------------------------------------\n\
function MyFilter_Match( oContext )\n\
{\n\
	// Get the object from the Input attribute of the Context object\n\
	var o3DObject = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Check if the object matches the filter conditions\n\
	var bMatch = isa_match( o3DObject );\n\
\n\
	// Return true to keep the object, false to filter the object out\n\
	return ( bMatch );\n\
}</pre></div><img src=\"../images/GUID-37044976-38F3-4287-BF7F-0B5BC1FCF8E6-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-E0CC27C5-14F8-4187-A6F9-DECA5CC8A8F2\"></a></span>Select panel \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7757AE47-4B17-42DA-B624-5BB9EC5C3B8C\"></a></span>In Softimage, custom filters appear in the list of selection filters found in the\n\
            Select panel of the main command area. After a user activates a custom filter, Softimage\n\
            calls the Match callback for every object the user tries to select in a 3D view (or\n\
            in the object view or in the schematic view). If <a href=\"#!/url=./si_cmds/cb_Filter_Match.html\">Match</a> returns true, Softimage selects the object. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-248684B0-3861-440E-9AD9-D197EFFBBFA5\"></a></span>In views such as the Explorer (and the XSI Explorer and the SDK Explorer), custom\n\
            filters appear in the search box, which has a drop-down list of filters. When a user\n\
            selects the filter, Softimage calls <a href=\"#!/url=./si_cmds/cb_Filter_Match.html\">Match</a> for each node in the explorer and removes the nodes that do not match the filter\n\
            condition. Custom filters can also provide a <a href=\"#!/url=./si_cmds/cb_Filter_Subset.html\">Subset</a> callback to handle collections of objects, so Softimage can apply filters by firing\n\
            a single callback. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A5ACDDD-83ED-46D6-B58A-DA7B98AC5F96\"></a></span>You can use custom filters with commands and the object model. For example, you can\n\
            use a custom filter with the <a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a> command to filter the selected objects: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var cloFilteredList = SIFilter( Application.Selection, \"MyFilter\" );</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0CFB29F-2974-4EDE-87F0-B995487B8A9B\"></a></span>In the Softimage object model, custom filters are included in the <a href=\"#!/url=./si_om/XSIApplication.Filters.html\">Filters</a> collection: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oFilter = Application.Filters.Item(\"MyFilter\");\n\
\n\
for ( var enumerator = new Enumerator( Application.Selection ) ; !enumerator.atEnd(); enumerator.moveNext() )\n\
{\n\
	var o3DObject = enumerator.item();\n\
	if ( oFilter.Match( o3DObject ) )\n\
	{\n\
		doSomething( o3DObject );\n\
	}\n\
}</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BA2F740-664A-45D2-A488-555EE05A1D02\"></a></span>Note that in the above example, a 3D object (such as an X3DObject) is passed into\n\
            the Match method, not a Context object. Softimage takes care marshalling the 3D object\n\
            to the Context object expected by the Match callback. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-350657A4-913C-47C9-ABF3-51007AEFBE5F\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/LightFilter/netview_LightFilter.htm\">Light Filter</a> and <a href=\"#!/url=./examples/Addons/SimpleFilter/netview_SimpleFilter.htm\">Simple Filter</a> examples that are located in the examples folder of the Softimage SDK installation\n\
            directory. \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";