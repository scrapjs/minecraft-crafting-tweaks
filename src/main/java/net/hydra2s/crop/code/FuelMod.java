package net.hydra2s.crop.code;

//
import net.fabricmc.fabric.api.registry.FuelRegistry;
import net.minecraft.block.Blocks;

//
public class FuelMod {

    public FuelMod() {
        FuelRegistry.INSTANCE.add(Blocks.COAL_BLOCK, 6400);
    }

}
