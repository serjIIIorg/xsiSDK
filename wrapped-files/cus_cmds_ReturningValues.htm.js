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
      <meta name=\"topicid\" content=\"GUID-A2567D89-B12F-4CA7-BC33-7A54A68F6C4E\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: returning values\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Returning a collection of objects from a custom command\" />\n\
      <meta name=\"indexterm\" content=\"ReturnValue context attribute: Context: ReturnValue attribute\" />\n\
      <meta name=\"indexterm\" content=\"attributes: ReturnValue\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: Returning a collection of objects from a custom command\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Returning Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A2567D89-B12F-4CA7-BC33-7A54A68F6C4E\"></a></span><div class=\"head\">\n\
            <h1>Returning Values </h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CC72E37-55D7-485D-A557-47E0ACE06347\"></a></span>Custom commands can return values, such as numbers, strings, objects, or collections\n\
               of objects. To return a value, a command must <a href=\"#!/url=./si_om/Command.ReturnValue.html\">Command.ReturnValue</a> or Command::EnableReturnValue in the <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> callback. The <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback then takes care of returning the value.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E651515-DEB2-4DD7-A47A-5EE92E7837A1\"></a></span>If the return value is not enabled, Softimage ignores any value returned by the command.\n\
               If the return value is enabled, but the command does not return a value, Softimage\n\
               returns an empty Variant.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-24A398EA-C028-4359-A9EC-F47A94073CED\"></a></span>For scripted commands, the return value is whatever value the <span class=\"code\" translate=\"no\">Execute</span> callback returns.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-003C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-96669F54-2B86-47B5-80A8-DFD4651CF327\"></a></span> JScript Example: Returning a collection of objects from a custom command\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyCommand_Init( ctxt )\n\
{\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
\n\
	// This command returns a value\n\
	<em class=\"strong\">oCmd.ReturnValue = true;</em>\n\
\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
\n\
	// By default, this arg will be a collection of all groups\n\
	oArgs.AddWithHandler(\"cloObjects\",\"Collection\", \"#group*\" );\n\
	return true;\n\
}\n\
\n\
function MyCommand_Execute( cloObjects )\n\
{\n\
	// Return all objects in the groups\n\
	return cloObjects.Expand();\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E460F29-FFB2-4750-9557-769F0E0A2ADC\"></a></span>C++ commands put their return values in the <a href=\"#!/url=./si_cmds/cb_Command_Execute.html#ContextAttributes\">ReturnValue</a> attribute of the callback context.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-003D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-26B4C6A1-694D-43F1-A901-27B4DC1B617F\"></a></span> C++ Example: Returning a collection of objects from a custom command\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus MyCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
	\n\
	// This command uses the Collection argument handler\n\
	CValueArray collection = args[0];\n\
\n\
	// An array \n\
	CRefArray objects;\n\
\n\
	for ( long j = 0; j &lt; collection.GetCount(); ++j )\n\
	{\n\
		CValue val = collection[j];\n\
		CRef ref( val );\n\
		if ( ref.GetClassID() == siX3DObjectID )\n\
		{\n\
			objects.Add( ref );\n\
		}\n\
	}\n\
\n\
	// Put the CRefArray in a CValue object\n\
	CValue retval( objects );\n\
\n\
	// Return the X3DObjects\n\
	ctxt.PutAttribute( L\"ReturnValue\", retval );\n\
\n\
	// This does the same thing as above:\n\
//	ctxt.PutAttribute( L\"ReturnValue\", objects );\n\
	return CStatus::OK;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";