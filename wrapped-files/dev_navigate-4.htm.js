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
      <meta name=\"topicid\" content=\"GUID-D2574DBA-5F08-480C-AE46-6B51E020115E\" />\n\
      <meta name=\"indexterm\" content=\"navigation: finding elements with the full path\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Finding Elements using the Full Path</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D2574DBA-5F08-480C-AE46-6B51E020115E\"></a></span><div class=\"head\">\n\
            <h1> Finding Elements using the Full Path</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4C85F85-DF53-45A9-8C63-13F4AD9799AE\"></a></span>If you know the full path of an object you can get a pointer to it using the <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a> method. Alternatively, if you wanted to use scripting commands, you could use the\n\
               <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> command with the full path specified. Both strategies return an object pointer.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0DA13C5-FAF0-4734-A391-355334535574\"></a></span>The equivalent C++ function to the Dictionary.GetObject is the <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html#Set\">CRef::Set</a> function which makes it very easy to turn the full name (<a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html#GetFullName\">SIObject::GetFullName</a> of an object into its equivalent C++ object.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CRef refRateParam;\n\
refRateParam.Set( L\"PlayControl.Rate\" );\n\
app.LogMessage( Parameter(refRateParam).GetValue().GetAsText() );\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3FA57ECF-B75C-4992-A6CE-6801D5189EC0\"></a></span>In this case we are reading the value of a Parameter, so notice how a temporary Parameter\n\
               object is used to give access to the <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetValue\">Parameter::GetValue</a> method.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";