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
      <meta name=\"topicid\" content=\"GUID-6E06A39C-1BAA-4177-BE27-FFB34E46BA55\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering Plug-in Items</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6E06A39C-1BAA-4177-BE27-FFB34E46BA55\"></a></span><div class=\"head\">\n\
            <h1>Registering Plug-in Items</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A5D7F9C-9F0D-496E-829E-A707C0BB92D4\"></a></span>A self-installing plug-in can implement <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_WhatisaCustomCommand.htm\">commands</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_events_WhatisanEvent.htm\">events</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_filters_WhatisaCustomFilter.htm\">filters</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm\">menus</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_GettingStarted.htm\">shaders</a></span>, and <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_WhatareCustomProperties.htm\">properties</a></span>. A C++ plug-in can also implement <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_AbouttheCustomDisplayHost.htm\">custom displays</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_graphicsequencer_Overview.htm\">viewport modes</a></span> and callbacks, and <span class=\"char_link\"><a href=\"#!/url=./files/cus_render.htm\">rendering</a></span> engines. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8276CE25-194B-4BF6-A80E-A78D45D4471D\"></a></span>A plug-in can contain more than one plug-in item. For a example, a plug-in could include\n\
               a command, a menu that runs the command, a filter that controls when the menu is available,\n\
               and a custom property that serves as the plug-in user interface. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1778706-D407-4326-9032-0CF0726076C4\"></a></span>In <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>, you use the following <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> methods to register plug-in items: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_B5CB7A88F3284D21B708743B900A9C01\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6B2ED00-8A97-4F2B-945C-7364670032FB\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterCommand.html\">PluginRegistrar.RegisterCommand</a> or PluginRegistrar::RegisterCommand \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1935FF77-644A-40B3-8786-9BB05A4FBCDF\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterConverterEvent.html\">PluginRegistrar.RegisterConverterEvent</a> or PluginRegistrar::RegisterConverterEvent \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2961AF0A-5A9F-4B1C-A904-7404F98F4E28\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterEvent.html\">PluginRegistrar.RegisterEvent</a> or PluginRegistrar::RegisterEvent \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB47B6A3-D14A-4E9A-B081-C52B83844943\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterFilter.html\">PluginRegistrar.RegisterFilter</a> or PluginRegistrar::RegisterFilter \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C5B5FA6-6482-4846-8BDE-3AEA00F68969\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a> or PluginRegistrar::RegisterMenu \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA4B1E7F-7312-4CC0-B2AB-8335A4A04DB3\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperator \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B9FFEC28-CF78-4C27-9879-19E4D4A9F196\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a> or PluginRegistrar::RegisterProperty \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C27C073B-D003-4C90-836A-22E7C85A8206\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShader.html\">PluginRegistrar.RegisterShader</a> or PluginRegistrar::RegisterShader \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C7610C7-C909-44FB-BC8D-877F4B85DDC4\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterShaderLanguageParser.html\">PluginRegistrar.RegisterShaderLanguageParser</a> or PluginRegistrar::RegisterShaderLanguageParser \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE4F4C8B-D5B3-4868-8533-6E541A3AD857\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterTimerEvent.html\">PluginRegistrar.RegisterTimerEvent</a> or PluginRegistrar::RegisterTimerEvent \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8493E81-17E9-4404-8B2D-43CDB0F5CBF1\"></a></span>C++ plug-ins can register custom displays, display passes, and display callbacks using\n\
               these <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> member functions: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_8D5CF93C832C4F45A126F4C71A27B368\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A2CA7C2-549A-4F52-A8CB-734FA64C3317\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterCustomDisplay\">RegisterCustomDisplay</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BAA5E05-7D3B-49F1-9D68-79D231D1FDAA\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterDisplayPass\">RegisterDisplayPass</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98A4261B-FF1A-4DC4-B589-CCD998136121\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterDisplayCallback\">RegisterDisplayCallback</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-019A7D7E-7055-4710-9C9A-153C95FC6293\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterRenderer\">RegisterRenderer</a> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0F8058C-7D25-4795-ADE1-7739E901E56E\"></a></span>For example, the following <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> registers a command, a menu, property, and an event: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">// JScript\n\
function XSILoadPlugin( oPluginRegistrar )\n\
{\n\
	\n\
	// Register command\n\
	var oPluginItem = oPluginRegistrar.RegisterCommand(\"MyCommand\",\"MyCommand\");\n\
	\n\
	// Register a custom property\n\
	oPluginRegistrar.RegisterProperty( \"MyProperty\" );\n\
	\n\
	// Register an event handler for changes to the selection list\n\
	oPluginRegistrar.RegisterEvent( \"MySelectionChangeHandler\", siOnSelectionChange );\n\
	\n\
	return true;\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CDA06B7-1277-4165-9990-16DA4E7CD753\"></a></span>By default, Softimage uses the plug-in help as the help for plug-in items. If you\n\
               want to provide a different help for each plug-in, you can use <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a> or PluginItem::PutHelp to specify the name of the help file and, optionally, its\n\
               location. \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">// JScript\n\
function XSILoadPlugin( oPluginRegistrar )\n\
{\n\
	// ...\n\
	\n\
	var oPluginItem = oPluginRegistrar.RegisterCommand(\"MyCommand\",\"MyCommand\");\n\
	\n\
	oPluginItem.Help = XSIUtils.BuildPath( in_reg.OriginPath, \"Doc\", \"MyCommand.html\" );\n\
	oPluginItem.Categories = \"Example, Command\";\n\
	\n\
	// ...\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";