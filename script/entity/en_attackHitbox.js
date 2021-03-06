/**
 * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *
 *	 Copyright (C) 2015 hkelf <hugo.kelfani@gmail.com> 
 *
 *	 Everyone is permitted to copy and distribute verbatim or modified 
 *	 copies of this license document, and changing it is allowed as long 
 *	 as the name is changed. 
 *
 *	            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 *	   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
 *
 *	  0. You just DO WHAT THE FUCK YOU WANT TO.
 */

(function() {

	game.Entity.define('entity_attackHitbox')
		.sprite('sprite_debug3232y')
		.hitbox(Cassava.Hitbox.RECTANGLE_TYPE, {
			width: 32,
			height: 32
		})

		.data({
			dmg: 1,
			weaponDmg: 0,
			type: null,
			stab: false
		})
		.onUpdate(function(self) {
			self.free();
		})

		.onCreate(function(args) {
			var data = this.module();

			this.z = 2;
			data.type = args.type || 'hit';
			data.dmg = args.dmg;
			data.weaponDmg = args.weaponDmg || 0;
			data.launcher = args.launcher;
			data.projection = !!args.projection;
			data.stab = !!args.stab;

			//TMP
			this.x = args.x;
			this.y = args.y;
		})
		.whenHitsEntities(['entity_player', 'entity_enemy1', 'entity_enemy2', 'entity_enemy3', 'entity_boss1'], applyDmg)
		.whenHitsEntities(['entity_caddy'], applyPenalty)
})();