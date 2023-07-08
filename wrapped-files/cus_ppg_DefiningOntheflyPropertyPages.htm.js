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
      <meta name=\"topicid\" content=\"GUID-F2E897D1-131C-4B00-9D73-025CB5EE682F\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: attaching logic\" />\n\
      <meta name=\"indexterm\" content=\"Logic: attaching in a property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: specifying logic language\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Defining On-the-fly Property Pages</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F2E897D1-131C-4B00-9D73-025CB5EE682F\"></a></span><div class=\"head\">\n\
            <h1> Defining On-the-fly Property Pages</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DD29B41-8B6C-4473-B637-B24595DF800B\"></a></span>If you are defining your property page on the fly, you can use the same callbacks\n\
               as for a self-installing property (with a slightly different naming convention), but\n\
               you have to explicitly attach the Logic (the callbacks) to the property page. There\n\
               are two ways to do that:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF17F27E-E9AC-4745-AFEB-CBBBE59E9325\"></a></span>You can use the <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a> property (which corresponds to the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siUILogic</a> layout attribute) to attach each callback function as one long string.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED96DF9D-7B94-4635-9051-21475F98D434\"></a></span>You can use the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siUILogicFile</a> layout attribute to specify the path and filename of the script file where your Logic\n\
                     resides.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0095\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F507FEBF-4DC3-41B1-8581-44C9F2F35F49\"></a></span> Specifying the Language for the Logic Section\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4484125A-DC1D-437D-8D72-87972331B666\"></a></span>You can use the <a href=\"#!/url=./si_om/PPGLayout.Language.html\">PPGLayout.Language</a> property (which corresponds to the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siUILanguage</a> layout attribute) to set the language used for the implementation of the Logic section.\n\
                  The default scripting language is <span class=\"code\" translate=\"no\">VBScript</span>, but you can specify <span class=\"code\" translate=\"no\">JScript</span> and <span class=\"code\" translate=\"no\">Python</span>.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";