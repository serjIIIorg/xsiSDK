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
      <meta name=\"topicid\" content=\"GUID-3550C807-D3BB-4113-BA72-13499390184D\" />\n\
      <meta name=\"indexterm\" content=\"Converting an API Class to a CRef\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>About the CRef Casting Operator</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3550C807-D3BB-4113-BA72-13499390184D\"></a></span><div class=\"head\">\n\
            <h1>About the CRef Casting Operator</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0B1A9C1-013D-48DE-A2F7-234BB722E92A\"></a></span>The API classes that derive from <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> use a <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> for encapsulating the Softimage underlying objects. To identify which classes can\n\
               be used for a given CRef the C++ API uses some form of a run-time type identification\n\
               system (RTTI) based on CRef. CRef operator and extractor methods are implemented by\n\
               most of the API classes to access their underlying CRef objects (see the reference\n\
               documentation for <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> for more details).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1F1F1F9F-7FB3-4731-A400-600D89B8560F\"></a></span> Converting an API Class to a CRef\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1380D5C-1B60-4291-B13B-E0AA76DFA196\"></a></span>The key method for converting or <em class=\"mild\">casting</em> an API class to a CRef automatically is this one:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CBase::operator CRef&amp;();\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCA465BE-E026-4B13-B54B-0F866D519877\"></a></span>This method extracts the CRef object from the API class and can be used to explicitly\n\
                  convert an API class to a CRef object in specific situations. For example:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
extern int foo( CRef&amp; in_ref );\n\
extern CValue GetMyValue();\n\
\n\
Model root = app.GetActiveSceneRoot();\n\
\n\
foo( root );\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C5D7D3F-4B0F-4E45-A557-E77E389587AE\"></a></span>If, in certain circumstances, the automatic conversion does not compile (for example,\n\
                  on Linux) then you need to use one of the following approaches instead:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
foo( (CRef)root );\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D673D1B-974B-462E-B63B-B97A556076B2\"></a></span>or\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
foo( root.GetRef() );\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6418A215-5A76-4CEC-BC54-2943D5D79625\"></a></span>If a CRef is encapsulated in a <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> object then you need to use this:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	CValue val = GetMyValue()\n\
\n\
	if (val.m_t == CValue::siRef)\n\
	{\n\
		foo( val );	\n\
	}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";