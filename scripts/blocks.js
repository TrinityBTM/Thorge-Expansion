//MISCELLANEOUS
//MISC EFFECTS
const NuclearBlastColorA = "ffa853";
const NuclearBlastColorB = "ff8a17";
const NuclearBlastEffectLifeTime = 120;

const NDBlast = newEffect(NuclearBlastEffectLifeTime, e => {
        
    Effects.shake(3.2, 3.2, e.x, e.y)   
    Draw.color(Color.valueOf(NuclearBlastColorA), Color.valueOf(NuclearBlastColorB), e.fout());
    Draw.alpha(e.fout() * 0.4);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-smoke", e.x, e.y, 400, 400);
    Draw.blend();
  
});


const NDBlast2 = newEffect(NuclearBlastEffectLifeTime, e2 => {

      Draw.color(Color.valueOf(NuclearBlastColorA), Color.valueOf(NuclearBlastColorB), e2.fslope());
      Draw.alpha(e2.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-nuke", e2.x, e2.y, 200, 200);
      Draw.blend();
      
      });
      
const NDBlast3 = newEffect(NuclearBlastEffectLifeTime, e3 => {

      Draw.color(Color.valueOf(NuclearBlastColorA), Color.valueOf(NuclearBlastColorB), e3.fslope());
      Draw.alpha(e3.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-windWoosh", e3.x, e3.y, e3.fin() * 1200, e3.fin() * 1200);
      Draw.blend();
      
      });     
      

const NDBlast4 = newEffect(NuclearBlastEffectLifeTime, e2 => {

      Draw.color(Color.valueOf(NuclearBlastColorA), Color.valueOf(NuclearBlastColorB), e2.fslope());
      Draw.alpha(e2.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-FlareWhite", e2.x, e2.y, 900, 900);
      Draw.blend();
      
      });          
 
const NDBlast5 = newEffect(60, e2 => {

      Draw.color(Color.valueOf("ffffff"));
      Draw.alpha(e2.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-flash", e2.x, e2.y, 5000, 5000);
      Draw.blend();
      
      });  
 
 
//NUCLEAR DETONATOR 
//NUCLEAR DETONATOR BULLET 
const detonatorBullet = extend(BombBulletType, {});
detonatorBullet.speed = 0;
detonatorBullet.damage = 1;
detonatorBullet.splashDamageRadius = 1200;
detonatorBullet.splashDamage = 1200;
detonatorBullet.incendAmount = 120;
detonatorBullet.lifetime = 1;
//detonatorBullet.hitSound = sounds.Nuke;
//detonatorBullet.killShooter = true;
 
 
//NUCLEAR DETONATOR BLOCK
const nuclearDetonator = extendContent(Block, "nuclear-detonator", {
    buildConfiguration(tile, table){
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            tile.configure(0)
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
    },
    configured(tile, value){
        if(tile.entity.cons.valid()){  
            Effects.effect(NDBlast, tile);
            Effects.effect(NDBlast2, tile);
            Effects.effect(NDBlast3, tile);
            Effects.effect(NDBlast4, tile); 
            Effects.effect(NDBlast5, tile);   
            
             for(var i = 0; i < 1; i++){
                Calls.createBullet(               
                detonatorBullet,
                Team.derelict,
                tile.drawx(), 
                tile.drawy(), 
                Mathf.random(0.2), 
                Mathf.random(0.2), 
                Mathf.random(0.2)
                )
            }
            //triggering consumption makes it use up the items it requires
            tile.entity.cons.trigger()
            tile.entity.kill()
        }
    }
})





//STORAGES SECTION

/*CORES TODO

const coreAtoma = extendContent(Block, "core-atom", {
    update(tile){}
});

const coreQuark = extendContent(Block, "core-quark", {
    update(tile){}
});

const coreElement = extendContent(Block, "core-element", {
    update(tile){}
});
*/





//PRODUCTION SECTION
//PRODUCTION EFFECTS
const ambientProductionSmoke = newEffect(120, e => {

      Draw.color(Color.valueOf("777777"));
      Draw.alpha(e.fslope() * 0.4);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-smoke", e.x, e.y, e.fin()*150, e.fin()*150);
      Draw.blend();
      
      });       
      
const ambientProductionBlueSmoke = newEffect(120, e => {

      Draw.color(Color.valueOf("7777dd"));
      Draw.alpha(e.fslope() * 0.4);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-smoke", e.x, e.y, e.fin()*80, e.fin()*80);
      Draw.blend();
      
      });       
            
            
//QUARRY DRILL      
const quarryDrill = extendContent(Drill, "quarry-drill", {});
quarryDrill.updateEffect = ambientProductionSmoke;


//TEMPER PRESS
const temperPress = extendContent(GenericSmelter, "temper-press", {});
temperPress.updateEffect = ambientProductionBlueSmoke;





//TURRETS SECTION
//TURRET EFFECTS
const LargeTurretFlare = newEffect(30, e => {

      Draw.color(Color.valueOf("77cbf909"));
      Draw.alpha(e.fout() * 0.3);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-smoke", e.x, e.y, e.fin()*800*Mathf.random(0.5, 1.0), e.fin()*800*Mathf.random(0.5, 1.0));
      Draw.blend();
      
      });       
      
const LargeTurretFlare2 = newEffect(30, e => {

      Draw.color(Color.valueOf("77cbf909"));
      Draw.alpha(e.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-smoke", e.x, e.y, 50, 50);
      Draw.blend();
      
      });          
      
const LargeTurretFlare3 = newEffect(30, e => {

      Draw.color(Color.valueOf("77cbf909"));
      Draw.alpha(e.fout() * 1);
      Draw.blend(Blending.additive);
      Draw.rect("thorge-ex-FlareWhite", e.x, e.y, 800*e.fin()*Mathf.random(0.5, 1.0), 800*e.fin()*Mathf.random(0.5, 1.0));
      Draw.blend();
      
      });      


//PRISMANCER TURRET
//credits to Eye of darkness for the original laser bullet
//modified to have effects by TrinityXyz            
 const prismancerlaser = extend(BasicBulletType, {

    update: function(b){
                 
        Effects.shake(1.5, 1.5, b.x, b.y);
        if(b.timer.get(1, 8)){
            Effects.effect(LargeTurretFlare, b.x, b.y, b.rot());
            Effects.effect(LargeTurretFlare2, b.x, b.y, b.rot());
            Effects.effect(LargeTurretFlare3, b.x, b.y, b.rot());
            Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), 480.0, true);
        }
    },


    draw: function(b){

        const colors = [Color.valueOf("77cbf955"), Color.valueOf("77cbf9aa"), Color.valueOf("77cbf9"), Color.valueOf("ffffff")];
        const tscales = [1, 0.7, 0.5, 0.2];
        const strokes = [3.2, 2.1, 1.1, 0.8];
        const lenscales = [1, 1.12, 1.15, 1.17];
        for(var s = 0; s < 4; s++){
            Draw.color(colors[s]);
            for(var i = 0; i < 4; i++){
            
                Tmp.v1.trns(b.rot() + 180, (lenscales[i] - 1) * 35);
                Lines.stroke((9 + Mathf.absin(Time.time(), 0.8, 1.5)) * b.fout() * strokes[s] * tscales[i]);
                Lines.lineAngle(b.x + Tmp.v1.x , b.y + Tmp.v1.y, b.rot(), 480.0 * b.fout() * lenscales[i], CapStyle.none);
            }
        }
    }
});

prismancerlaser.speed = 0.001;
prismancerlaser.damage = 100;
prismancerlaser.lifetime = 60,
prismancerlaser.hitEffect = Fx.hitLancer;
prismancerlaser.despawnEffect = Fx.none;
prismancerlaser.hitSize = 5;
prismancerlaser.drawSize = 800;
prismancerlaser.pierce = true;


//PRISMANCER TURRET BLOCK
const prismancerTurret = extendContent(LaserTurret, "prismancer-turret", {
        draw: function(tile){
		     Draw.rect(Core.atlas.find("thorge-ex-block-7"), tile.drawx(), tile.drawy());
	  },
		
		generateIcons: function(){
		return [
			Core.atlas.find("thorge-ex-block-7"),
			Core.atlas.find("thorge-ex-prismancer-turret")
		];
	}
});
prismancerTurret.shootType = prismancerlaser;

//BALLAST TURRET BLOCK
const ballastTurret = extendContent(ItemTurret, "ballast-turret", {
        draw: function(tile){
		     Draw.rect(Core.atlas.find("thorge-ex-block-5"), tile.drawx(), tile.drawy());
	  },
		
		generateIcons: function(){
		return [
			Core.atlas.find("thorge-ex-block-5"),
			Core.atlas.find("thorge-ex-ballast-turret")
		];
	}
});

//COLLIDRON TURRET BLOCK
const collidronTurret = extendContent(PowerTurret, "collidron-minigun", {
        draw: function(tile){
		     Draw.rect(Core.atlas.find("thorge-ex-block-5"), tile.drawx(), tile.drawy());
	  },
		
		generateIcons: function(){
		return [
			Core.atlas.find("thorge-ex-block-5"),
			Core.atlas.find("thorge-ex-collidron-minigun")
		];
	}
});


//DEFENSES SECTION
//MEND WALL SPECIFIC EFFECTS
const cooldown = 30;
const MendWallHealSmall = newEffect(60, e => {
    Draw.color(Color.valueOf("6dff5d"), Color.valueOf("47a73d"), e.fslope());
    Draw.alpha(e.fout() * 0.5)
    Lines.stroke(2 * e.fslope());
    Draw.blend(Blending.additive);
    Lines.square(e.x, e.y, 5, e.fout());
    Draw.blend();
});


const MendWallHealLarge = newEffect(60, e => {
    Draw.color(Color.valueOf("6dff5d"), Color.valueOf("47a73d"), e.fout());
    Draw.alpha(e.fout() * 0.5)
    Lines.stroke(2 * e.fslope());
    Draw.blend(Blending.additive);
    Lines.square(e.x, e.y, 10, e.fout());
    Draw.blend();
});


//MENDING WALL SMALL
const WallMending = extendContent(Wall, "mending-wall", {
    update(tile){
        if ( (tile.entity.health() < tile.entity.maxHealth()) && (tile.entity.timer.get(0, cooldown)) ) {

                   tile.entity.health += 6;
                   Effects.effect(MendWallHealSmall, tile);
                   
            }
      }
});


//MENDING WALL LARGE
const WallMendingLarge = extendContent(Wall, "mending-wall-large", {
    update(tile){
         if ( (tile.entity.health() < tile.entity.maxHealth()) && (tile.entity.timer.get(0, cooldown)) ) {

                   tile.entity.health += 12;
                   Effects.effect(MendWallHealLarge, tile);
                   
            }
      }
});
