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
      <meta name=\"topicid\" content=\"GUID-802FC1F4-5517-4979-B63C-58248B68AC8A\" />\n\
      <meta name=\"indexterm\" content=\"selecting: getting selected objects: object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"selection: getting selected objects: object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the List of Selected Objects</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-802FC1F4-5517-4979-B63C-58248B68AC8A\"></a></span><div class=\"head\">\n\
            <h1>Accessing the List of Selected Objects</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_2C38515CB4F74E02B6E5E96FF9A2FFEA\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB3603C1-A07C-45A4-B05A-C336AD81794A\"></a></span>The <a href=\"#!/url=./si_om/Selection.html\">Selection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Selection.html\">Selection</a> object/class is a kind of a specialized collection. Each selected object is a member\n\
                     and can be accessed via enumerating or using the <a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a> or Selection::GetItem property: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Selection sel( Application().GetSelection() );\n\
for( LONG i=0; i&lt;sel.GetCount(); i++ ) \n\
{\n\
	SIObject obj( sel[i] );\n\
	Application().LogMessage( obj.GetName() );\n\
}\n\
SIObject objByIndex( sel.GetItem(0) ); // Access by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
SIObject objByName( sel.GetItem(L\"grid\") ); // Access by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
\n\
// C# (object model)\n\
CXSIApplication app = new CXSIApplication();\n\
foreach (CollectionItem itm in app.Selection)\n\
{\n\
	app.LogMessage(itm.Name, siSeverity.siInfo);\n\
}\n\
SIObject objByIndex = (SIObject)app.Selection[0];		// Access by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
SIObject objByName = (SIObject)app.Selection[\"cone\"];		// Access by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
\n\
// JScript\n\
var e = new Enumerator( Selection );\n\
for( ; !e.atEnd(); !e.moveNext() ) \n\
{\n\
	var obj = e.item();\n\
	LogMessage( obj );\n\
}\n\
var objByIndex = Selection(0); // Access by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
var objByName = Selection(\"grid\"); // Access by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
\n\
\' VBScript\n\
foreach obj in Selection\n\
	LogMessage obj \n\
next\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> objByIndex = Selection(0);\' Access by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> objByName = Selection(\"grid\");\' Access by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
\n\
# Python\n\
for obj in Application.Selection :\n\
	Application.LogMessage( obj.Name )\n\
objByIndex = Application.Selection(0) # Access by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
objByName = Application.Selection(\"grid\") # Access by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0008\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-28AC49C6-15AF-4C36-A73E-81BA2C1E9DFE\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_C891E0A6CB9A43D99788E373E9D9A9B9\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F68D4CB8-66E5-4F61-A358-E3EEBE98F9AF\"></a></span><a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> (used with \"<span class=\"code\" translate=\"no\">SelectionList</span>\") \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-352FAE21-7A83-423B-BB96-6A1F7B20DE76\"></a></span><a href=\"#!/url=./si_cmds/PickElement.html\">PickElement</a>, <a href=\"#!/url=./si_cmds/PickObject.html\">PickObject</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D29B8FC1-166B-4D73-B691-466A375A4AC7\"></a></span><a href=\"#!/url=./si_cmds/SelectFilter.html\">SelectFilter</a>, <a href=\"#!/url=./si_cmds/SelectEdgeFilter.html\">SelectEdgeFilter</a>, <a href=\"#!/url=./si_cmds/SelectObjectFilter.html\">SelectObjectFilter</a>, <a href=\"#!/url=./si_cmds/SelectPolygonFilter.html\">SelectPolygonFilter</a>, <a href=\"#!/url=./si_cmds/SelectSampledPointFilter.html\">SelectSampledPointFilter</a>, <a href=\"#!/url=./si_cmds/SelectVertexFilter.html\">SelectVertexFilter</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B35B2B3F-043E-41E0-B037-652789753015\"></a></span><a href=\"#!/url=./si_cmds/SetEdgeSelectionFilter.html\">SetEdgeSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPointSelectionFilter.html\">SetPointSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPolygonSelectionFilter.html\">SetPolygonSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetSampleSelectionFilter.html\">SetSampleSelectionFilter</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";