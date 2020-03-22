const ElectricBlastColorA = "77cbf909";
const ElectricBlastColorB = "77cbf909";
const ElectricBlastEffectLifeTime = 120;

const ElectricExplosionPart1 = newEffect(ElectricBlastEffectLifeTime, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 1);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-smoke", e.x, e.y, 400, 400);
    Draw.blend();

});

const ElectricExplosionPart2 = newEffect(ElectricBlastEffectLifeTime, e => {

    Draw.color(Color.valueOf(ElectricBlastColorA), Color.valueOf(ElectricBlastColorB), e.fslope());
    Draw.alpha(e.fout() * 0.5);
    Draw.blend(Blending.additive);
    Draw.rect("thorge-ex-electricWoosh", e.x, e.y, e.fin() * 400, e.fin() * 400);
    Draw.blend();

});

const compactBattery = extendContent(Battery, "compact-battery", {
    onDestroyed: function (tile) {

        Effects.effect(ElectricExplosionPart1, tile);
        Effects.effect(ElectricExplosionPart2, tile);

    }
});