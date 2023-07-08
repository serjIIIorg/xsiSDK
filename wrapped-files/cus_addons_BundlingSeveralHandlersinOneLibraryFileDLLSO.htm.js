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
      <meta name=\"topicid\" content=\"GUID-85E2FEA4-C2E6-4D12-8D0A-B38B2BD5B737\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Bundling Several Handlers in One Library File (.DLL/SO)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::CValueArray\", \"si_cpp/classXSI_1_1CValueArray.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-85E2FEA4-C2E6-4D12-8D0A-B38B2BD5B737\"></a></span><div class=\"head\">\n\
            <h1>Bundling Several Handlers in One Library File (.DLL/SO)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A393EA15-9A95-4D3C-BF1A-8F4EBF0ACC66\"></a></span>If you are writing a self-installing plug-in, chances are you are already providing\n\
               one file which contains several plug-in items (see <a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a> for more information). However, if you cannot make your plug-in self-installing,\n\
               or if you prefer not to, you can still provide several items in one file.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1CE5140B-DFA5-4A6E-9361-CA2ED5D3C57A\"></a></span>For example, you may decide to create a toolbar with buttons linked to several custom\n\
               commands and you want to provide them all in the same library file. Or you may want\n\
               to provide a single file containing a custom operator and a command that applies it\n\
               to the selected object.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-D37BB4DA-4635-440F-AA39-CFA84B0E38E2\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9049B80-A524-4C38-BAFF-5816504651EF\"></a></span>Do not mix self-installing and v1.0 plug-ins inside the same implementation file.\n\
                     Since you can package both types of plug-ins together in an xsiaddon file, you can\n\
                     easily deploy tools that contain a mixture of the two, provided that:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-28EFCB56-A09E-4E29-9817-3BCC1912279D\"></a></span>Each plug-in module contains only self-installing plug-in items.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCB89497-B2B7-48CD-9180-112FA759A0FB\"></a></span>Each v1.0 (non-self-installing) plug-in implementation file contains only v1.0-compliant\n\
                           implementation (for example, the <span class=\"code\" translate=\"no\">XSIOnCommandCPP</span> callback, instead of the <span class=\"code\" translate=\"no\">MyCustomCommand_Init</span> and <span class=\"code\" translate=\"no\">MyCustomCommand_Execute</span> callbacks).\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-00AC\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E297DAAC-1655-4F8C-8F10-81C4133933D9\"></a></span>How to Provide Several Different Types of Customization\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C06FAC6-CF4A-4AB9-A262-2A18FD5C4EBD\"></a></span>Each customizable item, such as custom operators, custom commands and custom events,\n\
                  use different callbacks. For example, you use the <span class=\"code\" translate=\"no\">XSIOnCommandCPP</span> callback to implement custom commands and <span class=\"code\" translate=\"no\">XSIOnEventCPP</span> for custom events, while custom operators use <span class=\"code\" translate=\"no\">Update</span>, <span class=\"code\" translate=\"no\">Init</span>, and <span class=\"code\" translate=\"no\">Term</span> functions which take a reference to the context as an entry point in addition to\n\
                  any additional input and output arguments.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8A3C543-D750-4107-BB23-FCEE804ADF3F\"></a></span>If you are providing one of each type of element in a file, Softimage already differentiates\n\
                  between them based on the callbacks used. However, if you are using more than one\n\
                  type (for example, two commands and one operator) in a single file, you need to explicitly\n\
                  differentiate between them.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-00AD\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-133294D5-BB6C-4CAE-BB63-EEA9DE27B5C8\"></a></span>How to Differentiate between the Same Type of Customization\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-17B4206A-9715-4C13-88D5-AA165878D19D\"></a></span>Since the name of the command or event is always passed into the callback function,\n\
                  you can use a switching mechanism in the main callback which checks the name and then\n\
                  calls the appropriate function.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD456EF4-BF58-4A5B-9414-211918649783\"></a></span>For example, to manage several events in one file, you can use a structure like this:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
/* ====================================================================\n\
	Main event callback\n\
*/\n\
XSI::Status XSIOnEventCPP( long in_eventID, <a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp; in_args )\n\
{\n\
	switch (in_eventID)\n\
	{\n\
		case OnBeginSceneOpen:\n\
			HandleOpenScene( in_args );\n\
			break;\n\
		case OnBeginSceneNew:\n\
			HandleNewScene( in_args );\n\
			break;\n\
		...\n\
	};\n\
	return CStatus::OK;\n\
}\n\
\n\
\n\
/* --------------------------------------------------------------------\n\
	Handler for OnBeginSceneOpen\n\
*/\n\
XSI::Status HandleOpenScene( <a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp; in_args )\n\
{\n\
	// Handler implementation\n\
	...\n\
}\n\
\n\
\n\
/* --------------------------------------------------------------------\n\
	Handler for OnBeginSceneOpen\n\
*/\n\
XSI::Status HandleNewScene( <a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp; in_args )\n\
{\n\
	// Handler implementation\n\
	...\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";