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
      <meta name=\"topicid\" content=\"GUID-BA6D8080-0ECB-488E-8746-20C7ED779B44\" />\n\
      <meta name=\"indexterm\" content=\"script editor: opening\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Script Editor</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BA6D8080-0ECB-488E-8746-20C7ED779B44\"></a></span><div class=\"head\">\n\
            <h1>Using the Script Editor</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6E82D0B-AC9A-40DF-A429-74661F7E43EF\"></a></span>The script editor is a Scintilla-based editor. You can create, modify, run, and manage\n\
               scripts in the script editor. The script editor has a command bar, editing pane, and\n\
               history pane as shown in the following figure. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCB135C0-E13C-4E24-9D40-0D56A97F7DAE\"></a></span> <span class=\"anchor_wrapper\"><a name=\"FIG_D72AADDE59F64AD3B0FE1EC6BF137AEC\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-8D172A68-F55C-4011-887A-C598752EDDD0-low.jpg\" /></div> \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_DCB0ECE8B0AF46C5B7705C58CC07884D\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0882F4DC-4ACA-4F4A-9ABB-094ADAFEC62A\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C6C1919C-3ABB-4039-A3AC-44D0FCADB417\"></a></span><p class=\"table-body\">Command bar. You can access different menu options and perform actions such as save,\n\
                           cut, paste, and others in the command bar. Additionally, you can run scripts, select\n\
                           a scripting language, and access help. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-280954FE-771C-47F3-9CED-ABCB17302AC8\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52E63773-5E3B-4262-A253-7F4F3DB62A90\"></a></span><p class=\"table-body\">Editing pane. You can select <span class=\"MenuCascade\" id=\"GUID-DBF152C1-F57D-4708-899A-4FA3AC88EE4E\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> to set your preferences for the editing pane such as, Scintilla-based features. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE4C31B1-24A1-4F35-BDC0-C89CFCC08AA6\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F460A8A3-A8D5-4E37-AF96-0B66A3CD44F0\"></a></span><p class=\"table-body\">History pane. You can select <span class=\"MenuCascade\" id=\"GUID-91E82255-A7D9-4236-8009-F69B6AA6A8CA\">File <img src=\"../images/ac.menuaro.gif\" /> Preferences</span> to set your preferences for the history pane. For example, you can choose to display\n\
                           the command names as hyperlinks (as shown in the figure). The Command Details dialog\n\
                           appears to display information about the command when you click on the hyperlink.\n\
                           \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FAB82FD8-88A6-44AA-B058-FB5179A216A7\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> To resize the editing pane and history pane, you can drag the splitter bar that separates\n\
                  them. You can click the triangle on the splitter bar to hide the history pane, and\n\
                  click it again to restore the history pane. \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AED1AD49-D4E5-4757-B313-93ACA4AF16A8\"></a></span>To open the script editor\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-242F5DA4-AAFD-4B1F-AD96-3C086FCA306B\"></a></span>Do one of the following: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_EE0EBFF297A6440EB8DA0FF85764C9CC\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-49130078-9145-408D-93F2-15B9F446AA17\"></a></span>Click the script editor icon in the Scripting panel. \n\
                     </p> <img src=\"../images/GUID-7B1BEBA5-AFF4-4C3E-9227-B3469BE29BB7-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A2EA7BF-9A27-46F9-8756-DAE089C5EA6D\"></a></span>Press Alt+4. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B196C40F-5F98-4C33-A9AF-CAD5D54265D2\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-DFC6CB4D-1503-4E35-B51E-501DFB1B9A4E\">View <img src=\"../images/ac.menuaro.gif\" /> Scripting <img src=\"../images/ac.menuaro.gif\" /> Script Editor</span> from the application menu bar. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_EditingScripts.htm\">Editing Scripts</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_MakingCodingEasier.htm\">Making Coding Easier</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm\">Customizing Your Scripting Environment</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_UsingtheCommandHistory.htm\">Using the Command History</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_GettingHelp.htm\">Getting Help</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_ManagingScriptFiles.htm\">Managing Script Files</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_editor_RunningScripts.htm\">Running Scripts</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";