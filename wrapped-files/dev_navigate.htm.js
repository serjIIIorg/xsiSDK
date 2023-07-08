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
      <meta name=\"topicid\" content=\"GUID-3A9388AC-0E11-4B59-8BEC-0CD08FA40D33\" />\n\
      <meta name=\"indexterm\" content=\"navigation: scene graph\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with the Softimage Scene Graph</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3A9388AC-0E11-4B59-8BEC-0CD08FA40D33\"></a></span><div class=\"head\">\n\
            <h1> Working with the Softimage Scene Graph</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2348D81F-F657-46BE-A602-1403905363EE\"></a></span>The Softimage Scene Graph consists of a relationship between data nodes (such as a\n\
            3DObject, transform, primitive, cluster, etc.) and the operators that manipulate them\n\
            (such as generators, deformers, expressions, constraints, etc.).\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBCCD4D9-F754-42D6-BD8B-12B2EDDAE6C2\"></a></span>What you see in the Scene Explorer is a representation of the data nodes nesting hierarchy.\n\
            Most scene elements have their own interface, such as X3DObject for 3D scene objects,\n\
            Camera for cameras, Model for models, and so on. Likewise, the Primitive and Geometry\n\
            interfaces are available via their 3D object to provide low-level access to the subcomponent\n\
            elements.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CC102EC-77F5-4374-94F7-3E826F80B7DD\"></a></span>All property sets use either the generic Property interface or specialized ones for\n\
            frequently-accessed information, such as Kinematics, Constraint, Shader, or Material.\n\
            Parameters are usually represented by the Parameter interface (although there are\n\
            also specialized interfaces such as ProxyParameter).\n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_navigate-1.htm\"> Finding 3D Objects</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_navigate-2.htm\"> Tree Crawling</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_navigate-3.htm\"> Special Navigational Tools</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_navigate-4.htm\"> Finding Elements using the Full Path</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";