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
      <meta name=\"topicid\" content=\"GUID-7475A5C8-2631-4D83-BDF3-1EB0797828E1\" />\n\
      <meta name=\"indexterm\" content=\"selection: clearing: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"scripting: clearing the selection: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"removing from the selection: all items: using the object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Deselecting Everything (Clearing the Selection)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7475A5C8-2631-4D83-BDF3-1EB0797828E1\"></a></span><div class=\"head\">\n\
            <h1>Deselecting Everything (Clearing the Selection)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_62F826C92FC641B6AC63CD562404D5BB\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-53893CE6-0E1D-4DFE-BF99-2478BD563946\"></a></span>Use <a href=\"#!/url=./si_om/Selection.Clear.html\">Selection.Clear</a> or Selection::Clear: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Selection sel( Application().GetSelection() );\n\
sel.Clear();\n\
\n\
// C#\n\
CXSIApplication app = new CXSIApplication();\n\
Selection sel = app.Selection;\n\
sel.Clear();\n\
\n\
// JScript\n\
Selection.Clear();\n\
\n\
\' VBScript\n\
Selection.Clear\n\
\n\
# Python\n\
Application.Selection.Clear()\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0020\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5AF4E13D-C812-4CEE-8F9C-EB00B89AB21A\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_3218D856C68C4A6E92731D0A1145F51B\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6BCCAD4-BF30-480F-8791-58918C1E7A33\"></a></span> <a href=\"#!/url=./si_cmds/DeselectAll.html\">DeselectAll</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2B122BE-758A-4B28-92A1-A37C07CAD8BF\"></a></span> <a href=\"#!/url=./si_cmds/DeselectAllUsingFilter.html\">DeselectAllUsingFilter</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C335AB2-9463-4ACB-8898-F66D1F4430B9\"></a></span><a href=\"#!/url=./si_cmds/ShrinkSelection.html\">ShrinkSelection</a>, <a href=\"#!/url=./si_cmds/InvertSelection.html\">InvertSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DEF7885-6954-4312-9601-7F0F52156E8C\"></a></span><a href=\"#!/url=./si_cmds/DeactivateElements.html\">DeactivateElements</a>, <a href=\"#!/url=./si_cmds/ToggleActiveElements.html\">ToggleActiveElements</a>, <a href=\"#!/url=./si_cmds/SetAndToggleActiveElements.html\">SetAndToggleActiveElements</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";