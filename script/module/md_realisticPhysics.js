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

	game.Module.define('module_realisticPhysics')
		.data({
			z: 0,
			spdZ: 0,
			accZ: 0,
			gvtZ: GRAVITY_Z,

			spdX: 0,

			projection: 0,
			isJumping: false,

			facingLeft: true
		})
		.onUpdate(function(self, s, game) {
			var camera = game.camera;

			if (this.projection > 0) {
				if (this.z > 0) {
					self.x += this.spdX;
				}
				this.projection --;

				if (this.spdX > 0) this.facingLeft = true;
				else if (this.spdX < 0) this.facingLeft = false;

			} else {
				this.projection = 0;
				this.spdX = 0;
			}

			if (self.x < camera.x) self.x = camera.x;
			if (self.x2 >= camera.x2) self.x = camera.x2 - self.width;

			this.spdZ += this.accZ;
			this.accZ = 0;

			this.z += this.spdZ;

			if (this.z <= 0) {
				this.isJumping = false;
				this.z = 0;
				this.spdZ = 0;
			} else {
				this.isJumping = true;
				this.spdZ -=  this.gvtZ;
			}

			self.spriteDeltaY = -this.z;
		})

})();