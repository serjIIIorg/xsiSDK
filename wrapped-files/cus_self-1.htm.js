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
      <meta name=\"topicid\" content=\"GUID-60FD3529-E718-4DA6-993B-E5D296DD5C28\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Callbacks by Plug-in Type</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-60FD3529-E718-4DA6-993B-E5D296DD5C28\"></a></span><div class=\"head\">\n\
            <h1>Callbacks by Plug-in Type</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-60C5D3FA-3447-47B7-B9C2-363F1A447DBB\"></a></span>Callbacks are available in this section organized by plug-in type: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_C6F795B849424F6DAFB1DA186A3A57DE\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E419D0BE-C601-4100-8160-BAD330C278F9\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_plugins\">Callbacks Common to All Plug-in Types</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2345586D-889E-4713-9135-1264BC5F642F\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_command\">Command Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-56BAED8D-589C-4C08-BAC9-E436F743BE2D\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_custom_display_view\">Custom Display (Views) Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B73C0B15-36C9-4C5E-BC13-0062553241D7\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_event\">Event Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3F2E50D-CC05-47AF-8D09-A4600C250D28\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_filter\">Filter Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6318476-0AC8-4B2A-9F0F-95CB3DA91DF0\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_graphicsequencer\">Graphic Sequencer Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-370906D1-44BF-44A0-BD0C-8152E43F219C\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_icenodes\">ICENode Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00A804FD-24C5-467E-90CE-36F04B7C3269\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_menu\">Menu Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F29E118-6A89-4808-AB80-7BAE583870B1\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_operator\">Operator Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9F7C234-E874-43BF-96CD-FED6070022FF\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_property\">Property Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B02BB0DE-2914-4338-95D8-1D97D8B37FD9\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_rtshaders\">Realtime Shader Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FB2B273-D62A-492C-B183-B13787312D89\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_renderer\">Renderer Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F904BFC-FA4D-4FD8-BB8B-556D008D6878\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_shader\">Shader Callbacks</a> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFD40493-3225-412F-96AD-5B9046DF02FC\"></a></span> <a href=\"#!/url=./si_cmds/callbacks.html#cb_shaderparser\">Shader Parser Callbacks</a> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";