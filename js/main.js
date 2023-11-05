$(function() {
	var app      = null;
	// canvasの基本サイズ
	var width_s  = 1920;
	var height_s = 1080;
	// scaleの基本サイズ
	var scale    = 1.5;
	
	// セレクトボックスが切り替わったら発動
	$("#no_select_ratio").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		const val = $("#no_select_ratio").val(); // 選択したselectのvalue値を変数に格納
		
		switch(val)
		{
			case "1_1":
				width_s  = 1080;
				height_s = 1080;
				break;
			case "2_1":
				width_s  = 2160;
				height_s = 1080;
				break;
			case "3_2":
				width_s  = 1620;
				height_s = 1080;
				break;
			case "4_3":
				width_s  = 1440;
				height_s = 1080;
				break;
			case "5_4":
				width_s  = 1350;
				height_s = 1080;
				break;
			case "7:3":
				width_s  = 2520;
				height_s = 1080;
				break;
			case "13_6":
				width_s  = 2340;
				height_s = 1080;
				break;
			case "16_9":
				width_s  = 1920;
				height_s = 1080;
				break;
			case "16_10":
				width_s  = 1728;
				height_s = 1080;
				break;
			case "17_9":
				width_s  = 2032;
				height_s = 1080;
				break;
			case "18_9":
				width_s  = 2160;
				height_s = 1080;
				break;
			case "19_9":
				width_s  = 2280;
				height_s = 1080;
				break;
			case "20_9":
				width_s  = 2400;
				height_s = 1080;
				break;
			case "22_9":
				width_s  = 2640;
				height_s = 1080;
				break;
			default:
				break;
		}
		app = new PIXI.Application({
			backgroundAlpha: 0,
			backgroundColor: 0xffffff,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
			preserveDrawingBuffer: true,
		})
	});
	
	// セレクトボックスが切り替わったら発動
	$("#no_select_scale").change(function()
	{
		const val = $("#no_select_scale").val(); // 選択したselectのvalue値を変数に格納
		
		switch(val)
		{
			case "1":
				scale = 1;
				break;
			case "1_1":
				scale = 1.1;
				break;
			case "1_2":
				scale = 1.2;
				break;
			case "1_3":
				scale = 1.3;
				break;
			case "1_4":
				scale = 1.4;
				break;
			case "1_5":
				scale = 1.5;
				break;
			case "1_6":
				scale = 1.6;
				break;
			case "1_7":
				scale = 1.7;
				break;
			case "1_8":
				scale = 1.8;
				break;
			case "1_9":
				scale = 1.9;
				break;
			case "2":
				scale = 2;
				break;
			default:
				break;
		}
	});
	
	// セレクトボックスが切り替わったら発動
	$("#no_select_test").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		})
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const bg_url = 'spine/Cool/185/SP3S201308/SP3S201308_eff2.skel';
		
		// ここでSkeleton情報を読み込んでいる
		app.loader
		.add('bg', bg_url)
		.load(onAssetsLoaded);
		
		app.stage.interactive = true;
		
		function onAssetsLoaded(loader, res)
		{
			// 読み込んだSkeleton情報を開いて生成
			const bg = new PIXI.spine.Spine(res.bg.spineData);
			
			// 表示位置の調整
			bg.x = app.screen.width / 2;
			bg.y = app.screen.height;
			
			// canvas内で表示する大きさ
			bg.scale.set(scale);
			
			// 表示するアニメーション
			bg.state.setAnimation(0, '_home', true);
			
			app.stage.addChild(bg);
		}
	});
	
	// セレクトボックスが切り替わったら発動
	$("#no_select_cute").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		})
		
		const val     = $("#no_select_cute").val(); // 選択したselectのvalue値を変数に格納
		const bg_c    = val + "_bg";
		const eff1_c  = val + "_eff1";
		const eff2_c  = val + "_eff2";
		const chara_c = val + "_chara";
		const fg_c    = val + "_fg";
		
		for(var i in List_Cute)
		{
			// valがfile_nameと同じか？
			if(List_Cute[i].file_name == val)
			{
				// chr_idを取得
				var chr_id = List_Cute[i].chr_id;
				//console.log(chr_id);
			}
		}
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const bg_url    = 'spine/Cute/' + chr_id + "/" + val + '/' + bg_c + '.json';
		const eff1_url  = 'spine/Cute/' + chr_id + "/" + val + '/' + eff1_c + '.json';
		const eff2_url  = 'spine/Cute/' + chr_id + "/" + val + '/' + eff2_c + '.json';
		const chara_url = 'spine/Cute/' + chr_id + "/" + val + '/' + chara_c + '.json';
		const fg_url    = 'spine/Cute/' + chr_id + "/" + val + '/' + fg_c + '.json';
		
		// ここでSkeleton情報を読み込んでいる
		app.loader
		.add('bg',    bg_url)
		.add('eff1',  eff1_url)
		.add('eff2',  eff2_url)
		.add('chara', chara_url)
		.add('fg',    fg_url)
		.load(onAssetsLoaded);
		
		app.stage.interactive = true;
		
		function onAssetsLoaded(loader, res)
		{
			// 読み込んだSkeleton情報を開いて生成
			const bg = new PIXI.spine.Spine(res.bg.spineData);
			const eff1 = new PIXI.spine.Spine(res.eff1.spineData);
			const eff2 = new PIXI.spine.Spine(res.eff2.spineData);
			const chara = new PIXI.spine.Spine(res.chara.spineData);
			const fg = new PIXI.spine.Spine(res.fg.spineData);
			
			// 表示位置の調整
			bg.x = app.screen.width / 2;
			bg.y = app.screen.height;
			eff1.x = app.screen.width / 2;
			eff1.y = app.screen.height;
			eff2.x = app.screen.width / 2;
			eff2.y = app.screen.height;
			chara.x = app.screen.width / 2;
			chara.y = app.screen.height;
			fg.x = app.screen.width / 2;
			fg.y = app.screen.height;
			
			// canvas内で表示する大きさ
			bg.scale.set(scale);
			eff1.scale.set(scale);
			eff2.scale.set(scale);
			chara.scale.set(scale);
			fg.scale.set(scale);
			
			// 表示するアニメーション
			bg.state.setAnimation(0, '_home', true);
			eff1.state.setAnimation(0, '_home', true);
			eff2.state.setAnimation(0, '_home', true);
			chara.state.setAnimation(0, '_home', true);
			fg.state.setAnimation(0, '_home', true);
			
			// 表示する順番
			app.stage.addChild(bg);
			app.stage.addChild(eff2);
			app.stage.addChild(chara);
			app.stage.addChild(fg);
			app.stage.addChild(eff1);
		}
	});
	
	$("#no_select_cool").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		})
		
		const val     = $("#no_select_cool").val(); // 選択したselectのvalue値を変数に格納
		const bg_c    = val + "_bg";
		const eff1_c  = val + "_eff1";
		const eff2_c  = val + "_eff2";
		const chara_c = val + "_chara";
		const fg_c    = val + "_fg";
		
		for(var i in List_Cool)
		{
			// valがfile_nameと同じか？
			if(List_Cool[i].file_name == val)
			{
				// chr_idを取得
				var chr_id = List_Cool[i].chr_id;
				//console.log(chr_id);
			}
		}
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const bg_url    = 'spine/Cool/' + chr_id + "/" + val + '/' + bg_c + '.json';
		const eff1_url  = 'spine/Cool/' + chr_id + "/" + val + '/' + eff1_c + '.json';
		const eff2_url  = 'spine/Cool/' + chr_id + "/" + val + '/' + eff2_c + '.json';
		const chara_url = 'spine/Cool/' + chr_id + "/" + val + '/' + chara_c + '.json';
		const fg_url    = 'spine/Cool/' + chr_id + "/" + val + '/' + fg_c + '.json';
		
		// ここでSkeleton情報を読み込んでいる
		app.loader
		.add('bg',    bg_url)
		.add('eff1',  eff1_url)
		.add('eff2',  eff2_url)
		.add('chara', chara_url)
		.add('fg',    fg_url)
		.load(onAssetsLoaded);
		
		app.stage.interactive = true;
		
		function onAssetsLoaded(loader, res)
		{
			// 読み込んだSkeleton情報を開いて生成
			const bg = new PIXI.spine.Spine(res.bg.spineData);
			const eff1 = new PIXI.spine.Spine(res.eff1.spineData);
			const eff2 = new PIXI.spine.Spine(res.eff2.spineData);
			const chara = new PIXI.spine.Spine(res.chara.spineData);
			const fg = new PIXI.spine.Spine(res.fg.spineData);
			
			// 表示位置の調整
			bg.x = app.screen.width / 2;
			bg.y = app.screen.height;
			eff1.x = app.screen.width / 2;
			eff1.y = app.screen.height;
			eff2.x = app.screen.width / 2;
			eff2.y = app.screen.height;
			chara.x = app.screen.width / 2;
			chara.y = app.screen.height;
			fg.x = app.screen.width / 2;
			fg.y = app.screen.height;
			
			// canvas内で表示する大きさ
			bg.scale.set(scale);
			eff1.scale.set(scale);
			eff2.scale.set(scale);
			chara.scale.set(scale);
			fg.scale.set(scale);
			
			// 表示するアニメーション
			bg.state.setAnimation(0, '_home', true);
			eff1.state.setAnimation(0, '_home', true);
			eff2.state.setAnimation(0, '_home', true);
			chara.state.setAnimation(0, '_home', true);
			fg.state.setAnimation(0, '_home', true);
			
			// 表示する順番
			app.stage.addChild(bg);
			app.stage.addChild(eff2);
			app.stage.addChild(chara);
			app.stage.addChild(fg);
			app.stage.addChild(eff1);
		}
	});
	
	$("#no_select_passion").change(function()
	{
		// 既にあるキャンバスと置き換える
		$('<canvas id="spine_view"></canvas>').replaceAll('#spine_view');
		
		app = new PIXI.Application({
			backgroundAlpha: 0,
			width: width_s,
			height: height_s,
			resolution: window.devicePixelRatio || 1,
			view: document.getElementById('spine_view'),
			autoResize: true,
		})
		
		const val     = $("#no_select_passion").val(); // 選択したselectのvalue値を変数に格納
		const bg_c    = val + "_bg";
		const eff1_c  = val + "_eff1";
		const eff2_c  = val + "_eff2";
		const chara_c = val + "_chara";
		const fg_c    = val + "_fg";
		
		for(var i in List_Passion)
		{
			// valがfile_nameと同じか？
			if(List_Passion[i].file_name == val)
			{
				// chr_idを取得
				var chr_id = List_Passion[i].chr_id;
				//console.log(chr_id);
			}
		}
		
		document.getElementById("spine_area").appendChild(app.view);
		
		const bg_url    = 'spine/Passion/' + chr_id + "/" + val + '/' + bg_c + '.json';
		const eff1_url  = 'spine/Passion/' + chr_id + "/" + val + '/' + eff1_c + '.json';
		const eff2_url  = 'spine/Passion/' + chr_id + "/" + val + '/' + eff2_c + '.json';
		const chara_url = 'spine/Passion/' + chr_id + "/" + val + '/' + chara_c + '.json';
		const fg_url    = 'spine/Passion/' + chr_id + "/" + val + '/' + fg_c + '.json';
		
		// ここでSkeleton情報を読み込んでいる
		app.loader
		.add('bg',    bg_url)
		.add('eff1',  eff1_url)
		.add('eff2',  eff2_url)
		.add('chara', chara_url)
		.add('fg',    fg_url)
		.load(onAssetsLoaded);
		
		app.stage.interactive = true;
		
		function onAssetsLoaded(loader, res)
		{
			// 読み込んだSkeleton情報を開いて生成
			const bg = new PIXI.spine.Spine(res.bg.spineData);
			const eff1 = new PIXI.spine.Spine(res.eff1.spineData);
			const eff2 = new PIXI.spine.Spine(res.eff2.spineData);
			const chara = new PIXI.spine.Spine(res.chara.spineData);
			const fg = new PIXI.spine.Spine(res.fg.spineData);
			
			// 表示位置の調整
			bg.x = app.screen.width / 2;
			bg.y = app.screen.height;
			eff1.x = app.screen.width / 2;
			eff1.y = app.screen.height;
			eff2.x = app.screen.width / 2;
			eff2.y = app.screen.height;
			chara.x = app.screen.width / 2;
			chara.y = app.screen.height;
			fg.x = app.screen.width / 2;
			fg.y = app.screen.height;
			
			// canvas内で表示する大きさ
			bg.scale.set(scale);
			eff1.scale.set(scale);
			eff2.scale.set(scale);
			chara.scale.set(scale);
			fg.scale.set(scale);
			
			// 表示するアニメーション
			bg.state.setAnimation(0, '_home', true);
			eff1.state.setAnimation(0, '_home', true);
			eff2.state.setAnimation(0, '_home', true);
			chara.state.setAnimation(0, '_home', true);
			fg.state.setAnimation(0, '_home', true);
			
			// 表示する順番
			app.stage.addChild(bg);
			app.stage.addChild(eff2);
			app.stage.addChild(chara);
			app.stage.addChild(fg);
			app.stage.addChild(eff1);
		}
	});
	
	// 初期表示用の指定した範囲のランダム数値
	var min      = 0;
	var max      = 15;
	var decision = Math.floor( Math.random() * (max + 1 - min) ) + min;
	
	app = new PIXI.Application({
		backgroundAlpha: 0,
		width: width_s,
		height: height_s,
		resolution: window.devicePixelRatio || 1,
		view: document.getElementById('spine_view'),
		autoResize: true,
		preserveDrawingBuffer: true
	})
	
	document.getElementById("spine_area").appendChild(app.view);
	
	const bg_url    = 'spine/' + List_Random[decision].attribute + '/' + List_Random[decision].chr_id + '/'
	 + List_Random[decision].file_name + '/' + List_Random[decision].file_name + '_bg.json';
	const eff1_url  = 'spine/' + List_Random[decision].attribute + '/' + List_Random[decision].chr_id + '/'
	 + List_Random[decision].file_name + '/' + List_Random[decision].file_name + '_eff1.json';
	const eff2_url  = 'spine/' + List_Random[decision].attribute + '/' + List_Random[decision].chr_id + '/'
	 + List_Random[decision].file_name + '/' + List_Random[decision].file_name + '_eff2.json';
	const chara_url = 'spine/' + List_Random[decision].attribute + '/' + List_Random[decision].chr_id + '/'
	 + List_Random[decision].file_name + '/' + List_Random[decision].file_name + '_chara.json';
	const fg_url    = 'spine/' + List_Random[decision].attribute + '/' + List_Random[decision].chr_id + '/'
	 + List_Random[decision].file_name + '/' + List_Random[decision].file_name + '_fg.json';
	
	// ここでSkeleton情報を読み込んでいる
	app.loader
	.add('bg',    bg_url)
	.add('eff1',  eff1_url)
	.add('eff2',  eff2_url)
	.add('chara', chara_url)
	.add('fg',    fg_url)
	.load(onAssetsLoaded);
	
	app.stage.interactive = true;
	
	function onAssetsLoaded(loader, res)
	{
		// 読み込んだSkeleton情報を開いて生成
		const bg = new PIXI.spine.Spine(res.bg.spineData);
		const eff1 = new PIXI.spine.Spine(res.eff1.spineData);
		const eff2 = new PIXI.spine.Spine(res.eff2.spineData);
		const chara = new PIXI.spine.Spine(res.chara.spineData);
		const fg = new PIXI.spine.Spine(res.fg.spineData);
		
		// 表示位置の調整
		bg.x = app.screen.width / 2;
		bg.y = app.screen.height;
		eff1.x = app.screen.width / 2;
		eff1.y = app.screen.height;
		eff2.x = app.screen.width / 2;
		eff2.y = app.screen.height;
		chara.x = app.screen.width / 2;
		chara.y = app.screen.height;
		fg.x = app.screen.width / 2;
		fg.y = app.screen.height;
		
		// canvas内で表示する大きさ
		bg.scale.set(scale);
		eff1.scale.set(scale);
		eff2.scale.set(scale);
		chara.scale.set(scale);
		fg.scale.set(scale);
		
		// 表示するアニメーション
		bg.state.setAnimation(0, '_home', true);
		eff1.state.setAnimation(0, '_home', true);
		eff2.state.setAnimation(0, '_home', true);
		chara.state.setAnimation(0, '_home', true);
		fg.state.setAnimation(0, '_home', true);
		
		// 表示する順番
		app.stage.addChild(bg);
		app.stage.addChild(eff2);
		app.stage.addChild(chara);
		app.stage.addChild(fg);
		app.stage.addChild(eff1);
	}
});