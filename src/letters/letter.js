export default class Letter{
	constructor(label) {
		this.label = label; // string
		
		this.graph = null // pointer to phaser.group
		this._label = null // pointer to phaser.text
	}
	
	set text(val) {
		this.label = val;
		this._label.setText(this.label);
	}
	
	render(phaser, asset = 'letter_empty') {
		let bmp = phaser.add.bitmapData(32, 32);
		bmp.draw(asset, 0, 0, 32, 32);
		
		let style = { font: "24px Arial", fill: "#000000", align: "center" };
		//let btn = phaser.add.button(phaser.world.centerX - 95, phaser.world.centerY, 'gui_game_btn', ()=>{phaser.state.start('game');}, this);
		let group = phaser.add.group();
		//group.inputEnableChildren = true;
		group.create(0, 0, bmp);
		
		this._label =  phaser.add.text(7, 3, this.label, style, group);
		this.graph = group;
		
		return group; //48
	}
}