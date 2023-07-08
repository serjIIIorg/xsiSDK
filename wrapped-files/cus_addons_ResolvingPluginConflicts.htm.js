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
      <meta name=\"topicid\" content=\"GUID-6469194A-5514-4726-908C-34DA55C84607\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: priority (conflict resolution)\" />\n\
      <meta name=\"indexterm\" content=\"paths: custom\" />\n\
      <meta name=\"indexterm\" content=\"custom paths (location)\" />\n\
      <meta name=\"indexterm\" content=\"location: custom\" />\n\
      <meta name=\"indexterm\" content=\"paths: user\" />\n\
      <meta name=\"indexterm\" content=\"user paths (location)\" />\n\
      <meta name=\"indexterm\" content=\"location: user\" />\n\
      <meta name=\"indexterm\" content=\"paths: workgroup\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: location of paths\" />\n\
      <meta name=\"indexterm\" content=\"location: workgroup\" />\n\
      <meta name=\"indexterm\" content=\"paths: factory\" />\n\
      <meta name=\"indexterm\" content=\"factory paths (location)\" />\n\
      <meta name=\"indexterm\" content=\"location: factory\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Resolving Plug-in Conflicts</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6469194A-5514-4726-908C-34DA55C84607\"></a></span><div class=\"head\">\n\
            <h1>Resolving Plug-in Conflicts</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-17C36B6A-98AF-4B2B-A27A-9C1BB0F4773C\"></a></span>Plug-in conflicts occur when Softimage finds multiple versions of the same <em class=\"strong\">self-installing plug-in</em>. Softimage can resolve a plug-in conflict in either of two ways:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-86E75077-888C-488A-8C14-9EA9BA276F60\"></a></span> <em class=\"strong\">Versioning:</em> Softimage loads the most recent version of the plug-in.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A8CE82A-7CDD-4BB8-8C31-811B930C5269\"></a></span> <em class=\"strong\">Origin Ordering:</em> Softimage loads the plug-in from the location with the highest precedence.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8A0C7C0-E74C-436A-996A-2A28995CB17B\"></a></span>By default, Softimage tries to load the most recent version of a self-installing plug-in.\n\
               For example, if your User location contains version 1.2 of a plug-in, and a workgroup\n\
               contains 1.3, then Softimage loads version 1.3. If all copies of a plug-in are the\n\
               same version, then Softimage uses origin ordering to resolve the conflict.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-40D1CC4A-185E-4CF7-A27C-9D6127D15B1F\"></a></span>You can change how Softimage resolves conflicts by setting the Plug-in Manager preference\n\
               named <em class=\"strong\">Conflict Resolution</em>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9923DA5A-E0DD-4DEF-8B07-C9BCB1714386\"></a></span>For non-self-installing plug-ins and other customizations, Softimage uses origin ordering\n\
               and loads the first copy of the plug-in that it finds.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6F9819C-E1E6-4328-81C2-113DE48F0CEB\"></a></span>When Softimage searches for plug-ins, it first searches custom locations, then the\n\
               user path, then the workgroups, and finally the factory path:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-BC1D419C-9576-49B2-8F44-3371CAC4DC41\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-523B3C86-A83D-4D1D-B057-54EE13B41C78\"></a></span>    <em class=\"strong\">Custom locations</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F88C6BA-6C6E-4C58-A3CC-D69D93E51AC8\"></a></span>Custom locations are the paths specified by the <span class=\"code\" translate=\"no\">XSI_PLUGINS</span> environment variable.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0131AD8E-921A-4E05-A990-3A87BA62AEBF\"></a></span>    <em class=\"strong\">User location</em> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F598061B-7804-454E-AB55-1C07604F1A33\"></a></span>Add-ons in the User location are loaded after any other plug-ins found in the User\n\
                     location (for example, plug-ins in <span class=\"filePath\" translate=\"no\">%XSI_USERHOME%\\Application\\Plugins</span> are loaded before plug-ins in <span class=\"filePath\" translate=\"no\">%XSI_USERHOME%\\Addons</span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DFA0F7D2-7910-42EE-B585-D26690024F19\"></a></span> Workgroups\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E6A886A-0C1D-4038-9D98-0F9AD86C9E8E\"></a></span>Softimage searches workgroups in the order they are listed in the Plug-in Manager\n\
                     (so the first workgroup in the list takes precedence).\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-962EF984-D9D6-42AD-882D-2042C04DB414\"></a></span>Add-ons in a workgroup are loaded after any other plug-ins found in the workgroup\n\
                     (for example, plug-ins in <span class=\"filePath\" translate=\"no\">MyWorkgroup\\Application\\Plugins</span> are loaded before plug-ins in <span class=\"filePath\" translate=\"no\">MyWorkgroup\\Addons</span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B803C488-0B01-4012-B0C7-78317CA5D995\"></a></span>    <em class=\"strong\">Factory location</em> \n\
                  </p> \n\
               </li>\n\
            </ol>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";