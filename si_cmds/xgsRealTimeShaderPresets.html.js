var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RealTime Shader Presets</title>\n\
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
            <h1>RealTime Shader Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RealTime Shader Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available RealTime <a href=\"#!/url=./si_om/Shader.html\">Shader</a> presets. Realtime shaders allow you to build and control the multipass realtime rendering pipeline, using the render tree. You can connect these shaders together to achieve a multitude of sophisticated rendering effects, from basic surface shading to complex texture blending and reflection. <br /><br />For more information, see <a href=\"http://softimage.wiki.softimage.com/xsidocs/rt_cover.htm\">the user guide</a></p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> for a list of different shader preset types. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllShaderPresets.html\">Alphabetical Listing of All Shader Presets</a> for a complete list of available shaders.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Shaders</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgBoolean.Preset</td>\n\
		<td><a name=\"RealTimeCgBoolean\"></a>CgBoolean Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgBoolean_1_0.html\">Softimage.CgBoolean.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgColor.Preset</td>\n\
		<td><a name=\"RealTimeCgColor\"></a>Cg Color Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgColor_1_0.html\">Softimage.CgColor.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgInteger.Preset</td>\n\
		<td><a name=\"RealTimeCgInteger\"></a>CgInteger Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgInteger_1_0.html\">Softimage.CgInteger.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgLightTracker.Preset</td>\n\
		<td><a name=\"RealTimeCgLightTracker\"></a>Cg Light Tracker Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgLightTracker_1_0.html\">Softimage.CgLightTracker.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgMatrix.Preset</td>\n\
		<td><a name=\"RealTimeCgMatrix\"></a>Cg Matrix Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgMatrix_1_0.html\">Softimage.CgMatrix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgScalar.Preset</td>\n\
		<td><a name=\"RealTimeCgScalar\"></a>CgScalar Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgScalar_1_0.html\">Softimage.CgScalar.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\CgVector.Preset</td>\n\
		<td><a name=\"RealTimeCgVector\"></a>Cg Vector Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_CgVector_1_0.html\">Softimage.CgVector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10Blend.Preset</td>\n\
		<td><a name=\"RealTimeDX10Blend\"></a>DX10 Blend Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10Blend_1_0.html\">Softimage.DX10Blend.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10DepthStencil.Preset</td>\n\
		<td><a name=\"RealTimeDX10DepthStencil\"></a>DX10 DepthStencil Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10DepthStencil_1_0.html\">Softimage.DX10DepthStencil.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10Draw.Preset</td>\n\
		<td><a name=\"RealTimeDX10Draw\"></a>DX10 Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10Draw_1_0.html\">Softimage.DX10Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10FX.Preset</td>\n\
		<td><a name=\"RealTimeDX10FX\"></a>DX10 FX Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10FX_1_0.html\">Softimage.DX10FX.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10HLSLProgram.Preset</td>\n\
		<td><a name=\"RealTimeDX10HLSLProgram\"></a>DX10 HLSL Program Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10HLSLProgram_1_0.html\">Softimage.DX10HLSLProgram.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10Rasterizer.Preset</td>\n\
		<td><a name=\"RealTimeDX10Rasterizer\"></a>DX10 Rasterizer Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10Rasterizer_1_0.html\">Softimage.DX10Rasterizer.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10Sampler.Preset</td>\n\
		<td><a name=\"RealTimeDX10Sampler\"></a>DX10 Sampler Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10Sampler_1_0.html\">Softimage.DX10Sampler.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DX10Texture.Preset</td>\n\
		<td><a name=\"RealTimeDX10Texture\"></a>DX10 Texture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DX10Texture_1_0.html\">Softimage.DX10Texture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXCubicCrossTexture.Preset</td>\n\
		<td><a name=\"RealTimeDXCubicCrossTexture\"></a>DXCubicCrossTexture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXCubicCrossTexture_1_0.html\">Softimage.DXCubicCrossTexture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXCubicTexture.Preset</td>\n\
		<td><a name=\"RealTimeDXCubicTexture\"></a>DXCubicTexture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXCubicTexture_1_0.html\">Softimage.DXCubicTexture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXDraw.Preset</td>\n\
		<td><a name=\"RealTimeDXDraw\"></a>DXDraw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXDraw_1_0.html\">Softimage.DXDraw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXFx.Preset</td>\n\
		<td><a name=\"RealTimeDXFx\"></a>DirectX_FX_Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXFX_1_0.html\">Softimage.DXFX.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXHLSLColor.Preset</td>\n\
		<td><a name=\"RealTimeDXHLSLColor\"></a>DXHLSLVector Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXHLSLColor_1_0.html\">Softimage.DXHLSLColor.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXHLSLMatrix.Preset</td>\n\
		<td><a name=\"RealTimeDXHLSLMatrix\"></a>DXHLSLMatrix Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXHLSLMatrix_1_0.html\">Softimage.DXHLSLMatrix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXHLSLProgram.Preset</td>\n\
		<td><a name=\"RealTimeDXHLSLProgram\"></a>DXHLSLProgram Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXHLSLProgram_1_0.html\">Softimage.DXHLSLProgram.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXHLSLVector.Preset</td>\n\
		<td><a name=\"RealTimeDXHLSLVector\"></a>DXHLSLVector<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXHLSLVector_1_0.html\">Softimage.DXHLSLVector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXPSColorConst.Preset</td>\n\
		<td><a name=\"RealTimeDXPSColorConst\"></a>DXPSColorConst Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXPSColorConst_1_0.html\">Softimage.DXPSColorConst.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXPixelShader.Preset</td>\n\
		<td><a name=\"RealTimeDXPixelShader\"></a>DXPixelShader Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXPixelShader_1_0.html\">Softimage.DXPixelShader.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXShade.Preset</td>\n\
		<td><a name=\"RealTimeDXShade\"></a>DXShade Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXShade_1_0.html\">Softimage.DXShade.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXShadowMap.Preset</td>\n\
		<td><a name=\"RealTimeDXShadowMap\"></a>DXShadowMap Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXShadowMap_1_0.html\">Softimage.DXShadowMap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXShadowReceiver.Preset</td>\n\
		<td><a name=\"RealTimeDXShadowReceiver\"></a>DXShadowReceiver Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXShadowReceiver_1_0.html\">Softimage.DXShadowReceiver.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXTexCoord.Preset</td>\n\
		<td><a name=\"RealTimeDXTexCoord\"></a>DXTexCoord Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXTexCoord_1_0.html\">Softimage.DXTexCoord.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXTexture.Preset</td>\n\
		<td><a name=\"RealTimeDXTexture\"></a>DXTexture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXTexture_1_0.html\">Softimage.DXTexture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXTextureFile.Preset</td>\n\
		<td><a name=\"RealTimeDXTextureFile\"></a>DXTextureFile Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXTextureFile_1_0.html\">Softimage.DXTextureFile.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXVSColor.Preset</td>\n\
		<td><a name=\"RealTimeDXVSColor\"></a>DXVSColor Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXVSColor_1_0.html\">Softimage.DXVSColor.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXVSLightTracker.Preset</td>\n\
		<td><a name=\"RealTimeDXVSLightTracker\"></a>DXVSLightTracker Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXVSLightTracker_1_0.html\">Softimage.DXVSLightTracker.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXVSMatrix.Preset</td>\n\
		<td><a name=\"RealTimeDXVSMatrix\"></a>DXVSMatrix Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXVSMatrix_1_0.html\">Softimage.DXVSMatrix.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXVSVector.Preset</td>\n\
		<td><a name=\"RealTimeDXVSVector\"></a>DXVSVector Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXVSVector_1_0.html\">Softimage.DXVSVector.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\DXVertexShader.Preset</td>\n\
		<td><a name=\"RealTimeDXVertexShader\"></a>DXVertexShader Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_DXVertexShader_1_0.html\">Softimage.DXVertexShader.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\GLSLProgram.Preset</td>\n\
		<td><a name=\"RealTimeGLSLProgram\"></a>GLSL Shader Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_GLSLProgram_1_0.html\">Softimage.GLSLProgram.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\GLSLUniform.Preset</td>\n\
		<td><a name=\"RealTimeGLSLUniform\"></a>GLSL Uniform Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_GLSLUniform_1_0.html\">Softimage.GLSLUniform.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13CubicCrossTexture.Preset</td>\n\
		<td><a name=\"RealTimeOGL13CubicCrossTexture\"></a>OGL13CubicCrossTexture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13CubicCrossTexture_1_0.html\">Softimage.OGL13CubicCrossTexture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13CubicTexture.Preset</td>\n\
		<td><a name=\"RealTimeOGL13CubicTexture\"></a>OGL13CubicTexture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13CubicTexture_1_0.html\">Softimage.OGL13CubicTexture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13Draw.Preset</td>\n\
		<td><a name=\"RealTimeOGL13Draw\"></a>OGL13Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Draw_1_0.html\">Softimage.OGL13Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13Shade.Preset</td>\n\
		<td><a name=\"RealTimeOGL13Shade\"></a>OGL13Shade Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Shade_1_0.html\">Softimage.OGL13Shade.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13TexCoord.Preset</td>\n\
		<td><a name=\"RealTimeOGL13TexCoord\"></a>OGL13TexCoord Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13TexCoord_1_0.html\">Softimage.OGL13TexCoord.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL13Texture.Preset</td>\n\
		<td><a name=\"RealTimeOGL13Texture\"></a>OGL Texture Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Texture_1_0.html\">Softimage.OGL13Texture.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL1Pass.Preset</td>\n\
		<td><a name=\"RealTimeOGL1Pass\"></a>OGL13Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Draw_1_0.html\">Softimage.OGL13Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL2Pass.Preset</td>\n\
		<td><a name=\"RealTimeOGL2Pass\"></a>OGL13Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Draw_1_0.html\">Softimage.OGL13Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGL3Pass.Preset</td>\n\
		<td><a name=\"RealTimeOGL3Pass\"></a>OGL13Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Draw_1_0.html\">Softimage.OGL13Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLAlphaTrans.Preset</td>\n\
		<td><a name=\"RealTimeOGLAlphaTrans\"></a>OGL13Draw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGL13Draw_1_0.html\">Softimage.OGL13Draw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLCom.Preset</td>\n\
		<td><a name=\"RealTimeOGLCom\"></a>RTShader_OGLCom Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLCom_1_0.html\">Softimage.OGLCom.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLDraw.Preset</td>\n\
		<td><a name=\"RealTimeOGLDraw\"></a>RTShader_OGLDraw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLDraw_1_0.html\">Softimage.OGLDraw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLMulti.Preset</td>\n\
		<td><a name=\"RealTimeOGLMulti\"></a>RTShader_OGLMulti Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLMulti_1_0.html\">Softimage.OGLMulti.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLParticle.Preset</td>\n\
		<td><a name=\"RealTimeOGLParticle\"></a>OpenGL Particle Shader Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLParticle_1_0.html\">Softimage.OGLParticle.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLShade.Preset</td>\n\
		<td><a name=\"RealTimeOGLShade\"></a>RTShader_OGLShade Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLShade_1_0.html\">Softimage.OGLShade.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLShadowMap.Preset</td>\n\
		<td><a name=\"RealTimeOGLShadowMap\"></a>OGLShadowMap Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLShadowMap_1_0.html\">Softimage.OGLShadowMap.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLT2D.Preset</td>\n\
		<td><a name=\"RealTimeOGLT2D\"></a>RTShader_OGLT2D Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLT2D_1_0.html\">Softimage.OGLT2D.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\OGLTCTrans.Preset</td>\n\
		<td><a name=\"RealTimeOGLTCTrans\"></a>RTShader_OGLTCTrans Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_OGLTCTrans_1_0.html\">Softimage.OGLTCTrans.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVBumpDraw.Preset</td>\n\
		<td><a name=\"RealTimenVBumpDraw\"></a>RTShader_nVBumpDraw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVBumpDraw_1_0.html\">Softimage.nVBumpDraw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVCubic.Preset</td>\n\
		<td><a name=\"RealTimenVCubic\"></a>RTShader_nVCubic Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVCubic_1_0.html\">Softimage.nVCubic.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVDraw.Preset</td>\n\
		<td><a name=\"RealTimenVDraw\"></a>RTShader_nVDraw Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVDraw_1_0.html\">Softimage.nVDraw.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVMeta.Preset</td>\n\
		<td><a name=\"RealTimenVMeta\"></a>RTShader_nVMeta Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVMeta_1_0.html\">Softimage.nVMeta.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVPPAtt.Preset</td>\n\
		<td><a name=\"RealTimenVPPAtt\"></a>RTShader_nVPPAtt Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVPPAtt_1_0.html\">Softimage.nVPPAtt.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVToon.Preset</td>\n\
		<td><a name=\"RealTimenVToon\"></a>RTShader_nVToon Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVToon_1_0.html\">Softimage.nVToon.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RealTime\\nVidiaShadowShader.Preset</td>\n\
		<td><a name=\"RealTimenVidiaShadowShader\"></a>nVidiaShadow Realtime Shader. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Softimage_nVidiaShadowShader_1_0.html\">Softimage.nVidiaShadowShader.1.0</a> shader definition reference page.<br /><br />For an example of how to use this preset, see the <a href=\"#!/url=./si_cmds/xgsRealTimeShaderPresets.html\">ConnectRTShader Example</a>		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
<hr width=\"100%\" />\n\
<h3>ConnectRTShader Example</h3>\n\
<div><p><a name=\"ConnectRTShader\"> </a><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function ConnectRTShader( in_preset )\n\
{\n\
	NewScene( null, false );\n\
	var obj = Application.ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" );\n\
	Application.Selection.SetAsText(obj);\n\
	var oShader = CreateShaderFromPreset(in_preset, \"Sources.Materials.DefaultLib.Scene_Material\");\n\
	SIConnectShaderToCnxPoint(oShader.FullName+\".out\", \n\
		\"Sources.Materials.DefaultLib.Scene_Material.realtime\", false);\n\
	if (!oShader) { return null; }\n\
	return (oShader.Type == \"XSICollection\") ? oShader(0) : oShader;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";