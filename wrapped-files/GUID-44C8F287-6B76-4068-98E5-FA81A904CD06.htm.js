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
      <meta name=\"topicid\" content=\"GUID-44C8F287-6B76-4068-98E5-FA81A904CD06\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Internationalization</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"PPGLayout\", \"si_cpp/classXSI_1_1PPGLayout.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-44C8F287-6B76-4068-98E5-FA81A904CD06\"></a></span><div class=\"head\">\n\
            <h1>Internationalization</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0CA0F6F-DEA5-49EA-8678-1C1D4E9BD737\"></a></span>The plug-in files are set up to use a translation dictionary in the internationalization\n\
            process. After internationalization, you can localize the plug-in to display localized\n\
            strings in the user interface. See the <span class=\"char_link\"><a href=\"#!/url=./files/GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C.htm\">Localization</a></span> topic. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5CD1788-73EB-47C8-BF2A-8BAB3A0FABAB\"></a></span>The following table shows how to set up the plug-in files to use a translation dictionary.\n\
            \n\
         </p><span class=\"anchor_wrapper\"><a name=\"TABLE_88AF3727C00C4B679733FD8DC2376962\"></a></span><div class=\"table_Ruled\">\n\
            <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
               <colgroup>\n\
                  <col width=\"33.33333333333333%\" />\n\
                  <col width=\"66.66666666666666%\" />\n\
               </colgroup>\n\
               <tr class=\"ruledHeading\">\n\
                  <th class=\"table-heading\">File </th>\n\
                  <th class=\"table-heading\">Description </th>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\">Script files(<span class=\"filePath\" translate=\"no\">.vbs</span>/<span class=\"filePath\" translate=\"no\">.js</span>/<span class=\"filePath\" translate=\"no\">.py</span>) or C++ files \n\
                  </td>\n\
                  <td class=\"table-body\">Use <span class=\"code\" translate=\"no\">XSIUtils::Translate</span> or <span class=\"code\" translate=\"no\">CUtils::Translate</span> to load the translation string. <span class=\"anchor_wrapper\"><a name=\"GUID-1908A057-77F3-4B46-9BC3-0AEB3C142A2E\"></a></span><p class=\"table-body\"> Set <span class=\"code\" translate=\"no\">siUIDictionary</span> attribute on the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"PPGLayout\" class=\"a_multireflink\">PPGLayout</a></span> object to specify the translation dictionary file. \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\">Toolbar files (<span class=\"filePath\" translate=\"no\">.xsitb</span>) \n\
                  </td>\n\
                  <td class=\"table-body\">By default, the toolbar files use the XSIXSI dictionary. To change this dictionary,\n\
                     add the following lines in the <span class=\"code\" translate=\"no\">&lt;properties&gt;</span> section: <span class=\"anchor_wrapper\"><a name=\"GUID-648204E1-C637-4DD8-9DDF-B4ACB4FB0A5A\"></a></span><p class=\"table-body\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;properties&gt;\n\
  ...\n\
  &lt;dictionary&gt;DictName&lt;/dictionary&gt;\n\
&lt;/properties&gt;</pre></div> \n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
            </table>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";