package net.generic.fuelmod;

import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.registry.FuelRegistry;
import net.minecraft.block.Blocks;

public class FuelMod implements ModInitializer {
    @Override
    public void onInitialize() {
        FuelRegistry.INSTANCE.add(Blocks.COAL_BLOCK, 6400);
    }
}
