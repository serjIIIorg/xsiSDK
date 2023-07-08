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
      <meta name=\"topicid\" content=\"GUID-99867113-F9D4-4832-A408-7DF069A32DE7\" />\n\
      <meta name=\"indexterm\" content=\"Invalid argument specified\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: 2151 - Type argument is invalid\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: 2151\" />\n\
      <meta name=\"indexterm\" content=\"Type argument is invalid\" />\n\
      <meta name=\"indexterm\" content=\"Argument is invalid\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: 2027-EDIT-ApplyOp - Invalid preset argument, cannot load ...\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: 2027\" />\n\
      <meta name=\"indexterm\" content=\"Invalid preset argument, cannot load ...\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Invalid procedure call or argument\" />\n\
      <meta name=\"indexterm\" content=\"Invalid procedure call or argument\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ERROR : Invalid argument specified</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-99867113-F9D4-4832-A408-7DF069A32DE7\"></a></span><div class=\"head\">\n\
            <h1>ERROR : Invalid argument specified</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\'ERROR : 2028 - Invalid argument specified\n\
\n\
\'ERROR : 2151 - Type argument is invalid\n\
\'ERROR : 2000 - Argument 0 (PresetObj) is invalid\n\
\n\
\'ERROR : 2027-EDIT-[function_name] - Invalid preset argument, cannot load ...\n\
\n\
\'ERROR : Invalid procedure call or argument</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-75B53DF3-C3FD-4090-B585-200088D5141C\"></a></span>Possible Cause\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-428823C3-92C4-40DD-8B1D-5F41A8C8ACB7\"></a></span>You may be using a preset or primitive type that is not recognized in Softimage.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0019\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DEE4C3E2-62D4-4D65-9201-5C189A309C63\"></a></span>Suggested Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-16241B72-1E59-4101-8F1A-338B235737DC\"></a></span>Check the preset and/or primitive types available for the command, method, event or\n\
                  property.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";