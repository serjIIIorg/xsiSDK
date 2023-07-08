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
      <meta name=\"topicid\" content=\"GUID-C9444DAF-6701-4500-9C6E-2CF2E75586B2\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: opening\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with the Plug-in Manager</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C9444DAF-6701-4500-9C6E-2CF2E75586B2\"></a></span><div class=\"head\">\n\
            <h1>Working with the Plug-in Manager</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7E33809-007B-4338-A4AA-283AD7480EBF\"></a></span>The Plug-in Manager provides tools to help you create, edit, and manage your plug-ins,\n\
               shaders, toolbars, and other customizations. From the Plug-in Manager, you can:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-01AB7289-3207-4069-B434-9A1918315AFF\"></a></span>Use wizards to generate new <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm\">commands</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm\">operators</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_wizard.htm\">properties</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_events_wizard.htm\">events</a></span>, empty plug-ins, shaders, and toolbars.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-047A38E5-8067-44D4-B095-7020EE68EFF4\"></a></span>Drag commands from plug-ins to toolbars.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4215823-465E-4255-B07C-C964CBB42698\"></a></span>Drag plug-ins from one location to another.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C6F0B5C-4FCF-47F8-A0FB-F15A21A0E3D1\"></a></span>Create and connect to workgroups.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4E64A2A-7EB7-4BD5-8FEB-36E7CF0A2026\"></a></span>Install and uninstall add-ons.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6BF464F-71F8-4726-8222-6FCEBC494519\"></a></span>Manage self-installing plug-ins (load, update, unload, remove from cache).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F366345F-F0FF-4600-ADB7-3DE2D5F9177B\"></a></span>Package add-ons (create .xsiaddon files that you can distribute to external users).\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C306700C-1C5E-42B9-AF3A-A9B08512DF9D\"></a></span>See the <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WalkthroughThePluginManager.htm\">Walkthrough: The Plug-in Manager</a></span> for quick walkthrough of many of these features.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F637881-A72E-4135-9162-5262DDC50352\"></a></span>The different tabs of the Plug-in Manager give you different views of the plug-ins\n\
               installed on your system.\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0AE8B13F-A652-4DE7-9767-3B66C4F65BC4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm\">Plug-in Tree</a></span> Provides a hierarchical view of the plug-ins and customizations installed in Softimage.\n\
                     The tree lists the plug-ins, toolbars, views, and add-ons found in various locations\n\
                     on the file system. The Plug-in Tree supports drag-and-drop, and context menus provide\n\
                     quick access to the relevant tasks.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-03F017BC-37CE-4F87-9D9E-D8FB0F4B0658\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-2EE4F10E-8710-415E-93EE-6B6FC7191067\">Plug-ins</span>, <span class=\"MenuCascade\" id=\"GUID-94642B7F-548E-43C6-9288-6A4176F086A9\">Items</span>, and <span class=\"MenuCascade\" id=\"GUID-8230715A-81AB-4FC0-B186-8AD76810B387\">Event</span> tabs provide alternative views of the self-installing plug-ins currently installed\n\
                     in Softimage.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B475159-265B-483C-884D-68067D75AF4D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_ManagingWorkgroups.htm\">Workgroups</a></span> Lists the connected workgroups.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-18E894AC-487E-4332-B6AE-807BA290469F\"></a></span> <span class=\"MenuCascade\" id=\"GUID-6800796B-47C6-450E-8774-29D89D1FCC8F\">Plug-ins</span> Lists the self-installing plug-ins currently loaded in Softimage.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-068E38DF-484F-4C09-9F81-E5C73A36F653\"></a></span> <span class=\"MenuCascade\" id=\"GUID-73FFCB7F-E1DD-45FD-AF21-AC5351D8AD0E\">Items</span> Lists the various plug-in items (such as commands, operators and properties) implemented\n\
                     by the self-installing plug-ins. You can sort the list by type, making it easier to\n\
                     see exactly what custom commands, operators, filters, properties, or other plug-in\n\
                     items are available.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5D6DD82-F3C8-49FE-8843-1E0EB208ADD8\"></a></span>Possible types of plug-in items are commands, operators, properties, events, menus,\n\
                     filters, displays, display callbacks, and display passes.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A37E785-86DC-4678-84E8-25C1138C8CDC\"></a></span> <span class=\"MenuCascade\" id=\"GUID-58FF9472-CEBF-429F-A6C9-47EC4F75F7CF\">Events</span> Lists the events currently installed in Softimage.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC6DBA69-6EA6-4A65-B848-2548AA9D7644\"></a></span>In addition, you can also show the <span class=\"MenuCascade\" id=\"GUID-A1F9DCDC-CA73-4EFC-9CA8-F3EEBC38A2CC\">Custom Folders</span> and <span class=\"MenuCascade\" id=\"GUID-1AF1F2B2-78BA-4524-993C-232D8487CC3A\">v1.0 Plug-ins</span> tabs. The Custom Folders tab displays the locations specified by the <span class=\"code\" translate=\"no\">XSI_PLUGINS</span> environment variable. The <span class=\"MenuCascade\" id=\"GUID-44582D3B-2CC6-488C-985A-CC0B5D037D3D\">v1.0 Plug-ins</span> tab lists the v1.0 plug-ins: plug-ins that are not self-installing.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-022F67AC-B3FE-4747-8B12-40C85CF08556\"></a></span>To show these optional tabs, open the Plug-in Manager preferences and select the <span class=\"MenuCascade\" id=\"GUID-CDEB6D82-A026-4842-BA68-1EF28F544D55\">Show additional tabs in Plug-in Manager</span> check box.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C97FDAAC-8890-4A6C-AED6-DA5A2B924100\"></a></span>Opening the Plug-in Manager\n\
               </h2> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0028\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-22B679ED-7EB4-4E44-AFD6-388A1D1092FC\"></a></span> To open the Plug-in Manager\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5E193C0-8FC0-4E18-92A0-A37FB001011E\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-4545B252-63D2-4975-8B75-B5045DB77A88\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-6F743FA6-045F-4614-BCC6-9ECB99AA1F29\">Plug-in Manager</span> to open the Plug-in Manager.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E091363-1C4B-4F30-9D16-3577596FACDD\"></a></span>In the Tools Development Environment layout, you can click the <span class=\"MenuCascade\" id=\"GUID-7DD1750A-D4F0-44E4-8953-3EB1A9AB8100\">Plug-ins</span> tab to switch to the Plug-in Manager view.\n\
                        </p> <img src=\"../images/GUID-2E9F7A70-5613-42F9-9957-40832121A4B6-low.png\" /> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";