package net.hydra2s.crop.code;

//
import net.fabricmc.fabric.api.registry.FuelRegistry;
import net.minecraft.block.Blocks;

//
public class FuelMod {

    public FuelMod() {
        this.changeCoalFuelTime(6400);
    }

    // TODO: make changeable by config
    public void changeCoalFuelTime(int ticks) {
        FuelRegistry.INSTANCE.remove(Blocks.COAL_BLOCK);
        FuelRegistry.INSTANCE.add(Blocks.COAL_BLOCK, ticks);
    }

}
