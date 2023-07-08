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
      <meta name=\"topicid\" content=\"GUID-216B3099-7461-46F9-AD82-DA8F9B8F197E\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: capabilities\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: keyboard shortcuts\" />\n\
      <meta name=\"indexterm\" content=\"custom commands\" />\n\
      <meta name=\"indexterm\" content=\"running in batch mode\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: logging\" />\n\
      <meta name=\"indexterm\" content=\"keyboard shortcuts\" />\n\
      <meta name=\"indexterm\" content=\"batch mode\" />\n\
      <meta name=\"indexterm\" content=\"xsi -script\" />\n\
      <meta name=\"indexterm\" content=\"history log\" />\n\
      <meta name=\"indexterm\" content=\"log, command history\" />\n\
      <meta name=\"indexterm\" content=\"siSupportsKeyAssignment constant\" />\n\
      <meta name=\"indexterm\" content=\"siCannotBeUsedInBatch constant\" />\n\
      <meta name=\"indexterm\" content=\"siNoLogging constant\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Setting Command Capabilities</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-216B3099-7461-46F9-AD82-DA8F9B8F197E\"></a></span><div class=\"head\">\n\
            <h1>Setting Command Capabilities</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E66520C1-D48E-43A6-AE79-9458E99B8B28\"></a></span>By default, custom commands can be:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-57859504-75D4-4BEC-A89E-BEF843161D5B\"></a></span>Assigned a keyboard shortcut.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-58836519-11BF-4011-9CEA-04C69AE47327\"></a></span>Used in batch mode with <em class=\"strong\">xsibatch</em> or <em class=\"strong\">xsi -script</em>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-93165F2F-9E77-4469-B3DD-536095992D6D\"></a></span> Logged to the command history.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0AB7B9B-D721-46FE-8625-998B2E151C1D\"></a></span>These \"capabilities\" can be disabled in the <em class=\"strong\">Init</em> callback:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyCommand_Init( ctxt )\n\
{\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
\n\
	// ...\n\
\n\
	// Disable keyboard mapping for this command\n\
	oCmd.SetFlag(siSupportsKeyAssignment,false);		// true by default\n\
\n\
	// Command cannot be used with xsibatch or xsi -script\n\
	oCmd.SetFlag(siCannotBeUsedInBatch,true);			// false by default\n\
\n\
	// Disable logging\n\
	oCmd.SetFlag(siNoLogging,true);		// false by default\n\
\n\
	// ...\n\
	return true;\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA8FA32C-4DC4-4C46-817D-6128AB053683\"></a></span>The <a href=\"#!/url=./si_om/Command.SetFlag.html\">SetFlag</a> or SetFlag method is used to set the \"capability flags\" that control the behavior\n\
               of the command:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-97C771C6-8B29-46FC-A5CF-EB05714C2DEF\"></a></span>  <em class=\"strong\">siSupportsKeyAssignment</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B71505AC-79EF-4AA6-A348-2014BD6F58AD\"></a></span>Specifies whether a keyboard shortcut can be assigned to the command in the Keyboard\n\
                     Mapping dialog box. Set to false if the command is a low-level helper function that\n\
                     you don\'t want to expose for general use.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DA07A45-AADB-4110-9023-DFEBDFCDF2BE\"></a></span>  <em class=\"strong\">siCannotBeUsedInBatch</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B66EE3E-D16C-48DF-BC58-3DBDBD3A6DB8\"></a></span>Specifies whether the command can be used in scripts run from the command line using\n\
                     <em class=\"strong\">xsibatch</em> or <em class=\"strong\">xsi -script</em>. For example, a command that requires user input cannot be used in batch mode.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D86AB72-E80F-4DC8-91C0-7460D757CD04\"></a></span>  <em class=\"strong\">siNoLogging</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A53EA2EA-0E5A-4A87-BD2F-CF3854CBE316\"></a></span>Specifies whether the command is logged to the command history. Disabling logging\n\
                     can improve performance. For example, if the custom command is called frequently by\n\
                     other scripts, or if the command takes a large collection of objects as an argument,\n\
                     disabling logging will speed up the command.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";