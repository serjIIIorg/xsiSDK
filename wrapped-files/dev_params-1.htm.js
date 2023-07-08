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
      <meta name=\"topicid\" content=\"GUID-81CC7C3E-9A81-4521-87AA-81C111ECC9B0\" />\n\
      <meta name=\"indexterm\" content=\"parameters: defined\" />\n\
      <meta name=\"indexterm\" content=\"parameters: possible data types\" />\n\
      <meta name=\"indexterm\" content=\"parameters: possible drivers\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Parameter?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-81CC7C3E-9A81-4521-87AA-81C111ECC9B0\"></a></span><div class=\"head\">\n\
            <h1> What is a Parameter?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDCC0BEB-F68D-4AD4-B450-D381B2853CD8\"></a></span>Parameters (sometimes called <em class=\"mild\">properties</em>) are the \"atomic\" elements of a property set whose values determine the behavior\n\
            of something. For example, the <em class=\"strong\">posx</em> parameter in <span class=\"code\" translate=\"no\">Cone.kine.local.posx</span> represents the local position in X of the cone object, whereas the <em class=\"strong\">viewvis</em> parameter in <span class=\"code\" translate=\"no\">Camera_Root.visibility.viewvis</span> determines whether or not the camera root is hidden in the UI.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-08D8AE06-1216-4940-91F7-93B0AFCEF145\"></a></span>You can view and set parameter values through property editors in the UI. You can\n\
            also get and set parameters through scripted or compiled code.\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-39FCEF8F-1A02-4FAA-AF17-1318DE1F0DFE\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3406EBD-388E-4DA5-959F-069C0E0CC034\"></a></span>If you want to add your own parameters to an object you can use a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object. For more information, see <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D6800F6A-C1A6-46E9-B02C-794B9D8A92ED\"></a></span>What Can Populate a Parameter?\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-97C41742-DA23-4902-BD2C-6B95FA8EA712\"></a></span>Parameters contain data which is <em class=\"mild\">driven</em>, or determined, either by a human, a scene element or another piece of data. There\n\
               are two questions to ask about parameter values:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-69E1DE10-5F3C-4B96-822A-2BF8DD166C96\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_params-1.htm#WSED592B8513B33F4E98849086F360A587-0005\">What Kind of Data Can a Parameter Contain?</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B004E9B-2B78-4589-98D3-571859E5FCC4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_params-1.htm#WSED592B8513B33F4E98849086F360A587-0006\">What Can Drive a Parameter?</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E83F4383-ADB5-48A8-86A5-6CFE50EBFC3F\"></a></span> What Kind of Data Can a Parameter Contain?\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-496EF921-77DA-4E7F-A339-40EB3FE61227\"></a></span>The following types of data can populate a parameter:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9818CC8D-8884-4081-8F7C-4A8D4DC72F66\"></a></span> <em class=\"strong\">basic types</em>—numeric values (such as integer, long, float, double), boolean and string values.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D84BA4DA-B036-4335-B0A5-8BB0DB49E901\"></a></span> <em class=\"strong\">special types</em>—colors (floats bundled together for RGB or RGBA definition), <span class=\"char_link\"><a href=\"#!/url=./files/CompoundParameter.htm\">compound parameter</a></span>s (parameters that themselves contain more parameters, such as the Local Transform)\n\
                        parameters that are objects (such as <a href=\"#!/url=./si_om/GridData.html\">GridData</a>, \"profile\" <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>, etc.)\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-18D8A1DB-8CF8-425E-872A-886321F125DA\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C80EBB12-A1A9-4655-8FC6-55D3608601AC\"></a></span>FCurves that can directly populate a parameter are called <em class=\"mild\">profile</em> curves and are available using the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property. These differ from the <em class=\"mild\">animation</em> fcurves which are the source, or driver, of a parameter value.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E58D9E6A-BA56-4558-949A-4937EDA1A660\"></a></span>When you use the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property on a parameter that is driven by an animation fcurve you get a simple numerical\n\
                              value (for example, float), but you can also get the animation fcurve by using the\n\
                              <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> property.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-181056FA-BF5D-494D-AF7A-568C931FC5A0\"></a></span>For more information, see <a href=\"#!/url=./files/dev_FCurves.htm\">FCurves</a>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0006\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-677054EB-56EE-499F-998E-77721504DF61\"></a></span> What Can Drive a Parameter?\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B7CBD37-07C4-43D8-8D14-2592028F6851\"></a></span>Parameter values can be changed via one of these methods:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-003CD0C7-C865-4618-9C2B-395935076E18\"></a></span> <em class=\"strong\">user interface</em>—property pages display parameter values which the user can modify directly. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C13CD4C5-2D6D-4B7B-9F5F-80A2FCE64637\"></a></span> <em class=\"strong\">proxy parameters</em>—conduits to another parameter value; that is, you can control another parameter via\n\
                        a proxy (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_ProxyParameters.htm\">Proxy Parameters</a></span>).\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-67BE5FD7-D3C1-4F34-8FDB-E20086B57BF6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A6DE413-A185-4E2F-862A-6716ECFA687C\"></a></span>To get the master parameter from the proxy parameter, use the <a href=\"#!/url=./si_om/ProxyParameter.MasterParameter.html\">ProxyParameter.MasterParameter</a> property.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D89C506-4BD0-40B7-9E66-E6621DF4B9CB\"></a></span> <em class=\"strong\">expressions</em>—mathematical formulas that control any animatable parameter (see <a href=\"#!/url=./files/dev_LinkedParameters.htm\">Linked Parameters</a>), including <em class=\"strong\">linked</em> parameters, or dependencies between animatable parameters (see Linked Parameters).\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-72CACFB1-54CF-450D-8F5F-800FB9D16265\"></a></span> <em class=\"strong\">custom operators</em>—similar to expressions, but the logic is more complex, so you can apply the power\n\
                        of scripts and compiled libraries to read and write values (see <a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a>).\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9809890-3C4B-4952-AE08-34CB23CE2B66\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEC42E41-12C6-48DA-A981-9A080B6B476D\"></a></span>You can access any data source that is connected to a parameter using the <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> property. Data source types include <a href=\"#!/url=./si_om/Expression.html\">Expression</a>, <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>, <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a>, <em class=\"mild\">animation</em><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>, <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>, <a href=\"#!/url=./si_om/Operator.html\">Operator</a>, <a href=\"#!/url=./si_om/Shader.html\">Shader</a> and <a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a>.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B084428-1697-4AE7-8F80-B06C8CD93489\"></a></span>However, remember that if you are using the <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> property on a proxy parameter, it always returns the source nested under the <em class=\"mild\">master</em> parameter.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";