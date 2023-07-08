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
      <meta name=\"topicid\" content=\"GUID-65ECE9D0-C19B-4261-B2F2-2AA33C85AABC\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<servername&gt;, <sharename&gt;, <directory&gt;\" />\n\
      <meta name=\"keyword\" content=\"<servername&gt;\" />\n\
      <meta name=\"keyword\" content=\"<sharename&gt;\" />\n\
      <meta name=\"keyword\" content=\"<directory&gt;\" />\n\
      <title>Working with the SDK</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-65ECE9D0-C19B-4261-B2F2-2AA33C85AABC\"></a></span><div class=\"head\">\n\
            <h1>Working with the SDK</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8792C36E-5BE4-4D88-9952-919D38255CF6\"></a></span>This section explains how to work with the Softimage SDK. \n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_selection.htm\">Selection</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_components.htm\">Modeling</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_animation.htm\">Animation</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_icenodes_WhatIsICE.htm\">ICE Nodes</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_simulation_ICENodes.htm\">ICE Node Particles</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_navigate.htm\"> Working with the Softimage Scene Graph</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_params.htm\">Working with Parameters</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/OutputArgArrays.htm\">Working with Return Values and Output Arguments</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_operators.htm\">Working with Operators</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_filepaths.htm\">Working with Files and Paths</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_userdata.htm\">Storing Custom (User) Data</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_WhatareMyOptions.htm\">Interacting with the User</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_userprefs.htm\">Working with User Preferences</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";