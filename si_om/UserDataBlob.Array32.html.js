var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserDataBlob.Array32</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>UserDataBlob.Array32</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a>.Array32 <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p /> Sets or returns binary user data on the UserDataBlob as a Safe<a href=\"#!/url=./files/Array.htm\">Array</a> of unsigned\n\
integers (32 bit). The preferred language for working with this property is Python.\n\
<br /><br />\n\
This property provides better performance than the <a href=\"#!/url=./si_om/UserDataBlob.ByteArray.html\">UserDataBlob.ByteArray</a>\n\
property, especially when used with the Python scripting language and its \n\
<a href=\"http://docs.python.org/library/array.html\">array module</a>.\n\
The Array32 property allows you to pack up to 4 unsigned bytes inside a single unsigned \n\
integer, so that there is less overhead when accessing or setting the data.\n\
<br /><br />\n\
When setting this property, you must manually convert your unsigned byte array into an\n\
unsigned integer array using this schema: [<padding count=\"\">,<data>,<padding>], \n\
where <data> represents the byte(s) you want to store, <padding> represents any null \n\
bytes you need to add in order to make this a valid 32-bit integer, and <padding count=\"\"> \n\
represents the number of null bytes you had append to the end of the data to make it a valid \n\
32-bit integer.\n\
<br /><br />\n\
When converting the return value to a byte array, you need to interpret the same schema:\n\
the first item of the array represents the number of null bytes padded to the byte array;\n\
the next item(s) represent the data plus any padding as indicated by the initial padding \n\
count. These requirements must be respected:\n\
<br /><br />\n\
- the data is set and returned as a Safe<a href=\"#!/url=./files/Array.htm\">Array</a> of unsigned integers (32 bit);\n\
for Python, the recommended data structure is array.array(\'I\') and for JScript, native arrays \n\
are accepted (Python and JScript arrays are internally converted to Safe<a href=\"#!/url=./files/Array.htm\">Array</a> \n\
objects)\n\
<br /><br />\n\
- the first item in each unsigned integer array must be an integer in the range of 0-3 to\n\
describe the number of null bytes needed to pad in order to make the integer array valid\n\
<br /><br />\n\
- each unsigned byte must be in the range of 0-255\n\
<br /><br />\n\
- the value of each integer in the integer array should be in the 0-4294967295 range in order\n\
to preserve the data appropriately\n\
<br /><br />\n\
- the returned value may appear unexpected for a given scripting language\n\
<br /><br />\n\
Warning: Each element of the SafeArray is converted to four bytes internally; if such a \n\
conversion is impossible, setting the property fails and the data remains unchanged\n\
<br /><br />\n\
Note: The data is copied internally and will be persisted as part of the scene. There are no \n\
limits to the size or structure of this data. Internally, the <a href=\"#!/url=./si_om/UserDataBlob.Value.html\">UserDataBlob.Value</a>,\n\
<a href=\"#!/url=./si_om/UserDataBlob.ByteArray.html\">UserDataBlob.ByteArray</a> and the Array32 properties refer to the same data.\n\
However, for the sake of clarity, use only one or the other across your plug-in.\n\
<p /></padding></padding></data></padding></data></padding></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = UserDataBlob.Array32;\n\
// set accessor\n\
UserDataBlob.Array32 = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Setting and retrieving the data using UserDataBlob.Array32\n\
#\n\
import array\n\
Application.NewScene(\"\", False)\n\
blob = Application.ActiveSceneRoot.AddProperty(\"UserDataBlob\", False, \"myBlob\");\n\
Application.LogMessage(\"----------------Setting the Array32 Property----------------\")\n\
myString = \"This is a string!\"\n\
# Convert the string to an unsigned byte array\n\
myStringAsAByteArray = array.array(\'B\', myString)\n\
Application.LogMessage(\"myStringAsAByteArray = \" + str(myStringAsAByteArray))\n\
# To convert the unsigned byte (8 bit) array to an unsigned integer (32 bit) array,\n\
# the size of the byte array needs to be a multiple of 4.\n\
# To do so, let\'s pad the end of the byte array with null bytes\n\
NumBytesPadded = 0\n\
while len(myStringAsAByteArray) % 4 != 0:\n\
	myStringAsAByteArray.append( 0 )\n\
	NumBytesPadded += 1\n\
Application.LogMessage(\"myStringAsAByteArray = \" + str(myStringAsAByteArray))\n\
Application.LogMessage(\"NumBytesPadded = \" + str(NumBytesPadded))\n\
# Convert the unsigned byte array to an unsigned integer array\n\
# and add the number of null bytes padded as the first index of the integer array\n\
myStringAsAnIntArray = array.array(\'I\', myStringAsAByteArray.tostring())\n\
myStringAsAnIntArray.insert(0, NumBytesPadded) \n\
Application.LogMessage(\"myStringAsAnIntArray = \" + str(myStringAsAnIntArray))\n\
# Set the UserDataBlob.Array32 property\n\
blob.Array32 = myStringAsAnIntArray\n\
Application.LogMessage(\"----------------Getting the Array32 Property----------------\")\n\
# Get the UserDataBlob.Array32 property\n\
BlobIntTuple = blob.Array32\n\
Application.LogMessage(\"BlobIntTuple = \" + str(BlobIntTuple))\n\
# Convert the integer tuple to an unsigned integer array\n\
BlobIntArray = array.array(\'I\', BlobIntTuple)\n\
# Get the number of null bytes padded to the end of the byte array\n\
# and removes it from the integer array\n\
BlobNumBytesPadded = BlobIntArray.pop(0)\n\
Application.LogMessage(\"BlobNumBytesPadded = \" + str(BlobNumBytesPadded))\n\
Application.LogMessage(\"BlobIntArray = \" + str(BlobIntArray))\n\
# Convert the unsigned integer array to an unsigned byte array\n\
BlobByteArray = array.array(\'B\', BlobIntArray.tostring() )\n\
Application.LogMessage(\"BlobByteArray = \" + str(BlobByteArray))\n\
# Remove the number of bytes padded from the unsigned byte array\n\
BlobByteArray = BlobByteArray[0:len(BlobByteArray)-BlobNumBytesPadded]\n\
Application.LogMessage(\"BlobByteArray = \" + str(BlobByteArray))\n\
# Print the string\n\
Application.LogMessage(\"BlobString = \" + BlobByteArray.tostring())\n\
# Expected results:\n\
# INFO : ----------------Setting the Array32 Property----------------\n\
# INFO : myStringAsAByteArray = array(\'B\', [84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 33])\n\
# INFO : myStringAsAByteArray = array(\'B\', [84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 33, 0, 0, 0])\n\
# INFO : NumBytesPadded = 3\n\
# INFO : myStringAsAnIntArray = array(\'I\', [3L, 1936287828L, 544434464L, 1953701985L, 1735289202L, 33L])\n\
# INFO : ----------------Getting the Array32 Property----------------\n\
# INFO : BlobIntTuple = (3, 1936287828, 544434464, 1953701985, 1735289202, 33)\n\
# INFO : BlobNumBytesPadded = 3\n\
# INFO : BlobIntArray = array(\'I\', [1936287828L, 544434464L, 1953701985L, 1735289202L, 33L])\n\
# INFO : BlobByteArray = array(\'B\', [84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 33, 0, 0, 0])\n\
# INFO : BlobByteArray = array(\'B\', [84, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 33])\n\
# INFO : BlobString = This is a string!</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Setting and retrieving the data using UserDataBlob.Array32\n\
//\n\
NewScene(null, false);\n\
var blob = Application.ActiveSceneRoot.AddProperty(\"UserDataBlob\", false, \"myBlob\");\n\
// Create an unsigned integer array and set it as the blob data\n\
// Don\'t forget that the first item must be the number of null bytes added\n\
// to the unsigned byte array (0 in this case since we want to store only\n\
// unsigned integer values)\n\
var WriteArray = [0,1,3,5,4294967295];\n\
blob.Array32 = WriteArray;\n\
// Retrieve the blob data\n\
// Don\'t forget that the first item is the number of null bytes added\n\
// to the unsigned byte array\n\
var ReadArray = blob.Array32;\n\
Application.LogMessage(\"ReadArray  = \" + ReadArray.toArray());\n\
// Expected results:\n\
// INFO : ReadArray  = 0,1,3,5,4294967295</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Setting and retrieving the data using UserDataBlob.Array32\n\
\'\n\
NewScene null , False\n\
set  blob = Application.ActiveSceneRoot.AddProperty(\"UserDataBlob\", false, \"myBlob\")\n\
\' Create an unsigned integer array and set it as the blob data\n\
\' Don\'t forget that the first item must be the number of null bytes added\n\
\' to the unsigned byte array (0 in this case since we want to store only\n\
\' unsigned integer values)\n\
Dim WriteArray\n\
WriteArray = Array(0,1,3,5,4294967295)\n\
blob.Array32 = WriteArray\n\
\' Retrieve the blob data\n\
\' Don\'t forget that the first item is the number of null bytes added\n\
\' to the unsigned byte array\n\
Dim ReadArray\n\
ReadArray = blob.Array32\n\
For i = 0 to Ubound(ReadArray)\n\
	LogMessage(\"ReadArray(\" &amp; i &amp; \") = \" &amp; CStr(ReadArray(i)))\n\
Next\n\
\' Expected results:\n\
\' INFO : ReadArray(0) = 0\n\
\' INFO : ReadArray(1) = 1\n\
\' INFO : ReadArray(2) = 3\n\
\' INFO : ReadArray(3) = 5\n\
\' INFO : ReadArray(4) = 4294967295</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataBlob.ByteArray.html\">UserDataBlob.ByteArray</a> <a href=\"#!/url=./si_om/UserDataBlob.Value.html\">UserDataBlob.Value</a> <a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a> <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";