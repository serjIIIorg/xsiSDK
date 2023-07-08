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
      <meta name=\"topicid\" content=\"GUID-7FCD5167-FEFF-4369-B0F1-1643DE48DBD4\" />\n\
      <meta name=\"indexterm\" content=\"arrays (in scripting): multi-dimensional\" />\n\
      <meta name=\"indexterm\" content=\"JScript: using the GridData object\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the GridData Object</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7FCD5167-FEFF-4369-B0F1-1643DE48DBD4\"></a></span><div class=\"head\">\n\
            <h1>Using the GridData Object</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A357EB4-17EA-4D60-8AFF-C11ECE6E5056\"></a></span>The <a href=\"#!/url=./si_om/GridData.html\">GridData</a> object provides a way for you to manage 2-dimensional SAFEARRAYs more easily. Of\n\
               special interest is the fact that property pages support the GridData parameter so\n\
               you can easily view the 2-dimensional information (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingaGridDataObjectinaCustomPropertySet.htm#WS51A0B8DF367E804591A913DDA18BECD3-0016\">Example: Storing an existing array in a GridData object</a></span>).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B6C333A-45CB-41CC-8C43-87DE85AA3194\"></a></span>There are two different ways to create a GridParameter object:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3FC8E2EB-5D74-4675-B300-F6088E86AD43\"></a></span>As the value of a special grid <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> on a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> set (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingaGridDataObjectinaCustomPropertySet.htm\">Using a GridData Object in a Custom Property Set</a></span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C723C314-B552-4D28-838F-068E6C7E1C66\"></a></span>From the instrinsic <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a> object, for temporary use (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingaTemporaryGridDataObject.htm\">Using a Temporary GridData Object</a></span>).\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-44A1DE08-673C-44DB-9C29-2C13BC49036B\"></a></span>In fact, some languages (such as JScript) do not support multi-dimensional arrays,\n\
               so the GridData object allows JScript authors to manipulate 2-dimensional SAFEARRAYs.\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_arrays_UsingaGridDataObjectinaCustomPropertySet.htm\">Using a GridData Object in a Custom Property Set</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_arrays_UsingaTemporaryGridDataObject.htm\">Using a Temporary GridData Object</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";