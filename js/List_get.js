// Cute Get
for(var i in List_Cute)
{
	if((Number(List_Cute[i].no) % 2) != 0)
	{
		console.log(List_Cute[i].file_name + " SSR　" + List_Cute[i].chr_name + " " + List_Cute[i].card_name);
		$("#no_select_cute").append($('<option value="' + List_Cute[i].file_name + '">'
		                                                + List_Cute[i].chr_id + ' SSR　'
		                                                + List_Cute[i].chr_name + ' '
		                                                + List_Cute[i].card_name + '</option>'));
	} else {
		console.log(List_Cute[i].file_name + " SSR+ " + List_Cute[i].chr_name + " " + List_Cute[i].card_name);
		$("#no_select_cute").append($('<option value="' + List_Cute[i].file_name + '">'
		                                                + List_Cute[i].chr_id + ' SSR+ '
		                                                + List_Cute[i].chr_name + ' '
		                                                + List_Cute[i].card_name + '</option>'));
	}
}
// Cool Get
for(var i in List_Cool)
{
	if((Number(List_Cool[i].no) % 2) != 0)
	{
		console.log(List_Cool[i].file_name + " SSR　" + List_Cool[i].chr_name + " " + List_Cool[i].card_name);
		$("#no_select_cool").append($('<option value="' + List_Cool[i].file_name + '">'
		                                                + List_Cool[i].chr_id + ' SSR　'
		                                                + List_Cool[i].chr_name + ' '
		                                                + List_Cool[i].card_name + '</option>'));
	} else {
		console.log(List_Cool[i].file_name + " SSR+ " + List_Cool[i].chr_name + " " + List_Cool[i].card_name);
		$("#no_select_cool").append($('<option value="' + List_Cool[i].file_name + '">'
		                                                + List_Cool[i].chr_id + ' SSR+ '
		                                                + List_Cool[i].chr_name + ' '
		                                                + List_Cool[i].card_name + '</option>'));
	}
}
// Passion Get
for(var i in List_Passion)
{
	if((Number(List_Passion[i].no) % 2) != 0)
	{
		console.log(List_Passion[i].file_name + " SSR　" + List_Passion[i].chr_name + " " + List_Passion[i].card_name);
		$("#no_select_passion").append($('<option value="' + List_Passion[i].file_name + '">'
		                                                   + List_Passion[i].chr_id + ' SSR　'
		                                                   + List_Passion[i].chr_name + ' '
		                                                   + List_Passion[i].card_name + '</option>'));
	} else {
		console.log(List_Passion[i].file_name + " SSR+ " + List_Passion[i].chr_name + " " + List_Passion[i].card_name);
		$("#no_select_passion").append($('<option value="' + List_Passion[i].file_name + '">'
		                                                   + List_Passion[i].chr_id + ' SSR+ '
		                                                   + List_Passion[i].chr_name + ' '
		                                                   + List_Passion[i].card_name + '</option>'));
	}
}