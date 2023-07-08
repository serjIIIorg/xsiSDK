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
      <meta name=\"topicid\" content=\"GUID-B8C538BD-E62F-4B19-98B4-5CA5C8BC27C6\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Naming Plug-in Items</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B8C538BD-E62F-4B19-98B4-5CA5C8BC27C6\"></a></span><div class=\"head\">\n\
            <h1>Naming Plug-in Items</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E3D69E6-E038-44AA-A59D-47DB6082D5AF\"></a></span>Plug-in item names are used to name callback functions, so these names must be valid\n\
               identifiers in your chosen programming language. The general rules for naming plug-in\n\
               items are as follows: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_CF830993E5A44BC0B2A3F4838748E57C\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B0809B8-B0A8-41B4-904F-3C7DEA096EDB\"></a></span>The first character <em class=\"mild\">cannot</em> be a number. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-37789344-53F8-4DBE-975A-EB09D00215FA\"></a></span>The first character should be a letter. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B6226F7-F0FC-440F-8620-6216A2D14B12\"></a></span>In JScript, Python, C#, C++, the first character may also be an underscore (_). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-395590E2-93C3-4E3B-9287-CAB5CF6184EC\"></a></span>Subsequent characters can be letters, numbers or underscore (_) characters. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A9B943CE-72BB-4C13-8B12-ACBA6500F05B\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-341B71DB-C15B-4391-A09E-51F844D31B09\"></a></span>You can also use spaces in a plug-in item name (for example, <span class=\"code\" translate=\"no\">\"Create Gravity\"</span>); however, you <em class=\"mild\">must remove the spaces</em> in the callback function names after the wizard has generated the code (for example,\n\
                     <span class=\"code\" translate=\"no\">\"CreateGravity_Execute\"</span>). \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DECA01D7-E7B1-4511-A8A2-88FAC8414061\"></a></span>Plug-in Names vs. Plug-in Item Names\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B686B089-B54C-4FD6-B2EC-7F2E1F907550\"></a></span>In some cases you may be able to use a <em class=\"strong\">plug-in</em> name that begins with a number if you use a different <em class=\"strong\">plug-in item</em> name. For example, a company called <em class=\"mild\">123GO</em> may want to use their name to prefix their plug-ins for branding purposes. In this\n\
                  case they could create a plug-in called <span class=\"code\" translate=\"no\">123GO_PolyFix</span> but the command must be called <span class=\"code\" translate=\"no\">PolyFix</span> or some other name beginning with a letter (or an underscore if the implementation\n\
                  language allows it). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AEC49EF2-D7BC-496F-89A2-E6BB1EB9D664\"></a></span>Each wizard manages the relationship between the plug-in name and the plug-in item\n\
                  name slightly differently. Specific information is available on each wizard\'s help\n\
                  page. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C328AA75-5424-4C33-8CFD-0D5643C96E16\"></a></span>Naming Conventions for Custom Parameters\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-24F88EF3-FDFD-43F3-8636-898B640A8B57\"></a></span>Parameters added to custom properties must follow the same naming convention as plug-in\n\
                  items, because parameter names are also used in callback function names. For example,\n\
                  <span class=\"code\" translate=\"no\">CCmdWizard_ScriptingName_OnChanged</span> is the <a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a> callback for the ScriptingName parameter of the CCmdWizard property. \n\
               </p> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";