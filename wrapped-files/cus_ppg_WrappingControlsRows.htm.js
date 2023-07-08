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
      <meta name=\"topicid\" content=\"GUID-DF138805-B28E-40E0-BCE4-738DDD95A02B\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Wrapping\" />\n\
      <meta name=\"indexterm\" content=\"Wrapping controls: creating: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Wrapping Controls (Rows)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DF138805-B28E-40E0-BCE4-738DDD95A02B\"></a></span><div class=\"head\">\n\
            <h1> Wrapping Controls (Rows)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7017DF43-BFFD-4F5A-86DE-7D13447627C1\"></a></span>By default, each control appears in its own row. You can change this behavior by using\n\
               either the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> item attribute or the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> Row methods:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB1E0C2F-18A9-4282-AC4F-2368D9F89CEF\"></a></span>If you set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> item attribute to true on a control, the next control appears on the same row. You\n\
                     can use this attribute in this way on several controls consecutively to arrange them\n\
                     all on the same row.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC197107-AB07-419C-BA0C-A911226E0E24\"></a></span>The <a href=\"#!/url=./si_om/PPGLayout.AddRow.html\">PPGLayout.AddRow</a> or PPGLayout::AddRow and <a href=\"#!/url=./si_om/PPGLayout.EndRow.html\">PPGLayout.EndRow</a> or PPGLayout::EndRow methods are a convenience that allows you to specify where the\n\
                     row should start and end instead of setting the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> item attribute on each control.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-92973108-2428-49E5-8D8A-290BD0EDFA14\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AFBDA87-832D-4DDE-936E-C100332ECC94\"></a></span>When you omit the last <a href=\"#!/url=./si_om/PPGLayout.EndRow.html\">PPGLayout.EndRow</a> or PPGLayout::EndRow call, all controls from the preceding <a href=\"#!/url=./si_om/PPGLayout.AddRow.html\">PPGLayout.AddRow</a> or PPGLayout::AddRow call to the last control on the page will be part of that row.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2BCC514-EC8D-4E61-8E66-F75508D88DFD\"></a></span>Unlike group controls, row controls cannot be enumerated and as such do not support\n\
               any item attributes.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";