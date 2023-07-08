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
      <meta name=\"topicid\" content=\"GUID-73A44CFF-5DD0-48E2-9F1B-B37C60F92C11\" />\n\
      <meta name=\"indexterm\" content=\"values: returned from functions\" />\n\
      <meta name=\"indexterm\" content=\"object model: return values\" />\n\
      <meta name=\"indexterm\" content=\"commands: return values\" />\n\
      <meta name=\"indexterm\" content=\"What is a Return Value?\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Returning Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-73A44CFF-5DD0-48E2-9F1B-B37C60F92C11\"></a></span><div class=\"head\">\n\
            <h1>Returning Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F334A3DD-D72C-41D1-88BF-DDD0B9ADFDFB\"></a></span>For each Softimage function that uses an explicit return value, it indicates what\n\
               is returned under the <em class=\"strong\">Return Value</em> section of its reference entry. If there is no Return Value section, the function\n\
               does not explicitly return a value. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-2D152AB6-3E08-4C06-896E-AEE2A79F7CA7\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-457F7516-90D6-4B08-B8B0-6F179239F675\"></a></span>For experienced scripters, there are some issues with using return values and output\n\
                     arguments that you need to know about: <span class=\"char_link\"><a href=\"#!/url=./files/OutputArgArrays.htm\">Working with Return Values and Output Arguments</a></span>. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A35D94C-821C-4D1E-9F96-59716A9E12EE\"></a></span>For novice scripters you should also read these sections: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_9A38956EB51D49089BBC59811855B23E\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8799E0BE-A685-433D-AEA0-4FAB1B8CEC95\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002C\">Returning Data Values</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3C452AA-656B-4261-97C8-EB38E8DDCBD7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002D\">Returning Objects</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2C6F251-4174-4BD9-ADC4-08A27E65A752\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0030\">Simple Objects versus Collections</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0026\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B8415449-130C-4F34-8C00-A05397321E2B\"></a></span> What is a Return Value?\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-746B4669-B115-4BC3-BCF0-3FB8A908A98E\"></a></span>A return value is any value that a function sends back to the caller. This return\n\
                  value can be captured using the assignment operator (=) as demonstrated in the example\n\
                  below: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the user path from the application object\n\
var sPath = Application.InstallationPath( siUserPath );\n\
LogMessage( sPath + \" is the working path for the User.\" );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EEC5F48E-EB91-4C50-9295-B280F128FE4C\"></a></span>The <a href=\"#!/url=./si_om/XSIApplication.InstallationPath.html\">InstallationPath</a> method returned the path where Softimage was installed (for example, <span class=\"filePath\" translate=\"no\">C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span></span>) which the script writer captured in the <span class=\"code\" translate=\"no\">sPath</span> variable. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1EF5B2C1-4518-4CC7-8D20-05283AB231C7\"></a></span>Many Autodesk Softimage commands and methods that create something also return it.\n\
                  You can use the return value to make your scripts reusable. For example, the following\n\
                  lines use functions that return numeric values that are saved into variables: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// XSIMath.DegreesToRadians returns a double\n\
var iDegrees = 30;\n\
var dRadians = XSIMath.DegreesToRadians( iDegrees );\n\
LogMessage( \"iDegrees = \" + iDegrees + \" as a \" + typeof(iDegrees) );\n\
LogMessage( \"dRadians = \" + dRadians + \" as a \" + typeof(dRadians) );\n\
\n\
//GetNbTriangles returns a long\n\
var sList = GetValue( \"SelectionList\" );\n\
var lNumberOfTriangles = GetNbTriangles( sList );\n\
LogMessage( \"Selection contains \" + lNumberOfTriangles + \" triangles as a \" \n\
	+ typeof(lNumberOfTriangles) );</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-FD064748-725D-408A-9B13-070BA5E73845\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C7EFCD0-EC8B-432D-B6BC-96B49AA04652\"></a></span>For more information on using data value variables, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002C\">Returning Data Values</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3B42F8A-D20E-499A-AA96-C43005FD0EA3\"></a></span>In some cases, instead of using a string or numeric variable, you can save the return\n\
                  value as an object. For example, when you create a 3D object and store it an object\n\
                  variable, you can exploit the power of the object model to work with that object.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A093B515-FED5-4D9B-B7D0-72E150990203\"></a></span>The following lines demonstrate how to create a primitive surface sphere and ask Autodesk\n\
                  Softimage to name it <em class=\"strong\">orb</em> without returning the new sphere as an object: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Using a native Softimage scripting command\n\
CreatePrim( \"Sphere\", \"NurbsSurface\", \"orb\" );\n\
\n\
\' Using the Softimage object model\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
oRoot.AddGeometry \"Sphere\", \"NurbsSurface\", \"orb\" </pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-844CFA3B-897B-49F4-AA3E-471902070A89\"></a></span>In this example, the command (<a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a>) and method (<a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">AddGeometry</a>) provide a <span class=\"code\" translate=\"no\">Name</span> parameter which allows you to influence what Softimage names it in the explorer.\n\
                  You can refer to this object by name later in your script, but it does not give you\n\
                  access to any object model functions. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A44D0C9C-21F7-4F42-AFA9-68470BAD4565\"></a></span>There\'s another concern: the new sphere could be named <em class=\"strong\">orb</em>, <em class=\"strong\">orb1</em>, or <em class=\"strong\">orb127</em>, depending on how many other objects with that name are already in the scene. Because\n\
                  of this, you cannot rely on an object\'s name when scripting. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE711E98-E3D8-4889-981A-11962C27C61B\"></a></span>For a more dependable way of referring to the objects you create through scripting,\n\
                  convert the return value to an object. This code snippet is nearly identical to the\n\
                  previous one, except that it creates an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> with access to several useful methods and properties. For example, you can find out\n\
                  who the parent is or find out whether it is selected: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Using the native Softimage scripting command\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
LogMessage oSphere.Name &amp; \"Ôs parent is \" &amp; oSphere.Parent\n\
\n\
\' Using the Softimage object model\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\", \"orb\" )\n\
LogMessage \"Is \" &amp; oSphere.Name &amp; \" selected?...\" &amp; oSphere.Selected</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-0F8A7F2A-EA0C-4538-9C37-2EF47A454F38\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-67E46580-6E5B-4938-A690-DAEDCD674AFE\"></a></span>For more information on using object variables, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002D\">Returning Objects</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6F775F2-6DE3-4157-83C0-CAB1F7752235\"></a></span>Some commands and methods provide an output argument (or output parameter) that can\n\
                  be used to capture that parameter\'s information in a variable: \n\
               </p> <span class=\"code\" translate=\"no\">IsAnimated , siFcurveSource, , myParams</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-081E8582-5147-47F6-BDC5-10A9E5D0CE7A\"></a></span>In this example <span class=\"code\" translate=\"no\">myParams</span> is the variable you pass into the IsAnimated command. When the command runs, it stores\n\
                  the collection of parameters that are animated in the <span class=\"code\" translate=\"no\">myParams</span> variable so you can access and manipulate it later in the script. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-C49FCEBF-8101-4FE2-A2F0-C2D6CCD4D2AD\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B53F2498-051F-4AE0-B03E-9AB49790BA80\"></a></span>For more information on using output arguments, see <span class=\"char_link\"><a href=\"#!/url=./files/OutputArgArrays.htm\">Working with Return Values and Output Arguments</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_data_WhatYouShouldKnowaboutReturnValues.htm\">What You Should Know about Return Values</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm\">What to Watch Out for with Objects and Collections</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_data_MakingSureReturnedValuesareValid.htm\">Making Sure Returned Values are Valid</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";