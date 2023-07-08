var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomProperty Property Presets</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>CustomProperty Property Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CustomProperty Property Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available CustomProperty <a href=\"#!/url=./si_om/Property.html\">Property</a> presets. These presets can be used to create <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> objects on <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s, partial or complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s, <a href=\"#!/url=./si_om/Material.html\">Material</a>s, <a href=\"#!/url=./si_om/Shader.html\">Shader</a>s, <a href=\"#!/url=./si_om/Clip.html\">Clip</a>s, and <a href=\"#!/url=./si_om/Source.html\">Source</a>s using any of the <span style=\"font-family: courier, monospace;\">AddProperty</span> methods (<a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>, <a href=\"#!/url=./si_om/Material.AddProperty.html\">Material.AddProperty</a>, <a href=\"#!/url=./si_om/Shader.AddProperty.html\">Shader.AddProperty</a>, <a href=\"#!/url=./si_om/Source.AddProperty.html\">Source.AddProperty</a>, <a href=\"#!/url=./si_om/Clip.AddProperty.html\">Clip.AddProperty</a>).\n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/PropPreset.html\">Property Presets</a> for property classification. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPropertyPresets.html\">Alphabetical Listing of All Property Presets</a> for a complete list of available property types.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Properties</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AcclaimImport.Preset</td>\n\
		<td><a name=\"AcclaimImport\"></a><span style=\"font-family: courier, monospace;\">AcclaimImport</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AlignWizard.Preset</td>\n\
		<td><a name=\"AlignWizard\"></a><span style=\"font-family: courier, monospace;\">AlignWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Annotation.Preset</td>\n\
		<td><a name=\"Annotation\"></a><span style=\"font-family: courier, monospace;\">Annotation</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AssignEnvelope.Preset</td>\n\
		<td><a name=\"AssignEnvelope\"></a><span style=\"font-family: courier, monospace;\">AssignEnvelope</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BiovisionImport.Preset</td>\n\
		<td><a name=\"BiovisionImport\"></a><span style=\"font-family: courier, monospace;\">BiovisionImport</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BipedGuide.Preset</td>\n\
		<td><a name=\"BipedGuide\"></a><span style=\"font-family: courier, monospace;\">BipedGuide</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Charac_HierachyFromBiped.Preset</td>\n\
		<td><a name=\"Charac_HierachyFromBiped\"></a><span style=\"font-family: courier, monospace;\">Charac_HierachyFromBiped</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Character_Designer.Preset</td>\n\
		<td><a name=\"Character_Designer\"></a><span style=\"font-family: courier, monospace;\">Character_Designer</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConvertShapeReferenceMode.Preset</td>\n\
		<td><a name=\"ConvertShapeReferenceMode\"></a><span style=\"font-family: courier, monospace;\">ConvertShapeReferenceMode</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CreateSymmetryMappingTemplate.Preset</td>\n\
		<td><a name=\"CreateSymmetryMappingTemplate\"></a><span style=\"font-family: courier, monospace;\">CreateSymmetryMappingTemplate</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CustomParameter.Preset</td>\n\
		<td><a name=\"CustomParameter\"></a><span style=\"font-family: courier, monospace;\">CustomParameter</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CustomParameterSet.Preset</td>\n\
		<td><a name=\"CustomParameterSet\"></a>Custom parameter set<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/customparamset.html\">customparamset</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CustomProperty.Preset</td>\n\
		<td><a name=\"CustomProperty\"></a><span style=\"font-family: courier, monospace;\">CustomProperty</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Custom_parameter_list.Preset</td>\n\
		<td><a name=\"Custom_parameter_list\"></a><span style=\"font-family: courier, monospace;\">Custom_parameter_list</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DuplicateSymmetryWizard.Preset</td>\n\
		<td><a name=\"DuplicateSymmetryWizard\"></a><span style=\"font-family: courier, monospace;\">DuplicateSymmetryWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EditParameterDefinitionWizard.Preset</td>\n\
		<td><a name=\"EditParameterDefinitionWizard\"></a><span style=\"font-family: courier, monospace;\">EditParameterDefinitionWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Face_Maker.Preset</td>\n\
		<td><a name=\"Face_Maker\"></a><span style=\"font-family: courier, monospace;\">Face_Maker</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FindCycleWizard.Preset</td>\n\
		<td><a name=\"FindCycleWizard\"></a><span style=\"font-family: courier, monospace;\">FindCycleWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FreezeActionWizard.Preset</td>\n\
		<td><a name=\"FreezeActionWizard\"></a><span style=\"font-family: courier, monospace;\">FreezeActionWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LightRigBuilderOptions.Preset</td>\n\
		<td><a name=\"LightRigBuilderOptions\"></a><span style=\"font-family: courier, monospace;\">LightRigBuilderOptions</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MatchClips.Preset</td>\n\
		<td><a name=\"MatchClips\"></a><span style=\"font-family: courier, monospace;\">MatchClips</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MotionFactory.Preset</td>\n\
		<td><a name=\"MotionFactory\"></a><span style=\"font-family: courier, monospace;\">MotionFactory</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PasteAction.Preset</td>\n\
		<td><a name=\"PasteAction\"></a><span style=\"font-family: courier, monospace;\">PasteAction</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PlotShape.Preset</td>\n\
		<td><a name=\"PlotShape\"></a><span style=\"font-family: courier, monospace;\">PlotShape</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PlotToActionWizard.Preset</td>\n\
		<td><a name=\"PlotToActionWizard\"></a><span style=\"font-family: courier, monospace;\">PlotToActionWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RenamePropertyDialog.Preset</td>\n\
		<td><a name=\"RenamePropertyDialog\"></a><span style=\"font-family: courier, monospace;\">RenamePropertyDialog</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Rig_From_Quadruped_01.Preset</td>\n\
		<td><a name=\"Rig_From_Quadruped_01\"></a><span style=\"font-family: courier, monospace;\">Rig_From_Quadruped_01</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SampleParamValues.Preset</td>\n\
		<td><a name=\"SampleParamValues\"></a><span style=\"font-family: courier, monospace;\">SampleParamValues</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SelectShapeKey.Preset</td>\n\
		<td><a name=\"SelectShapeKey\"></a><span style=\"font-family: courier, monospace;\">SelectShapeKey</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Sequence.Preset</td>\n\
		<td><a name=\"Sequence\"></a><span style=\"font-family: courier, monospace;\">Sequence</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StoreAction.Preset</td>\n\
		<td><a name=\"StoreAction\"></a><span style=\"font-family: courier, monospace;\">StoreAction</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TextureWizard.Preset</td>\n\
		<td><a name=\"TextureWizard\"></a><span style=\"font-family: courier, monospace;\">TextureWizard</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">midi_keyboard_options.Preset</td>\n\
		<td><a name=\"midi_keyboard_options\"></a><span style=\"font-family: courier, monospace;\">midi_keyboard_options</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">rig_from_guide_04.Preset</td>\n\
		<td><a name=\"rig_from_guide_04\"></a><span style=\"font-family: courier, monospace;\">rig_from_guide_04</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">synoptic.Preset</td>\n\
		<td><a name=\"synoptic\"></a>Synoptic View Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/synoptic.html\">synoptic</a> property parameter list information.		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";