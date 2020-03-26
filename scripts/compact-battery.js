
const compactBatteryBullet = extend(BombBulletType, {});
compactBatteryBullet.speed = 0;
compactBatteryBullet.damage = 1;
compactBatteryBullet.splashDamageRadius = 300;
compactBatteryBullet.splashDamage = 300;
compactBatteryBullet.lifetime = 60;
compactBatteryBullet.fragBullets = 20;
compactBatteryBullet.fragBullet = Bullets.lightning;


const ElectricBlastColorA = "a9d8ff09";
const ElectricBlastColorB = "a9d8ff09";
const ElectricBlastEffectLifeTime = 120;

const ElectricExplosionPart1 = newEffect(ElectricBlastEffectLifeTime, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 1);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-smoke", e.x, e.y, 400, 400);
    Draw.blend();

});

const ElectricExplosionPart2 = newEffect(20, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 0.5);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-electricWoosh", e.x, e.y, e.fin() * 400, e.fin() * 400);
    Draw.blend();

});

const ElectricExplosionPart3 = newEffect(ElectricBlastEffectLifeTime, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 1);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-flash", e.x, e.y, 100, 100);
    Draw.blend();

});

const ElectricExplosionPart4 = newEffect(ElectricBlastEffectLifeTime, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 1);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-FlareWhite", e.x, e.y, 750, 750);
    Draw.blend();

});

const compactBattery = extendContent(Battery, "compact-battery", {
    onDestroyed: function (tile) {

        Effects.effect(ElectricExplosionPart1, tile);
        Effects.effect(ElectricExplosionPart2, tile);
        Effects.effect(ElectricExplosionPart3, tile);
        Effects.effect(ElectricExplosionPart4, tile);
        Calls.createBullet(               
                compactBatteryBullet,
                Team.derelict,
                tile.drawx(), 
                tile.drawy(), 
                Mathf.random(0), 
                Mathf.random(0), 
                Mathf.random(0)
                );
                
    }
});